import React, { useState, useEffect } from 'react'
import styled from 'styled-components'

import { useParams } from 'react-router-dom'
import { blanco, azul, gris } from '../UI/UI'
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline'
import UsuarioCardInversiones from '../UsuarioCardInversiones/UsuarioCardInversiones'

const Div = styled.div`
  width: 85%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`

const DivDashboard = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  padding: 2.5rem;
  background-color: #f4f5f7;
`
const DivPrincipal = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 2rem;
`

const DivPortafolio = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 0.5rem;
`
const DivCard = styled.div`
  width: 35%;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  background: ${blanco};
  padding: 2rem;
  border-radius: 5px;
  box-shadow: 2px 2px 8px 0 rgba(0, 0, 0, 0.2);
  margin: 0.5rem;
`
const DivCardOne = styled.div`
  width: 100%;
  text-align: center;
`

const DivCardTwo = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  border-bottom: 1px solid ${gris};
  padding: 1rem 0;
`

const DivCardThree = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`

const DivTwo = styled.div`
  width: 60%;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 0.5rem;
`

const DivCortoPlazo = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  gap: 1rem;
  background: ${blanco};
  padding: 2rem;
  border-radius: 5px;
  box-shadow: 2px 2px 8px 0 rgba(0, 0, 0, 0.2);
`

const DivLargoPlazo = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  gap: 1rem;
  background: ${blanco};
  padding: 2rem;
  border-radius: 5px;
  box-shadow: 2px 2px 8px 0 rgba(0, 0, 0, 0.2);
`

const UsuarioInversion = ({ usuarios }) => {
  const { id } = useParams() // Esto captura el ID de la URL

  console.log(id)

  return (
    <Div>
      {usuarios
        .filter((item) => item.id === id)
        .map((usuarios, index) => (
          <DivDashboard key={index}>
            <DivPrincipal>
              <div>
                <h1>Hola {usuarios.nombre}</h1>
                <p>
                  Este es un resumen de todas tus inversiones, su valor por
                  proyecto y tipo de inversion
                </p>
              </div>
              <DivPortafolio>
                <DivCard>
                  <DivCardOne>
                    <p>Valor actual de tu portafolio</p>
                    <p
                      style={{
                        fontSize: '2.5rem',
                        fontWeight: 'bold',
                        color: azul
                      }}
                    >
                      ${usuarios.valorActual}*
                    </p>
                  </DivCardOne>
                  <DivCardTwo>
                    <div>
                      <p
                        style={{
                          fontSize: '20px',
                          fontWeight: 'bold',
                          color: azul
                        }}
                      >
                        ${usuarios.disponible}
                      </p>
                      <div style={{ display: 'flex' }}>
                        <p
                          style={{
                            fontSize: '11px',
                            color: gris,
                            padding: '4px 4px 0 0'
                          }}
                        >
                          Diponible
                        </p>
                        <span>
                          <ErrorOutlineIcon fontSize="xs" />
                        </span>
                      </div>
                    </div>
                    <div style={{ textAlign: 'end' }}>
                      <p
                        style={{
                          fontSize: '20px',
                          fontWeight: 'bold',
                          color: azul
                        }}
                      >
                        ${usuarios.processo}
                      </p>
                      <div style={{ display: 'flex' }}>
                        <p
                          style={{
                            fontSize: '11px',
                            color: gris,
                            padding: '4px 4px 0 0'
                          }}
                        >
                          En transferencia
                        </p>
                        <span>
                          <ErrorOutlineIcon fontSize="xs" />
                        </span>
                      </div>
                    </div>
                  </DivCardTwo>
                  <DivCardThree>
                    <div>
                      <p>Total Invertido:</p>
                      <br />
                      <p>+ Retornos generados:</p>
                      <p>+ Plusvalia:</p>
                      <p>- Pagos recibidos:</p>
                      <br />
                      <p style={{ color: azul, fontWeight: 'bold' }}>Valor:</p>
                    </div>
                    <div style={{ textAlign: 'end' }}>
                      <p>${usuarios.total}</p>
                      <br />
                      <p>${usuarios.retorno}</p>
                      <p>${usuarios.plusvalia}</p>
                      <p>${usuarios.pagos}</p>
                      <br />
                      <p style={{ color: azul, fontWeight: 'bold' }}>
                        ${usuarios.valor}
                      </p>
                    </div>
                  </DivCardThree>
                </DivCard>
                <DivTwo>
                  <DivCortoPlazo>
                    <div>
                      <h2>Corto plazo</h2>
                      <p
                        style={{
                          fontSize: '1.5rem',
                          color: azul,
                          fontWeight: 'bold',
                          padding: '.5rem',
                          textAlign: 'center'
                        }}
                      >
                        ${usuarios.valorActualCorto}
                      </p>
                      <p
                        style={{
                          fontSize: '.75rem',
                          textAlign: 'center'
                        }}
                      >
                        Valor actual
                      </p>
                      <br />
                      <p
                        style={{
                          fontSize: '.75rem',
                          fontWeight: 600
                        }}
                      >
                        {usuarios.proyectosCorto} proyectos
                      </p>
                    </div>
                    <div>
                      <p>Total Invertido:</p>
                      <br />
                      <p>+ Retornos generados:</p>
                      <p>+ Plusvalia:</p>
                      <p>- Pagos recibidos:</p>
                      <br />
                      <p style={{ color: azul, fontWeight: 'bold' }}>Valor:</p>
                    </div>
                    <div style={{ textAlign: 'end' }}>
                      <p>${usuarios.totalCorto}</p>
                      <br />
                      <p>${usuarios.retornoCorto}</p>
                      <p>${usuarios.plusvaliaCorto}</p>
                      <p>${usuarios.pagosCorto}</p>
                      <br />
                      <p style={{ color: azul, fontWeight: 'bold' }}>
                        ${usuarios.valorCorto}
                      </p>
                    </div>
                  </DivCortoPlazo>
                  <DivLargoPlazo>
                    <div>
                      <h2>Largo plazo</h2>
                      <p
                        style={{
                          fontSize: '1.5rem',
                          color: azul,
                          fontWeight: 'bold',
                          padding: '.5rem',
                          textAlign: 'center'
                        }}
                      >
                        ${usuarios.valorActualLargo}
                      </p>
                      <p
                        style={{
                          fontSize: '.75rem',
                          textAlign: 'center'
                        }}
                      >
                        Valor actual
                      </p>
                      <br />
                      <p
                        style={{
                          fontSize: '.75rem',
                          fontWeight: 600
                        }}
                      >
                        {usuarios.proyectosLargo} proyectos
                      </p>
                    </div>
                    <div>
                      <p>Total Invertido:</p>
                      <br />
                      <p>+ Retornos generados:</p>
                      <p>+ Plusvalia:</p>
                      <p>- Pagos recibidos:</p>
                      <br />
                      <p style={{ color: azul, fontWeight: 'bold' }}>Valor:</p>
                    </div>
                    <div style={{ textAlign: 'end' }}>
                      <p>${usuarios.totalLargo}</p>
                      <br />
                      <p>${usuarios.retornoLargo}</p>
                      <p>${usuarios.plusvaliaLargo}</p>
                      <p>${usuarios.pagosLargo}</p>
                      <br />
                      <p style={{ color: azul, fontWeight: 'bold' }}>
                        ${usuarios.valorLargo}
                      </p>
                    </div>
                  </DivLargoPlazo>
                </DivTwo>
              </DivPortafolio>
            </DivPrincipal>
            <div>
              <div>
                <h2>Mis inversiones</h2>
                <p>Portafolio actual</p>
              </div>
              <div style={{ padding: '1rem' }}>
                <UsuarioCardInversiones id={id} usuarios={usuarios} />
              </div>
            </div>
          </DivDashboard>
        ))}
    </Div>
  )
}

export default UsuarioInversion
