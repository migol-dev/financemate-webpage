/**
 * Fuente única de verdad para la versión pública vigente de Finance Pal.
 * Sincronizado con GitHub Releases (migol-dev/finance-pal).
 */
export const APP_VERSION = "2.2.0";
export const APP_SHORT_VERSION = "v2.2";
export const RELEASE_DATE = "2026-11-16";
export const RELEASE_PUBLISHED_AT = "2026-11-16T20:33:31.000Z";
export const APK_SIZE_BYTES = 2610629;
export const APK_SIZE_LABEL = "2.5 MB";
export const APK_SHA256 =
  "c286ea52e3692f8046f75120339e895d94ad586b637acb1d8fceef65a041a131";
export const APK_SHA256_SHORT = `${APK_SHA256.slice(0, 8)}…${APK_SHA256.slice(-8)}`;

export const REPO_URL =
  process.env.NEXT_PUBLIC_GITHUB_REPO_URL &&
  !process.env.NEXT_PUBLIC_GITHUB_REPO_URL.includes("financemate-webpage") &&
  !process.env.NEXT_PUBLIC_GITHUB_REPO_URL.includes("finance-mate")
    ? process.env.NEXT_PUBLIC_GITHUB_REPO_URL
    : "https://github.com/migol-dev/finance-pal";

export const APK_DOWNLOAD_URL = `${REPO_URL}/releases/download/v${APP_VERSION}/financemate.apk`;
export const RELEASE_TAG_URL = `${REPO_URL}/releases/tag/v${APP_VERSION}`;
export const SECURITY_POLICY_URL = `${REPO_URL}/blob/main/SECURITY.md`;
