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

| Checkpoint | Tag | Scope | Home JS (gz) | Delta JS | Build Status | Notes |
|---|---|---|---:|---:|---|---|
| CP-00 Baseline | `perf-cp-00-baseline` | Measurement on `7dbbeaf` | 305,001 B | — | Pass (40/40) | Median Score 88, LCP 3177ms, TBT 263ms, CLS 0.0456 |
| CP-01 | `perf-cp-01-fonts` | Self-hosted `next/font/google` | TBD | TBD | TBD | — |
| CP-02 | `perf-cp-02-perf-tier` | `data-perf="lite \| full"` script & hook | TBD | TBD | TBD | — |
| CP-03 | `perf-cp-03-canvas-bg` | Zero-repaint gradients canvas | TBD | TBD | TBD | — |
| CP-04 | `perf-cp-04-scroll-reveal` | Shared IntersectionObserver + CSS reveal | TBD | TBD | TBD | — |
| CP-05 | `perf-cp-05-zero-fm-bundle` | Remove `framer-motion` from Hero/Navbar/ThemeToggle | TBD | TBD | TBD | — |
| CP-06 | `perf-cp-06-rsc-sections` | Server Components for stateless sections | TBD | TBD | TBD | — |
| CP-07 | `perf-cp-07-lazy-modal` | Code-split `ReleaseModal` + Radix Dialog | TBD | TBD | TBD | — |
| CP-08 | `perf-cp-08-carousel-gpu` | Carousel layer budget + 2.5D lite glide | TBD | TBD | TBD | — |
| CP-09 | `perf-cp-09-glass-surfaces` | Controlled `backdrop-filter` | TBD | TBD | TBD | — |
| CP-10 | `perf-cp-10-content-visibility` | `content-visibility: auto` + deferred fetch | TBD | TBD | TBD | — |
| CP-11 | `perf-cp-11-scroll-raf` | rAF-throttled Navbar scroll listener | TBD | TBD | TBD | — |
| CP-12 | `perf-cp-12-next-config` | `next.config.js` image & package opts | TBD | TBD | TBD | — |
| Audit 1 | `perf-cp-audit-1` | Full Lighthouse + trace comparison | TBD | TBD | TBD | — |
