import { Link } from "react-router-dom";
import { useSeo } from "@/components/Layout";
import { Reveal, Eyebrow, Btn, BtnLink, FeatureCard, CtaBlock, VisualCard, Icon } from "@/components/Common";
import { ARTICLES, WA } from "@/data/site";

const TOPICS = [
  { icon: "globe", title: "Perencanaan Website", text: "Menentukan tujuan, jenis website, struktur halaman, dan fungsi yang benar-benar dibutuhkan." },
  { icon: "briefcase", title: "Persiapan Materi", text: "Merapikan logo, profil, layanan, foto, legalitas, dan informasi sebelum proses desain dimulai." },
  { icon: "check", title: "Pengelolaan Website", text: "Menjaga informasi, konten, dan kebutuhan pengembangan tetap sesuai setelah website diluncurkan." },
];

const GuideCard = ({ a, i }) => (
  <Reveal className="card guide-card" delay={i * 0.08} data-testid={`guide-card-${a.slug}`}>
    <Link to={`/artikel/${a.slug}`} className={`guide-cover tone-${a.tone}`} aria-label={a.title}>
      <div className="guide-window">
        <div className="svc-mock-bar"><i /><i /><i /></div>
        <div className="guide-window-body">
          <div><span>{a.mockKicker}</span><strong>{a.tag}</strong><b /></div>
          <span className="guide-icon"><Icon name={a.icon} size={18} /></span>
        </div>
      </div>
    </Link>
    <div className="guide-body">
      <span className="portfolio-label">{a.cat} · {a.read}</span>
      <h3>{a.title}</h3>
      <p>{a.excerpt}</p>
      <BtnLink to={`/artikel/${a.slug}`}>Baca artikel</BtnLink>
    </div>
  </Reveal>
);

export default function ArticlesPage() {
  useSeo("Artikel & Panduan — Green Website Indonesia", "Kumpulan panduan praktis dari Green Website Indonesia untuk membantu bisnis menyiapkan, memilih, dan mengelola website dengan lebih terarah.");
  return (
    <>
      <section className="page-hero" data-testid="articles-hero">
        <div className="container">
          <div className="page-hero-grid">
            <Reveal>
              <Eyebrow>Artikel &amp; Panduan</Eyebrow>
              <h1>Wawasan Digital untuk <em>Keputusan yang Lebih Terarah.</em></h1>
            </Reveal>
            <Reveal delay={0.15} className="page-hero-side">
              <p>Kumpulan panduan praktis dari Green Website Indonesia untuk membantu bisnis menyiapkan, memilih, dan mengelola website dengan lebih terarah.</p>
              <div className="hero-buttons">
                <Btn to="/artikel#artikel-pilihan" testid="articles-hero-read">Baca Artikel</Btn>
                <Btn to="/#layanan" variant="light" testid="articles-hero-services">Lihat Layanan</Btn>
              </div>
            </Reveal>
          </div>
          <Reveal delay={0.2} className="hero-stats-row">
            <p className="stat-lead">Panduan dibuat singkat, praktis, dan berfokus pada keputusan yang benar-benar dibutuhkan pemilik bisnis.</p>
            {[["3", "Panduan Pilihan"], ["Praktis", "Bahasa Mudah Dipahami"], ["Bisnis", "Berbasis Kebutuhan Nyata"]].map(([n, l]) => (
              <div className="stat bordered" key={l}><strong>{n}</strong><small>{l}</small></div>
            ))}
          </Reveal>
        </div>
      </section>

      <section className="section soft" data-testid="articles-featured">
        <div className="container split">
          <VisualCard kicker="PANDUAN PILIHAN" title={<>Website yang tepat dimulai dari tujuan yang jelas.</>} text="Kenali perbedaan kebutuhan sebelum menentukan jenis website dan fitur yang akan dibangun." pill="Baca sebelum memulai proyek" pillIcon="sparkle" testid="articles-featured-visual" />
          <Reveal className="split-copy">
            <Eyebrow>Mulai dari Dasar</Eyebrow>
            <h2>Memilih Jenis Website Sesuai Kebutuhan Bisnis.</h2>
            <p>Company profile, landing page, toko online, portal berita, dan website custom memiliki tujuan yang berbeda. Panduan ini membantu Anda memahami kapan masing-masing pilihan lebih relevan.</p>
            <div className="split-actions"><Btn to="/artikel/memilih-jenis-website" testid="articles-featured-read">Baca Panduan Utama</Btn></div>
          </Reveal>
        </div>
      </section>

      <section className="section" id="artikel-pilihan" data-testid="articles-list">
        <div className="container">
          <Reveal className="section-heading center">
            <Eyebrow>Panduan Pilihan</Eyebrow>
            <h2>Tiga Hal yang Sering Menentukan Keberhasilan Website.</h2>
            <p>Mulai dari memilih bentuk website, menyiapkan materi, hingga menjaga informasi setelah website aktif.</p>
          </Reveal>
          <div className="guide-grid">{ARTICLES.map((a, i) => <GuideCard key={a.slug} a={a} i={i} />)}</div>
        </div>
      </section>

      <section className="section cream" data-testid="articles-topics">
        <div className="container">
          <Reveal className="section-heading center">
            <Eyebrow>Topik Artikel</Eyebrow>
            <h2>Dari Perencanaan hingga Pengelolaan.</h2>
            <p>Artikel disusun untuk membantu memahami proses website tanpa istilah teknis yang tidak perlu.</p>
          </Reveal>
          <div className="grid-3">{TOPICS.map((t, i) => <FeatureCard key={t.title} {...t} index={i} testid={`topic-${i}`} />)}</div>
        </div>
      </section>

      <CtaBlock eyebrow="Butuh Arahan Lebih Spesifik?" title="Diskusikan Kebutuhan Website Anda Bersama Tim Kami." text="Artikel membantu memahami dasarnya. Untuk kebutuhan yang lebih spesifik, ceritakan bisnis dan tujuan Anda agar kami dapat membantu memetakan langkah berikutnya." testid="articles-cta">
        <Btn to={WA.konsultasi} variant="white" testid="articles-cta-consult">Konsultasi Website</Btn>
        <Btn to="/portofolio" variant="outline-white" testid="articles-cta-portfolio">Lihat Portofolio</Btn>
      </CtaBlock>
    </>
  );
}
