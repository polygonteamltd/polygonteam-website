'use client'

import { motion, useScroll, useTransform, useSpring } from 'framer-motion'
import { ArrowRight, Play, Code, Zap, Cpu, Database } from 'lucide-react'
import { useEffect, useState } from 'react'
import Image from 'next/image'

const Hero = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const { scrollY } = useScroll()
  const y = useTransform(scrollY, [0, 1000], [0, 100])
  const opacity = useTransform(scrollY, [0, 1000], [1, 0])
  const springY = useSpring(y, { stiffness: 300, damping: 30 })

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }
    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

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
    { name: 'Docker', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg' },
    { name: 'PostgreSQL', icon: '/img/icons/icons/postgres.png' },
    { name: 'MariaDB', icon: '/img/icons/icons/mariadb.png' },
  ]

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900">
      {/* Matrix Rain Effect */}
      <div className="absolute inset-0 overflow-hidden">
        {matrixRain.map((drop) => (
          <motion.div
            key={drop.id}
            className="absolute text-green-400 text-xs font-mono opacity-20"
            style={{ left: `${drop.x}%` }}
            initial={{ y: -100, opacity: 0 }}
            animate={{ 
              y: '100vh', 
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: drop.speed,
              delay: drop.delay,
              repeat: Infinity,
              ease: "linear"
            }}
          >
            {drop.id % 3 === 0 ? '1' : drop.id % 3 === 1 ? '0' : '1'}
          </motion.div>
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
        <motion.div
          key={index}
          className="absolute text-blue-300/30 font-mono text-sm pointer-events-none"
          style={{ left: `${element.x}%`, top: `${element.y}%` }}
          initial={{ opacity: 0, scale: 0 }}
          animate={{ 
            opacity: [0, 0.7, 0],
            scale: [0.8, 1.2, 0.8],
            y: [-10, 10, -10],
            rotate: [0, 10, 0]
          }}
          transition={{
            duration: 6,
            delay: element.delay,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          {element.text}
        </motion.div>
      ))}

      {/* Animated Circles */}
      <motion.div
        className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.6, 0.3],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      <motion.div
        className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl"
        animate={{
          scale: [1.2, 1, 1.2],
          opacity: [0.4, 0.7, 0.4],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      {/* Main Content */}
      <motion.div 
        className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10"
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center pt-8 md:pt-6">
          {/* Left Column - Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Main Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-tight"
            >
              <motion.span
                animate={{ 
                  backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
                }}
                transition={{ duration: 3, repeat: Infinity }}
                className="bg-gradient-to-r from-blue-400 via-cyan-400 to-indigo-400 bg-clip-text text-transparent bg-[length:200%_200%]"
              >
                POLYGONTeam
              </motion.span>
            </motion.h1>
            
            {/* Subtitle */}
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-2xl md:text-3xl lg:text-4xl font-semibold text-white mb-6"
            >
              Solutions for everyone
            </motion.h2>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-lg md:text-xl text-blue-200 mb-8 leading-relaxed"
            >
              Сигурност, ефективност и индивидуален подход - вече повече от 10 години.
            </motion.p>

          </motion.div>

          {/* Right Column - Programming Language Icons */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-center"
          >
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="text-2xl font-bold text-white mb-8"
            >
              Технологии с които работим
            </motion.h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-y-4 md:gap-y-6 gap-x-0 md:gap-x-1">
              {programmingLanguages.map((language, index) => (
                <motion.div
                  key={language.name}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.7 + index * 0.1 }}
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
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.2 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div 
          className="w-8 h-14 border-2 border-blue-400/50 rounded-full flex justify-center backdrop-blur-sm"
          animate={{ 
            borderColor: ['rgba(96, 165, 250, 0.5)', 'rgba(96, 165, 250, 1)', 'rgba(96, 165, 250, 0.5)']
          }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <motion.div
            animate={{ y: [0, 20, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-1 h-3 bg-blue-400 rounded-full mt-3"
          />
        </motion.div>
      </motion.div>

    </section>
  )
}

export default Hero 