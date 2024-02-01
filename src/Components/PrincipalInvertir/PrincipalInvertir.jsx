import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const Div = styled.div`
  width: 100%;
  height: 100vh;
  background: linear-gradient(rgb(5, 109, 174), #ffffff);
  display: flex;
  flex-direction: column;
  padding: 10vh 12.5vw;
  @media (max-width: 980px) {
    height: auto;
  }
`
const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
  padding: 2rem;
  gap: 2rem;
  @media (max-width: 980px) {
    flex-direction: column-reverse;
    padding: 1rem;
  }
`
const Img = styled.div`
  background: url('https://torrehamlet.com/img/contacto-departamentos-hamlet-torre.jpg');
  background-size: cover;
  background-position: top;
  background-repeat: no-repeat;
  border-radius: 10px;
  width: 39%;
  height: 100%;
  @media (max-width: 980px) {
    width: 66vw;
    height: 30vh;
    background-position: center;
  }
`
const Text = styled.div`
  width: 58%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0.5rem;
  gap: 1.5rem;
  ol {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    padding-left: 3rem;

    li {
      display: flex;
      flex-direction: row;
      align-items: center;
      font-size: 1rem;
    }
  }
  @media (max-width: 980px) {
    width: 100%;
    height: 100%;
    ol {
      padding-left: 1rem;

      li {
        font-size: 1rem;
      }
    }
  }
`

const H1 = styled.h1`
  text-align: center;
  color: white;
`

const Span = styled.span`
  font-size: 1.5rem;
  min-width: 2.5rem;
  min-height: 2.5rem;
  color: rgb(5, 109, 174);
  font-weight: bold;
  margin-right: 1rem;
  background: white;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
`

const P = styled.p`
  text-align: center;
  padding: 0.5rem 0;
  width: 100%;
  font-size: 1rem;
  font-weight: bold;
  color: white;
  border-radius: 10px;
  background: rgb(5, 109, 174);
  cursor: pointer;
`

const PrincipalInvertir = () => {
  return (
    <Div>
      <Container>
        <Img></Img>
        <Text>
          <H1>¿Porque invertir en Bloques MS?</H1>
          <ol>
            <li>
              <Span>1.</Span>Los mejores proyectos
            </li>
            <li>
              <Span>2.</Span>Ofrecemos atractivas tasas para incrementar tu
              patrimonio
            </li>
            <li>
              <Span>3.</Span>Podras dar uso del la propiedad y disfrutar sus
              amenidades
            </li>
            <li>
              <Span>4.</Span>Pagar tu inversion en mensualidades
            </li>
          </ol>
          <Link to="/home" style={{ textDecoration: 'none', width: '100%' }}>
            <P>Quiero invertir</P>
          </Link>
        </Text>
      </Container>
    </Div>
  )
}

export default PrincipalInvertir
