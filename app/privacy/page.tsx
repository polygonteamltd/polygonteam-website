'use client'

import { AnimatedElement } from '../components/AnimatedElement'
import { ArrowLeft } from 'lucide-react'
import Link from 'next/link'

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center space-x-4">
            <Link 
              href="/"
              className="flex items-center space-x-2 text-gray-600 hover:text-blue-600 transition-colors duration-300"
            >
              <ArrowLeft className="h-5 w-5" />
              <span>Назад към началната страница</span>
            </Link>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <AnimatedElement animation="slideUp">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl font-bold text-gray-900 mb-8">Политика за поверителност</h1>
            
            <div className="bg-white rounded-lg shadow-sm border p-8 space-y-8">
              
              {/* Company Info */}
              <section>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">За POLYGONTeam</h2>
                <p className="text-gray-700 leading-relaxed">
                  POLYGONTeam Ltd е компания, специализирана в областта на информационните технологии и сигурността. 
                  С адрес: ул. "Магистрална" 3, етж. 2, Велико Търново 5000, България.
                </p>
              </section>

              {/* Personal Data Collection */}
              <section>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">Събиране на лични данни</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Събираме следните видове лични данни:
                </p>
                <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                  <li>Име и контактна информация (имейл, телефон)</li>
                  <li>Информация за компанията, която представлявате</li>
                  <li>Технически данни (IP адрес, тип браузър, операционна система)</li>
                  <li>Данни за използването на нашия уебсайт</li>
                </ul>
              </section>

              {/* Purpose of Data Collection */}
              <section>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">Цел на събирането на данни</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Вашите лични данни се използват за следните цели:
                </p>
                <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                  <li>Предоставяне на нашите услуги и поддръжка</li>
                  <li>Комуникация с вас относно проекти и въпроси</li>
                  <li>Подобряване на нашите услуги и уебсайт</li>
                  <li>Спазване на правни изисквания</li>
                  <li>Маркетингови цели (само с ваше съгласие)</li>
                </ul>
              </section>

              {/* Data Protection */}
              <section>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">Защита на данните</h2>
                <p className="text-gray-700 leading-relaxed">
                  Прилагаме подходящи технически и организационни мерки за защита на вашите лични данни 
                  срещу неоторизиран достъп, промяна, разкриване или унищожаване. Нашите мерки включват 
                  криптиране на данните, редовни резервни копия и ограничен достъп до личните данни.
                </p>
              </section>

              {/* Data Retention */}
              <section>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">Съхранение на данните</h2>
                <p className="text-gray-700 leading-relaxed">
                  Запазваме вашите лични данни само за времето, необходимо за постигане на целите, 
                  за които са събрани, или за период, изискван от приложимото законодателство. 
                  Обикновено това е период от 5 години след последната комуникация.
                </p>
              </section>

              {/* Your Rights */}
              <section>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">Вашите права</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Според GDPR имате следните права:
                </p>
                <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                  <li>Право на достъп до вашите лични данни</li>
                  <li>Право на поправяне на неточни данни</li>
                  <li>Право на изтриване на данните ("право на забвене")</li>
                  <li>Право на ограничаване на обработката</li>
                  <li>Право на преносимост на данните</li>
                  <li>Право на възражение срещу обработката</li>
                  <li>Право на оттегляне на съгласието</li>
                </ul>
              </section>

              {/* Cookies Policy */}
              <section>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">Политика за бисквитки (Cookies)</h2>
                
                <h3 className="text-xl font-semibold text-gray-800 mb-3">Какво са бисквитките?</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Бисквитките са малки текстови файлове, които се запазват на вашето устройство, 
                  когато посещавате нашия уебсайт. Те помагат за подобряване на функционалността 
                  и потребителското изживяване.
                </p>

                <h3 className="text-xl font-semibold text-gray-800 mb-3">Видове бисквитки, които използваме:</h3>
                
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">Необходими бисквитки</h4>
                    <p className="text-gray-700 text-sm">
                      Тези бисквитки са необходими за основната функционалност на уебсайта и не могат да бъдат деактивирани.
                    </p>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">Функционални бисквитки</h4>
                    <p className="text-gray-700 text-sm">
                      Подобряват функционалността и персонализацията на уебсайта.
                    </p>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">Аналитични бисквитки</h4>
                    <p className="text-gray-700 text-sm">
                      Помагат ни да разберем как посетителите използват нашия уебсайт.
                    </p>
                  </div>
                </div>

                <h3 className="text-xl font-semibold text-gray-800 mb-3 mt-6">Управление на бисквитките</h3>
                <p className="text-gray-700 leading-relaxed">
                  Можете да управлявате настройките за бисквитките чрез настройките на вашия браузър. 
                  Имайте предвид, че деактивирането на определени бисквитки може да повлияе на 
                  функционалността на уебсайта.
                </p>
              </section>

              {/* Third Party Services */}
              <section>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">Услуги на трети страни</h2>
                <p className="text-gray-700 leading-relaxed">
                  Може да използваме услуги на трети страни, като Google Analytics, за анализиране 
                  на трафика на нашия уебсайт. Тези услуги имат собствени политики за поверителност, 
                  които препоръчваме да прочетете.
                </p>
              </section>

              {/* Contact Information */}
              <section>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">Контактна информация</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  За въпроси относно тази политика за поверителност или за упражняване на вашите права, 
                  моля, свържете се с нас:
                </p>
                <div className="bg-gray-50 rounded-lg p-4">
                  <p className="text-gray-700">
                    <strong>Email:</strong> polygonteamltd@gmail.com<br />
                    <strong>Телефон:</strong> +359 885 270 398<br />
                    <strong>Адрес:</strong> ул. "Магистрална" 3, етж. 2, Велико Търново 5000, България
                  </p>
                </div>
              </section>

              {/* Updates */}
              <section>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">Обновления на политиката</h2>
                <p className="text-gray-700 leading-relaxed">
                  Тази политика за поверителност може да бъде обновявана периодично. Ще уведомим за 
                  значителни промени чрез публикуване на обновената политика на нашия уебсайт.
                </p>
              </section>

              {/* Last Updated */}
              <section className="border-t pt-6">
                <p className="text-sm text-gray-500">
                  <strong>Последна актуализация:</strong> 1 януари 2025 г.
                </p>
              </section>

            </div>
          </div>
        </AnimatedElement>
      </div>
    </div>
  )
}

export default PrivacyPolicy 