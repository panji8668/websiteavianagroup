import type { Metadata } from "next";
import Link from 'next/link';

export const metadata: Metadata = {
  title: "Careers - Aviana Group",
  description: "Join Aviana Group and be part of our mission to drive innovation across multiple sectors. Discover exciting career opportunities in Technology, Energy, Agriculture, Mining, Telecommunications, and Infrastructure.",
};

export default function CareersPage() {
  const jobOpenings = [
    {
      id: 1,
      title: "Senior Software Engineer",
      department: "Technology",
      company: "PT Aviana Teknologi Nusantara",
      location: "Jakarta",
      type: "Full-time",
      experience: "3-5 years",
      description: "Develop and maintain scalable web applications using modern frameworks and cloud technologies."
    }
  ];

  const benefits = [
    {
      category: "Health & Wellness",
      items: [
        "Comprehensive health insurance",
        "Annual health check-ups",
        "Mental health support",
        "Gym membership subsidy"
      ],
      icon: "🏥"
    },
    {
      category: "Career Development",
      items: [
        "Professional training programs",
        "Conference and certification support",
        "Mentorship programs",
        "Internal mobility opportunities"
      ],
      icon: "📚"
    },
    {
      category: "Work-Life Balance",
      items: [
        "Flexible working hours",
        "Remote work options",
        "25 days annual leave",
        "Family support programs"
      ],
      icon: "⚖️"
    },
    {
      category: "Financial Benefits",
      items: [
        "Competitive salary packages",
        "Performance-based bonuses",
        "Retirement savings plan",
        "Stock option programs"
      ],
      icon: "💰"
    }
  ];

  const cultureValues = [
    {
      title: "Innovation",
      description: "We embrace cutting-edge technologies and creative solutions to drive progress across all sectors.",
      icon: "💡"
    },
    {
      title: "Sustainability",
      description: "Environmental responsibility and sustainable practices are at the core of everything we do.",
      icon: "🌱"
    },
    {
      title: "Collaboration",
      description: "We believe in the power of teamwork and diverse perspectives to achieve excellence.",
      icon: "🤝"
    },
    {
      title: "Integrity",
      description: "We maintain the highest ethical standards in all our business operations and relationships.",
      icon: "🎯"
    },
    {
      title: "Excellence",
      description: "We strive for exceptional quality and continuous improvement in all our endeavors.",
      icon: "⭐"
    },
    {
      title: "Diversity",
      description: "We celebrate diversity and create an inclusive environment where everyone can thrive.",
      icon: "🌈"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 pt-16">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Build Your Career with Aviana
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-4xl mx-auto">
            Join a dynamic team driving innovation across Technology, Energy, Agriculture, Mining, 
            Telecommunications, and Infrastructure sectors.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="#openings" className="bg-white text-blue-600 px-8 py-3 rounded-md font-semibold hover:bg-gray-100 transition-colors">
              View Open Positions
            </a>
            <a href="#culture" className="border-2 border-white text-white px-8 py-3 rounded-md font-semibold hover:bg-white hover:text-blue-600 transition-colors">
              Our Culture
            </a>
          </div>
        </div>
      </section>

      {/* Why Join Us */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Choose Aviana Group?</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We offer more than just a job - we provide a platform for growth, innovation, and making a positive impact on society.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-sm p-8 text-center">
              <div className="text-4xl mb-4">🚀</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Innovation-Driven</h3>
              <p className="text-gray-600">Work with cutting-edge technologies and be part of groundbreaking projects that shape the future.</p>
            </div>
            
            <div className="bg-white rounded-lg shadow-sm p-8 text-center">
              <div className="text-4xl mb-4">🌍</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Global Impact</h3>
              <p className="text-gray-600">Contribute to projects that make a difference in communities across Indonesia and beyond.</p>
            </div>
            
            <div className="bg-white rounded-lg shadow-sm p-8 text-center">
              <div className="text-4xl mb-4">📈</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Career Growth</h3>
              <p className="text-gray-600">Accelerate your career with comprehensive training, mentorship, and advancement opportunities.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Current Openings */}
      <section id="openings" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Current Job Openings</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Explore exciting opportunities across our diverse business portfolio.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {jobOpenings.map((job) => (
              <div key={job.id} className="border rounded-lg p-6 hover:shadow-lg transition-shadow">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">{job.title}</h3>
                    <p className="text-blue-600 font-medium mb-1">{job.company}</p>
                    <div className="flex flex-wrap gap-2 text-sm text-gray-600">
                      <span className="bg-gray-100 px-2 py-1 rounded">{job.department}</span>
                      <span className="bg-gray-100 px-2 py-1 rounded">{job.location}</span>
                      <span className="bg-gray-100 px-2 py-1 rounded">{job.type}</span>
                      <span className="bg-gray-100 px-2 py-1 rounded">{job.experience}</span>
                    </div>
                  </div>
                </div>
                <p className="text-gray-600 mb-4">{job.description}</p>
                <button className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 font-medium transition-colors">
                  Apply Now
                </button>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-gray-600 mb-4">Don&apos;t see the right position? We&apos;re always looking for talented individuals.</p>
            <button className="bg-gray-200 text-gray-800 px-8 py-3 rounded-md hover:bg-gray-300 font-medium transition-colors">
              Submit General Application
            </button>
          </div>
        </div>
      </section>

      {/* Company Culture */}
      <section id="culture" className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Culture & Values</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our values guide everything we do and create an environment where everyone can thrive.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {cultureValues.map((value, index) => (
              <div key={index} className="bg-white rounded-lg shadow-sm p-6 text-center">
                <div className="text-3xl mb-4">{value.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits & Perks */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Benefits & Perks</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We believe in taking care of our employees with comprehensive benefits and programs.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl mb-4">{benefit.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">{benefit.category}</h3>
                <ul className="space-y-2 text-gray-600">
                  {benefit.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-start">
                      <div className="flex-shrink-0 h-2 w-2 bg-blue-600 rounded-full mt-2 mr-2"></div>
                      <span className="text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Application Process */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Application Process</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our streamlined hiring process is designed to find the best fit for both candidates and our organization.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: "1", title: "Apply Online", desc: "Submit your application through our career portal" },
              { step: "2", title: "Initial Screening", desc: "HR review and initial phone/video screening" },
              { step: "3", title: "Technical Interview", desc: "Meet with hiring managers and team members" },
              { step: "4", title: "Final Decision", desc: "Reference checks and job offer discussion" }
            ].map((process, index) => (
              <div key={index} className="text-center">
                <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-lg mx-auto mb-4">
                  {process.step}
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{process.title}</h3>
                <p className="text-gray-600 text-sm">{process.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-r from-purple-600 to-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Join Our Team?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Take the next step in your career and become part of Indonesia&apos;s leading multi-sector corporation.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="#openings" className="bg-white text-blue-600 px-8 py-3 rounded-md font-semibold hover:bg-gray-100 transition-colors">
              Browse All Positions
            </a>
            <Link href="/#contact" className="border-2 border-white text-white px-8 py-3 rounded-md font-semibold hover:bg-white hover:text-blue-600 transition-colors">
              Contact HR Team
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}