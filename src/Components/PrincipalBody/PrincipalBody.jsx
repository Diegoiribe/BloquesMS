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
                backgroundImage: `url(https://static.vecteezy.com/system/resources/previews/032/318/935/non_2x/ai-generated-modern-handsome-businessman-suit-confidence-attractive-successful-white-caucasian-person-professional-adult-male-hair-executive-business-mature-men-portrait-studio-free-photo.jpg)`,
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
                backgroundPosition: 'center top 10%'
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
