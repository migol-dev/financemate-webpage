import type { Metadata } from "next";
import Link from "next/link";
import { LegalShell } from "@/components/legal/legal-shell";

export const metadata: Metadata = {
  title: "Política de Cookies y Almacenamiento Local | Finance Pal",
  description:
    "Transparencia total sobre el uso de cookies técnicas y almacenamiento local (localStorage e IndexedDB) en Finance Pal.",
};

export default function CookiesPage() {
  return (
    <LegalShell
      title="Política de Cookies y Almacenamiento Local"
      subtitle="Conoce con total claridad cómo utilizamos las tecnologías de almacenamiento web (Cookies, localStorage e IndexedDB) con fines técnicos y sin rastreo publicitario."
      lastUpdated="9 de octubre de 2026"
      readTime="5 min"
    >
      <section className="space-y-4">
        <h2 className="text-xl font-bold text-white flex items-center gap-2">
          <span className="text-cyan-400 font-mono">1.</span> ¿Qué son las Cookies y el Almacenamiento Web?
        </h2>
        <p>
          Las <strong className="text-white">Cookies</strong> son pequeños archivos de texto que los sitios web colocan
          en tu dispositivo mientras navegas. El <strong className="text-white">Almacenamiento Local (localStorage e
          IndexedDB)</strong> es una tecnología moderna del navegador web que permite guardar datos de manera persistente
          directamente en tu dispositivo, sin enviarlos automáticamente en cada petición de red HTTP al servidor.
        </p>
        <div className="p-4 rounded-2xl bg-cyan-500/10 border border-cyan-500/30 text-cyan-200 text-xs sm:text-sm">
          <strong>COMPROMISO DE NO RASTREO:</strong> Finance Pal no utiliza cookies publicitarias, píxeles de seguimiento
          de redes sociales (como Meta Pixel o TikTok Pixel) ni plataformas de publicidad comportamental (como Google
          AdSense).
        </div>
      </section>

      <section className="space-y-4 pt-6 border-t border-white/10">
        <h2 className="text-xl font-bold text-white flex items-center gap-2">
          <span className="text-cyan-400 font-mono">2.</span> Inventario de Almacenamiento en este Sitio Web
        </h2>
        <p>
          A continuación se detalla cada elemento de almacenamiento utilizado en el sitio web oficial y portal de descargas
          de Finance Pal:
        </p>

        <div className="overflow-x-auto mt-4">
          <table className="w-full text-left text-xs sm:text-sm border-collapse">
            <thead>
              <tr className="border-b border-slate-700 bg-slate-900/80 text-white font-mono">
                <th className="p-3">Nombre / Clave</th>
                <th className="p-3">Tipo</th>
                <th className="p-3">Finalidad</th>
                <th className="p-3">Duración</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800 text-slate-300">
              <tr>
                <td className="p-3 font-mono text-cyan-300">fm_visitor_id</td>
                <td className="p-3">localStorage</td>
                <td className="p-3">
                  Identificador aleatorio (UUID v4) anónimo para contabilizar descargas únicas de la versión del APK en la base de datos sin duplicados.
                </td>
                <td className="p-3">Persistente (hasta limpieza manual)</td>
              </tr>
              <tr>
                <td className="p-3 font-mono text-cyan-300">fm_has_downloaded</td>
                <td className="p-3">localStorage</td>
                <td className="p-3">
                  Indicador booleano que recuerda si el navegador ya inició una descarga para reflejarlo en la sección de reseñas.
                </td>
                <td className="p-3">Persistente (hasta limpieza manual)</td>
              </tr>
              <tr>
                <td className="p-3 font-mono text-cyan-300">fp_cookie_consent_accepted</td>
                <td className="p-3">localStorage</td>
                <td className="p-3">
                  Registra que el usuario leyó y aceptó el aviso informativo de almacenamiento local para no mostrar el banner repetidamente.
                </td>
                <td className="p-3">1 año</td>
              </tr>
              <tr>
                <td className="p-3 font-mono text-cyan-300">next-auth.session-token</td>
                <td className="p-3">Cookie HTTP (segura)</td>
                <td className="p-3">
                  Cookie de sesión estrictamente técnica requerida para autenticar al administrador en el panel interno de moderación (/admin).
                </td>
                <td className="p-3">Sesión (30 días)</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="space-y-4 pt-6 border-t border-white/10">
        <h2 className="text-xl font-bold text-white flex items-center gap-2">
          <span className="text-cyan-400 font-mono">3.</span> Almacenamiento en la Aplicación Web (PWA)
        </h2>
        <p>
          En la aplicación cliente (<span className="text-cyan-300 font-mono">financepal-web.vercel.app</span>), se
          utiliza almacenamiento local masivo con fines funcionales esenciales:
        </p>
        <ul className="list-disc pl-6 space-y-2 text-slate-300">
          <li>
            <strong className="text-white">Base de datos local (IndexedDB / localStorage):</strong> Almacena todas tus
            transacciones, balance neto, metas y configuración visual. Estos datos residen exclusivamente en tu navegador
            y no se transmiten a servidores externos a menos que actives la sincronización en la nube.
          </li>
          <li>
            <strong className="text-white">Tokens de Autenticación Supabase (Opcional):</strong> Si inicias sesión para
            sincronizar entre dispositivos, se guarda un token de acceso seguro para renovar la sesión criptográfica.
          </li>
        </ul>
      </section>

      <section className="space-y-4 pt-6 border-t border-white/10">
        <h2 className="text-xl font-bold text-white flex items-center gap-2">
          <span className="text-cyan-400 font-mono">4.</span> ¿Cómo Eliminar o Bloquear el Almacenamiento Local?
        </h2>
        <p>
          Usted tiene pleno control para eliminar en cualquier momento los datos almacenados o revocar el consentimiento
          directamente desde la configuración de su navegador:
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm">
          <div className="p-3.5 rounded-xl bg-slate-900/60 border border-slate-800">
            <strong className="text-white block mb-1">Google Chrome / Brave:</strong>
            Ajustes → Privacidad y seguridad → Borrar datos de navegación → Marcar &ldquo;Cookies y otros datos de sitios&rdquo;.
          </div>
          <div className="p-3.5 rounded-xl bg-slate-900/60 border border-slate-800">
            <strong className="text-white block mb-1">Mozilla Firefox:</strong>
            Ajustes → Privacidad & Seguridad → Cookies y datos del sitio → Hacer clic en &ldquo;Limpiar datos&rdquo;.
          </div>
          <div className="p-3.5 rounded-xl bg-slate-900/60 border border-slate-800">
            <strong className="text-white block mb-1">Apple Safari:</strong>
            Preferencias → Privacidad → Gestionar datos de sitios web → Buscar el dominio y pulsar &ldquo;Eliminar&rdquo;.
          </div>
          <div className="p-3.5 rounded-xl bg-slate-900/60 border border-slate-800">
            <strong className="text-white block mb-1">Microsoft Edge:</strong>
            Configuración → Cookies y permisos del sitio → Administrar y eliminar cookies y datos de sitios.
          </div>
        </div>
      </section>

      <section className="space-y-4 pt-6 border-t border-white/10">
        <h2 className="text-xl font-bold text-white flex items-center gap-2">
          <span className="text-cyan-400 font-mono">5.</span> Consultas y Contacto
        </h2>
        <p>
          Para cualquier duda sobre el funcionamiento de estas tecnologías en Finance Pal, puedes comunicarte con el
          desarrollador a través de:{" "}
          <a href="mailto:business.migol.gg@gmail.com" className="text-cyan-300 font-mono hover:underline">
            business.migol.gg@gmail.com
          </a>
          . Para conocer el marco legal integral y el tratamiento de tus datos, consulta nuestra{" "}
          <Link href="/privacidad" className="text-cyan-400 hover:underline">
            Política de Privacidad Integral
          </Link>{" "}
          y los{" "}
          <Link href="/terminos" className="text-cyan-400 hover:underline">
            Términos y Condiciones de Uso
          </Link>
          .
        </p>
      </section>
    </LegalShell>
  );
}
