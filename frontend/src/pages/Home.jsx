import { useRef } from "react";
import { motion, useScroll, useTransform, useMotionValue, useSpring } from "framer-motion";
import { Check, Globe, ShieldCheck, Wifi, Monitor, Rocket, ArrowRight } from "lucide-react";
import { useSeo } from "@/components/Layout";
import { Reveal, Eyebrow, SectionHeading, Btn, BtnLink, ServiceGrid, Steps, FeatureCard, CtaBlock, VisualCard, IconBox } from "@/components/Common";
import { SERVICES, CLIENTS, HOME_PORTFOLIO, APPROACH, HOME_STEPS, AFTER_SALES, ARTICLES, WA } from "@/data/site";
import { Faq } from "@/pages/HomeFaq";

const lineAnim = (i) => ({
  initial: { y: "105%" },
  animate: { y: "0%" },
  transition: { duration: 0.9, delay: 0.1 + i * 0.12, ease: [0.22, 1, 0.36, 1] },
});

const Line = ({ i, children }) => (
  <span className="mask-line"><motion.span className="mask-inner" {...lineAnim(i)}>{children}</motion.span></span>
);

const Dashboard = () => {
  const ref = useRef(null);
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const rx = useSpring(useTransform(my, [-0.5, 0.5], [5, -5]), { stiffness: 120, damping: 18 });
  const ry = useSpring(useTransform(mx, [-0.5, 0.5], [-6, 6]), { stiffness: 120, damping: 18 });
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const py = useTransform(scrollYProgress, [0, 1], [30, -30]);
  const onMove = (e) => {
    const r = e.currentTarget.getBoundingClientRect();
    mx.set((e.clientX - r.left) / r.width - 0.5);
    my.set((e.clientY - r.top) / r.height - 0.5);
  };
  const reset = () => { mx.set(0); my.set(0); };
  return (
    <div className="hero-visual" ref={ref} onMouseMove={onMove} onMouseLeave={reset} data-testid="hero-dashboard">
      <motion.div className="dash" style={{ rotateX: rx, rotateY: ry, y: py }} initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 1, delay: 0.3 }}>
        <div className="dash-bar"><i /><i /><i /><span className="dash-url"><ShieldCheck size={11} /> greenwebsite.co.id</span></div>
        <div className="dash-body">
          <aside className="dash-side">
            <div className="dash-brand">GREEN<small>WEBSITE</small></div>
            {["Overview", "Website", "Email", "Statistik", "Keamanan"].map((n, i) => (
              <span key={n} className={i === 0 ? "on" : ""}><i />{n}</span>
            ))}
          </aside>
          <div className="dash-main">
            <div className="dash-head">
              <div><strong>Website Dashboard</strong><small>Selamat datang di ruang kerja Anda</small></div>
              <span className="dash-avatar" />
            </div>
            <div className="dash-stats">
              {[[Globe, "Domain", "Aktif"], [ShieldCheck, "SSL", "Aman"], [Wifi, "Website", "Online"]].map(([I, k, v]) => (
                <div key={k}><span className="dash-ic"><I size={12} /></span><small>{k}</small><strong>{v}</strong><em /></div>
              ))}
            </div>
            <div className="dash-preview">
              <small className="dash-preview-label">Preview website bisnis</small>
              <div className="dash-site">
                <div>
                  <span>WEBSITE PROFESIONAL</span>
                  <strong>Bisnis terbaik dimulai di sini.</strong>
                  <em>Hubungi Kami →</em>
                </div>
                <div className="dash-art"><i /><i /><i /></div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
      <motion.div className="float-card fc-1" animate={{ y: [0, -9, 0] }} transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}>
        <span className="icon-box sm"><Monitor size={14} /></span><span><strong>Website siap tampil</strong><small>Desktop &amp; Mobile</small></span>
      </motion.div>
      <motion.div className="float-card fc-2" animate={{ y: [0, 8, 0] }} transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}>
        <span className="icon-box sm"><Rocket size={14} /></span><span><strong>Website siap online</strong><small>Dengan tampilan yang profesional</small></span>
      </motion.div>
    </div>
  );
};

const Hero = () => (
  <section className="hero" data-testid="home-hero">
    <div className="container hero-grid">
      <div className="hero-content">
        <Reveal><Eyebrow>PT Green Website Indonesia</Eyebrow></Reveal>
        <h1>
          <Line i={0}>Website Profesional yang</Line>
          <Line i={1}>Mewakili <em>Kualitas</em></Line>
          <Line i={2}><em>Bisnis Anda.</em></Line>
        </h1>
        <Reveal delay={0.35}>
          <p className="hero-lead">Bangun kehadiran digital yang mencerminkan identitas dan keunggulan bisnis Anda. Green Website menghadirkan website dengan desain yang tepat, informasi yang jelas, dan pengalaman yang nyaman bagi pengunjung.</p>
          <div className="hero-buttons">
            <Btn to={WA.konsultasi} testid="hero-cta-konsultasi">Diskusikan Kebutuhan Anda</Btn>
            <Btn to="/portofolio" variant="light" arrow={false} testid="hero-cta-portofolio">Lihat Portofolio</Btn>
          </div>
          <div className="hero-points">
            {["Desain custom", "Mobile responsive", "Dukungan setelah online"].map((t) => <span key={t}><Check size={15} /> {t}</span>)}
          </div>
        </Reveal>
      </div>
      <Dashboard />
    </div>
  </section>
);

export const Clients = () => (
  <section className="section soft clients" data-testid="home-clients">
    <div className="container">
      <SectionHeading center eyebrow="Dipercaya klien" title="Menjadi bagian dari perjalanan digital berbagai bisnis." text="Setiap kerja sama dimulai dari kebutuhan yang berbeda, dengan perhatian yang sama terhadap kualitas hasil dan komunikasi." />
      <div className="marquee" data-testid="clients-marquee">
        <div className="marquee-track">
          {[...CLIENTS, ...CLIENTS, ...CLIENTS, ...CLIENTS].map((c, i) => (
            <div className="client-logo" key={i} aria-hidden={i >= CLIENTS.length}><img src={c.src} alt={c.name} loading="lazy" /></div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

const About = () => (
  <section className="section" data-testid="home-about">
    <div className="container split">
      <VisualCard kicker="GREEN WEBSITE INDONESIA" title={<>Identitas bisnis.<br />Kehadiran digital.</>} text="Website profesional yang membantu pengunjung mengenal bisnis Anda." pill="Desain sesuai identitas bisnis" testid="home-about-visual" />
      <Reveal className="split-copy">
        <Eyebrow>Tentang Kami</Eyebrow>
        <h2>Mengenal Bisnis Anda, Membangun Kehadiran Digitalnya.</h2>
        <p>PT Green Website Indonesia bergerak di bidang jasa pembuatan website untuk membantu bisnis, perusahaan, dan lembaga menyampaikan identitas serta layanannya secara profesional.</p>
        <p>Kami memulai pekerjaan dengan memahami siapa yang ingin Anda jangkau, informasi yang perlu disampaikan, dan fungsi yang dibutuhkan. Pemahaman tersebut menjadi dasar dalam menyusun struktur, desain, dan pengembangan website.</p>
        <p>Melalui proses yang terarah dan komunikasi yang jelas, kami membantu Anda memiliki website yang relevan dengan kebutuhan bisnis.</p>
        <BtnLink to="/tentang-kami" testid="home-about-link">Kenali Green Website</BtnLink>
      </Reveal>
    </div>
  </section>
);

const Portfolio = () => (
  <section className="section soft" data-testid="home-portfolio">
    <div className="container">
      <SectionHeading center eyebrow="Portofolio pilihan" title="Lihat Bagaimana Kami Menerjemahkan Kebutuhan Menjadi Website." text="Jelajahi pilihan proyek Green Website. Setiap proyek memiliki karakter, kebutuhan, dan pendekatan yang berbeda sesuai bisnis yang diwakilinya." />
      <div className="grid-4 portfolio-grid">
        {HOME_PORTFOLIO.map((p, i) => (
          <Reveal className="portfolio-card" key={p.name} delay={(i % 4) * 0.06} data-testid={`home-portfolio-${i}`}>
            <a href={p.url} target="_blank" rel="noopener noreferrer" className="portfolio-thumb"><img src={p.image} alt={`Tampilan website ${p.name}`} loading="lazy" width="800" height="500" /></a>
            <div className="portfolio-content">
              <span className="portfolio-label">{p.label}</span>
              <h3>{p.name}</h3>
              <BtnLink to={p.url}>Kunjungi Website</BtnLink>
            </div>
          </Reveal>
        ))}
      </div>
      <div className="section-actions"><Btn to="/portofolio" variant="light" testid="home-portfolio-all">Jelajahi semua portofolio</Btn></div>
    </div>
  </section>
);

const Articles = () => (
  <section className="section soft" data-testid="home-articles">
    <div className="container">
      <SectionHeading center eyebrow="Artikel & Panduan" title="Bekal untuk Mengambil Keputusan Digital yang Lebih Tepat." text="Panduan singkat untuk merencanakan, menyiapkan, dan mengelola website bisnis Anda." />
      <div className="grid-3">
        {ARTICLES.map((a, i) => <ArticleCard key={a.slug} a={a} i={i} />)}
      </div>
    </div>
  </section>
);

export const ArticleCard = ({ a, i }) => (
  <Reveal className="card article-card" delay={i * 0.08} data-testid={`article-card-${a.slug}`}>
    <div className={`article-cover tone-${a.tone}`}>
      <div className="article-mock"><span>{a.kicker}</span><b /><b /><em /></div>
      <span className="article-orb"><ArrowRight size={16} /></span>
    </div>
    <div className="article-body">
      <span className="portfolio-label">{a.tag} · Artikel &amp; Panduan</span>
      <h3>{a.title}</h3>
      <BtnLink to={`/artikel/${a.slug}`}>Baca artikel</BtnLink>
    </div>
  </Reveal>
);

export default function Home() {
  useSeo("Green Website Indonesia — Jasa Pembuatan Website Profesional", "PT Green Website Indonesia membantu bisnis, perusahaan, dan lembaga membangun website profesional dengan desain tepat, informasi jelas, dan dukungan setelah online.");
  return (
    <>
      <Hero />
      <Clients />
      <About />
      <section className="section" id="layanan" data-testid="home-services">
        <div className="container">
          <SectionHeading center eyebrow="Layanan Kami" title="Pilihan Website untuk Kebutuhan Bisnis yang Berbeda." text="Setiap bisnis memiliki tujuan dan cara berkomunikasi yang berbeda. Temukan layanan yang sesuai untuk membangun kehadiran digital Anda." />
          <ServiceGrid services={SERVICES} textKey="home" linkLabel="Konsultasikan Layanan" prefix="home" />
        </div>
      </section>
      <Portfolio />
      <section className="section" data-testid="home-approach">
        <div className="container">
          <SectionHeading center eyebrow="Pendekatan Kami" title="Perhatian pada Detail yang Membentuk Pengalaman Pengunjung." text="Website yang baik membantu pengunjung memahami bisnis Anda. Kami memperhatikan hubungan antara tampilan, isi, dan fungsi sejak awal pengerjaan." />
          <div className="grid-3 plain-grid">
            {APPROACH.map((a, i) => (
              <Reveal className="plain-item" key={a.title} delay={(i % 3) * 0.07}>
                <IconBox name={a.icon} />
                <h3>{a.title}</h3>
                <p>{a.text}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
      <section className="section soft" data-testid="home-steps">
        <div className="container">
          <SectionHeading center eyebrow="Cara kerja kami" title="Langkah yang Jelas, dari Diskusi hingga Website Aktif." text="Pahami setiap tahap pengerjaan, termasuk materi yang perlu disiapkan dan bagian yang membutuhkan persetujuan Anda." />
          <Steps steps={HOME_STEPS} prefix="home" />
        </div>
      </section>
      <section className="section" id="dukungan" data-testid="home-after-sales">
        <div className="container">
          <SectionHeading center eyebrow="Layanan After Sales" title="Website Aktif, Dukungan Kami Tetap Hadir." text="Kelola website secara mandiri dengan akses layanan yang terpusat, bantuan teknis tanpa biaya, konsultasi selamanya, dan backup harian. Kami tetap hadir untuk mendukung kebutuhan teknis serta pengembangan bisnis Anda." />
          <div className="grid-3">
            {AFTER_SALES.map((a, i) => <FeatureCard key={a.title} {...a} index={i} testid={`after-sales-${i}`} />)}
          </div>
          <div className="section-actions column">
            <Btn to={WA.afterSales} variant="light" testid="after-sales-cta">Hubungi Tim After Sales</Btn>
            <p className="fine-note">Layanan after sales tidak mencakup revisi atau pembaruan konten setelah website online. Konten dikelola oleh klien; pengembangan tambahan dikerjakan berdasarkan kesepakatan terpisah.</p>
          </div>
        </div>
      </section>
      <Articles />
      <Faq />
      <CtaBlock eyebrow="Mulai bersama Green Website" title="Mari Bicarakan Website yang Tepat untuk Bisnis Anda." text="Ceritakan bisnis yang Anda jalankan, tujuan yang ingin dicapai, dan kebutuhan website Anda. Kami siap membantu merencanakan langkah berikutnya." testid="home-cta">
        <Btn to={WA.konsultasi} variant="white" testid="home-cta-konsultasi">Mulai Konsultasi Gratis</Btn>
        <Btn to="/#layanan" variant="outline-white" testid="home-cta-layanan">Kenali Layanan Kami</Btn>
      </CtaBlock>
    </>
  );
}
