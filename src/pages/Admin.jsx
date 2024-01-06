import React, { useState } from 'react'
import styled from 'styled-components'
import { azul } from '../Components/UI/UI'
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter'
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth'
import FeedIcon from '@mui/icons-material/Feed'
import AdminCard from '../Components/AdminCard/AdminCard'
import AdminUsuario from '../Components/AdminUsuario/AdminUsuario'

import AdminCalendario from '../Components/AdminCalendario/AdminCalendario'

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

const Admin = ({ reservas, registrarMensajeReserva, eliminarReserva }) => {
  const [card, setCard] = useState(true)
  const [calendario, setCalendario] = useState(false)
  const [usuarios, setUsuarios] = useState(false)

  const cardActive = () => {
    setCard(!card)
    console.log(card)
    if (card === false) {
      setCalendario(false)
      setUsuarios(false)
    }
  }

  const calendarioActive = () => {
    setCalendario(!calendario)
    if (calendario === false) {
      setCard(false)
      setUsuarios(false)
    }
  }

  const usuariosActive = () => {
    setUsuarios(!usuarios)
    if (usuarios === false) {
      setCard(false)
      setCalendario(false)
    }
  }

  return (
    <Div>
      <DivNav>
        <DivNavStyle
          onClick={() => {
            cardActive()
          }}
          style={{ background: card ? '#e9efff' : 'transparent' }}
        >
          <DivHover>
            <span style={{ color: card ? azul : 'black' }}>
              <BusinessCenterIcon />
            </span>
            <p
              style={{
                width: '80%',
                color: card ? azul : 'black'
              }}
            >
              Proyectos
            </p>
            <DivNavBlock
              style={{ background: card ? azul : 'transparent' }}
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
            usuariosActive()
          }}
          style={{ background: usuarios ? '#e9efff' : 'transparent' }}
        >
          <DivHover>
            <span style={{ color: usuarios ? azul : 'black' }}>
              <FeedIcon />
            </span>
            <p style={{ width: '80%', color: usuarios ? azul : 'black' }}>
              Usuarios
            </p>
            <DivNavBlock
              style={{ background: usuarios ? azul : 'transparent' }}
            ></DivNavBlock>
          </DivHover>
        </DivNavStyle>
      </DivNav>
      {/* Servicios de usuario */}
      {card ? <AdminCard /> : null}
      {calendario ? (
        <AdminCalendario
          reservas={reservas}
          registrarMensajeReserva={registrarMensajeReserva}
          eliminarReserva={eliminarReserva}
        />
      ) : null}
      {usuarios ? <AdminUsuario /> : null}
    </Div>
  )
}

export default Admin
