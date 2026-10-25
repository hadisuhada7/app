import { Link, useParams, Navigate } from "react-router-dom";
import { useSeo } from "@/components/Layout";
import { Reveal, Eyebrow, Btn, BtnLink, IconBox, CtaBlock, Icon } from "@/components/Common";
import { SERVICES, ARTICLES, WA, CONTACT, wa } from "@/data/site";
import { ArticleCard } from "@/pages/Home";

const SimpleHero = ({ eyebrow, title, text, children, testid }) => (
  <section className="page-hero simple" data-testid={testid}>
    <div className="container">
      <Reveal className="simple-hero-inner">
        <Eyebrow>{eyebrow}</Eyebrow>
        <h1>{title}</h1>
        {text && <p className="hero-lead">{text}</p>}
        {children}
      </Reveal>
    </div>
  </section>
);

const ClosingCta = () => (
  <CtaBlock eyebrow="Mulai bersama Green Website" title="Mari Bicarakan Website yang Tepat untuk Bisnis Anda." text="Ceritakan bisnis yang Anda jalankan, tujuan yang ingin dicapai, dan kebutuhan website Anda. Kami siap membantu merencanakan langkah berikutnya.">
    <Btn to={WA.konsultasi} variant="white">Mulai Konsultasi Gratis</Btn>
    <Btn to="/portofolio" variant="outline-white">Lihat Portofolio</Btn>
  </CtaBlock>
);

export const ServiceDetail = () => {
  const { slug } = useParams();
  const s = SERVICES.find((x) => x.slug === slug);
  useSeo(`${s?.title ?? "Layanan"} — Green Website Indonesia`, s?.home ?? "");
  if (!s) return <Navigate to="/" replace />;
  return (
    <>
      <SimpleHero eyebrow={`Layanan · ${s.short}`} title={<>Layanan <em>{s.title}.</em></>} text={s.home} testid="service-hero">
        <div className="hero-buttons">
          <Btn to={wa(`Halo Green Website, saya ingin konsultasi layanan ${s.title}.`)} testid="service-consult">Konsultasikan Layanan</Btn>
          <Btn to="/portofolio" variant="light" arrow={false}>Lihat Portofolio</Btn>
        </div>
      </SimpleHero>
      <section className="section soft">
        <div className="container grid-3">
          {[s.about, s.portfolio, "Kebutuhan halaman, fitur, materi, dan tahapan dibahas sejak awal agar pekerjaan memiliki arah yang jelas."].map((t, i) => (
            <Reveal className="card feature-card" key={i} delay={i * 0.08}>
              <IconBox name={i === 0 ? s.icon : i === 1 ? "sparkle" : "clipboard"} />
              <h3>{["Gambaran Layanan", "Cocok Untuk", "Lingkup Kerja"][i]}</h3>
              <p>{t}</p>
            </Reveal>
          ))}
        </div>
      </section>
      <section className="section">
        <div className="container">
          <h2 className="small-h2">Layanan lainnya</h2>
          <div className="chip-row">
            {SERVICES.filter((x) => x.slug !== slug).map((x) => <Link key={x.slug} className="chip" to={`/layanan/${x.slug}`}>{x.title}</Link>)}
          </div>
        </div>
      </section>
      <ClosingCta />
    </>
  );
};

export const ArticlesPage = () => {
  useSeo("Artikel & Panduan — Green Website Indonesia", "Panduan singkat untuk merencanakan, menyiapkan, dan mengelola website bisnis Anda.");
  return (
    <>
      <SimpleHero eyebrow="Artikel & Panduan" title={<>Bekal untuk Mengambil Keputusan <em>Digital yang Lebih Tepat.</em></>} text="Panduan singkat untuk merencanakan, menyiapkan, dan mengelola website bisnis Anda." testid="articles-hero" />
      <section className="section soft"><div className="container grid-3">{ARTICLES.map((a, i) => <ArticleCard key={a.slug} a={a} i={i} />)}</div></section>
      <ClosingCta />
    </>
  );
};

export const ArticleDetail = () => {
  const { slug } = useParams();
  const a = ARTICLES.find((x) => x.slug === slug);
  useSeo(`${a?.title ?? "Artikel"} — Green Website Indonesia`, a?.body?.[0] ?? "");
  if (!a) return <Navigate to="/artikel" replace />;
  return (
    <>
      <SimpleHero eyebrow={`${a.kicker} · ${a.tag}`} title={a.title} testid="article-hero" />
      <section className="section">
        <div className="container prose" data-testid="article-body">
          {a.body.map((p) => <p key={p}>{p}</p>)}
          <BtnLink to="/artikel">Kembali ke Artikel</BtnLink>
        </div>
      </section>
      <ClosingCta />
    </>
  );
};

export const ContactPage = () => {
  useSeo("Kontak — Green Website Indonesia", "Hubungi PT Green Website Indonesia melalui WhatsApp, email, atau kunjungi kantor kami di Cirebon dan Jakarta.");
  const items = [
    { icon: "chat", title: "WhatsApp", text: CONTACT.phone, href: WA.chat },
    { icon: "book", title: "Email", text: CONTACT.email, href: `mailto:${CONTACT.email}` },
    ...CONTACT.offices.map((o) => ({ icon: "pin", title: o.title, text: o.address })),
  ];
  return (
    <>
      <SimpleHero eyebrow="Kontak" title={<>Mari Mulai dari <em>Percakapan.</em></>} text="Ceritakan kebutuhan bisnis, perusahaan, atau lembaga Anda. Tim kami siap membantu memetakan langkah yang relevan sebelum proyek dimulai." testid="contact-hero">
        <div className="hero-buttons"><Btn to={WA.konsultasi} testid="contact-wa">Chat via WhatsApp</Btn></div>
      </SimpleHero>
      <section className="section soft">
        <div className="container grid-4">
          {items.map((it, i) => (
            <Reveal className="card feature-card" key={it.title} delay={i * 0.06} data-testid={`contact-card-${i}`}>
              <IconBox name={it.icon} />
              <h3>{it.title}</h3>
              {it.href ? <a className="contact-link" href={it.href} target={it.href.startsWith("http") ? "_blank" : undefined} rel="noopener noreferrer">{it.text}</a> : <p>{it.text}</p>}
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
};

export const MemberPage = () => {
  useSeo("Login Member — Green Website Indonesia", "Member Area Green Website Indonesia untuk mengakses layanan hosting, domain, dan email bisnis.");
  return (
    <section className="page-hero simple member" data-testid="member-page">
      <div className="container member-wrap">
        <Reveal className="card member-card">
          <IconBox name="user" />
          <h1 className="member-title">Login Member</h1>
          <p>Akses layanan hosting, domain, dan email bisnis melalui Member Area.</p>
          <form onSubmit={(e) => e.preventDefault()} className="member-form">
            <label>Email<input type="email" placeholder="nama@bisnis.com" data-testid="member-email" /></label>
            <label>Kata sandi<input type="password" placeholder="••••••••" data-testid="member-password" /></label>
            <button type="submit" className="btn primary full" disabled data-testid="member-submit">Masuk</button>
          </form>
          <p className="fine-note"><Icon name="shield" size={13} /> Member Area sedang disiapkan. Untuk bantuan, hubungi <a href={WA.afterSales} target="_blank" rel="noopener noreferrer">Tim After Sales</a>.</p>
        </Reveal>
      </div>
    </section>
  );
};

const LEGAL_TEXT = {
  privasi: {
    title: "Kebijakan Privasi",
    body: [
      "PT Green Website Indonesia menghargai privasi setiap pengunjung dan klien. Informasi yang Anda sampaikan melalui WhatsApp, email, atau formulir digunakan untuk menanggapi kebutuhan konsultasi dan pelaksanaan layanan.",
      "Kami tidak menjual atau membagikan data pribadi kepada pihak lain di luar keperluan layanan, kecuali diwajibkan oleh hukum yang berlaku.",
      "Untuk pertanyaan terkait privasi, hubungi kami melalui care@greenwebsite.co.id.",
    ],
  },
  syarat: {
    title: "Syarat & Ketentuan",
    body: [
      "Lingkup pekerjaan, jadwal, dan biaya setiap proyek disepakati bersama sebelum pengerjaan dimulai.",
      "Layanan after sales tidak mencakup revisi atau pembaruan konten setelah website online. Konten dikelola oleh klien; pengembangan tambahan dikerjakan berdasarkan kesepakatan terpisah.",
      "Bantuan teknis dan pemeliharaan mengikuti cakupan layanan serta kesepakatan proyek.",
    ],
  },
};

export const LegalPage = ({ kind }) => {
  const d = LEGAL_TEXT[kind];
  useSeo(`${d.title} — Green Website Indonesia`, d.body[0]);
  return (
    <>
      <SimpleHero eyebrow="PT Green Website Indonesia" title={d.title} testid={`legal-${kind}`} />
      <section className="section"><div className="container prose">{d.body.map((p) => <p key={p}>{p}</p>)}</div></section>
    </>
  );
};
