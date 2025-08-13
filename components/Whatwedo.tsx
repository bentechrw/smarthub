'use client'
import React, { useEffect } from 'react';
import { 
  Wind, 
  Monitor, 
  Smartphone, 
  Download, 
  Calculator, 
  Palette, 
  Camera, 
  Building,
  Globe 
} from 'lucide-react';

const Whatwedo = () => {
  useEffect(() => {
    // Initialize AOS with enhanced settings
    const AOS = require('aos');
    AOS.init({
      duration: 1000,
      once: true,
      offset: 100,
      easing: 'ease-in-out-cubic',
    });
  }, []);

  const services = [
    {
      icon: Globe,
      title: "Irembo Services",
      description: "Access government services digitally with ease. We help you navigate online platforms for efficient service delivery and digital transformation.",
      delay: 0
    },
    {
      icon: Monitor,
      title: "Internet Cafe",
      description: "High-speed internet access, printing, scanning, and computer workstations. Your gateway to the digital world with reliable connectivity.",
      delay: 100
    },
    {
      icon: Smartphone,
      title: "Computer & Mobile Training",
      description: "Comprehensive digital literacy programs covering basic to advanced computer skills, mobile applications, and digital communication tools.",
      delay: 200
    },
    {
      icon: Download,
      title: "Software Installation",
      description: "Professional software setup and configuration services. From operating systems to specialized applications, we ensure optimal performance.",
      delay: 300
    },
    {
      icon: Calculator,
      title: "Tax Services",
      description: "Complete tax preparation and filing assistance. Navigate tax regulations with confidence and ensure compliance with professional support.",
      delay: 400
    },
    {
      icon: Palette,
      title: "Graphic Design",
      description: "Creative visual solutions for your brand. Logo design, marketing materials, and digital graphics that make your business stand out.",
      delay: 500
    },
    {
      icon: Camera,
      title: "Photography",
      description: "Professional photography services for events, portraits, and commercial purposes. Capturing moments with artistic excellence.",
      delay: 600
    },
    {
      icon: Building,
      title: "Company Registration",
      description: "Complete business registration and legal documentation services. Start your business journey with proper legal foundation.",
      delay: 700
    }
  ];

  return (
    <div className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-10 w-72 h-72 bg-teal-400 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
        <div className="absolute top-60 right-10 w-72 h-72 bg-blue-400 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-1000"></div>
        <div className="absolute -bottom-32 left-60 w-72 h-72 bg-purple-400 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-2000"></div>
      </div>

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 py-12 lg:py-24">
        <div className="flex flex-col lg:flex-row lg:items-start gap-8 lg:gap-12">
          {/* Section Title */}
          <div className="lg:w-1/4 flex-shrink-0" data-aos="fade-right" data-aos-duration="800">
            <div className="sticky top-24">
              <h5 className="text-teal-400 text-sm font-semibold tracking-wider uppercase mb-2 opacity-80">
                What we do
              </h5>
              <div className="w-12 h-1 bg-gradient-to-r from-teal-400 to-blue-400 rounded-full"></div>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:w-3/4 flex-grow">
            {/* Header Section */}
            <div className="mb-12 lg:mb-16" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="200">
              <h2 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-black text-white mb-6 leading-tight">
                Online service{' '}
                <span className="bg-gradient-to-r from-teal-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
                  solutions
                </span>
              </h2>
              <p className="text-lg sm:text-xl text-gray-300 max-w-3xl leading-relaxed">
                Empowering your digital journey with comprehensive technology services. 
                From government platforms to creative solutions, we bridge the gap between you and the digital world.
              </p>
            </div>

            {/* Services Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 lg:gap-8">
              {services.map((service, index) => {
                const IconComponent = service.icon;
                return (
                  <div
                    key={index}
                    className="group relative"
                    data-aos="fade-up"
                    data-aos-duration="1000"
                    data-aos-delay={service.delay}
                  >
                    {/* Card Background with Gradient Border */}
                    <div className="absolute inset-0 bg-gradient-to-r from-teal-400 via-blue-400 to-purple-400 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm"></div>
                    
                    {/* Main Card */}
                    <div className="relative bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 lg:p-8 h-full transition-all duration-500 hover:transform hover:scale-105 hover:bg-gray-800/80 hover:border-teal-400/30">
                      {/* Icon */}
                      <div className="flex justify-center mb-6">
                        <div className="relative">
                          <div className="absolute inset-0 bg-gradient-to-r from-teal-400 to-blue-400 rounded-full opacity-20 scale-110 group-hover:scale-125 transition-transform duration-500"></div>
                          <div className="relative bg-gradient-to-r from-teal-400 to-blue-400 p-4 rounded-full">
                            <IconComponent size={32} className="text-white" />
                          </div>
                        </div>
                      </div>

                      {/* Content */}
                      <div className="text-center">
                        <h4 className="text-xl lg:text-2xl font-bold text-white mb-4 group-hover:text-teal-400 transition-colors duration-300">
                          {service.title}
                        </h4>
                        <p className="text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors duration-300">
                          {service.description}
                        </p>
                      </div>

                      {/* Hover Effect Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-br from-teal-400/5 to-blue-400/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Call to Action */}
            <div 
              className="mt-16 lg:mt-20 text-center"
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-delay="800"
            >
              <div className="inline-flex items-center gap-3 bg-gradient-to-r from-teal-500 to-blue-500 px-8 py-4 rounded-full text-white font-semibold hover:from-teal-600 hover:to-blue-600 transition-all duration-300 hover:scale-105 cursor-pointer shadow-lg hover:shadow-teal-500/25">
                <span>Explore All Services</span>
                <Wind size={20} className="animate-bounce" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Diagonal Slide Effect at Bottom */}
      <div className="relative h-32 lg:h-48 overflow-hidden">
        {/* Background layers for depth */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800"></div>
        
        {/* Animated diagonal slides */}
        <div className="absolute inset-0">
          {/* Main diagonal slide */}
          <div 
            className="absolute inset-0 bg-gradient-to-r from-gray-100 via-white to-gray-50 transform -skew-y-3 origin-top-left translate-y-8"
            data-aos="slide-left"
            data-aos-duration="1500"
            data-aos-delay="1000"
            style={{
              animation: 'slideLeft 1.5s ease-out 1s forwards',
              transform: 'translateX(-100%) skewY(-3deg)'
            }}
          ></div>
          
          {/* Secondary diagonal slide for depth */}
          <div 
            className="absolute inset-0 bg-gradient-to-r from-gray-200 to-gray-100 transform -skew-y-2 origin-top-left translate-y-12 opacity-50"
            data-aos="slide-left"
            data-aos-duration="1500"
            data-aos-delay="1200"
            style={{
              animation: 'slideLeft 1.5s ease-out 1.2s forwards',
              transform: 'translateX(-100%) skewY(-2deg)'
            }}
          ></div>
          
          {/* Accent diagonal slide */}
          <div 
            className="absolute inset-0 bg-gradient-to-r from-teal-50 to-blue-50 transform -skew-y-1 origin-top-left translate-y-16 opacity-30"
            data-aos="slide-left"
            data-aos-duration="1500"
            data-aos-delay="1400"
            style={{
              animation: 'slideLeft 1.5s ease-out 1.4s forwards',
              transform: 'translateX(-100%) skewY(-1deg)'
            }}
          ></div>
        </div>

        {/* Decorative elements on the slide */}
        <div className="absolute bottom-4 left-8 z-20" data-aos="fade-up" data-aos-delay="1600">
          <div className="flex items-center space-x-2">
            <div className="w-3 h-3 bg-teal-400 rounded-full animate-pulse"></div>
            <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse" style={{animationDelay: '150ms'}}></div>
            <div className="w-4 h-4 bg-purple-400 rounded-full animate-pulse" style={{animationDelay: '300ms'}}></div>
          </div>
        </div>
      </div>

      {/* Additional CSS for custom animations */}
      <style jsx>{`
        @keyframes slideLeft {
          from {
            transform: translateX(-100%) skewY(var(--skew-angle, -3deg));
          }
          to {
            transform: translateX(0) skewY(var(--skew-angle, -3deg));
          }
        }
        
        .animate-pulse {
          animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }
        
        @keyframes pulse {
          0%, 100% {
            opacity: 1;
          }
          50% {
            opacity: .5;
          }
        }

        .delay-1000 {
          animation-delay: 1s;
        }

        .delay-2000 {
          animation-delay: 2s;
        }
      `}</style>
    </div>
  );
};

export default Whatwedo;