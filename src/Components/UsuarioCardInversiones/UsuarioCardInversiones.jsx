import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { azul, blanco, gris } from '../UI/UI'

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
  @media (max-width: 980px) {
    padding: 1rem;
    width: 100%;
  }
`
const DivOne = styled.div``

const DivTwo = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;
  @media (max-width: 980px) {
    flex-direction: column;
    gap: 1rem;
  }
`
const DivThree = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  @media (max-width: 980px) {
    p {
      font-size: 1rem;
    }
  }
`
const Tasa = styled.p`
  font-size: 1.5rem;
  color: ${azul};
  font-weight: bold;
`

const DivFour = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  gap: 1rem;
`

const UsuarioCardInversiones = ({ usuarios, id }) => {
  // Si usuarios no es un arreglo, muestra un mensaje o retorna null
  const usuariosArray = Array.isArray(usuarios) ? usuarios : [usuarios]
  return (
    <>
      {usuariosArray
        .filter((item) => item.id === id)
        .map((item, index) => (
          <Div key={index}>
            <DivOne>
              <h2>{item.title}</h2>
              <p style={{ fontSize: '.75rem', color: gris }}>{item.place}</p>
              <p style={{ fontSize: '1rem', color: azul, fontWeight: 'bold' }}>
                Bloques: {item.bloques}
              </p>
            </DivOne>
            <DivTwo>
              <DivThree>
                <p style={{ fontWeight: 'bold' }}>Tasa anualizada</p>
                <Tasa>{item.tasa}</Tasa>
              </DivThree>
              <DivFour>
                <div>
                  <p style={{ fontSize: '1rem' }}>Invertiste:</p>
                  <p style={{ fontSize: '1rem' }}>Recibiste:</p>
                </div>
                <div>
                  <p
                    style={{
                      fontSize: '1rem',
                      color: azul,
                      fontWeight: 'bold'
                    }}
                  >
                    ${item.inversion}
                  </p>
                  <p
                    style={{
                      fontSize: '1rem',
                      color: azul,
                      fontWeight: 'bold'
                    }}
                  >
                    ${item.recibido}
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
