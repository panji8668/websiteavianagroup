export default function AboutSection() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              About Aviana Group
            </h2>
            <p className="text-lg text-gray-600 mb-6">
              Aviana Group is a premier multi-sector corporation with a strong commitment to 
              excellence, innovation, and sustainable growth. Since our establishment, we have 
              been at the forefront of driving progress across multiple industries.
            </p>
            <p className="text-lg text-gray-600 mb-8">
              Our diversified portfolio spans six key sectors: Technology, Finance, Energy & Mining, 
              Plantation, Telecommunications, and Infrastructure. This strategic diversification 
              allows us to create synergies across our business units while maintaining leadership 
              positions in each sector.
            </p>
            
            <div className="grid grid-cols-2 gap-6">
              <div className="text-center p-6 bg-blue-50 rounded-lg">
                <div className="text-3xl font-bold text-blue-900 mb-2">25+</div>
                <div className="text-gray-600">Years of Excellence</div>
              </div>
              <div className="text-center p-6 bg-blue-50 rounded-lg">
                <div className="text-3xl font-bold text-blue-900 mb-2">6</div>
                <div className="text-gray-600">Business Sectors</div>
              </div>
            </div>
          </div>
          
          <div className="space-y-6">
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Our Vision</h3>
              <p className="text-gray-600">
                To be the leading multi-sector corporation that drives sustainable growth 
                and innovation across all industries we serve, contributing to the 
                betterment of society and the environment.
              </p>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Our Mission</h3>
              <p className="text-gray-600">
                To deliver exceptional value to our stakeholders through strategic investments, 
                operational excellence, and sustainable business practices while fostering 
                innovation and growth across all our business sectors.
              </p>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Our Values</h3>
              <div className="flex flex-wrap gap-2">
                <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">
                  Integrity
                </span>
                <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">
                  Excellence
                </span>
                <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">
                  Innovation
                </span>
                <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">
                  Sustainability
                </span>
                <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">
                  Collaboration
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}