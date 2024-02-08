import styled from 'styled-components'
import React, { useState } from 'react'
import { azul, fondoCalculadora } from '../../UI/UI'

const Div = styled.div`
  width: 100%;
  padding: 2rem;
  background: ${fondoCalculadora};
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`

const DivOne = styled.div`
  width: 100%;
  border-bottom: 1px solid #cdd3d9;
  border-top: 1px solid #cdd3d9;
  padding: 1rem 0;
  display: flex;
  flex-direction: column;
  gap: 2rem;
`
const DivTwo = styled.div`
  width: 100%;
  border-bottom: 1px solid #cdd3d9;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 1rem 0;
`

const DivThree = styled.div`
  width: 100%;
  border-bottom: 1px solid #cdd3d9;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  padding: 1rem 0;
`
const SubThree = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  div {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    p {
      font-weight: 200;
      font-size: 1.15rem;
    }
    @media (max-width: 980px) {
      p {
        font-weight: 200;
        font-size: 0.9rem;
      }
    }
  }
`
const Span = styled.span`
  font-weight: bold;
  font-size: 1.5rem;
  @media (max-width: 980px) {
    font-size: 1.25rem;
  }
`

const Input = styled.input`
  font-size: 1.2rem;
  padding: 1rem;
  font-weight: bold;
  border-radius: 10px;
  border: none;
  &:focus {
    outline: none;
  }
`

const Spann = styled.span`
  color: ${azul};
  font-weight: bold;
  font-size: 1.25rem;

  @media (max-width: 980px) {
    font-size: 1.25rem;
  }
`

const H1 = styled.h1`
  @media (max-width: 980px) {
    font-size: 1.25rem;
  }
`

const Calculadora = ({ post, id }) => {
  const [valor, setValor] = useState(0)

  const handleChange = (event) => {
    setValor(event.target.value)
  }

  const interes = (tasa, precio) => {
    let calculo = (tasa / 100) * precio * valor
    const formatter = new Intl.NumberFormat('en-US', {
      style: 'decimal',
      minimumFractionDigits: 2,
      maximumFractionDigits: 2
    })
    return formatter.format(calculo)
  }

  const intereses = (tasa, precio) => {
    let calculo = (tasa / 100) * precio * valor
    const formatter = new Intl.NumberFormat('en-US', {
      style: 'decimal',
      minimumFractionDigits: 2,
      maximumFractionDigits: 2
    })
    return formatter.format(calculo)
  }

  const valorFinal = (valor, precio) => {
    let calculo = valor * precio
    const formatter = new Intl.NumberFormat('en-US', {
      style: 'decimal',
      minimumFractionDigits: 2,
      maximumFractionDigits: 2
    })
    return formatter.format(calculo)
  }

  const total = (tasa, precio, valor) => {
    let calculo = (tasa / 100) * precio * valor + valor * precio
    const formatter = new Intl.NumberFormat('en-US', {
      style: 'decimal',
      minimumFractionDigits: 2,
      maximumFractionDigits: 2
    })
    return formatter.format(calculo)
  }

  return (
    <>
      {post
        .filter((item) => item.id === id)
        .map((item, index) => (
          <Div key={index}>
            <Container>
              <H1>Elige el numero de Bloques</H1>

              <DivOne>
                <Input
                  type="number"
                  max={item.bloques}
                  placeholder="Ingresa el numero de bloques"
                  value={valor}
                  onChange={handleChange}
                  style={{ width: '100%', height: '2rem' }}
                />

                <Spann>
                  Bloques:{' '}
                  {valor.toLocaleString('en-US', {
                    minimumFractionDigits: 0,
                    maximumFractionDigits: 0
                  })}
                </Spann>
              </DivOne>
            </Container>
            <DivTwo>
              <p>
                Si posee{' '}
                <Span>
                  {valor.toLocaleString('en-US', {
                    minimumFractionDigits: 0,
                    maximumFractionDigits: 0
                  })}
                </Span>{' '}
                bloques, ganará <Spann>${interes(item.tasa, item.monto)}</Spann>{' '}
                de intereses.
              </p>
              <p>
                Recibira <Span>${intereses(item.tasa, item.monto)} </Span>de
                intereses cada <Span>12</Span> meses y{' '}
                <Span>${valorFinal(valor, item.monto)}</Span> finalizar el plazo
              </p>
            </DivTwo>
            <DivThree>
              <h3>Detalles</h3>
              <SubThree>
                <div>
                  <p>Numero de bloques</p>
                  <p>Valor de bloques</p>
                  <p>Rendimiento</p>
                  <p>Total</p>
                  <p>A recibir</p>
                </div>
                <div>
                  <p style={{ textAlign: 'end' }}>{valor}</p>
                  <p>${valorFinal(valor, item.monto)}</p>
                  <p>${interes(item.tasa, item.monto)}</p>
                  <p style={{ borderBottom: 'solid 2px black' }}>
                    ${total(item.tasa, item.monto, valor)}
                  </p>
                  <p>${total(item.tasa, item.monto, valor)}</p>
                </div>
              </SubThree>
              <p style={{ color: '#e0e0e0;', fontSize: '.75rem' }}>
                * Este calculo fue realizado con el plazo que se estima en el
                proyecto, el cual puede cambiar mas adelante. Todos estos
                calculos son posibles rendimientos y puede que al final del
                plazo no sean los mismo, todo esto es simplemente informativo.
              </p>
            </DivThree>
          </Div>
        ))}
    </>
  )
}

export default Calculadora
