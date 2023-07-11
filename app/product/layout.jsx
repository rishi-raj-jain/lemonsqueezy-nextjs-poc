'use client'

import { useEffect } from 'react'

export default function ({ children }) {
  useEffect(() => {
    document.querySelectorAll('.lemonsqueezy-button').forEach((i) => {
      i.classList.add('pointer-events-none')
    })
    let setLemons
    var script = document.createElement('script')
    script.onload = () => {
      setLemons = setInterval(() => {
        if (window.LemonSqueezy) {
        } else {
          window.createLemonSqueezy()
        }
        document.querySelectorAll('.lemonsqueezy-button').forEach((i) => {
          i.classList.remove('pointer-events-none')
        })
        clearInterval(setLemons)
      }, 1000)
    }
    script.src = 'https://assets.lemonsqueezy.com/lemon.js'
    document.head.appendChild(script)
    return () => {
      try {
        if (setLemons) clearInterval(setLemons)
      } catch (e) {}
    }
  }, [])
  return <>{children}</>
}
