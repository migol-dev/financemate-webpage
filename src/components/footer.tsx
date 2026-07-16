import { Wallet } from "lucide-react";

export function Footer({ repoUrl }: { repoUrl: string }) {
  return (
    <footer className="border-t border-border/60 py-10">
      <div className="container flex flex-col items-center justify-between gap-4 text-sm text-muted-foreground sm:flex-row">
        <div className="flex items-center gap-2">
          <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-gradient-to-br from-brand-400 to-brand-700 text-white">
            <Wallet className="h-3.5 w-3.5" />
          </span>
          <span>© {new Date().getFullYear()} Finance Mate. Todos los derechos reservados.</span>
        </div>
        <div className="flex items-center gap-6">
          <a href={repoUrl} target="_blank" rel="noreferrer" className="hover:text-foreground">
            GitHub
          </a>
          <a href="#soporte" className="hover:text-foreground">
            Soporte
          </a>
          <a href="#resenas" className="hover:text-foreground">
            Reseñas
          </a>
        </div>
      </div>
    </footer>
  );
}
