# Vercal Exports — B2B Landing Page

A single-page marketing site for an Indian agricultural exporter (Moringa Powder
and Coir Pith), built with **React + Vite + Tailwind CSS v4**.

There is no backend. The enquiry form posts directly from the browser to a
**Google Apps Script** web app, which appends each lead as a row in a
**Google Sheet**.

---

## Prerequisites

Node.js 20 or newer. Check with:

```powershell
node --version
npm --version
```

If `npm` is not recognised, restart your editor — a terminal opened before Node
was installed will not have it on PATH.

## Setup

```powershell
cd D:\AOS-course\test-web
npm install
```

### Connect the Google Sheet

The form needs somewhere to write before it can accept anything:

1. Create a Google Sheet at <https://sheets.new>
2. **Extensions → Apps Script**, delete the sample code, paste the whole of
   [`apps-script/Code.gs`](apps-script/Code.gs), then Save
3. **Deploy → New deployment → Web app**
   - Execute as: **Me**
   - Who has access: **Anyone**
4. Authorise it. Google warns the app is unverified — that is normal for a
   script you wrote yourself; choose *Advanced → Go to …*
5. Copy the Web app URL (it ends in `/exec`) into `.env`:

```ini
VITE_SHEETS_ENDPOINT=https://script.google.com/macros/s/AKfycb.../exec
```

6. Restart the dev server. **Vite only reads `.env` at startup**, so a running
   server will not pick up the change.

Until the URL is set, submitting the form shows an inline message saying so.

A `Leads` tab with a frozen, bold header row is created automatically on the
first submission.

> **Editing `Code.gs` later?** You must redeploy or the old code keeps serving:
> *Deploy → Manage deployments → pencil icon → Version: New version → Deploy.*

#### Optional: email each lead too

Set `NOTIFY_EMAIL` near the top of `Code.gs` to your address and redeploy. Every
lead is then both stored in the Sheet and emailed to you, with `Reply-To` set to
the buyer so replying reaches them directly. Leave it as `''` to only store.

## Run

```powershell
npm run dev
```

Open <http://127.0.0.1:5173>. Press `Ctrl+C` to stop.

## Build

```powershell
npm run build     # static files in dist/
npm run preview   # serve the build locally to check it
```

`dist/` is plain static output — deploy it to Netlify, Vercel, GitHub Pages,
Cloudflare Pages or any web host. Nothing needs to run server-side.

When deploying, set `VITE_SHEETS_ENDPOINT` in the host's environment variables
**before** the build step, since Vite inlines it at build time.

---

## How the form stores leads

`QuoteForm.jsx` POSTs JSON to the Apps Script URL. The script validates it and
appends a row: Timestamp, Product, Quantity, Destination Port, Company Name,
Business Email, Message.

- The request is sent as `Content-Type: text/plain;charset=utf-8`. This keeps it
  a CORS *simple request* and avoids the preflight `OPTIONS` call, which Apps
  Script web apps cannot answer. The script parses the body as JSON regardless.
- A hidden `botcheck` honeypot field is included; the script discards any
  submission where it is filled, while still reporting success so bots learn
  nothing.
- Validation runs on both sides — in the browser for fast feedback, and again in
  `Code.gs`, which is the check that actually matters.
- `LockService` serialises appends so two simultaneous submissions cannot
  collide on the same row.

### On the endpoint URL being public

Anything prefixed `VITE_` is compiled into the browser bundle and is readable by
anyone. That is expected here: the deployment URL only accepts appends through
`doPost`. It does not share the Sheet, and nobody can read existing leads
through it.

Setting *Who has access: Anyone* applies to the **script**, not your Sheet. The
Sheet itself stays private to your Google account.

This is also why an SMTP password cannot be used from the browser: it would give
any visitor full send-and-read access to the mailbox. Browsers additionally
cannot speak SMTP, which is a raw TCP protocol rather than HTTP.

---

## Project structure

```
index.html                  Document shell, fonts, meta tags
vite.config.js              React + Tailwind plugins, dev server host/port
.env                        Apps Script endpoint URL (git-ignored)
.env.example                Documented template

apps-script/
  Code.gs                   Paste into your Sheet's Apps Script editor.
                            Runs on Google, not in this project.

src/
  main.jsx                  React entry point
  App.jsx                   Section composition + scroll-reveal observer
  index.css                 Tailwind import, design tokens, keyframes
  data/content.js           All page copy (edit text here)
  components/
    Navbar.jsx              Sticky header with mobile drawer
    Hero.jsx                Headline, CTAs, diagonal split product visual
    TrustBar.jsx            Five export capability badges
    Products.jsx            Moringa Powder + Coir Pith cards
    WhyChooseUs.jsx         Five differentiators
    Process.jsx             Five-step Source -> Ship pipeline
    Quality.jsx             FSSAI / APEDA / ISO / HACCP / COA seals
    FranceBand.jsx          India -> France shipping lane
    QuoteForm.jsx           Enquiry form, validation, Sheets submit
    Footer.jsx              Links, socials, legal
    Figure.jsx              Image slot with placeholder fallback
    Icons.jsx               Inline SVG icon set

public/
  favicon.svg
  images/README.md          Filenames and sizes for your photography
```

## Customising

- **Text** — `src/data/content.js` holds nav links, products, process steps,
  certifications and footer links.
- **Colours and fonts** — the `@theme` block at the top of `src/index.css`
  defines `brand-*`, `cream-*` and `clay-*` plus the display/body typefaces.
  Changing a token there updates every component.
- **Images** — see `public/images/README.md`. Missing files fall back to a
  textured placeholder, so the layout never breaks.
- **Form fields** — add the field to `EMPTY` and the JSX in `QuoteForm.jsx`,
  include it in the posted `body`, then add it to `HEADERS` and the
  `appendRow([...])` call in `apps-script/Code.gs` and redeploy.
