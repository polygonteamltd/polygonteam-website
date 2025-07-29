'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, Cookie } from 'lucide-react'

const CookieConsent = () => {
  const [showConsent, setShowConsent] = useState(false)

  useEffect(() => {
    // Check if user has already given consent
    const hasConsent = localStorage.getItem('cookieConsent')
    if (!hasConsent) {
      setShowConsent(true)
    }
  }, [])

  const acceptCookies = () => {
    localStorage.setItem('cookieConsent', 'accepted')
    setShowConsent(false)
  }

  const declineCookies = () => {
    localStorage.setItem('cookieConsent', 'declined')
    setShowConsent(false)
  }

  return (
    <AnimatePresence>
      {showConsent && (
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 100 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className="fixed bottom-0 left-0 right-0 z-50 bg-gray-900 border-t border-gray-700 shadow-2xl"
        >
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6">
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
              {/* Cookie Icon and Text */}
              <div className="flex items-start space-x-4 flex-1">
                <div className="flex-shrink-0">
                  <Cookie className="h-8 w-8 text-blue-400" />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-white mb-2">
                    Използваме бисквитки
                  </h3>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    Използваме бисквитки за да подобрим вашето потребителско изживяване, 
                    да анализираме трафика и да персонализираме съдържанието. 
                    С продължаването на използването на сайта, вие се съгласявате с нашата 
                    <a href="/privacy" className="text-blue-400 hover:text-blue-300 underline ml-1">
                      политика за бисквитки
                    </a>.
                  </p>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex items-center space-x-3 flex-shrink-0">
                <button
                  onClick={declineCookies}
                  className="px-4 py-2 text-sm font-medium text-gray-300 hover:text-white transition-colors duration-200"
                >
                  Отхвърли
                </button>
                <button
                  onClick={acceptCookies}
                  className="px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium rounded-lg transition-colors duration-200"
                >
                  Приеми
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default CookieConsent 