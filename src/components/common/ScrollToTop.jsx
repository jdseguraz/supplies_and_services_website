import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

const ScrollToTop = ({ children, behavior = 'instant' }) => {
  const location = useLocation()

  useEffect(() => {
    // Scroll hasta arriba cuando cambie la ruta
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: behavior // 'instant' para scroll inmediato, 'smooth' para scroll suave
    })
  }, [location.pathname, behavior]) // Se ejecuta cada vez que cambia la ruta

  return children
}

export default ScrollToTop