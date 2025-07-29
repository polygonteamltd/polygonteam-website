'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Menu, X, ChevronUp } from 'lucide-react'
import Image from 'next/image'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [showBackToTop, setShowBackToTop] = useState(false)

  const leftNavItems = [
    { name: 'НАЧАЛО', href: '/', hash: '#home' },
    { name: 'ЗА НАС', href: '/about', hash: '#about' },
    { name: 'УСЛУГИ', href: '/services', hash: '#services' },
  ]

  const rightNavItems = [
    { name: 'КАК РАБОТИМ', href: '/work', hash: '#work' },
    { name: 'КОНТАКТИ', href: '/contact', hash: '#contact' },
  ]

  // Handle scroll events for back-to-top button
  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 300)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Smooth scroll to top function
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  // Smooth scroll to section function
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      })
    }
  }

  // Handle navigation click
  const handleNavClick = (href: string, hash: string, e: React.MouseEvent) => {
    // If we're on the home page, use hash navigation for smooth scrolling
    if (window.location.pathname === '/') {
      e.preventDefault()
      scrollToSection(hash.substring(1))
    }
    // Close mobile menu
    setIsOpen(false)
  }

  return (
    <>
      <nav className="absolute top-0 left-0 right-0 z-50 bg-transparent">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-24 md:h-20 relative">
            {/* Left Menu Items */}
            <div className="hidden md:flex items-center space-x-8 absolute left-1/3 transform -translate-x-1/2">
              {leftNavItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={(e) => handleNavClick(item.href, item.hash, e)}
                  className="text-white hover:text-blue-300 font-medium text-base transition-colors duration-200 relative group"
                >
                  {item.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-300 transition-all duration-300 group-hover:w-full"></span>
                </Link>
              ))}
            </div>

            {/* Centered Logo */}
            <div className="absolute left-1/2 transform -translate-x-1/2 pt-6 md:pt-4">
              <Link href="/" className="group">
                <Image
                  src="/img/logo.png"
                  alt="PolygonTeam Logo"
                  width={120}
                  height={40}
                  className="transform group-hover:scale-110 transition-all duration-300 w-auto h-24 md:h-24 drop-shadow-2xl shadow-blue-500/70 filter drop-shadow-[0_0_20px_rgba(59,130,246,0.8)]"
                />
              </Link>
            </div>

            {/* Right Menu Items */}
            <div className="hidden md:flex items-center space-x-8 absolute right-1/3 transform translate-x-1/2">
              {rightNavItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={(e) => handleNavClick(item.href, item.hash, e)}
                  className="text-white hover:text-blue-300 font-medium text-base transition-colors duration-200 relative group"
                >
                  {item.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-300 transition-all duration-300 group-hover:w-full"></span>
                </Link>
              ))}
            </div>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden p-3 rounded-lg text-white hover:text-blue-300 hover:bg-white/10 transition-colors duration-200 absolute right-4"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isOpen && (
            <div className="md:hidden bg-white/90 backdrop-blur-md border border-white/20 rounded-lg shadow-xl absolute right-4 top-16 w-48">
              <div className="px-2 pt-2 pb-4 space-y-1">
                {[...leftNavItems, ...rightNavItems].map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    onClick={(e) => handleNavClick(item.href, item.hash, e)}
                    className="block px-4 py-3 text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg font-medium text-sm transition-colors duration-200"
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Back to Top Button */}
      {showBackToTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 z-50 bg-blue-600 hover:bg-blue-700 text-white p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110"
          aria-label="Back to top"
        >
          <ChevronUp size={24} />
        </button>
      )}
    </>
  )
}

export default Navbar 