import type { Metadata } from "next";
import Link from "next/link";
import { LegalShell } from "@/components/legal/legal-shell";

export const metadata: Metadata = {
  title: "Aviso Legal y Deslinde Financiero",
  description:
    "Aviso legal obligatorio y deslinde taxativo de responsabilidad financiera, bancaria, fiscal e IA/MCP de Finance Pal.",
  alternates: {
    canonical: "/aviso-legal",
  },
  openGraph: {
    title: "Aviso Legal y Deslinde Financiero | Finance Pal",
    description:
      "Aviso legal obligatorio y deslinde taxativo de responsabilidad financiera, bancaria y de conectividad IA (MCP) de Finance Pal.",
    url: "/aviso-legal",
  },
};

export default function AvisoLegalPage() {
  return (
    <LegalShell
      title="Aviso Legal y Deslinde Financiero"
      subtitle="Declaración formal sobre la naturaleza informática no regulada de Finance Pal, deslinde de asesoría financiera, respuestas de IA externa (MCP) y exención de responsabilidad civil."
      lastUpdated="16 de noviembre de 2026"
      readTime="6 min"
    >
      <section className="space-y-4">
        <h2 className="text-xl font-bold text-foreground flex items-center gap-2 font-display">
          <span className="text-primary font-mono-tabular">1.</span> Información General y Titularidad
        </h2>
        <p className="text-muted-foreground">
          En cumplimiento con los principios internacionales de transparencia digital, se informa que la plataforma, portal
          web, aplicaciones y endpoints MCP conocidos como <strong className="text-foreground">Finance Pal</strong> constituyen
          un proyecto de software creado, administrado y mantenido por un{" "}
          <strong className="text-foreground">desarrollador independiente (persona física)</strong> bajo el alias público{" "}
          <strong className="text-primary font-mono">migol-dev</strong> (en adelante, el &ldquo;Titular&rdquo;).
        </p>
        <p className="text-muted-foreground">
          Para cualquier notificación legal o técnica, el canal directo es:{" "}
          <a href="mailto:business.migol.gg@gmail.com" className="text-primary font-mono hover:underline underline-offset-4">
            business.migol.gg@gmail.com
          </a>
          .
        </p>
      </section>

      <section className="space-y-4 pt-6 border-t border-border">
        <h2 className="text-xl font-bold text-foreground flex items-center gap-2 font-display">
          <span className="text-primary font-mono-tabular">2.</span> Deslinde Regulatorio y Bancario Categórico
        </h2>
        <div className="p-4 rounded-xl bg-muted/60 border border-border text-foreground text-xs sm:text-sm leading-relaxed">
          <strong className="text-editorial-terracotta font-mono uppercase tracking-wider mr-1.5">
            DECLARACIÓN REGULATORIA EXPRESA:
          </strong>
          Finance Pal NO es una entidad financiera, banco, fondo de inversión ni sociedad de tecnología financiera (Fintech).
        </div>
        <p className="text-muted-foreground">
          En relación con la legislación financiera aplicable (incluyendo la Ley Fintech, Ley de Instituciones de Crédito,
          CNBV y CONDUSEF en México, así como SEC, FINRA, CFPB o directivas europeas):
        </p>
        <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
          <li>
            <strong className="text-foreground">Cero Captación de Fondos:</strong> Finance Pal no capta, recibe,
            transfiere, retira, invierte ni custodia dinero real bajo ninguna circunstancia.
          </li>
          <li>
            <strong className="text-foreground">Sin Conexión Directa a Cuentas Bancarias:</strong> La aplicación no integra
            APIs de agregación bancaria ni accede a credenciales de banca electrónica. Ni siquiera el Conector Universal
            MCP accede a fondos reales ni ejecuta pagos monetarios.
          </li>
          <li>
            <strong className="text-foreground">Etiquetas y Campos Libres:</strong> &ldquo;Bancos&rdquo;, &ldquo;CLABE&rdquo;,
            &ldquo;Efectivo&rdquo; y &ldquo;Cuentas&rdquo; son únicamente categorías organizativas definidas por el propio usuario.
          </li>
        </ul>
      </section>

      <section className="space-y-4 pt-6 border-t border-border">
        <h2 className="text-xl font-bold text-foreground flex items-center gap-2 font-display">
          <span className="text-primary font-mono-tabular">3.</span> Exclusión de Asesoramiento Financiero, Fiscal e IA (MCP)
        </h2>
        <p className="text-muted-foreground">
          Tanto la información calculada localmente en la aplicación (gráficos DonutChart, tasas de ahorro, proyecciones
          de metas y balance anual) como los resúmenes, interpretaciones o respuestas generadas mediante{" "}
          <strong className="text-foreground">Conectores de Inteligencia Artificial (MCP)</strong>:
        </p>
        <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
          <li>
            <strong className="text-foreground">Son estrictamente informativos:</strong> Dependen de los datos introducidos
            por el usuario y de modelos probabilísticos externos sujetos a posibles alucinaciones o errores aritméticos.
          </li>
          <li>
            <strong className="text-foreground">No constituyen recomendación profesional:</strong> Ningún resultado en la
            app o dentro de Claude, ChatGPT, Gemini u otro asistente conectado equivale a asesoría financiera, fiscal o de inversión.
          </li>
          <li>
            <strong className="text-foreground">Consulta profesional obligatoria:</strong> Para decisiones patrimoniales o
            cumplimiento fiscal (SAT u organismos análogos), consulta con un contador público o asesor acreditado.
          </li>
        </ul>
      </section>

      <section className="space-y-4 pt-6 border-t border-border">
        <h2 className="text-xl font-bold text-foreground flex items-center gap-2 font-display">
          <span className="text-primary font-mono-tabular">4.</span> Exención de Responsabilidad Civil y Daños
        </h2>
        <p className="text-muted-foreground">
          En la mayor medida permitida por la ley, el Titular queda exento de toda responsabilidad por:
        </p>
        <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
          <li>
            Cualquier daño directo, indirecto, incidental o consecuente derivado del uso o imposibilidad de uso del software.
          </li>
          <li>
            Pérdidas patrimoniales, decisiones basadas en consultas de IA conectadas vía MCP, cobros fallidos en &ldquo;Deudas&rdquo;
            o recargos por pagos fijos no atendidos.
          </li>
          <li>
            Operaciones de creación, edición o envío a Papelera (y su purga definitiva tras 30 días) ejecutadas por un
            asistente externo cuando el Usuario haya desactivado manualmente el Modo Solo Lectura.
          </li>
          <li>
            Corrupción o pérdida de almacenamiento local causada por limpieza del navegador, fallos del dispositivo o
            desinstalación sin respaldo previo.
          </li>
        </ul>
      </section>

      <section className="space-y-4 pt-6 border-t border-border">
        <h2 className="text-xl font-bold text-foreground flex items-center gap-2 font-display">
          <span className="text-primary font-mono-tabular">5.</span> Régimen de Propiedad Intelectual, Términos y Terceros
        </h2>
        <p className="text-muted-foreground">
          El código fuente de Finance Pal se libera bajo Licencia MIT, mientras que la identidad visual, logotipos y marcas
          pertenecen a <strong className="text-foreground">migol-dev</strong>. El uso del ecosistema se rige por nuestros{" "}
          <Link href="/terminos" className="text-primary hover:underline underline-offset-4">
            Términos y Condiciones de Uso
          </Link>{" "}
          y nuestra{" "}
          <Link href="/privacidad" className="text-primary hover:underline underline-offset-4">
            Política de Privacidad Integral
          </Link>
          .
        </p>
        <p className="text-muted-foreground">
          Tanto los proveedores de infraestructura (GitHub, Vercel, Supabase) como los asistentes de IA de terceros
          vinculados voluntariamente por el Usuario mediante OAuth 2.1 / MCP operan bajo sus propios términos y políticas,
          deslindando al Titular de toda responsabilidad sobre sus plataformas.
        </p>
      </section>
    </LegalShell>
  );
}
