import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { buscar, eliminar } from '../../api/api'

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
  justify-content: space-around;
  align-items: center;
  flex-wrap: wrap;
`
const Div = styled.div`
  padding: 0.75rem;
  font-weight: bold;
  background: ${azul};
  border-radius: 10px;
  box-shadow: 0 1px 11px 0 rgba(0, 0, 0, 0.2);
  text-align: center;
  cursor: pointer;
`

const UsuarioCalendarioCard = ({ id }) => {
  const [reservas, setReservas] = useState([])

  useEffect(() => {
    const fetchReservas = async () => {
      try {
        const response = await fetch('https://4254523.vercel.app/reservas')
        const data = await response.json()
        // Suponiendo que 'idUsuario' es un número y 'id' también. Asegúrate de que ambos sean del mismo tipo para la comparación.
        const reservasFiltradas = data.filter(
          (reserva) => reserva.idUsuario === id
        )
        setReservas(reservasFiltradas)
      } catch (error) {
        console.error('Error al obtener las reservas:', error)
      }
    }

    fetchReservas()
  }, [id])

  useEffect(() => {
    // Define la función callback que actualizará el estado con los datos del usuario
    const onUsuarioEncontrado = (cardData) => {
      // Suponiendo que cardData debería ser un objeto
      if (!Array.isArray(cardData) && cardData != null) {
        setReservas([cardData]) // Coloca el objeto dentro de un arreglo
      } else {
        setReservas(cardData) // o manejar un error si los datos no son lo que esperabas
      }
    }

    // Asegúrate de que tu función buscar puede manejar la ruta con un ID y una función callback
    buscar(`/reservas`, onUsuarioEncontrado)
  }, [])

  const handleDelete = async (id) => {
    try {
      // Realiza la solicitud DELETE a la API
      await eliminar(`/reservas/${id}`)

      // Actualiza el estado para reflejar el cambio
      const updatedReservas = reservas.filter((item) => item.id !== id)
      setReservas(updatedReservas)
    } catch (error) {
      console.error('Error al eliminar el post:', error)
      // Manejo de errores
    }
  }

  return (
    <>
      {reservas.map((reserva, index) => (
        <DivReservas key={index}>
          <P style={{ width: '69%' }}>{reserva.nombre}</P>
          <P style={{ width: '29%' }}>{reserva.personas}</P>
          <P style={{ width: '19%' }}>{reserva.dias}</P>
          <P style={{ width: '79%' }}>Fecha seleccionada: {reserva.fecha}</P>
          <DivImg
            src={reserva.img}
            style={{ width: '100%' }}
            alt="Imagen Reserva"
          />
          <P style={{ width: '69%' }}>{reserva.title}</P>
          <Div
            style={{ width: '29%' }}
            onClick={() => handleDelete(reserva.id)}
          >
            <CloseIcon style={{ color: 'white' }} />
          </Div>
        </DivReservas>
      ))}
    </>
  )
}

export default UsuarioCalendarioCard
