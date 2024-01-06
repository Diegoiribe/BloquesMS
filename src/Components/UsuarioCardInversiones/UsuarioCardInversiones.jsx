import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { azul, blanco, gris } from '../UI/UI'
import { buscar } from '../../api/api'
import { useParams } from 'react-router-dom'

const Div = styled.div`
  width: 33%;
  background: ${blanco};
  border-radius: 5px;
  box-shadow: 2px 2px 8px 0 rgba(0, 0, 0, 0.2);
  padding: 2rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`
const DivOne = styled.div``

const DivTwo = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;
`
const DivThree = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`
const DivFour = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  gap: 1rem;
`

const UsuarioCardInversiones = () => {
  const [card, setCard] = useState([])
  const { id } = useParams() // Esto captura el ID de la URL

  useEffect(() => {
    // Define la función callback que actualizará el estado con los datos del usuario
    const onUsuarioEncontrado = (cardData) => {
      // Suponiendo que cardData debería ser un objeto
      if (!Array.isArray(cardData) && cardData != null) {
        setCard([cardData]) // Coloca el objeto dentro de un arreglo
      } else {
        setCard(cardData) // o manejar un error si los datos no son lo que esperabas
      }
    }

    // Asegúrate de que tu función buscar puede manejar la ruta con un ID y una función callback
    buscar(`/usuarios/${id}`, onUsuarioEncontrado)
  }, [id]) // El efecto se ejecutará cada vez que el ID cambie
  console.log(card)
  return (
    <>
      {card.map((card, index) => (
        <Div key={index}>
          <DivOne>
            <h2>{card.title}</h2>
            <p style={{ fontSize: '.75rem', color: gris }}>{card.place}</p>
            <p style={{ fontSize: '1rem', color: azul, fontWeight: 'bold' }}>
              Bloques: {card.bloques}
            </p>
          </DivOne>
          <DivTwo>
            <DivThree>
              <p style={{ fontWeight: 'bold' }}>Tasa anualizada</p>
              <p
                style={{ fontSize: '1.5rem', color: azul, fontWeight: 'bold' }}
              >
                {card.tasa}
              </p>
            </DivThree>
            <DivFour>
              <div>
                <p style={{ fontSize: '1rem' }}>Invertiste:</p>
                <p style={{ fontSize: '1rem' }}>Recibiste:</p>
              </div>
              <div>
                <p
                  style={{ fontSize: '1rem', color: azul, fontWeight: 'bold' }}
                >
                  ${card.inversion}
                </p>
                <p
                  style={{ fontSize: '1rem', color: azul, fontWeight: 'bold' }}
                >
                  ${card.recibido}
                </p>
              </div>
            </DivFour>
          </DivTwo>
        </Div>
      ))}
    </>
  )
}

export default UsuarioCardInversiones
