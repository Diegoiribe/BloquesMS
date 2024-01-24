import React, { useState } from 'react'
import styled from 'styled-components'
import UsuarioInversion from '../Components/UsuarioInversion/UsuarioInversion'
import UsuarioCalendario from '../Components/UsuarioCalendario/UsuarioCalendario'
import { azul } from '../Components/UI/UI'
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter'
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth'
import FeedIcon from '@mui/icons-material/Feed'

const Div = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  margin-top: 10vh;
  justify-content: space-between;
`
const DivNav = styled.div`
  width: 15%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: start;

  :hover {
    color: ${azul};
  }
`
const DivNavStyle = styled.div`
  width: 100%;
  align-items: center;
  gap: 1rem;
  :hover {
    background: #e9efff;
    color: ${azul};
  }
`

const DivHover = styled.div`
  width: auto;
  height: auto;
  display: flex;
  flex-direction: row;
  gap: 1rem;
  padding: 1rem;
  text-align: center;
  justify-content: center;
  align-items: center;
`
const DivNavBlock = styled.div`
  width: 5px;
  height: 2rem;
  background: transparent;
`

const Usuario = ({ reservas, setReservas, post, usuarios }) => {
  const [inversiones, setInversiones] = useState(true)
  const [calendario, setCalendario] = useState(false)
  const [noticias, setNoticias] = useState(false)

  const inversionesActive = () => {
    setInversiones(!inversiones)
    console.log(inversiones)
    if (inversiones === false) {
      setCalendario(false)
      setNoticias(false)
    }
  }

  const calendarioActive = () => {
    setCalendario(!calendario)
    if (calendario === false) {
      setInversiones(false)
      setNoticias(false)
    }
  }

  const noticiasActive = () => {
    setNoticias(!noticias)
    if (noticias === false) {
      setInversiones(false)
      setCalendario(false)
    }
  }

  return (
    <Div>
      <DivNav>
        <DivNavStyle
          onClick={() => {
            inversionesActive()
          }}
          style={{ background: inversiones ? '#e9efff' : 'transparent' }}
        >
          <DivHover>
            <span style={{ color: inversiones ? azul : 'black' }}>
              <BusinessCenterIcon />
            </span>
            <p
              style={{
                width: '80%',
                color: inversiones ? azul : 'black'
              }}
            >
              Mis inversiones
            </p>
            <DivNavBlock
              style={{ background: inversiones ? azul : 'transparent' }}
            ></DivNavBlock>
          </DivHover>
        </DivNavStyle>
        <DivNavStyle
          onClick={() => {
            calendarioActive()
          }}
          style={{ background: calendario ? '#e9efff' : 'transparent' }}
        >
          <DivHover>
            <span style={{ color: calendario ? azul : 'black' }}>
              <CalendarMonthIcon />
            </span>
            <p style={{ width: '80%', color: calendario ? azul : 'black' }}>
              Calendario
            </p>
            <DivNavBlock
              style={{ background: calendario ? azul : 'transparent' }}
            ></DivNavBlock>
          </DivHover>
        </DivNavStyle>
        <DivNavStyle
          onClick={() => {
            noticiasActive()
          }}
          style={{ background: noticias ? '#e9efff' : 'transparent' }}
        >
          <DivHover>
            <span style={{ color: noticias ? azul : 'black' }}>
              <FeedIcon />
            </span>
            <p style={{ width: '80%', color: noticias ? azul : 'black' }}>
              Noticias
            </p>
            <DivNavBlock
              style={{ background: noticias ? azul : 'transparent' }}
            ></DivNavBlock>
          </DivHover>
        </DivNavStyle>
      </DivNav>
      {/* Servicios de usuario */}
      {inversiones && <UsuarioInversion usuarios={usuarios} />}
      {calendario && (
        <UsuarioCalendario
          reservas={reservas}
          setReservas={setReservas}
          post={post}
          usuarios={usuarios}
        />
      )}
    </Div>
  )
}

export default Usuario
