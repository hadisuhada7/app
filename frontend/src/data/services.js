import { wa } from "@/data/site";

const SUPPORT_ITEMS = [
  { icon: "user", title: "Member Area" },
  { icon: "wrench", title: "Bantuan Teknis" },
  { icon: "chat", title: "Konsultasi" },
  { icon: "cloud", title: "Backup Harian" },
  { icon: "chart", title: "Pengembangan Lanjutan" },
  { icon: "book", title: "Panduan Pengelolaan" },
];

export const TECH = {
  logos: [
    { src: "/assets/logos/laravel.svg", name: "Laravel", text: "Pengembangan Aplikasi Web" },
    { src: "/assets/logos/litespeed.svg", name: "LiteSpeed", text: "Performa Web Server" },
    { src: "/assets/logos/cloudlinux.png", name: "CloudLinux", text: "Isolasi Resource Hosting" },
    { src: "/assets/logos/imunify360.png", name: "Imunify360", text: "Perlindungan Server" },
    { src: "/assets/logos/jetbackup.png", name: "JetBackup", text: "Pencadangan Data" },
    { src: "/assets/logos/cpanel.svg", name: "cPanel", text: "Pengelolaan Hosting" },
  ],
  partners: [
    { src: "/assets/logos/rajaongkir.svg", name: "RajaOngkir", text: "Mendukung integrasi layanan pengiriman dan perhitungan ongkos kirim untuk website yang membutuhkan fitur pengiriman.", tag: "Integrasi Pengiriman" },
    { src: "/assets/logos/resellercamp.svg", name: "ResellerCamp.id", text: "Mendukung kebutuhan registrasi, perpanjangan, dan pengelolaan domain untuk website bisnis Anda.", tag: "Layanan Domain" },
  ],
};

export const COURIERS = [
  ["jne.svg", "JNE"], ["sicepat.svg", "SiCepat"], ["id.svg", "IDExpress"], ["sap-putih-baru.svg", "SAP Express"], ["ninja.svg", "Ninja Xpress"],
  ["jnt.svg", "J&T Express"], ["lion.svg", "Lion Parcel"], ["spx-white.png", "SPX"], ["tiki.svg", "TIKI"], ["pos.svg", "POS Indonesia"],
  ["anteraja.svg", "AnterAja"], ["sentral-cargo.svg", "Sentral Cargo"], ["ncs.svg", "NCS"], ["expedito.svg", "Expedito"], ["ray.svg", "Rayspeed"],
].map(([f, name]) => ({ src: `/assets/couriers/${f}`, name }));

export const AUTO_COURIERS = [
  ["jne.svg", "JNE"], ["sap-putih-baru.svg", "SAP Express"], ["id.svg", "IDExpress"], ["sicepat.svg", "SiCepat"],
  ["jnt.svg", "J&T Express"], ["ninja.svg", "Ninja Xpress"], ["lion.svg", "Lion Parcel"], ["gosend-white.svg", "GoSend"],
].map(([f, name]) => ({ src: `/assets/couriers/${f}`, name }));

export const BANKS = [
  ["BCA_2", "BCA"], ["cimb", "CIMB"], ["bri", "BRI"], ["bni", "BNI"], ["mandiri", "Mandiri"], ["permata_bank_new", "Permata"],
].map(([f, name]) => ({ src: `/assets/banks/${f}.png`, name }));

const plan = (tier, name, desc, price, benefits, extra = {}) => ({ tier, name, desc, price, benefits, renew: "Perpanjangan Rp 500.000 /tahun", ...extra });
const order = (name, price) => wa(`Halo Green Website, saya ingin memesan paket ${name} ${price}.`);

export const SERVICE_DETAILS = {
  "company-profile": {
    seo: "Website Company Profile — Green Website Indonesia",
    eyebrow: "Website Company Profile",
    title: [["Representasikan perusahaan Anda", false], ["secara lebih profesional.", true]],
    text: "Website company profile untuk menyampaikan profil, layanan, portofolio, legalitas, dan informasi perusahaan dalam struktur yang rapi, kredibel, serta nyaman diakses melalui desktop maupun perangkat mobile.",
    ctaLabel: "Konsultasikan Company Profile",
    wa: wa("Halo Green Website, saya ingin konsultasi Website Company Profile."),
    badges: ["Desain profesional", "Hosting 3 GB", "Mulai 5 halaman"],
    visual: { kicker: "Company Profile", title: "Profil. Layanan. Portofolio. Kredibilitas.", tags: "Corporate · Responsive · Kredibel", icon: "briefcase" },
    about: {
      eyebrow: "Tentang Layanan", title: "Website yang membantu perusahaan tampil lebih jelas dan terpercaya.",
      text: "Website company profile menjadi pusat informasi resmi perusahaan di internet. Struktur beberapa halaman memungkinkan profil, layanan, pengalaman, legalitas, publikasi, dan kontak disampaikan secara lebih lengkap tanpa membuat pengunjung kehilangan arah.",
      points: [["Identitas Perusahaan", "Menampilkan profil dan karakter perusahaan secara konsisten."], ["Informasi Terstruktur", "Konten dipisahkan ke halaman yang mudah dipahami dan dikembangkan."], ["Kredibilitas Digital", "Membantu calon klien menemukan informasi resmi perusahaan dengan lebih mudah."]],
    },
    use: {
      eyebrow: "Cocok untuk", title: "Dibangun untuk bisnis, perusahaan, dan lembaga yang ingin tampil lebih profesional.",
      text: "Struktur website dapat disesuaikan dengan bidang usaha, informasi yang perlu ditampilkan, dan kebutuhan komunikasi perusahaan.",
      items: [
        ["building", "Perusahaan", "Menampilkan profil, layanan, legalitas, pengalaman, dan informasi perusahaan secara resmi."],
        ["store", "UMKM & Bisnis", "Membangun identitas digital yang lebih profesional untuk mendukung kepercayaan calon pelanggan."],
        ["users", "Lembaga & Organisasi", "Menyampaikan profil, program, publikasi, dan informasi kelembagaan dalam struktur yang rapi."],
        ["hardhat", "Kontraktor & Supplier", "Menampilkan layanan, proyek, pengalaman, legalitas, dan cakupan pekerjaan perusahaan."],
        ["briefcase", "Konsultan & Profesional", "Memperkenalkan kompetensi, layanan, pengalaman, dan jalur konsultasi secara profesional."],
        ["graduation", "Institusi Pendidikan", "Menyusun profil institusi, program, informasi, publikasi, dan kontak dalam satu website resmi."],
      ],
    },
    flow: { eyebrow: "Struktur Website", title: "Informasi perusahaan disusun ke halaman yang jelas.", text: "Susunan final menyesuaikan paket dan kebutuhan perusahaan. Berikut contoh struktur umum website company profile.", items: ["Beranda", "Tentang Kami", "Layanan", "Produk / Jasa", "Portofolio", "Artikel / Berita", "Kontak"] },
    pricing: {
      eyebrow: "Paket Company Profile", title: "Tiga pilihan untuk skala kebutuhan yang berbeda.",
      text: "Mulai dari company profile ringkas hingga struktur website yang lebih lengkap dengan halaman, email perusahaan, dan integrasi yang lebih luas.",
      promo: { label: "PROMO TERBATAS COMPANY PROFILE", until: "Berlaku sampai 31 Oktober 2026 pukul 23.59 WIB", short: "Berlaku hingga 31 Oktober 2026" },
      plans: [
        plan("Essential", "CP Essential", "Untuk bisnis atau perusahaan yang membutuhkan website company profile profesional dengan struktur utama yang ringkas.", "Rp 500.000",
          ["5 Halaman Website", "Domain .com", "Hosting 3 GB", "7 Email Perusahaan", "Free Copywriting Konten", "Integrasi WhatsApp", "Form Kontak", "Responsive Mobile", "SEO Dasar", "SSL", "Optimasi Kecepatan Website", "Revisi Unlimited", "Pengerjaan 6 Hari"],
          { normal: "Rp 1.500.000", save: "Hemat Rp 1.000.000", order: order("CP Essential", "Rp500.000") }),
        plan("Business", "CP Business", "Untuk perusahaan yang membutuhkan profil, layanan, dan publikasi bisnis yang lebih lengkap.", "Rp 1.000.000",
          ["Semua benefit CP Essential", "10 Halaman Website", "15 Email Perusahaan", "Google Analytics 4", "Google Tag Manager", "Tracking Lead WhatsApp", "Tracking Pengiriman Form", "Google Search Console", "Halaman Produk / Jasa", "Integrasi Sosial Media", "Struktur CTA Berorientasi Konversi", "Bantuan Teknis Setelah Website Aktif"],
          { normal: "Rp 2.500.000", save: "Hemat Rp 1.500.000", featured: true, badge: "UNTUK PERUSAHAAN BERKEMBANG", order: order("CP Business", "Rp1.000.000") }),
        plan("Signature", "CP Signature", "Untuk perusahaan dengan struktur informasi, produk, dan kebutuhan identitas digital yang lebih besar.", "Rp 1.500.000",
          ["Semua benefit CP Business", "20 Halaman Website", "30 Email Perusahaan", "Produk / Jasa + Halaman Detail", "Desain Lebih Custom / Premium", "Integrasi Meta Pixel", "Google Ads Conversion Tracking", "Tracking Conversion Lebih Lengkap", "Integrasi Tambahan", "Prioritas Pengerjaan & Dukungan"],
          { normal: "Rp 4.000.000", save: "Hemat Rp 2.500.000", order: order("CP Signature", "Rp1.500.000") }),
      ],
      note: "Kebutuhan di luar benefit paket dapat dikonsultasikan terlebih dahulu dengan tim Green Website Indonesia.",
    },
    portfolio: {
      eyebrow: "Portofolio Company Profile", title: "Contoh website untuk kebutuhan perusahaan dan institusi.", text: "Beberapa proyek company profile yang telah menjadi bagian dari portofolio Green Website Indonesia.", label: "Company Profile",
      ids: ["eca9e20c-a786-41bd-a8ce-9a4572ae39ce", "9387ee07-b676-41ae-920b-a9b16406d1fd", "10e00729-2d40-4ab4-b8a5-434673d4e5f3", "06e9455c-64dd-4049-ac36-f47230b8a5f1", "28dfb78f-31bb-4a98-ba8f-60617cfff043", "ff2fdf1f-a41f-49bb-b933-65ab602ec7b3", "7a11ea75-df08-4af0-8e50-1a2b7cbb5a72", "93c8a9a5-441c-4065-a9bb-ffcc92a4c567"],
    },
    process: {
      eyebrow: "Proses Pengerjaan", title: "Dari informasi perusahaan hingga website siap dipublikasikan.", text: "Setiap tahap dibuat jelas agar struktur, konten, dan tampilan website dapat dikembangkan secara terarah.",
      steps: [["Konsultasi", "Memahami profil perusahaan dan kebutuhan website."], ["Struktur", "Menyusun halaman dan informasi yang perlu ditampilkan."], ["Desain", "Membangun tampilan sesuai identitas perusahaan."], ["Development", "Menerapkan desain menjadi website responsif."], ["Review", "Pemeriksaan konten, fungsi, dan revisi sebelum publikasi."], ["Online", "Website dipublikasikan dan siap digunakan perusahaan."]],
    },
    support: { title: "Dukungan tidak berhenti saat website online.", text: "Green Website Indonesia menyediakan jalur dukungan untuk membantu kebutuhan website setelah peluncuran." },
    faq: {
      title: "Hal yang sering ditanyakan tentang Company Profile.", text: "Informasi singkat sebelum menentukan paket atau memulai konsultasi.",
      items: [
        ["Berapa lama pengerjaan website company profile?", "CP Essential mencantumkan estimasi pengerjaan 6 hari. Waktu pengerjaan paket lain dapat menyesuaikan jumlah halaman, kelengkapan materi, dan kebutuhan integrasi."],
        ["Apakah domain dan hosting sudah termasuk?", "Ya. Seluruh paket Website Company Profile mencakup domain .com dan hosting 3 GB."],
        ["Apakah website mobile friendly?", "Ya. Website dirancang responsif agar tetap nyaman diakses melalui desktop, tablet, dan perangkat mobile."],
        ["Apakah tersedia email perusahaan?", "Ya. CP Essential mencakup 7 email perusahaan, CP Business 15 email perusahaan, dan CP Signature 30 email perusahaan."],
        ["Apakah website dapat ditambah halaman setelah aktif?", "Bisa. Penambahan halaman, fitur, atau integrasi lain dapat dikonsultasikan sebagai pengembangan lanjutan sesuai kebutuhan."],
        ["Berapa biaya perpanjangan tahun berikutnya?", "Perpanjangan untuk paket Website Company Profile adalah Rp500.000 per tahun."],
      ],
    },
    cta: { eyebrow: "Mulai Proyek", title: "Bangun representasi digital perusahaan yang lebih profesional.", text: "Ceritakan kebutuhan perusahaan Anda. Tim Green Website Indonesia akan membantu menentukan struktur dan paket website yang sesuai.", label: "Konsultasi Company Profile" },
  },

  "landing-page": {
    seo: "Website Landing Page — Green Website Indonesia",
    eyebrow: "Website Landing Page",
    title: [["Satu halaman.", false], ["Satu tujuan.", true], ["Komunikasi yang lebih terarah.", false]],
    text: "Landing page custom untuk memperkenalkan produk, jasa, kampanye, atau penawaran dalam satu halaman yang terstruktur, mudah dipahami, dan nyaman diakses melalui desktop maupun perangkat mobile.",
    ctaLabel: "Konsultasikan Landing Page",
    wa: wa("Halo Green Website, saya ingin konsultasi Website Landing Page."),
    badges: ["Desain custom", "Domain .com", "Hosting 3 GB"],
    visual: { kicker: "Landing Page", title: "Komunikasi yang fokus pada satu tujuan.", tags: "Custom · Responsive · Terarah", icon: "sparkle" },
    about: {
      eyebrow: "Tentang Layanan", title: "Landing page yang dibangun untuk menyampaikan pesan dengan lebih fokus.",
      text: "Berbeda dari website company profile yang memuat informasi perusahaan dalam beberapa halaman, landing page mengarahkan seluruh informasi penting ke satu alur halaman. Struktur tersebut cocok ketika bisnis memiliki satu produk, satu jasa, satu kampanye, atau satu tindakan utama yang ingin dituju pengunjung.",
      points: [["Fokus Pesan", "Informasi disusun agar tidak bercabang dan mudah dipahami."], ["Alur Terarah", "Setiap section memiliki fungsi dalam perjalanan membaca pengunjung."], ["Mudah Diakses", "Satu halaman yang nyaman dibuka dari berbagai perangkat."]],
    },
    use: {
      eyebrow: "Cocok untuk", title: "Ketika bisnis membutuhkan satu halaman yang langsung pada tujuan.",
      text: "Landing page dapat digunakan untuk berbagai kebutuhan pemasaran, pengenalan layanan, dan komunikasi bisnis.",
      items: [
        ["sparkle", "Produk Baru", "Memperkenalkan produk dengan informasi, manfaat, dan ajakan tindakan dalam satu alur."],
        ["briefcase", "Jasa Profesional", "Menjelaskan layanan, keunggulan, proses, serta jalur konsultasi secara lebih terarah."],
        ["megaphone", "Campaign", "Halaman khusus untuk promosi atau kampanye dengan pesan dan tujuan yang lebih fokus."],
        ["chat", "Lead Generation", "Mengarahkan pengunjung untuk menghubungi bisnis melalui WhatsApp atau jalur kontak lain."],
        ["user", "Personal Brand", "Menampilkan profil, kompetensi, layanan, dan kontak dalam satu halaman profesional."],
        ["calendar", "Event & Program", "Menyampaikan informasi program, jadwal, benefit, dan pendaftaran dalam struktur ringkas."],
      ],
    },
    flow: { eyebrow: "Struktur", title: "Setiap bagian punya peran dalam alur komunikasi.", text: "Susunan final selalu menyesuaikan kebutuhan, tetapi landing page umumnya dibangun dalam alur yang mudah diikuti.", items: ["Hero", "Kebutuhan", "Solusi", "Keunggulan", "Produk / Layanan", "Bukti & Informasi", "CTA"] },
    pricing: {
      eyebrow: "Paket Landing Page", title: "Tiga pilihan untuk kebutuhan yang berbeda.",
      text: "Mulai dari kebutuhan sederhana hingga landing page dengan analitik, integrasi, dan pendekatan desain yang lebih custom.",
      plans: [
        plan("Essential", "LP Essential", "Cocok untuk landing page sederhana yang sudah siap digunakan untuk kebutuhan bisnis.", "Rp 500.000",
          ["1 Halaman Website", "Domain .com", "Hosting 3 GB", "1 Email Perusahaan", "Free Copywriting Konten", "Integrasi WhatsApp", "Form Kontak", "Responsive Mobile", "SEO Dasar", "SSL", "Optimasi Kecepatan Website", "Revisi Unlimited", "Pengerjaan 2 Hari"],
          { order: order("LP Essential", "Rp500.000") }),
        plan("Business", "LP Business", "Untuk bisnis yang ingin landing page lebih lengkap dan siap dipantau performanya.", "Rp 1.000.000",
          ["Semua benefit LP Essential", "3 Email Perusahaan", "Google Analytics 4", "Google Tag Manager", "Tracking Lead WhatsApp", "Tracking Pengiriman Form", "Google Search Console", "Section Lebih Lengkap", "Integrasi Sosial Media", "Struktur CTA Berorientasi Konversi", "Bantuan Teknis Setelah Website Aktif"],
          { featured: true, badge: "UNTUK BISNIS BERKEMBANG", order: order("LP Business", "Rp1.000.000") }),
        plan("Signature", "LP Signature", "Untuk brand yang membutuhkan landing page lebih custom dengan integrasi yang lebih luas.", "Rp 1.500.000",
          ["Semua benefit LP Business", "5 Email Perusahaan", "Desain Lebih Custom / Premium", "Integrasi Meta Pixel", "Google Ads Conversion Tracking", "Tracking Conversion Lebih Lengkap", "Integrasi Tambahan", "Prioritas Pengerjaan & Dukungan"],
          { order: order("LP Signature", "Rp1.500.000") }),
      ],
      note: "Kebutuhan di luar benefit paket dapat dikonsultasikan terlebih dahulu dengan tim Green Website Indonesia.",
    },
    portfolio: {
      eyebrow: "Portofolio Landing Page", title: "Contoh pendekatan untuk kebutuhan yang berbeda.", text: "Beberapa proyek landing page yang telah menjadi bagian dari portofolio Green Website Indonesia.", label: "Landing Page",
      ids: ["4d8cda67-4c3e-4924-b932-5fe7e8a0bb74", "0db029af-878b-4423-90ec-90f21c4a354a", "5a760ce9-7388-421e-a6c0-2f3b312b2c81", "50b3aed9-a247-44ef-9985-f14c4176cea0", "e1e46a58-20cd-4f61-97ac-730616e1a118", "d032df96-318b-45c6-be00-80ea509e47ae", "a767751f-c833-4b5c-bf3a-43d488ea1aad", "f4d25af2-b313-4980-b988-4015e6329b10"],
    },
    process: {
      eyebrow: "Proses Pengerjaan", title: "Dari kebutuhan hingga website siap digunakan.", text: "Proses dibuat ringkas agar setiap tahap memiliki arah dan dapat dikomunikasikan dengan jelas.",
      steps: [["Konsultasi", "Memahami bisnis dan kebutuhan landing page."], ["Perencanaan", "Menyusun struktur informasi dan kebutuhan konten."], ["Desain", "Membangun tampilan sesuai kebutuhan brand."], ["Development", "Menerapkan desain menjadi website responsif."], ["Review", "Pemeriksaan dan revisi sebelum publikasi."], ["Online", "Landing page dipublikasikan dan siap digunakan."]],
    },
    support: { title: "Dukungan tidak berhenti saat website online.", text: "Green Website Indonesia menyediakan jalur dukungan untuk membantu kebutuhan website setelah peluncuran." },
    faq: {
      title: "Hal yang sering ditanyakan tentang Landing Page.", text: "Informasi singkat sebelum Anda menentukan paket atau memulai konsultasi.",
      items: [
        ["Berapa lama pengerjaan landing page?", "LP Essential mencantumkan estimasi pengerjaan 2 hari. LP Business dan LP Signature mencakup benefit dasar tersebut, dengan prioritas tambahan pada LP Signature. Waktu dapat bergantung pada kelengkapan materi dan kebutuhan proyek."],
        ["Apakah sudah termasuk domain dan hosting?", "Ya. Seluruh paket Landing Page pada halaman ini mencakup domain .com dan hosting 3 GB."],
        ["Apakah konten dibantu oleh Green Website?", "Ya. Seluruh paket mencakup free copywriting konten sesuai benefit yang tercantum."],
        ["Berapa biaya perpanjangan tahun berikutnya?", "Perpanjangan untuk paket Landing Page adalah Rp500.000 per tahun."],
        ["Apakah landing page bisa dikembangkan lagi?", "Kebutuhan pengembangan lanjutan dapat dikonsultasikan dengan tim Green Website Indonesia sesuai fungsi yang ingin ditambahkan."],
      ],
    },
    cta: { eyebrow: "Mulai Proyek", title: "Punya produk atau layanan yang perlu diperkenalkan dengan lebih terarah?", text: "Sampaikan kebutuhan Anda. Kami akan membantu menentukan paket dan arah landing page yang sesuai.", label: "Konsultasi Landing Page" },
  },

  "toko-online": {
    seo: "Website Toko Online — Green Website Indonesia",
    eyebrow: "Website Toko Online",
    title: [["Bangun sistem penjualan online yang", false], ["bekerja lebih terstruktur.", true]],
    text: "Toko online custom untuk mengelola produk, checkout, pembayaran, ongkir, pengiriman, hingga pelanggan dalam satu website yang dirancang sesuai kebutuhan bisnis Anda.",
    ctaLabel: "Konsultasikan Toko Online",
    wa: wa("Halo Green Website, saya ingin konsultasi Website Toko Online."),
    badges: ["Payment Gateway", "RajaOngkir", "Mulai Rp2,5 juta"],
    shopVisual: true,
    about: {
      eyebrow: "Tentang Layanan", title: "Lebih dari sekadar katalog produk.",
      text: "Website toko online dirancang sebagai sistem penjualan yang membantu pelanggan menemukan produk, melakukan checkout, memilih pembayaran, menghitung ongkir, dan mengikuti proses pengiriman dengan alur yang lebih rapi.",
      points: [["Penjualan", "Produk, keranjang, checkout, dan pengelolaan pesanan dalam satu sistem."], ["Pembayaran", "QRIS dan Virtual Account untuk pengalaman transaksi yang lebih praktis."], ["Pengiriman", "Cek ongkir hingga otomasi resi dan pickup sesuai paket yang dipilih."]],
    },
    use: {
      eyebrow: "Fitur Penjualan", title: "Fondasi toko online untuk proses penjualan yang lebih rapi.",
      text: "Fitur inti disusun untuk membantu pelanggan berbelanja dengan mudah dan membantu bisnis mengelola transaksi dari dashboard.",
      items: [
        ["cart", "Produk & Checkout", "Katalog, halaman detail, keranjang belanja, dan checkout dalam alur yang jelas."],
        ["card", "Payment Gateway", "Pembayaran QRIS dan Virtual Account terintegrasi langsung pada proses transaksi."],
        ["truck", "Cek Ongkir", "Perhitungan ongkos kirim otomatis berdasarkan asal, tujuan, dan layanan ekspedisi."],
        ["bell", "Notifikasi Order", "Informasi pesanan tersusun agar transaksi lebih mudah dipantau dan ditindaklanjuti."],
        ["dashboard", "Dashboard Pesanan", "Kelola data pesanan, status transaksi, dan informasi pelanggan dari satu area admin."],
        ["devices", "Responsive Commerce", "Pengalaman belanja tetap nyaman di desktop, tablet, maupun perangkat mobile."],
      ],
    },
    flow: { eyebrow: "Alur Belanja", title: "Dari produk hingga barang diproses untuk dikirim.", text: "Alur dibuat ringkas agar pelanggan memahami proses transaksi dan bisnis dapat mengelola order secara lebih terstruktur.", items: ["Pilih Produk", "Keranjang & Checkout", "Pembayaran", "Resi & Pickup", "Status Pengiriman"] },
    commerce: true,
    pricing: {
      eyebrow: "Paket Toko Online", title: "Tiga tingkat sistem untuk kebutuhan penjualan yang berbeda.",
      text: "Mulai dari fondasi toko online lengkap, otomasi proses pengiriman, hingga customer account system untuk pengalaman pelanggan yang lebih menyeluruh.",
      plans: [
        plan("Essential", "Commerce Essential", "Untuk bisnis yang ingin mulai berjualan online dengan sistem transaksi yang sudah lengkap.", "Rp 2.500.000",
          ["Produk Unlimited", "Domain .com / .id / .co.id", "Hosting 3 GB", "Revisi Unlimited", "Keranjang & Checkout Online", "Payment Gateway QRIS & VA", "Cek Ongkir Otomatis RajaOngkir", "Notifikasi Order", "10 Email Perusahaan", "Dashboard Pengelolaan Pesanan", "Responsive, SEO Dasar & SSL", "Pengerjaan ±6 Hari"],
          { order: order("Commerce Essential", "Rp2.500.000") }),
        plan("Automation", "Commerce Automation", "Untuk toko online yang ingin mengurangi pekerjaan manual pada order dan proses pengiriman.", "Rp 5.000.000",
          ["Semua benefit Commerce Essential", "Pembuatan Resi Otomatis", "Pickup Kurir Otomatis", "Tracking Pengiriman", "Print Label Pengiriman", "Status Pesanan Lebih Terstruktur", "20 Email Perusahaan", "Google Analytics", "Google Search Console", "Integrasi Meta Pixel", "Prioritas Dukungan"],
          { featured: true, badge: "OTOMASI OPERASIONAL", order: order("Commerce Automation", "Rp5.000.000") }),
        plan("Signature", "Commerce Signature", "Untuk bisnis yang membutuhkan toko online sekaligus customer account system yang lebih lengkap.", "Rp 7.500.000",
          ["Semua benefit Commerce Automation", "Login & Registrasi Member", "Dashboard Member", "Riwayat & Detail Pesanan", "Status Pesanan Member", "Profil & Alamat Pengiriman Tersimpan", "Manajemen Data Pelanggan", "30 Email Perusahaan", "Desain Lebih Custom / Premium", "Integrasi Tambahan", "Prioritas Pengerjaan & Dukungan"],
          { order: order("Commerce Signature", "Rp7.500.000") }),
      ],
      note: "Kebutuhan integrasi di luar cakupan paket dapat dikonsultasikan terlebih dahulu dengan tim Green Website Indonesia.",
    },
    portfolio: {
      eyebrow: "Portofolio Toko Online", title: "Contoh proyek untuk kebutuhan katalog dan penjualan online.", text: "Beberapa proyek yang mewakili karakter visual dan kebutuhan bisnis yang berbeda.", label: "Toko Online",
      ids: ["737a5b5a-a218-4555-a3a5-76db7bc8c070", "ad257851-4742-4177-b833-96738d86b22c", "ef9ebb71-5ea1-4d68-9f80-bdf73f3f0206", "353e8ba5-a403-445e-abfd-da82a711aa0d", "facf296c-5d6e-4489-b381-e93cf3df7a67", "2a04f9d8-c3ad-48c1-a17b-f55bb4a8bfba", "dd1af265-527a-4b52-9ef7-c51275bfbd4b", "7db83586-d118-4849-8d7e-2cb45e16be4e"],
      soft: true,
    },
    process: {
      eyebrow: "Proses Pengerjaan", title: "Dari katalog hingga sistem transaksi siap digunakan.", text: "Setiap tahap disusun untuk memastikan struktur produk, pembayaran, pengiriman, dan pengalaman pelanggan berjalan dengan jelas.",
      steps: [["Konsultasi", "Memahami produk, alur order, pembayaran, dan pengiriman."], ["Arsitektur", "Menyusun katalog, checkout, dashboard, dan integrasi."], ["Desain", "Membangun visual toko sesuai karakter brand."], ["Development", "Menerapkan fungsi toko, pembayaran, dan pengiriman."], ["Testing", "Menguji checkout, payment, ongkir, dan alur order."], ["Online", "Website dipublikasikan dan siap menerima transaksi."]],
    },
    support: { title: "Dukungan tetap tersedia saat toko mulai berjalan.", text: "Green Website Indonesia menyediakan jalur dukungan untuk membantu kebutuhan teknis dan pengembangan setelah website dipublikasikan." },
    faq: {
      title: "Hal yang sering ditanyakan tentang Toko Online.", text: "Informasi singkat sebelum menentukan paket atau memulai konsultasi.",
      items: [
        ["Apakah produk bisa ditambah setelah website aktif?", "Ya. Produk dapat dikelola melalui sistem toko online sesuai struktur admin yang tersedia."],
        ["Metode pembayaran apa yang didukung?", "Halaman layanan ini menampilkan QRIS serta Virtual Account untuk BCA, CIMB Niaga, BRI, BNI, Mandiri, dan Permata. Ketersediaan kanal mengikuti aktivasi payment gateway merchant."],
        ["Apa perbedaan paket Essential dan Automation?", "Automation menambahkan alur fulfillment yang lebih otomatis, termasuk pembuatan resi, pickup, tracking, dan kebutuhan label pengiriman."],
        ["Apa yang didapat pada Commerce Signature?", "Commerce Signature mencakup seluruh benefit Automation serta customer account system seperti login member, dashboard, riwayat pesanan, status order, profil, dan alamat tersimpan."],
        ["Berapa biaya admin pembayaran?", "Biaya admin yang ditampilkan Green Website Indonesia adalah 2% untuk QRIS dan Rp5.000 per transaksi untuk Virtual Account."],
        ["Berapa biaya perpanjangan tahun berikutnya?", "Perpanjangan paket Website Toko Online adalah Rp500.000 per tahun."],
      ],
    },
    cta: { eyebrow: "Mulai Toko Online", title: "Bangun sistem penjualan yang siap tumbuh bersama bisnis Anda.", text: "Ceritakan produk, alur order, metode pembayaran, dan kebutuhan pengiriman Anda. Tim Green Website Indonesia akan membantu menentukan paket yang sesuai.", label: "Konsultasikan Toko Online" },
  },
};

export { SUPPORT_ITEMS };
