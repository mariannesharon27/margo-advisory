# Margo Advisory

Marketing site for Margo Advisory — a personal financial advisory brand. *"Financial decisions, made clearer."*

Source exported from Google AI Studio, then set up as a normal Vite project you can edit and deploy.

## Stack

| | |
|---|---|
| Framework | React 19 + TypeScript, built with Vite 6 |
| Styling | Tailwind CSS v4 (`@tailwindcss/vite`) + custom utilities in `src/index.css` |
| Icons | lucide-react |
| Type | **Fully static** — no backend, no API keys, no network calls |
| Hosting | GitHub Pages |

Fonts are Cormorant Garamond (display) and Plus Jakarta Sans (body), loaded from Google Fonts.

## Running it

```bash
npm install
./dev.sh          # start (safe to re-run any time)
```

`./dev.sh` runs a detached supervisor that keeps Vite alive and relaunches it if it crashes.

| Command | |
|---|---|
| `./dev.sh` | start — no-op if already healthy |
| `./dev.sh stop` | stop, cleanly (no orphan holding the port) |
| `./dev.sh restart` | stop then start |
| `./dev.sh status` | is it up? |
| `./dev.sh logs` | follow the log |

Override the port with `PORT=5174 ./dev.sh`. Runtime state lives in `.dev/` (gitignored).

Or run Vite in the foreground yourself:

```bash
npm run dev
```

| Command | |
|---|---|
| `npm run dev` | dev server with HMR, foreground |
| `npm run build` | typecheck, then production build to `dist/` |
| `npm run preview` | serve the built output |
| `npm run typecheck` | `tsc --noEmit` |
| `npm run lint` | oxlint |

## Layout

```
src/
  App.tsx                          section order, Get Started modal, floating WhatsApp button
  types.ts                         ServiceItem, JargonTerm, ClarityPath, ContactState
  data/margoData.ts                ALL copy and content lives here
  index.css                        theme: fonts, champagne/ivory utilities, gold gradients
  components/
    Navbar.tsx                     sticky nav with anchor links
    HeroSection.tsx                headline, pillars, philosophy card
    ServicesSection.tsx            filterable service cards
    WhyMargoSection.tsx            comparison table + jargon translator
    ClarityInteractiveSection.tsx  scenario picker → guidance + prefilled outreach
    AboutSection.tsx               brand story
    ContactSection.tsx             contact cards + message composer
    Footer.tsx                     nav, contact, disclaimer
    GetStartedModal.tsx            intro modal
```

**To change wording, rates, services or scenarios, edit [src/data/margoData.ts](src/data/margoData.ts)** — the components render from it. Its five exports are `MARGO_CONTACT`, `SERVICES`, `WHY_MARGO_COMPARISON`, `JARGON_TRANSLATIONS` and `CLARITY_PATHS`.

The brand palette is inline Tailwind arbitrary values rather than theme tokens, matching how the source was written:

| Colour | Use |
|---|---|
| `#FDFBF7` | page background (ivory) |
| `#FBF8F2` / `#FAF5EA` | cards, champagne panels |
| `#121824` / `#0F141C` | ink, dark sections, footer |
| `#C5A059` / `#E2D1A8` / `#B89343` | gold accents |
| `#25D366` | WhatsApp green |

## Deploying to GitHub Pages

Push to `main`. [.github/workflows/deploy.yml](.github/workflows/deploy.yml) lints, typechecks, builds and publishes.

One-time setup: **Settings → Pages → Source: GitHub Actions**. That's it — there are no secrets or environment variables to configure.

`VITE_BASE` is set automatically to `/<repo>/` so assets resolve under the Pages sub-path. Delete that line from the workflow if you attach a custom domain or use a `<user>.github.io` repo.

## Contact flow

There is no form submission anywhere — deliberately, per the site's own copy ("No forms to submit"). Every call to action builds a **prefilled `wa.me` or `mailto:` link** from the visitor's selections. That's why the site needs no backend, and it's what makes static hosting viable.

## Notes on the AI Studio export

- **Unused dependencies removed.** The export listed `@google/genai`, `motion`, `express`, `dotenv`, `tsx`, `autoprefixer`, `esbuild` and `@types/express`. None are imported anywhere in `src/`; only `react`, `react-dom` and `lucide-react` are actually used.
- **No Gemini integration exists.** `metadata.json` declares `MAJOR_CAPABILITY_SERVER_SIDE_GEMINI_API` and the export shipped an `.env.example` with `GEMINI_API_KEY`, but there is no `@google/genai` import, no `process.env` read and no `fetch` in the source. The "interactive" sections serve pre-authored content from `margoData.ts`. The env file was removed as misleading.
- **`strict` TypeScript enabled**, along with `noUnusedLocals` / `noUnusedParameters`. This surfaced 16 unused imports, which were removed. There were no actual type errors.
- The previous contents of this repo — an unrelated Margo Advisory client-enquiry portal — are preserved in git history at commit `6b4b99a`.
