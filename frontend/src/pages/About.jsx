import { useSeo } from "@/components/Layout";
import { Reveal, Eyebrow, SectionHeading, Btn, ServiceGrid, Steps, FeatureCard, CtaBlock, Icon, IconBox } from "@/components/Common";
import { SERVICES, ABOUT_STEPS, PRINCIPLES, LEGAL, CONTACT, ABOUT_SUPPORT } from "@/data/site";

const PROFILE_POINTS = [
  "Solusi disusun berdasarkan kebutuhan nyata, bukan sekadar mengikuti bentuk yang sama untuk setiap klien.",
  "Proses kerja dibuat terarah agar keputusan desain dan teknis memiliki alasan yang jelas.",
  "Dukungan tetap tersedia setelah website atau sistem mulai digunakan.",
];

const OFFICES = [
  ...CONTACT.offices.map((o) => ({ icon: "pin", title: o.title, text: `${o.address}.` })),
  { icon: "meet", title: "Komunikasi & Pertemuan", text: "Kebutuhan konsultasi, komunikasi proyek, dan rencana pertemuan dapat dikoordinasikan terlebih dahulu bersama tim kami." },
];

export default function About() {
  useSeo("Tentang Kami — Green Website Indonesia", "PT Green Website Indonesia adalah perusahaan pengembangan website dan solusi digital untuk bisnis, perusahaan, dan lembaga di Indonesia.");
  return (
    <>
      <section className="page-hero" data-testid="about-hero">
        <div className="container">
          <div className="page-hero-grid">
            <Reveal>
              <Eyebrow>Tentang PT Green Website Indonesia</Eyebrow>
              <h1>Green Website Indonesia. <em>Membangun Digital dengan Arah yang Jelas.</em></h1>
            </Reveal>
            <Reveal delay={0.15} className="page-hero-side">
              <p>PT Green Website Indonesia adalah perusahaan pengembangan website dan solusi digital untuk bisnis, perusahaan, dan lembaga. Kami menggabungkan perencanaan, desain, pengembangan, serta infrastruktur dalam proses kerja yang terstruktur.</p>
              <div className="hero-buttons">
                <Btn to="/tentang-kami#profil" testid="about-hero-profil">Profil Perusahaan</Btn>
                <Btn to="/tentang-kami#identitas" variant="light" testid="about-hero-legal">Legalitas &amp; Kantor</Btn>
              </div>
            </Reveal>
          </div>
          <Reveal delay={0.2} className="identity-panel" data-testid="about-identity-panel">
            <div>
              <span className="eyebrow light">PT. GREEN WEBSITE INDONESIA</span>
              <h2>Website Development<br />· Digital Solution</h2>
              <p>Solusi digital yang dirancang berdasarkan kebutuhan nyata, tujuan bisnis, dan cara teknologi akan digunakan setelah diluncurkan.</p>
            </div>
            <div className="identity-stats">
              <div className="identity-nums">
                <div><strong>8</strong><small>Layanan Digital</small></div>
                <div><strong>PT</strong><small>Badan Usaha</small></div>
                <div><strong>2</strong><small>Lokasi Perusahaan</small></div>
              </div>
              <div className="identity-loc"><Icon name="pin" size={14} /> Cirebon <span>·</span> Jakarta</div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section" id="profil" data-testid="about-profile">
        <div className="container profile-grid">
          <Reveal>
            <Eyebrow>Profil Perusahaan</Eyebrow>
            <h2>Kami Membangun Teknologi dengan Memahami Bisnis Terlebih Dahulu.</h2>
            <p className="muted-sm">PT Green Website Indonesia adalah perusahaan yang bergerak pada pengembangan website dan solusi digital untuk bisnis, perusahaan, serta lembaga di Indonesia.</p>
          </Reveal>
          <Reveal delay={0.1} className="profile-copy">
            <p>Kami tidak memulai proyek dari tampilan semata. Setiap pekerjaan dimulai dengan memahami tujuan, informasi, pengguna, fungsi, dan cara solusi digital tersebut akan digunakan setelah diluncurkan.</p>
            <p>Pemahaman itu kemudian diterjemahkan menjadi struktur, desain, pengembangan, pengujian, hingga dukungan teknis yang relevan dengan kebutuhan masing-masing proyek.</p>
            <ul className="check-list">
              {PROFILE_POINTS.map((t) => <li key={t}><span className="check-dot"><Icon name="check" size={12} /></span>{t}</li>)}
            </ul>
          </Reveal>
        </div>
      </section>

      <section className="section soft" data-testid="about-focus">
        <div className="container">
          <SectionHeading center eyebrow="Fokus Kami" title="Solusi Digital untuk Kebutuhan yang Berbeda." text="Delapan layanan utama kami disusun untuk menjawab kebutuhan dari website informasi hingga aplikasi dan infrastruktur pendukungnya." />
          <ServiceGrid services={SERVICES} textKey="about" linkLabel="Pelajari layanan" prefix="about" />
        </div>
      </section>

      <section className="section" data-testid="about-steps">
        <div className="container">
          <SectionHeading center eyebrow="Cara Kami Bekerja" title="Proses yang Jelas dari Pemahaman hingga Peluncuran." text="Setiap tahap dibuat agar kebutuhan, keputusan, dan hasil akhir proyek tetap terarah." />
          <Steps steps={ABOUT_STEPS} prefix="about" />
        </div>
      </section>

      <section className="section cream" data-testid="about-principles">
        <div className="container">
          <SectionHeading center eyebrow="Prinsip Perusahaan" title="Standar yang Menjadi Dasar Setiap Pekerjaan." text="Kami menjaga setiap proyek tetap jelas, relevan, dan dapat digunakan dengan baik setelah diluncurkan." />
          <div className="grid-3">
            {PRINCIPLES.map((p, i) => <FeatureCard key={p.title} {...p} index={i} testid={`principle-${i}`} />)}
          </div>
        </div>
      </section>

      <section className="section" id="identitas" data-testid="about-legal">
        <div className="container">
          <div className="legal-head">
            <Reveal>
              <Eyebrow>Legalitas &amp; Identitas</Eyebrow>
              <h2>Identitas Badan Usaha yang Ditampilkan dengan Jelas.</h2>
            </Reveal>
            <Reveal delay={0.1}><p className="muted-sm">PT Green Website Indonesia menjalankan kegiatan usahanya sebagai Perseroan Terbatas. Nomor legalitas resmi dapat ditampilkan pada profil perusahaan untuk memudahkan verifikasi oleh klien dan mitra.</p></Reveal>
          </div>
          <div className="grid-3">
            {LEGAL.map((l, i) => (
              <Reveal className="card legal-card" key={l.label} delay={i * 0.08} data-testid={`legal-${i}`}>
                <IconBox name={l.icon} />
                <span className="legal-label">{l.label}</span>
                <strong>{l.value}</strong>
                <small>{l.note}</small>
              </Reveal>
            ))}
          </div>
          <p className="fine-note center">Data legalitas PT Green Website Indonesia ditampilkan berdasarkan identitas resmi perusahaan.</p>
        </div>
      </section>

      <section className="section soft" data-testid="about-offices">
        <div className="container">
          <SectionHeading center eyebrow="Kantor Kami" title="Dua Alamat dengan Fungsi yang Jelas." text="Informasi kantor ditampilkan secara transparan agar klien mengetahui lokasi kegiatan operasional dan administrasi perusahaan." />
          <div className="grid-3">
            {OFFICES.map((o, i) => <FeatureCard key={o.title} {...o} index={i} testid={`office-${i}`} />)}
          </div>
        </div>
      </section>

      <section className="section" data-testid="about-support">
        <div className="container">
          <SectionHeading center eyebrow="Setelah Website Aktif" title="Hubungan Kerja Tidak Berhenti Saat Website Diluncurkan." text="Klien tetap memiliki akses ke ekosistem dukungan untuk membantu pengelolaan dan kebutuhan teknis berikutnya." />
          <div className="grid-3 plain-grid">
            {ABOUT_SUPPORT.map((a, i) => (
              <Reveal className="plain-item" key={a.title} delay={(i % 3) * 0.07}>
                <IconBox name={a.icon} />
                <h3>{a.title}</h3>
                <p>{a.text}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CtaBlock eyebrow="Kenal Lebih Dekat" title="Punya Kebutuhan Digital yang Ingin Dibicarakan?" text="Ceritakan kebutuhan bisnis, perusahaan, atau lembaga Anda. Tim kami siap membantu memetakan langkah yang relevan sebelum proyek dimulai." testid="about-cta">
        <Btn to="/kontak" variant="white" testid="about-cta-contact">Hubungi Green Website</Btn>
        <Btn to="/#layanan" variant="outline-white" testid="about-cta-services">Lihat Layanan Kami</Btn>
      </CtaBlock>
    </>
  );
}
