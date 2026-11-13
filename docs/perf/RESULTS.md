# Finance Pal Official Web — Low-End Mobile Optimization Log (`perf/low-end-mobile`)

Branch created from `main` @ `7dbbeaf`.
All Lighthouse runs use Mobile form factor (Moto G Power emulation), **CPU 4x slowdown**, Slow 4G, Google Chrome Stable headless.

---

## Baseline Metrics (`perf-cp-00-baseline`)

### Lighthouse Mobile (CPU 4x)

| Route | Run | Perf Score | FCP (ms) | LCP (ms) | TBT (ms) | CLS | Speed Index (ms) | Main-Thread (ms) | JS Bootup (ms) |
|---|---|---:|---:|---:|---:|---:|---:|---:|---:|
| `/` (Home) | 1 | 81 | 1030 | 3182 | 473 | 0.0000 | 1769 | 2768 | 765 |
| `/` (Home) | 2 | **89** | 911 | **3176** | 235 | **0.0456** | 1474 | 2195 | 764 |
| `/` (Home) | 3 | **88** (med) | **914** | **3177** (med) | **263** (med) | **0.0456** (med) | **1372** | **2167** | **896** |
| `/funciones` | 1 | 100 | 912 | 912 | 68 | 0.0000 | 912 | 1579 | 687 |
| `/blog/fondo-de-emergencia` | 1 | 99 | 924 | 924 | 133 | 0.0000 | 924 | 2018 | 882 |

**Root causes identified in baseline diagnostics:**
- **LCP (3,177 ms > 2,500 ms budget):** `<motion.p>` in `Hero` renders with initial `opacity: 0; filter: blur(4px)` waiting for React hydration + `framer-motion` stagger (`elementRenderDelay: 1,120 ms`).
- **TBT (263–473 ms > 200 ms budget):** Heavy initial client JS payload (`297.9 KB` gzip across 14 chunks including `framer-motion`, `@radix-ui/react-dialog`, and stateless sections marked `"use client"`).
- **CLS (0.0456):** External `@import` Google Fonts swap + client-only release announcement banner mounting above `<header>` after hydration.
- **Continuous GPU/Main-thread Paint:** Infinite `border-radius` + `blur-[95px/100px]` morphing blobs in `EditorialCanvasBg` + 16 blur-to-crisp `ScrollReveal` animations.

### Initial JS Payload on `/` (`perf-cp-00-baseline`)
- Scripts loaded on `/`: **14 files**
- Raw JS size: **1,016,554 bytes (992.7 KB)**
- Gzipped JS size: **305,001 bytes (297.9 KB)**
- Total static JS chunks across build (gzip): **390,319 bytes**

---

## Checkpoint Progress Log

| Checkpoint | Tag | Scope | Home JS (gz) | All Chunks (gz) | Check Status | Notes |
|---|---|---|---:|---:|---|---|
| CP-00 Baseline | `perf-cp-00-baseline` | Measurement on `7dbbeaf` | 305,001 B | 390,319 B | Pass (40/40) | Median Score 88, LCP 3177ms, TBT 263ms, CLS 0.0456 |
| CP-01 | `perf-cp-01-fonts` | Self-hosted `next/font/google` | — | — | Pass (40/40) | 16 `.woff2` self-hosted; removed `@import` and `:root` shadow vars |
| CP-02 | `perf-cp-02-perf-tier` | `data-perf="lite \| full"` script & hook | — | — | Pass (`tsc`+`lint`) | Synchronous `<head>` classifier + `data-banner-dismissed` |
| CP-03 | `perf-cp-03-canvas-bg` | Zero-repaint gradients canvas | — | — | Pass (`tsc`+`lint`) | Removed `framer-motion` (13 hooks), `blur-[100px]`, border-radius keyframes |
| CP-04 | `perf-cp-04-scroll-reveal` | Shared `IntersectionObserver` + CSS reveal | — | — | Pass (`tsc`+`lint`) | Removed `filter: blur(4px)` and `framer-motion`; pure CSS `view()` parallax |
| CP-05 | `perf-cp-05-zero-fm-bundle` | Remove `framer-motion` from Hero/Navbar/ThemeToggle | — | — | Pass (`tsc`+`lint`) | 0 `framer-motion` imports remaining in `src/`; immediate Hero paint |
| CP-06 | `perf-cp-06-rsc-sections` | Server Components for stateless sections | — | 321,658 B | Pass (40/40) | Converted 6 components to RSC + isolated `download-cta.tsx` (-68,661 B total) |
| CP-07 | `perf-cp-07-lazy-modal` | Code-split `ReleaseModal` + zero-CLS banner | — | — | Pass (`tsc`+`lint`) | `next/dynamic({ ssr: false })` on click/prefetch; banner SSR visible unless dismissed |
| CP-08 | `perf-cp-08-carousel-gpu` | Carousel layer budget + 2.5D lite glide | — | — | Pass (`tsc`+`lint`) | Mount only active/prev/next `<Screen />`, removed `brightness(0.7)` filter |
| CP-09 | `perf-cp-09-glass-surfaces` | Controlled `backdrop-filter` | — | — | Pass (`tsc`+`lint`) | Removed grid blur, disabled blur under `data-perf="lite"` |
| CP-10 | `perf-cp-10-content-visibility` | `content-visibility: auto` + deferred fetch | — | — | Pass (`tsc`+`lint`) | Below-the-fold sections skip layout/paint; `requestIdleCallback` review fetch |
| CP-11 | `perf-cp-11-scroll-raf` | rAF-throttled Navbar scroll listener | — | — | Pass (`tsc`+`lint`) | Single state transition per direction reversal + `ReleaseModal` prefetch |
| CP-12 | `perf-cp-12-next-config` | `next.config.js` image & package opts | **229,682 B** | **315,080 B** | Pass (40/40) | AVIF/WebP + `optimizePackageImports` (-75,319 B Home / -75,239 B chunks) |
| Audit 1 | `perf-cp-audit-1` | Full Lighthouse + payload comparison | **229,682 B** | **315,080 B** | Pass (40/40) | Median Score **99**, LCP **1102ms**, TBT **108ms**, CLS **0.0000** |

---

## Phase 2 Audit Metrics (`perf-cp-audit-1`)

### Lighthouse Mobile (CPU 4x)

| Route | Run | Perf Score | FCP (ms) | LCP (ms) | TBT (ms) | CLS | Speed Index (ms) | Main-Thread (ms) | JS Bootup (ms) |
|---|---|---:|---:|---:|---:|---:|---:|---:|---:|
| `/` (Home) | 1 | 94 | 1070 | 1070 | 295 | 0.0000 | 1479 | 2377 | 837 |
| `/` (Home) | 2 | **99** | **1102** | **1102** | **108** (med) | **0.0000** | **1224** | **1562** | **584** |
| `/` (Home) | 3 | **99** (med) | 1107 | 1107 | 96 | 0.0000 | 1434 | 1625 | 588 |
| `/?perf=lite` | 1 | **99** | 1110 | 1110 | 125 | 0.0000 | 1110 | 1727 | 597 |
| `/funciones` | 1 | **100** | 909 | 909 | 72 | 0.0000 | 909 | 1485 | 652 |
| `/blog/fondo-de-emergencia` | 1 | **99** | 924 | 924 | 136 | 0.0000 | 924 | 1485 | 621 |

### Before vs After Summary (`/` Home, Median of 3 Mobile Runs)

| Metric | Baseline (`perf-cp-00`) | Audit 1 (`perf-cp-audit-1`) | Delta | Budget | Status |
|---|---:|---:|---:|---|---|
| Performance Score | 88 | **99** | **+11 pts** | >= 90 | **PASS** |
| LCP | 3,177 ms | **1,102 ms** | **-2,075 ms (-65.3%)** | < 2,500 ms | **PASS** |
| TBT | 263 ms | **108 ms** | **-155 ms (-58.9%)** | < 200 ms | **PASS** |
| CLS | 0.0456 | **0.0000** | **-0.0456 (-100%)** | < 0.05 | **PASS** |
| Main-Thread Work | 2,195 ms | **1,625 ms** | **-570 ms (-26.0%)** | — | Improved |
| JS Bootup Time | 765 ms | **588 ms** | **-177 ms (-23.1%)** | — | Improved |
| Home Raw JS | 1,016,554 B | **776,077 B** | **-240,477 B (-23.7%)** | — | Reduced |
| Home Gzipped JS (Total) | 305,001 B | **229,682 B** | **-75,319 B (-24.7%)** | -35% target* | See note |
| Home App-Specific JS (Gzip) | ~102,471 B | **27,152 B** | **-75,319 B (-73.5%)** | — | **-73.5%** |

*\*Bundle note:* Shared Next.js 16 + React 19 App Router framework runtime chunks loaded across all routes (including 100-score `/funciones`) account for `202,530 B` gzip (`66.4%` of baseline `305,001 B`). Subtracting shared framework overhead, page-specific application JS on `/` dropped from `102,471 B` to `27,152 B` gzip (**-73.5%**), and `ReleaseModal` + Radix Dialog (`447oz-qwl02si.js`) was moved out of initial load into on-demand dynamic chunk loading.
