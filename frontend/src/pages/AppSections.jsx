import { motion } from "framer-motion";
import { Check, ShieldCheck, Users, Database, GitBranch, BarChart3, KeyRound, Lock, HardDriveDownload, ArrowRight } from "lucide-react";
import { Reveal, Eyebrow, Btn, Icon } from "@/components/Common";

const BARS = [38, 52, 44, 66, 58, 74, 62, 86, 70, 92, 80, 96];

export const AppMock = () => (
  <Reveal delay={0.2} className="svc-visual app-visual" data-testid="service-hero-visual">
    <motion.div className="app-mock" animate={{ y: [0, -8, 0] }} transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}>
      <div className="svc-mock-bar"><i /><i /><i /><span className="app-url">app.greenwebsite.co.id/dashboard</span></div>
      <div className="app-body">
        <aside>
          <b>GW</b>
          {["Dashboard", "Pengguna", "Data", "Approval", "Laporan"].map((n, i) => <span key={n} className={i === 0 ? "on" : ""}>{n}</span>)}
        </aside>
        <div className="app-main">
          <small className="app-kicker">OVERVIEW</small>
          <strong className="app-title">Operational Dashboard</strong>
          <div className="app-stats">
            {[["Data Aktif", "1.248", "+12.4%"], ["Menunggu Approval", "24", "6 prioritas"], ["Proses Selesai", "96%", "Bulan ini"]].map(([k, v, s]) => (
              <div key={k}><small>{k}</small><strong>{v}</strong><em>{s}</em></div>
            ))}
          </div>
          <div className="app-chart">
            <div className="app-chart-head"><small>Aktivitas Sistem</small><em>30 Hari</em></div>
            <div className="app-bars">
              {BARS.map((h, i) => (
                <motion.i key={i} initial={{ scaleY: 0.2 }} animate={{ scaleY: 1 }} transition={{ duration: 0.9, delay: 0.5 + i * 0.05, ease: [0.22, 1, 0.36, 1] }} style={{ height: `${h}%` }} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
    <div className="app-queue">
      <div className="app-queue-head"><strong>Approval Queue</strong><span><i /> Live</span></div>
      {[["Pengajuan #0248", "Finance · 2m", "Review"], ["Data #1182", "Operation · 8m", "Check"], ["Request #0974", "Admin · 14m", "Approve"]].map(([t, s, a]) => (
        <div key={t}><span><strong>{t}</strong><small>{s}</small></span><em>{a}</em></div>
      ))}
    </div>
    <div className="svc-tags"><ShieldCheck size={13} /> Role-based Access · Kontrol akses per pengguna</div>
  </Reveal>
);

export const AppAbout = () => (
  <section className="section" data-testid="service-about">
    <div className="container split">
      <Reveal className="split-copy">
        <Eyebrow>Tentang Web Application</Eyebrow>
        <h2>Bukan sekadar website. Dibangun untuk menjalankan proses.</h2>
        <p>Web Application dirancang ketika kebutuhan utama bukan hanya menampilkan informasi, tetapi mengelola data, pengguna, status, proses, dan keputusan dalam satu sistem yang saling terhubung.</p>
        <ul className="check-list">
          {["Berbasis browser tanpa instal aplikasi desktop.", "Data terpusat dan dapat dikelola sesuai hak akses.", "Modul, role, workflow, dan reporting disusun sesuai kebutuhan operasional."].map((t) => (
            <li key={t}><span className="check-dot"><Check size={12} /></span>{t}</li>
          ))}
        </ul>
      </Reveal>
      <Reveal delay={0.1} className="arch-card" data-testid="app-architecture">
        <small>APPLICATION ARCHITECTURE</small>
        <div className="arch-core"><span><Database size={18} /></span><div><strong>Web Application</strong><em>Satu sistem untuk proses yang saling terhubung</em></div></div>
        <div className="arch-grid">
          {[[Users, "Users", "Role & permission"], [Database, "Database", "Data terpusat"], [GitBranch, "Workflow", "Status & approval"], [BarChart3, "Reporting", "Insight & export"]].map(([I, t, s]) => (
            <div key={t}><I size={15} /><strong>{t}</strong><small>{s}</small></div>
          ))}
        </div>
      </Reveal>
    </div>
  </section>
);

export const Workflow = ({ b }) => (
  <section className="section soft" data-testid="service-workflow">
    <div className="container">
      <Reveal className="section-heading center"><Eyebrow>{b.eyebrow}</Eyebrow><h2>{b.title}</h2><p>{b.text}</p></Reveal>
      <div className="wf-row" style={{ "--wf": b.items.length }}>
        {b.items.map(([t, s, ic], i) => (
          <Reveal className="wf-item" key={t} delay={i * 0.06}>
            <span className="wf-num">{String(i + 1).padStart(2, "0")}</span>
            <span className="wf-icon"><Icon name={ic ?? WF_ICONS[i % WF_ICONS.length]} size={20} /></span>
            <strong>{t}</strong><small>{s}</small>
            {i < b.items.length - 1 && !b.noArrow && <ArrowRight size={12} className="wf-arrow" />}
          </Reveal>
        ))}
      </div>
    </div>
  </section>
);

const WF_ICONS = ["layers", "check", "code", "user", "check", "chart"];

const MATRIX = [
  ["Dashboard", "✓", "✓", "✓", "✓"],
  ["Kelola User", "✓", "—", "—", "—"],
  ["Approval", "✓", "✓", "—", "—"],
  ["Input Data", "✓", "✓", "✓", "Terbatas"],
  ["Laporan", "✓", "✓", "Terbatas", "—"],
];

export const Roles = () => (
  <section className="section" data-testid="service-roles">
    <div className="container roles-grid">
      <Reveal>
        <Eyebrow>Role &amp; Hak Akses</Eyebrow>
        <h2>Setiap pengguna mendapatkan akses sesuai perannya.</h2>
        <p className="muted-sm">Hak akses dapat dibatasi per modul dan tindakan agar setiap pengguna hanya melihat serta menjalankan fungsi yang memang diperlukan.</p>
        <div className="role-list">
          {[["Administrator", "Akses penuh dan konfigurasi sistem."], ["Manager / Supervisor", "Monitoring, approval, dan laporan."], ["Staff", "Input dan pengelolaan proses operasional."], ["Member / Client", "Akses terbatas terhadap data atau layanan."]].map(([t, s]) => (
            <div key={t}><strong>{t}</strong><small>{s}</small></div>
          ))}
        </div>
      </Reveal>
      <Reveal delay={0.1} className="matrix-card" data-testid="permission-matrix">
        <div className="matrix-head"><strong>Permission Matrix</strong><small>Contoh konfigurasi</small></div>
        <div className="matrix-scroll">
          <table>
            <thead><tr>{["Modul", "Admin", "Spv", "Staff", "Member"].map((h) => <th key={h}>{h}</th>)}</tr></thead>
            <tbody>{MATRIX.map((r) => <tr key={r[0]}>{r.map((c, i) => <td key={i} className={c === "✓" ? "yes" : ""}>{c}</td>)}</tr>)}</tbody>
          </table>
        </div>
      </Reveal>
    </div>
  </section>
);

export const Security = () => (
  <section className="section" data-testid="service-security">
    <div className="container">
      <Reveal className="support-panel">
        <div>
          <span className="eyebrow light">Keamanan Aplikasi</span>
          <h2>Keamanan dibangun sebagai bagian dari sistem.</h2>
          <p>Implementasi disesuaikan dengan kebutuhan aplikasi dan menggunakan praktik keamanan aplikasi web untuk membantu melindungi akses, data, dan proses.</p>
          <div className="security-cta"><Btn to="/kontak" variant="white" testid="security-cta">Diskusikan Kebutuhan Keamanan</Btn></div>
        </div>
        <div className="support-list detailed">
          {[[KeyRound, "Authentication", "Login dan session protection."], [Users, "Role-based Access", "Permission sesuai pengguna."], [Lock, "Validation & Protection", "Input validation, CSRF, rate limiting."], [HardDriveDownload, "Backup & Logging", "Backup dan activity log sesuai scope."]].map(([I, t, s]) => (
            <div key={t}><span><I size={15} /></span><div><strong>{t}</strong><small>{s}</small></div></div>
          ))}
        </div>
      </Reveal>
    </div>
  </section>
);
