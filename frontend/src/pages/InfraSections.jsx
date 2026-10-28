import { CircleCheck, ArrowRight as Arrow } from "lucide-react";

import { motion } from "framer-motion";
import { Check, Bell, ShieldCheck } from "lucide-react";
import { Reveal, Eyebrow, Btn, Icon } from "@/components/Common";

const float = { animate: { y: [0, -8, 0] }, transition: { duration: 6, repeat: Infinity, ease: "easeInOut" } };

export const PhoneMock = () => (
  <Reveal delay={0.2} className="svc-visual phone-visual" data-testid="service-hero-visual">
    <motion.div className="phone" {...float}>
      <div className="phone-notch" />
      <div className="phone-screen">
        <div className="phone-top"><small>9:41</small><small>● ● ▰</small></div>
        <small className="app-kicker">SELAMAT DATANG</small>
        <strong className="phone-title">Dashboard</strong>
        <div className="phone-hero"><small>Aktivitas Bulan Ini</small><strong>24 Transaksi</strong><em>+18%</em></div>
        <div className="phone-icons">{[["cart", "Pesanan"], ["bell", "Notifikasi"], ["pin", "Lokasi"]].map(([i, l]) => <span key={l}><Icon name={i} size={15} />{l}</span>)}</div>
        <div className="phone-list-head"><strong>Aktivitas Terbaru</strong><small>Lihat semua</small></div>
        {[["Pesanan #GW-248", "Status diperbarui", "Selesai"], ["Booking Baru", "Hari ini · 14:30", "Aktif"]].map(([t, s, b]) => (
          <div className="phone-row" key={t}><span><strong>{t}</strong><small>{s}</small></span><em>{b}</em></div>
        ))}
      </div>
    </motion.div>
    <div className="float-card fc-phone-1"><span className="icon-box sm"><Icon name="check" size={14} /></span><span><strong>Google Play Store</strong><small>Bantuan submission termasuk</small></span></div>
    <div className="float-card fc-phone-2"><span className="icon-box sm"><Bell size={14} /></span><span><strong>Push Notification</strong><small>Status terkirim ke pengguna</small></span></div>
  </Reveal>
);

const Meter = ([l, v]) => (
  <div key={l} className="meter"><small>{l}</small><strong>{v}%</strong><span><motion.i initial={{ width: 0 }} whileInView={{ width: `${v}%` }} viewport={{ once: true }} transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }} /></span></div>
);

export const ServerMock = () => (
  <Reveal delay={0.2} className="svc-visual" data-testid="service-hero-visual">
    <motion.div className="status-card dark" {...float}>
      <div className="svc-mock-bar"><i /><i /><i /><span className="app-url">infrastructure.greenwebsite.co.id</span></div>
      <div className="status-body">
        <div className="status-head"><div><small>INFRASTRUCTURE OVERVIEW</small><strong>Production Server</strong></div><em className="badge-live"><i /> ONLINE</em></div>
        <div className="meters">{[["CPU", 28], ["RAM", 46], ["Storage", 63]].map(Meter)}</div>
        <small className="status-sub">Service Status</small>
        {[["Web Server", "ACTIVE"], ["Database", "ACTIVE"], ["SSL", "VALID"], ["Security", "PROTECTED"]].map(([a, b]) => <div className="status-row" key={a}><span>{a}</span><em>{b}</em></div>)}
      </div>
    </motion.div>
    <div className="float-card fc-2"><span className="icon-box sm"><ShieldCheck size={14} /></span><span><strong>Managed Infrastructure</strong><small>Monitoring, backup &amp; support</small></span></div>
  </Reveal>
);

const StatusCard = ({ c, dark }) => (
  <div className={`status-card ${dark ? "dark" : ""}`}>
    <div className="status-body">
      <div className="status-head"><div><small>{c.kicker}</small><strong>{c.title}</strong>{c.sub && <p>{c.sub}</p>}</div></div>
      {c.meters && <div className="meters">{c.meters.map(Meter)}</div>}
      {c.tiles && <div className="arch-grid">{c.tiles.map(([i, t, s]) => <div key={t}><Icon name={i} size={15} /><strong>{t}</strong><small>{s}</small></div>)}</div>}
      {c.rows?.map(([a, s, b]) => <div className="status-row" key={a}><span><b>{a}</b>{s && <small>{s}</small>}</span><em>{b}</em></div>)}
    </div>
  </div>
);

export const Split = ({ b }) => (
  <section className={`section ${b.dark ? "raja" : b.soft ? "soft" : ""}`} data-testid="service-split">
    <div className={`container split ${b.reverse ? "reverse" : ""}`}>
      <Reveal className="split-copy">
        {b.dark ? <span className="eyebrow light">{b.eyebrow}</span> : <Eyebrow>{b.eyebrow}</Eyebrow>}
        <h2>{b.title}</h2>
        <p>{b.text}</p>
        {b.checks && <ul className="check-list">{b.checks.map((t) => <li key={t}><span className="check-dot"><Check size={12} /></span>{t}</li>)}</ul>}
        {b.tiles && <div className="mini-tiles">{b.tiles.map(([i, t, s]) => <div key={t}><Icon name={i} size={15} /><strong>{t}</strong><small>{s}</small></div>)}</div>}
        {b.button && <div className="split-actions"><Btn to="/kontak" variant={b.dark ? "white" : "primary"}>{b.button}</Btn></div>}
      </Reveal>
      <Reveal delay={0.1}><StatusCard c={b.card} dark={b.dark || !!b.card.tiles} /></Reveal>
    </div>
  </section>
);

export const Panel = ({ b }) => (
  <section className="section" data-testid="service-panel">
    <div className="container">
      <Reveal className="support-panel">
        <div>
          <span className="eyebrow light">{b.eyebrow}</span>
          <h2>{b.title}</h2>
          <p>{b.text}</p>
          {b.checks && <ul className="panel-checks">{b.checks.map((t) => <li key={t}><Check size={13} /> {t}</li>)}</ul>}
          {b.note && <p className="panel-note">{b.note}</p>}
          {b.button && <div className="security-cta"><Btn to="/kontak" variant="white">{b.button}</Btn></div>}
        </div>
        <div>
          <div className="support-list detailed">
            {b.items.map(([i, t, s]) => <div key={t}><span><Icon name={i} size={15} /></span><div><strong>{t}</strong><small>{s}</small></div></div>)}
          </div>
          {b.chips && <div className="panel-chips">{b.chips.map((c) => <span key={c}>{c}</span>)}</div>}
        </div>
      </Reveal>
    </div>
  </section>
);

export const Options = ({ b }) => (
  <section className={`section ${b.soft ? "soft" : ""}`} id={b.id} data-testid="service-options">
    <div className="container">
      <Reveal className="section-heading center"><Eyebrow>{b.eyebrow}</Eyebrow><h2>{b.title}</h2><p>{b.text}</p></Reveal>
      <div className={`plans ${b.three ? "" : "two"}`}>
        {b.items.map((o, i) => (
          <div key={o.name} className={`plan option static-option-icon ${o.featured ? "featured" : ""}`}>
            <span className="icon-box"><Icon name={o.icon} size={17} /></span>
            <h3>{o.name}</h3>
            <p className="plan-desc">{o.desc}</p>
            {o.list && <ul className="plan-list">{o.list.map((l) => <li key={l}><Check size={13} />{l}</li>)}</ul>}
            <Btn to={o.to} variant={o.featured ? "white" : "light"}>{o.label}</Btn>
          </div>
        ))}
      </div>
      {b.note && <p className="fine-note center">{b.note}</p>}
    </div>
  </section>
);

const Node = ([i, t, s], idx, arr) => [
  <div className="node" key={`n-${idx}`}><Icon name={i} size={17} /><strong>{t}</strong><small>{s}</small></div>,
  idx < arr.length - 1 ? <span className="node-link" key={`l-${idx}`}><Arrow size={11} /></span> : null,
];

export const CardSplit = ({ b }) => (
  <section className="section" data-testid="service-cardsplit">
    <div className="container split">
      <Reveal className="split-copy">
        <Eyebrow>{b.eyebrow}</Eyebrow>
        <h2>{b.title}</h2>
        <p>{b.text}</p>
        <div className="split-actions"><Btn to="/kontak" variant="light" testid="cardsplit-cta">{b.button}</Btn></div>
      </Reveal>
      <div className="cardsplit-grid">
        {b.points.map(([t, p], i) => (
          <Reveal className="card cardsplit-item" key={t} delay={i * 0.07}>
            <span className="cardsplit-icon"><Icon name={b.icons[i]} size={22} /></span>
            <h3>{t}</h3><p>{p}</p>
          </Reveal>
        ))}
      </div>
    </div>
  </section>
);

export const LayersBlock = ({ b }) => (
  <section className="section raja" data-testid="service-layers">
    <div className="container">
      <Reveal className="section-heading">
        <span className="eyebrow light">{b.eyebrow}</span>
        <h2>{b.title}</h2>
        <p>{b.text}</p>
      </Reveal>
      <div className="layers-grid">
        <Reveal className="layers-flow">{b.nodes.map(Node)}</Reveal>
        <div className="layers-list">
          {b.items.map(([i, t, s], idx) => (
            <Reveal className="layer-card" key={t} delay={idx * 0.08}><Icon name={i} size={17} /><div><strong>{t}</strong><small>{s}</small></div></Reveal>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export const Connected = ({ b }) => (
  <section className="section soft" data-testid="service-connected">
    <div className="container split">
      <Reveal className="split-copy">
        <Eyebrow>{b.eyebrow}</Eyebrow>
        <h2>{b.title}</h2>
        <p>{b.text}</p>
        <ul className="circle-checks">{b.checks.map((t) => <li key={t}><CircleCheck size={16} />{t}</li>)}</ul>
      </Reveal>
      <Reveal delay={0.1} className="connected-card" data-testid="connected-diagram">
        <div className="connected-flow">{b.items.map(Node)}</div>
        <div className="connected-chips">{b.chips.map((c) => <span key={c}>{c}</span>)}</div>
      </Reveal>
    </div>
  </section>
);

