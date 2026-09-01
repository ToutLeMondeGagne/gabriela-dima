<?php
/**
 * Contact form handler — sends an email via Resend API.
 *
 * SETUP:
 *  1. Replace RESEND_API_KEY with your key from https://resend.com → API Keys
 *  2. Replace TO_EMAIL with Gabriela's real address once confirmed
 *  3. Replace FROM_EMAIL once you verify a domain in Resend
 *     (until then, "onboarding@resend.dev" is the only allowed sender)
 */

require_once __DIR__ . '/secrets.php';
define('TO_EMAIL',       'gdimacpa@gmail.com');
define('FROM_EMAIL',     'onboarding@resend.dev');

header('Content-Type: application/json');

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['error' => 'Method not allowed']);
    exit;
}

$body = json_decode(file_get_contents('php://input'), true);

$nom        = trim($body['nom']        ?? '');
$email      = trim($body['email']      ?? '');
$entreprise = trim($body['entreprise'] ?? '');
$telephone  = trim($body['telephone']  ?? '');
$message    = trim($body['message']    ?? '');

if (!$nom || !$email || !$entreprise || !$message) {
    http_response_code(400);
    echo json_encode(['error' => 'Champs obligatoires manquants.']);
    exit;
}

if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    http_response_code(400);
    echo json_encode(['error' => 'Adresse courriel invalide.']);
    exit;
}

$html = "
<div style='font-family:sans-serif;max-width:600px;margin:0 auto;color:#0f172a;'>
  <h2 style='margin-bottom:24px;'>Nouvelle demande de consultation</h2>
  <table style='width:100%;border-collapse:collapse;'>
    <tr>
      <td style='padding:8px 0;font-weight:600;width:140px;'>Nom</td>
      <td style='padding:8px 0;'>".htmlspecialchars($nom)."</td>
    </tr>
    <tr>
      <td style='padding:8px 0;font-weight:600;'>Courriel</td>
      <td style='padding:8px 0;'><a href='mailto:".htmlspecialchars($email)."'>".htmlspecialchars($email)."</a></td>
    </tr>
    <tr>
      <td style='padding:8px 0;font-weight:600;'>Entreprise</td>
      <td style='padding:8px 0;'>".htmlspecialchars($entreprise)."</td>
    </tr>
    <tr>
      <td style='padding:8px 0;font-weight:600;'>Téléphone</td>
      <td style='padding:8px 0;'>".($telephone ? htmlspecialchars($telephone) : '—')."</td>
    </tr>
  </table>
  <hr style='margin:24px 0;border:none;border-top:1px solid #e2e8f0;'/>
  <h3 style='margin-bottom:12px;'>Message</h3>
  <p style='white-space:pre-wrap;line-height:1.6;'>".htmlspecialchars($message)."</p>
  <hr style='margin:24px 0;border:none;border-top:1px solid #e2e8f0;'/>
  <p style='font-size:12px;color:#94a3b8;'>Envoyé depuis le formulaire de contact — gabrieladima.com</p>
</div>
";

$payload = json_encode([
    'from'     => FROM_EMAIL,
    'to'       => [TO_EMAIL],
    'reply_to' => $email,
    'subject'  => "Demande de consultation — $nom ($entreprise)",
    'html'     => $html,
]);

$ch = curl_init('https://api.resend.com/emails');
curl_setopt_array($ch, [
    CURLOPT_RETURNTRANSFER => true,
    CURLOPT_POST           => true,
    CURLOPT_POSTFIELDS     => $payload,
    CURLOPT_HTTPHEADER     => [
        'Authorization: Bearer ' . RESEND_API_KEY,
        'Content-Type: application/json',
    ],
]);

$response = curl_exec($ch);
$httpCode = curl_getinfo($ch, CURLINFO_HTTP_CODE);
curl_close($ch);

if ($httpCode >= 200 && $httpCode < 300) {
    echo json_encode(['success' => true]);
} else {
    error_log("[contact.php] Resend error $httpCode: $response");
    http_response_code(500);
    echo json_encode(['error' => "Échec de l'envoi. Veuillez réessayer."]);
}
