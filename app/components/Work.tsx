'use client'

import { AnimatedElement } from './AnimatedElement'
import { BarChart3, Code, HeadphonesIcon } from 'lucide-react'

const Services = () => {
  const services = [
    {
      icon: BarChart3,
      title: 'Анализ на нуждите',
      description: 'Вникваме в процесите Ви за да разберем какви са вашите нужди и какви са вашите цели.',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Code,
      title: 'Разработка по мярка',
      description: 'Проектираме и създаваме решения, адаптирани към вашия бизнес и нужди.',
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: HeadphonesIcon,
      title: 'Поддръжка и развитие',
      description: 'Оставаме с вас и след внедряването - растем заедно.',
      color: 'from-green-500 to-emerald-500'
    }
  ]

  return (
    <section className="pt-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedElement animation="slideUp" className="text-center mb-20 mt-0">
          <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-8">
            Нашият Подход / <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">Как Работим</span>
          </h2>
        </AnimatedElement>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {services.map((service, index) => (
            <AnimatedElement
              key={index}
              animation="slideUp"
              delay={index * 100}
              className="group bg-white rounded-3xl p-10 shadow-xl hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-blue-200 hover:-translate-y-2"
            >
              <div className={`w-20 h-20 rounded-3xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-500 shadow-lg`}>
                <service.icon className="h-10 w-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6 group-hover:text-blue-600 transition-colors duration-300">
                {service.title}
              </h3>
              <p className="text-gray-600 leading-relaxed text-lg">
                {service.description}
              </p>
            </AnimatedElement>
          ))}
        </div>

        {/* Bottom Separator */}
        <div className="pt-20 flex justify-center">
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full"></div>
        </div>
      </div>
    </section>
  )
}

export default Services 