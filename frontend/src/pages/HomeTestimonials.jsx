import { Quote } from "lucide-react";
import { Reveal, SectionHeading } from "@/components/Common";

// CONTOH: ganti dengan testimoni asli klien.
const TESTIMONIALS = [
  { name: "[Nama Klien 1]", role: "[Jabatan], [Nama Perusahaan]", service: "Website Company Profile", text: "[Contoh testimoni] Proses diskusinya jelas sejak awal, dan tim membantu kami menyusun informasi perusahaan agar mudah dipahami pengunjung." },
  { name: "[Nama Klien 2]", role: "[Jabatan], [Nama Perusahaan]", service: "Website Toko Online", text: "[Contoh testimoni] Setiap tahap pengerjaan dikomunikasikan dengan baik, sehingga kami tahu materi apa yang perlu disiapkan dan kapan perlu memberi persetujuan." },
  { name: "[Nama Klien 3]", role: "[Jabatan], [Nama Perusahaan]", service: "Web Application", text: "[Contoh testimoni] Setelah website aktif, kami tetap mendapat bantuan teknis saat dibutuhkan. Ini membuat kami lebih tenang mengelola website sendiri." },
];

const initials = (name) => name.replace(/[[\]]/g, "").split(" ").map((w) => w[0]).slice(0, 2).join("");

const TestimonialCard = ({ t, i }) => (
  <Reveal className="testi-card" delay={i * 0.08} data-testid={`testimonial-card-${i}`}>
    <div className="testi-top">
      <span className="testi-quote"><Quote size={18} /></span>
      <span className="testi-sample" data-testid={`testimonial-sample-badge-${i}`}>Contoh</span>
    </div>
    <p className="testi-text">{t.text}</p>
    <div className="testi-person">
      <span className="testi-avatar">{initials(t.name)}</span>
      <span><strong>{t.name}</strong><small>{t.role}</small></span>
    </div>
    <span className="testi-service">{t.service}</span>
  </Reveal>
);

export const Testimonials = () => (
  <section className="section" id="testimoni" aria-labelledby="testimoni-heading" data-testid="home-testimonials">
    <div className="container">
      <SectionHeading center id="testimoni-heading" eyebrow="Pengalaman Klien" title="Cerita dari Mereka yang Telah Bekerja Sama dengan Kami." text="Kenali pengalaman klien selama proses diskusi, pengerjaan, dan penggunaan website bersama Green Website." />
      <div className="grid-3 testi-grid">
        {TESTIMONIALS.map((t, i) => <TestimonialCard key={t.name} t={t} i={i} />)}
      </div>
    </div>
  </section>
);
