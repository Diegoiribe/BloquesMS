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
  height: 10%;
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
                backgroundImage: `url(https://www.malagahoy.es/2023/11/15/malaga/Carlos-Barrera-CEO-Enrolux-cambiando_1848425274_197071928_667x375.png)`,
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
                backgroundPosition: 'center bottom 10%'
              }}
            >
              <Inf>
                <p>Luis A. Meza Salazar</p>
              </Inf>
            </Imagen>
          </DivImg>
          <DivInf>
            <Titulo>
              <P>
                <Span>Crear solo, inspirar juntos: </Span>
                la esencia de la arquitectura moderna.
              </P>
            </Titulo>
            <Subtitulo>
              {mobil ? (
                <p style={{ background: 'transparent' }}>
                  La arquitectura y el diseño de interiores son más que la suma
                  de sus partes.
                </p>
              ) : (
                <p style={{ background: 'transparent' }}>
                  La arquitectura y el diseño de interiores son más que la suma
                  de sus partes. Son la colaboración de ideas, la convergencia
                  de arte y la funcionalidad vivida. A cada trazo y textura,
                  inyecto la visión colectiva de quienes serán sus habitantes y
                  los artesanos que lo hacen realidad. Descubre cómo cada
                  espacio es una historia de cooperación y creatividad.
                </p>
              )}
            </Subtitulo>
          </DivInf>
        </Container>
      </Div>
    </>
  )
}

export default PrincipalBody
