// Facebook Pixel utility functions

export const FB_PIXEL_ID = process.env.NEXT_PUBLIC_FACEBOOK_PIXEL_ID || '1243356307431724'

export const pageView = () => {
  if (window.fbq) {
    window.fbq('track', 'PageView')
  }
}

export const event = (name, options = {}) => {
  if (window.fbq) {
    window.fbq('track', name, options)
  }
}

export const init = () => {
  if (typeof window !== 'undefined' && !window.fbq) {
    window.fbq = function() {
      window.fbq.callMethod
        ? window.fbq.callMethod.apply(window.fbq, arguments)
        : window.fbq.queue.push(arguments)
    }
    window.fbq.push = window.fbq
    window.fbq.loaded = true
    window.fbq.version = '2.0'
    window.fbq.queue = []
    window.fbq('init', FB_PIXEL_ID)
  }
}

// Common events for easy use
export const addToCart = (options = {}) => {
  event('AddToCart', options)
}

export const initiateCheckout = (options = {}) => {
  event('InitiateCheckout', options)
}

export const purchase = (options = {}) => {
  event('Purchase', options)
}

export const lead = (options = {}) => {
  event('Lead', options)
}

export const completeRegistration = (options = {}) => {
  event('CompleteRegistration', options)
}
