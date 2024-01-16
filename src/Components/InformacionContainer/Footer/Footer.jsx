import React, { useState } from 'react'
import styled from 'styled-components'
import { azul } from '../../UI/UI'
import Calculadora from '../Calculadora/Calculadora'

const Div = styled.div`
  margin-top: 2rem;
  width: 100%;
`
const Ul = styled.ul`
  width: 100%;

  background: white;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  gap: 2rem;
  border-bottom: 2px solid #e0e0e0;
  border-top: 2px solid #e0e0e0;
  padding: 1rem;
`
const Li = styled.li`
  font-size: 1.5rem;
  cursor: pointer;
`

const DivText = styled.div`
  width: 100%;
  padding: 2rem;
  p {
    font-size: 1.25rem;
    margin-bottom: 0.5rem;
    font-weight: 500;
  }
`
const Calculadoraa = styled.a`
  text-decoration: none;
  width: 90%;
  margin: 1rem 5% 3rem;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 0.25rem;
  border: 1px solid ${azul};
  cursor: pointer;
  :hover {
    scale: 1.1;
    transition: all 0.5s ease-in-out;
  }
  p {
    width: 100%;
    padding: 1.5rem;
    font-weight: bold;
    font-size: 1.25rem;
    color: ${azul};
  }
`
const Footer = ({ post, id }) => {
  const { analisis } = post
  console.log(analisis)
  const [analisisText, setAnalisis] = useState(true)
  const [garantiaText, setGarantia] = useState(false)
  const [calculadoraText, setCalculadora] = useState(false)

  const handleAnalisis = () => {
    setAnalisis(true)
    setGarantia(false)
    setCalculadora(false)
  }
  const handleGarantia = () => {
    setAnalisis(false)
    setGarantia(true)
    setCalculadora(false)
  }
  const handleCalculadora = () => {
    setAnalisis(false)
    setGarantia(false)
    setCalculadora(true)
  }
  return (
    <Div>
      <Calculadoraa href="#calculadora" onClick={() => handleCalculadora()}>
        <p>Calcula tu retorno</p>
      </Calculadoraa>
      <Ul>
        <Li
          id="calculadora"
          style={{
            color: analisisText ? azul : '#4f5766',
            fontWeight: analisisText ? 'bold' : '200',
            borderBottom: analisisText ? '5px solid #056dae' : 'none'
          }}
          onClick={() => handleAnalisis()}
        >
          Analisis
        </Li>
        <Li
          style={{
            color: garantiaText ? azul : '#4f5766',
            fontWeight: garantiaText ? 'bold' : '200',
            borderBottom: garantiaText ? '5px solid #056dae' : 'none'
          }}
          onClick={() => handleGarantia()}
        >
          Garantia
        </Li>
        <Li
          style={{
            color: calculadoraText ? azul : '#4f5766',
            fontWeight: calculadoraText ? 'bold' : '200',
            borderBottom: calculadoraText ? '5px solid #056dae' : 'none'
          }}
          onClick={() => handleCalculadora()}
        >
          Calculadora
        </Li>
      </Ul>
      <DivText>
        <div style={{ display: analisisText ? 'block' : 'none' }}>
          {post
            .filter((item) => item.id === id) // o .find(item => item.id === id) para obtener un único elemento
            .map((item) => item.analisis.split('\n')) // Ahora divides el texto de análisis
            .flat() // Aplana el array en caso de que haya múltiples posts (opcional si usas find)
            .map((parrafo, index) => (
              <p key={index}>{analisisText && <span>{parrafo}</span>}</p>
            ))}
        </div>
        <div style={{ display: garantiaText ? 'block' : 'none' }}>
          {post
            .filter((item) => item.id === id) // o .find(item => item.id === id) para obtener un único elemento
            .map((item) => item.garantia.split('\n')) // Ahora divides el texto de análisis
            .flat() // Aplana el array en caso de que haya múltiples posts (opcional si usas find)
            .map((parrafo, index) => (
              <p key={index}>{garantiaText && <span>{parrafo}</span>}</p>
            ))}
        </div>
        <div style={{ display: calculadoraText ? 'block' : 'none' }}>
          {calculadoraText && <Calculadora post={post} id={id} />}
        </div>
      </DivText>
    </Div>
  )
}

export default Footer
