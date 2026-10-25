import { useState } from "react";
import { motion } from "framer-motion";
import { Plus } from "lucide-react";
import { Reveal, Eyebrow, Btn } from "@/components/Common";
import { FAQ, WA } from "@/data/site";

export const Faq = () => {
  const [open, setOpen] = useState(0);
  return (
    <section className="section" id="faq" data-testid="home-faq">
      <div className="container faq-wrap">
        <Reveal className="section-heading">
          <Eyebrow>Pertanyaan umum</Eyebrow>
          <h2>Pertanyaan Umum.</h2>
          <p>Informasi singkat sebelum memulai website Anda.</p>
          <div className="faq-cta"><Btn to={WA.tanya} variant="light" testid="faq-ask-team">Tanyakan langsung ke tim kami</Btn></div>
        </Reveal>
        <Reveal className="faq-list">
          {FAQ.map((f, i) => {
            const isOpen = open === i;
            return (
              <div className={`faq-item ${isOpen ? "open" : ""}`} key={f.q}>
                <button type="button" className="faq-q" aria-expanded={isOpen} aria-controls={`faq-a-${i}`} onClick={() => setOpen(isOpen ? -1 : i)} data-testid={`faq-question-${i}`}>
                  {f.q}
                  <span className="faq-plus"><Plus size={15} /></span>
                </button>
                <motion.div id={`faq-a-${i}`} className="faq-a" initial={false} animate={{ height: isOpen ? "auto" : 0, opacity: isOpen ? 1 : 0 }} transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }} data-testid={`faq-answer-${i}`}>
                  <p>{f.a}</p>
                </motion.div>
              </div>
            );
          })}
        </Reveal>
      </div>
    </section>
  );
};
