'use client';

import { useState, useEffect } from 'react';

interface Slide {
  id: number;
  title: string;
  subtitle: string;
  description: string;
  sector: string;
  bgImage: string;
  textColor: string;
  buttonColor: string;
}

export default function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides: Slide[] = [
    {
      id: 1,
      title: "Technology Innovation",
      subtitle: "PT Aviana Teknologi Nusantara",
      description: "Pioneering digital transformation with cutting-edge software solutions, cloud infrastructure, and AI-powered innovations.",
      sector: "Technology",
      bgImage: "https://plus.unsplash.com/premium_photo-1683121723153-718d3c56d93e?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=2232",
      textColor: "text-white",
      buttonColor: "bg-white text-blue-900 hover:bg-gray-100"
    },
    {
      id: 2,
      title: "Renewable Energy",
      subtitle: "PT Aviana Energi Nusantara",
      description: "Leading the clean energy transition with solar, wind, and hydroelectric power solutions for a sustainable future.",
      sector: "Energy",
      bgImage: "https://images.unsplash.com/photo-1466611653911-95081537e5b7?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80",
      textColor: "text-white",
      buttonColor: "bg-white text-green-800 hover:bg-gray-100"
    },
    {
      id: 3,
      title: "Sustainable Agriculture",
      subtitle: "PT Aviana Agro Lestari",
      description: "Cultivating the future through sustainable farming practices, organic agriculture, and environmental stewardship.",
      sector: "Agriculture",
      bgImage: "https://images.unsplash.com/photo-1524486361537-8ad15938e1a3?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=2069",
      textColor: "text-white",
      buttonColor: "bg-white text-yellow-700 hover:bg-gray-100"
    },
    {
      id: 4,
      title: "Responsible Mining",
      subtitle: "PT Aviana Mineral Resources",
      description: "Extracting value while preserving the environment through innovative mining technologies and rehabilitation programs.",
      sector: "Mining",
      bgImage: "https://images.unsplash.com/photo-1611273426858-450d8e3c9fce?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80",
      textColor: "text-white",
      buttonColor: "bg-white text-gray-800 hover:bg-gray-100"
    },
    {
      id: 5,
      title: "Digital Connectivity",
      subtitle: "PT Aviana Telekomindo Global",
      description: "Bridging the digital divide with advanced telecommunications infrastructure and nationwide connectivity solutions.",
      sector: "Telecommunications",
      bgImage: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80",
      textColor: "text-white",
      buttonColor: "bg-white text-purple-800 hover:bg-gray-100"
    },
    {
      id: 6,
      title: "Infrastructure Excellence",
      subtitle: "PT Aviana Karya Sejahtera",
      description: "Building tomorrow's foundation with world-class infrastructure projects, green construction, and smart city solutions.",
      sector: "Infrastructure",
      bgImage: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80",
      textColor: "text-white",
      buttonColor: "bg-white text-red-800 hover:bg-gray-100"
    }
  ];

  // Auto-advance slides
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [slides.length]);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  const goToPrevious = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goToNext = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const currentSlideData = slides[currentSlide];

  return (
    <section 
      id="home" 
      className={`relative ${currentSlideData.textColor} pt-20 transition-all duration-1000 ease-in-out min-h-screen`}
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.6)), url(${currentSlideData.bgImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundAttachment: 'fixed'
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="text-center">
          {/* Company Logo/Name */}

          {/* Slide Content */}
          <div className="mb-8 transition-all duration-700 ease-in-out bg-black/30 backdrop-blur-sm rounded-lg p-8">
            <h2 className="text-3xl md:text-4xl font-bold mb-3 animate-fade-in drop-shadow-lg">
              {currentSlideData.title}
            </h2>
            <p className="text-lg mb-2 opacity-80 max-w-4xl mx-auto animate-fade-in drop-shadow-md">
              {currentSlideData.description}
            </p>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <a 
              href="#about" 
              className={`${currentSlideData.buttonColor} px-8 py-3 rounded-lg font-semibold transition-colors duration-300`}
            >
              Learn More
            </a>
            <a 
              href="#businesses" 
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-current transition-colors duration-300"
            >
              Explore Our Businesses
            </a>
          </div>

          {/* Slide Indicators */}
          <div className="flex justify-center gap-3 mb-8">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentSlide 
                    ? 'bg-white scale-125' 
                    : 'bg-white/50 hover:bg-white/75'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>

          {/* Sector Labels */}
          <div className="flex justify-center gap-2 flex-wrap">
            {slides.map((slide, index) => (
              <button
                key={slide.id}
                onClick={() => goToSlide(index)}
                className={`text-xs px-3 py-1 rounded-full transition-all duration-300 ${
                  index === currentSlide
                    ? 'bg-white text-current font-semibold'
                    : 'bg-white/20 text-white/80 hover:bg-white/30'
                }`}
              >
                {slide.sector}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={goToPrevious}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white p-4 rounded-full transition-all duration-300 backdrop-blur-sm border border-white/20 shadow-lg"
        aria-label="Previous slide"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>
      
      <button
        onClick={goToNext}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white p-4 rounded-full transition-all duration-300 backdrop-blur-sm border border-white/20 shadow-lg"
        aria-label="Next slide"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>

      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent transform -skew-y-12"></div>
      </div>

      {/* Progress Bar */}
      <div className="absolute bottom-0 left-0 w-full h-1 bg-white/20">
        <div 
          className="h-full bg-white transition-all duration-5000 ease-linear"
          style={{ width: `${((currentSlide + 1) / slides.length) * 100}%` }}
        />
      </div>
    </section>
  );
}