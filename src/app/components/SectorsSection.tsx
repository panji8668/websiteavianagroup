export default function SectorsSection() {
  const sectors = [
    {
      title: "Teknologi",
      description: "Mengembangkan solusi teknologi inovatif untuk transformasi digital dan digitalisasi bisnis.",
      icon: "💻",
      features: ["Software Development", "Digital Solutions", "AI & Machine Learning", "Cloud Services"]
    },
    {
      title: "Keuangan",
      description: "Menyediakan layanan keuangan komprehensif untuk mendukung pertumbuhan ekonomi.",
      icon: "🏦",
      features: ["Banking Services", "Investment Management", "Financial Advisory", "Insurance"]
    },
    {
      title: "Energi & Tambang",
      description: "Mengeksplorasi dan mengembangkan sumber daya energi dan mineral secara berkelanjutan.",
      icon: "⚡",
      features: ["Oil & Gas", "Mining Operations", "Renewable Energy", "Resource Management"]
    },
    {
      title: "Perkebunan",
      description: "Mengelola perkebunan dengan praktik pertanian berkelanjutan dan ramah lingkungan.",
      icon: "🌱",
      features: ["Palm Oil", "Sustainable Agriculture", "Crop Management", "Agro Technology"]
    },
    {
      title: "Telekomunikasi",
      description: "Menyediakan infrastruktur dan layanan telekomunikasi untuk konektivitas global.",
      icon: "📡",
      features: ["Network Infrastructure", "Telecommunication Services", "5G Technology", "IoT Solutions"]
    },
    {
      title: "Infrastruktur",
      description: "Membangun infrastruktur berkualitas tinggi untuk mendukung pembangunan nasional.",
      icon: "🏗️",
      features: ["Construction", "Transportation", "Public Works", "Smart City Solutions"]
    }
  ];

  return (
    <section id="sectors" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Our Business Sectors
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Aviana Group operates across multiple sectors, delivering excellence and innovation in each industry we serve.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {sectors.map((sector, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow duration-300">
              <div className="text-4xl mb-4">{sector.icon}</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">{sector.title}</h3>
              <p className="text-gray-600 mb-6">{sector.description}</p>
              <ul className="space-y-2">
                {sector.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center text-gray-700">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}