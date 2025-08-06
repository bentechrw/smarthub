'use client'

import Link from 'next/link'
import { useState } from 'react'
import { Menu, X } from 'lucide-react'

const Header = () => {
  const [isOpen, setIsOpen] = useState(false)
  const navItems = [
    { title: 'Home', path: '/' },
    { title: 'Work', path: '/work' },
    { title: 'Service', path: '/service' },
    { title: 'About', path: '/about' },
    { title: 'Contact', path: '/contact' }
  ]

  return (
    <header className='flex justify-between items-center p-3 m-5 mb-4 h-24'>
      <div className="flex items-center gap-5">
        <Link href="/">
          <img 
            src="/shs.svg" 
            className="h-12" 
            alt="Smart Hub Service" 
          />
        </Link>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex gap-5">
          {navItems.map((link, index) => (
            <Link 
              href={link.path} 
              key={index} 
              className='text-lg uppercase hover:text-blue-500 transition-colors'
            >
              {link.title}
            </Link>
          ))}
        </nav>
      </div>

      {/* Desktop Contact */}
      <div className="hidden md:flex items-center gap-3">
        <p>Let's talk : </p>
        <Link 
          href='tel:+250782643272' 
          className='p-2 border border-white cursor-pointer text-blue-700 font-semibold transition-colors hover:bg-white'
        >
          +250-782-643-272
        </Link>
      </div>

      {/* Mobile Menu Button */}
      <button 
        className="md:hidden p-2 rounded-md focus:outline-none"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden absolute top-24 left-0 right-0 bg-white shadow-lg z-50">
          <nav className="flex flex-col p-4 space-y-4">
            {navItems.map((link, index) => (
              <Link 
                href={link.path} 
                key={index} 
                className='text-lg uppercase py-2 px-4 hover:bg-gray-100 rounded-md'
                onClick={() => setIsOpen(false)}
              >
                {link.title}
              </Link>
            ))}
            <div className="flex items-center gap-3 pt-4 border-t mt-4">
              <p>Let's talk : </p>
              <Link 
                href='tel:+250782643272' 
                className='p-2 border border-blue-500 cursor-pointer text-blue-700 font-semibold transition-colors hover:bg-blue-50'
              >
                +250-782-643-272
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  )
}

export default Header