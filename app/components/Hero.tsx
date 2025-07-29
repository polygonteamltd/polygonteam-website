'use client'

import { ArrowRight, Play, Code, Zap, Cpu, Database } from 'lucide-react'
import { useEffect, useState } from 'react'
import Image from 'next/image'
import { AnimatedElement } from './AnimatedElement'
import { useMousePosition, useScrollAnimation } from '../hooks/useAnimation'

const Hero = () => {
  const mousePosition = useMousePosition()
  const scrollY = useScrollAnimation()

  const floatingCodeElements = [
    { text: '<div>', x: 10, y: 20, delay: 0 },
    { text: 'const app = ()', x: 80, y: 15, delay: 0.5 },
    { text: '{...props}', x: 15, y: 80, delay: 1 },
    { text: 'useState()', x: 85, y: 75, delay: 1.5 },
    { text: 'useEffect()', x: 20, y: 40, delay: 2 },
    { text: 'return (', x: 70, y: 60, delay: 2.5 },
    { text: 'function', x: 25, y: 30, delay: 3 },
    { text: 'export default', x: 75, y: 45, delay: 3.5 },
    { text: 'import React', x: 35, y: 70, delay: 4 },
    { text: 'className=""', x: 65, y: 25, delay: 4.5 },
    { text: 'onClick={}', x: 45, y: 55, delay: 5 },
    { text: 'const [state', x: 55, y: 35, delay: 5.5 },
    { text: 'setState', x: 30, y: 65, delay: 6 },
    { text: 'useRef()', x: 80, y: 50, delay: 6.5 },
    { text: 'useMemo()', x: 40, y: 15, delay: 7 },
    { text: 'useCallback()', x: 70, y: 80, delay: 7.5 },
    { text: 'map((item)', x: 15, y: 50, delay: 8 },
    { text: 'filter()', x: 85, y: 30, delay: 8.5 },
    { text: 'reduce()', x: 50, y: 75, delay: 9 },
    { text: 'async/await', x: 25, y: 85, delay: 9.5 },
  ]

  const matrixRain = Array.from({ length: 50 }, (_, i) => ({
    id: i,
    x: (i * 2) % 100,
    speed: 6 + (i % 4) * 1.5,
    delay: i * 0.2,
  }))

  const programmingLanguages = [
    { name: 'React', icon: '/img/icons/icons/react.png' },
    { name: 'Next.js', icon: '/img/icons/icons/next.png' },
    { name: 'Python', icon: '/img/icons/icons/python.png' },
    { name: 'PHP', icon: '/img/icons/icons/php.png' },
    { name: 'Laravel', icon: '/img/icons/icons/laravel.png' },
    { name: 'PostgreSQL', icon: '/img/icons/icons/postgres.png' },
    { name: 'MariaDB', icon: '/img/icons/icons/mariadb.png' },
    { name: 'Rust', icon: '/img/icons/icons/rust.png' },
  ]

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900">
      {/* Matrix Rain Effect */}
      <div className="absolute inset-0 overflow-hidden">
        {matrixRain.map((drop) => (
          <div
            key={drop.id}
            className="absolute text-green-400 text-xs font-mono opacity-20 animate-matrix-rain"
            style={{ 
              left: `${drop.x}%`,
              animationDelay: `${drop.delay}s`,
              animationDuration: `${drop.speed}s`
            }}
          >
            {drop.id % 3 === 0 ? '1' : drop.id % 3 === 1 ? '0' : '1'}
          </div>
        ))}
      </div>

      {/* Interactive Background Grid */}
      <div className="absolute inset-0 opacity-10">
        <div 
          className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.1)_1px,transparent_1px)] bg-[size:50px_50px]"
          style={{
            transform: `translate(${mousePosition.x * 0.01}px, ${mousePosition.y * 0.01}px)`
          }}
        />
      </div>

      {/* Floating Code Elements */}
      {floatingCodeElements.map((element, index) => (
        <div
          key={index}
          className="absolute text-blue-300/30 font-mono text-sm pointer-events-none animate-float"
          style={{ 
            left: `${element.x}%`, 
            top: `${element.y}%`,
            animationDelay: `${element.delay}s`
          }}
        >
          {element.text}
        </div>
      ))}

      {/* Animated Circles */}
      <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl animate-pulse-slow" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '2s' }} />

      {/* Main Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center pt-8 md:pt-6">
          {/* Left Column - Text Content */}
          <AnimatedElement animation="slideLeft" delay={200}>
            {/* Main Heading */}
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-tight">
              <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-indigo-400 bg-clip-text text-transparent animate-gradient">
                POLYGONTeam
              </span>
            </h1>
            
            {/* Subtitle */}
            <AnimatedElement animation="slideUp" delay={300}>
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-white mb-6">
                Solutions for everyone
              </h2>
            </AnimatedElement>

            {/* Description */}
            <AnimatedElement animation="slideUp" delay={400}>
              <p className="text-lg md:text-xl text-blue-200 mb-8 leading-relaxed">
                Сигурност, ефективност и индивидуален подход - вече повече от 10 години.
              </p>
            </AnimatedElement>
          </AnimatedElement>

          {/* Right Column - Programming Language Icons */}
          <AnimatedElement animation="slideRight" delay={300} className="text-center">
            <AnimatedElement animation="slideUp" delay={500}>
              <h3 className="text-2xl font-bold text-white mb-8">
                Технологии с които работим
              </h3>
            </AnimatedElement>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-y-4 md:gap-y-6 gap-x-0 md:gap-x-1">
              {programmingLanguages.map((language, index) => (
                <AnimatedElement
                  key={language.name}
                  animation="scale"
                  delay={700 + index * 100}
                  className="group"
                >
                  <div className="text-center hover:scale-105 transition-all duration-300">
                    <div className="w-12 h-12 md:w-16 md:h-16 mx-auto bg-white rounded-xl flex items-center justify-center shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300">
                      <Image
                        src={language.icon}
                        alt={`${language.name} icon`}
                        width={32}
                        height={32}
                        className="w-8 h-8 md:w-10 md:h-10 object-contain"
                      />
                    </div>
                    <p className="text-white/80 text-xs mt-2 font-medium">{language.name}</p>
                  </div>
                </AnimatedElement>
              ))}
            </div>
          </AnimatedElement>
        </div>
      </div>

      {/* Scroll Indicator */}
      <AnimatedElement animation="fadeIn" delay={1200} className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="w-8 h-14 border-2 border-blue-400/50 rounded-full flex justify-center backdrop-blur-sm animate-pulse">
          <div className="w-1 h-3 bg-blue-400 rounded-full mt-3 animate-bounce" />
        </div>
      </AnimatedElement>

    </section>
  )
}

export default Hero 