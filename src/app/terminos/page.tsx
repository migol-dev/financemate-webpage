import type { Metadata } from "next";
import Link from "next/link";
import { LegalShell } from "@/components/legal/legal-shell";

export const metadata: Metadata = {
  title: "Términos y Condiciones de Uso",
  description:
    "Términos y condiciones legales que regulan el uso de la web oficial, PWA, aplicación Android y conectores MCP OAuth 2.1 de Finance Pal.",
  alternates: {
    canonical: "/terminos",
  },
  openGraph: {
    title: "Términos y Condiciones de Uso | Finance Pal",
    description:
      "Términos y condiciones legales que regulan el uso de la web oficial, PWA, aplicación Android y servidor MCP de Finance Pal.",
    url: "/terminos",
  },
};

export default function TerminosPage() {
  return (
    <LegalShell
      title="Términos y Condiciones de Uso"
      subtitle="Condiciones generales que regulan el acceso, descarga y utilización del ecosistema Finance Pal (Sitio Web, PWA, App Android y Servidor MCP)."
      lastUpdated="16 de noviembre de 2026"
      readTime="8 min"
    >
      <section className="space-y-4">
        <h2 className="text-xl font-bold text-foreground flex items-center gap-2 font-display">
          <span className="text-primary font-mono-tabular">1.</span> Identificación del Titular y Alcance
        </h2>
        <p className="text-muted-foreground">
          El presente documento establece los Términos y Condiciones de Uso (en adelante, los &ldquo;Términos&rdquo;) que
          rigen el acceso, navegación, descarga y uso del ecosistema de software{" "}
          <strong className="text-foreground">Finance Pal</strong>, incluyendo:
        </p>
        <ul className="list-disc pl-6 space-y-1.5 text-muted-foreground">
          <li>El sitio web oficial y portal de descargas accesible vía internet.</li>
          <li>
            La aplicación web (PWA) desplegada en{" "}
            <span className="text-primary font-mono">financepal-web.vercel.app</span>.
          </li>
          <li>
            La aplicación móvil nativa para Android distribuida en formato APK oficial en GitHub Releases.
          </li>
          <li>
            El servidor remoto Model Context Protocol (<code className="text-primary font-mono">/mcp</code>), los
            endpoints de descubrimiento OAuth (<code className="font-mono">/.well-known/*</code>) y el flujo de autorización{" "}
            <code className="font-mono">/oauth/*</code> destinados a conectores de IA autorizados por el Usuario.
          </li>
        </ul>
        <p className="text-muted-foreground">
          El titular, creador y mantenedor de este software es un{" "}
          <strong className="text-foreground">desarrollador independiente (persona física)</strong> que opera públicamente bajo
          el alias de desarrollo <strong className="text-primary font-mono">migol-dev</strong> (en adelante, &ldquo;el
          Desarrollador&rdquo; o &ldquo;el Titular&rdquo;), con contacto oficial en{" "}
          <a href="mailto:business.migol.gg@gmail.com" className="text-primary font-mono hover:underline underline-offset-4">
            business.migol.gg@gmail.com
          </a>
          . Finance Pal no constituye una sociedad mercantil, institución bancaria ni entidad financiera regulada.
        </p>
      </section>

      <section className="space-y-4 pt-6 border-t border-border">
        <h2 className="text-xl font-bold text-foreground flex items-center gap-2 font-display">
          <span className="text-primary font-mono-tabular">2.</span> Aceptación de los Términos y Capacidad Legal
        </h2>
        <p className="text-muted-foreground">
          Al acceder al sitio web, descargar el APK, utilizar la PWA o autorizar un conector IA en{" "}
          <code className="font-mono">/oauth/consent</code>, usted (en adelante, el &ldquo;Usuario&rdquo;) acepta
          íntegramente estos Términos, nuestra{" "}
          <Link href="/privacidad" className="text-primary hover:underline underline-offset-4">
            Política de Privacidad
          </Link>{" "}
          y nuestra{" "}
          <Link href="/cookies" className="text-primary hover:underline underline-offset-4">
            Política de Cookies y Almacenamiento Local
          </Link>
          .
        </p>
        <p className="text-muted-foreground">
          Para utilizar este servicio o autorizar conectores MCP, el Usuario debe ser mayor de edad conforme a las leyes
          de su jurisdicción (generalmente 18 años) o contar con autorización de su padre, madre o tutor legal.
        </p>
      </section>

      <section className="space-y-4 pt-6 border-t border-border">
        <h2 className="text-xl font-bold text-foreground flex items-center gap-2 font-display">
          <span className="text-primary font-mono-tabular">3.</span> Naturaleza del Servicio y Deslinde Financiero
        </h2>
        <div className="p-4 rounded-xl bg-muted/60 border border-border text-foreground text-xs sm:text-sm leading-relaxed">
          <strong className="text-editorial-amber font-mono uppercase tracking-wider mr-1.5">
            AVISO CRÍTICO:
          </strong>
          Finance Pal es una herramienta estrictamente informática de organización personal. Revisa el alcance completo en nuestro{" "}
          <Link href="/aviso-legal" className="text-primary underline underline-offset-4 font-medium">
            Aviso Legal y Deslinde Financiero
          </Link>
          .
        </div>
        <ol className="list-decimal pl-6 space-y-2 text-muted-foreground">
          <li>
            <strong className="text-foreground">No es entidad financiera ni bancaria:</strong> Finance Pal NO es banco,
            IFPE, IFC ni Fintech supervisada por CNBV, CONDUSEF, SEC o equivalentes. No capta fondos ni ejecuta
            transferencias reales de dinero.
          </li>
          <li>
            <strong className="text-foreground">Sin asesoría financiera ni fiscal:</strong> Ninguna métrica, gráfica o
            proyección constituye recomendación de inversión, contable ni tributaria.
          </li>
          <li>
            <strong className="text-foreground">Registros autogestionados:</strong> &ldquo;Cuentas&rdquo;, &ldquo;CLABE&rdquo;,
            &ldquo;Deudas&rdquo; y &ldquo;Efectivo&rdquo; son etiquetas digitales organizativas capturadas manualmente por el
            Usuario sin conexión a banca electrónica.
          </li>
          <li>
            <strong className="text-foreground">Asistentes de IA y Conectores MCP:</strong> Las explicaciones, análisis,
            resúmenes o sugerencias elaboradas por modelos externos (como Claude, ChatGPT o Gemini) conectados mediante MCP
            dependen exclusivamente de dichos modelos de terceros y del Usuario; nunca deben tomarse como dictamen
            financiero, fiscal ni jurídico.
          </li>
        </ol>
      </section>

      <section className="space-y-4 pt-6 border-t border-border">
        <h2 className="text-xl font-bold text-foreground flex items-center gap-2 font-display">
          <span className="text-primary font-mono-tabular">4.</span> Regulación de Conectores de Inteligencia Artificial (MCP y OAuth 2.1)
        </h2>
        <p className="text-muted-foreground">
          El Usuario que decida conectar asistentes externos mediante el protocolo{" "}
          <strong className="text-foreground">Model Context Protocol (MCP)</strong> acepta expresamente las siguientes
          reglas operativas y de responsabilidad:
        </p>
        <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
          <li>
            <strong className="text-foreground">Autorización Voluntaria OAuth 2.1 + PKCE y 2FA:</strong> Cada cliente
            externo requiere aprobación explícita en <code className="font-mono">/oauth/consent</code> (con verificación{" "}
            <code className="font-mono">aal2</code> cuando exista 2FA activo), bajo un límite de hasta{" "}
            <span className="font-mono-tabular text-foreground font-semibold">5 concesiones activas</span> simultáneas.
          </li>
          <li>
            <strong className="text-foreground">Alcances Solo Lectura vs. Escritura y Borrado Suave:</strong> El conector
            se inicializa en <strong className="text-foreground">Modo Solo Lectura</strong> por seguridad. Si el Usuario
            decide desactivar manualmente Solo Lectura u otorgar permisos <code className="font-mono">mcp:write:*</code>{" "}
            o <code className="font-mono">mcp:delete:soft</code>, asume total responsabilidad por las altas, ediciones o
            envíos a papelera que el asistente ejecute en su nombre mediante tokens de confirmación temporal (TTL de{" "}
            <span className="font-mono-tabular">120 s</span>).
          </li>
          <li>
            <strong className="text-foreground">Kill Switch y Papelera de Recuperación (30 días):</strong> Finance Pal
            provee un interruptor maestro en <em>Ajustes &gt; 10 · Conectores IA (MCP)</em> para suspender el servicio al
            instante, y resguarda los registros marcados como eliminados por MCP durante{" "}
            <span className="font-mono-tabular text-foreground font-semibold">30 días</span> antes de su purga automática
            definitiva e irreversible.
          </li>
        </ul>
      </section>

      <section className="space-y-4 pt-6 border-t border-border">
        <h2 className="text-xl font-bold text-foreground flex items-center gap-2 font-display">
          <span className="text-primary font-mono-tabular">5.</span> Licencia de Software y Propiedad Intelectual
        </h2>
        <p className="text-muted-foreground">
          El código fuente de Finance Pal se distribuye bajo la <strong className="text-foreground">Licencia MIT</strong>.
          No obstante, las marcas, logotipos, interfaces editoriales, tipografías y la denominación{" "}
          <strong className="text-foreground">&ldquo;Finance Pal&rdquo;</strong> pertenecen al Desarrollador; queda prohibida
          su suplantación (phishing) o uso engañoso.
        </p>
      </section>

      <section className="space-y-4 pt-6 border-t border-border">
        <h2 className="text-xl font-bold text-foreground flex items-center gap-2 font-display">
          <span className="text-primary font-mono-tabular">6.</span> Reglas de Uso Aceptable
        </h2>
        <p className="text-muted-foreground">El Usuario se compromete a abstenerse de:</p>
        <ul className="list-disc pl-6 space-y-1.5 text-muted-foreground">
          <li>Enviar contenido difamatorio, fraudulento o ilegal en los formularios de reseñas o sugerencias.</li>
          <li>Ejecutar ataques DoS/DDoS, scraping abusivo o eludir los límites de tasa por usuario/IP en web, Supabase o <code className="font-mono">/mcp</code>.</li>
          <li>Intentar evadir verificaciones PKCE (<code className="font-mono">S256</code>), abusar de Dynamic Client Registration (<code className="font-mono">/oauth/register</code>) o inyectar instrucciones maliciosas (<em>prompt injection</em>).</li>
          <li>Utilizar la plataforma con fines ilícitos conforme a las leyes aplicables.</li>
        </ul>
      </section>

      <section className="space-y-4 pt-6 border-t border-border">
        <h2 className="text-xl font-bold text-foreground flex items-center gap-2 font-display">
          <span className="text-primary font-mono-tabular">7.</span> Exclusión de Garantías (&ldquo;TAL CUAL / AS IS&rdquo;)
        </h2>
        <p className="font-mono text-xs sm:text-sm bg-muted/60 p-4 rounded-xl border border-border text-foreground leading-relaxed">
          EL SOFTWARE, EL SITIO WEB, LOS SERVICIOS DE SINCRONIZACIÓN Y LOS ENDPOINTS MCP SE PROPORCIONAN &ldquo;TAL
          CUAL&rdquo; (&ldquo;AS IS&rdquo;) Y &ldquo;SEGÚN DISPONIBILIDAD&rdquo;, SIN GARANTÍAS EXPRESAS NI IMPLÍCITAS DE
          COMERCIABILIDAD, ADECUACIÓN A UN FIN PARTICULAR, DISPONIBILIDAD CONTINUA NI AUSENCIA DE FALLOS.
        </p>
        <p className="text-muted-foreground">
          El Desarrollador no garantiza disponibilidad ininterrumpida de proveedores externos (Vercel, Supabase, GitHub o
          clientes de IA terceros). El Usuario es responsable de conservar respaldos propios mediante exportación JSON/CSV.
        </p>
      </section>

      <section className="space-y-4 pt-6 border-t border-border">
        <h2 className="text-xl font-bold text-foreground flex items-center gap-2 font-display">
          <span className="text-primary font-mono-tabular">8.</span> Limitación Extrema de Responsabilidad
        </h2>
        <p className="text-muted-foreground">
          En la máxima medida permitida por la ley, <strong className="text-foreground">migol-dev</strong> no será responsable
          frente al Usuario ni terceros por:
        </p>
        <ul className="list-disc pl-6 space-y-1.5 text-muted-foreground">
          <li>Pérdida de beneficios, datos locales, comprobantes o discrepancias frente a cuentas bancarias reales.</li>
          <li>Decisiones económicas tomadas con base en métricas locales o en respuestas generadas por agentes IA conectados por MCP.</li>
          <li>Alucinaciones, interpretaciones erróneas o mutaciones ejecutadas por asistentes externos dentro de los alcances aprobados por el Usuario.</li>
          <li>Purgas definitivas de registros que excedieron el plazo de 30 días en la Papelera de Recuperación o fallos de hardware/conectividad.</li>
        </ul>
      </section>

      <section className="space-y-4 pt-6 border-t border-border">
        <h2 className="text-xl font-bold text-foreground flex items-center gap-2 font-display">
          <span className="text-primary font-mono-tabular">9.</span> Modificaciones a los Términos
        </h2>
        <p className="text-muted-foreground">
          El Desarrollador puede actualizar estos Términos para reflejar cambios normativos o nuevas capacidades técnicas,
          entrando en vigor desde su publicación con fecha actualizada en este portal.
        </p>
      </section>

      <section className="space-y-4 pt-6 border-t border-border">
        <h2 className="text-xl font-bold text-foreground flex items-center gap-2 font-display">
          <span className="text-primary font-mono-tabular">10.</span> Ley Aplicable y Jurisdicción
        </h2>
        <p className="text-muted-foreground">
          Para la interpretación y cumplimiento de estos Términos se aplicará la legislación federal de los{" "}
          <strong className="text-foreground">Estados Unidos Mexicanos</strong>, sometiéndose las partes a los tribunales
          competentes de México y renunciando a cualquier otro fuero por razón de domicilio presente o futuro.
        </p>
      </section>
    </LegalShell>
  );
}
