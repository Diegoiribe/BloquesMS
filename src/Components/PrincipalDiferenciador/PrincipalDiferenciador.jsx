import React, { useState } from 'react'
import styled from 'styled-components'
import banco from '../../assets/img/banco.png'
import cetes from '../../assets/img/cetes.png'
import acciones from '../../assets/img/acciones.png'
import bloques from '../../assets/img/bloques.png'

const DivContainer = styled.div`
  width: 100%;
  height: 140vh;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 12.5vw 1vh;
  gap: 1.5rem;
`

const ImgBloque = styled.div`
  background: url('https://images.adsttc.com/media/images/619c/1e1b/9a95/7a30/380b/a15f/medium_jpg/1.jpg?1637621316');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  width: calc(100% - 768px);
  height: 100%;
  max-height: 800px;
  border-radius: 1rem;
`

const Div = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1.5rem;
`

const Container = styled.div`
  width: 100%;
  height: 20%;
  max-width: 768px;
  max-height: 156px;
  display: flex;
  background: #e8eaeb;
  padding: 1rem;
  border-radius: 1rem;
`

const Sub = styled.div`
  width: 100%;
  height: 80%;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  background: #85b8d8;
  border-radius: 1rem;
  max-width: 768px;
  max-height: 600px;
`
const Nav = styled.div`
  width: 100%;
  height: 10%;
  display: flex;
  gap: 1.5rem;
  justify-content: center;
  align-items: center;
  p {
    padding: 0.5rem 1.5rem;
    border-radius: 1rem;
    font-weight: 550;
    cursor: pointer;
  }
`

const Img = styled.div`
  width: 100%;
  height: 90%;

  display: flex;
  justify-content: center;
  align-items: center;
`

const Banco = styled.div`
  background-image: url(${banco});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  width: 90%;
  height: 95%;
`
const Cetes = styled.div`
  background-image: url(${cetes});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  width: 90%;
  height: 95%;
`
const Acciones = styled.div`
  background-image: url(${acciones});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  width: 90%;
  height: 95%;
`

const Bloques = styled.div`
  background-image: url(${bloques});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  width: 90%;
  height: 95%;
`

const PrincipalDiferenciador = () => {
  const [banco, setBanco] = useState(false)
  const [cetes, setCetes] = useState(false)
  const [acciones, setAcciones] = useState(false)
  const [bloques, setBloques] = useState(true)

  const handleBanco = () => {
    setBanco(true)
    setCetes(false)
    setAcciones(false)
    setBloques(false)
  }

  const handleCetes = () => {
    setCetes(true)
    setBanco(false)
    setAcciones(false)
    setBloques(false)
  }

  const handleAcciones = () => {
    setAcciones(true)
    setBanco(false)
    setCetes(false)
    setBloques(false)
  }

  const handleBloques = () => {
    setBloques(true)
    setBanco(false)
    setCetes(false)
    setAcciones(false)
  }

  return (
    <DivContainer>
      <Div>
        <h1>Lo que nos hace diferentes</h1>
        <Container>
          <p>
            En Bloques MS, nuestro objetivo es democratizar y simplificar el
            acceso a las inversiones inmobiliarias en México. Esto significa que
            facilitamos el ingreso al mundo de las inversiones inmobiliarias,
            que generalmente tienen una barrera de entrada alta, para que más
            mexicanos puedan participar. Las inversiones inmobiliarias en México
            han demostrado ser una opción sólida y estable a lo largo de la
            historia.
          </p>
        </Container>
        <Sub>
          <Nav>
            <p
              onClick={() => handleBanco()}
              style={{
                background: banco ? '#056dae' : '#e8eaeb',
                color: banco ? '#e8eaeb' : '#056dae'
              }}
            >
              Bancos
            </p>
            <p
              onClick={() => handleCetes()}
              style={{
                background: cetes ? '#056dae' : '#e8eaeb',
                color: cetes ? '#e8eaeb' : '#056dae'
              }}
            >
              CETES
            </p>
            <p
              onClick={() => handleAcciones()}
              style={{
                background: acciones ? '#056dae' : '#e8eaeb',
                color: acciones ? '#e8eaeb' : '#056dae'
              }}
            >
              Acciones
            </p>
            <p
              onClick={() => handleBloques()}
              style={{
                background: bloques ? '#056dae' : '#e8eaeb',
                color: bloques ? '#e8eaeb' : '#056dae'
              }}
            >
              Bloques MS
            </p>
          </Nav>

          {banco ? (
            <Img>
              <Banco></Banco>
            </Img>
          ) : null}
          {cetes ? (
            <Img>
              <Cetes></Cetes>
            </Img>
          ) : null}
          {acciones ? (
            <Img>
              <Acciones></Acciones>
            </Img>
          ) : null}
          {bloques ? (
            <Img>
              <Bloques></Bloques>
            </Img>
          ) : null}
        </Sub>
      </Div>
      <ImgBloque></ImgBloque>
    </DivContainer>
  )
}

export default PrincipalDiferenciador
