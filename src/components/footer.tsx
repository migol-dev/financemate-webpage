"use client";

export function Footer({ repoUrl }: { repoUrl: string }) {
  return (
    <footer className="py-12 border-t border-white/10 bg-slate-950 text-slate-400 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 rounded-lg bg-cyan-500/20 text-cyan-400 flex items-center justify-center font-bold text-[10px]">
            FP
          </div>
          <span className="text-white font-semibold">Finance Pal v1.20</span>
          <span>· Software Libre bajo Licencia MIT</span>
        </div>
        <div className="flex items-center gap-6">
          {[
            { href: repoUrl, label: "GitHub Repo", external: true },
            { href: "https://financepal-web.vercel.app", label: "Web App Vercel", external: true },
            { href: "#resenas", label: "Comunidad", external: false },
            { href: "#soporte", label: "Buzón", external: false },
            { href: "#seguridad", label: "Seguridad", external: false },
            { href: "#descarga", label: "Descargas", external: false },
          ].map((link) => (
            <a
              key={link.label}
              href={link.href}
              target={link.external ? "_blank" : undefined}
              rel={link.external ? "noopener noreferrer" : undefined}
              className="hover:text-cyan-400 transition-colors focus-visible:ring-2 focus-visible:ring-cyan-400 outline-none rounded"
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
