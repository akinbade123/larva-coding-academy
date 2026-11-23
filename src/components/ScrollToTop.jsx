import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

// Scroll to the top whenever the route changes, so new pages don't open mid-way down.
const ScrollToTop = () => {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  return null
}

export default ScrollToTop
