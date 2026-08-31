import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { Send, CheckCircle, AlertCircle, Calendar, Mail, Phone, Loader2 } from "lucide-react";
import { CONTACT } from "@/data/contact";

interface FormFields {
  nom: string;
  email: string;
  entreprise: string;
  telephone: string;
  message: string;
}

type FieldErrors = Partial<Record<keyof FormFields, string>>;
type Status = "idle" | "submitting" | "success" | "error";

const EMPTY_FORM: FormFields = {
  nom: "",
  email: "",
  entreprise: "",
  telephone: "",
  message: "",
};

function validate(form: FormFields): FieldErrors {
  const errors: FieldErrors = {};

  if (!form.nom.trim())
    errors.nom = "Le nom est obligatoire.";

  if (!form.email.trim())
    errors.email = "Le courriel est obligatoire.";
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
    errors.email = "Adresse courriel invalide.";

  if (!form.entreprise.trim())
    errors.entreprise = "Le nom de l'entreprise est obligatoire.";

  if (!form.message.trim())
    errors.message = "Veuillez décrire votre situation.";

  return errors;
}

export function BookingForm() {
  const [form, setForm] = useState<FormFields>(EMPTY_FORM);
  const [fieldErrors, setFieldErrors] = useState<FieldErrors>({});
  const [status, setStatus] = useState<Status>("idle");
  const [serverError, setServerError] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    // Clear the error for this field as soon as the user starts correcting it
    if (fieldErrors[name as keyof FormFields]) {
      setFieldErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const errors = validate(form);
    if (Object.keys(errors).length > 0) {
      setFieldErrors(errors);
      return;
    }

    setStatus("submitting");
    setServerError("");

    try {
      const response = await fetch("/api/contact.php", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error ?? "Une erreur est survenue.");
      }

      setStatus("success");
    } catch (err) {
      setServerError(err instanceof Error ? err.message : "Une erreur est survenue.");
      setStatus("error");
    }
  };

  if (status === "success") {
    return (
      <div className="space-y-6 py-12 text-center">
        <div className="mx-auto grid size-16 place-items-center rounded-full bg-green-100 text-green-600">
          <CheckCircle className="size-8" />
        </div>
        <h2 className="font-display text-3xl">Demande envoyée !</h2>
        <p className="mx-auto max-w-md text-navy/70">
          Merci <strong>{form.nom}</strong>. Je vous contacterai au{" "}
          <strong>{form.email}</strong> pour organiser notre consultation stratégique.
        </p>
        <Link
          to="/"
          className="inline-flex items-center gap-2 rounded-full bg-navy px-8 py-3 font-semibold text-white transition-transform hover:-translate-y-0.5 active:scale-95"
        >
          Retour à l'accueil
        </Link>
      </div>
    );
  }

  return (
    <div className="space-y-10">
      {/* Header */}
      <div className="space-y-4 text-center">
        <div className="mx-auto grid size-14 place-items-center rounded-2xl bg-blue/10 text-blue">
          <Calendar className="size-7" />
        </div>
        <h1 className="font-display text-4xl lg:text-5xl">Réserver une consultation</h1>
        <p className="mx-auto max-w-lg text-lg text-navy/70">
          Consultation stratégique initiale de <strong>30 minutes gratuites</strong> — sans
          engagement. Discutons de votre croissance, vos acquisitions ou vos défis financiers.
        </p>
      </div>

      {/* Server error banner */}
      {status === "error" && (
        <div className="flex items-start gap-3 rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
          <AlertCircle className="mt-0.5 size-4 shrink-0" />
          {serverError}
        </div>
      )}

      {/* Form */}
      <form onSubmit={handleSubmit} noValidate className="space-y-6">
        <div className="grid gap-6 sm:grid-cols-2">
          <Field label="Nom complet"  id="nom"        type="text"  required placeholder="Jean Dupont"         value={form.nom}        error={fieldErrors.nom}        onChange={handleChange} />
          <Field label="Courriel"     id="email"      type="email" required placeholder="jean@entreprise.com" value={form.email}      error={fieldErrors.email}      onChange={handleChange} />
        </div>
        <div className="grid gap-6 sm:grid-cols-2">
          <Field label="Entreprise"   id="entreprise" type="text"  required placeholder="Nom de votre PME"    value={form.entreprise} error={fieldErrors.entreprise} onChange={handleChange} />
          <Field label="Téléphone"    id="telephone"  type="tel"            placeholder="(514) 000-0000"      value={form.telephone}  error={fieldErrors.telephone}  onChange={handleChange} />
        </div>

        <div className="space-y-1.5">
          <label htmlFor="message" className="text-sm font-semibold">
            Votre situation en quelques mots <span className="text-red-500">*</span>
          </label>
          <textarea
            id="message"
            name="message"
            rows={4}
            value={form.message}
            onChange={handleChange}
            className={`w-full resize-none rounded-xl border bg-white px-4 py-3 text-sm outline-none transition focus:ring-2 focus:ring-navy/5 ${
              fieldErrors.message ? "border-red-400 bg-red-50/30" : "border-navy/10"
            }`}
            placeholder="Décrivez votre entreprise, vos défis actuels ou vos objectifs de croissance..."
          />
          {fieldErrors.message && (
            <p className="flex items-center gap-1.5 text-xs text-red-600">
              <AlertCircle className="size-3 shrink-0" />
              {fieldErrors.message}
            </p>
          )}
        </div>

        <p className="text-xs text-navy/40">
          <span className="text-red-500">*</span> Champs obligatoires
        </p>

        <button
          type="submit"
          disabled={status === "submitting"}
          className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-navy px-8 py-4 font-semibold text-white shadow-lg shadow-navy/25 transition-transform hover:-translate-y-0.5 active:scale-95 disabled:pointer-events-none disabled:opacity-60"
        >
          {status === "submitting" ? (
            <>
              <Loader2 className="size-4 animate-spin" />
              Envoi en cours…
            </>
          ) : (
            <>
              <Send className="size-4" />
              Envoyer ma demande
            </>
          )}
        </button>

        <p className="text-center text-xs text-navy/50">
          Vous serez contacté par courriel pour confirmer le créneau.
        </p>
      </form>

      {/* Alternate contact */}
      <div className="flex flex-col items-center gap-4 border-t border-navy/10 pt-8 text-sm text-navy/60 sm:flex-row sm:justify-center">
        <a href={CONTACT.emailHref} className="inline-flex items-center gap-2 transition-colors hover:text-blue">
          <Mail className="size-4" /> {CONTACT.email}
        </a>
        <a href={CONTACT.phoneHref} className="inline-flex items-center gap-2 transition-colors hover:text-blue">
          <Phone className="size-4" /> {CONTACT.phone}
        </a>
      </div>
    </div>
  );
}

// ── Reusable input field ──────────────────────────────────────────────────────
interface FieldProps {
  label: string;
  id: keyof FormFields;
  type: string;
  required?: boolean;
  placeholder?: string;
  value: string;
  error?: string;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
}

function Field({ label, id, type, required, placeholder, value, error, onChange }: FieldProps) {
  return (
    <div className="space-y-1.5">
      <label htmlFor={id} className="text-sm font-semibold">
        {label}
        {required && <span className="ml-1 text-red-500">*</span>}
      </label>
      <input
        id={id}
        name={id}
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className={`w-full rounded-xl border bg-white px-4 py-3 text-sm outline-none transition focus:ring-2 focus:ring-navy/5 ${
          error ? "border-red-400 bg-red-50/30" : "border-navy/10"
        }`}
      />
      {error && (
        <p className="flex items-center gap-1.5 text-xs text-red-600">
          <AlertCircle className="size-3 shrink-0" />
          {error}
        </p>
      )}
    </div>
  );
}
