'use client'
import React, { useEffect, useState } from 'react';
import { 
  Facebook, 
  Instagram, 
  Twitter,
  MessageCircle,
  MapPin,
  Phone,
  Mail,
  ExternalLink,
  Heart,
  Sparkles,
  ArrowUp
} from 'lucide-react';

const Footer = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    // Initialize AOS for animations
    const AOS = require('aos');
    AOS.init({
      duration: 1000,
      once: true,
      offset: 50,
      easing: 'ease-in-out-cubic',
    });

    // Show scroll to top button
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const socialLinks = [
    { icon: Facebook, href: 'https://facebook.com/smarthubservice', label: 'Facebook', color: '#1877F2' },
    { icon: Twitter, href: 'https://x.com/smarthubservice', label: 'Twitter/X', color: '#000000' },
    { icon: Instagram, href: 'https://instagram.com/smarthubservice', label: 'Instagram', color: '#E4405F' },
    { icon: MessageCircle, href: 'https://threads.net/smarthubservice', label: 'Threads', color: '#000000' }
  ];

  const services = [
    { name: 'Creative Design', href: '#creative' },
    { name: 'Digital Solutions', href: '#digital' },
    { name: 'Social Media', href: '#social' },
    { name: 'Traditional Services', href: '#traditional' },
    { name: 'Custom Solutions', href: '#custom' }
  ];

  const companyLinks = [
    { name: 'About Us', href: '#about' },
    { name: 'Our Team', href: '#team' },
    { name: 'Contact Us', href: '#contact' },
    { name: 'News & Blog', href: '#blog' }
  ];

  const contactInfo = [
    { 
      icon: MapPin, 
      text: 'KN ST 405, Nyarugenge, RW', 
      href: 'https://maps.google.com/?q=KN+ST+405,+Nyarugenge,+RW',
      type: 'location' 
    },
    { 
      icon: Phone, 
      text: '+250-788-210-792', 
      href: 'tel:+250788210792',
      type: 'phone' 
    },
    { 
      icon: Mail, 
      text: 'smarthubservices23@gmail.com', 
      href: 'mailto:smarthubservices',
      type: 'email' 
    }
  ];

  return (
    <footer className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 overflow-hidden mt-3 mb-0">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-20 w-96 h-96 bg-teal-400 rounded-full mix-blend-multiply filter blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-blue-400 rounded-full mix-blend-multiply filter blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-purple-400 rounded-full mix-blend-multiply filter blur-3xl animate-pulse delay-2000"></div>
      </div>

      {/* Floating Particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19].map((i) => (
          <div
            key={i}
            className="absolute animate-float opacity-20"
            style={{
              left: `${(i * 17) % 100}%`,
              top: `${(i * 23) % 100}%`,
              animationDelay: `${(i * 0.3) % 5}s`,
              animationDuration: `${3 + (i % 4)}s`
            }}
          >
            <Sparkles 
              size={(i % 3) * 3 + 5} 
              className="text-teal-400"
            />
          </div>
        ))}
      </div>

      <div className="relative z-10">
        {/* Main Footer Content */}
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 pt-16 lg:pt-24 pb-12 lg:pb-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            
            {/* Brand Section */}
            <div className="lg:col-span-1" data-aos="fade-up" data-aos-delay="0">
              <div className="flex flex-col h-full justify-between">
                {/* Logo */}
                <div className="mb-8">
                  <div className="group cursor-pointer inline-block">
                    <div className="relative">
                      <div className="absolute inset-0 bg-gradient-to-r from-teal-400 to-blue-400 rounded-lg opacity-0 group-hover:opacity-20 transition-opacity duration-300 blur"></div>
                      <div className="relative bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg p-4 group-hover:border-teal-400/50 transition-colors duration-300">
                        <div className="text-2xl font-bold text-white">
                          Smart<span className="text-teal-400">Hub</span>
                        </div>
                        <div className="text-sm text-gray-300">Service</div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Social Media Icons */}
                <div className="mt-auto">
                  <h3 className="text-white text-lg font-semibold mb-4">Follow Us</h3>
                  <div className="flex gap-4">
                    {socialLinks.map((social, index) => {
                      const IconComponent = social.icon;
                      return (
                        <a
                          key={index}
                          href={social.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="group relative"
                          aria-label={social.label}
                          data-aos="zoom-in"
                          data-aos-delay={index * 100 + 200}
                        >
                          <div className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm"
                               style={{ backgroundColor: social.color }}></div>
                          <div className="relative w-12 h-12 bg-gray-800/50 hover:bg-gray-700/50 border border-gray-600/50 hover:border-teal-400/50 rounded-full flex items-center justify-center transition-all duration-300 group-hover:scale-110 group-hover:shadow-lg">
                            <IconComponent 
                              size={20} 
                              className="text-gray-400 group-hover:text-white transition-colors duration-300" 
                            />
                          </div>
                        </a>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>

            {/* Services Section */}
            <div className="lg:col-span-1" data-aos="fade-up" data-aos-delay="100">
              <h2 className="text-2xl font-bold text-white mb-6 relative">
                Services
                <div className="absolute -bottom-2 left-0 w-12 h-1 bg-gradient-to-r from-teal-400 to-blue-400 rounded-full"></div>
              </h2>
              <ul className="space-y-3">
                {services.map((service, index) => (
                  <li key={index} data-aos="fade-right" data-aos-delay={index * 50 + 300}>
                    <a
                      href={service.href}
                      className="group flex items-center text-gray-400 hover:text-teal-400 transition-colors duration-300 text-sm"
                    >
                      <div className="w-0 group-hover:w-2 h-0.5 bg-teal-400 mr-0 group-hover:mr-3 transition-all duration-300 rounded-full"></div>
                      <span className="group-hover:translate-x-1 transition-transform duration-300">
                        {service.name}
                      </span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company Section */}
            <div className="lg:col-span-1" data-aos="fade-up" data-aos-delay="200">
              <h2 className="text-2xl font-bold text-white mb-6 relative">
                Company
                <div className="absolute -bottom-2 left-0 w-12 h-1 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full"></div>
              </h2>
              <ul className="space-y-3">
                {companyLinks.map((link, index) => (
                  <li key={index} data-aos="fade-right" data-aos-delay={index * 50 + 400}>
                    <a
                      href={link.href}
                      className="group flex items-center text-gray-400 hover:text-blue-400 transition-colors duration-300 text-sm"
                    >
                      <div className="w-0 group-hover:w-2 h-0.5 bg-blue-400 mr-0 group-hover:mr-3 transition-all duration-300 rounded-full"></div>
                      <span className="group-hover:translate-x-1 transition-transform duration-300">
                        {link.name}
                      </span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Section */}
            <div className="lg:col-span-1" data-aos="fade-up" data-aos-delay="300">
              <h2 className="text-2xl font-bold text-white mb-6 relative">
                Keep in Touch
                <div className="absolute -bottom-2 left-0 w-12 h-1 bg-gradient-to-r from-purple-400 to-teal-400 rounded-full"></div>
              </h2>
              <ul className="space-y-4">
                {contactInfo.map((contact, index) => {
                  const IconComponent = contact.icon;
                  return (
                    <li key={index} data-aos="fade-right" data-aos-delay={index * 50 + 500}>
                      <a
                        href={contact.href}
                        target={contact.type === 'location' ? '_blank' : '_self'}
                        rel={contact.type === 'location' ? 'noopener noreferrer' : undefined}
                        className="group flex items-start gap-3 text-gray-400 hover:text-purple-400 transition-colors duration-300 text-sm"
                      >
                        <div className="flex-shrink-0 w-5 h-5 mt-0.5">
                          <IconComponent size={18} className="group-hover:scale-110 transition-transform duration-300" />
                        </div>
                        <span className="group-hover:translate-x-1 transition-transform duration-300">
                          {contact.text}
                        </span>
                        {contact.type === 'location' && (
                          <ExternalLink size={12} className="opacity-50 group-hover:opacity-100 transition-opacity duration-300" />
                        )}
                      </a>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>

        {/* Separator Line */}
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-gray-600 to-transparent h-px"></div>
          <div className="relative bg-gradient-to-r from-teal-400 via-blue-400 to-purple-400 h-px opacity-50"></div>
        </div>

        {/* Bottom Section */}
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 py-8">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4" data-aos="fade-up" data-aos-delay="600">
            <div className="text-gray-400 text-sm flex items-center gap-2">
              © 2025 Smart Hub Service
              <Heart size={14} className="text-red-400 animate-pulse" />
            </div>
            <div className="text-gray-400 text-sm flex items-center gap-2">
              Powered by 
              <a 
                href="https://bentechrw.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-teal-400 hover:text-teal-300 font-medium transition-colors duration-300 flex items-center gap-1 group"
              >
                Bentechrw
                <ExternalLink size={12} className="group-hover:scale-110 transition-transform duration-300" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll to Top Button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 z-50 w-12 h-12 bg-gradient-to-r from-teal-500 to-blue-500 hover:from-teal-600 hover:to-blue-600 text-white rounded-full shadow-lg hover:shadow-teal-500/25 transition-all duration-300 flex items-center justify-center group animate-bounce"
          aria-label="Scroll to top"
          data-aos="zoom-in"
        >
          <ArrowUp size={20} className="group-hover:scale-110 transition-transform duration-300" />
        </button>
      )}

      {/* Custom Styles */}
      <style jsx>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0px) rotate(0deg);
          }
          33% {
            transform: translateY(-10px) rotate(120deg);
          }
          66% {
            transform: translateY(5px) rotate(240deg);
          }
        }
        
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        
        .delay-1000 {
          animation-delay: 1s;
        }
        
        .delay-2000 {
          animation-delay: 2s;
        }
      `}</style>
    </footer>
  );
};

export default Footer;