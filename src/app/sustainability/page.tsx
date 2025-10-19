import type { Metadata } from "next";
import Link from 'next/link';

export const metadata: Metadata = {
  title: "Sustainability - Aviana Group",
  description: "Komitmen Aviana Group terhadap pembangunan berkelanjutan, tanggung jawab lingkungan, dan dampak sosial positif di seluruh sektor operasi.",
};

export default function SustainabilityPage() {
  const sustainabilityMetrics = [
    {
      title: "Carbon Footprint Reduction",
      value: "45%",
      description: "Pengurangan emisi karbon sejak 2020",
      icon: "🌱"
    },
    {
      title: "Renewable Energy",
      value: "75%",
      description: "Operasi menggunakan energi terbarukan",
      icon: "⚡"
    },
    {
      title: "Community Programs",
      value: "150+",
      description: "Program pemberdayaan masyarakat",
      icon: "👥"
    },
    {
      title: "Waste Reduction",
      value: "60%",
      description: "Pengurangan limbah operasional",
      icon: "♻️"
    }
  ];

  const initiatives = [
    {
      title: "Green Technology Innovation",
      description: "Mengembangkan teknologi ramah lingkungan di seluruh anak perusahaan untuk mengurangi dampak operasional.",
      sector: "Teknologi",
      company: "PT Aviana Teknologi Nusantara"
    },
    {
      title: "Sustainable Agriculture Practices",
      description: "Implementasi praktik pertanian berkelanjutan dengan sertifikasi internasional RSPO dan organic farming.",
      sector: "Perkebunan",
      company: "PT Aviana Agro Lestari"
    },
    {
      title: "Clean Energy Transition",
      description: "Investasi dalam pembangkit energi terbarukan untuk mendukung transisi energi bersih Indonesia.",
      sector: "Energi",
      company: "PT Aviana Energi Nusantara"
    },
    {
      title: "Responsible Mining Operations",
      description: "Program rehabilitasi lahan pasca-tambang dan zero waste initiative dalam operasi pertambangan.",
      sector: "Pertambangan",
      company: "PT Aviana Mineral Resources"
    },
    {
      title: "Digital Infrastructure for Rural Areas",
      description: "Memperluas akses internet ke daerah terpencil untuk mengurangi kesenjangan digital.",
      sector: "Telekomunikasi",
      company: "PT Aviana Telekomindo Global"
    },
    {
      title: "Green Building Standards",
      description: "Menerapkan standar green building dalam setiap proyek konstruksi dan infrastruktur.",
      sector: "Infrastruktur",
      company: "PT Aviana Karya Sejahtera"
    }
  ];

  const commitments = [
    {
      category: "Environmental",
      items: [
        "Net Zero Carbon Emissions by 2030",
        "100% Renewable Energy for Operations",
        "Zero Waste to Landfill Initiative",
        "Water Conservation & Management",
        "Biodiversity Protection Programs"
      ]
    },
    {
      category: "Social",
      items: [
        "Community Empowerment Programs",
        "Local Economic Development",
        "Education & Skill Development",
        "Healthcare Access Improvement",
        "Cultural Heritage Preservation"
      ]
    },
    {
      category: "Governance",
      items: [
        "Transparent Reporting Standards",
        "Ethical Business Practices",
        "Stakeholder Engagement",
        "Supply Chain Sustainability",
        "Regulatory Compliance Excellence"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 pt-16">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-green-600 to-blue-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Sustainability at Aviana Group
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-4xl mx-auto">
            Membangun masa depan yang berkelanjutan melalui inovasi, tanggung jawab lingkungan, 
            dan pemberdayaan masyarakat di seluruh sektor operasi kami.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg px-6 py-3">
              <span className="text-sm font-medium">UN SDGs Aligned</span>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg px-6 py-3">
              <span className="text-sm font-medium">Carbon Neutral 2030</span>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg px-6 py-3">
              <span className="text-sm font-medium">ESG Committed</span>
            </div>
          </div>
        </div>
      </section>

      {/* Sustainability Metrics */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Impact in Numbers</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Pencapaian nyata dalam perjalanan sustainability kami menuju masa depan yang lebih berkelanjutan.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {sustainabilityMetrics.map((metric, index) => (
              <div key={index} className="bg-white rounded-lg shadow-sm p-6 text-center">
                <div className="text-4xl mb-3">{metric.icon}</div>
                <div className="text-3xl font-bold text-green-600 mb-2">{metric.value}</div>
                <div className="font-semibold text-gray-900 mb-1">{metric.title}</div>
                <div className="text-sm text-gray-600">{metric.description}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sustainability Initiatives */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Sustainability Initiatives</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Inisiatif konkret yang dijalankan oleh setiap anak perusahaan untuk menciptakan dampak positif.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {initiatives.map((initiative, index) => (
              <div key={index} className="border rounded-lg p-6 hover:shadow-lg transition-shadow">
                <div className="flex items-center justify-between mb-4">
                  <span className="bg-green-100 text-green-800 text-xs font-medium px-2.5 py-0.5 rounded-full">
                    {initiative.sector}
                  </span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{initiative.title}</h3>
                <p className="text-gray-600 mb-4">{initiative.description}</p>
                <div className="text-sm text-blue-600 font-medium">{initiative.company}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Commitments (ESG) */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our ESG Commitments</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Komitmen Environmental, Social, dan Governance yang menjadi pedoman dalam setiap keputusan bisnis.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {commitments.map((commitment, index) => (
              <div key={index} className="bg-white rounded-lg shadow-sm p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
                  {commitment.category}
                </h3>
                <ul className="space-y-3">
                  {commitment.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-start">
                      <div className="flex-shrink-0 h-2 w-2 bg-green-500 rounded-full mt-2 mr-3"></div>
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications & Partnerships */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Certifications & Partnerships</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Komitmen kami tervalidasi melalui sertifikasi internasional dan kemitraan strategis.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { name: "ISO 14001", desc: "Environmental Management" },
              { name: "RSPO Certified", desc: "Sustainable Palm Oil" },
              { name: "UN Global Compact", desc: "Corporate Sustainability" },
              { name: "GRI Standards", desc: "Sustainability Reporting" }
            ].map((cert, index) => (
              <div key={index} className="bg-gray-50 rounded-lg p-6 text-center">
                <div className="h-16 w-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="h-8 w-8 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">{cert.name}</h3>
                <p className="text-sm text-gray-600">{cert.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-green-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">Join Our Sustainability Journey</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Bersama-sama kita dapat menciptakan dampak positif yang berkelanjutan untuk generasi mendatang.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link 
              href="/sustainability/report"
              className="bg-white text-blue-600 px-8 py-3 rounded-md font-semibold hover:bg-gray-100 transition-colors"
            >
              Download Sustainability Report
            </Link>
            <Link 
              href="/#contact"
              className="border-2 border-white text-white px-8 py-3 rounded-md font-semibold hover:bg-white hover:text-blue-600 transition-colors"
            >
              Contact Our ESG Team
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}