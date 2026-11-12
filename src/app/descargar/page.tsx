import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowUpRight,
  CheckCircle2,
  Download,
  ExternalLink,
  Globe,
  ShieldCheck,
  Smartphone,
} from "lucide-react";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import {
  REPO_URL,
  APK_DOWNLOAD_URL,
  APP_URL,
  APP_VERSION,
} from "@/lib/seo";
import {
  JsonLd,
  buildBreadcrumbSchema,
  buildSoftwareApplicationSchema,
} from "@/components/seo/json-ld";

export const metadata: Metadata = {
  title: `Descargar Finance Pal v${APP_VERSION} (APK Oficial Android y Web PWA)`,
  description:
    "Descarga gratis el instalador oficial APK de Finance Pal v2.0.0 para Android o accede a la versión Web PWA sin conexión desde iOS, Windows, macOS y Linux.",
  keywords: [
    "descargar finance pal",
    "finance pal apk",
    "descargar finance pal gratis",
    "finance pal android",
    "finance pal web app",
    "app de finanzas personales apk",
  ],
  alternates: {
    canonical: "/descargar",
  },
  openGraph: {
    title: `Descargar Finance Pal v${APP_VERSION} Gratis | Android APK y Web PWA`,
    description:
      "Instalador directo verificado desde GitHub Releases y acceso inmediato a la Web App PWA 100% Local-First.",
    url: "/descargar",
  },
};

const ANDROID_STEPS = [
  {
    step: "01",
    title: "Descarga el archivo APK oficial",
    detail:
      "Pulsa el botón «Descargar APK v2.0.0» para obtener el binario compilado directamente desde el repositorio oficial de GitHub Releases.",
  },
  {
    step: "02",
    title: "Autoriza la instalación desde tu navegador",
    detail:
      "Al abrir el archivo en Android, si es la primera vez que instalas un APK directo, activa el permiso «Instalar aplicaciones desconocidas» para tu navegador.",
  },
  {
    step: "03",
    title: "Inicia sin cuenta ni conexión",
    detail:
      "Abre Finance Pal y comienza a registrar tus ingresos, gastos, metas y deudas al instante. Tus datos quedan guardados en tu teléfono.",
  },
];

const PWA_STEPS = [
  {
    step: "01",
    title: "Abre la aplicación web oficial",
    detail:
      "Accede a financepal-web.vercel.app desde Safari (iPhone/iPad) o Chrome/Edge/Brave (escritorio o Android).",
  },
  {
    step: "02",
    title: "Añádela a tu pantalla de inicio",
    detail:
      "En iOS pulsa «Compartir → Agregar a pantalla de inicio». En escritorio o Android pulsa el ícono «Instalar aplicación» en la barra de direcciones.",
  },
  {
    step: "03",
    title: "Sincroniza mediante respaldos cifrados AES-256",
    detail:
      "Puedes exportar una copia de seguridad cifrada desde tu teléfono y restaurarla en tu computadora en segundos.",
  },
];

export default function DescargarPage() {
  return (
    <>
      <JsonLd data={buildSoftwareApplicationSchema()} />
      <JsonLd
        data={buildBreadcrumbSchema([
          { name: "Inicio", path: "/" },
          { name: "Descargar", path: "/descargar" },
        ])}
      />
      <Navbar />
      <main className="min-h-screen">
        {/* Hero Asimétrico de Descarga (7/5 Split) */}
        <section className="py-16 sm:py-24 border-b border-border">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <nav
              aria-label="Ruta de navegación"
              className="mb-8 flex items-center gap-2 text-xs font-mono text-muted-foreground"
            >
              <Link href="/" className="hover:text-foreground transition-colors">
                Inicio
              </Link>
              <span>/</span>
              <span className="text-foreground font-semibold">Descargar</span>
            </nav>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
              <div className="lg:col-span-7 space-y-6">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-muted border border-border text-xs font-mono text-muted-foreground">
                  <span className="text-primary font-semibold">
                    DISTRIBUCIÓN OFICIAL · v{APP_VERSION}
                  </span>
                  <span>·</span>
                  <span>Licencia MIT</span>
                </div>

                <h1 className="font-display-v2 font-bold text-fluid-h1 text-foreground text-balance">
                  Descarga{" "}
                  <span className="italic font-semibold text-primary">
                    Finance Pal
                  </span>{" "}
                  gratis en tu dispositivo.
                </h1>

                <p className="text-muted-foreground text-base sm:text-lg leading-relaxed max-w-[60ch]">
                  Elige entre el paquete nativo <strong className="text-foreground">APK para Android</strong>{" "}
                  distribuido desde GitHub Releases o la{" "}
                  <strong className="text-foreground">Web App Progresiva (PWA)</strong>{" "}
                  compatible con iOS, Windows, macOS y Linux. Sin publicidad, sin cuentas
                  obligatorias y 100% Local-First.
                </p>

                <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5">
                  <a
                    href={APK_DOWNLOAD_URL}
                    className="inline-flex items-center justify-center gap-2.5 px-6 py-4 rounded-xl text-sm sm:text-base font-semibold text-primary-foreground bg-primary hover:brightness-105 tactile-press"
                  >
                    <Download className="w-4 h-4" strokeWidth={2} />
                    <span>Descargar APK Oficial (v{APP_VERSION})</span>
                  </a>
                  <a
                    href={APP_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl text-sm sm:text-base font-semibold text-foreground bg-card border border-border hover:border-foreground/30 tactile-press"
                  >
                    <Globe className="w-4 h-4 text-primary" strokeWidth={1.75} />
                    <span>Abrir Web App (PWA)</span>
                    <ExternalLink className="w-3.5 h-3.5 text-muted-foreground" strokeWidth={1.75} />
                  </a>
                </div>
              </div>

              {/* Ficha Técnica de la Compilación (5 Columnas) */}
              <div className="lg:col-span-5 lg:border-l border-border lg:pl-10 space-y-5">
                <p className="text-xs font-mono uppercase tracking-wider text-muted-foreground">
                  Ficha técnica de la versión
                </p>
                <div className="divide-y divide-border border-y border-border text-sm">
                  <div className="py-3.5 flex flex-col min-[400px]:flex-row min-[400px]:items-baseline justify-between gap-1 min-[400px]:gap-4">
                    <span className="text-muted-foreground">Versión estable</span>
                    <span className="font-mono-tabular font-bold text-foreground break-words">
                      v{APP_VERSION} (Warm Editorial Wealth)
                    </span>
                  </div>
                  <div className="py-3.5 flex flex-col min-[400px]:flex-row min-[400px]:items-baseline justify-between gap-1 min-[400px]:gap-4">
                    <span className="text-muted-foreground">Requisitos Android</span>
                    <span className="font-mono-tabular font-semibold text-foreground break-words">
                      Android 8.0+ (Oreo o superior)
                    </span>
                  </div>
                  <div className="py-3.5 flex flex-col min-[400px]:flex-row min-[400px]:items-baseline justify-between gap-1 min-[400px]:gap-4">
                    <span className="text-muted-foreground">Cifrado de respaldos</span>
                    <span className="font-mono-tabular font-semibold text-primary break-words">
                      WebCrypto AES-GCM 256
                    </span>
                  </div>
                  <div className="py-3.5 flex flex-col min-[400px]:flex-row min-[400px]:items-baseline justify-between gap-1 min-[400px]:gap-4">
                    <span className="text-muted-foreground">Licencia y Costo</span>
                    <span className="font-mono-tabular font-semibold text-foreground break-words">
                      MIT Open Source · $0 Gratis
                    </span>
                  </div>
                </div>
                <a
                  href={`${REPO_URL}/releases`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-mono font-semibold text-primary hover:underline underline-offset-4"
                >
                  <span>Verificar binario y notas de versión en GitHub Releases</span>
                  <ArrowUpRight className="w-3.5 h-3.5" strokeWidth={1.75} />
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Guías de Instalación en 2 Columnas Editoriales */}
        <section className="py-16 sm:py-24 border-b border-border">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
              {/* Android APK (6 Columnas) */}
              <div className="lg:col-span-6 space-y-6">
                <div className="flex items-center gap-2.5">
                  <Smartphone className="w-5 h-5 text-primary" strokeWidth={1.75} />
                  <span className="text-xs font-mono font-bold uppercase tracking-wider text-primary">
                    OPCIÓN A · ANDROID NATIVO
                  </span>
                </div>
                <h2 className="font-display-v2 font-bold text-fluid-h2 text-foreground">
                  Cómo instalar el APK en Android en 3 pasos
                </h2>
                <div className="divide-y divide-border border-y border-border">
                  {ANDROID_STEPS.map((item) => (
                    <div key={item.step} className="py-5 flex gap-4 items-start">
                      <span className="font-mono-tabular font-bold text-lg text-primary shrink-0">
                        {item.step}
                      </span>
                      <div className="space-y-1">
                        <h3 className="font-display font-bold text-base text-foreground">
                          {item.title}
                        </h3>
                        <p className="text-sm text-muted-foreground leading-relaxed">
                          {item.detail}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Web App PWA (6 Columnas) */}
              <div className="lg:col-span-6 space-y-6">
                <div className="flex items-center gap-2.5">
                  <Globe className="w-5 h-5 text-primary" strokeWidth={1.75} />
                  <span className="text-xs font-mono font-bold uppercase tracking-wider text-primary">
                    OPCIÓN B · WEB APP / PWA MULTIPLATAFORMA
                  </span>
                </div>
                <h2 className="font-display-v2 font-bold text-fluid-h2 text-foreground">
                  Cómo usar Finance Pal en iPhone, iPad, PC o Mac
                </h2>
                <div className="divide-y divide-border border-y border-border">
                  {PWA_STEPS.map((item) => (
                    <div key={item.step} className="py-5 flex gap-4 items-start">
                      <span className="font-mono-tabular font-bold text-lg text-primary shrink-0">
                        {item.step}
                      </span>
                      <div className="space-y-1">
                        <h3 className="font-display font-bold text-base text-foreground">
                          {item.title}
                        </h3>
                        <p className="text-sm text-muted-foreground leading-relaxed">
                          {item.detail}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Verificación de Seguridad y Código Abierto */}
        <section className="py-14 sm:py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-8 space-y-3">
                <div className="inline-flex items-center gap-2 text-xs font-mono font-semibold text-primary uppercase">
                  <ShieldCheck className="w-4 h-4" strokeWidth={1.75} />
                  <span>Garantía de Integridad y Privacidad</span>
                </div>
                <h2 className="font-display-v2 font-bold text-fluid-h2 text-foreground">
                  ¿Por qué distribuimos el APK directamente desde GitHub?
                </h2>
                <p className="text-sm sm:text-base text-muted-foreground leading-relaxed max-w-[65ch]">
                  Distribuir el paquete oficial a través de GitHub Releases permite que
                  cualquier usuario verifique que el archivo proviene exactamente del
                  código fuente público, sin SDKs de rastreo comercial ni demoras de
                  intermediarios.
                </p>
              </div>
              <div className="lg:col-span-4 flex lg:justify-end">
                <Link
                  href="/funciones/privacidad-y-cifrado"
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-muted hover:bg-primary hover:text-primary-foreground border border-border text-xs sm:text-sm font-semibold text-foreground transition-colors"
                >
                  <CheckCircle2 className="w-4 h-4" strokeWidth={1.75} />
                  <span>Conocer el cifrado AES-GCM 256</span>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer repoUrl={REPO_URL} />
    </>
  );
}
