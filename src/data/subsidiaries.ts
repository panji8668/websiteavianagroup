export interface Subsidiary {
  id: string;
  name: string;
  sector: string;
  shortDesc: string;
  fullDesc: string;
  services: string[];
  highlights: string[];
  contact: {
    address: string;
    phone: string;
    email: string;
    website?: string;
  };
  established: string;
}

export const subsidiaries: Subsidiary[] = [
  {
    id: 'aviana-teknologi-nusantara',
    name: 'PT Aviana Teknologi Nusantara',
    sector: 'Teknologi',
    shortDesc: 'Mengembangkan solusi perangkat lunak, layanan cloud, dan transformasi digital untuk klien korporat.',
    fullDesc: 'PT Aviana Teknologi Nusantara adalah anak perusahaan yang mengkhususkan diri dalam pengembangan solusi teknologi informasi terdepan. Dengan tim ahli yang berpengalaman lebih dari 10 tahun, kami menyediakan layanan transformasi digital end-to-end untuk perusahaan-perusahaan besar di Indonesia.',
    services: [
      'Pengembangan Aplikasi Web & Mobile',
      'Cloud Infrastructure & Migration',
      'Data Analytics & Business Intelligence',
      'Cybersecurity Solutions',
      'Digital Transformation Consulting',
      'AI & Machine Learning Implementation'
    ],
    highlights: [
      'Telah melayani lebih dari 200+ klien korporat',
      'Bersertifikat ISO 27001 untuk keamanan informasi',
      'Tim developer bersertifikat cloud (AWS, Azure, GCP)',
      'R&D center dengan fokus pada teknologi emerging'
    ],
    contact: {
      address: 'Jl. Sudirman No. 123, Jakarta Pusat 10220',
      phone: '+62 21 5555-1001',
      email: 'info@avianatech.co.id',
      website: 'www.avianatech.co.id'
    },
    established: '2015'
  },
  {
    id: 'aviana-agro-lestari',
    name: 'PT Aviana Agro Lestari',
    sector: 'Perkebunan',
    shortDesc: 'Mengelola lahan perkebunan berkelanjutan untuk produksi komoditas unggulan dengan praktik ramah lingkungan.',
    fullDesc: 'PT Aviana Agro Lestari berkomitmen pada pengembangan agribisnis berkelanjutan dengan mengelola lebih dari 50.000 hektar lahan perkebunan. Kami menerapkan praktik pertanian modern yang ramah lingkungan untuk menghasilkan komoditas berkualitas tinggi.',
    services: [
      'Perkebunan Kelapa Sawit Berkelanjutan',
      'Budidaya Karet & Kopi Premium',
      'Pengolahan & Distribusi Hasil Perkebunan',
      'Konsultasi Agribisnis',
      'Program Kemitraan Petani',
      'Sertifikasi Organic & Fair Trade'
    ],
    highlights: [
      'Sertifikat RSPO (Roundtable on Sustainable Palm Oil)',
      'Pengelolaan 50.000+ hektar lahan produktif',
      'Program CSR untuk pemberdayaan masyarakat sekitar',
      'Teknologi precision farming untuk efisiensi tinggi'
    ],
    contact: {
      address: 'Jl. Plantation Estate, Riau 28300',
      phone: '+62 761 5555-2001',
      email: 'info@avianaagro.co.id'
    },
    established: '2010'
  },
  {
    id: 'aviana-energi-nusantara',
    name: 'PT Aviana Energi Nusantara',
    sector: 'Energi',
    shortDesc: 'Berspesialisasi dalam pembangkit energi terbarukan dan solusi efisiensi energi untuk industri besar.',
    fullDesc: 'PT Aviana Energi Nusantara adalah pelopor dalam pengembangan energi terbarukan di Indonesia. Dengan kapasitas pembangkit total 500 MW, kami berkontribusi signifikan dalam transisi energi nasional menuju sumber energi yang lebih bersih dan berkelanjutan.',
    services: [
      'Pembangkit Listrik Tenaga Surya (PLTS)',
      'Pembangkit Listrik Tenaga Angin (PLTB)',
      'Pembangkit Listrik Tenaga Air (PLTA)',
      'Energy Storage Solutions',
      'Energy Efficiency Consulting',
      'Microgrid Development'
    ],
    highlights: [
      'Kapasitas pembangkit 500 MW energi terbarukan',
      'Proyek PLTS terbesar di Indonesia Timur',
      'Sertifikat carbon credit dari PBB',
      'Partnership dengan vendor teknologi global'
    ],
    contact: {
      address: 'Jl. Energi Raya No. 45, Balikpapan 76100',
      phone: '+62 542 5555-3001',
      email: 'info@avianaenergi.co.id'
    },
    established: '2012'
  },
  {
    id: 'aviana-mineral-resources',
    name: 'PT Aviana Mineral Resources',
    sector: 'Pertambangan',
    shortDesc: 'Operasi pertambangan dengan standar keselamatan tinggi dan fokus pada rehabilitasi pasca-tambang.',
    fullDesc: 'PT Aviana Mineral Resources mengoperasikan tambang batubara dan mineral dengan menerapkan standar keselamatan kerja internasional. Kami berkomitmen pada praktik pertambangan yang bertanggung jawab dengan program rehabilitasi lahan pasca-tambang yang komprehensif.',
    services: [
      'Penambangan Batubara',
      'Eksplorasi & Ekstraksi Mineral',
      'Coal Processing & Beneficiation',
      'Mining Equipment Services',
      'Environmental Rehabilitation',
      'Mining Consultation Services'
    ],
    highlights: [
      'Zero accident dalam 3 tahun terakhir',
      'Sertifikat ISO 14001 untuk manajemen lingkungan',
      'Program revegetasi 15.000 hektar lahan bekas tambang',
      'Kapasitas produksi 5 juta ton batubara per tahun'
    ],
    contact: {
      address: 'Jl. Tambang Sejahtera, Samarinda 75100',
      phone: '+62 541 5555-4001',
      email: 'info@avianamineral.co.id'
    },
    established: '2008'
  },
  {
    id: 'aviana-telekomindo-global',
    name: 'PT Aviana Telekomindo Global',
    sector: 'Telekomunikasi',
    shortDesc: 'Menyediakan infrastruktur telekomunikasi dan layanan konektivitas untuk kawasan urban dan terpencil.',
    fullDesc: 'PT Aviana Telekomindo Global adalah penyedia layanan telekomunikasi yang mengkhususkan diri dalam pembangunan infrastruktur jaringan fiber optik dan wireless. Kami berperan dalam mempercepat digitalisasi Indonesia dengan menjangkau area-area yang belum terlayani.',
    services: [
      'Pembangunan Infrastruktur Fiber Optik',
      'Layanan Internet Broadband',
      'Managed Network Services',
      'Data Center Solutions',
      'Telecommunications Consulting',
      'Rural Connectivity Programs'
    ],
    highlights: [
      'Jaringan fiber optik sepanjang 25.000 km',
      'Melayani 500+ kota dan kabupaten',
      'Data center tier-3 dengan uptime 99.9%',
      'Program konektivitas untuk daerah 3T (Terdepan, Terluar, Tertinggal)'
    ],
    contact: {
      address: 'Jl. Telekomunikasi No. 88, Bandung 40100',
      phone: '+62 22 5555-5001',
      email: 'info@avianatelecom.co.id'
    },
    established: '2013'
  },
  {
    id: 'aviana-karya-sejahtera',
    name: 'PT Aviana Karya Sejahtera',
    sector: 'Infrastruktur',
    shortDesc: 'Pelaksanaan proyek infrastruktur sipil dan pengembangan fasilitas publik dengan fokus kualitas dan keberlanjutan.',
    fullDesc: 'PT Aviana Karya Sejahtera adalah kontraktor terkemuka dalam pembangunan infrastruktur sipil. Dengan pengalaman lebih dari 15 tahun, kami telah menyelesaikan berbagai proyek strategis nasional termasuk jalan tol, jembatan, dan fasilitas publik lainnya.',
    services: [
      'Konstruksi Jalan & Jembatan',
      'Pembangunan Gedung Perkantoran',
      'Infrastruktur Pelabuhan & Bandara',
      'Sistem Drainase & Pengelolaan Air',
      'Green Building Development',
      'Project Management & Consulting'
    ],
    highlights: [
      'Telah menyelesaikan 200+ proyek infrastruktur',
      'Sertifikat konstruksi grade A (non-kecil)',
      'Pengalaman proyek senilai Rp 50+ triliun',
      'Komitmen pada green construction practices'
    ],
    contact: {
      address: 'Jl. Konstruksi Utama No. 77, Surabaya 60200',
      phone: '+62 31 5555-6001',
      email: 'info@avianakarya.co.id'
    },
    established: '2009'
  }
];

export function getSubsidiaryBySlug(slug: string): Subsidiary | undefined {
  return subsidiaries.find(sub => sub.id === slug);
}

export function getAllSubsidiaryIds(): string[] {
  return subsidiaries.map(sub => sub.id);
}