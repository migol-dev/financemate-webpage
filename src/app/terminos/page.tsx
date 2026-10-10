import type { Metadata } from "next";
import Link from "next/link";
import { LegalShell } from "@/components/legal/legal-shell";

export const metadata: Metadata = {
  title: "Términos y Condiciones de Uso | Finance Pal",
  description:
    "Términos y condiciones legales que regulan el uso de la web oficial, PWA y aplicación móvil de Finance Pal.",
};

export default function TerminosPage() {
  return (
    <LegalShell
      title="Términos y Condiciones de Uso"
      subtitle="Condiciones generales que regulan el acceso, descarga y utilización del ecosistema de software Finance Pal (Sitio Web, Web App y Aplicación Android)."
      lastUpdated="9 de octubre de 2026"
      readTime="6 min"
    >
      <section className="space-y-4">
        <h2 className="text-xl font-bold text-white flex items-center gap-2">
          <span className="text-cyan-400 font-mono">1.</span> Identificación del Titular y Alcance
        </h2>
        <p>
          El presente documento establece los Términos y Condiciones de Uso (en adelante, los &ldquo;Términos&rdquo;) que
          rigen el acceso, navegación, descarga y uso de la plataforma digital y aplicaciones de{" "}
          <strong className="text-white">Finance Pal</strong>, incluyendo:
        </p>
        <ul className="list-disc pl-6 space-y-1.5 text-slate-300">
          <li>El sitio web oficial y portal de descargas accesible vía internet.</li>
          <li>
            La aplicación web (PWA) desplegada y accesible en{" "}
            <span className="text-cyan-300 font-mono">financepal-web.vercel.app</span>.
          </li>
          <li>
            La aplicación móvil nativa para Android distribuida en formato instalable (APK) o canales oficiales.
          </li>
        </ul>
        <p>
          El titular, creador y mantenedor de este software es un{" "}
          <strong className="text-white">desarrollador independiente (persona física)</strong> que opera públicamente bajo
          el alias de desarrollo <strong className="text-cyan-400 font-mono">migol-dev</strong> (en adelante, &ldquo;el
          Desarrollador&rdquo; o &ldquo;el Titular&rdquo;), con canal de contacto oficial en{" "}
          <span className="text-cyan-300 font-mono">business.migol.gg@gmail.com</span>. Finance Pal es un proyecto de
          software independiente y no constituye una sociedad mercantil, consorcio ni entidad corporativa constituida.
        </p>
      </section>

      <section className="space-y-4 pt-6 border-t border-white/10">
        <h2 className="text-xl font-bold text-white flex items-center gap-2">
          <span className="text-cyan-400 font-mono">2.</span> Aceptación de los Términos y Capacidad Legal
        </h2>
        <p>
          Al acceder a este sitio web, descargar el archivo APK, utilizar la versión web o interactuar con cualquiera
          de sus formularios o funciones, usted (en adelante, el &ldquo;Usuario&rdquo;) declara haber leído, comprendido
          y aceptado en su totalidad estos Términos, así como nuestra{" "}
          <Link href="/privacidad" className="text-cyan-400 hover:underline">
            Política de Privacidad
          </Link>{" "}
          y nuestra{" "}
          <Link href="/cookies" className="text-cyan-400 hover:underline">
            Política de Cookies y Almacenamiento Local
          </Link>
          .
        </p>
        <p>
          Para utilizar este servicio, el Usuario debe ser mayor de edad conforme a la legislación de su país de
          residencia (generalmente 18 años) o contar con la autorización y supervisión expresa de su padre, madre o
          tutor legal. Si usted no está de acuerdo con alguna cláusula de estos Términos, debe abstenerse de usar el sitio
          web y desinstalar la aplicación.
        </p>
      </section>

      <section className="space-y-4 pt-6 border-t border-white/10">
        <h2 className="text-xl font-bold text-white flex items-center gap-2">
          <span className="text-cyan-400 font-mono">3.</span> Naturaleza del Servicio y Deslinde Financiero
        </h2>
        <div className="p-4 rounded-2xl bg-amber-500/10 border border-amber-500/30 text-amber-200 text-xs sm:text-sm">
          <strong>AVISO CRÍTICO:</strong> Finance Pal es una herramienta estrictamente informática de organización
          personal y registro doméstico de datos financieros. Para consultar el detalle normativo completo, revise nuestro{" "}
          <Link href="/aviso-legal" className="text-cyan-300 underline font-medium hover:text-cyan-200">
            Aviso Legal y Deslinde Financiero
          </Link>
          .
        </div>
        <p>
          El Usuario reconoce y acepta de manera expresa e irrevocable lo siguiente:
        </p>
        <ol className="list-decimal pl-6 space-y-2 text-slate-300">
          <li>
            <strong className="text-white">No es una entidad financiera ni bancaria:</strong> Finance Pal NO es un banco,
            ni una Institución de Fondos de Pago Electrónico (IFPE), ni una Institución de Financiamiento Colectivo (IFC),
            ni una entidad Fintech regulada por la CNBV, CONDUSEF, SEC u organismos análogos. No capta recursos del
            público ni realiza transferencias reales de dinero.
          </li>
          <li>
            <strong className="text-white">Sin asesoramiento financiero o tributario:</strong> Ninguna métrica, gráfico,
            tasa de ahorro o proyección provista por Finance Pal constituye asesoría de inversión, contable, tributaria o
            financiera. Toda decisión económica es responsabilidad exclusiva del Usuario.
          </li>
          <li>
            <strong className="text-white">Registros autogestionados:</strong> Conceptos como &ldquo;Cuentas&rdquo;,
            &ldquo;CLABE&rdquo;, &ldquo;Deudas&rdquo; y &ldquo;Efectivo&rdquo; son etiquetas digitales organizativas creadas
            manualmente por el Usuario. La aplicación no se conecta a pasarelas bancarias automatizadas ni tiene acceso a
            fondos reales.
          </li>
        </ol>
      </section>

      <section className="space-y-4 pt-6 border-t border-white/10">
        <h2 className="text-xl font-bold text-white flex items-center gap-2">
          <span className="text-cyan-400 font-mono">4.</span> Licencia de Software y Propiedad Intelectual
        </h2>
        <p>
          El código fuente del software Finance Pal se distribuye públicamente bajo la{" "}
          <strong className="text-white">Licencia MIT</strong>, permitiendo su inspección, estudio y uso conforme a los
          términos de dicha licencia abierta.
        </p>
        <p>
          No obstante, los logotipos, identidad visual, diseños de interfaz gráfica, tipografías asociadas, nombres de
          dominio y la denominación distintiva <strong className="text-white">&ldquo;Finance Pal&rdquo;</strong> son de
          autoría y propiedad exclusiva del Desarrollador. Queda prohibida la apropiación engañosa de la marca para
          hacerse pasar por el software oficial o para cometer actos de suplantación de identidad (phishing).
        </p>
      </section>

      <section className="space-y-4 pt-6 border-t border-white/10">
        <h2 className="text-xl font-bold text-white flex items-center gap-2">
          <span className="text-cyan-400 font-mono">5.</span> Reglas de Uso Aceptable
        </h2>
        <p>Al utilizar el sitio web y sus servicios relacionados, el Usuario se compromete a:</p>
        <ul className="list-disc pl-6 space-y-1.5 text-slate-300">
          <li>No enviar contenido ofensivo, fraudulento, difamatorio o ilegal en los buzones de reseñas y sugerencias.</li>
          <li>No utilizar bots automatizados ni ejecutar ataques de denegación de servicio (DoS/DDoS) contra los servidores de la web o el backend en Supabase.</li>
          <li>No manipular los encabezados HTTP ni explotar vulnerabilidades de seguridad en las APIs de reseñas, descargas o reportes.</li>
          <li>No utilizar la plataforma para fines ilícitos o de lavado de dinero ficticio que infrinjan leyes locales o internacionales.</li>
        </ul>
        <p>
          El Desarrollador se reserva el derecho de rechazar, moderar o eliminar reseñas fraudulentas o reportes que
          infrinjan estas normas, sin previo aviso.
        </p>
      </section>

      <section className="space-y-4 pt-6 border-t border-white/10">
        <h2 className="text-xl font-bold text-white flex items-center gap-2">
          <span className="text-cyan-400 font-mono">6.</span> Exclusión de Garantías (&ldquo;TAL CUAL / AS IS&rdquo;)
        </h2>
        <p className="font-mono text-xs sm:text-sm bg-slate-950 p-4 rounded-xl border border-slate-800 text-slate-300">
          EL SOFTWARE, EL SITIO WEB Y LOS SERVICIOS DE SINCRONIZACIÓN SE PROPORCIONAN &ldquo;TAL CUAL&rdquo; (&ldquo;AS
          IS&rdquo;) Y &ldquo;SEGÚN DISPONIBILIDAD&rdquo;, SIN GARANTÍAS DE NINGÚN TIPO, YA SEAN EXPRESAS O IMPLÍCITAS,
          INCLUYENDO, PERO SIN LIMITARSE A, GARANTÍAS DE COMERCIABILIDAD, ADECUACIÓN PARA UN PROPÓSITO PARTICULAR O NO
          INFRACCIÓN.
        </p>
        <p>
          El Desarrollador no garantiza que el software esté libre de errores, que su funcionamiento sea ininterrumpido,
          que los cálculos matemáticos reflejen situaciones fiscales particulares, o que las copias de seguridad en la
          nube estén disponibles en caso de caídas de proveedores de infraestructura (Vercel, Supabase, GitHub). El
          Usuario es el único responsable de realizar copias de seguridad locales (exportaciones JSON/CSV) de sus datos.
        </p>
      </section>

      <section className="space-y-4 pt-6 border-t border-white/10">
        <h2 className="text-xl font-bold text-white flex items-center gap-2">
          <span className="text-cyan-400 font-mono">7.</span> Limitación Extrema de Responsabilidad
        </h2>
        <p>
          En la máxima medida permitida por la ley aplicable, en ningún caso el Desarrollador (migol-dev) será responsable
          ante el Usuario ni ante terceros por:
        </p>
        <ul className="list-disc pl-6 space-y-1.5 text-slate-300">
          <li>Pérdida de beneficios, ingresos, ahorros anticipados o datos financieros.</li>
          <li>Decisiones personales de endeudamiento, ahorro, gasto o inversión tomadas con base en la aplicación.</li>
          <li>Pérdida de comprobantes o tickets almacenados en el dispositivo.</li>
          <li>Discrepancias entre los saldos ingresados manualmente y los saldos reales de cuentas bancarias.</li>
          <li>Interrupciones del servicio, fallos de conectividad, ciberataques o corrupción del almacenamiento local.</li>
        </ul>
      </section>

      <section className="space-y-4 pt-6 border-t border-white/10">
        <h2 className="text-xl font-bold text-white flex items-center gap-2">
          <span className="text-cyan-400 font-mono">8.</span> Modificaciones a los Términos
        </h2>
        <p>
          El Desarrollador se reserva el derecho de actualizar o modificar estos Términos en cualquier momento para
          reflejar cambios legislativos, mejoras técnicas o nuevas funcionalidades. Las modificaciones entrarán en
          vigor inmediatamente después de su publicación en esta página web, indicando la fecha de última actualización.
        </p>
      </section>

      <section className="space-y-4 pt-6 border-t border-white/10">
        <h2 className="text-xl font-bold text-white flex items-center gap-2">
          <span className="text-cyan-400 font-mono">9.</span> Ley Aplicable y Jurisdicción
        </h2>
        <p>
          Para la interpretación, cumplimiento y resolución de cualquier controversia derivada de estos Términos, se
          aplicará la legislación federal de los{" "}
          <strong className="text-white">Estados Unidos Mexicanos</strong> (incluyendo el Código Civil Federal, Código de
          Comercio y Ley Federal de Protección al Consumidor en lo conducente).
        </p>
        <p>
          Las partes se someten a la competencia de los tribunales competentes de México, renunciando expresamente a
          cualquier otro fuero que pudiera corresponderles por razón de sus domicilios presentes o futuros.
        </p>
      </section>
    </LegalShell>
  );
}
