import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

function ScrollToTop() {
  const { pathname } = useLocation()

  useEffect(() => {
    // Desplazamiento instantáneo a la parte superior de la página
    window.scrollTo(0, 0)
  }, [pathname]) // Se ejecutará cada vez que cambie la ruta

  return null // Este componente no necesita renderizar nada
}

export default ScrollToTop
