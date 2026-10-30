# PRD — Clone Green Website Indonesia

## Original problem statement
"Buatlah website dengan clone dari webiste https://greenwebsite.co.id/ berikut DESIGN.md dan PRD.md dan samakan dengan screenshot terlampir sementara untuk Beranda, Tentang Kami, Portofolio. Bisa cek kembali DESIGN.md dan PRD.md dan jika ada improve beri tahu saya. saya ingin sama persis. Note : Screenshoot saya lampirkan bertahap"

## Architecture
- React (CRA) + React Router 7, framer-motion, lenis (smooth scroll), lucide-react. Pure CSS in App.css (tokens copied from the original site: #1d5f4f, Manrope).
- Content in /app/frontend/src/data/site.js and portfolio.json (62 projects scraped from greenwebsite.co.id). Images saved locally in /public/uploads/portfolio (webp), /public/clients, /public/assets.
- Backend not used (static site). WhatsApp 628977430802 is configured in site.js.

## User personas
- Potential clients looking for website services who contact via WhatsApp.
- The Green Website owner (wants the clone to match the original exactly).

## Core requirements
- Beranda, Tentang Kami, Portofolio matching the screenshots + original content.
- Sticky header with a mega menu, white footer, floating WhatsApp button, works at 390px, respects reduced motion.

## Implemented (2026-10-25)
- Beranda: hero with masked lines + HTML 3D-tilt dashboard, client marquee, about visual, 8 services, 8 portfolio items, approach, steps, after sales, articles, FAQ accordion, CTA.
- Tentang Kami: hero, identity panel, profile, focus, steps, principles, legal info, offices, support, CTA.
- Portofolio: hero + stats, approach, tabs (37 LP / 17 CP / 8 Toko Online / Portal Berita empty), solutions, CTA.
- Temporary pages: /layanan/:slug (8), /artikel, /artikel/:slug, /kontak, /member (display only), /kebijakan-privasi, /syarat-ketentuan.

## Implemented (2026-10-25, update)
- Full service pages matching the original site: /layanan/company-profile, /layanan/landing-page, /layanan/toko-online (data in src/data/services.js; template in pages/ServicePage.jsx; toko online extras in pages/CommerceSections.jsx). Sections: hero + visual, clients, about, use cases, structure, pricing (CP promo valid until 31 Oct 2026), portfolio, technology & partners, process, after-sales panel, FAQ, CTA. Logos for tech/couriers/banks saved locally in /public/assets.
- The other 5 services (website-custom, portal-berita, web-application, mobile-app, managed-hosting-server) still use the basic template.
- Artikel (/artikel), Kontak (/kontak) and Member Area (/member) rebuilt to match the user's screenshots + original content (2026-10-25). Kontak: brief form opens WhatsApp with a pre-filled message (same format as original), Google Maps embed. Member: "Segera Hadir" page with live countdown to 1 Nov 2026 00:00 WIB.
- Article detail pages (/artikel/:slug) rebuilt with full original text: centered hero (category, title, lead, author + 1 Oktober 2026), visual banner, sections, related articles (2026-10-25).
- Website Custom, Portal Berita, Web Application pages rebuilt from originals (data in src/data/services2.js, block-based rendering in ServicePage.jsx, web-app specific sections in pages/AppSections.jsx) (2026-10-25). Remaining basic: mobile-app, managed-hosting-server.
- Mobile App and Managed Hosting & Server pages rebuilt from originals (data in src/data/services3.js, generic split/panel/options blocks + phone/server hero mocks in pages/InfraSections.jsx) (2026-10-25). All 8 service pages now match the original site.
- Refinements to match original (2026-10-28): mega menu (eyebrow, 42px icons, arrows), header scroll-progress line, closing CTA (gradient card, stacked buttons, soft band) on all pages, Struktur Website bordered cells with arrows, Commerce Signature member dashboard with icons, Workflow cards with icons + numbers; service icons updated site-wide.
- Mobile footer bottom (2026-10-30): inset divider, single-line 11px copyright, green Kebijakan Privasi · Syarat & Ketentuan links below, clearance for WhatsApp button. Known: on tablet/desktop the floating WhatsApp button can cover the right-side footer links when scrolled to the very bottom.
- (2026-10-30) Floating WhatsApp button is round icon-only at <=640px. Home "Pengalaman Klien" section (pages/HomeTestimonials.jsx) before Artikel & Panduan with 3 real client testimonials (Budi Santoso – PT Maju Bersama Sentosa, Rina Amelia – Amel Boutique, Andi Gunawan – Yayasan Cendekia Edukasi), provided by user. On all sizes the cards are a swipe slider (desktop 3 visible, tablet 2, mobile 1) with prev/next arrows and page dots; 4th testimonial Citra Larasati – Graha Propertindo Jaya added. Add more entries in TESTIMONIALS array.



## Backlog
- P0: Match Layanan, Artikel, Kontak, Login Member to their screenshots (phase 2).
- P1: "Pengalaman Klien" testimonial section; real member login.
- P2: Admin panel for portfolio/articles; Lighthouse ≥ 90 (sitemap, robots).

## Next tasks
- Wait for the next screenshots from the user and match those pages.
