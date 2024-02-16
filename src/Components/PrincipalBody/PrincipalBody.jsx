import React from 'react'
import styled from 'styled-components'
import { useState, useEffect } from 'react'
import { azul } from '../UI/UI'

const Div = styled.div`
  width: 100%;
  height: 92.5vh;
  margin: 5.5% 0 0;
  display: flex;
  align-items: center;
  justify-content: center;
`

const Container = styled.div`
  width: 77%;
  height: 80%;
  display: flex;
  align-items: center;
  justify-content: space-around;
  @media (max-width: 980px) {
    flex-direction: column;
    gap: 2rem;
    height: 100%;
  }
`
const DivImg = styled.div`
  width: 45%;
  height: 100%;
  border-radius: 1rem;
  @media (max-width: 980px) {
    width: 100%;
  }
`

const Imagen = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: end;
`
const Inf = styled.div`
  width: 100%;
  height: 20%;
  background: transparent;
  padding: 1rem;
  p {
    background: transparent;
    color: white;
  }
`
const DivInf = styled.div`
  width: 45%;
  height: 100%;
  background: #f6f9fa;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 1rem;
  gap: 1.5rem;
  padding: 2.5rem;
  @media (max-width: 980px) {
    width: 100%;
    padding: 1rem;
  }
`
const MSI = styled.a`
  text-decoration: none;
  color: black;
  font-weight: bold;
  width: 40%;
  border-radius: 10px;
  text-align: center;
  padding: 0.5rem;
  background: rgba(0, 0, 0, 0.4);

  &:hover {
    background: #056dae;
    color: white;
  }
`

const Titulo = styled.div`
  width: 100%;
  height: 30%;
  background: transparent;
  display: flex;
  align-items: end;
`
const P = styled.p`
  font-family: Euclid Circular, Arial, sans-serif, Helvetica;
  background: transparent;
  font-size: 2rem;
  font-weight: 600;
  @media (max-width: 980px) {
    font-size: 1.15rem;
  }
`

const Span = styled.span`
  font-family: Euclid Circular, Arial, sans-serif, Helvetica;
  background: transparent;
  font-size: 2rem;
  color: ${azul};
  font-weight: 600;
  @media (max-width: 980px) {
    font-size: 1.15rem;
  }
`

const Subtitulo = styled.div`
  width: 100%;
  height: 30%;
  font-weight: 300;
  background: transparent;
  @media (max-width: 980px) {
    p {
      font-size: 0.85rem;
    }
  }
`

const PrincipalBody = () => {
  const mobil = window.innerWidth < 980

  return (
    <>
      <span id="section2"></span>

      <Div>
        <Container>
          <DivImg>
            <Imagen
              style={{
                backgroundImage: `url(https://www.bbva.mx/content/dam/public-web/mexico/photos/etiqueta-promociones-hombre.im1626295788608im.png?imwidth=1600)`,
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
                backgroundPosition: 'center top 10%'
              }}
            >
              <Inf>
                <p>.</p>
              </Inf>
            </Imagen>
          </DivImg>
          <DivInf>
            <Titulo>
              <P>
                Se
                <Span> dueño y ganas</Span> por vacacionar desde $2,500.00
              </P>
            </Titulo>
            <Subtitulo>
              {mobil ? (
                <p style={{ background: 'transparent' }}>
                  Estableces un plan de ahorro mensual para disfrutar del
                  departamento cada año, recibiendo tu inversión total más los
                  rendimientos generados por el alquiler de tu propiedad, los
                  cuales se calculan anualmente.
                </p>
              ) : (
                <p style={{ background: 'transparent' }}>
                  Estableces un plan de ahorro mensual para disfrutar del
                  departamento cada año, recibiendo tu inversión total más los
                  rendimientos generados por el alquiler de tu propiedad, los
                  cuales se calculan anualmente.
                </p>
              )}
            </Subtitulo>
            <div
              style={{
                display: 'flex',
                width: '100%',
                justifyContent: 'space-around'
              }}
            >
              <MSI href="https://www.bloquesms.com/home/informacion/5an6AJGIYfICqNFwq6N8/undefined">
                24 Meses
              </MSI>
              <MSI href="https://www.bloquesms.com/home/informacion/5an6AJGIYfICqNFwq6N8/undefined">
                12 Meses
              </MSI>
            </div>
          </DivInf>
        </Container>
      </Div>
    </>
  )
}

export default PrincipalBody
