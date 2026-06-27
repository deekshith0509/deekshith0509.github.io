<div align="center">

# Deekshith Bommarthi · GitHub Pages Portfolio

A single-repo static site that hosts a developer portfolio, a live GitHub explorer, a collection of standalone utilities, and a few fan-pages — all hand-written HTML / CSS / JavaScript with no build step.

[![Live site](https://img.shields.io/badge/live-deekshith0509.github.io-2ea44f?style=flat-square&logo=github)](https://deekshith0509.github.io)
[![Pages](https://img.shields.io/badge/pages-32_HTML-blue?style=flat-square)](#-pages-in-this-repository)
[![No build](https://img.shields.io/badge/build-none-success?style=flat-square)](#-run-locally)
[![Made with](https://img.shields.io/badge/made_with-vanilla_JS-f7df1e?style=flat-square&logo=javascript&logoColor=black)](#-tech-stack)

[![ deekshith ](https://img.shields.io/badge/deekshith-profile-white.svg)](https://github.com/deekshith0509?tab=repositories) [![ Jonah ](https://img.shields.io/badge/Jonah-All-red.svg)](https://github.com/jonahprashanth) [![ Vikram ](https://img.shields.io/badge/Vikram-All-green.svg)](https://github.com/vikram-73/) [![ Arvind ](https://img.shields.io/badge/Arvind-All-blue.svg)](https://github.com/Aravind-webD)

</div>

---

## 📑 Table of contents

- [About](#-about)
- [Highlights](#-highlights)
- [Pages in this repository](#-pages-in-this-repository)
  - [Portfolio &amp; landing](#portfolio--landing)
  - [Utilities &amp; tools](#utilities--tools)
  - [Media](#media)
  - [Games &amp; fan-pages](#games--fan-pages)
- [Project structure](#-project-structure)
- [Tech stack](#-tech-stack)
- [External APIs used](#-external-apis-used)
- [Keyboard shortcuts (index.html)](#-keyboard-shortcuts-indexhtml)
- [Run locally](#-run-locally)
- [Deploying your own fork](#-deploying-your-own-fork)
- [Known limitations](#%EF%B8%8F-known-limitations)
- [Troubleshooting](#-troubleshooting)
- [Contributing](#-contributing)
- [Credits &amp; license](#-credits--license)

---

## 🚀 About

```
 ____            _        _     _ _   _
|  _ \  ___  ___| | _____| |__ (_) |_| |__
| | | |/ _ \/ _ \ |/ / __| '_ \| | __| '_ \
| |_| |  __/  __/   <\__ \ | | | | |_| | | |_ _ _
|____/ \___|\___|_|\_\___/_| |_|_|\__|_| |_(_|_|_)
```

Hi, I'm [Deekshith Bommarthi](https://github.com/deekshith0509/) — application developer based in Hyderabad. This repository is the source for my personal site on GitHub Pages. Each `*.html` file at the repo root is an independently-deployable page; nothing here is bundled or transpiled. Clone the repo, double-click a file, and it runs.

**Skills:** Python · Bash · JavaScript · HTML · CSS · C · SQL

## ✨ Highlights

The landing page (`index.html`) is an enterprise-style portfolio shell that doubles as a full GitHub explorer:

- **Live GitHub explorer** — repos, starred, gists, GitHub Pages sites, organisations, and a *Live Pages* tab that walks the repository tree and lists every deployable `.html` file with a direct launch link.
- **In-page code viewer** — Markdown render, HTML sandbox preview (iframe with `sandbox="allow-scripts allow-same-origin"`), JSON pretty-printer, image / PDF / audio / video preview, line-counted syntax highlighting via `highlight.js`, and real binary downloads (blob via fetch with proxy fallback).
- **Multi-engine universal search** — Google · Bing · Yahoo · DuckDuckGo · Brave · Ecosia · Startpage · Yandex · YouTube · GitHub · Stack Overflow · npm · MDN · Wikipedia · Reddit · Twitter · IMDB · PyPI · Crates.io · Unsplash, with smart-keyword redirects (`video`, `buy`, `repo`, …).
- **Resilient network layer** — every API call falls back through 5 CORS proxies (`corsproxy.io`, `allorigins.win`, `codetabs.com`, `cors.eu.org`, `thingproxy.freeboard.io`) with a 5-minute response cache.
- **Voice search** (Web Speech API), **light / dark theme** with `Ctrl+D`, a **`Ctrl+K` command palette**, OpenWeather widget for Hyderabad, quote and joke widgets, visitor counter (localStorage), and full keyboard navigation.

## ⚓ Pages in this repository

All pages are live at `https://deekshith0509.github.io/<filename>`. Filenames with spaces are URL-encoded.

### Portfolio & landing

| Page | What it is |
| --- | --- |
| [`index.html`](https://deekshith0509.github.io/index.html) | Enterprise developer portfolio + GitHub explorer (see [Highlights](#-highlights)). |
| [`Portfolio.html`](https://deekshith0509.github.io/Portfolio.html) | Classic AngularJS portfolio page (`portfolioApp` module). |
| [`Portfolio-parallax.html`](https://deekshith0509.github.io/Portfolio-parallax.html) | Same portfolio with parallax scrolling layout. |
| [`Dash-Board.html`](https://deekshith0509.github.io/Dash-Board.html) | Productivity dashboard — ZenQuotes / Quotable quotes, Nager.Date public holidays, embedded Google Calendar (Indian holidays feed). Ships an explicit `Content-Security-Policy` meta tag. |

### Utilities & tools

| Page | What it is |
| --- | --- |
| [`Country-Info.html`](https://deekshith0509.github.io/Country-Info.html) | *Country Intelligence Platform* — REST Countries v3.1 (with `/v5` fallback) lookup; flags, demographics, currencies, neighbours, embedded OpenStreetMap iframe. |
| [`Device-Info.html`](https://deekshith0509.github.io/Device-Info.html) | *Sentinel — Environment Diagnostics Platform* — browser / OS / screen / network / battery / geolocation report; cross-checks public IP via `ipify`, `ipapi.is`, `ip.sb`, `icanhazip`, `ipapi.co`, `ipwho.is`; reverse-geocodes via OpenCage; speed-tests via `speed.cloudflare.com`. |
| [`Translator.html`](https://deekshith0509.github.io/Translator.html) | Text translator (Google Translate via RapidAPI — requires your own key). |
| [`Currency-Converter.html`](https://deekshith0509.github.io/Currency-Converter.html) | Currency converter using OpenExchangeRates (requires your own `app_id`). |
| [`CSV-Tool.html`](https://deekshith0509.github.io/CSV-Tool.html) | *Pandas Tool* — CSV viewer / inspector. |
| [`JSON-editor.html`](https://deekshith0509.github.io/JSON-editor.html) | JSON viewer & editor. |
| [`HTML editor.html`](https://deekshith0509.github.io/HTML%20editor.html) | Dynamic HTML interpreter — live render of pasted HTML. |
| [`MarkDown_editor.html`](https://deekshith0509.github.io/MarkDown_editor.html) | Live Markdown editor (`marked.js`) with side-by-side preview. |
| [`CodeSnippet.html`](https://deekshith0509.github.io/CodeSnippet.html) | Snippet manager — add / search / edit / delete code per language. Hijacks `Ctrl+F` to focus the in-page search. |
| [`QR_Functionality.html`](https://deekshith0509.github.io/QR_Functionality.html) | QR code generator (download as PNG) and decoder (from an uploaded image). |
| [`Emoji2PNG.html`](https://deekshith0509.github.io/Emoji2PNG.html) | Custom emoji art generator — renders an emoji to a downloadable PNG via Canvas. |
| [`Color-Palette.html`](https://deekshith0509.github.io/Color-Palette.html) | Random colour-palette generator. |
| [`Functions (JS).html`](https://deekshith0509.github.io/Functions%20(JS).html) | Demo of advanced JS utilities — BMI advice, temperature conversion, palindrome / capitalisation, circle area, max-of-N, leap-year, age & birthday math, base conversion, dark-mode toggle. |
| [`Resumebuilder.html`](https://deekshith0509.github.io/Resumebuilder.html) | Dynamic resume builder — fill a form, get a styled resume. |
| [`Resume-Validator.html`](https://deekshith0509.github.io/Resume-Validator.html) | Resume validator (basic structural checks). |
| [`Dark-demo.html`](https://deekshith0509.github.io/Dark-demo.html) | Minimal dark-mode demo page. |

### Media

| Page | What it is |
| --- | --- |
| [`Music-Player.html`](https://deekshith0509.github.io/Music-Player.html) | Local music player — user-picked files from disk. |
| [`Music_Visualiser.html`](https://deekshith0509.github.io/Music_Visualiser.html) | Modern music player with a real-time Web Audio frequency visualiser, ID3 metadata extraction and playlist controls. |
| [`Wallpapers.html`](https://deekshith0509.github.io/Wallpapers.html) | Wallpaper gallery sourced from `assets/wallpapers/` (20 images, ~73 MB). |
| [`Library.html`](https://deekshith0509.github.io/Library.html) | Tech-book library — direct links to PDFs in `assets/lib/`: *Algorithms Unlocked*, *JavaScript Interview Questions with Answers*, Bootstrap, Git cheat sheet, HTML/CSS reference, frontend & Python roadmaps. |
| [`Recipe-MealDB.html`](https://deekshith0509.github.io/Recipe-MealDB.html) | Recipe search using [TheMealDB](https://www.themealdb.com/api.php) — search by name / first letter / ingredient / category / area, list categories, random meal, full lookup. |
| [`Recipe-Suggestion.html`](https://deekshith0509.github.io/Recipe-Suggestion.html) | Lightweight recipe suggestion page. |
| [`Movierecommend.html`](https://deekshith0509.github.io/Movierecommend.html) | Movie recommendation system. |

### Games & fan-pages

| Page | What it is |
| --- | --- |
| [`TicTacToe.html`](https://deekshith0509.github.io/TicTacToe.html) | Tic-Tac-Toe vs the computer — Minimax AI, persistent scoreboard. |
| [`A1-Story (Dynamic).html`](https://deekshith0509.github.io/A1-Story%20(Dynamic).html) | *ODYSSEY 301 — Tales from Earth-301* — interactive branching story; choices drive the narrative, lines reveal with a typing animation. |
| [`Ben-10.html`](https://deekshith0509.github.io/Ben-10.html) | Ben 10 fan-wiki (AngularJS 1.8.2, single-controller `MainController`) — characters, aliens, places, finales, season-based episode navigation, settings panel with import/export of favourites, embedded local audio (`Classic.mp3`, `alienforce.mp3`) and video (`classicv.mp4`, `alienforcev.mp4`, `ultimatealien.mkv`) plus Google Drive previews. Sources imagery from `ben10.fandom.com`. |
| [`TomandJerry.html`](https://deekshith0509.github.io/TomandJerry.html) | Tom & Jerry fan-page (AngularJS) — gallery, character cards, episodes, movies, accordion trivia, quotes carousel. Uses 13 images in `assets/TomandJerry/`. |
| [`Horror.html`](https://deekshith0509.github.io/Horror.html) | Horror fan-page (AngularJS) — *Home / Movies / Wiki / Sounds*. Plays 10 clips from *Annabelle*, *The Conjuring*, *IT* and *The Nun* (`assets/horror/`). |

## 📁 Project structure

```
deekshith0509.github.io/
├── index.html                  # Landing page + GitHub explorer
├── Portfolio.html              # AngularJS portfolio
├── Portfolio-parallax.html
├── Dash-Board.html
│
├── Country-Info.html           # 16 standalone tools / utilities
├── Device-Info.html
├── Translator.html
├── Currency-Converter.html
├── CSV-Tool.html
├── JSON-editor.html
├── HTML editor.html
├── MarkDown_editor.html
├── CodeSnippet.html
├── QR_Functionality.html
├── Emoji2PNG.html
├── Color-Palette.html
├── Functions (JS).html
├── Resumebuilder.html
├── Resume-Validator.html
├── Dark-demo.html
│
├── Music-Player.html           # 7 media pages
├── Music_Visualiser.html
├── Wallpapers.html
├── Library.html
├── Recipe-MealDB.html
├── Recipe-Suggestion.html
├── Movierecommend.html
│
├── TicTacToe.html              # 5 games / fan-pages
├── A1-Story (Dynamic).html
├── Ben-10.html
├── TomandJerry.html
├── Horror.html
│
└── assets/
    ├── ben10/                  # 2 MP3 · 2 MP4 · 1 MKV (~9 MB)
    ├── horror/                 # 10 MP3 clips (~4 MB)
    ├── TomandJerry/            # 13 JPGs
    ├── wallpapers/             # 20 high-res images (~73 MB)
    ├── lib/                    # 7 reference PDFs (~22 MB) + cover JPG
    ├── cursor/                 # 17 custom .cur files
    └── button-click.mp3
```

## 🛠 Tech stack

| Layer | What's used |
| --- | --- |
| **Markup / styling** | Hand-written HTML5, CSS3 with custom properties, CSS Grid, Flexbox, `backdrop-filter` glass-morphism |
| **JavaScript** | Vanilla ES2017+ everywhere on `index.html`; **AngularJS 1.8.2** on `Ben-10.html`, `Portfolio.html`, `TomandJerry.html`, `Horror.html`; **jQuery 3.5.1** on `Currency-Converter.html` |
| **UI libraries (CDN)** | [Font Awesome 6.4.2](https://fontawesome.com/), [highlight.js 11.9.0](https://highlightjs.org/), [marked.js](https://marked.js.org/) |
| **Fonts** | Inter, Space Grotesk, JetBrains Mono, Audiowide, Trirong, Cinzel, Crimson Text, Orbitron, VT323 — all via Google Fonts |
| **Web platform APIs** | [Web Speech](https://developer.mozilla.org/en-US/docs/Web/API/Web_Speech_API), [Web Audio](https://developer.mozilla.org/en-US/docs/Web/API/Web_Audio_API), [Geolocation](https://developer.mozilla.org/en-US/docs/Web/API/Geolocation_API), [Battery Status](https://developer.mozilla.org/en-US/docs/Web/API/Battery_Status_API), [Clipboard](https://developer.mozilla.org/en-US/docs/Web/API/Clipboard_API), [Fullscreen](https://developer.mozilla.org/en-US/docs/Web/API/Fullscreen_API), [Network Information](https://developer.mozilla.org/en-US/docs/Web/API/Network_Information_API), Canvas |
| **Build / tooling** | **None.** No bundler, no transpiler, no package.json. Open a file, it runs. |

## 🌐 External APIs used

Real endpoints called from the code (grouped by page):

| Page | API |
| --- | --- |
| `index.html` | [GitHub REST API](https://docs.github.com/en/rest) (users / repos / starred / gists / orgs / contents / git trees) · [OpenWeatherMap](https://openweathermap.org/api) (current weather, Hyderabad) |
| `Country-Info.html` | [REST Countries v3.1](https://restcountries.com/) (`/v5` fallback) · OpenStreetMap embed |
| `Device-Info.html` | `api64.ipify.org` · `api.ipapi.is` · `api.ip.sb` · `icanhazip.com` · `ipapi.co` · `ipwho.is` · `api.opencagedata.com` (reverse geocode) · `speed.cloudflare.com` (throughput) |
| `Dash-Board.html` | [ZenQuotes](https://zenquotes.io/) · [Quotable](https://github.com/lukePeavey/quotable) (kurokeita mirror) · [Nager.Date](https://date.nager.at/) (public holidays) · Google Calendar embed |
| `Recipe-MealDB.html` | [TheMealDB](https://www.themealdb.com/api.php) — search / lookup / random / filter / list / categories |
| `Translator.html` | RapidAPI Google Translate (your own key) |
| `Currency-Converter.html` | [OpenExchangeRates](https://openexchangerates.org/) (your own `app_id`) |
| `Ben-10.html` | `ben10.fandom.com` (imagery) · Google Drive (video previews) |
| `index.html` proxy chain | `corsproxy.io` · `allorigins.win` · `codetabs.com` · `cors.eu.org` · `thingproxy.freeboard.io` |

> ⚠️ Three pages (`Translator.html`, `Currency-Converter.html`, and OpenWeather inside `index.html`) ship a public API key as a literal in the source so the demo works out of the box. Treat those keys as throw-away — **replace them with your own before forking for serious use**.

## ⌨️ Keyboard shortcuts (`index.html`)

| Action | Keys |
| --- | --- |
| Command palette | `Ctrl` `K` |
| Focus search | `Ctrl` `Q` |
| Toggle theme | `Ctrl` `D` |
| Voice search | `Ctrl` `M` |
| New quote | `Ctrl` `N` |
| Refresh all data | `Ctrl` `Shift` `R` |
| Fullscreen | `F` |
| Show shortcuts | `?` |
| Switch tabs | `1` – `6` |
| Navigate back (folder view) | `Backspace` |
| Close modal / palette | `Esc` |

## 💻 Run locally

No build step. Any static file server works.

```bash
git clone https://github.com/deekshith0509/deekshith0509.github.io
cd deekshith0509.github.io

# pick one:
python3 -m http.server 8000          # then http://localhost:8000
npx serve .                           # auto-picks a port
php -S localhost:8000                 # if you have PHP
```

> Opening pages with `file://` directly mostly works, but a few features (the GitHub-explorer fetch proxy, `fetch()` of local files, the Web Audio visualiser on certain browsers) need an actual HTTP origin.

### On Android via Termux

```bash
pkg update && pkg upgrade -y
pkg install git python
git clone https://github.com/deekshith0509/deekshith0509.github.io
cd deekshith0509.github.io
python -m http.server 8000
```

## 🚀 Deploying your own fork

1. **Fork** this repo on GitHub.
2. Rename the fork to **`<your-username>.github.io`** (this is what makes GitHub serve it from the apex domain).
3. **Settings → Pages → Source:** *Deploy from a branch* → branch `main` → folder `/ (root)` → **Save**.
4. Edit `index.html` and change the config object near line 444:
   ```js
   const C = { u:'YOUR_GITHUB_USERNAME', pagesRepo:'YOUR_USERNAME.github.io', pagesBase:'https://YOUR_USERNAME.github.io', k:'YOUR_OPENWEATHER_KEY', cy:'YourCity', ... };
   ```
5. Replace the demo API keys in `Translator.html`, `Currency-Converter.html`, and OpenWeather (`C.k`) with your own.
6. Push. The site is live at `https://<your-username>.github.io` within a minute.

## ⚠️ Known limitations

- **Android file access** — since KitKat, browsers can't enumerate arbitrary directories via `webkitdirectory`, so `Music-Player.html` only sees files the user explicitly picks.
- **Device-Info coverage** — battery, precise geolocation, and network-type signals are gated by user permission or vendor support and show as *unavailable* in some browsers (notably Firefox dropped the Battery API).
- **GitHub API rate limits** — anonymous requests are capped at 60/hour per IP. `index.html` falls back through 5 public CORS proxies; when every proxy is exhausted the footer indicator turns red.
- **Public CORS proxies are best-effort.** They occasionally rate-limit, mis-encode binary blobs, or go down entirely. There's no SLA; that's the cost of running a fully client-side explorer.
- **AngularJS 1.x is end-of-life.** The four fan-pages still on it (`Ben-10.html`, `Portfolio.html`, `TomandJerry.html`, `Horror.html`) work fine but won't be modernised.
- **Bundled API keys are demo-only.** See the warning under [External APIs used](#-external-apis-used).

## 🩺 Troubleshooting

| Symptom | Likely cause | Fix |
| --- | --- | --- |
| GitHub explorer shows skeletons forever | Rate limit hit on anonymous GitHub API + every proxy throttled | Wait a few minutes, or sign in to GitHub in the same browser tab (raises the limit), or refresh via `Ctrl` `Shift` `R` |
| Weather card shows `--°C / Unavailable` | OpenWeather demo key revoked or quota exhausted | Drop your own key into `C.k` in `index.html` |
| Voice search button is hidden | Browser doesn't expose `SpeechRecognition` (Firefox, some mobile browsers) | Use Chrome / Edge / Safari |
| Music visualiser shows no bars | Page opened via `file://` — Web Audio refuses to decode some sources without a real origin | Serve via `python3 -m http.server` |
| Translator / Currency converter return errors | The bundled RapidAPI / OpenExchangeRates demo key is exhausted | Sign up and paste your own key |
| Wallpapers gallery is slow on first load | 73 MB of images — no thumbnail pipeline | Expected; subsequent loads are cached |

## 🤝 Contributing

This is a personal portfolio repo, but I'm happy to take small contributions:

- **Bug reports** — open an issue with the page name, browser, and steps.
- **Pull requests** — keep them surgical: one feature or fix per PR, no unrelated reformatting, and don't touch other people's pages without a reason.
- **New pages** — drop a self-contained `.html` at the repo root, add a row in the table above, and reference its real APIs/assets honestly. No build step; no `npm install`.

## 📜 Credits & license

- **Code** — Hand-written by [Deekshith Bommarthi](https://github.com/deekshith0509/). No license file is currently in this repo, so default GitHub terms apply: you may view and fork, but reuse beyond personal study should ask first.
- **Ben 10** — © Cartoon Network; this is a non-commercial fan project, imagery via [Ben 10 Wiki on Fandom](https://ben10.fandom.com/).
- **Tom & Jerry** — © Warner Bros. / Turner Entertainment; non-commercial fan use.
- **Horror clips** — © respective rightsholders (*Annabelle*, *The Conjuring*, *IT*, *The Nun*); non-commercial fan use.
- **Library PDFs** — bundled for personal reading reference; not redistributed for sale.
- **Wallpapers** — mixed sources including Pexels (CC0) and personal AI-upscaled material.

Built with ❤️ in Hyderabad. Fork it, learn from it, make it yours.

<div align="center">

⬆ [Back to top](#deekshith-bommarthi--github-pages-portfolio)

</div>
