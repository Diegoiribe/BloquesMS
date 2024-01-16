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
`
const DivImg = styled.div`
  width: 45%;
  height: 100%;
  border-radius: 1rem;
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
`

const Span = styled.span`
  font-family: Euclid Circular, Arial, sans-serif, Helvetica;
  background: transparent;
  font-size: 2rem;
  color: ${azul};
  font-weight: 600;
`

const Subtitulo = styled.div`
  width: 100%;
  height: 30%;
  font-weight: 300;
  background: transparent;
`

const PrincipalBody = () => {
  return (
    <>
      <span id="section2"></span>

      <Div>
        <Container>
          <DivImg>
            <Imagen
              style={{
                backgroundImage: `url(https://scontent.fcul1-1.fna.fbcdn.net/v/t39.30808-6/395213798_6771843052893064_8916048483516904193_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=dd5e9f&_nc_eui2=AeF2y1FDPxMlf2VgYPD7ARRfQehpdhnv7mlB6Gl2Ge_uaRfFtTjlkboKn8t7f-d9I8EPSf-ZMlaoxwCrqZRpazaU&_nc_ohc=D2vgM7_O1xgAX-gzLrq&_nc_ht=scontent.fcul1-1.fna&oh=00_AfBGfIVQfUIWgd2Tlg3rFzusypGnhILCHuYmj-_q_gpYSQ&oe=65A3E955)`,
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
              <p style={{ background: 'transparent' }}>
                La arquitectura y el diseño de interiores son más que la suma de
                sus partes. Son la colaboración de ideas, la convergencia de
                arte y la funcionalidad vivida. A cada trazo y textura, inyecto
                la visión colectiva de quienes serán sus habitantes y los
                artesanos que lo hacen realidad. Descubre cómo cada espacio es
                una historia de cooperación y creatividad.
              </p>
            </Subtitulo>
          </DivInf>
        </Container>
      </Div>
    </>
  )
}

export default PrincipalBody
