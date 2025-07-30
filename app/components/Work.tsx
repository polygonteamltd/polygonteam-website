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

        {/* Trusted Partners Section */}
        <AnimatedElement animation="slideUp" className="mt-20 pt-20">
          <div className="text-center mb-16">
            <h3 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Доверяват ни се <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">Клиенти и Партньори</span>
            </h3>
          </div>

          {/* Partners Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-8 md:gap-10">
            {[
              { 
                name: 'RSeat', 
                logo: '/img/partners/rseat.svg', 
                url: 'https://www.rseat-europe.com',
                category: 'Технологии',
                description: 'Sim Racing cockpits',
                bgColor: 'bg-black'
              },
              { 
                name: 'Robotlab', 
                logo: '/img/partners/robotlab.png', 
                url: 'https://www.robotlab.com/',
                category: 'Роботика',
                description: 'Robotics Company'
              },
              { 
                name: 'Planex Inf', 
                logo: '/img/partners/planex.png', 
                url: 'https://planexvt.com/',
                category: 'Строителство',
                description: 'Строителна компания'
              },
              { 
                name: 'ЕКСТРА ПАК', 
                logo: '/img/partners/extra.jpeg', 
                url: 'https://bags.bg',
                category: 'Производство',
                description: 'Производител на чанти и опаковки'
              },
              { 
                name: 'BCVT', 
                logo: '/img/partners/bcvt.png', 
                url: 'https://bcvt.eu/',
                category: 'Бизнес',
                description: 'Бизнес Център Велико Търново'
              },
              { 
                name: 'Щастливеца', 
                logo: '/img/partners/shtastliveca.png', 
                url: 'https://www.shtastliveca.com/',
                category: 'Ресторанти',
                description: 'Верига бутикови ресторанти'
              },
              { 
                name: 'Constantinoff', 
                logo: '/img/partners/const.png', 
                url: 'https://constantinoff-restobar.com/',
                category: 'Ресторанти',
                description: 'Верига бутикови ресторанти'
              },
              { 
                name: 'Еко Къмпинг Черноморец', 
                logo: '/img/partners/chernomorets.png', 
                url: 'https://chernomorets.eu',
                category: 'Туризъм',
                description: 'Комплекс и плаж'
              },
              { 
                name: 'ВАЛИ', 
                logo: '/img/partners/vali.jpg', 
                url: 'https://www.vali.bg',
                category: 'Технологии',
                description: 'Компютри и техника'
              },
              { 
                name: 'Ubiquiti', 
                logo: '/img/partners/ubiquiti.png', 
                url: 'https://ui.com/',
                category: 'Технологии',
                description: 'Устройства за мрежа и комуникации'
              },
            ].map((partner, index) => (
                              <AnimatedElement
                  key={index}
                  animation="fadeIn"
                  delay={index * 150}
                  className="group relative h-full"
                >
                  <a 
                    href={partner.url} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="block bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-blue-200 hover:-translate-y-2 group-hover:bg-gradient-to-br group-hover:from-blue-50 group-hover:to-indigo-50 h-full flex flex-col"
                  >
                    {/* Logo Container */}
                    <div className="relative mb-6 flex-shrink-0">
                      <div className={`w-20 h-20 mx-auto ${partner.bgColor || 'bg-white'} rounded-2xl shadow-md flex items-center justify-center p-3 group-hover:shadow-lg transition-all duration-300`}>
                        <img 
                          src={partner.logo} 
                          alt={partner.name}
                          className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-300"
                        />
                      </div>
                      {/* Category Badge */}
                      <div className="absolute -top-2 -right-2 bg-gradient-to-r from-blue-500 to-indigo-500 text-white text-xs font-medium px-2 py-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        {partner.category}
                      </div>
                    </div>
                    
                    {/* Content */}
                    <div className="text-center flex-grow flex flex-col justify-center">
                      <h4 className="font-bold text-gray-900 group-hover:text-blue-600 transition-colors duration-300 mb-2 text-lg">
                        {partner.name}
                      </h4>
                      <p className="text-sm text-gray-500 group-hover:text-gray-700 transition-colors duration-300 leading-relaxed">
                        {partner.description}
                      </p>
                    </div>
                    
                    {/* Hover Effect Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-indigo-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                  </a>
                </AnimatedElement>
            ))}
          </div>
        </AnimatedElement>

        {/* Bottom Separator */}
        <div className="pt-20 flex justify-center">
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full"></div>
        </div>
      </div>
    </section>
  )
}

export default Services 