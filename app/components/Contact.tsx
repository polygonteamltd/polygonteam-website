'use client'

import { AnimatedElement } from './AnimatedElement'
import { Mail, Phone, MapPin, Clock, MessageCircle } from 'lucide-react'

const Contact = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedElement animation="slideUp" className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Свържете се с <span className="text-blue-600">нас</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Готови ли сте да оптимизирате бизнеса си с правилната технология?
          </p>
        </AnimatedElement>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Left Side - Contact Information */}
          <AnimatedElement animation="slideLeft">
            <h3 className="text-2xl font-bold text-gray-900 mb-8">Информация за контакти</h3>
            
            <div className="space-y-8 mb-12">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Mail className="h-6 w-6 text-blue-600" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">Имейл</h4>
                  <p className="text-gray-600">polygonteamltd@gmail.com</p>
                  <p className="text-gray-600">hi@polygonteam.com</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Phone className="h-6 w-6 text-blue-600" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">Телефон</h4>
                  <p className="text-gray-600">+359 885 270 398</p>
                  <p className="text-gray-600">+359 879 288 335</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center flex-shrink-0">
                  <MapPin className="h-6 w-6 text-blue-600" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">Адрес</h4>
                  <p className="text-gray-600">ул. "Магистрална" 3, етж. 2</p>
                  <p className="text-gray-600">Велико Търново 5000, България</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Clock className="h-6 w-6 text-blue-600" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">Работно време</h4>
                  <p className="text-gray-600">Понеделник - Петък: 09:00 - 17:00</p>
                  <p className="text-gray-600">Събота - Неделя: Почивен ден</p>
                </div>
              </div>
            </div>

            {/* Contact Button */}
            <a href="mailto:polygonteamltd@gmail.com" className="w-full bg-blue-600 text-white py-4 rounded-xl font-semibold text-lg hover:bg-blue-700 transition-colors duration-300 flex items-center justify-center space-x-2">
              <MessageCircle className="h-5 w-5" />
              <span>Изпратете запитване</span>
            </a>
          </AnimatedElement>

          {/* Right Side - Google Maps */}
          <AnimatedElement animation="slideRight" className="h-96 lg:h-auto">
                          <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2914.53623240152!2d25.619465276450512!3d43.07222058981236!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40a9266d19f47dc1%3A0xdf70ba28de0b428c!2zUE9MWUdPTlRlYW0gbHRkIC0g0J_QntCb0JjQk9Ce0J0g0KLQuNC50Lwg0J7QntCU!5e0!3m2!1sbg!2sbg!4v1753779145444!5m2!1sbg!2sbg&hl=bg"
                width="100%"
                height="100%"
                style={{ border: 0, borderRadius: '16px', filter: 'grayscale(100%)' }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full min-h-[400px]"
              ></iframe>
          </AnimatedElement>
        </div>
      </div>
    </section>
  )
}

export default Contact 