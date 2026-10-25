import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useSeo } from "@/components/Layout";
import { Reveal, Eyebrow } from "@/components/Common";
import { wa } from "@/data/site";

const LAUNCH = new Date("2026-11-01T00:00:00+07:00").getTime();

const remaining = () => {
  const d = Math.max(0, LAUNCH - Date.now());
  return [Math.floor(d / 864e5), Math.floor(d / 36e5) % 24, Math.floor(d / 6e4) % 60, Math.floor(d / 1e3) % 60];
};

const Countdown = () => {
  const [t, setT] = useState(remaining);
  useEffect(() => {
    const id = setInterval(() => setT(remaining()), 1000);
    return () => clearInterval(id);
  }, []);
  return (
    <section className="countdown" data-testid="member-countdown">
      <div className="container">
        <p>Menuju peluncuran Member Area</p>
        <div className="countdown-grid">
          {["Hari", "Jam", "Menit", "Detik"].map((l, i) => (
            <div key={l}><strong data-testid={`countdown-${l.toLowerCase()}`}>{String(t[i]).padStart(2, "0")}</strong><small>{l}</small></div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Mock = () => (
  <Reveal delay={0.2} className="member-visual" data-testid="member-visual">
    <motion.div className="mv-window" animate={{ y: [0, -8, 0] }} transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}>
      <aside><strong>GREEN WEBSITE</strong>{["Member Area", "Website", "Dukungan"].map((n) => <span key={n}>{n}</span>)}</aside>
      <div className="mv-main">
        <div className="mv-head"><strong>Member Area</strong><small>Coming Soon</small></div>
        <div className="mv-card">
          <div><small>PT GREEN WEBSITE INDONESIA</small><i /><em>1 NOVEMBER 2026</em></div>
          <div><strong>Segera Hadir</strong><small>Akses layanan website Anda dalam satu tempat.</small></div>
        </div>
        <div className="mv-lines"><i /><i /><i /></div>
      </div>
    </motion.div>
  </Reveal>
);

export default function MemberPage() {
  useSeo("Member Area — Green Website Indonesia", "Member Area Green Website Indonesia segera hadir pada 1 November 2026 untuk memberikan akses layanan dan informasi website dalam satu tempat.");
  return (
    <>
      <section className="page-hero member-hero" data-testid="member-hero">
        <div className="container member-hero-grid">
          <Reveal>
            <span className="member-pill"><i /> MEMBER AREA</span>
            <h1>Member Area Green Website Segera Hadir.</h1>
            <p className="hero-lead">Kami sedang menyiapkan Member Area Green Website Indonesia untuk memberikan akses layanan dan informasi website dalam satu tempat.</p>
            <div className="member-actions">
              <Link to="/" className="btn link-plain dark" data-testid="member-back-home">Kembali ke Beranda</Link>
              <a href={wa("Halo Green Website, saya ingin bertanya tentang Member Area.")} target="_blank" rel="noopener noreferrer" className="btn link-plain dark" data-testid="member-contact-team">Hubungi Tim Kami</a>
            </div>
            <div className="member-meta"><span>Peluncuran 1 November 2026</span><span>Dipersiapkan untuk Klien Green Website</span></div>
          </Reveal>
          <Mock />
        </div>
      </section>
      <Countdown />
      <section className="section member-soon" data-testid="member-soon">
        <div className="container">
          <Reveal className="section-heading">
            <Eyebrow>Segera Tersedia</Eyebrow>
            <h2>Satu akses untuk kebutuhan website Anda.</h2>
            <p>Member Area sedang kami persiapkan dan dijadwalkan tersedia mulai 1 November 2026. Selama masa persiapan, kebutuhan bantuan tetap dapat disampaikan melalui tim Green Website Indonesia.</p>
          </Reveal>
        </div>
      </section>
    </>
  );
}
