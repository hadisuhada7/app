export const WA_NUMBER = "628977430802";
export const wa = (text) => `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(text)}`;
export const WA = {
  konsultasi: wa("Halo Green Website, saya ingin konsultasi pembuatan website."),
  chat: wa("Halo Green Website, saya ingin konsultasi."),
  afterSales: wa("Halo Tim After Sales Green Website, saya memerlukan bantuan terkait layanan website saya."),
  tanya: wa("Halo Green Website, saya ingin bertanya tentang layanan website."),
  proyek: wa("Halo Green Website, saya ingin mendiskusikan proyek digital."),
};

export const CONTACT = {
  phone: "0897 7430 802",
  email: "care@greenwebsite.co.id",
  offices: [
    { title: "Kantor Operasional — Cirebon", address: "Jl. Saputra No.9, Sutawinangun, Kec. Kedawung, Kota Cirebon, Jawa Barat 45153" },
    { title: "Kantor Administratif — Jakarta", address: "Menara Cakrawala Lantai 12 Unit 5A, Jl. M.H. Thamrin No.9, Menteng, Jakarta Pusat, DKI Jakarta 10340" },
  ],
};

export const MAPS_URL = "https://www.google.com/maps/search/?api=1&query=Menara%20Cakrawala&query_place_id=ChIJve0iVi_0aS4ROBHLNryxvhA";
export const MAPS_EMBED = "https://www.google.com/maps?q=Menara%20Cakrawala%2C%20Jl.%20M.H.%20Thamrin%20No.%209%2C%20Jakarta%20Pusat%2C%20DKI%20Jakarta%2010340&z=17&output=embed";

export const SERVICES = [
  {
    slug: "company-profile", icon: "building", title: "Website Company Profile", short: "Profil bisnis & perusahaan",
    home: "Hadirkan profil perusahaan, layanan, dan pengalaman dalam website yang terstruktur. Bantu calon pelanggan dan mitra mengenal bisnis Anda secara profesional.",
    about: "Website perusahaan untuk menyampaikan profil, layanan, keunggulan, dan informasi bisnis secara profesional.",
    portfolio: "Untuk perusahaan dan lembaga yang membutuhkan profil, layanan, legalitas, kredibilitas, serta informasi kontak dalam struktur yang profesional.",
  },
  {
    slug: "landing-page", icon: "layout", title: "Website Landing Page", short: "Halaman fokus promosi",
    home: "Sampaikan penawaran produk, jasa, atau kampanye melalui halaman yang berfokus pada satu tujuan, dengan informasi dan langkah berikutnya yang jelas.",
    about: "Halaman terarah untuk kampanye, produk, layanan, atau kebutuhan komunikasi dengan fokus yang spesifik.",
    portfolio: "Untuk produk, jasa, promosi, atau kampanye yang membutuhkan halaman terarah dengan fokus komunikasi dan tujuan yang jelas.",
  },
  {
    slug: "toko-online", icon: "cart", title: "Website Toko Online", short: "Katalog & penjualan online",
    home: "Tampilkan produk secara terorganisasi dan bantu pelanggan menemukan informasi sebelum membeli. Fitur pemesanan disesuaikan dengan kebutuhan bisnis.",
    about: "Katalog dan pengalaman belanja digital yang disusun agar produk lebih mudah ditemukan dan dipahami.",
    portfolio: "Untuk bisnis yang membutuhkan katalog produk, detail produk, informasi pembelian, dan alur transaksi yang lebih terstruktur.",
  },
  {
    slug: "website-custom", icon: "code", title: "Website Custom", short: "Fungsi sesuai kebutuhan",
    home: "Kembangkan website dengan fitur dan alur kerja khusus. Kebutuhan sistem serta integrasi dibahas agar pengembangan memiliki arah yang jelas.",
    about: "Pengembangan website dengan struktur dan fungsi yang menyesuaikan proses maupun kebutuhan khusus bisnis.",
    portfolio: "Untuk kebutuhan website dengan desain, struktur, integrasi, atau fungsi khusus yang disesuaikan dengan proses bisnis.",
  },
  {
    slug: "portal-berita", icon: "globe", title: "Website Berita", short: "Portal publikasi & redaksi",
    home: "Dirancang untuk media, organisasi dan portal informasi yang membutuhkan struktur artikel, kategori, pencarian dan pengelolaan konten yang jelas.",
    about: "Platform publikasi untuk mengelola kategori, artikel, redaksi, dan informasi secara terstruktur.",
    portfolio: "Untuk media dan organisasi yang membutuhkan portal publikasi dengan kategori, artikel, redaksi, dan pengelolaan konten.",
  },
  {
    slug: "web-application", icon: "layers", title: "Web Application", short: "Sistem & dashboard berbasis web",
    home: "Cocok untuk sistem internal maupun layanan digital yang membutuhkan dashboard, database, autentikasi dan alur kerja custom melalui browser.",
    about: "Aplikasi berbasis web untuk membantu proses kerja, pengelolaan data, dan kebutuhan operasional tertentu.",
    portfolio: "Untuk sistem berbasis browser dengan dashboard, autentikasi, database, workflow, dan fungsi operasional yang lebih kompleks.",
  },
  {
    slug: "mobile-app", icon: "phone", title: "Mobile App", short: "Aplikasi untuk kebutuhan bisnis",
    home: "Pengalaman aplikasi dibuat dengan alur yang fokus, interface responsif dan ruang integrasi dengan backend atau sistem bisnis yang dibutuhkan.",
    about: "Pengembangan aplikasi mobile yang disesuaikan dengan kebutuhan pengguna dan tujuan produk digital.",
    portfolio: "Untuk aplikasi mobile yang dirancang sesuai kebutuhan bisnis, layanan, pengguna, serta fungsi digital yang ingin dikembangkan.",
  },
  {
    slug: "managed-hosting-server", icon: "server", title: "Managed Hosting & Server", short: "Infrastruktur yang dikelola",
    home: "Penyiapan dan pengelolaan infrastruktur untuk membantu deployment, keamanan dasar, backup dan pemantauan layanan berjalan lebih terorganisir.",
    about: "Infrastruktur untuk mendukung website dan aplikasi dengan pengelolaan teknis yang lebih terarah.",
    portfolio: "Untuk kebutuhan hosting dan server yang dikelola agar infrastruktur website atau sistem tetap terarah dan mudah dipantau.",
  },
];

export const CLIENTS = [
  { name: "PDAM", src: "/clients/pdam.png" },
  { name: "VIAR Motor Indonesia", src: "/clients/viar.png" },
  { name: "Hyundai", src: "/clients/hyundai.png" },
  { name: "Indosat HiFi", src: "/clients/indosat.png" },
  { name: "Toyota", src: "/clients/toyota.png" },
];

export const HOME_PORTFOLIO = [
  { label: "Landing Page", name: "Toyota Cibubur", url: "https://showroomtoyotacibubur.com/", image: "/uploads/portfolio/fd410dbd-4b82-40b5-9395-6089c7440b5b.webp" },
  { label: "E-Commerce · Fashion", name: "Elśvin Shop", url: "https://elsvinshop.com/", image: "/uploads/portfolio/7db83586-d118-4849-8d7e-2cb45e16be4e.webp" },
  { label: "E-Commerce · Pertanian", name: "Ichalans Berkah Utama", url: "https://ichalans.com/", image: "/uploads/portfolio/dd1af265-527a-4b52-9ef7-c51275bfbd4b.webp" },
  { label: "E-Commerce · Fashion", name: "The Overheard Post", url: "https://theoverheardpost.com/", image: "/uploads/portfolio/2a04f9d8-c3ad-48c1-a17b-f55bb4a8bfba.webp" },
  { label: "E-Commerce · Spiritual", name: "Madam Donna", url: "https://madamdonna.com/id", image: "/uploads/portfolio/facf296c-5d6e-4489-b381-e93cf3df7a67.webp" },
  { label: "E-Commerce · Fashion", name: "Jakarta Football Admirer", url: "https://jakartafootballadmirer.com/", image: "/uploads/portfolio/353e8ba5-a403-445e-abfd-da82a711aa0d.webp" },
  { label: "E-Commerce · Fashion", name: "Gudang Bmb", url: "https://gudangbmb.com/", image: "/uploads/portfolio/ef9ebb71-5ea1-4d68-9f80-bdf73f3f0206.webp" },
  { label: "Company Profile · komunitas public speaking", name: "Young Speaker Club", url: "https://youngspeakerclub.com", image: "/uploads/portfolio/92419315-1f5a-45b9-92cc-af98f045ea5e.webp" },
];

export const APPROACH = [
  { icon: "palette", title: "Desain yang Mewakili Bisnis", text: "Warna, tipografi, dan elemen visual diarahkan sesuai karakter bisnis serta kesan yang ingin Anda bangun." },
  { icon: "list", title: "Informasi yang Terstruktur", text: "Profil, layanan, dan kontak disusun dengan urutan yang jelas agar pengunjung mudah memahami bisnis Anda." },
  { icon: "devices", title: "Nyaman di Berbagai Perangkat", text: "Tata letak mendukung kenyamanan penggunaan melalui ponsel, tablet, maupun desktop." },
  { icon: "pointer", title: "Fungsi dengan Tujuan yang Jelas", text: "Menu, tombol, dan formulir membantu pengunjung menemukan informasi serta menghubungi tim Anda." },
  { icon: "clipboard", title: "Lingkup Kerja yang Disepakati", text: "Kebutuhan halaman, fitur, materi, dan tahapan dibahas sejak awal agar pekerjaan memiliki arah yang jelas." },
  { icon: "trend", title: "Pengembangan yang Terencana", text: "Kebutuhan lanjutan dibahas berdasarkan kondisi website dan prioritas bisnis Anda." },
];

export const HOME_STEPS = [
  { title: "Konsultasi Kebutuhan", text: "Mendiskusikan bisnis, tujuan website, target pengunjung, serta kebutuhan halaman dan fitur." },
  { title: "Materi & Arah Desain", text: "Menyiapkan logo, informasi, dan foto. Menentukan struktur serta arah tampilan sesuai identitas bisnis." },
  { title: "Pengembangan Website", text: "Membangun halaman dan fitur berdasarkan materi, arah desain, serta lingkup yang disepakati." },
  { title: "Peninjauan & Revisi", text: "Meninjau hasil bersama Anda, mengolah masukan, dan memeriksa tampilan serta fungsi website." },
  { title: "Peluncuran & Dukungan", text: "Mengaktifkan website setelah disetujui dan menyampaikan informasi pengelolaan serta jalur bantuan." },
];

export const AFTER_SALES = [
  { icon: "user", title: "Member Area", text: "Akses layanan hosting, domain, dan email bisnis melalui Member Area. Kelola kebutuhan layanan website Anda dengan lebih mudah dari satu tempat." },
  { icon: "wrench", title: "Bantuan Teknis", text: "Dapatkan bantuan pemeriksaan dan penanganan kendala teknis tanpa biaya tambahan sesuai cakupan layanan yang Anda gunakan." },
  { icon: "chat", title: "Konsultasi Selamanya", text: "Diskusikan pertanyaan, ide, dan kebutuhan website bersama tim kami kapan pun Anda memerlukan arahan, tanpa biaya konsultasi." },
  { icon: "cloud", title: "Backup Harian", text: "Data website dicadangkan setiap hari untuk membantu proses pemulihan saat diperlukan. Ketersediaan pemulihan mengikuti data backup yang tersimpan." },
  { icon: "chart", title: "Pengembangan Lanjutan", text: "Butuh halaman, fitur, atau integrasi baru? Konsultasikan kebutuhan Anda untuk merencanakan pengembangan sebagai pekerjaan terpisah sesuai kesepakatan." },
  { icon: "book", title: "Panduan Pengelolaan Website", text: "Dapatkan panduan untuk mengelola teks, gambar, dan konten secara mandiri sesuai fitur website Anda. Setelah website online, perubahan konten menjadi tanggung jawab klien." },
];

export const ABOUT_SUPPORT = [
  { icon: "user", title: "Member Area", text: "Akses terpusat untuk melihat informasi dan layanan website yang tersedia bagi klien." },
  { icon: "wrench", title: "Bantuan Teknis", text: "Jalur bantuan untuk pemeriksaan dan penanganan kendala teknis sesuai cakupan layanan." },
  { icon: "chat", title: "Konsultasi Selamanya", text: "Ruang konsultasi untuk membahas pertanyaan, ide, dan kebutuhan lanjutan terkait website." },
  { icon: "cloud", title: "Backup Harian", text: "Pencadangan data website dilakukan untuk membantu proses pemulihan ketika diperlukan." },
  { icon: "chart", title: "Pengembangan Lanjutan", text: "Kebutuhan fitur atau pengembangan baru dapat direncanakan sebagai pekerjaan lanjutan." },
  { icon: "book", title: "Panduan Pengelolaan Website", text: "Panduan tersedia agar klien dapat mengelola konten sesuai fitur website yang digunakan." },
];

export const ARTICLES = [
  {
    slug: "memilih-jenis-website", kicker: "PANDUAN WEBSITE", tag: "Jenis Website", title: "Memilih Jenis Website Sesuai Kebutuhan Bisnis", tone: "green",
    cat: "Perencanaan Website", read: "7 menit baca", icon: "globe", mockKicker: "PERENCANAAN WEBSITE",
    excerpt: "Jenis website sebaiknya ditentukan dari tujuan bisnis, informasi yang perlu ditampilkan, dan tindakan yang diharapkan dari pengunjung.",
    body: [
      "Setiap bisnis memiliki tujuan yang berbeda saat membangun kehadiran digital. Sebelum memulai, tentukan apa yang paling perlu disampaikan kepada pengunjung.",
      "Website company profile cocok untuk memperkenalkan perusahaan dan layanan. Landing page membantu satu penawaran atau kampanye tersampaikan dengan fokus. Toko online dibutuhkan saat produk perlu ditampilkan secara terorganisasi.",
      "Diskusikan tujuan dan kebutuhan Anda bersama tim kami agar jenis website yang dipilih benar-benar relevan.",
    ],
  },
  {
    slug: "persiapan-membuat-website", kicker: "PERSIAPAN WEBSITE", tag: "Materi Website", title: "Materi yang Perlu Disiapkan Sebelum Membuat Website", tone: "cream",
    cat: "Persiapan Website", read: "6 menit baca", icon: "briefcase", mockKicker: "PERSIAPAN WEBSITE",
    excerpt: "Materi yang rapi sejak awal membuat proses desain dan pengembangan website lebih terarah, cepat, dan sesuai identitas bisnis.",
    body: [
      "Materi yang lengkap membantu proses pengerjaan berjalan lebih lancar dan terarah.",
      "Siapkan logo, profil singkat bisnis, daftar layanan atau produk, informasi kontak, serta foto pendukung dengan kualitas yang baik.",
      "Materi lain seperti legalitas, testimoni, atau portofolio dapat ditambahkan sesuai kebutuhan dan dibahas saat konsultasi.",
    ],
  },
  {
    slug: "merawat-informasi-website", kicker: "SETELAH ONLINE", tag: "Informasi Website", title: "Merawat Informasi Website Setelah Peluncuran", tone: "mint",
    cat: "Pengelolaan Website", read: "6 menit baca", icon: "check", mockKicker: "PENGELOLAAN WEBSITE",
    excerpt: "Website yang sudah online tetap membutuhkan informasi yang akurat agar pengunjung tidak menerima layanan, alamat, harga, atau kontak yang sudah berubah.",
    body: [
      "Website yang aktif perlu informasi yang selalu relevan agar tetap dipercaya pengunjung.",
      "Periksa secara berkala informasi kontak, jam operasional, harga, dan layanan. Perbarui foto dan konten ketika ada perubahan pada bisnis Anda.",
      "Gunakan panduan pengelolaan website dan hubungi tim kami bila memerlukan bantuan teknis.",
    ],
  },
];

export const FAQ = [
  { q: "Apa yang perlu disiapkan?", a: "Siapkan logo, profil bisnis, informasi layanan, kontak, dan foto pendukung. Kebutuhan lainnya dibahas saat konsultasi." },
  { q: "Berapa lama pengerjaannya?", a: "Estimasi disampaikan setelah kebutuhan, jumlah halaman, dan fitur disepakati. Kesiapan materi turut menentukan jadwal." },
  { q: "Bisa memakai domain sendiri?", a: "Bisa. Tim kami akan memeriksa pengaturan domain dan membantu proses penyambungannya." },
  { q: "Bisa mengelola konten sendiri?", a: "Bisa sesuai sistem dan layanan yang dipilih. Sampaikan kebutuhan pengelolaan konten sejak awal." },
  { q: "Ada bantuan setelah website aktif?", a: "Ada. Bantuan teknis dan pemeliharaan mengikuti cakupan layanan serta kesepakatan proyek." },
];

export const ABOUT_STEPS = [
  { title: "Memahami Kebutuhan", text: "Kami mempelajari tujuan, audiens, informasi, dan fungsi yang diperlukan." },
  { title: "Perencanaan", text: "Struktur konten, ruang lingkup, dan arah pengerjaan disusun sebelum produksi dimulai." },
  { title: "Produksi", text: "Desain dan pengembangan dikerjakan berdasarkan kebutuhan yang telah disepakati." },
  { title: "Pengujian", text: "Tampilan, fungsi, responsivitas, dan aspek teknis diperiksa sebelum website dipublikasikan." },
  { title: "Peluncuran & Dukungan", text: "Website diaktifkan dan dilanjutkan dengan akses dukungan sesuai layanan yang digunakan." },
];

export const PRINCIPLES = [
  { icon: "chat", title: "Kejelasan", text: "Kebutuhan, ruang lingkup, dan proses dibicarakan dengan bahasa yang mudah dipahami." },
  { icon: "sparkle", title: "Kualitas", text: "Detail visual dan teknis diperhatikan agar hasil sesuai fungsi dan identitas bisnis." },
  { icon: "shield", title: "Keamanan", text: "Aspek teknis dan infrastruktur dipertimbangkan sebagai bagian dari keberlangsungan website." },
  { icon: "layers", title: "Relevansi", text: "Solusi dipilih berdasarkan kebutuhan nyata, bukan sekadar menambah fitur yang tidak diperlukan." },
  { icon: "chart", title: "Keberlanjutan", text: "Website dibangun dengan mempertimbangkan pengelolaan dan pengembangan pada tahap berikutnya." },
  { icon: "headset", title: "Dukungan", text: "Setelah peluncuran, klien tetap memiliki jalur bantuan untuk kebutuhan teknis dan konsultasi." },
];

export const LEGAL = [
  { icon: "briefcase", label: "Nomor AHU", value: "AHU-070958.AH.01.30.Tahun 2024", note: "Administrasi Hukum Umum" },
  { icon: "globe", label: "NIB", value: "2101250112574", note: "Nomor Induk Berusaha" },
  { icon: "shield", label: "NPWP Badan", value: "0227 0423 8943 7000", note: "PT Green Website Indonesia" },
];

export const PORTFOLIO_TABS = ["Landing Page", "Company Profile", "Toko Online", "Portal Berita"];
