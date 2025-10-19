import { notFound } from 'next/navigation';
import { getSubsidiaryBySlug, getAllSubsidiaryIds } from '@/data/subsidiaries';
import Link from 'next/link';

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const ids = getAllSubsidiaryIds();
  return ids.map(id => ({ slug: id }));
}

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params;
  const subsidiary = getSubsidiaryBySlug(slug);
  
  if (!subsidiary) {
    return {
      title: 'Subsidiary Not Found - Aviana Group'
    };
  }

  return {
    title: `${subsidiary.name} - Aviana Group`,
    description: subsidiary.fullDesc,
  };
}

export default async function SubsidiaryPage({ params }: PageProps) {
  const { slug } = await params;
  const subsidiary = getSubsidiaryBySlug(slug);

  if (!subsidiary) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Company Header */}
        <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
          <div className="mb-4">
            <span className="inline-block bg-blue-100 text-blue-800 text-sm font-medium px-3 py-1 rounded-full mb-4">
              {subsidiary.sector}
            </span>
            <h1 className="text-4xl font-bold text-gray-900 mb-2">{subsidiary.name}</h1>
            <p className="text-gray-600 text-lg leading-relaxed">{subsidiary.fullDesc}</p>
          </div>
          
          <div className="flex flex-wrap gap-4 text-sm text-gray-500">
            <span>Didirikan: {subsidiary.established}</span>
            <span>•</span>
            <span>Sektor: {subsidiary.sector}</span>
          </div>
        </div>

        {/* Content Grid */}
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Services & Highlights */}
          <div className="lg:col-span-2 space-y-8">
            {/* Services */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Layanan Kami</h2>
              <ul className="grid sm:grid-cols-2 gap-3">
                {subsidiary.services.map((service, index) => (
                  <li key={index} className="flex items-start">
                    <div className="flex-shrink-0 h-2 w-2 bg-blue-600 rounded-full mt-2 mr-3"></div>
                    <span className="text-gray-700">{service}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Key Highlights */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Pencapaian Utama</h2>
              <div className="space-y-3">
                {subsidiary.highlights.map((highlight, index) => (
                  <div key={index} className="flex items-start">
                    <div className="flex-shrink-0 h-6 w-6 bg-green-100 rounded-full flex items-center justify-center mr-3 mt-0.5">
                      <svg className="h-3 w-3 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span className="text-gray-700">{highlight}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Information */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-sm p-6 sticky top-8">
              <h2 className="text-xl font-bold text-gray-900 mb-4">Informasi Kontak</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="font-medium text-gray-900 mb-1">Alamat</h3>
                  <p className="text-gray-600 text-sm">{subsidiary.contact.address}</p>
                </div>
                
                <div>
                  <h3 className="font-medium text-gray-900 mb-1">Telepon</h3>
                  <a href={`tel:${subsidiary.contact.phone}`} className="text-blue-600 hover:text-blue-800 text-sm">
                    {subsidiary.contact.phone}
                  </a>
                </div>
                
                <div>
                  <h3 className="font-medium text-gray-900 mb-1">Email</h3>
                  <a href={`mailto:${subsidiary.contact.email}`} className="text-blue-600 hover:text-blue-800 text-sm">
                    {subsidiary.contact.email}
                  </a>
                </div>
                
                {subsidiary.contact.website && (
                  <div>
                    <h3 className="font-medium text-gray-900 mb-1">Website</h3>
                    <a 
                      href={`https://${subsidiary.contact.website}`} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:text-blue-800 text-sm"
                    >
                      {subsidiary.contact.website}
                    </a>
                  </div>
                )}
              </div>
              
              {/* Contact Button */}
              <div className="mt-6 pt-6 border-t border-gray-200">
                <a 
                  href={`mailto:${subsidiary.contact.email}`}
                  className="w-full bg-blue-600 text-white text-center py-2 px-4 rounded-md hover:bg-blue-700 transition-colors font-medium inline-block"
                >
                  Hubungi Kami
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Related Companies */}
        <div className="mt-12 bg-white rounded-lg shadow-sm p-6">
          <h2 className="text-xl font-bold text-gray-900 mb-4">Perusahaan Lain dalam Aviana Group</h2>
          <div className="flex flex-wrap gap-2">
            {getAllSubsidiaryIds()
              .filter(id => id !== subsidiary.id)
              .slice(0, 5)
              .map(id => (
                <Link 
                  key={id}
                  href={`/businesses/${id}`}
                  className="inline-block bg-gray-100 hover:bg-gray-200 text-gray-700 text-sm px-3 py-1 rounded-full transition-colors"
                >
                  {id.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase())}
                </Link>
              ))
            }
          </div>
        </div>
      </main>
    </div>
  );
}