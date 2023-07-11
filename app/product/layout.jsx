'use client'

import { useEffect } from 'react'

export default function ({ children }) {
  useEffect(() => {
    document.querySelectorAll('.lemonsqueezy-button').forEach((i) => {
      i.classList.add('pointer-events-none')
    })
    var script = document.createElement('script')
    script.onload = () => {
      setTimeout(() => {
        window.createLemonSqueezy()
        document.querySelectorAll('.lemonsqueezy-button').forEach((i) => {
          i.classList.remove('pointer-events-none')
        })
      }, 1000)
    }
    script.src = 'https://assets.lemonsqueezy.com/lemon.js'
    document.head.appendChild(script)
  }, [])
  return <>{children}</>
}
