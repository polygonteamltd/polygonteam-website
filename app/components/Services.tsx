'use client'

import { motion } from 'framer-motion'
import { 
  Code, 
  Settings, 
  Building2, 
  Zap,
  Users,
  Target,
  Rocket
} from 'lucide-react'

const Services = () => {
  const services = [
    {
      icon: Code,
      title: 'Индивидуални софтуерни решения',
      description: 'Системи по заявка, web apps, API интеграции, IoT решения.',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Settings,
      title: 'Автоматизация на бизнес процеси',
      description: 'ERP системи, CRM интеграции, интеграция с други системи.',
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: Building2,
      title: 'Сградна автоматизация(BMS)',
      description: 'Умни офиси, контрол на достъп, енергийна ефективност, инфраструктура.',
      color: 'from-green-500 to-emerald-500'
    }
  ]

  return (
    <section className="pt-20 bg-gradient-to-br from-gray-50 via-white to-blue-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20 mt-0"
        >
          <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-8">
            Нашите <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">Услуги</span>
          </h2>
        </motion.div>

        {/* Main Services Grid */}
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

        {/* Bottom Separator */}
        <div className="pt-20 flex justify-center">
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full"></div>
        </div>
      </div>
    </section>
  )
}

export default Services 