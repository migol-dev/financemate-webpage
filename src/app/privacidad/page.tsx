import type { Metadata } from "next";
import Link from "next/link";
import { LegalShell } from "@/components/legal/legal-shell";

export const metadata: Metadata = {
  title: "Política de Privacidad Integral | Finance Pal",
  description:
    "Conoce cómo se tratan y protegen tus datos en Finance Pal bajo principios Local-First, privacidad por diseño y leyes internacionales.",
};

export default function PrivacidadPage() {
  return (
    <LegalShell
      title="Política de Privacidad Integral"
      subtitle="Explicación detallada de cómo, por qué y bajo qué estándares de seguridad se tratan los datos personales en la Web Oficial y en la aplicación Finance Pal."
      lastUpdated="9 de octubre de 2026"
      readTime="7 min"
    >
      <section className="space-y-4">
        <h2 className="text-xl font-bold text-white flex items-center gap-2">
          <span className="text-cyan-400 font-mono">1.</span> Responsable del Tratamiento de Datos
        </h2>
        <p>
          El responsable del tratamiento de los datos personales recabados a través del sitio web y las aplicaciones de{" "}
          <strong className="text-white">Finance Pal</strong> es un{" "}
          <strong className="text-white">desarrollador de software independiente (persona física)</strong>, identificado
          en la comunidad técnica como <strong className="text-cyan-400 font-mono">migol-dev</strong> (en adelante, el
          &ldquo;Responsable&rdquo;).
        </p>
        <p>
          Para cualquier consulta, aclaración o ejercicio de derechos de privacidad, el canal oficial y directo de
          atención es:
        </p>
        <div className="p-4 rounded-2xl bg-slate-950/90 border border-slate-800 text-slate-300 font-mono text-xs sm:text-sm">
          Correo de contacto de privacidad:{" "}
          <a href="mailto:business.migol.gg@gmail.com" className="text-cyan-300 hover:underline">
            business.migol.gg@gmail.com
          </a>
        </div>
      </section>

      <section className="space-y-4 pt-6 border-t border-white/10">
        <h2 className="text-xl font-bold text-white flex items-center gap-2">
          <span className="text-cyan-400 font-mono">2.</span> Filosofía Fundamental: Privacidad &ldquo;Local-First&rdquo;
        </h2>
        <div className="p-4 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-200 text-xs sm:text-sm">
          <strong>PRINCIPIO CENTRAL:</strong> En Finance Pal, tus registros financieros son de tu propiedad exclusiva y
          residen primordialmente en tu propio dispositivo. No monetizamos tu información personal ni la vendemos a
          anunciantes.
        </div>
        <p>
          Por defecto, la aplicación opera sin necesidad de crear cuentas ni conectarse a internet:
        </p>
        <ul className="list-disc pl-6 space-y-1.5 text-slate-300">
          <li>
            <strong className="text-white">Almacenamiento Local:</strong> Tus movimientos, presupuestos, notas,
            metas, deudas y fotos de comprobantes se guardan de forma local en el almacenamiento interno de tu navegador
            (IndexedDB / LocalStorage) o en la memoria segura del dispositivo Android (conoce la tabla detallada en nuestra{" "}
            <Link href="/cookies" className="text-cyan-400 hover:underline">
              Política de Cookies y Almacenamiento Local
            </Link>
            ).
          </li>
          <li>
            <strong className="text-white">Sin Servidores Intermedios Obligatorios:</strong> El desarrollador no tiene
            acceso ni visibilidad de tus balances, cuentas o transacciones cuando usas la app en modo local.
          </li>
        </ul>
      </section>

      <section className="space-y-4 pt-6 border-t border-white/10">
        <h2 className="text-xl font-bold text-white flex items-center gap-2">
          <span className="text-cyan-400 font-mono">3.</span> Datos Recopilados y Finalidades Específicas
        </h2>
        <p>Distinguimos claramente los datos tratados en la página web oficial y en la aplicación:</p>

        <div className="space-y-4 mt-3">
          <div className="p-5 rounded-2xl bg-slate-900/60 border border-slate-800">
            <h3 className="font-semibold text-white text-base mb-2">A. En el Sitio Web Oficial</h3>
            <ul className="list-disc pl-6 space-y-2 text-xs sm:text-sm text-slate-300">
              <li>
                <strong className="text-white">Reseñas de la Comunidad:</strong> Recopilamos nombre o alias, puntuación,
                comentario y correo electrónico. <span className="text-cyan-300">Garantía:</span> El correo electrónico se
                guarda de forma estrictamente privada con el único fin de evitar reseñas fraudulentas y moderación de spam;
                nunca se publica en la web.
              </li>
              <li>
                <strong className="text-white">Buzón de Ideas y Reporte de Errores:</strong> Recopilamos tipo de reporte,
                título, descripción, y opcionalmente un nombre y correo electrónico si deseas recibir retroalimentación del
                desarrollador sobre la corrección del fallo.
              </li>
              <li>
                <strong className="text-white">Métrica Anónima de Descargas:</strong> Al hacer clic en descargar el APK,
                se genera un identificador aleatorio UUID anónimo (<code className="text-cyan-300">visitorId</code>) en el
                almacenamiento local para registrar el contador de descargas de la versión en Supabase. No se asocia con tu
                identidad ni con direcciones IP públicas (detalles en nuestra{" "}
                <Link href="/cookies" className="text-cyan-400 hover:underline">
                  Política de Cookies y Almacenamiento Local
                </Link>
                ).
              </li>
              <li>
                <strong className="text-white">Acceso Administrativo:</strong> Correo de GitHub OAuth utilizado únicamente
                por el administrador para ingresar a la consola de moderación.
              </li>
            </ul>
          </div>

          <div className="p-5 rounded-2xl bg-slate-900/60 border border-slate-800">
            <h3 className="font-semibold text-white text-base mb-2">B. En la Aplicación Móvil y Web (Sincronización Opcional)</h3>
            <p className="text-xs sm:text-sm text-slate-300 mb-2">
              Si y solo si el Usuario decide activar voluntariamente la sincronización en la nube:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-xs sm:text-sm text-slate-300">
              <li>
                <strong className="text-white">Cuenta de Usuario:</strong> Dirección de correo electrónico y contraseña
                (con hash criptográfico seguro en Supabase Auth) o identificador de sesión de Google/GitHub OAuth.
              </li>
              <li>
                <strong className="text-white">Copia de Respaldo Cifrada:</strong> El registro de transacciones, metas y
                cuentas se sincroniza mediante canales seguros cifrados (TLS/HTTPS de 256 bits) hacia la base de datos de
                Supabase con soporte de claves criptográficas y aislamiento de datos por usuario (Row Level Security).
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className="space-y-4 pt-6 border-t border-white/10">
        <h2 className="text-xl font-bold text-white flex items-center gap-2">
          <span className="text-cyan-400 font-mono">4.</span> Bases Legales del Tratamiento
        </h2>
        <p>Tratamos tus datos con estricto apego a las siguientes bases jurídicas:</p>
        <ul className="list-disc pl-6 space-y-2 text-slate-300">
          <li>
            <strong className="text-white">Consentimiento Expreso (Art. 6.1.a RGPD / LFPDPPP):</strong> Al enviar una
            reseña en el formulario, reportar una sugerencia o crear una cuenta de sincronización en la nube, otorgas tu
            consentimiento informado mediante casillas de verificación explícitas.
          </li>
          <li>
            <strong className="text-white">Interés Legítimo y Necesidad Técnica (Art. 6.1.f RGPD):</strong> Para prevenir
            ataques informáticos, proteger la infraestructura del servidor y contabilizar de forma anónima las descargas del
            software libre.
          </li>
        </ul>
      </section>

      <section className="space-y-4 pt-6 border-t border-white/10">
        <h2 className="text-xl font-bold text-white flex items-center gap-2">
          <span className="text-cyan-400 font-mono">5.</span> Derechos de los Usuarios (ARCO, RGPD y CCPA)
        </h2>
        <p>
          Usted tiene derecho a ejercer en todo momento sus derechos de protección de datos:
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm">
          <div className="p-3.5 rounded-xl bg-slate-950/70 border border-slate-800">
            <strong className="text-cyan-400 block mb-1">Acceso y Portabilidad:</strong>
            Puedes exportar todos tus datos financieros en archivos abiertos JSON y CSV directamente desde el menú Ajustes de la app.
          </div>
          <div className="p-3.5 rounded-xl bg-slate-950/70 border border-slate-800">
            <strong className="text-cyan-400 block mb-1">Cancelación y Supresión:</strong>
            Puedes borrar completamente tus datos en tu dispositivo mediante la opción &ldquo;Restablecer todo&rdquo;.
          </div>
          <div className="p-3.5 rounded-xl bg-slate-950/70 border border-slate-800">
            <strong className="text-cyan-400 block mb-1">Rectificación:</strong>
            Puedes editar o corregir cualquier reseña enviada o dato en la nube.
          </div>
          <div className="p-3.5 rounded-xl bg-slate-950/70 border border-slate-800">
            <strong className="text-cyan-400 block mb-1">Derecho al Olvido (Eliminación en Nube):</strong>
            Para eliminar de forma permanente tu cuenta en Supabase o una reseña publicada, envía tu solicitud a{" "}
            <span className="text-cyan-300 font-mono">business.migol.gg@gmail.com</span> y será procesada en menos de 72 horas.
          </div>
        </div>
      </section>

      <section className="space-y-4 pt-6 border-t border-white/10">
        <h2 className="text-xl font-bold text-white flex items-center gap-2">
          <span className="text-cyan-400 font-mono">6.</span> Proveedores de Infraestructura y Transferencias
        </h2>
        <p>
          Finance Pal utiliza servicios de infraestructura tecnológica confiables que cumplen con estándares de
          ciberseguridad internacionales (SOC 2, ISO 27001 y GDPR):
        </p>
        <ul className="list-disc pl-6 space-y-1.5 text-slate-300">
          <li><strong className="text-white">Vercel Inc.:</strong> Alojamiento y entrega perimetral (CDN) del sitio web y PWA.</li>
          <li><strong className="text-white">Supabase Inc. (AWS):</strong> Base de datos PostgreSQL en la nube para autenticación opcional y almacenamiento de reseñas.</li>
          <li><strong className="text-white">GitHub Inc.:</strong> Alojamiento del repositorio de código abierto y binarios APK.</li>
        </ul>
        <p>No compartimos datos con redes de publicidad (Google Ads, Meta, TikTok) ni con corredores de datos.</p>
      </section>

      <section className="space-y-4 pt-6 border-t border-white/10">
        <h2 className="text-xl font-bold text-white flex items-center gap-2">
          <span className="text-cyan-400 font-mono">7.</span> Retención de Datos y Seguridad
        </h2>
        <p>
          Los datos locales permanecen en tu dispositivo hasta que decidas borrarlos o limpiar el almacenamiento de tu
          navegador. Los datos de reseñas aprobadas permanecen visibles en la comunidad hasta que solicites su retiro. Las
          comunicaciones técnicas de errores se archivan únicamente durante el tiempo necesario para corregir el fallo.
        </p>
      </section>
    </LegalShell>
  );
}
