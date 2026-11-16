import type { Metadata } from "next";
import Link from "next/link";
import { LegalShell } from "@/components/legal/legal-shell";

export const metadata: Metadata = {
  title: "Política de Cookies y Almacenamiento Local",
  description:
    "Transparencia total sobre el uso de cookies técnicas, almacenamiento local (localStorage, sessionStorage e IndexedDB) y flujo OAuth 2.1 MCP en Finance Pal.",
  alternates: {
    canonical: "/cookies",
  },
  openGraph: {
    title: "Política de Cookies y Almacenamiento Local | Finance Pal",
    description:
      "Transparencia total sobre cookies técnicas, almacenamiento local e IndexedDB y sesiones OAuth 2.1 MCP en Finance Pal.",
    url: "/cookies",
  },
};

export default function CookiesPage() {
  return (
    <LegalShell
      title="Política de Cookies y Almacenamiento Local"
      subtitle="Conoce con total claridad qué claves y tecnologías de almacenamiento (Cookies, localStorage, sessionStorage e IndexedDB) utiliza Finance Pal con fines estrictamente técnicos."
      lastUpdated="16 de noviembre de 2026"
      readTime="6 min"
    >
      <section className="space-y-4">
        <h2 className="text-xl font-bold text-foreground flex items-center gap-2 font-display">
          <span className="text-primary font-mono-tabular">1.</span> ¿Qué son las Cookies y el Almacenamiento Web?
        </h2>
        <p className="text-muted-foreground">
          Las <strong className="text-foreground">Cookies</strong> son pequeños archivos colocados en el navegador durante
          la navegación. El <strong className="text-foreground">Almacenamiento Web (localStorage, sessionStorage e
          IndexedDB)</strong> permite conservar preferencias, bóvedas locales y estados temporales directamente en tu
          dispositivo sin enviarlos automáticamente en cada petición de red.
        </p>
        <div className="p-4 rounded-xl bg-muted/60 border border-border text-foreground text-xs sm:text-sm leading-relaxed">
          <strong className="text-editorial-emerald font-mono uppercase tracking-wider mr-1.5">
            COMPROMISO DE NO RASTREO:
          </strong>
          Finance Pal no utiliza cookies publicitarias, píxeles de seguimiento (Meta Pixel, TikTok Pixel), analítica de
          terceros ni seguimiento entre sitios en flujos OAuth 2.1.
        </div>
      </section>

      <section className="space-y-4 pt-6 border-t border-border">
        <h2 className="text-xl font-bold text-foreground flex items-center gap-2 font-display">
          <span className="text-primary font-mono-tabular">2.</span> Inventario de Almacenamiento en este Sitio Web Oficial
        </h2>
        <p className="text-muted-foreground">
          Detalle técnico de cada clave y cookie utilizada en el sitio web informativo y portal de descargas:
        </p>

        <div className="overflow-x-auto mt-3 rounded-xl border border-border">
          <table className="w-full text-left text-xs sm:text-sm border-collapse">
            <thead>
              <tr className="border-b border-border bg-muted/70 text-foreground font-mono">
                <th className="p-3">Nombre / Clave</th>
                <th className="p-3">Mecanismo</th>
                <th className="p-3">Finalidad</th>
                <th className="p-3">Duración</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border text-muted-foreground bg-card font-sans">
              <tr>
                <td className="p-3 font-mono text-primary font-medium break-all">fm_visitor_id</td>
                <td className="p-3 font-mono text-xs">localStorage</td>
                <td className="p-3">
                  Identificador aleatorio UUID v4 anónimo para evitar duplicados al contabilizar descargas del APK.
                </td>
                <td className="p-3 font-mono-tabular text-xs">Persistente (hasta limpieza manual)</td>
              </tr>
              <tr>
                <td className="p-3 font-mono text-primary font-medium break-all">fm_has_downloaded</td>
                <td className="p-3 font-mono text-xs">localStorage</td>
                <td className="p-3">
                  Indicador booleano que registra si el navegador ya descargó el instalador para mostrarlo en reseñas verificadas.
                </td>
                <td className="p-3 font-mono-tabular text-xs">Persistente (hasta limpieza manual)</td>
              </tr>
              <tr>
                <td className="p-3 font-mono text-primary font-medium break-all">fp_cookie_consent_accepted</td>
                <td className="p-3 font-mono text-xs">localStorage</td>
                <td className="p-3">
                  Recuerda que el usuario cerró o aceptó el aviso de almacenamiento local técnico.
                </td>
                <td className="p-3 font-mono-tabular text-xs">1 año (o hasta limpieza)</td>
              </tr>
              <tr>
                <td className="p-3 font-mono text-primary font-medium break-all">
                  financepal_v2_2_0_announcement_dismissed
                </td>
                <td className="p-3 font-mono text-xs">localStorage</td>
                <td className="p-3">
                  Oculta el banner superior de novedades de la edición v2.2.0 una vez descartado por el visitante.
                </td>
                <td className="p-3 font-mono-tabular text-xs">Hasta nuevo lanzamiento mayor</td>
              </tr>
              <tr>
                <td className="p-3 font-mono text-primary font-medium break-all">fp-perf-override</td>
                <td className="p-3 font-mono text-xs">sessionStorage</td>
                <td className="p-3">
                  Conserva el modo de rendimiento visual seleccionado (<code className="font-mono">lite</code> /{" "}
                  <code className="font-mono">full</code>) durante la sesión de pestaña actual.
                </td>
                <td className="p-3 font-mono-tabular text-xs">Sesión de pestaña</td>
              </tr>
              <tr>
                <td className="p-3 font-mono text-primary font-medium break-all">next-auth.session-token</td>
                <td className="p-3 font-mono text-xs">Cookie HTTP (segura)</td>
                <td className="p-3">
                  Cookie de sesión estrictamente técnica y cifrada para autenticar al administrador en <code className="font-mono">/admin</code>.
                </td>
                <td className="p-3 font-mono-tabular text-xs">Sesión (30 días máx.)</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="space-y-4 pt-6 border-t border-border">
        <h2 className="text-xl font-bold text-foreground flex items-center gap-2 font-display">
          <span className="text-primary font-mono-tabular">3.</span> Almacenamiento en la App Web (PWA) y Autorización OAuth 2.1 MCP
        </h2>
        <p className="text-muted-foreground">
          En la aplicación cliente (<span className="text-primary font-mono">financepal-web.vercel.app</span> y dominio MCP
          autorizado), se utilizan los siguientes almacenes técnicos sin fines publicitarios:
        </p>
        <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
          <li>
            <strong className="text-foreground">Bóveda Local y Caché (<code className="font-mono text-primary">finance-pal-query-cache</code> / IndexedDB):</strong>{" "}
            Almacena tus cuentas, movimientos, metas y deudas cifrados en cliente con WebCrypto AES-GCM de 256 bits. No
            se envía a ningún servidor salvo que actives sincronización opcional en la nube.
          </li>
          <li>
            <strong className="text-foreground">Tema Visual Síncrono (<code className="font-mono text-primary">fp-theme-pref</code>):</strong>{" "}
            Lectura instantánea antes del primer renderizado para evitar destellos blancos (<em>Zero-Flash Boot</em>).
          </li>
          <li>
            <strong className="text-foreground">Retorno Seguro de Consentimiento MCP (<code className="font-mono text-primary">fp_oauth_return_to</code> en sessionStorage):</strong>{" "}
            Si inicias una vinculación MCP desde Claude, ChatGPT o Gemini sin sesión abierta, se guarda temporalmente la
            ruta <code className="font-mono">/oauth/consent?...</code> en almacenamiento efímero de pestaña para devolverte a
            la pantalla de permisos tras iniciar sesión y se elimina automáticamente al completar el retorno.
          </li>
          <li>
            <strong className="text-foreground">Tokens de Sesión y Concesiones OAuth 2.1 + PKCE (S256):</strong> Cuando
            activas sincronización o apruebas un conector MCP, Supabase Auth conserva la sesión local y el servidor emite
            access tokens JWT de corta duración (<span className="font-mono-tabular text-foreground font-semibold">15 minutos</span>)
            vinculados al recurso <code className="font-mono">/mcp</code> más refresh tokens rotativos custodiados por el
            cliente IA autorizado (revocables en cualquier momento mediante Kill Switch).
          </li>
        </ul>
      </section>

      <section className="space-y-4 pt-6 border-t border-border">
        <h2 className="text-xl font-bold text-foreground flex items-center gap-2 font-display">
          <span className="text-primary font-mono-tabular">4.</span> ¿Cómo Eliminar o Bloquear el Almacenamiento Local?
        </h2>
        <p className="text-muted-foreground">
          Puedes limpiar el almacenamiento local, borrar sesiones OAuth o revocar cookies técnicas en cualquier momento
          desde la configuración de tu navegador:
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm">
          <div className="p-4 rounded-xl bg-muted/40 border border-border">
            <strong className="text-foreground block mb-1">Google Chrome / Brave:</strong>
            <span className="text-muted-foreground">
              Ajustes → Privacidad y seguridad → Borrar datos de navegación → &ldquo;Cookies y otros datos de sitios&rdquo;.
            </span>
          </div>
          <div className="p-4 rounded-xl bg-muted/40 border border-border">
            <strong className="text-foreground block mb-1">Mozilla Firefox:</strong>
            <span className="text-muted-foreground">
              Ajustes → Privacidad y Seguridad → Cookies y datos del sitio → &ldquo;Limpiar datos&rdquo;.
            </span>
          </div>
          <div className="p-4 rounded-xl bg-muted/40 border border-border">
            <strong className="text-foreground block mb-1">Apple Safari:</strong>
            <span className="text-muted-foreground">
              Preferencias → Privacidad → Gestionar datos de sitios web → Buscar dominio y &ldquo;Eliminar&rdquo;.
            </span>
          </div>
          <div className="p-4 rounded-xl bg-muted/40 border border-border">
            <strong className="text-foreground block mb-1">Microsoft Edge:</strong>
            <span className="text-muted-foreground">
              Configuración → Cookies y permisos del sitio → Administrar y eliminar cookies y datos de sitios.
            </span>
          </div>
        </div>
      </section>

      <section className="space-y-4 pt-6 border-t border-border">
        <h2 className="text-xl font-bold text-foreground flex items-center gap-2 font-display">
          <span className="text-primary font-mono-tabular">5.</span> Consultas y Contacto
        </h2>
        <p className="text-muted-foreground">
          Para cualquier duda sobre el almacenamiento web o las credenciales MCP en Finance Pal, escribe a{" "}
          <a href="mailto:business.migol.gg@gmail.com" className="text-primary font-mono hover:underline underline-offset-4">
            business.migol.gg@gmail.com
          </a>
          . Consulta también la{" "}
          <Link href="/privacidad" className="text-primary hover:underline underline-offset-4">
            Política de Privacidad Integral
          </Link>{" "}
          y los{" "}
          <Link href="/terminos" className="text-primary hover:underline underline-offset-4">
            Términos y Condiciones de Uso
          </Link>
          .
        </p>
      </section>
    </LegalShell>
  );
}
