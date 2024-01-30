import React, { useState, useEffect } from 'react'
import styled from 'styled-components'

const H1 = styled.h1`
  font-size: 48px;
  line-height: 1.2353641176;
  font-weight: 600;
  letter-spacing: -0.022em;
  font-family: SF Pro Text, SF Pro Icons, Helvetica Neue, Helvetica, Arial,
    sans-serif;
  background: transparent;
  margin-bottom: 3rem;
  @media (max-width: 980px) {
    font-size: 2rem;
  }
`

const PrincipalGallery = ({ gallery }) => {
  const mobil = window.innerWidth < 980

  return (
    <>
      <span id="section4"></span>
      <div
        style={{
          margin: '5.5% 13% 0',
          width: '74%',
          height: '90vh'
        }}
      >
        <H1>Galeria</H1>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: mobil
              ? 'repeat(auto-fill, minmax(50px, 100px))'
              : 'repeat(auto-fill, minmax(20px, 133px))',
            gridAutoFlow: mobil ? 'dense' : 'dense', // Esta propiedad intenta llenar los espacios más efectivamente
            gridAutoRows: mobil ? '50px' : null,
            gap: '10px',
            width: '100%',
            height: '80%',
            overflowY: 'hidden'
          }}
        >
          {gallery.map((item, index) => {
            // Intenta asignar tamaños de manera que las imágenes llenen mejor los espacios
            const spanRow = Math.ceil(Math.random() * 3)
            const spanCol = Math.ceil(Math.random() * 3)
            return (
              <div
                key={index}
                style={{
                  width: '100%', // Opcionalmente puedes establecer un ancho del 100% para llenar la celda
                  height: '100%', // Opcionalmente puedes establecer un alto del 100% para llenar la celda
                  gridRowEnd: `span ${spanRow}`,
                  gridColumnEnd: `span ${spanCol}`,
                  backgroundImage: `url(${item.img})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  backgroundRepeat: 'no-repeat',
                  borderRadius: '14px'
                }}
              />
            )
          })}
        </div>
      </div>
    </>
  )
}

export default PrincipalGallery
