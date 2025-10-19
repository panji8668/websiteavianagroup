import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">404</h1>
        <h2 className="text-xl font-semibold text-gray-700 mb-4">Anak Perusahaan Tidak Ditemukan</h2>
        <p className="text-gray-600 mb-8 max-w-md">
          Maaf, anak perusahaan yang Anda cari tidak ditemukan atau mungkin telah dipindahkan.
        </p>
        <div className="space-x-4">
          <Link 
            href="/#businesses"
            className="inline-block bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 font-medium"
          >
            Lihat Semua Anak Perusahaan
          </Link>
          <Link 
            href="/"
            className="inline-block bg-gray-200 text-gray-800 px-6 py-3 rounded-md hover:bg-gray-300 font-medium"
          >
            Kembali ke Beranda
          </Link>
        </div>
      </div>
    </div>
  );
}