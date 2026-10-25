import { useState } from "react";
import { motion } from "framer-motion";
import { Plus } from "lucide-react";
import { Reveal, Eyebrow, Btn } from "@/components/Common";
import { FAQ, WA } from "@/data/site";

export const FaqBlock = ({ id, eyebrow = "Pertanyaan umum", title, text, items, cta, soft, testid = "faq-section" }) => {
  const [open, setOpen] = useState(0);
  return (
    <section className={`section ${soft ? "soft" : ""}`} id={id} data-testid={testid}>
      <div className="container faq-wrap">
        <Reveal className="section-heading">
          <Eyebrow>{eyebrow}</Eyebrow>
          <h2>{title}</h2>
          <p>{text}</p>
          {cta && <div className="faq-cta"><Btn to={WA.tanya} variant="light" testid="faq-ask-team">{cta}</Btn></div>}
        </Reveal>
        <Reveal className="faq-list">
          {items.map(([q, a], i) => {
            const isOpen = open === i;
            return (
              <div className={`faq-item ${isOpen ? "open" : ""}`} key={q}>
                <button type="button" className="faq-q" aria-expanded={isOpen} aria-controls={`faq-a-${i}`} onClick={() => setOpen(isOpen ? -1 : i)} data-testid={`faq-question-${i}`}>
                  {q}
                  <span className="faq-plus"><Plus size={15} /></span>
                </button>
                <motion.div id={`faq-a-${i}`} className="faq-a" initial={false} animate={{ height: isOpen ? "auto" : 0, opacity: isOpen ? 1 : 0 }} transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }} data-testid={`faq-answer-${i}`}>
                  <p>{a}</p>
                </motion.div>
              </div>
            );
          })}
        </Reveal>
      </div>
    </section>
  );
};

export const Faq = () => (
  <FaqBlock id="faq" title="Pertanyaan Umum." text="Informasi singkat sebelum memulai website Anda." items={FAQ.map((f) => [f.q, f.a])} cta="Tanyakan langsung ke tim kami" testid="home-faq" />
);
