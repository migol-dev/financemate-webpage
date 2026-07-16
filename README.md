# Finance Mate — Sitio web

Landing page + panel de administración para **Finance Mate**, construido con
Next.js 16 (App Router), TypeScript, Tailwind CSS, shadcn/ui, Supabase
(PostgreSQL + Storage) y NextAuth (GitHub OAuth).

## ✨ Qué incluye

- Landing mobile-first con tema claro/oscuro automático (sigue el tema del
  sistema operativo/navegador) y botón sol/luna animado para forzar el tema.
- Hero, características, **galería interactiva** de capturas (gestionable
  desde el admin), sección de descarga con detección de intentos previos de
  descarga, **reseñas de usuarios** (con nombre + correo), formulario de
  **reportes de errores y sugerencias**, y sección con enlaces al
  repositorio de GitHub (código y releases/betas).
- **Panel de administración** en `/admin` protegido con GitHub OAuth
  (solo cuentas en la lista blanca `ADMIN_EMAILS` pueden entrar):
  - Gestión de galería: subir imágenes, editar título/descripción,
    reordenar por drag-and-drop, eliminar.
  - Moderación de reseñas: publicar/ocultar, eliminar.
  - Bandeja de reportes de bugs/sugerencias con estados (abierto, en
    revisión, resuelto).

## 🧱 Stack

TypeScript · Next.js 16 (React 19) · Tailwind CSS · Radix UI / shadcn/ui ·
Supabase (PostgreSQL + Storage) · NextAuth · Framer Motion · dnd-kit.

---

## ⚡ Inicio rápido (3 comandos)

Requisitos: **Node.js 20.9 o superior** ([descargar](https://nodejs.org/)).

```bash
npm install
npm run setup
npm run dev
```

1. `npm install` — instala dependencias (sin vulnerabilidades conocidas en `npm audit`).
2. `npm run setup` — crea `.env.local` desde `.env.example` y genera `NEXTAUTH_SECRET` automáticamente.
3. `npm run dev` — arranca el servidor en [http://localhost:3000](http://localhost:3000).

> **Vista previa sin configurar nada:** la landing carga con imágenes de
> ejemplo y secciones estáticas aunque Supabase/GitHub aún no estén listos.
> Los formularios (reseñas, reportes) y el panel `/admin` **sí requieren**
> las variables de entorno completas (ver abajo).

---

## 📋 Guía paso a paso (primera vez)

### Paso 0 — Requisitos

| Herramienta | Versión mínima | Para qué |
|-------------|----------------|----------|
| Node.js     | 20.9           | Ejecutar Next.js |
| npm         | 10+ (incluido con Node) | Instalar paquetes |
| Cuenta Supabase | Gratis     | Base de datos + almacenamiento de imágenes |
| Cuenta GitHub   | Gratis     | Login del panel de admin (OAuth) |

Comprueba tu versión de Node:

```bash
node -v
```

### Paso 1 — Clonar e instalar

```bash
git clone <url-del-repo> finance-mate-web
cd finance-mate-web
npm install
```

En **Windows (PowerShell)**, los mismos comandos funcionan igual.

### Paso 2 — Variables de entorno

**Opción A — automática (recomendada):**

```bash
npm run setup
```

**Opción B — manual:**

```bash
# macOS / Linux
cp .env.example .env.local

# Windows (PowerShell)
Copy-Item .env.example .env.local
```

Luego abre `.env.local` y completa los valores. Referencia:

| Variable | Obligatoria | Dónde obtenerla |
|----------|-------------|-----------------|
| `NEXT_PUBLIC_SUPABASE_URL` | Sí (formularios + galería real) | Supabase → Project Settings → API → Project URL |
| `NEXT_PUBLIC_SUPABASE_ANON_KEY` | Sí | Supabase → API → `anon` `public` |
| `SUPABASE_SERVICE_ROLE_KEY` | Sí (panel admin) | Supabase → API → `service_role` (**nunca** la expongas en el cliente) |
| `NEXTAUTH_SECRET` | Sí (login admin) | Generada por `npm run setup`, o: `openssl rand -base64 32` |
| `NEXTAUTH_URL` | Sí | `http://localhost:3000` en local |
| `GITHUB_CLIENT_ID` | Sí (login admin) | GitHub OAuth App |
| `GITHUB_CLIENT_SECRET` | Sí | GitHub OAuth App |
| `ADMIN_EMAILS` | Sí | Correo(s) de GitHub permitidos, separados por coma |
| `NEXT_PUBLIC_GITHUB_REPO_URL` | No | URL del repo (tiene valor por defecto) |
| `NEXT_PUBLIC_APP_VERSION` | No | Versión mostrada en la descarga (ej. `1.17.8`) |

### Paso 3 — Configurar Supabase (~5 min)

1. Crea un proyecto en [supabase.com](https://supabase.com).
2. Abre **SQL Editor** → **New query**.
3. Copia todo el contenido de [`supabase/schema.sql`](supabase/schema.sql) y ejecútalo (**Run**).
   - Crea las tablas: `reviews`, `reports`, `gallery_images`, `download_events`.
   - Activa RLS (seguridad a nivel de fila).
4. Ve a **Storage** → **New bucket**:
   - Nombre: `gallery`
   - **Public bucket**: activado (las imágenes de la galería son públicas).
5. Copia las tres claves de **Project Settings → API** a `.env.local`.

### Paso 4 — GitHub OAuth para el admin (~3 min)

1. GitHub → **Settings** → **Developer settings** → **OAuth Apps** → **New OAuth App**.
2. Rellena:
   - **Application name:** `Finance Mate Admin` (o el que prefieras)
   - **Homepage URL:** `http://localhost:3000`
   - **Authorization callback URL:** `http://localhost:3000/api/auth/callback/github`
3. Crea la app y copia **Client ID** y genera un **Client secret**.
4. En `.env.local`:
   - `GITHUB_CLIENT_ID` y `GITHUB_CLIENT_SECRET` con esos valores.
   - `ADMIN_EMAILS` con el **correo principal de tu cuenta de GitHub** (el que aparece en tu perfil).

> Si usas otro correo en GitHub distinto al de login, usa el que GitHub expone en el perfil OAuth.

### Paso 5 — Arrancar en local

```bash
npm run dev
```

| URL | Qué es |
|-----|--------|
| [http://localhost:3000](http://localhost:3000) | Landing pública |
| [http://localhost:3000/admin](http://localhost:3000/admin) | Panel de administración |
| [http://localhost:3000/admin/login](http://localhost:3000/admin/login) | Login con GitHub |

**Build de producción (opcional, para comprobar que todo compila):**

```bash
npm run build
npm start
```

---

## 🚀 Desplegar en Vercel

1. Sube el proyecto a un repositorio de GitHub.
2. Importa el repo en [vercel.com](https://vercel.com) → **Add New Project**.
3. En **Environment Variables**, pega **todas** las variables de `.env.local`.
4. Cambia `NEXTAUTH_URL` a tu dominio de producción (ej. `https://tudominio.com`).
5. En la OAuth App de GitHub, añade la callback de producción:
   `https://tudominio.com/api/auth/callback/github`
6. Deploy. Vercel detecta Next.js automáticamente; no hace falta configuración extra.

---

## 📂 Estructura relevante

```text
scripts/
  setup.mjs                 # Crea .env.local y genera NEXTAUTH_SECRET
src/
  app/
    page.tsx                # Landing page
    admin/                  # Panel de admin (protegido)
    api/
      reviews/route.ts      # Reseñas públicas (GET aprobadas / POST nueva)
      reports/route.ts      # Bugs y sugerencias (POST)
      gallery/route.ts      # Galería pública (GET) + admin (POST/PATCH/DELETE)
      download/route.ts     # Registro de intentos de descarga
      admin/                # Endpoints exclusivos del panel de administración
  components/               # Secciones del landing + UI (shadcn-style)
  lib/
    supabase/               # Clientes de Supabase (browser/server/admin)
    auth.ts                 # Configuración de NextAuth + helpers
supabase/schema.sql         # Esquema completo + políticas RLS
.env.example                # Plantilla de variables de entorno
```

---

## 🔒 Seguridad

- El panel `/admin` valida la sesión en cada página del lado del servidor
  (`requireAdminSession`) y cada endpoint de administración vuelve a
  validarla — nunca confía solo en el estado del cliente.
- Las escrituras públicas (reseñas, reportes, eventos de descarga) usan la
  llave `anon` con políticas de RLS que solo permiten `INSERT`; los
  `UPDATE`/`DELETE` únicamente ocurren vía rutas de admin con la
  `service_role key`, que nunca se expone al navegador.
- Todas las entradas de formularios se validan con `zod` tanto en cliente
  como en servidor.

---

## 🖼️ Notas sobre la galería

Mientras no subas imágenes desde `/admin/gallery`, la landing muestra unas
capturas de ejemplo (`public/gallery/placeholder-*.svg`) para que el diseño
nunca se vea vacío. En cuanto agregues imágenes reales desde el panel, esas
reemplazan automáticamente a los placeholders.

---

## 🛠️ Comandos útiles

| Comando | Descripción |
|---------|-------------|
| `npm run dev` | Servidor de desarrollo (hot reload) |
| `npm run build` | Compila para producción |
| `npm start` | Sirve el build de producción |
| `npm run lint` | ESLint (configuración flat de Next.js 16) |
| `npm run setup` | Crea `.env.local` con secret generado |
| `npm audit` | Comprueba vulnerabilidades en dependencias |

---

## ❓ Solución de problemas

### `npm install` muestra advertencias de paquetes deprecados

Tras actualizar a Next.js 16 y dependencias recientes, `npm audit` debe reportar **0 vulnerabilidades**. Si ves warnings de `deprecated`, suelen ser avisos informativos de dependencias transitivas; no impiden ejecutar el proyecto.

### La landing carga pero los formularios fallan

Revisa que `NEXT_PUBLIC_SUPABASE_URL` y `NEXT_PUBLIC_SUPABASE_ANON_KEY` estén en `.env.local` y que ejecutaste `supabase/schema.sql` en tu proyecto.

### No puedo entrar a `/admin`

1. Confirma que `ADMIN_EMAILS` contiene el correo exacto de tu cuenta GitHub.
2. Verifica `GITHUB_CLIENT_ID`, `GITHUB_CLIENT_SECRET` y `NEXTAUTH_URL`.
3. La callback en GitHub debe ser exactamente: `http://localhost:3000/api/auth/callback/github`.

### Error al subir imágenes en la galería

- El bucket de Storage debe llamarse **`gallery`** y ser **público**.
- `SUPABASE_SERVICE_ROLE_KEY` debe estar en `.env.local` (solo servidor).

### `node -v` muestra una versión menor a 20

Instala Node 20 LTS o superior desde [nodejs.org](https://nodejs.org/) y vuelve a ejecutar `npm install`.

### Cambié `.env.local` y no se aplican los valores

Reinicia el servidor de desarrollo (`Ctrl+C` y luego `npm run dev`). Next.js solo lee las variables al arrancar.

---

## 📄 Licencia

Proyecto privado de Finance Mate. Consulta el repositorio principal para más información.
