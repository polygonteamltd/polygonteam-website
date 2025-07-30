'use client'

import { AnimatedElement } from './AnimatedElement'
import { FacebookIcon, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

const Footer = () => {
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
  }

  const quickLinks = [
    { name: 'Начало', href: '/', hash: '#home' },
    { name: 'За нас', href: '/about', hash: '#about' },
    { name: 'Услуги', href: '/services', hash: '#services' },
    { name: 'Как работим', href: '/work', hash: '#work' },
    { name: 'Контакти', href: '/contact', hash: '#contact' }
  ]

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <AnimatedElement animation="slideUp" className="lg:col-span-1">
            <div className="mb-6">
              <Image
                src="/img/logofoot.png"
                alt="PolygonTeam Logo"
                width={0}
                height={0}
                sizes="100vw"
                className="w-auto h-auto"
                style={{ width: 'auto', height: 'auto' }}
              />
            </div>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Сигурност, ефективност и индивидуален подход - вече повече от 10 години.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://www.facebook.com/POLYGONTeamltd/"
                target="_blank"
                className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-blue-600 transition-colors duration-300"
                aria-label="Facebook"
              >
                <FacebookIcon className="h-5 w-5" />
              </a>
              <a
                href="https://bg.linkedin.com/company/polygonteam-ltd.?trk=public_profile_topcard-current-company"
                target="_blank"
                className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-blue-600 transition-colors duration-300"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </AnimatedElement>

          {/* Quick Links */}
          <AnimatedElement animation="slideUp" delay={100}>
            <h4 className="text-lg font-semibold mb-6">Бързи връзки</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    onClick={(e) => handleNavClick(link.href, link.hash, e)}
                    className="text-gray-400 hover:text-white transition-colors duration-300"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </AnimatedElement>

          {/* Контакти */}
          <AnimatedElement animation="slideUp" delay={200}>
            <h4 className="text-lg font-semibold mb-6">Контакти</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-blue-400" />
                <span className="text-gray-400">polygonteamltd@gmail.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-blue-400" />
                <div className="flex flex-col">
                  <p className="text-gray-400">+359 885 270 398</p>
                  <p className="text-gray-400">+359 879 288 335</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="h-5 w-5 text-blue-400" />
                <div className="flex flex-col">
                  <span className="text-gray-400">ул. "Магистрална" 3, етж. 2</span>
                  <span className="text-gray-400">Велико Търново 5000, България</span>
                </div>
              </div>
            </div>
          </AnimatedElement>

          {/* ISO Certification */}
          <AnimatedElement animation="slideUp" delay={300}>
            <h4 className="text-lg font-semibold mb-6">ISO Сертификация</h4>
            <div className="flex justify-center lg:justify-start">
              <Image
                src="/img/iso.png"
                alt="ISO 9001:2015"
                width={0}
                height={0}
                sizes="100vw"
                className="w-auto h-auto"
                style={{ width: 'auto', height: 'auto' }}
              />
            </div>
            <p className="text-gray-400 text-sm mt-3 text-center lg:text-left">
              ISO 9001:2015 Сертифициран
            </p>
          </AnimatedElement>
        </div>

        {/* Bottom Bar */}
        <AnimatedElement animation="slideUp" delay={400} className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2025 POLYGONTeam. Всички права запазени.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link href="/privacy" className="text-gray-400 hover:text-white text-sm transition-colors duration-300">
                Политика за поверителност
              </Link>
            </div>
          </div>
        </AnimatedElement>
      </div>
    </footer>
  )
}

export default Footer 