import { Lock, Database, ShieldCheck, ArrowUpRight, GitBranch, Tag, Star } from "lucide-react";
import { EditorialHighlight, ScrollReveal } from "@/components/editorial-motion";

const SECURITY_LAYERS = [
  {
    code: "CAPA 01 · CIFRADO EN CLIENTE",
    icon: Lock,
    accentClass: "text-editorial-emerald",
    title: "WebCrypto AES-GCM 256 + PBKDF2",
    desc: "Derivación de llaves locales mediante 100,000 iteraciones PBKDF2-SHA256. Tus balances y conceptos se cifran con vector IV único antes de tocar el disco.",
    spec: "Llave derivada en memoria local · 0 bytes en texto plano",
  },
  {
    code: "CAPA 02 · SOBERANÍA DE ALMACENAMIENTO",
    icon: Database,
    accentClass: "text-editorial-cobalt",
    title: "100% Local-First (SQLite & IndexedDB)",
    desc: "La base de datos reside físicamente en tu dispositivo. La aplicación opera de por vida sin conexión a internet ni dependencia de servidores externos.",
    spec: "Latencia de lectura < 1 ms · Autonomía perpetua",
  },
  {
    code: "CAPA 03 · NUBE OPCIONAL DE CONOCIMIENTO CERO",
    icon: ShieldCheck,
    accentClass: "text-editorial-amber",
    title: "Sincronización Opcional Supabase (RLS)",
    desc: "Si decides vincular múltiples dispositivos, cada registro viaja cifrado de extremo a extremo y aislado mediante políticas Row Level Security por UID.",
    spec: "100% opcional · Cero perfilamiento crediticio",
  },
];

export function GithubSection({ repoUrl }: { repoUrl: string }) {
  return (
    <section id="seguridad" className="fp-cv-section py-12 sm:py-16 lg:py-24 border-b border-border relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          {/* Columna Izquierda: Manifiesto Criptográfico y Código Abierto (5 Columnas) */}
          <ScrollReveal className="lg:col-span-5 space-y-6">
            <div className="space-y-3">
              <span className="inline-block text-xs font-mono uppercase tracking-widest text-primary font-semibold">
                06 / ARQUITECTURA CRIPTOGRÁFICA
              </span>
              <h2 className="font-display-v2 font-bold text-fluid-h2 text-foreground text-balance">
                Privacidad verificable{" "}
                <EditorialHighlight className="italic font-semibold text-primary">
                  por código
                </EditorialHighlight>
                , no por promesas.
              </h2>
              <p className="text-muted-foreground editorial-text-hover text-sm sm:text-base leading-relaxed max-w-[58ch] text-pretty">
                Tus estados financieros jamás se venden ni se analizan en servidores externos. La
                seguridad de Finance Pal es{" "}
                <EditorialHighlight>públicamente auditable bajo licencia MIT</EditorialHighlight>.
              </p>
            </div>

            {/* Ficha de Auditoría GitHub */}
            <div className="rounded-2xl bg-card border border-border p-6 editorial-surface space-y-5">
              <div className="flex items-center justify-between">
                <div>
                  <span className="text-[11px] font-mono uppercase tracking-wider text-muted-foreground block">
                    Repositorio Oficial
                  </span>
                  <h3 className="font-display font-bold text-xl text-foreground">
                    Código Abierto y Transparente
                  </h3>
                </div>
                <span className="px-2.5 py-1 rounded-lg bg-muted border border-border text-xs font-mono text-primary font-semibold">
                  MIT
                </span>
              </div>

              <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                Inspecciona la implementación de WebCrypto, sigue las versiones estables y verifica
                los binarios compilados directamente en GitHub.
              </p>

              <div className="flex flex-col min-[420px]:flex-row flex-wrap gap-2.5">
                <a
                  href={repoUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="btn-primary ps-5 pe-4 py-2.5 text-xs justify-center group"
                >
                  <span>Inspeccionar repositorio</span>
                  <ArrowUpRight
                    className="w-3.5 h-3.5 transition-transform duration-150 ease-out group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                    strokeWidth={2}
                  />
                </a>
                <a
                  href={`${repoUrl}/releases`}
                  target="_blank"
                  rel="noreferrer"
                  className="btn-ghost px-4 py-2.5 text-xs justify-center"
                >
                  <Tag className="w-3.5 h-3.5 text-primary" strokeWidth={1.75} />
                  <span>Consultar versiones</span>
                </a>
                <a
                  href={`${repoUrl}/branches`}
                  target="_blank"
                  rel="noreferrer"
                  className="btn-ghost px-4 py-2.5 text-xs justify-center"
                >
                  <GitBranch className="w-3.5 h-3.5 text-muted-foreground" strokeWidth={1.75} />
                  <span>Ver ramas activas</span>
                </a>
              </div>

              <div className="pt-3 border-t border-border flex items-center gap-2 text-xs text-muted-foreground font-mono">
                <Star className="w-3.5 h-3.5 text-editorial-amber fill-current" />
                <span>Otorga una estrella en GitHub para respaldar el desarrollo libre</span>
              </div>
            </div>
          </ScrollReveal>

          {/* Columna Derecha: Capas Criptográficas De-Boxed con Filetes de 1px (7 Columnas) */}
          <ScrollReveal delay={0.1} className="lg:col-span-7">
            <div className="divide-y divide-border border-y border-border">
              {SECURITY_LAYERS.map((layer) => {
                const Icon = layer.icon;
                return (
                  <article
                    key={layer.code}
                    className="py-7 sm:py-8 flex flex-col sm:flex-row items-start gap-5 group"
                  >
                    <div className="w-11 h-11 rounded-xl bg-muted border border-border flex items-center justify-center shrink-0 transition-transform duration-200 ease-out group-hover:scale-105">
                      <Icon className={`w-5 h-5 ${layer.accentClass}`} strokeWidth={1.75} />
                    </div>
                    <div className="space-y-2 flex-1">
                      <span className="text-[11px] font-mono uppercase tracking-wider text-muted-foreground block">
                        {layer.code}
                      </span>
                      <h3 className="font-display font-bold text-xl text-foreground tracking-tight">
                        <EditorialHighlight>{layer.title}</EditorialHighlight>
                      </h3>
                      <p className="text-sm text-muted-foreground editorial-text-hover leading-relaxed max-w-[62ch]">
                        {layer.desc}
                      </p>
                      <div className="pt-2 text-xs font-mono-tabular text-primary font-medium">
                        ✓ {layer.spec}
                      </div>
                    </div>
                  </article>
                );
              })}
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
