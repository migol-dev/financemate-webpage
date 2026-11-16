import type { Metadata } from "next";
import Link from "next/link";
import { LegalShell } from "@/components/legal/legal-shell";

export const metadata: Metadata = {
  title: "Política de Privacidad Integral",
  description:
    "Conoce cómo se tratan y protegen tus datos en Finance Pal bajo principios Local-First, cifrado WebCrypto AES-256, privacidad por diseño y conectores MCP con OAuth 2.1.",
  alternates: {
    canonical: "/privacidad",
  },
  openGraph: {
    title: "Política de Privacidad Integral | Finance Pal",
    description:
      "Conoce cómo se tratan y protegen tus datos en Finance Pal bajo principios Local-First, privacidad por diseño, OAuth 2.1 MCP y leyes internacionales.",
    url: "/privacidad",
  },
};

export default function PrivacidadPage() {
  return (
    <LegalShell
      title="Política de Privacidad Integral"
      subtitle="Explicación detallada de cómo, por qué y bajo qué estándares criptográficos y de consentimiento se tratan los datos en la Web Oficial, la aplicación Finance Pal y sus Conectores IA (MCP)."
      lastUpdated="16 de noviembre de 2026"
      readTime="9 min"
    >
      <section className="space-y-4">
        <h2 className="text-xl font-bold text-foreground flex items-center gap-2 font-display">
          <span className="text-primary font-mono-tabular">1.</span> Responsable del Tratamiento de Datos
        </h2>
        <p className="text-muted-foreground">
          El responsable del tratamiento de los datos personales recabados a través del sitio web, las aplicaciones y los
          endpoints autorizados de <strong className="text-foreground">Finance Pal</strong> es un{" "}
          <strong className="text-foreground">desarrollador de software independiente (persona física)</strong>, identificado
          en la comunidad técnica como <strong className="text-primary font-mono">migol-dev</strong> (en adelante, el
          &ldquo;Responsable&rdquo;).
        </p>
        <p className="text-muted-foreground">
          Para cualquier consulta, aclaración o ejercicio de derechos de privacidad, el canal oficial y directo de
          atención es:
        </p>
        <div className="p-4 rounded-xl bg-muted/60 border border-border text-foreground font-mono text-xs sm:text-sm">
          Correo de contacto de privacidad:{" "}
          <a
            href="mailto:business.migol.gg@gmail.com"
            className="text-primary font-semibold hover:underline underline-offset-4"
          >
            business.migol.gg@gmail.com
          </a>
        </div>
      </section>

      <section className="space-y-4 pt-6 border-t border-border">
        <h2 className="text-xl font-bold text-foreground flex items-center gap-2 font-display">
          <span className="text-primary font-mono-tabular">2.</span> Filosofía Fundamental: Privacidad &ldquo;Local-First&rdquo;
        </h2>
        <div className="p-4 rounded-xl bg-muted/60 border border-border text-foreground text-xs sm:text-sm leading-relaxed">
          <strong className="text-editorial-emerald font-mono uppercase tracking-wider mr-1.5">
            PRINCIPIO CENTRAL:
          </strong>
          En Finance Pal, tus registros financieros son de tu propiedad exclusiva y residen primordialmente en tu propio
          dispositivo. No monetizamos tu información personal, no vendemos perfiles de consumo ni conectamos con cuentas
          bancarias reales.
        </div>
        <p className="text-muted-foreground">
          Por defecto, la aplicación opera sin necesidad de crear cuentas, sincronizar en la nube ni habilitar conectores externos:
        </p>
        <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
          <li>
            <strong className="text-foreground">Almacenamiento Local:</strong> Tus movimientos, presupuestos, notas,
            metas, deudas y comprobantes comprimidos se guardan localmente en el navegador (IndexedDB cifrado con WebCrypto
            AES-GCM 256 / LocalStorage) o en la base SQLite segura de Android (conoce el inventario completo en nuestra{" "}
            <Link href="/cookies" className="text-primary font-medium hover:underline underline-offset-4">
              Política de Cookies y Almacenamiento Local
            </Link>
            ).
          </li>
          <li>
            <strong className="text-foreground">Sin Servidores Intermedios Obligatorios:</strong> El desarrollador no tiene
            acceso ni visibilidad de tus balances, cuentas o transacciones cuando utilizas la aplicación en modo local.
          </li>
        </ul>
      </section>

      <section className="space-y-4 pt-6 border-t border-border">
        <h2 className="text-xl font-bold text-foreground flex items-center gap-2 font-display">
          <span className="text-primary font-mono-tabular">3.</span> Datos Recopilados y Finalidades Específicas
        </h2>
        <p className="text-muted-foreground">
          Distinguimos tres ámbitos técnicos independientes según las funcionalidades que el Usuario decida activar:
        </p>

        <div className="space-y-4 pt-1">
          <div className="p-5 rounded-xl bg-muted/40 border border-border space-y-2.5">
            <h3 className="font-semibold text-foreground text-base font-display">
              A. En el Sitio Web Oficial
            </h3>
            <ul className="list-disc pl-6 space-y-2 text-xs sm:text-sm text-muted-foreground">
              <li>
                <strong className="text-foreground">Reseñas de la Comunidad:</strong> Recopilamos nombre o alias,
                puntuación, comentario y correo electrónico.{" "}
                <span className="text-primary font-medium">Garantía:</span> el correo se guarda de forma estrictamente
                privada con el único fin de prevenir spam o reseñas fraudulentas; nunca se publica en la web.
              </li>
              <li>
                <strong className="text-foreground">Buzón de Ideas y Reporte de Errores:</strong> Recopilamos tipo de
                reporte, versión de la app, título, descripción y opcionalmente nombre o correo para responder al usuario.
              </li>
              <li>
                <strong className="text-foreground">Métrica Anónima de Descargas:</strong> Al descargar el APK se genera
                un identificador UUID aleatorio (<code className="text-primary font-mono">fm_visitor_id</code>) en almacenamiento
                local para contabilizar descargas por versión en Supabase sin registrar direcciones IP públicas ni identidad
                (detalles en la{" "}
                <Link href="/cookies" className="text-primary hover:underline underline-offset-4">
                  Política de Cookies y Almacenamiento Local
                </Link>
                ).
              </li>
              <li>
                <strong className="text-foreground">Acceso Administrativo:</strong> Correo vía GitHub OAuth utilizado
                exclusivamente por el administrador del proyecto en la consola de moderación interna (<code className="font-mono">/admin</code>).
              </li>
            </ul>
          </div>

          <div className="p-5 rounded-xl bg-muted/40 border border-border space-y-2.5">
            <h3 className="font-semibold text-foreground text-base font-display">
              B. En la Aplicación Móvil y Web (Sincronización Opcional)
            </h3>
            <p className="text-xs sm:text-sm text-muted-foreground">
              Solo si el Usuario decide crear cuenta y activar voluntariamente la sincronización en la nube:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-xs sm:text-sm text-muted-foreground">
              <li>
                <strong className="text-foreground">Cuenta de Usuario:</strong> Correo electrónico y credencial cifrada en
                Supabase Auth o sesión OAuth (Google/GitHub) con soporte multifactor (2FA TOTP).
              </li>
              <li>
                <strong className="text-foreground">Copia Sincronizada y Comprobantes Privados:</strong> Los registros
                viajan por canales TLS/HTTPS bajo políticas Row Level Security (RLS) por UID. Las imágenes de recibos se
                validan por magic bytes (JPEG, PNG y WebP), se comprimen localmente hasta un máximo de 5 MB y se guardan en
                el bucket privado endurecido (<code className="font-mono text-primary">sb:receipts</code>) mediante URLs firmadas
                de corta duración.
              </li>
            </ul>
          </div>

          <div className="p-5 rounded-xl bg-muted/40 border border-border space-y-2.5">
            <h3 className="font-semibold text-foreground text-base font-display">
              C. Conectores de Inteligencia Artificial vía MCP (Opcional y Bajo Consentimiento Expreso)
            </h3>
            <p className="text-xs sm:text-sm text-muted-foreground">
              A partir de la versión <span className="font-mono-tabular text-foreground font-semibold">v2.2.0</span>, el
              Usuario con sincronización activa puede vincular opcionalmente asistentes de IA externos (como Claude,
              ChatGPT o Gemini) a través del servidor remoto Model Context Protocol (<code className="font-mono text-primary">/mcp</code>):
            </p>
            <ul className="list-disc pl-6 space-y-2 text-xs sm:text-sm text-muted-foreground">
              <li>
                <strong className="text-foreground">Desactivado por Defecto y OAuth 2.1 + PKCE (S256):</strong> Ningún cliente
                de IA tiene acceso automático. El Usuario debe aprobar expresamente la conexión en{" "}
                <code className="font-mono">/oauth/consent</code>, superando verificación 2FA (<code className="font-mono">aal2</code>)
                cuando la cuenta tenga TOTP habilitado.
              </li>
              <li>
                <strong className="text-foreground">Minimización y Modo Solo Lectura por Defecto:</strong> El flujo abre con
                <code className="font-mono">read_only = true</code>. Las lecturas se restringen a los alcances aprobados (
                <code className="font-mono">mcp:read:overview</code>, <code className="font-mono">mcp:read:accounts</code>,{" "}
                <code className="font-mono">mcp:read:transactions</code> con límite estricto de 90 días y 50 filas por consulta,{" "}
                <code className="font-mono">mcp:read:fixed_items</code>, <code className="font-mono">mcp:read:goals</code> y{" "}
                <code className="font-mono">mcp:read:debts</code> sin exponer contactos externos), ejecutándose mediante Gateway RPCs
                cero-PII en PostgreSQL 17 y aislamiento <code className="font-mono">&lt;untrusted_user_note&gt;</code>.
              </li>
              <li>
                <strong className="text-foreground">Permisos de Escritura / Borrado Suave Opt-in:</strong> Solo si el Usuario
                desactiva manualmente Solo Lectura o marca <code className="font-mono">mcp:delete:soft</code>, el asistente podrá
                registrar/editar movimientos, fijos, metas o deudas, o enviar un registro a la Papelera tras confirmación en 2
                pasos (TTL de <span className="font-mono-tabular">120 s</span>; cuentas bloqueadas contra borrado).
              </li>
              <li>
                <strong className="text-foreground">Bitácora de Auditoría (<code className="font-mono">mcp_audit_log</code>):</strong>{" "}
                Cada invocación registra únicamente metadatos técnicos de seguridad (herramienta, fecha, latencia en ms,
                cliente y resumen operativo), visibles para el usuario en <em>Ajustes &gt; 10 · Conectores IA (MCP)</em>.
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className="space-y-4 pt-6 border-t border-border">
        <h2 className="text-xl font-bold text-foreground flex items-center gap-2 font-display">
          <span className="text-primary font-mono-tabular">4.</span> Bases Legales del Tratamiento
        </h2>
        <p className="text-muted-foreground">
          Tratamos tus datos con estricto apego a las siguientes bases jurídicas:
        </p>
        <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
          <li>
            <strong className="text-foreground">Consentimiento Expreso y Granular (Art. 6.1.a RGPD / LFPDPPP):</strong> Al
            enviar una reseña, reportar una sugerencia, crear una cuenta de sincronización o aprobar alcances individuales en{" "}
            <code className="font-mono">/oauth/consent</code> para un conector MCP, otorgas tu consentimiento informado y
            revocable en cualquier momento mediante revocación individual o el <strong className="text-foreground">Kill Switch</strong>{" "}
            global.
          </li>
          <li>
            <strong className="text-foreground">Interés Legítimo y Seguridad (Art. 6.1.f RGPD):</strong> Para prevenir abuso,
            aplicar limitación de tasa por usuario/IP, detectar reuso de refresh tokens, proteger la infraestructura frente a
            inyecciones y contabilizar de forma anónima las descargas del software libre.
          </li>
        </ul>
      </section>

      <section className="space-y-4 pt-6 border-t border-border">
        <h2 className="text-xl font-bold text-foreground flex items-center gap-2 font-display">
          <span className="text-primary font-mono-tabular">5.</span> Derechos de los Usuarios (ARCO, RGPD, CCPA y Control MCP)
        </h2>
        <p className="text-muted-foreground">
          Tienes pleno control para ejercer en todo momento tus derechos sobre tus datos:
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm">
          <div className="p-4 rounded-xl bg-muted/40 border border-border">
            <strong className="text-primary block mb-1">Acceso y Portabilidad:</strong>
            <span className="text-muted-foreground">
              Exporta todo tu historial financiero en formatos abiertos JSON y CSV directamente desde Ajustes.
            </span>
          </div>
          <div className="p-4 rounded-xl bg-muted/40 border border-border">
            <strong className="text-primary block mb-1">Revocación Instantánea y Kill Switch IA:</strong>
            <span className="text-muted-foreground">
              Degrada un conector a Solo Lectura, revoca concesiones individuales o apaga globalmente MCP al instante desde{" "}
              <em>Ajustes &gt; Conectores IA</em>.
            </span>
          </div>
          <div className="p-4 rounded-xl bg-muted/40 border border-border">
            <strong className="text-primary block mb-1">Papelera de Recuperación (30 días) y Rectificación:</strong>
            <span className="text-muted-foreground">
              Restaura cualquier registro enviado a papelera vía MCP dentro de los <span className="font-mono-tabular">30 días</span>{" "}
              siguientes o púrgalo definitivamente cuando decidas.
            </span>
          </div>
          <div className="p-4 rounded-xl bg-muted/40 border border-border">
            <strong className="text-primary block mb-1">Cancelación y Derecho al Olvido:</strong>
            <span className="text-muted-foreground">
              Borra tus datos locales en &ldquo;Restablecer todo&rdquo; o solicita la eliminación permanente de tu cuenta o
              reseña en{" "}
              <a href="mailto:business.migol.gg@gmail.com" className="text-primary font-mono hover:underline">
                business.migol.gg@gmail.com
              </a>{" "}
              (plazo objetivo &lt; 72 h).
            </span>
          </div>
        </div>
      </section>

      <section className="space-y-4 pt-6 border-t border-border">
        <h2 className="text-xl font-bold text-foreground flex items-center gap-2 font-display">
          <span className="text-primary font-mono-tabular">6.</span> Infraestructura y Proveedores de IA Autorizados
        </h2>
        <p className="text-muted-foreground">
          Distinguimos entre nuestra infraestructura base (con estándares SOC 2, ISO 27001 y GDPR) y los clientes de IA que
          tú mismo elijas conectar:
        </p>
        <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
          <li>
            <strong className="text-foreground">Vercel Inc.:</strong> Alojamiento del sitio web, la PWA y funciones
            serverless del endpoint MCP (<code className="font-mono">/mcp</code>, <code className="font-mono">/oauth/*</code>).
          </li>
          <li>
            <strong className="text-foreground">Supabase Inc. (AWS):</strong> PostgreSQL 17, Auth/MFA, Storage privado
            (<code className="font-mono">receipts_hardening</code>), RLS y Gateway RPCs para usuarios que habilitan sincronización o MCP.
          </li>
          <li>
            <strong className="text-foreground">GitHub Inc.:</strong> Alojamiento del código abierto MIT, comprobaciones de
            actualizaciones in-app y distribución oficial del binario APK.
          </li>
          <li>
            <strong className="text-foreground">Asistentes de IA de Terceros Autorizados por el Usuario:</strong> Cuando
            apruebas un conector MCP (por ejemplo Anthropic/Claude, OpenAI/ChatGPT, Google/Gemini u otro cliente compatible),
            las respuestas devueltas por las herramientas que hayas autorizado se transmiten directamente a ese proveedor de
            IA bajo sus propias políticas de privacidad y retención de conversaciones.
          </li>
        </ul>
        <p className="text-muted-foreground">
          No compartimos datos con redes de publicidad (Google Ads, Meta, TikTok) ni con brókers comerciales o crediticios.
        </p>
      </section>

      <section className="space-y-4 pt-6 border-t border-border">
        <h2 className="text-xl font-bold text-foreground flex items-center gap-2 font-display">
          <span className="text-primary font-mono-tabular">7.</span> Plazos de Retención y Salvaguardas Técnicas
        </h2>
        <p className="text-muted-foreground leading-relaxed">
          Los datos locales permanecen en tu dispositivo hasta que decidas eliminarlos. Para los{" "}
          <strong className="text-foreground">Conectores MCP</strong>: los tokens JWT de acceso expiran en{" "}
          <span className="font-mono-tabular text-foreground font-semibold">15 minutos</span> vinculados exclusivamente al recurso{" "}
          <code className="font-mono">/mcp</code>; los refresh tokens aplican rotación con detección automática de reuso; se
          limita a un máximo de <span className="font-mono-tabular text-foreground font-semibold">5 concesiones activas</span>{" "}
          simultáneas por cuenta; y los elementos eliminados por borrado suave permanecen en la Papelera de Recuperación
          durante <span className="font-mono-tabular text-foreground font-semibold">30 días</span> antes de su purga definitiva
          mediante la tarea diaria <code className="font-mono">mcp-cleanup-expired-daily</code> en{" "}
          <code className="font-mono">pg_cron</code>.
        </p>
      </section>
    </LegalShell>
  );
}
