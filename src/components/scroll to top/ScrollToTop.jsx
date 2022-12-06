import React from 'react'
import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

function ScrollToTop() {
    const routePath = useLocation()
    const onTop = () => {
        window.scrollTo(0, 0)
    }
    useEffect(() => (
        onTop()
    ),[routePath])
  return null
}

export default ScrollToTop