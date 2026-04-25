# Harta internă a site-ului — Newspaper Paradis

> **Agent AI:** Consultă acest fișier înainte de orice modificare structurală.
> Actualizează-l la sfârșitul fiecărei sesiuni dacă ai adăugat sau modificat
> fișiere.  
> **Elev:** Dacă vrei să înțelegi cum e organizat site-ul, acesta e locul potrivit.

---

## Pagini HTML (la rădăcina proiectului)

| Fișier | Titlu pagină | Descriere scurtă |
|---|---|---|
| `index.html` | Acasă | Pagina principală: știri importante, echipă, PDF-uri recente |
| `events.html` | Evenimente | Interviuri, noutăți școlare, premii |
| `design.html` | Echipa de Design | Prezentarea echipei de design |
| `marketing.html` | Echipa de Marketing | Prezentarea echipei de marketing |
| `writing.html` | Echipa de Writing | Prezentarea echipei de redactori |
| `reporters.html` | Echipa de Reporteri | Prezentarea reporterilor |
| `pdfs.html` | Revista PDF | Arhiva edițiilor PDF ale revistei |
| `contact.html` | Contact | Formular de contact și informații |
| `team.html` | Echipă | Prezentare generală a echipei |

**Navigare comună:** Toate paginile au același meniu lateral (side panel) cu
link-uri către toate cele 9 pagini. Modificarea meniului în una din pagini
trebuie replicată în **toate celelalte pagini**.

---

## Fișiere de stil și logică

| Fișier | Rol | Atenție |
|---|---|---|
| `assets/css/style.css` | Stilul vizual global (culori, fonturi, layout) | Afectează **toate** paginile |
| `assets/js/script.js` | Logica meniului lateral și data curentă | Afectează **toate** paginile |

Tema vizuală: noir alb-negru, fonturi clasice retro (Cinzel + Libre Baskerville).

---

## Foldere pentru resurse statice

### `assets/img/` — Fotografii
- Formate acceptate: `.jpg`, `.png`, `.webp`
- Convenție de denumire: `[context]-[descriptor].[ext]`
- Exemple: `echipa-andrei-popa.jpg`, `eveniment-debate-2026.jpg`
- **Nu folosi spații sau caractere speciale în nume.**

### `assets/svg/` — Logo și grafică vectorială
- Formate acceptate: `.svg`
- Convenție de denumire: `logo-paradis.svg`, `icon-[nume].svg`
- Exemple: `logo-paradis.svg`, `icon-meniu.svg`, `separator-ornamental.svg`

### `assets/pdf/` — Edițiile revistei
- Structura: `assets/pdf/[an]/[sezon]-[an].pdf`
- Sezoane: `primavara`, `vara`, `toamna`, `iarna`
- Exemple:
  ```
  assets/pdf/2016/primavara-2016.pdf
  assets/pdf/2016/vara-2016.pdf
  assets/pdf/2016/toamna-2016.pdf
  assets/pdf/2016/iarna-2016.pdf
  assets/pdf/2017/primavara-2017.pdf
  ...
  assets/pdf/2026/primavara-2026.pdf
  ```
- Ani activi în structura de foldere: **2016 – 2026** (≈40 ediții totale)
- La adăugarea unui PDF nou, actualizează și pagina `pdfs.html`.

---

## Stare curentă a PDF-urilor

> Actualizat: 2026-04-25  
> Statusul fiecărui folder de an (✅ = are PDF-uri reale, 🗂️ = folder gol/placeholder)

| An | Primăvară | Vară | Toamnă | Iarnă |
|---|---|---|---|---|
| 2016 | 🗂️ | 🗂️ | 🗂️ | 🗂️ |
| 2017 | 🗂️ | 🗂️ | 🗂️ | 🗂️ |
| 2018 | 🗂️ | 🗂️ | 🗂️ | 🗂️ |
| 2019 | 🗂️ | 🗂️ | 🗂️ | 🗂️ |
| 2020 | 🗂️ | 🗂️ | 🗂️ | 🗂️ |
| 2021 | 🗂️ | 🗂️ | 🗂️ | 🗂️ |
| 2022 | 🗂️ | 🗂️ | 🗂️ | 🗂️ |
| 2023 | 🗂️ | 🗂️ | 🗂️ | 🗂️ |
| 2024 | 🗂️ | 🗂️ | 🗂️ | 🗂️ |
| 2025 | 🗂️ | 🗂️ | 🗂️ | 🗂️ |
| 2026 | 🗂️ | — | — | — |

---

## Componente comune tuturor paginilor

Fiecare pagină `.html` conține **obligatoriu**:

1. **`<aside id="sidePanel">`** — meniu lateral (același în toate paginile)
2. **`<div id="pageOverlay">`** — overlay întunecat când meniul e deschis
3. **`<header class="site-header">`** — bara de sus cu titlu și buton meniu
4. **`<main class="container">`** — conținutul principal
5. **`<footer class="site-footer">`** — footer cu link înapoi la pagina principală
6. **`<script src="assets/js/script.js">`** — la finalul `<body>`

---

## Instrucțiuni pentru agent la adăugarea unui PDF nou

1. Pune fișierul în `assets/pdf/[an]/[sezon]-[an].pdf`
2. Deschide `pdfs.html`
3. Adaugă un bloc `<article>` nou în grid-ul de PDF-uri cu:
   - titlul ediției (ex: „Ediție Toamnă 2024")
   - `<iframe src="assets/pdf/2024/toamna-2024.pdf" ...>`
   - link de download
4. Actualizează tabelul din secțiunea „Stare curentă a PDF-urilor" de mai sus (schimbă 🗂️ cu ✅)

---

## Instrucțiuni pentru agent la adăugarea unei imagini/SVG

- Pune imaginea în `assets/img/` sau `assets/svg/` după tip
- Respectă convenția de denumire (vezi mai sus)
- Referențiaz-o în HTML cu calea relativă: `assets/img/[nume-fisier].jpg`

---

## Ce să NU faci fără confirmare

- ❌ Nu șterge niciun fișier `.html`
- ❌ Nu redenumi `style.css` sau `script.js`
- ❌ Nu schimba structura de foldere `assets/`
- ❌ Nu modifica `.github/agents/INSTRUCTIUNI-AGENT.md` fără aprobare
- ❌ Nu adăuga dependențe externe (librării npm, framework-uri) fără discuție
