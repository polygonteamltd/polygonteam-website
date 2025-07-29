'use client'

import React, { forwardRef } from 'react'
import { useAnimation } from '../hooks/useAnimation'

interface AnimatedElementProps {
  children: React.ReactNode
  className?: string
  animation?: 'fadeIn' | 'slideUp' | 'slideLeft' | 'slideRight' | 'scale' | 'rotate'
  delay?: number
  duration?: number
  threshold?: number
  triggerOnce?: boolean
  style?: React.CSSProperties
}

export const AnimatedElement = forwardRef<HTMLDivElement, AnimatedElementProps>(
  ({ 
    children, 
    className = '', 
    animation = 'fadeIn', 
    delay = 0, 
    duration = 0.6,
    threshold = 0.1,
    triggerOnce = true,
    style = {}
  }, ref) => {
    const { ref: animationRef, isVisible } = useAnimation({ 
      threshold, 
      triggerOnce 
    })

    const combinedRef = (node: HTMLDivElement) => {
      if (typeof ref === 'function') {
        ref(node)
      } else if (ref) {
        ref.current = node
      }
      if (animationRef.current !== node) {
        animationRef.current = node
      }
    }

    const getAnimationClasses = () => {
      const baseClasses = 'transition-all duration-700 ease-out'
      
      if (!isVisible) {
        switch (animation) {
          case 'fadeIn':
            return `${baseClasses} opacity-0`
          case 'slideUp':
            return `${baseClasses} opacity-0 translate-y-8`
          case 'slideLeft':
            return `${baseClasses} opacity-0 -translate-x-8`
          case 'slideRight':
            return `${baseClasses} opacity-0 translate-x-8`
          case 'scale':
            return `${baseClasses} opacity-0 scale-95`
          case 'rotate':
            return `${baseClasses} opacity-0 rotate-12`
          default:
            return `${baseClasses} opacity-0`
        }
      }

      switch (animation) {
        case 'fadeIn':
          return `${baseClasses} opacity-100`
        case 'slideUp':
          return `${baseClasses} opacity-100 translate-y-0`
        case 'slideLeft':
          return `${baseClasses} opacity-100 translate-x-0`
        case 'slideRight':
          return `${baseClasses} opacity-100 translate-x-0`
        case 'scale':
          return `${baseClasses} opacity-100 scale-100`
        case 'rotate':
          return `${baseClasses} opacity-100 rotate-0`
        default:
          return `${baseClasses} opacity-100`
      }
    }

    return (
      <div
        ref={combinedRef}
        className={`${getAnimationClasses()} ${className}`}
        style={{
          ...style,
          transitionDelay: `${delay}ms`,
          transitionDuration: `${duration * 1000}ms`
        }}
      >
        {children}
      </div>
    )
  }
)

AnimatedElement.displayName = 'AnimatedElement' 