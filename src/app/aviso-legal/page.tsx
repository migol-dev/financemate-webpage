import type { Metadata } from "next";
import Link from "next/link";
import { LegalShell } from "@/components/legal/legal-shell";

export const metadata: Metadata = {
  title: "Aviso Legal y Deslinde Financiero | Finance Pal",
  description:
    "Aviso legal obligatorio y deslinde taxativo de responsabilidad financiera, bancaria y fiscal de Finance Pal.",
};

export default function AvisoLegalPage() {
  return (
    <LegalShell
      title="Aviso Legal y Deslinde Financiero"
      subtitle="Declaración formal sobre la naturaleza informática no regulada de Finance Pal, deslinde de asesoría financiera y exención de responsabilidad civil."
      lastUpdated="9 de octubre de 2026"
      readTime="5 min"
    >
      <section className="space-y-4">
        <h2 className="text-xl font-bold text-white flex items-center gap-2">
          <span className="text-cyan-400 font-mono">1.</span> Información General y Titularidad
        </h2>
        <p>
          En cumplimiento con los principios internacionales de transparencia digital y las disposiciones relativas al
          comercio electrónico y servicios de la sociedad de la información, se informa que la plataforma, portal web y
          aplicaciones conocidas como <strong className="text-white">Finance Pal</strong> constituyen un proyecto de
          software creado, administrado y mantenido por un{" "}
          <strong className="text-white">desarrollador independiente (persona física)</strong> bajo el alias público de
          desarrollo <strong className="text-cyan-400 font-mono">migol-dev</strong> (en adelante, el &ldquo;Titular&rdquo;).
        </p>
        <p>
          Para cualquier notificación de índole legal o técnica, el canal directo es:{" "}
          <a href="mailto:business.migol.gg@gmail.com" className="text-cyan-300 font-mono hover:underline">
            business.migol.gg@gmail.com
          </a>
          .
        </p>
      </section>

      <section className="space-y-4 pt-6 border-t border-white/10">
        <h2 className="text-xl font-bold text-white flex items-center gap-2">
          <span className="text-cyan-400 font-mono">2.</span> Deslinde Regulatorio y Bancario Categórico
        </h2>
        <div className="p-4 rounded-2xl bg-rose-500/10 border border-rose-500/30 text-rose-200 text-xs sm:text-sm">
          <strong>DECLARACIÓN REGULATORIA EXPRESA:</strong> Finance Pal NO es una entidad financiera, banco, fondo de
          inversión, ni sociedad de tecnología financiera (Fintech).
        </div>
        <p>
          En relación con las leyes bancarias de los Estados Unidos Mexicanos (incluyendo la Ley para Regular las
          Instituciones de Tecnología Financiera - Ley Fintech, Ley de Instituciones de Crédito, y regulaciones de la CNBV
          y CONDUSEF), así como leyes internacionales análogas (SEC, FINRA, CFPB en EE. UU., y directivas bancarias de la
          UE):
        </p>
        <ul className="list-disc pl-6 space-y-2 text-slate-300">
          <li>
            <strong className="text-white">Cero Captación de Fondos:</strong> Finance Pal no capta, recibe, transfiere,
            retira, invierte ni custodia dinero real bajo ninguna circunstancia.
          </li>
          <li>
            <strong className="text-white">Sin Conexión Directa a Cuentas Bancarias:</strong> La aplicación no opera con
            APIs de agregación bancaria automatizada ni tiene acceso a credenciales de banca electrónica. Toda cifra es
            introducida manualmente por el usuario.
          </li>
          <li>
            <strong className="text-white">Etiquetas y Campos Libres:</strong> Cualquier mención a &ldquo;Bancos&rdquo;,
            &ldquo;CLABE interbancaria&rdquo;, &ldquo;Dinero en Efectivo&rdquo; o &ldquo;Cuentas&rdquo; en la interfaz
            consiste en meras cadenas de texto de organización privada, equiparables a una libreta de notas personal en
            papel o a una hoja de cálculo.
          </li>
        </ul>
      </section>

      <section className="space-y-4 pt-6 border-t border-white/10">
        <h2 className="text-xl font-bold text-white flex items-center gap-2">
          <span className="text-cyan-400 font-mono">3.</span> Exclusión de Asesoramiento Financiero, Fiscal y de Inversión
        </h2>
        <p>
          La información visualizada en la plataforma (incluyendo estadísticas de flujo de caja, porcentajes de tasa de
          ahorro, balances netos y ritmos diarios predictivos de metas):
        </p>
        <ul className="list-disc pl-6 space-y-2 text-slate-300">
          <li>
            <strong className="text-white">Es exclusivamente informativa y analítica:</strong> Se basa en fórmulas
            matemáticas simples aplicadas a los datos que el propio usuario ingresa.
          </li>
          <li>
            <strong className="text-white">No es recomendación financiera:</strong> Ningún cálculo debe interpretarse como
            asesoramiento profesional de inversión, contable o fiscal.
          </li>
          <li>
            <strong className="text-white">Consulta profesional requerida:</strong> Si el Usuario requiere asesoramiento
            patrimonial, gestión de pasivos o cumplimiento de obligaciones tributarias (ante el SAT u organismos
            homólogos), debe acudir con un contador público certificado o un asesor financiero debidamente acreditado.
          </li>
        </ul>
      </section>

      <section className="space-y-4 pt-6 border-t border-white/10">
        <h2 className="text-xl font-bold text-white flex items-center gap-2">
          <span className="text-cyan-400 font-mono">4.</span> Exención de Responsabilidad Civil y Daños
        </h2>
        <p>
          En la mayor medida permitida por las leyes civiles y mercantiles aplicables, el Titular queda exento de toda
          responsabilidad por:
        </p>
        <ul className="list-disc pl-6 space-y-2 text-slate-300">
          <li>
            Cualquier daño directo, indirecto, incidental, consecuente o punitivo resultante del uso o la imposibilidad de
            uso del software.
          </li>
          <li>
            Pérdidas patrimoniales, decisiones de inversión adversas, cobros fallidos entre particulares registrados en el
            módulo de &ldquo;Deudas&rdquo; o recargos moratorios por conceptos fijos no atendidos a tiempo.
          </li>
          <li>
            Pérdida o corrupción de datos locales ocasionada por desinstalación de la app, limpieza del navegador o fallos
            en el hardware del dispositivo.
          </li>
        </ul>
      </section>

      <section className="space-y-4 pt-6 border-t border-white/10">
        <h2 className="text-xl font-bold text-white flex items-center gap-2">
          <span className="text-cyan-400 font-mono">5.</span> Régimen de Propiedad Intelectual, Términos y Terceros
        </h2>
        <p>
          El código fuente de Finance Pal se libera bajo Licencia MIT, lo que autoriza su uso libre de regalías conforme
          a dicha licencia. No obstante, las marcas, signos de identidad, interfaces gráficas y logotipos son propiedad
          exclusiva de migol-dev. El acceso y uso de la plataforma se rige por nuestros{" "}
          <Link href="/terminos" className="text-cyan-400 hover:underline">
            Términos y Condiciones de Uso
          </Link>{" "}
          y nuestra{" "}
          <Link href="/privacidad" className="text-cyan-400 hover:underline">
            Política de Privacidad Integral
          </Link>
          .
        </p>
        <p>
          El sitio web puede contener enlaces a plataformas de terceros (como GitHub, Vercel o Supabase). El Titular no
          ejerce control sobre los contenidos, políticas de privacidad ni prácticas de dichos sitios, deslindando toda
          responsabilidad por su uso.
        </p>
      </section>
    </LegalShell>
  );
}
