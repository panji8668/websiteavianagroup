import type { Metadata } from "next";
import Link from 'next/link';

export const metadata: Metadata = {
  title: "News & Insights - Aviana Group",
  description: "Stay updated with the latest news, insights, and developments from Aviana Group across Technology, Energy, Agriculture, Mining, Telecommunications, and Infrastructure sectors.",
};

interface NewsArticle {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  category: string;
  sector: string;
  publishDate: string;
  author: string;
  readTime: string;
  featured: boolean;
}

export default function NewsPage() {
  const newsArticles: NewsArticle[] = [
    {
      id: "1",
      title: "Aviana Group Announces Major Investment in Renewable Energy Infrastructure",
      excerpt: "PT Aviana Energi Nusantara secures $500M funding for new solar and wind power projects across Eastern Indonesia.",
      content: "Aviana Group today announced a landmark $500 million investment in renewable energy infrastructure through its subsidiary PT Aviana Energi Nusantara...",
      category: "Press Release",
      sector: "Energy",
      publishDate: "2025-10-15",
      author: "Corporate Communications",
      readTime: "5 min",
      featured: true
    },
    {
      id: "2",
      title: "Digital Transformation Initiative Reaches Rural Communities",
      excerpt: "PT Aviana Telekomindo Global successfully connects 50 remote villages with high-speed internet infrastructure.",
      content: "In a significant milestone for digital inclusion, PT Aviana Telekomindo Global has successfully connected 50 remote villages...",
      category: "Impact Story",
      sector: "Telecommunications",
      publishDate: "2025-10-12",
      author: "Sarah Wijaya",
      readTime: "4 min",
      featured: true
    },
    {
      id: "3",
      title: "Sustainable Agriculture Practices Show Promising Results",
      excerpt: "PT Aviana Agro Lestari's organic farming initiative increases crop yield by 25% while reducing environmental impact.",
      content: "PT Aviana Agro Lestari's commitment to sustainable agriculture is paying dividends with impressive results from their organic farming pilot program...",
      category: "Research & Development",
      sector: "Agriculture",
      publishDate: "2025-10-10",
      author: "Dr. Ahmad Rizki",
      readTime: "6 min",
      featured: false
    },
    {
      id: "4",
      title: "Technology Innovation Hub Opens in Jakarta",
      excerpt: "PT Aviana Teknologi Nusantara launches state-of-the-art R&D facility focused on AI and machine learning solutions.",
      content: "PT Aviana Teknologi Nusantara officially opened its new Technology Innovation Hub in Jakarta, a cutting-edge facility designed to accelerate research and development...",
      category: "Company News",
      sector: "Technology",
      publishDate: "2025-10-08",
      author: "Tech Editorial Team",
      readTime: "3 min",
      featured: false
    },
    {
      id: "5",
      title: "Green Mining Initiative Wins International Recognition",
      excerpt: "PT Aviana Mineral Resources receives prestigious award for innovative environmental rehabilitation program.",
      content: "PT Aviana Mineral Resources has been honored with the International Mining Sustainability Award for its groundbreaking environmental rehabilitation program...",
      category: "Awards",
      sector: "Mining",
      publishDate: "2025-10-05",
      author: "Environmental Team",
      readTime: "4 min",
      featured: false
    },
    {
      id: "6",
      title: "Infrastructure Development Accelerates Economic Growth",
      excerpt: "PT Aviana Karya Sejahtera completes major highway project ahead of schedule, boosting regional connectivity.",
      content: "PT Aviana Karya Sejahtera has successfully completed the 150-kilometer highway project connecting two major economic centers...",
      category: "Project Update",
      sector: "Infrastructure",
      publishDate: "2025-10-03",
      author: "Project Management Office",
      readTime: "5 min",
      featured: false
    }
  ];

  const insights = [
    {
      title: "The Future of Multi-Sector Corporations in Indonesia",
      excerpt: "Exploring how diversified business models create resilience and drive sustainable growth in emerging markets.",
      category: "Industry Analysis",
      readTime: "8 min",
      publishDate: "2025-10-14"
    },
    {
      title: "ESG Integration: Beyond Compliance to Value Creation",
      excerpt: "How environmental, social, and governance factors are becoming key drivers of long-term business success.",
      category: "Sustainability",
      readTime: "6 min",
      publishDate: "2025-10-11"
    },
    {
      title: "Digital Infrastructure as Economic Catalyst",
      excerpt: "The role of telecommunications and digital connectivity in accelerating economic development across Indonesia.",
      category: "Digital Economy",
      readTime: "7 min",
      publishDate: "2025-10-09"
    }
  ];

  const featuredArticles = newsArticles.filter(article => article.featured);
  const regularArticles = newsArticles.filter(article => !article.featured);

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('id-ID', { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });
  };

  const getSectorColor = (sector: string) => {
    const colors: { [key: string]: string } = {
      'Technology': 'bg-blue-100 text-blue-800',
      'Energy': 'bg-green-100 text-green-800',
      'Agriculture': 'bg-yellow-100 text-yellow-800',
      'Mining': 'bg-gray-100 text-gray-800',
      'Telecommunications': 'bg-purple-100 text-purple-800',
      'Infrastructure': 'bg-red-100 text-red-800'
    };
    return colors[sector] || 'bg-gray-100 text-gray-800';
  };

  return (
    <div className="min-h-screen bg-gray-50 pt-16">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-indigo-600 to-blue-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            News & Insights
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-4xl mx-auto">
            Stay informed about the latest developments, innovations, and insights from Aviana Group&apos;s 
            diverse portfolio of businesses across multiple sectors.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="#latest-news" className="bg-white text-blue-600 px-8 py-3 rounded-md font-semibold hover:bg-gray-100 transition-colors">
              Latest News
            </a>
            <a href="#insights" className="border-2 border-white text-white px-8 py-3 rounded-md font-semibold hover:bg-white hover:text-blue-600 transition-colors">
              Industry Insights
            </a>
          </div>
        </div>
      </section>

      {/* Featured News */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Featured Stories</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Highlighting the most significant developments and achievements across our business portfolio.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 mb-16">
            {featuredArticles.map((article) => (
              <article key={article.id} className="bg-white rounded-lg shadow-lg overflow-hidden">
                <div className="h-48 bg-gradient-to-r from-blue-500 to-indigo-600"></div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <span className={`text-xs font-medium px-2.5 py-0.5 rounded-full ${getSectorColor(article.sector)}`}>
                      {article.sector}
                    </span>
                    <span className="text-sm text-gray-500">{formatDate(article.publishDate)}</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{article.title}</h3>
                  <p className="text-gray-600 mb-4">{article.excerpt}</p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center text-sm text-gray-500">
                      <span>{article.author}</span>
                      <span className="mx-2">•</span>
                      <span>{article.readTime} read</span>
                    </div>
                    <button className="text-blue-600 hover:text-blue-800 font-medium">
                      Read More →
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Latest News */}
      <section id="latest-news" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Latest News</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Recent updates and announcements from across our business operations.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {regularArticles.map((article) => (
              <article key={article.id} className="bg-white border rounded-lg p-6 hover:shadow-lg transition-shadow">
                <div className="flex items-center justify-between mb-4">
                  <span className={`text-xs font-medium px-2.5 py-0.5 rounded-full ${getSectorColor(article.sector)}`}>
                    {article.sector}
                  </span>
                  <span className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded">
                    {article.category}
                  </span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">{article.title}</h3>
                <p className="text-gray-600 text-sm mb-4">{article.excerpt}</p>
                <div className="flex items-center justify-between text-xs text-gray-500">
                  <span>{formatDate(article.publishDate)}</span>
                  <span>{article.readTime} read</span>
                </div>
                <button className="mt-4 text-blue-600 hover:text-blue-800 font-medium text-sm">
                  Read Full Article →
                </button>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Industry Insights */}
      <section id="insights" className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Industry Insights</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Expert analysis and thought leadership from our senior management and industry specialists.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {insights.map((insight, index) => (
              <div key={index} className="bg-white rounded-lg shadow-sm p-6">
                <div className="h-32 bg-gradient-to-r from-gray-100 to-gray-200 rounded-lg mb-4"></div>
                <span className="text-xs bg-indigo-100 text-indigo-800 font-medium px-2.5 py-0.5 rounded-full">
                  {insight.category}
                </span>
                <h3 className="text-lg font-semibold text-gray-900 mt-3 mb-2">{insight.title}</h3>
                <p className="text-gray-600 text-sm mb-4">{insight.excerpt}</p>
                <div className="flex items-center justify-between text-xs text-gray-500">
                  <span>{formatDate(insight.publishDate)}</span>
                  <span>{insight.readTime} read</span>
                </div>
                <button className="mt-4 text-indigo-600 hover:text-indigo-800 font-medium text-sm">
                  Read Insight →
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Subscription */}
      <section className="py-16 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">Stay Updated</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto text-gray-300">
            Subscribe to our newsletter to receive the latest news, insights, and updates directly in your inbox.
          </p>
          <div className="max-w-md mx-auto flex gap-4">
            <input 
              type="email" 
              placeholder="Enter your email address"
              className="flex-1 px-4 py-3 rounded-md text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button className="bg-blue-600 text-white px-8 py-3 rounded-md font-semibold hover:bg-blue-700 transition-colors">
              Subscribe
            </button>
          </div>
          <p className="text-sm text-gray-400 mt-4">
            We respect your privacy. Unsubscribe at any time.
          </p>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Media Inquiries</h2>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            For press releases, interview requests, or additional information about Aviana Group, 
            please contact our media relations team.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/#contact" className="bg-blue-600 text-white px-8 py-3 rounded-md font-semibold hover:bg-blue-700 transition-colors">
              Contact Media Team
            </Link>
            <a href="mailto:media@avianagroup.co.id" className="border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-md font-semibold hover:bg-blue-600 hover:text-white transition-colors">
              media@avianagroup.co.id
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}