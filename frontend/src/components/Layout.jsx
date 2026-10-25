import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { Link, NavLink, Outlet, useLocation } from "react-router-dom";
import { MotionConfig } from "framer-motion";
import Lenis from "lenis";
import { ChevronDown, Menu, X, Phone, Mail, MapPin, LogIn } from "lucide-react";
import { SERVICES, CONTACT, WA } from "@/data/site";
import { Icon } from "@/components/Common";

export const Logo = ({ className = "" }) => (
  <Link to="/" className={`brand ${className}`} aria-label="Green Website Indonesia" data-testid="brand-logo">
    <img src="/assets/greenwebsite-logo.svg" alt="Green Website Indonesia" width="112" height="44" />
  </Link>
);

const NAV = [
  { to: "/", label: "Beranda", end: true },
  { to: "/tentang-kami", label: "Tentang Kami" },
  { mega: true, label: "Layanan" },
  { to: "/portofolio", label: "Portofolio" },
  { to: "/artikel", label: "Artikel" },
  { to: "/kontak", label: "Kontak" },
];

const MegaMenu = ({ onPick }) => (
  <div className="mega" data-testid="mega-menu">
    <div className="mega-head">
      <strong>Layanan Green Website</strong>
      <span>Pilih solusi sesuai kebutuhan Anda.</span>
    </div>
    <div className="mega-grid">
      {SERVICES.map((s) => (
        <Link key={s.slug} to={`/layanan/${s.slug}`} className="mega-item" onClick={onPick} data-testid={`mega-${s.slug}`}>
          <span className="icon-box sm"><Icon name={s.icon} size={15} /></span>
          <span><strong>{s.title}</strong><small>{s.short}</small></span>
        </Link>
      ))}
    </div>
  </div>
);

const Header = () => {
  const [mega, setMega] = useState(false);
  const [drawer, setDrawer] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const loc = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMega(false);
    setDrawer(false);
  }, [loc.pathname]);

  return (
    <header className={`site-header ${scrolled ? "scrolled" : ""}`} data-testid="site-header">
      <div className="container header-inner">
        <Logo />
        <nav className="nav" aria-label="Navigasi utama">
          {NAV.map((n) =>
            n.mega ? (
              <div key="mega" className="nav-mega" onMouseEnter={() => setMega(true)} onMouseLeave={() => setMega(false)}>
                <button type="button" className={`nav-btn ${loc.pathname.startsWith("/layanan") ? "active" : ""}`} aria-expanded={mega} onClick={() => setMega((v) => !v)} data-testid="nav-layanan">
                  Layanan <ChevronDown size={14} className={mega ? "rot" : ""} />
                </button>
                {mega && <MegaMenu onPick={() => setMega(false)} />}
              </div>
            ) : (
              <NavLink key={n.to} to={n.to} end={n.end} data-testid={`nav-${n.label.toLowerCase().replace(/\s/g, "-")}`}>{n.label}</NavLink>
            )
          )}
        </nav>
        <Link to="/member" className="btn primary header-cta" data-testid="header-login-member"><LogIn size={15} /> Login Member</Link>
        <button type="button" className="burger" aria-label="Buka menu" onClick={() => setDrawer(true)} data-testid="mobile-menu-open"><Menu size={22} /></button>
      </div>
      {drawer && createPortal(
        <div className="drawer" data-testid="mobile-drawer" data-lenis-prevent>
          <div className="drawer-top">
            <Logo />
            <button type="button" className="burger" aria-label="Tutup menu" onClick={() => setDrawer(false)} data-testid="mobile-menu-close"><X size={22} /></button>
          </div>
          <div className="drawer-links">
            {NAV.filter((n) => !n.mega).map((n) => <NavLink key={n.to} to={n.to} end={n.end}>{n.label}</NavLink>)}
            <p className="drawer-sub">Layanan</p>
            {SERVICES.map((s) => <Link key={s.slug} to={`/layanan/${s.slug}`} className="drawer-service">{s.title}</Link>)}
          </div>
          <Link to="/member" className="btn primary full" data-testid="drawer-login-member"><LogIn size={15} /> Login Member</Link>
        </div>,
        document.body
      )}
    </header>
  );
};

const Footer = () => (
  <footer className="site-footer" data-testid="site-footer">
    <div className="container footer-grid">
      <div className="footer-about">
        <Logo />
        <p>PT Green Website Indonesia menyediakan layanan pembuatan dan pengembangan website untuk bisnis, perusahaan, dan lembaga. Kami membantu membangun kehadiran digital melalui perencanaan, desain, pengembangan, dan dukungan website yang terarah.</p>
        <span className="footer-company">PT. GREEN WEBSITE INDONESIA</span>
      </div>
      <div>
        <h4>Layanan</h4>
        <ul>{SERVICES.map((s) => <li key={s.slug}><Link to={`/layanan/${s.slug}`}>{s.title}</Link></li>)}</ul>
      </div>
      <div>
        <h4>Perusahaan</h4>
        <ul>
          <li><Link to="/tentang-kami">Tentang Kami</Link></li>
          <li><Link to="/portofolio">Portofolio</Link></li>
          <li><Link to="/artikel">Artikel &amp; Panduan</Link></li>
          <li><Link to="/#faq">Pertanyaan Umum</Link></li>
          <li><Link to="/#dukungan">Dukungan Website</Link></li>
          <li><Link to="/kontak">Kontak Kami</Link></li>
        </ul>
      </div>
      <div className="footer-contact">
        <h4>Kantor &amp; Kontak</h4>
        <a href={WA.chat} target="_blank" rel="noopener noreferrer" data-testid="footer-whatsapp"><Phone size={14} /><span><small>WhatsApp</small>{CONTACT.phone}</span></a>
        <a href={`mailto:${CONTACT.email}`} data-testid="footer-email"><Mail size={14} /><span><small>Email</small>{CONTACT.email}</span></a>
        {CONTACT.offices.map((o) => (
          <div key={o.title} className="footer-office"><MapPin size={14} /><span><small>{o.title}</small>{o.address}</span></div>
        ))}
      </div>
    </div>
    <div className="container footer-bottom">
      <span>© {new Date().getFullYear()} PT. Green Website Indonesia. Seluruh hak cipta dilindungi.</span>
      <span><Link to="/kebijakan-privasi">Kebijakan Privasi</Link> · <Link to="/syarat-ketentuan">Syarat &amp; Ketentuan</Link></span>
    </div>
  </footer>
);

const WaIcon = () => (
  <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" aria-hidden="true"><path d="M17.5 14.4c-.3-.1-1.8-.9-2-1-.3-.1-.5-.1-.7.1-.2.3-.8 1-.9 1.2-.2.2-.3.2-.6.1-.3-.1-1.2-.5-2.4-1.5-.9-.8-1.5-1.8-1.6-2.1-.2-.3 0-.5.1-.6l.4-.5c.2-.2.2-.3.3-.5.1-.2 0-.4 0-.5l-.9-2.2c-.2-.6-.5-.5-.7-.5h-.6c-.2 0-.5.1-.8.4-.3.3-1 1-1 2.5s1.1 2.9 1.2 3.1c.1.2 2.1 3.2 5.1 4.5 2.5 1 3 .8 3.6.7.5-.1 1.8-.7 2-1.4.2-.7.2-1.3.2-1.4-.1-.2-.3-.3-.7-.4zM12 2a10 10 0 0 0-8.6 15.1L2 22l5-1.3A10 10 0 1 0 12 2zm0 18.2c-1.5 0-3-.4-4.3-1.2l-.3-.2-3 .8.8-2.9-.2-.3A8.2 8.2 0 1 1 12 20.2z" /></svg>
);

const useSmoothScroll = () => {
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return undefined;
    const lenis = new Lenis({ duration: 1.1, smoothWheel: true });
    window.__lenis = lenis;
    let id;
    const raf = (t) => { lenis.raf(t); id = requestAnimationFrame(raf); };
    id = requestAnimationFrame(raf);
    return () => { cancelAnimationFrame(id); lenis.destroy(); window.__lenis = null; };
  }, []);
};

const useRouteScroll = () => {
  const { pathname, hash } = useLocation();
  useEffect(() => {
    const t = setTimeout(() => {
      const el = hash ? document.querySelector(hash) : null;
      const top = el ? el.getBoundingClientRect().top + window.scrollY - 90 : 0;
      if (window.__lenis) window.__lenis.scrollTo(top, { immediate: !el });
      else window.scrollTo({ top, behavior: el ? "smooth" : "auto" });
    }, hash ? 120 : 0);
    return () => clearTimeout(t);
  }, [pathname, hash]);
};

export default function Layout() {
  useSmoothScroll();
  useRouteScroll();
  return (
    <MotionConfig reducedMotion="user">
      <a href="#konten" className="skip-link">Lewati ke konten utama</a>
      <Header />
      <main id="konten"><Outlet /></main>
      <Footer />
      <a href={WA.chat} className="wa-float" target="_blank" rel="noopener noreferrer" data-testid="floating-whatsapp"><WaIcon /> Chat WhatsApp</a>
    </MotionConfig>
  );
}

export const useSeo = (title, description) => {
  useEffect(() => {
    document.title = title;
    const set = (sel, attr, val) => { const el = document.querySelector(sel); if (el) el.setAttribute(attr, val); };
    set('meta[name="description"]', "content", description);
    set('meta[property="og:title"]', "content", title);
    set('meta[property="og:description"]', "content", description);
  }, [title, description]);
};
