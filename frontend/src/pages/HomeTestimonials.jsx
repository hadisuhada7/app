import { useRef, useState } from "react";
import { Quote } from "lucide-react";
import { Reveal, SectionHeading } from "@/components/Common";

const TESTIMONIALS = [
  { name: "Budi Santoso", role: "Direktur Utama, PT Maju Bersama Sentosa", service: "Website Company Profile", text: "Pelayanan yang sangat luar biasa. Website perusahaan kami tidak hanya terlihat modern dan kredibel, tetapi arsitektur sistemnya juga sangat stabil dan aman. Pengerjaan dilakukan tepat waktu dan tim sangat responsif dalam mengakomodasi kebutuhan kustomisasi bisnis kami. Investasi yang sangat sepadan." },
  { name: "Rina Amelia", role: "Founder & CEO, Amel Boutique", service: "Website Toko Online", text: "Tampilan website kami sekarang jauh lebih profesional dan user-friendly. Sejak peluncuran website baru, tingkat konversi penjualan kami meningkat tajam karena proses checkout dan navigasi yang sangat lancar. Dukungan teknis pasca-peluncurannya juga luar biasa cepat dan solutif." },
  { name: "Andi Gunawan", role: "Kepala Operasional, Yayasan Cendekia Edukasi", service: "Web Application", text: "Kami membutuhkan sistem informasi berbasis web yang cukup kompleks dengan integrasi database yang kuat. Tim mampu mengeksekusinya dengan sempurna, mengamankan jaringan, dan mengoptimalkan kecepatan aksesnya meskipun traffic sedang tinggi. Sangat direkomendasikan untuk solusi IT end-to-end." },
];

const initials = (name) => name.split(" ").map((w) => w[0]).slice(0, 2).join("");

const TestimonialCard = ({ t, i }) => (
  <div className="testi-card" data-testid={`testimonial-card-${i}`}>
    <div className="testi-top">
      <span className="testi-quote"><Quote size={18} /></span>
    </div>
    <p className="testi-text" data-testid={`testimonial-text-${i}`}>“{t.text}”</p>
    <div className="testi-person">
      <span className="testi-avatar">{initials(t.name)}</span>
      <span><strong>{t.name}</strong><small>{t.role}</small></span>
    </div>
    <span className="testi-service">{t.service}</span>
  </div>
);

const Slider = () => {
  const ref = useRef(null);
  const [active, setActive] = useState(0);
  const onScroll = () => {
    const el = ref.current;
    const card = el?.firstElementChild;
    if (!card) return;
    setActive(Math.round(el.scrollLeft / (card.offsetWidth + 14)));
  };
  const goTo = (i) => {
    const card = ref.current?.children[i];
    if (card) ref.current.scrollTo({ left: card.offsetLeft - ref.current.offsetLeft, behavior: "smooth" });
  };
  return (
    <Reveal>
      <div className="grid-3 testi-grid" ref={ref} onScroll={onScroll} data-testid="testimonial-slider">
        {TESTIMONIALS.map((t, i) => <TestimonialCard key={t.name} t={t} i={i} />)}
      </div>
      <div className="testi-dots" data-testid="testimonial-dots">
        {TESTIMONIALS.map((t, i) => (
          <button key={t.name} type="button" aria-label={`Testimoni ${i + 1}`} className={i === active ? "active" : ""} onClick={() => goTo(i)} data-testid={`testimonial-dot-${i}`} />
        ))}
      </div>
    </Reveal>
  );
};

export const Testimonials = () => (
  <section className="section" id="testimoni" aria-labelledby="testimoni-heading" data-testid="home-testimonials">
    <div className="container">
      <SectionHeading center id="testimoni-heading" eyebrow="Pengalaman Klien" title="Cerita dari Mereka yang Telah Bekerja Sama dengan Kami." text="Kenali pengalaman klien selama proses diskusi, pengerjaan, dan penggunaan website bersama Green Website." />
      <Slider />
    </div>
  </section>
);
