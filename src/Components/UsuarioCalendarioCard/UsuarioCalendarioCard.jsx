import React, { useState, useEffect } from 'react'
import styled from 'styled-components'

import { blanco, azul } from '../UI/UI'
import CloseIcon from '@mui/icons-material/Close'

const DivImg = styled.img`
  width: 100%;
  background: ${blanco};
  border-radius: 10px;
  box-shadow: 0 1px 11px 0 rgba(0, 0, 0, 0.2);
  object-fit: fill;
`
const P = styled.p`
  font-size: 1.2rem;
  padding: 1rem;
  font-weight: bold;
  background: ${blanco};
  border-radius: 10px;
  box-shadow: 0 1px 11px 0 rgba(0, 0, 0, 0.2);
  text-align: center;
`
const DivReservas = styled.div`
  width: 30%;
  display: flex;
  padding: 1rem;
  flex-direction: row;
  gap: 0.5rem;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
`

const Div = styled.div`
  padding: 0.9rem;
  font-weight: bold;
  background: ${azul};
  border-radius: 10px;
  box-shadow: 0 1px 11px 0 rgba(0, 0, 0, 0.2);
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`

const UsuarioCalendarioCard = ({ id, reservas, eliminarReserva }) => {
  console.log(reservas)
  console.log(id)
  return (
    <>
      {reservas
        .filter((reserva) => reserva.idUsuario === id)
        .map((reserva, index) => (
          <DivReservas key={index}>
            <P style={{ width: '78%' }}>{reserva.nombre}</P>
            <P style={{ width: '19%' }}>{reserva.personas}</P>
            <P style={{ width: '19%' }}>{reserva.dias}</P>
            <P style={{ width: '78%' }}>{reserva.fecha}</P>
            <DivImg
              src={reserva.img}
              style={{ width: '100%' }}
              alt="Imagen Reserva"
            />
            <P style={{ width: '68%' }}>{reserva.title}</P>
            <Div
              style={{ width: '29%' }}
              onClick={() => eliminarReserva(reserva.id)}
            >
              <CloseIcon style={{ color: 'white' }} />
            </Div>
          </DivReservas>
        ))}
    </>
  )
}

export default UsuarioCalendarioCard
