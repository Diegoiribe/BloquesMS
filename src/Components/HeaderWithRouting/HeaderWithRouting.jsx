// HeaderWithRouting.js
import React from 'react'
import { useLocation } from 'react-router-dom'
import Header from '../Header/Header' // Asume que Header es tu componente existente

const HeaderWithRouting = ({ usuarios }) => {
  const location = useLocation()

  if (location.pathname === '/') {
    return null // No renderiza nada si la ruta es '/'
  }

  return <Header usuarios={usuarios} /> // Renderiza Header en otras rutas
}

export default HeaderWithRouting
