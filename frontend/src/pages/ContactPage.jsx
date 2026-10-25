import { useState } from "react";
import { ArrowUpRight, Mail, MapPin, MessageSquareText, CheckCircle2 } from "lucide-react";
import { useSeo } from "@/components/Layout";
import { Reveal, Eyebrow, Icon } from "@/components/Common";
import { SERVICES, CONTACT, WA, WA_NUMBER, MAPS_URL, MAPS_EMBED } from "@/data/site";

const WaGlyph = () => (
  <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor" aria-hidden="true"><path d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5-1.3A10 10 0 1 0 12 2zm0 18.2c-1.5 0-3-.4-4.3-1.2l-.3-.2-3 .8.8-2.9-.2-.3A8.2 8.2 0 1 1 12 20.2zm4.5-6.1c-.3-.1-1.5-.8-1.8-.9-.2-.1-.4-.1-.6.1l-.8 1c-.1.2-.3.2-.5.1-.3-.1-1-.4-2-1.2-.7-.7-1.2-1.5-1.4-1.7-.1-.3 0-.4.1-.5l.4-.4.2-.4v-.4l-.8-1.9c-.2-.5-.4-.4-.6-.4h-.5c-.2 0-.4.1-.7.3-.2.3-.9.9-.9 2.1s.9 2.5 1 2.6c.1.2 1.8 2.8 4.4 3.9 2.1.9 2.6.7 3 .6.5 0 1.5-.6 1.7-1.2.2-.6.2-1.1.2-1.2-.1-.2-.2-.2-.4-.3z" /></svg>
);

const CONTACT_ROWS = [
  { icon: <WaGlyph />, label: "WhatsApp", value: CONTACT.phone, href: WA.chat },
  { icon: <Mail size={16} />, label: "Email", value: CONTACT.email, href: `mailto:${CONTACT.email}` },
  { icon: <MapPin size={16} />, label: "Jakarta", value: "Menara Cakrawala, Menteng", href: MAPS_URL },
];

const Hero = () => (
  <section className="page-hero contact-hero" data-testid="contact-hero">
    <div className="container contact-hero-grid">
      <Reveal>
        <Eyebrow>Kontak Green Website Indonesia</Eyebrow>
        <h1>Mari Bicarakan <em>Kebutuhan Digital Anda.</em></h1>
        <p className="hero-lead">Ceritakan website, sistem, atau kebutuhan digital yang ingin Anda bangun. Tim Green Website Indonesia akan membantu memahami kebutuhannya terlebih dahulu sebelum menentukan arah pengerjaan yang paling sesuai.</p>
        <div className="hero-buttons">
          <a href={WA.chat} target="_blank" rel="noopener noreferrer" className="btn primary" data-testid="contact-hero-wa"><WaGlyph /> Chat WhatsApp <ArrowUpRight size={15} /></a>
          <a href={MAPS_URL} target="_blank" rel="noopener noreferrer" className="btn link-plain" data-testid="contact-hero-map"><MapPin size={15} /> Lihat Lokasi Jakarta</a>
        </div>
        <div className="hero-points">{["Konsultasi kebutuhan", "8 layanan digital", "PT Green Website Indonesia"].map((t) => <span key={t}><CheckCircle2 size={14} /> {t}</span>)}</div>
      </Reveal>
      <Reveal delay={0.15} className="contact-panel" data-testid="contact-panel">
        <span className="eyebrow light">Hubungi Kami</span>
        <h2>Mulai dari percakapan yang jelas.</h2>
        <div className="contact-rows">
          {CONTACT_ROWS.map((r) => (
            <a key={r.label} href={r.href} target={r.href.startsWith("http") ? "_blank" : undefined} rel="noopener noreferrer" className="contact-row" data-testid={`contact-row-${r.label.toLowerCase()}`}>
              <span className="contact-row-ic">{r.icon}</span>
              <span><small>{r.label}</small><strong>{r.value}</strong></span>
              <ArrowUpRight size={15} className="contact-row-arrow" />
            </a>
          ))}
        </div>
      </Reveal>
    </div>
  </section>
);

const EMPTY = { nama: "", bisnis: "", nomor: "", layanan: "", domain: "", kebutuhan: "" };

const BriefForm = () => {
  const [f, setF] = useState(EMPTY);
  const set = (k) => (e) => setF((v) => ({ ...v, [k]: e.target.value }));
  const submit = (e) => {
    e.preventDefault();
    const lines = [
      "Halo Green Website Indonesia, saya ingin konsultasi.", "",
      `*Nama:* ${f.nama.trim()}`, `*Bisnis / Perusahaan:* ${f.bisnis.trim() || "-"}`, `*Nomor WhatsApp:* ${f.nomor.trim()}`,
      `*Layanan:* ${f.layanan}`, `*Domain / Website:* ${f.domain.trim() || "-"}`, "", "*Kebutuhan:*", f.kebutuhan.trim(),
    ];
    window.open(`https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(lines.join("\n"))}`, "_blank", "noopener,noreferrer");
  };
  return (
    <Reveal delay={0.1} className="brief-card" data-testid="brief-form-card">
      <div className="brief-head">
        <div><h3>Ceritakan kebutuhan Anda.</h3><p>Semakin jelas informasinya, semakin mudah kami memahami arah website atau solusi digital yang Anda butuhkan.</p></div>
        <span className="icon-box"><MessageSquareText size={17} strokeWidth={1.8} /></span>
      </div>
      <form onSubmit={submit} className="brief-form" data-testid="brief-form">
        <label><span>Nama Lengkap <b>*</b></span><input required value={f.nama} onChange={set("nama")} placeholder="Nama Anda" autoComplete="name" data-testid="brief-nama" /></label>
        <label>Bisnis / Perusahaan<input value={f.bisnis} onChange={set("bisnis")} placeholder="Nama bisnis atau perusahaan" autoComplete="organization" data-testid="brief-bisnis" /></label>
        <label><span>Nomor WhatsApp <b>*</b></span><input required type="tel" inputMode="tel" value={f.nomor} onChange={set("nomor")} placeholder="Contoh: 0812 3456 7890" autoComplete="tel" data-testid="brief-nomor" /></label>
        <label><span>Layanan yang Dibutuhkan <b>*</b></span>
          <select required value={f.layanan} onChange={set("layanan")} data-testid="brief-layanan">
            <option value="" disabled>Pilih layanan</option>
            {SERVICES.map((s) => <option key={s.slug}>{s.title}</option>)}
          </select>
        </label>
        <label className="full">Domain / Website Saat Ini<input value={f.domain} onChange={set("domain")} placeholder="Opsional — contoh: perusahaananda.com" data-testid="brief-domain" /></label>
        <label className="full"><span>Ceritakan Kebutuhan <b>*</b></span><textarea required rows={5} value={f.kebutuhan} onChange={set("kebutuhan")} placeholder="Contoh: Kami membutuhkan website company profile untuk perusahaan dengan halaman profil, layanan, portofolio, dan kontak..." data-testid="brief-kebutuhan" /></label>
        <div className="brief-foot full">
          <small>Form ini tidak mengirim data melalui email. Setelah tombol ditekan, WhatsApp akan terbuka dengan isi pesan yang sudah disusun.</small>
          <button type="submit" className="btn primary" data-testid="brief-submit"><WaGlyph /> Kirim ke WhatsApp <ArrowUpRight size={15} /></button>
        </div>
      </form>
    </Reveal>
  );
};

const Brief = () => (
  <section className="section" data-testid="contact-brief">
    <div className="container brief-grid">
      <Reveal>
        <Eyebrow>Kirim Brief</Eyebrow>
        <h2>Dari form, langsung ke WhatsApp.</h2>
        <p className="muted-sm">Isi informasi singkat mengenai kebutuhan Anda. Saat dikirim, WhatsApp akan terbuka dengan pesan yang sudah tersusun sehingga konsultasi bisa langsung dilanjutkan.</p>
        <div className="brief-steps">
          {[["Isi kebutuhan", "Masukkan informasi dasar bisnis dan jenis layanan yang dibutuhkan."], ["Pesan disusun otomatis", "Data dari form dirapikan menjadi format pesan konsultasi."], ["Lanjut di WhatsApp", "WhatsApp terbuka dan Anda tinggal mengirim pesan kepada tim kami."]].map(([t, p], i) => (
            <div key={t}><span>{String(i + 1).padStart(2, "0")}</span><div><strong>{t}</strong><small>{p}</small></div></div>
          ))}
        </div>
      </Reveal>
      <BriefForm />
    </div>
  </section>
);

const MapSection = () => (
  <section className="section soft" data-testid="contact-map">
    <div className="container">
      <div className="map-head">
        <Reveal className="section-heading">
          <Eyebrow>Jakarta</Eyebrow>
          <h2>Lokasi administratif kami di pusat Jakarta.</h2>
          <p>Temukan alamat Green Website Indonesia di Menara Cakrawala, Jl. M.H. Thamrin, Menteng, Jakarta Pusat.</p>
        </Reveal>
        <a href={MAPS_URL} target="_blank" rel="noopener noreferrer" className="btn light" data-testid="map-open-google">Buka di Google Maps <ArrowUpRight size={15} /></a>
      </div>
      <Reveal className="map-card">
        <iframe title="Peta Menara Cakrawala Jakarta" src={MAPS_EMBED} loading="lazy" referrerPolicy="no-referrer-when-downgrade" allowFullScreen data-testid="map-iframe" />
        <div className="map-side">
          <span className="icon-box"><Icon name="pin" size={17} /></span>
          <Eyebrow>Kantor Administratif</Eyebrow>
          <h3>Jakarta Pusat</h3>
          <p>Alamat administratif PT Green Website Indonesia berada di kawasan M.H. Thamrin, Menteng.</p>
          <a href={MAPS_URL} target="_blank" rel="noopener noreferrer" className="btn primary" data-testid="map-directions">Petunjuk Arah <ArrowUpRight size={15} /></a>
          <div className="map-address"><strong>Menara Cakrawala Lantai 12 Unit 5A</strong><small>Jl. M.H. Thamrin No.9, Menteng, Jakarta Pusat, DKI Jakarta 10340</small></div>
        </div>
      </Reveal>
    </div>
  </section>
);

const Offices = () => (
  <section className="section" data-testid="contact-offices">
    <div className="container">
      <Reveal className="section-heading">
        <h2>Dua alamat, fungsi yang jelas.</h2>
        <p>Operasional perusahaan berada di Cirebon, sedangkan alamat Jakarta digunakan untuk kebutuhan administratif perusahaan.</p>
      </Reveal>
      <div className="office-grid">
        {[["briefcase", "Kantor Operasional", "Cirebon", CONTACT.offices[0].address], ["pin", "Kantor Administratif", "Jakarta", CONTACT.offices[1].address]].map(([ic, k, t, a], i) => (
          <Reveal className="card office-card" key={t} delay={i * 0.08} data-testid={`office-card-${t.toLowerCase()}`}>
            <span className="icon-box"><Icon name={ic} size={17} /></span>
            <div><span className="portfolio-label">{k}</span><h3>{t}</h3><p>{a}</p></div>
          </Reveal>
        ))}
      </div>
    </div>
  </section>
);

export default function ContactPage() {
  useSeo("Kontak — Green Website Indonesia", "Hubungi PT Green Website Indonesia melalui WhatsApp, email, atau kunjungi kantor kami di Cirebon dan Jakarta.");
  return (
    <>
      <Hero />
      <Brief />
      <MapSection />
      <Offices />
      <section className="cta-section">
        <div className="container">
          <Reveal className="cta compact" data-testid="contact-cta">
            <div><h2>Lebih nyaman langsung chat?</h2><p>Hubungi Green Website Indonesia melalui WhatsApp dan sampaikan kebutuhan Anda.</p></div>
            <div className="cta-buttons"><a href={WA.chat} target="_blank" rel="noopener noreferrer" className="btn white" data-testid="contact-cta-wa"><WaGlyph /> Mulai Konsultasi <ArrowUpRight size={15} /></a></div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
