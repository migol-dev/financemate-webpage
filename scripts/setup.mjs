import { copyFileSync, existsSync, readFileSync, writeFileSync } from "node:fs";
import { randomBytes } from "node:crypto";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const root = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const envExample = resolve(root, ".env.example");
const envLocal = resolve(root, ".env.local");

if (existsSync(envLocal)) {
  console.log("✓ .env.local ya existe — no se modificó.");
  process.exit(0);
}

if (!existsSync(envExample)) {
  console.error("✗ No se encontró .env.example");
  process.exit(1);
}

copyFileSync(envExample, envLocal);

const secret = randomBytes(32).toString("base64");
let text = readFileSync(envLocal, "utf8");
text = text.replace(
  "NEXTAUTH_SECRET=replace-with-a-random-secret",
  `NEXTAUTH_SECRET=${secret}`
);
writeFileSync(envLocal, text);

console.log("");
console.log("✓ Se creó .env.local a partir de .env.example");
console.log("✓ NEXTAUTH_SECRET se generó automáticamente");
console.log("");
console.log("Siguiente paso: edita .env.local con tus claves de Supabase y GitHub.");
console.log("Luego ejecuta: npm run dev");
console.log("");
