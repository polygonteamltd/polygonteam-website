'use client'

import { motion } from 'framer-motion'
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
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20 mt-0"
        >
          <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-8">
            Нашият Подход / <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">Как Работим</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
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
            </motion.div>
          ))}
        </div>

        {/* Trusted Partners Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-20 pt-20"
        >
          <div className="text-center mb-10">
            <h3 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Част от нашите <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">Клиенти и Партньори</span>
            </h3>
          </div>

          {/* Partners Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-white to-gray-50 rounded-3xl p-8 md:p-12 shadow-xl border border-gray-100"
          >
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 md:gap-8">
              {[
                { 
                  name: 'RSeat', 
                  logo: '/img/partners/rseat.svg', 
                  url: 'https://www.rseat-europe.com',
                  color: 'bg-black',
                  hoverColor: 'bg-black-50',
                  description: 'RSEAT | Sim Racing cockpits'
                },
                { 
                  name: 'Robotlab', 
                  logo: '/img/partners/robotlab.png', 
                  url: 'https://www.robotlab.com/',
                  description: 'Robotics Company'
                },
                { 
                  name: 'Planex Inf', 
                  logo: '/img/partners/planex.png', 
                  url: 'https://planexvt.com/',
                  description: 'Строителна компания'
                },
                { 
                  name: 'ЕКСТРА ПАК', 
                  logo: '/img/partners/extra.jpeg', 
                  url: 'https://bags.bg',
                  description: 'Производител на чанти и опаковки'
                },
                { 
                  name: 'BCVT', 
                  logo: '/img/partners/bcvt.png', 
                  url: 'https://bcvt.eu/',
                  description: 'Бизнес Център Велико Търново'
                },
                { 
                  name: 'Щастливеца', 
                  logo: '/img/partners/shtastliveca.png', 
                  url: 'https://www.shtastliveca.com/',
                  description: 'Верига бутикови ресторанти'
                },
                { 
                    name: 'Constantinoff', 
                    logo: '/img/partners/const.png', 
                    url: 'https://constantinoff-restobar.com/',
                    description: 'Верига бутикови ресторанти'
                }
              ].map((partner, index) => (
                <motion.a
                  key={index}
                  href={partner.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="group block text-center p-4 rounded-2xl bg-white hover:bg-gradient-to-br hover:from-blue-50 hover:to-indigo-50 transition-all duration-300 shadow-sm hover:shadow-lg border border-gray-100 hover:border-blue-200"
                >
                  <div className={`w-16 h-16 mx-auto mb-3 ${partner.color} rounded-xl flex items-center justify-center group-hover:${partner.hoverColor} transition-all duration-300 p-2`}>
                    <img 
                      src={partner.logo} 
                      alt={partner.name}
                      className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                  <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors duration-300 mb-1">
                    {partner.name}
                  </h4>
                  <p className="text-xs text-gray-500 group-hover:text-gray-600 transition-colors duration-300">
                    {partner.description}
                  </p>
                </motion.a>
              ))}
            </div>
          </motion.div>
        </motion.div>

        {/* Bottom Separator */}
        <div className="pt-20 flex justify-center">
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full"></div>
        </div>
      </div>
    </section>
  )
}

export default Services 