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
  @media (max-width: 980px) {
    width: 100%;
  }
`

const DivDashboard = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  padding: 2.5rem;
  background-color: #f4f5f7;
  @media (max-width: 980px) {
    padding: 2rem 0.5rem 1rem;
  }
`
const DivPrincipal = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  @media (max-width: 980px) {
    gap: 1rem;
  }
`

const DivPortafolio = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 0.5rem;
  @media (max-width: 980px) {
    width: 100%;
    flex-direction: column;
  }
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
  @media (max-width: 980px) {
    width: 100%;
    padding: 1rem;
    margin: 0 0 1rem;
  }
`
const DivCardOne = styled.div`
  width: 100%;
  text-align: center;
`

const Titulo = styled.div`
  @media (max-width: 980px) {
    padding: 1rem;
  }
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
  @media (max-width: 980px) {
    width: 100%;
  }
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
  @media (max-width: 980px) {
    width: 100%;
    flex-direction: column;
    padding: 1rem;
    div {
      h2 {
        text-align: center;
      }
    }
  }
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
  @media (max-width: 980px) {
    width: 100%;
    flex-direction: column;
    padding: 1rem;
    div {
      h2 {
        text-align: center;
      }
    }
  }
`
const Invertido = styled.div`
  @media (max-width: 980px) {
    display: none;
  }
`
const P = styled.p`
  font-size: 2.5rem;
  font-weight: bold;
  color: ${azul};
  @media (max-width: 980px) {
    font-size: 2rem;
  }
`

const UsuarioCard = styled.div`
  @media (max-width: 980px) {
    padding: 0.5rem;
  }
`

const Card = styled.div`
  padding: 1rem;
  @media (max-width: 980px) {
    padding: 0.5rem;
    width: 100%;
  }
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
              <Titulo>
                <h1>Hola {usuarios.nombre}</h1>
                <p>Este es un resumen de todas tus inversiones</p>
              </Titulo>
              <DivPortafolio>
                <DivCard>
                  <DivCardOne>
                    <p>Valor actual de tu portafolio</p>
                    <P>${usuarios.valorActual}</P>
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
                    <Invertido>
                      <p>Total Invertido:</p>
                      <br />
                      <p>+ Retornos generados:</p>
                      <p>+ Plusvalia:</p>
                      <p>- Pagos recibidos:</p>
                      <br />
                      <p style={{ color: azul, fontWeight: 'bold' }}>Valor:</p>
                    </Invertido>
                    <Invertido style={{ textAlign: 'end' }}>
                      <p>${usuarios.totalCorto}</p>
                      <br />
                      <p>${usuarios.retornoCorto}</p>
                      <p>${usuarios.plusvaliaCorto}</p>
                      <p>${usuarios.pagosCorto}</p>
                      <br />
                      <p style={{ color: azul, fontWeight: 'bold' }}>
                        ${usuarios.valorCorto}
                      </p>
                    </Invertido>
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
                    <Invertido>
                      <p>Total Invertido:</p>
                      <br />
                      <p>+ Retornos generados:</p>
                      <p>+ Plusvalia:</p>
                      <p>- Pagos recibidos:</p>
                      <br />
                      <p style={{ color: azul, fontWeight: 'bold' }}>Valor:</p>
                    </Invertido>
                    <Invertido style={{ textAlign: 'end' }}>
                      <p>${usuarios.totalLargo}</p>
                      <br />
                      <p>${usuarios.retornoLargo}</p>
                      <p>${usuarios.plusvaliaLargo}</p>
                      <p>${usuarios.pagosLargo}</p>
                      <br />
                      <p style={{ color: azul, fontWeight: 'bold' }}>
                        ${usuarios.valorLargo}
                      </p>
                    </Invertido>
                  </DivLargoPlazo>
                </DivTwo>
              </DivPortafolio>
            </DivPrincipal>
            <UsuarioCard>
              <div>
                <h2>Mis inversiones</h2>
                <p>Portafolio actual</p>
              </div>
              <Card>
                <UsuarioCardInversiones id={id} usuarios={usuarios} />
              </Card>
            </UsuarioCard>
          </DivDashboard>
        ))}
    </Div>
  )
}

export default UsuarioInversion
