import React from 'react'
import styled from 'styled-components'
import { azul } from '../../UI/UI'

const Div = styled.div`
  width: 100%;
  background: white;
  display: flex;
  flex-direction: column;
  gap: 2rem;
`
const P = styled.p`
  font-size: 1.25rem;
`
const SubDiv = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`
const SubDivOne = styled.div`
  width: 50%;
  padding: 0.5rem;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  div {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    p {
      font-weight: 200;
      font-size: 1.15rem;
      color: #4f5766;
    }
  }
`
const SubDivTwo = styled.div`
  width: 50%;
  padding: 0.5rem;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  border-left: 3px solid #e0e0e0;
  div {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    p {
      font-weight: 200;
      font-size: 1.15rem;
      color: #4f5766;
    }
  }
`

const DivInteres = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  padding: 1.5rem;
  background: #f4f5f7;
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 0.5rem;
  p {
    font-weight: 100;
    font-size: 1.15rem;
    color: #4f5766;
  }
`
const Main = ({ post, id }) => {
  return (
    <>
      {post
        .filter((item) => item.id === id)
        .map((item, index) => (
          <Div key={index}>
            <div>
              <P>{item.detalles}</P>
            </div>
            <SubDiv>
              <SubDivOne>
                <div>
                  <p>Instrumento</p>
                  <p>Plazo</p>
                  <p>Pago de interes</p>
                </div>
                <div style={{ textAlign: 'end' }}>
                  <p style={{ color: 'black' }}>{item.tipo}</p>
                  <p style={{ color: 'black' }}>{item.plazo}</p>
                  <p style={{ color: 'black' }}>{item.pagoInteres}</p>
                </div>
              </SubDivOne>
              <SubDivTwo>
                <div>
                  <p>Minimo para invertir</p>
                  <p>Tasa anual</p>
                  <p>Garantia</p>
                </div>
                <div style={{ textAlign: 'end' }}>
                  <p style={{ color: 'black' }}>{item.monto}</p>
                  <p style={{ color: 'black' }}>{item.tasa}</p>
                  <p style={{ color: 'black' }}>{item.tipoGarantia}</p>
                </div>
              </SubDivTwo>
            </SubDiv>
            <DivInteres>
              <p style={{ color: 'black' }}>¿Cuando pagara intereses?</p>
              <p>{item.pagoDescripcion}</p>
            </DivInteres>
          </Div>
        ))}
    </>
  )
}

export default Main
