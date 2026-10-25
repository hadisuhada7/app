import { Link, useParams, Navigate } from "react-router-dom";
import { useSeo } from "@/components/Layout";
import { Reveal, Eyebrow, Btn, BtnLink, IconBox, CtaBlock } from "@/components/Common";
import { SERVICES, ARTICLES, WA, wa } from "@/data/site";
import ServicePage from "@/pages/ServicePage";
import { SERVICE_DETAILS } from "@/data/services";

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
  const d = SERVICE_DETAILS[slug];
  return d ? <ServicePage key={slug} d={d} /> : <BasicService key={slug} slug={slug} />;
};

const BasicService = ({ slug }) => {
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
