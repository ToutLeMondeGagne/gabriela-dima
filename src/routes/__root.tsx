import { createRootRoute, Outlet } from "@tanstack/react-router";

export const Route = createRootRoute({
  component: () => <Outlet />,
  notFoundComponent: NotFoundPage,
});

function NotFoundPage() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-bg px-4">
      <div className="max-w-md space-y-6 text-center">
        <h1 className="font-display text-7xl font-bold text-navy">404</h1>
        <p className="text-navy/60">Cette page n'existe pas.</p>
        <a
          href="/"
          className="inline-block rounded-full bg-navy px-6 py-3 font-semibold text-white transition-colors hover:bg-blue"
        >
          Retour à l'accueil
        </a>
      </div>
    </div>
  );
}
