import React from 'react'
import styled from 'styled-components'

// Crear un componente styled para el botón
const StyledButton = styled.div`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  border-radius: ${(props) => props.borderRadius};
  color: ${(props) => props.color};
  background: ${(props) => props.background};
  padding: ${(props) => props.padding};
  font-size: ${(props) => props.fontSize};
  font-weight: ${(props) => props.fontWeight};
  border-color: ${(props) => props.borderColor};
  border: ${(props) => props.border};
  cursor: pointer;

  @media (max-width: 980px) {
    font-size: 0.75rem;
    padding: 0.75rem 1.5rem;
  }
`

const Btn = (props) => {
  return <StyledButton {...props}>{props.titulo}</StyledButton>
}

export default Btn
