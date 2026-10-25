import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { useSeo } from "@/components/Layout";
import { Reveal, Eyebrow, SectionHeading, Btn, BtnLink, FeatureCard, CtaBlock, PortfolioCard, VisualCard } from "@/components/Common";
import { SERVICES, WA, PORTFOLIO_TABS } from "@/data/site";
import PORTFOLIO from "@/data/portfolio.json";

const Stat = ({ n, label }) => (
  <div className="stat"><strong>{n}</strong><small>{label}</small></div>
);

const ProjectTabs = () => {
  const [tab, setTab] = useState(PORTFOLIO_TABS[0]);
  const items = useMemo(() => PORTFOLIO.filter((p) => p.category === tab), [tab]);
  return (
    <section className="section" id="proyek-pilihan" data-testid="portfolio-projects">
      <div className="container">
        <SectionHeading center eyebrow="Proyek Pilihan" title="Beragam Industri, Beragam Kebutuhan." text="Beberapa proyek yang mewakili variasi bidang usaha, jenis website, serta pendekatan yang dikerjakan Green Website Indonesia." />
        <div className="tabs" role="tablist" data-testid="portfolio-tabs">
          {PORTFOLIO_TABS.map((t) => (
            <button key={t} type="button" role="tab" aria-selected={tab === t} className={`tab ${tab === t ? "on" : ""}`} onClick={() => setTab(t)} data-testid={`portfolio-tab-${t.toLowerCase().replace(/\s/g, "-")}`}>
              {tab === t && <motion.span layoutId="tab-pill" className="tab-pill" transition={{ type: "spring", stiffness: 380, damping: 32 }} />}
              <span>{t}</span>
            </button>
          ))}
        </div>
        {items.length ? (
          <div className="grid-4 portfolio-grid" key={tab} data-testid="portfolio-grid">
            {items.map((p, i) => (
              <PortfolioCard key={`${p.name}-${i}`} item={p} index={i} label={p.sub ? `${p.category} · ${p.sub}` : p.category} />
            ))}
          </div>
        ) : (
          <Reveal className="empty-state" data-testid="portfolio-empty">
            <h3>Portofolio Sedang Disiapkan.</h3>
            <p>Proyek pada kategori {tab} belum ditampilkan pada portofolio publik saat ini.</p>
          </Reveal>
        )}
      </div>
    </section>
  );
};

export default function Portfolio() {
  useSeo("Portofolio — Green Website Indonesia", "Portofolio Green Website Indonesia: landing page, company profile, dan toko online yang dibangun dari kebutuhan nyata klien.");
  return (
    <>
      <section className="page-hero" data-testid="portfolio-hero">
        <div className="container">
          <div className="page-hero-grid">
            <Reveal>
              <Eyebrow>Portofolio Green Website Indonesia</Eyebrow>
              <h1>Karya Digital yang Dibangun dari <em>Kebutuhan Nyata.</em></h1>
            </Reveal>
            <Reveal delay={0.15} className="page-hero-side">
              <p>Setiap bisnis memiliki karakter, tujuan, dan kebutuhan yang berbeda. Portofolio ini memperlihatkan bagaimana kami menerjemahkan kebutuhan tersebut menjadi website dan solusi digital yang terarah.</p>
              <div className="hero-buttons">
                <Btn to="/portofolio#proyek-pilihan" testid="portfolio-hero-explore">Jelajahi Proyek</Btn>
                <Btn to={WA.proyek} variant="link-plain" testid="portfolio-hero-discuss">Diskusikan Proyek</Btn>
              </div>
            </Reveal>
          </div>
          <Reveal delay={0.2} className="hero-stats-row">
            <p>Pilihan karya dari beberapa kategori untuk menunjukkan ragam pendekatan visual dan fungsi yang kami kerjakan.</p>
            <Stat n="8" label="Proyek Pilihan" />
            <Stat n="4" label="Kategori Solusi" />
            <Stat n="100%" label="Responsive Experience" />
          </Reveal>
        </div>
      </section>

      <section className="section soft" data-testid="portfolio-approach">
        <div className="container split">
          <VisualCard kicker="SELECTED WORK" title={<>Karakter bisnis.<br />Arah desain yang berbeda.</>} text="Struktur, visual, dan fungsi disusun berdasarkan kebutuhan setiap proyek." pill="Dibangun sesuai konteks bisnis" testid="portfolio-visual" />
          <Reveal className="split-copy">
            <Eyebrow>Pendekatan Portofolio</Eyebrow>
            <h2>Bukan Sekadar Tampilan yang Dibuat Berbeda.</h2>
            <p>Perbedaan pada setiap proyek dimulai dari kebutuhan yang memang berbeda—siapa penggunanya, informasi apa yang harus disampaikan, dan tindakan apa yang perlu dipermudah.</p>
            <p>Kami menjaga desain tetap relevan dengan identitas bisnis sambil memastikan struktur informasi dan fungsi website tetap mudah digunakan di berbagai perangkat.</p>
            <BtnLink to="/portofolio#proyek-pilihan" testid="portfolio-approach-link">Lihat proyek pilihan</BtnLink>
          </Reveal>
        </div>
      </section>

      <ProjectTabs />

      <section className="section soft" data-testid="portfolio-solutions">
        <div className="container">
          <SectionHeading center eyebrow="Ragam Solusi" title="Satu Standar Kerja untuk Kebutuhan yang Berbeda." text="Portofolio kami berkembang mengikuti kebutuhan klien—mulai dari representasi bisnis hingga sistem digital dengan fungsi yang lebih spesifik." />
          <div className="grid-4">
            {SERVICES.map((s, i) => <FeatureCard key={s.slug} icon={s.icon} title={s.title} text={s.portfolio} index={i} testid={`solution-${s.slug}`} />)}
          </div>
        </div>
      </section>

      <CtaBlock eyebrow="Proyek Berikutnya" title="Punya Kebutuhan yang Belum Ada di Portofolio?" text="Ceritakan bisnis, tujuan, serta fungsi yang Anda butuhkan. Kami akan membantu menentukan pendekatan website atau solusi digital yang sesuai." testid="portfolio-cta">
        <Btn to={WA.proyek} variant="white" testid="portfolio-cta-discuss">Diskusikan Proyek</Btn>
        <Btn to="/#layanan" variant="outline-white" testid="portfolio-cta-services">Lihat Layanan</Btn>
      </CtaBlock>
    </>
  );
}
