'use client'
import React, { useEffect, useState } from 'react';
import { 
  ArrowRight, 
  Sparkles, 
  Star,
  Zap,
  Target,
  TrendingUp,
  CheckCircle,
  Globe
} from 'lucide-react';

const HeroAboutSection = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    // Initialize AOS
    const AOS = require('aos');
    AOS.init({
      duration: 1000,
      once: true,
      offset: 100,
      easing: 'ease-in-out-cubic',
    });

    // Mouse tracking for interactive effects
    const handleMouseMove = (e: { clientX: number; clientY: number; }) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const features = [
    { icon: Target, text: "Precision & Excellence" },
    { icon: Zap, text: "Lightning Fast Service" },
    { icon: TrendingUp, text: "Growth-Focused Solutions" },
    { icon: Globe, text: "Digital Transformation" }
  ];

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 overflow-hidden">
      {/* Interactive Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Animated geometric shapes */}
        <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-br from-blue-400/20 to-purple-400/20 rounded-full animate-pulse"></div>
        <div className="absolute top-60 right-20 w-24 h-24 bg-gradient-to-br from-teal-400/20 to-blue-400/20 rounded-full animate-bounce delay-1000"></div>
        <div className="absolute bottom-40 left-1/4 w-40 h-40 bg-gradient-to-br from-purple-400/10 to-pink-400/10 rounded-full animate-pulse delay-2000"></div>
        
        {/* Floating particles */}
        {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14].map((i) => (
          <div
            key={i}
            className="absolute animate-float opacity-30"
            style={{
              left: `${(i * 19) % 100}%`,
              top: `${(i * 27) % 100}%`,
              animationDelay: `${(i * 0.4) % 5}s`,
              animationDuration: `${4 + (i % 3)}s`
            }}
          >
            <Star size={(i % 2) * 4 + 4} className="text-blue-500" />
          </div>
        ))}
      </div>

      {/* Mouse Follower Effect */}
      <div 
        className="fixed pointer-events-none z-50 w-6 h-6 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full opacity-50 transition-opacity duration-300"
        style={{
          left: mousePosition.x - 12,
          top: mousePosition.y - 12,
          opacity: isHovered ? 0.8 : 0.3
        }}
      ></div>

      {/* Hero Section */}
      <section className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 pt-20 lg:pt-32 pb-16 lg:pb-24">
        <div className="max-w-6xl">
          {/* Hero Content */}
          <div className="mb-12 lg:mb-16" data-aos="fade-up">
            <div className="mb-6" data-aos="fade-right" data-aos-delay="200">
              <span className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-200/50 rounded-full px-4 py-2 text-blue-700 text-sm font-medium">
                <Sparkles size={16} className="animate-spin" />
                Premium Digital Services
              </span>
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-8xl font-black text-gray-900 mb-8 leading-tight">
              <span data-aos="fade-up" data-aos-delay="300">
                The best{' '}
              </span>
              <span 
                className="bg-gradient-to-r from-blue-600 via-purple-600 to-teal-600 bg-clip-text text-transparent"
                data-aos="fade-up" 
                data-aos-delay="400"
              >
                online service
              </span>
              <br />
              <span data-aos="fade-up" data-aos-delay="500">
                agency in{' '}
              </span>
              <span 
                className="relative"
                data-aos="fade-up" 
                data-aos-delay="600"
              >
                Kigali, Rwanda
                <div className="absolute -bottom-2 left-0 w-full h-3 bg-gradient-to-r from-yellow-400/30 to-orange-400/30 -skew-x-12 -z-10"></div>
              </span>
            </h1>
            
            <p 
              className="text-xl lg:text-2xl font-light text-gray-600 mb-8 max-w-3xl leading-relaxed"
              data-aos="fade-up" 
              data-aos-delay="700"
            >
              Transform your digital presence with our comprehensive suite of online services. 
              From government platforms to creative solutions, we're your trusted technology partner.
            </p>

            {/* Feature Tags */}
            <div className="flex flex-wrap gap-3 mb-10" data-aos="fade-up" data-aos-delay="800">
              {features.map((feature, index) => {
                const IconComponent = feature.icon;
                return (
                  <div
                    key={index}
                    className="flex items-center gap-2 bg-white/70 backdrop-blur-sm border border-blue-200/50 rounded-full px-4 py-2 text-blue-700 text-sm font-medium hover:bg-white/90 hover:border-blue-300/70 transition-all duration-300 hover:scale-105"
                    data-aos="zoom-in"
                    data-aos-delay={index * 100 + 900}
                  >
                    <IconComponent size={14} />
                    <span>{feature.text}</span>
                  </div>
                );
              })}
            </div>

            {/* CTA Button */}
            <div data-aos="fade-up" data-aos-delay="1000">
              <a
                href="/services"
                className="group relative inline-flex items-center gap-3 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold px-8 py-4 rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/25 uppercase tracking-wide"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
              >
                <span className="relative z-10">Learn More</span>
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform duration-300" />
                
                {/* Animated background */}
                <div className="absolute inset-0 bg-gradient-to-r from-teal-600 to-blue-600 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                {/* Shine effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 opacity-0 group-hover:opacity-100 group-hover:animate-pulse transition-opacity duration-500"></div>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* Left Column - Title */}
          <div className="space-y-6" data-aos="fade-right">
            <div className="space-y-4">
              <h5 
                className="text-2xl lg:text-3xl text-blue-600 font-bold flex items-center gap-3"
                data-aos="fade-up"
                data-aos-delay="100"
              >
                <div className="w-2 h-2 bg-blue-600 rounded-full animate-pulse"></div>
                Hi there!
                <div className="w-2 h-2 bg-purple-600 rounded-full animate-pulse delay-500"></div>
              </h5>
              
              <h2 
                className="text-4xl sm:text-5xl lg:text-6xl font-black text-gray-900 leading-tight"
                data-aos="fade-up"
                data-aos-delay="200"
              >
                Here are the{' '}
                <span className="relative">
                  <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-teal-600 bg-clip-text text-transparent">
                    abstract
                  </span>
                  <div className="absolute -bottom-2 left-0 w-full h-2 bg-gradient-to-r from-blue-400/30 to-purple-400/30 -skew-x-12"></div>
                </span>
              </h2>
            </div>

            {/* Decorative Elements */}
            <div className="flex items-center gap-4 mt-8" data-aos="fade-up" data-aos-delay="300">
              <div className="flex items-center gap-2">
                {[...Array(5)].map((_, i) => (
                  <Star 
                    key={i} 
                    size={20} 
                    className="text-yellow-400 fill-current animate-pulse" 
                    style={{ animationDelay: `${i * 200}ms` }}
                  />
                ))}
              </div>
              <span className="text-gray-600 text-sm font-medium">Trusted by 500+ clients</span>
            </div>
          </div>

          {/* Right Column - Content */}
          <div className="space-y-8" data-aos="fade-left">
            <div className="space-y-6">
              <div 
                className="relative bg-white/70 backdrop-blur-sm border border-blue-200/50 rounded-2xl p-6 lg:p-8 hover:bg-white/90 hover:border-blue-300/70 transition-all duration-500 hover:scale-105"
                data-aos="zoom-in"
                data-aos-delay="100"
              >
                <div className="absolute top-4 right-4">
                  <CheckCircle size={24} className="text-green-500" />
                </div>
                <p className="text-lg text-gray-700 leading-relaxed mb-4">
                  We specialize in bridging the digital divide by providing comprehensive online services that empower individuals and businesses. Our expert team delivers innovative solutions tailored to the unique needs of the Rwandan market.
                </p>
                <div className="flex items-center gap-2 text-blue-600 font-medium">
                  <Zap size={16} />
                  <span>Innovation-Driven Approach</span>
                </div>
              </div>

              <div 
                className="relative bg-gradient-to-br from-blue-50/80 to-purple-50/80 backdrop-blur-sm border border-purple-200/50 rounded-2xl p-6 lg:p-8 hover:from-blue-100/80 hover:to-purple-100/80 transition-all duration-500 hover:scale-105"
                data-aos="zoom-in"
                data-aos-delay="200"
              >
                <div className="absolute top-4 right-4">
                  <Target size={24} className="text-purple-500" />
                </div>
                <p className="text-lg text-gray-700 leading-relaxed mb-4">
                  From Irembo government services to creative design and digital training, we ensure accessibility and excellence in every interaction. Our mission is to make technology work for everyone.
                </p>
                <div className="flex items-center gap-2 text-purple-600 font-medium">
                  <Globe size={16} />
                  <span>Community-Focused Solutions</span>
                </div>
              </div>
            </div>

            {/* Enhanced CTA Button */}
            <div data-aos="fade-up" data-aos-delay="400">
              <a
                href="/services"
                className="group relative inline-flex items-center gap-3 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold px-8 py-4 rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/25 uppercase tracking-wide overflow-hidden"
              >
                {/* Animated background */}
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-teal-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                {/* Shine effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
                
                <span className="relative z-10">Read More</span>
                <ArrowRight size={20} className="relative z-10 group-hover:translate-x-1 transition-transform duration-300" />
              </a>
            </div>

            {/* Statistics */}
            <div className="grid grid-cols-3 gap-4 mt-8" data-aos="fade-up" data-aos-delay="500">
              {[
                { number: "500+", label: "Happy Clients" },
                { number: "50+", label: "Projects Done" },
                { number: "5+", label: "Years Experience" }
              ].map((stat, index) => (
                <div 
                  key={index}
                  className="text-center bg-white/50 backdrop-blur-sm rounded-xl p-4 border border-blue-200/30 hover:bg-white/70 transition-all duration-300 hover:scale-105"
                  data-aos="zoom-in"
                  data-aos-delay={index * 100 + 600}
                >
                  <div className="text-2xl font-bold text-blue-600 mb-1">{stat.number}</div>
                  <div className="text-sm text-gray-600">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Decorative Divider */}
      <div className="relative h-32 overflow-hidden" data-aos="fade-up" data-aos-delay="800">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-purple-600 to-teal-600"></div>
        
        {/* Wave Effect */}
        <div className="absolute inset-0">
          <svg 
            className="absolute bottom-0 w-full h-full" 
            viewBox="0 0 1200 120" 
            preserveAspectRatio="none"
          >
            <path 
              d="M0,120 C300,60 600,180 1200,120 L1200,0 L0,0 Z" 
              className="fill-white animate-pulse"
            ></path>
            <path 
              d="M0,120 C400,80 800,160 1200,120 L1200,20 L0,20 Z" 
              className="fill-blue-100/50"
              style={{ animationDelay: '0.5s' }}
            ></path>
          </svg>
        </div>

        {/* Floating Icons */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="flex gap-8 animate-bounce">
            <Sparkles size={24} className="text-white/80" />
            <Zap size={28} className="text-white/80" />
            <Target size={24} className="text-white/80" />
          </div>
        </div>
      </div>

      {/* Floating Action Elements */}
      <div className="fixed bottom-8 left-8 z-40" data-aos="slide-right" data-aos-delay="1200">
        <div className="flex flex-col gap-3">
          <div className="w-12 h-12 bg-gradient-to-r from-teal-500 to-blue-500 rounded-full flex items-center justify-center animate-pulse cursor-pointer hover:scale-110 transition-transform duration-300">
            <Globe size={20} className="text-white" />
          </div>
          <div className="w-3 h-16 bg-gradient-to-b from-teal-500 to-transparent rounded-full"></div>
        </div>
      </div>

      {/* Custom Styles */}
      <style jsx>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0px) rotate(0deg);
          }
          33% {
            transform: translateY(-15px) rotate(120deg);
          }
          66% {
            transform: translateY(5px) rotate(240deg);
          }
        }
        
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        
        @keyframes shimmer {
          0% {
            background-position: -200% center;
          }
          100% {
            background-position: 200% center;
          }
        }
        
        .animate-shimmer {
          background: linear-gradient(90deg, transparent, rgba(255,255,255,0.4), transparent);
          background-size: 200% 100%;
          animation: shimmer 2s infinite;
        }
        
        .delay-500 {
          animation-delay: 0.5s;
        }
        
        .delay-1000 {
          animation-delay: 1s;
        }
        
        .delay-2000 {
          animation-delay: 2s;
        }

        /* Responsive text sizing */
        @media (max-width: 640px) {
          .text-responsive-hero {
            font-size: clamp(2rem, 8vw, 4rem);
          }
        }
        
        @media (min-width: 641px) and (max-width: 1024px) {
          .text-responsive-hero {
            font-size: clamp(3rem, 6vw, 5rem);
          }
        }
        
        @media (min-width: 1025px) {
          .text-responsive-hero {
            font-size: clamp(4rem, 6vw, 8rem);
          }
        }
      `}</style>
    </div>
  );
};

export default HeroAboutSection;