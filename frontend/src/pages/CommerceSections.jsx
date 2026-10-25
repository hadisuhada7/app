import { Check, QrCode, Landmark, UserRound } from "lucide-react";
import { Reveal, Eyebrow } from "@/components/Common";
import { COURIERS, AUTO_COURIERS, BANKS } from "@/data/services";

const Logos = ({ list, dark }) => (
  <div className={`logo-row ${dark ? "dark" : ""}`}>
    {list.map((l) => <span key={l.name} title={l.name}><img src={l.src} alt={l.name} loading="lazy" /></span>)}
  </div>
);

const Raja = () => (
  <section className="section raja" data-testid="commerce-shipping">
    <div className="container raja-grid">
      <Reveal>
        <span className="eyebrow light">Partner Pengiriman</span>
        <h2>Pengiriman terintegrasi. <em>Operasional lebih ringkas.</em></h2>
        <p>Integrasi RajaOngkir membantu toko online menampilkan ongkir saat checkout dan, pada paket Automation &amp; Signature, mendukung proses fulfillment yang lebih otomatis.</p>
        <div className="raja-partner">
          <img src="/assets/logos/rajaongkir.svg" alt="RajaOngkir" />
          <div><small>PARTNER INTEGRASI</small><strong>RajaOngkir</strong><span>Cek ongkir · Shipping Delivery · Payment API</span></div>
        </div>
        <div className="raja-points">{["Ongkir realtime", "Fulfillment terintegrasi", "Tracking lebih rapi"].map((t) => <span key={t}><Check size={13} /> {t}</span>)}</div>
      </Reveal>
      <Reveal delay={0.1} className="raja-panel">
        <div className="raja-panel-head"><div><small>SHIPPING INTEGRATION</small><strong>Ekspedisi yang didukung</strong></div><span className="raja-live"><i /> Connected</span></div>
        <div className="raja-block">
          <div className="raja-block-head"><span>01</span><div><strong>Cek Ongkir di Checkout</strong><small>Pilihan ekspedisi tampil langsung saat pelanggan menyelesaikan pesanan.</small></div><em>15 EKSPEDISI</em></div>
          <Logos list={COURIERS} dark />
        </div>
        <div className="raja-block">
          <div className="raja-block-head"><span>02</span><div><strong>Otomasi Resi &amp; Pickup</strong><small>Tersedia pada paket Commerce Automation dan Commerce Signature.</small></div><em>AUTOMATION+</em></div>
          <div className="raja-auto">
            {[["AWB / Resi", "Dibuat dari data order."], ["Pickup", "Permintaan pickup terhubung."], ["Tracking", "Status pengiriman lebih rapi."], ["Label", "Siap untuk proses fulfillment."]].map(([t, s]) => (
              <div key={t}><strong>{t}</strong><small>{s}</small></div>
            ))}
          </div>
          <Logos list={AUTO_COURIERS} dark />
        </div>
        <p className="raja-note">Ketersediaan ekspedisi dan fitur dapat menyesuaikan cakupan area, jenis layanan, serta aktivasi integrasi pada akun merchant.</p>
      </Reveal>
    </div>
  </section>
);

const PayCard = ({ icon: I, title, sub, text, fee, banksLabel, i }) => (
  <Reveal className="card pay-card" delay={i * 0.08} data-testid={`payment-${title.toLowerCase().replace(/\s/g, "-")}`}>
    <div className="pay-head"><div><h3>{title}</h3><small>{sub}</small></div><span className="icon-box"><I size={17} strokeWidth={1.8} /></span></div>
    <p>{text}</p>
    <div className="pay-fee"><strong>{fee}</strong><small>biaya admin per transaksi</small></div>
    <small className="pay-banks-label">{banksLabel}</small>
    <Logos list={BANKS} />
  </Reveal>
);

const Pay = () => (
  <section className="section" data-testid="commerce-payment">
    <div className="container">
      <div className="pay-intro">
        <Reveal><Eyebrow>Payment Gateway</Eyebrow><h2>Pembayaran online yang lebih praktis untuk pelanggan.</h2></Reveal>
        <Reveal delay={0.1}><p className="muted-sm">Toko online dapat menerima pembayaran melalui QRIS dan Virtual Account. Logo bank di bawah mengikuti kanal VA yang ditampilkan pada halaman Payment API RajaOngkir.</p></Reveal>
      </div>
      <div className="pay-grid">
        <PayCard i={0} icon={QrCode} title="QRIS" sub="Mobile Banking & E-Wallet" text="Pelanggan dapat membayar menggunakan aplikasi mobile banking atau e-wallet yang mendukung QRIS tanpa perlu memasukkan nomor rekening secara manual." fee="2%" banksLabel="Aplikasi bank yang dapat menggunakan QRIS" />
        <PayCard i={1} icon={Landmark} title="Virtual Account" sub="Bank Transfer" text="Nomor Virtual Account dibuat untuk transaksi sehingga pembayaran lebih mudah dicocokkan dengan pesanan yang masuk." fee="Rp5.000" banksLabel="Bank VA yang didukung" />
      </div>
      <p className="fine-note center">Biaya admin di atas adalah biaya yang ditampilkan Green Website Indonesia untuk implementasi layanan ini. Ketersediaan kanal pembayaran mengikuti aktivasi payment gateway pada akun merchant.</p>
    </div>
  </section>
);

export const CommerceSections = () => (<><Raja /><Pay /></>);

export const MemberSection = () => (
  <section className="section" data-testid="commerce-member">
    <div className="container split">
      <Reveal className="split-copy">
        <Eyebrow>Commerce Signature</Eyebrow>
        <h2>Pengalaman pelanggan berlanjut setelah checkout.</h2>
        <p>Paket Signature menambahkan customer account system agar pelanggan dapat login, menyimpan data, melihat riwayat transaksi, dan mengikuti status pesanan dari akun mereka sendiri.</p>
      </Reveal>
      <Reveal delay={0.1} className="member-mock">
        <div className="member-mock-head"><span className="icon-box sm"><UserRound size={14} /></span><strong>Member Dashboard</strong></div>
        <div className="member-mock-grid">
          {[["Riwayat Pesanan", "Daftar transaksi sebelumnya."], ["Status Pesanan", "Progres order lebih mudah dipantau."], ["Alamat Tersimpan", "Mempercepat checkout berikutnya."], ["Profil Pelanggan", "Data akun dalam satu area member."]].map(([t, s]) => (
            <div key={t}><i /><strong>{t}</strong><small>{s}</small></div>
          ))}
        </div>
      </Reveal>
    </div>
  </section>
);
