import { useParams, Navigate } from "react-router-dom";
import { motion } from "framer-motion";
import { Building2 } from "lucide-react";
import { useSeo } from "@/components/Layout";
import { Reveal, Eyebrow, Btn, Icon } from "@/components/Common";
import { ARTICLES } from "@/data/site";
import { GuideCard } from "@/pages/ArticlesPage";

const Banner = ({ a }) => (
  <Reveal delay={0.2} className="art-banner" data-testid="article-banner">
    <div className="art-banner-copy">
      <span className="visual-kicker">{a.mockKicker}</span>
      <h2>{a.visualTitle}</h2>
      <p>Panduan praktis dari Green Website Indonesia untuk membantu bisnis mengelola kebutuhan website secara lebih terarah.</p>
    </div>
    <div className={`art-banner-art tone-${a.tone}`} aria-hidden="true">
      <span className="art-tile t1" />
      <span className="art-tile t2" />
      <motion.span className="art-badge" animate={{ y: [0, -8, 0], rotate: [0, -3, 0] }} transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}>
        <Icon name={a.icon} size={26} />
      </motion.span>
    </div>
  </Reveal>
);

export default function ArticleDetail() {
  const { slug } = useParams();
  const a = ARTICLES.find((x) => x.slug === slug);
  useSeo(`${a?.title ?? "Artikel"} — Green Website Indonesia`, a?.lead ?? "");
  if (!a) return <Navigate to="/artikel" replace />;
  const related = ARTICLES.filter((x) => x.slug !== slug);
  return (
    <>
      <section className="art-hero" data-testid="article-hero">
        <div className="container">
          <Reveal className="art-hero-head">
            <Eyebrow>{a.cat}</Eyebrow>
            <h1>{a.title}</h1>
            <p>{a.lead}</p>
            <div className="art-meta"><span><Building2 size={13} /> Green Website Indonesia</span><i>•</i><span>1 Oktober 2026</span></div>
          </Reveal>
          <Banner a={a} />
        </div>
      </section>

      <section className="section" data-testid="article-body">
        <div className="container art-prose">
          <Reveal as="p" className="art-lead">{a.lead}</Reveal>
          {a.sections.map(([h, p], i) => (
            <Reveal key={h} className="art-section" data-testid={`article-section-${i}`}>
              <h2>{h}</h2>
              <p>{p}</p>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="section cream" data-testid="article-related">
        <div className="container">
          <Reveal className="section-heading center">
            <Eyebrow>Artikel Terkait</Eyebrow>
            <h2>Lanjutkan Membaca.</h2>
            <p>Panduan lain yang dapat membantu Anda merencanakan dan mengelola website dengan lebih baik.</p>
          </Reveal>
          <div className="related-grid">{related.map((r, i) => <GuideCard key={r.slug} a={r} i={i} />)}</div>
          <div className="section-actions"><Btn to="/artikel" variant="light" testid="article-all">Lihat Semua Artikel</Btn></div>
        </div>
      </section>
    </>
  );
}
