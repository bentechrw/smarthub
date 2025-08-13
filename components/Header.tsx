'use client'
import React, { useState, useEffect } from 'react';
import { 
  Menu, 
  X, 
  Phone, 
  Sparkles, 
  Zap,
  ArrowRight,
  Globe,
  Star
} from 'lucide-react';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeItem, setActiveItem] = useState('Home');

  useEffect(() => {
    // Initialize AOS
    if (typeof window !== 'undefined') {
      const AOS = require('aos');
      AOS.init({
        duration: 800,
        once: true,
        offset: 50,
        easing: 'ease-in-out-cubic',
      });
    }

    // Handle scroll effects
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { title: 'Home', path: '/', icon: '🏠' },
    { title: 'Work', path: '/work', icon: '💼' },
    { title: 'Service', path: '/service', icon: '⚡' },
    { title: 'About', path: '/about', icon: '👥' },
    { title: 'Contact', path: '/contact', icon: '📞' }
  ];

  return (
    <>
      <header 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled 
            ? 'bg-white/95 backdrop-blur-lg border-b border-blue-200/50 shadow-lg shadow-blue-500/10' 
            : 'bg-transparent'
        }`}
        data-aos="fade-down"
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20 lg:h-24">
            
            {/* Logo Section */}
            <div className="flex items-center gap-6" data-aos="fade-right" data-aos-delay="100">
              <a href="/" className="group relative">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl opacity-0 group-hover:opacity-20 transition-opacity duration-300 blur scale-110"></div>
                <div className="relative bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-3 group-hover:border-blue-400/50 transition-all duration-300 group-hover:scale-105">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-500 rounded-lg flex items-center justify-center">
                      <Sparkles size={16} className="text-white animate-pulse" />
                    </div>
                    <div className="hidden sm:block">
                      <div className="text-lg font-bold text-gray-900">
                        Smart<span className="text-blue-600">Hub</span>
                      </div>
                      <div className="text-xs text-gray-600 -mt-1">Service</div>
                    </div>
                  </div>
                </div>
              </a>

              {/* Desktop Navigation */}
              <nav className="hidden lg:flex items-center gap-1">
                {navItems.map((item, index) => (
                  <a
                    key={index}
                    href={item.path}
                    className={`group relative px-4 py-2 rounded-lg text-sm font-medium uppercase tracking-wide transition-all duration-300 ${
                      activeItem === item.title
                        ? 'text-blue-600'
                        : 'text-gray-700 hover:text-blue-600'
                    }`}
                    onMouseEnter={() => setActiveItem(item.title)}
                    data-aos="fade-down"
                    data-aos-delay={index * 50 + 200}
                  >
                    <span className="relative z-10 flex items-center gap-2">
                      <span className="text-xs">{item.icon}</span>
                      {item.title}
                    </span>
                    
                    {/* Hover background */}
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-lg scale-0 group-hover:scale-100 transition-transform duration-300"></div>
                    
                    {/* Active indicator */}
                    {activeItem === item.title && (
                      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-6 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></div>
                    )}
                  </a>
                ))}
              </nav>
            </div>

            {/* Contact Section */}
            <div className="hidden lg:flex items-center gap-4" data-aos="fade-left" data-aos-delay="300">
              <div className="flex items-center gap-2 text-gray-700">
                <Phone size={16} className="animate-pulse text-blue-500" />
                <span className="text-sm font-medium">Let's talk:</span>
              </div>
              
              <a
                href="tel:+250782643272"
                className="group relative overflow-hidden bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold px-6 py-3 rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-blue-500/25"
              >
                {/* Shine effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
                
                <span className="relative z-10 flex items-center gap-2">
                  +250-782-643-272
                  <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform duration-300" />
                </span>
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden relative w-12 h-12 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl flex items-center justify-center focus:outline-none hover:border-blue-400/50 transition-all duration-300 hover:scale-105"
              onClick={() => setIsOpen(!isOpen)}
              data-aos="fade-left"
              data-aos-delay="200"
            >
              <div className="relative">
                {isOpen ? (
                  <X size={24} className="text-gray-700 transition-transform duration-300 rotate-180" />
                ) : (
                  <Menu size={24} className="text-gray-700 transition-transform duration-300" />
                )}
              </div>
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        <div className={`lg:hidden absolute top-full left-0 right-0 transition-all duration-500 ${
          isOpen 
            ? 'opacity-100 translate-y-0 pointer-events-auto' 
            : 'opacity-0 -translate-y-4 pointer-events-none'
        }`}>
          <div className="bg-white/95 backdrop-blur-lg border-b border-blue-200/50 shadow-2xl">
            <nav className="container mx-auto px-4 py-6">
              <div className="space-y-2">
                {navItems.map((item, index) => (
                  <a
                    key={index}
                    href={item.path}
                    className="group flex items-center gap-4 px-4 py-3 rounded-xl text-gray-700 font-medium uppercase tracking-wide hover:bg-gradient-to-r hover:from-blue-50 hover:to-purple-50 hover:text-blue-600 transition-all duration-300"
                    onClick={() => setIsOpen(false)}
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <span className="text-2xl group-hover:scale-110 transition-transform duration-300">
                      {item.icon}
                    </span>
                    <span className="group-hover:translate-x-2 transition-transform duration-300">
                      {item.title}
                    </span>
                    <ArrowRight size={16} className="ml-auto opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300" />
                  </a>
                ))}
              </div>

              {/* Mobile Contact Section */}
              <div className="mt-6 pt-6 border-t border-gray-200">
                <div className="flex flex-col gap-4">
                  <div className="flex items-center gap-2 text-gray-600">
                    <Phone size={16} className="animate-pulse text-blue-500" />
                    <span className="text-sm font-medium">Let's talk:</span>
                  </div>
                  
                  <a
                    href="tel:+250782643272"
                    className="group relative overflow-hidden bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold px-6 py-3 rounded-xl transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2"
                    onClick={() => setIsOpen(false)}
                  >
                    <span className="relative z-10">+250-782-643-272</span>
                    <Phone size={16} className="relative z-10 group-hover:animate-bounce" />
                    
                    {/* Shine effect */}
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
                  </a>
                </div>
              </div>
            </nav>
          </div>
        </div>
      </header>

      {/* Spacer to prevent content overlap */}
      <div className="h-20 lg:h-24"></div>

      {/* Floating Navigation Indicator */}
      <div className="fixed top-1/2 right-6 transform -translate-y-1/2 z-40 hidden xl:block" data-aos="fade-left" data-aos-delay="1000">
        <div className="flex flex-col gap-3">
          {navItems.map((item, index) => (
            <a
              key={index}
              href={item.path}
              className="group relative w-3 h-3 bg-gray-300 hover:bg-blue-500 rounded-full transition-all duration-300 hover:scale-150"
              title={item.title}
            >
              <div className="absolute right-6 top-1/2 transform -translate-y-1/2 bg-gray-900 text-white px-3 py-1 rounded-lg text-xs font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
                {item.title}
              </div>
            </a>
          ))}
        </div>
      </div>

      {/* Scroll Progress Indicator */}
      <div className="fixed top-0 left-0 w-full h-1 bg-gray-200/50 z-50">
        <div 
          className="h-full bg-gradient-to-r from-blue-500 via-purple-500 to-teal-500 transition-all duration-300"
          style={{ 
            width: `${Math.min(100, (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100)}%` 
          }}
        ></div>
      </div>

      {/* Custom Styles */}
      <style jsx>{`
        @keyframes slideDown {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes slideUp {
          from {
            opacity: 1;
            transform: translateY(0);
          }
          to {
            opacity: 0;
            transform: translateY(-10px);
          }
        }
        
        .mobile-menu-enter {
          animation: slideDown 0.3s ease-out forwards;
        }
        
        .mobile-menu-exit {
          animation: slideUp 0.3s ease-out forwards;
        }
        
        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-5px);
          }
        }
        
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
        
        /* Gradient text animation */
        @keyframes gradientShift {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }
        
        .animate-gradient {
          background: linear-gradient(-45deg, #3b82f6, #8b5cf6, #06b6d4, #3b82f6);
          background-size: 400% 400%;
          animation: gradientShift 3s ease infinite;
        }
        
        /* Pulse glow effect */
        .pulse-glow {
          box-shadow: 0 0 20px rgba(59, 130, 246, 0.3);
          animation: pulse 2s infinite;
        }
        
        @keyframes pulse {
          0%, 100% {
            box-shadow: 0 0 20px rgba(59, 130, 246, 0.3);
          }
          50% {
            box-shadow: 0 0 30px rgba(59, 130, 246, 0.6);
          }
        }
      `}</style>
    </>
  );
};

export default Header;