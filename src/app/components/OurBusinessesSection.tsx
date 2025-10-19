import Link from 'next/link';
import { subsidiaries } from '@/data/subsidiaries';

export default function OurBusinessesSection() {

  return (
    <section id="businesses" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <h2 className="text-3xl font-bold text-blue-900 mb-6">Our Businesses</h2>
      <p className="text-gray-600 mb-8">Aviana Group membawahi beberapa anak perusahaan yang beroperasi di berbagai sektor strategis:</p>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {subsidiaries.map((subsidiary) => (
          <article key={subsidiary.id} className="p-6 border rounded-lg hover:shadow-lg transition-shadow bg-white">
            <h3 className="text-xl font-semibold text-gray-800">{subsidiary.name}</h3>
            <p className="text-sm text-blue-700 font-medium mt-1">{subsidiary.sector}</p>
            <div className="flex items-center mt-2 mb-3">
              <span className="text-sm text-gray-500 mr-2">Status:</span>
              <span className={`text-xs px-2 py-1 rounded-full font-medium ${
                subsidiary.operationalStatus === 'Beroperasi' 
                  ? 'bg-green-100 text-green-800' 
                  : 'bg-yellow-100 text-yellow-800'
              }`}>
                {subsidiary.operationalStatus}
              </span>
            </div>
            <p className="text-gray-600 mt-3 mb-4">{subsidiary.shortDesc}</p>
            <Link 
              href={`/businesses/${subsidiary.id}`}
              className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium text-sm"
            >
              Pelajari Lebih Lanjut
              <svg className="h-4 w-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </article>
        ))}
      </div>
    </section>
  );
}
