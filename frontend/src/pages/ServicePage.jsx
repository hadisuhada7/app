import { motion } from "framer-motion";
import { Check, ShoppingBag, ArrowRight } from "lucide-react";
import { useSeo } from "@/components/Layout";
import { Reveal, Eyebrow, Btn, BtnLink, Icon, FeatureCard, PortfolioCard, CtaBlock } from "@/components/Common";
import { Clients } from "@/pages/Home";
import { FaqBlock } from "@/pages/HomeFaq";
import { TECH, SUPPORT_ITEMS } from "@/data/services";
import { CommerceSections, MemberSection } from "@/pages/CommerceSections";
import { AppMock, AppAbout, Workflow, Roles, Security } from "@/pages/AppSections";
import { PhoneMock, ServerMock, Split, Panel, Options, CardSplit, LayersBlock, Connected } from "@/pages/InfraSections";
import PORTFOLIO from "@/data/portfolio.json";

const Head = ({ eyebrow, title, text, center }) => (
  <Reveal className={`section-heading ${center ? "center" : ""}`}>
    <Eyebrow>{eyebrow}</Eyebrow>
    <h2>{title}</h2>
    {text && <p>{text}</p>}
  </Reveal>
);

const VisualMock = ({ v }) => (
  <Reveal delay={0.2} className="svc-visual" data-testid="service-hero-visual">
    <motion.div className="svc-mock" animate={{ y: [0, -8, 0] }} transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}>
      <div className="svc-mock-bar"><i /><i /><i /></div>
      <div className="svc-mock-body">
        <div>
          <span className="visual-kicker">{v.kicker}</span>
          <h3>{v.title}</h3>
          <div className="svc-mock-btn" />
        </div>
        <span className="svc-mock-icon"><Icon name={v.icon} size={26} /></span>
      </div>
    </motion.div>
    <div className="svc-tags"><Check size={13} /> {v.tags}</div>
  </Reveal>
);

const ShopMock = () => (
  <Reveal delay={0.2} className="svc-visual" data-testid="service-hero-visual">
    <motion.div className="svc-mock shop" animate={{ y: [0, -8, 0] }} transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}>
      <div className="svc-mock-bar"><i /><i /><i /><span>ONLINE STORE</span></div>
      <div className="shop-body">
        <div className="shop-head"><strong>Produk Pilihan</strong><span className="shop-cart"><ShoppingBag size={14} /></span></div>
        <div className="shop-grid">
          {[["Produk 01", "Rp249.000"], ["Produk 02", "Rp389.000"], ["Produk 03", "Rp525.000"]].map(([n, p], i) => (
            <div key={n} className="shop-item"><span className={`shop-img t${i}`} /><small>{n}</small><strong>{p}</strong></div>
          ))}
        </div>
        <div className="shop-flow">{["Checkout", "Bayar", "Resi", "Pickup"].map((s) => <span key={s}>{s}</span>)}</div>
      </div>
    </motion.div>
    <div className="svc-tags"><Check size={13} /> Order → Payment → Shipping</div>
  </Reveal>
);

const Hero = ({ d }) => (
  <section className="hero svc-hero" data-testid="service-hero">
    <div className="container hero-grid">
      <div className="hero-content">
        <Reveal><Eyebrow>{d.eyebrow}</Eyebrow></Reveal>
        <h1>
          {d.title.map(([t, em], i) => (
            <span className="mask-line" key={t}>
              <motion.span className="mask-inner" initial={{ y: "105%" }} animate={{ y: "0%" }} transition={{ duration: 0.9, delay: 0.1 + i * 0.12, ease: [0.22, 1, 0.36, 1] }}>
                {em ? <em>{t}</em> : t}
              </motion.span>
            </span>
          ))}
        </h1>
        <Reveal delay={0.3}>
          <p className="hero-lead">{d.text}</p>
          <div className="hero-buttons">
            <Btn to={d.wa} testid="service-hero-consult">{d.ctaLabel}</Btn>
            <Btn to={d.secondary ? `${window.location.pathname}${d.secondary.to}` : "/portofolio"} variant="link-plain" testid="service-hero-secondary">{d.secondary?.label ?? "Lihat Portofolio"}</Btn>
          </div>
          <div className="hero-points">{d.badges.map((b) => <span key={b}><Check size={15} /> {b}</span>)}</div>
        </Reveal>
      </div>
      {d.phoneVisual ? <PhoneMock /> : d.serverVisual ? <ServerMock /> : d.appVisual ? <AppMock /> : d.shopVisual ? <ShopMock /> : <VisualMock v={d.visual} />}
    </div>
  </section>
);

const About = ({ a }) => (
  <section className="section" data-testid="service-about">
    <div className="container svc-about">
      <Reveal><Eyebrow>{a.eyebrow}</Eyebrow><h2>{a.title}</h2>{a.lead && <p className="muted-sm">{a.lead}</p>}</Reveal>
      <Reveal delay={0.1}>
        <p className="svc-about-text">{a.text}</p>
        <div className="svc-points">
          {a.points.map(([t, p]) => <div key={t}><h3>{t}</h3><p>{p}</p></div>)}
        </div>
      </Reveal>
    </div>
  </section>
);

const Flow = ({ f }) => (
  <section className="section" data-testid="service-flow">
    <div className="container">
      <Head {...f} />
      <Reveal className="svc-flow" style={{ "--n": f.items.length }}>
        {f.items.map((t, i) => (
          <div className="svc-flow-item" key={t}>
            <span>{String(i + 1).padStart(2, "0")}</span>
            <strong>{t}</strong>
            {i < f.items.length - 1 && <ArrowRight size={11} className="svc-flow-arrow" />}
          </div>
        ))}
      </Reveal>
    </div>
  </section>
);

const PlanCard = ({ p, promo, i }) => (
  <Reveal className={`plan ${p.featured ? "featured" : ""}`} delay={i * 0.08} data-testid={`plan-${p.name.toLowerCase().replace(/\s/g, "-")}`}>
    {p.badge && <span className="plan-badge">{p.badge}</span>}
    <span className="plan-tier">{p.tier}</span>
    <h3>{p.name}</h3>
    <p className="plan-desc">{p.desc}</p>
    <div className="plan-price">
      <small>Harga Pembuatan</small>
      {p.normal && (
        <div className="plan-normal"><span>Harga normal <s>{p.normal}</s></span><em>{p.save}</em></div>
      )}
      {p.normal && <small className="plan-promo-label">HARGA PROMO</small>}
      <strong>{p.price}</strong>
      {promo && <small className="plan-until">{promo.short}</small>}
      <small className="plan-renew">{p.renew}</small>
    </div>
    <small className="plan-benefit-label">Benefit</small>
    <ul className="plan-list">
      {p.benefits.map((b) => <li key={b}><Check size={13} />{b}</li>)}
    </ul>
    <Btn to={p.order} variant={p.featured ? "white" : "primary"} testid={`plan-order-${i}`}>Pesan Sekarang</Btn>
  </Reveal>
);

const Pricing = ({ pr }) => (
  <section className="section soft" id="harga" data-testid="service-pricing">
    <div className="container">
      <Head center eyebrow={pr.eyebrow} title={pr.title} text={pr.text} />
      {pr.promo && (
        <Reveal className="promo-bar" data-testid="promo-bar"><strong>{pr.promo.label}</strong><span>{pr.promo.until}</span></Reveal>
      )}
      <div className="plans">{pr.plans.map((p, i) => <PlanCard key={p.name} p={p} promo={p.normal && pr.promo} i={i} />)}</div>
      <p className="fine-note center">{pr.note}</p>
    </div>
  </section>
);

const Projects = ({ pf }) => {
  const items = pf.ids.map((id) => PORTFOLIO.find((p) => p.image.includes(id))).filter(Boolean);
  return (
    <section className={`section ${pf.soft ? "soft" : ""}`} data-testid="service-portfolio">
      <div className="container">
        <Head {...pf} />
        <div className="grid-4 portfolio-grid">
          {items.map((p, i) => <PortfolioCard key={p.image} item={p} index={i} label={p.sub ? `${pf.label} · ${p.sub}` : pf.label} />)}
        </div>
        <div className="svc-more"><BtnLink to="/portofolio" testid="service-portfolio-all">Lihat Semua Portofolio</BtnLink></div>
      </div>
    </section>
  );
};

const Tech = () => (
  <section className="section soft" id="teknologi" data-testid="service-tech">
    <div className="container">
      <Head center eyebrow="Teknologi Kami" title="Teknologi Andal di Balik Website Anda." text="Kami memadukan teknologi pengembangan dan infrastruktur untuk mendukung performa, keamanan, serta pengelolaan website sesuai kebutuhan." />
      <div className="tech-grid">
        {TECH.logos.map((l, i) => (
          <Reveal className="tech-item" key={l.name} delay={i * 0.05}>
            <img src={l.src} alt={l.name} loading="lazy" />
            <strong>{l.name}</strong><small>{l.text}</small>
          </Reveal>
        ))}
      </div>
      <div className="partner-list">
        {TECH.partners.map((p) => (
          <Reveal className="partner" key={p.name}>
            <img src={p.src} alt={p.name} loading="lazy" />
            <div><span className="portfolio-label">Partner Kami</span><strong>{p.name}</strong><p>{p.text}</p></div>
            <span className="partner-tag"><Check size={12} /> {p.tag}</span>
          </Reveal>
        ))}
      </div>
      <p className="fine-note center">Teknologi dan integrasi digunakan sesuai kebutuhan serta cakupan layanan.</p>
    </div>
  </section>
);

const Process = ({ pc }) => (
  <section className="section soft svc-process" data-testid="service-process">
    <div className="container">
      <Head {...pc} />
      <div className="steps six" style={pc.cols ? { gridTemplateColumns: `repeat(${pc.cols}, minmax(0, 1fr))` } : undefined}>
        {pc.steps.map(([t, p], i) => (
          <Reveal className="step" key={t} delay={i * 0.07}>
            <span className="step-number">{String(i + 1).padStart(2, "0")}</span>
            <h3>{t}</h3><p>{p}</p>
          </Reveal>
        ))}
      </div>
    </div>
  </section>
);

const Support = ({ s }) => (
  <section className="section" data-testid="service-support">
    <div className="container">
      <Reveal className="support-panel">
        <div>
          <span className="eyebrow light">{s.eyebrow ?? "Setelah Website Aktif"}</span>
          <h2>{s.title}</h2>
          <p>{s.text}</p>
        </div>
        <div className="support-list">
          {(s.items ? s.items.map(([icon, title]) => ({ icon, title })) : SUPPORT_ITEMS).map((it) => <div key={it.title}><span><Icon name={it.icon} size={15} /></span>{it.title}</div>)}
        </div>
      </Reveal>
    </div>
  </section>
);

const Grid = ({ b }) => (
  <section className={`section ${b.soft ? "soft" : ""}`} data-testid="service-grid">
    <div className="container">
      <Head eyebrow={b.eyebrow} title={b.title} text={b.text} center={b.center} />
      <div className={b.cols === 4 ? "grid-4" : b.plain ? "grid-3 plain-grid" : "grid-3"}>
        {b.items.map(([icon, t, p], i) => b.plain ? (
          <Reveal className="plain-item" key={t} delay={(i % 3) * 0.07}><span className="icon-box"><Icon name={icon} size={17} /></span><h3>{t}</h3><p>{p}</p></Reveal>
        ) : (
          <FeatureCard key={t} icon={icon} title={b.numbered ? `${String(i + 1).padStart(2, "0")} · ${t}` : t} text={p} index={i} />
        ))}
      </div>
    </div>
  </section>
);

const Estimate = ({ b, waLink }) => (
  <section className="section soft" id="estimasi" data-testid="service-estimate">
    <div className="container">
      <Head center eyebrow={b.eyebrow} title={b.title} text={b.text} />
      <Reveal className="estimate-card">
        <div>
          <span className="portfolio-label">Dasar Perhitungan</span>
          <h3>{b.cardTitle}</h3>
          <p>{b.cardText}</p>
          <Btn to={waLink} testid="estimate-cta">{b.button}</Btn>
        </div>
        <div className="estimate-factors">{b.factors.map((f) => <span key={f}><Check size={13} /> {f}</span>)}</div>
      </Reveal>
      <p className="fine-note center">Estimasi final diberikan setelah requirement dan ruang lingkup pekerjaan disepakati.</p>
    </div>
  </section>
);

const renderBlock = (b, i, d) => {
  switch (b.type) {
    case "about": return <About key={i} a={b} />;
    case "grid": return <Grid key={i} b={b} />;
    case "flow": return <Flow key={i} f={b} />;
    case "pricing": return <Pricing key={i} pr={b} />;
    case "estimate": return <Estimate key={i} b={b} waLink={d.wa} />;
    case "tech": return <Tech key={i} />;
    case "process": return <Process key={i} pc={b} />;
    case "support": return <Support key={i} s={b} />;
    case "faq": return <FaqBlock key={i} soft eyebrow="Pertanyaan Umum" title={b.title} text={b.text} items={b.items} testid="service-faq" />;
    case "appAbout": return <AppAbout key={i} />;
    case "workflow": return <Workflow key={i} b={b} />;
    case "roles": return <Roles key={i} />;
    case "security": return <Security key={i} />;
    case "split": return <Split key={i} b={b} />;
    case "panel": return <Panel key={i} b={b} />;
    case "options": return <Options key={i} b={b} />;
    case "cardsplit": return <CardSplit key={i} b={b} />;
    case "layers": return <LayersBlock key={i} b={b} />;
    case "connected": return <Connected key={i} b={b} />;
    default: return null;
  }
};

export default function ServicePage({ d }) {
  useSeo(d.seo, d.text);
  if (d.blocks) {
    return (
      <>
        <Hero d={d} />
        <Clients />
        {d.blocks.map((b, i) => renderBlock(b, i, d))}
        <CtaBlock eyebrow={d.cta.eyebrow} title={d.cta.title} text={d.cta.text} testid="service-cta">
          <Btn to={d.wa} variant="white" testid="service-cta-consult">{d.cta.label}</Btn>
        </CtaBlock>
      </>
    );
  }
  return (
    <>
      <Hero d={d} />
      <Clients />
      <About a={d.about} />
      <section className="section soft" data-testid="service-use">
        <div className="container">
          <Head eyebrow={d.use.eyebrow} title={d.use.title} text={d.use.text} />
          <div className="grid-3">{d.use.items.map(([icon, t, p], i) => <FeatureCard key={t} icon={icon} title={t} text={p} index={i} />)}</div>
        </div>
      </section>
      <Flow f={d.flow} />
      {d.commerce && <CommerceSections />}
      <Pricing pr={d.pricing} />
      {d.commerce && <MemberSection />}
      <Projects pf={d.portfolio} />
      <Tech />
      <Process pc={d.process} />
      <Support s={d.support} />
      <FaqBlock soft eyebrow="Pertanyaan Umum" title={d.faq.title} text={d.faq.text} items={d.faq.items} testid="service-faq" />
      <CtaBlock eyebrow={d.cta.eyebrow} title={d.cta.title} text={d.cta.text} testid="service-cta">
        <Btn to={d.wa} variant="white" testid="service-cta-consult">{d.cta.label}</Btn>
      </CtaBlock>
    </>
  );
}
