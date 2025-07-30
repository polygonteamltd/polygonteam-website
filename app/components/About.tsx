'use client'

import { AnimatedElement } from './AnimatedElement'

const About = () => {
  const features = [
    {
      title: 'Над 10 години опит в индустрията'
    },
    {
      title: 'Индивидуален подход към всеки проект'
    },
    {
      title: 'Експертиза в автоматизацията - както на бизнес процеси, така и на сгради и инрфаструктура'
    },
    {
      title: 'Дългосрочни партньорства с клиенти от България и чужбина'
    },
    {
      title: 'Сигурност, поддръжка и устойчив растеж'
    }
  ]

  return (
    <section className="bg-gradient-to-br from-gray-50 to-white">
      <div className="pt-20 container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          {/* Left Column - Content */}
          <AnimatedElement animation="slideLeft" className="relative">
            <div>
              <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                За <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">POLYGONTeam</span>
              </h2>
              <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full mb-8"></div>
              
              <div className="space-y-6">
                <p className="text-xl text-gray-700 leading-relaxed">
                  Ние сме IT компания с над 10 години опит в разработването на индивидуални софтуерни решения,
                  автоматизация на бизнес процеси и внедряване на сградни автоматизации.
                </p>
                <p className="text-lg text-gray-600 leading-relaxed">
                  Създаваме технологии по мярка - адаптирани към уникалните нужди на всяка организация.
                  Нашите решения не просто работят - те създават стойност, оптимизират процеси и отключват нови възможности
                  за растеж.
                </p>
              </div>
            </div>
          </AnimatedElement>

          {/* Right Column - Why Choose Us */}
          <AnimatedElement animation="slideRight" className="relative">
            <div className="bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-800 rounded-3xl p-10 text-white shadow-2xl">
              <h3 className="text-3xl font-bold mb-6">Какво ни отличава?</h3>
              <div className="space-y-6">
                {features.map((feature, index) => (
                  <AnimatedElement 
                    key={index} 
                    animation="slideLeft"
                    delay={index * 100}
                    className="flex items-start space-x-4"
                  >
                    <div className="w-3 h-3 bg-yellow-400 rounded-full mt-2 flex-shrink-0 shadow-lg"></div>
                    <div>
                      <h4 className="text-lg mb-1">{feature.title}</h4>
                    </div>
                  </AnimatedElement>
                ))}
              </div>
            </div>
          </AnimatedElement>
        </div>
        
        {/* Bottom Separator */}
        <div className="pt-20 flex justify-center">
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full"></div>
        </div>
      </div>
    </section>
  )
}

export default About 