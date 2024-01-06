import React from 'react'
import styled from 'styled-components'

const InputDiv = styled.div``
const InputText = styled.input`
  &:focus {
    outline: none;
  }
`
const H3 = styled.h3`
  font-family: montserrat, sans-serif;
  text-transform: uppercase;
  font-size: 0.75rem;
  font-weight: 500;
  letter-spacing: 0.83px;
  padding: 0.5rem;
`

const Input = (props) => {
  const placeholderModificado = `${props.placeholder}...`

  const { type = 'text' } = props

  const handleChange = (e) => {
    props.setValor(e.target.value)
  }

  return (
    <InputDiv>
      <H3>{props.titulo}</H3>
      <InputText
        style={{
          width: props.width,
          height: props.height,
          borderRadius: props.borderRadius,
          color: props.color,
          background: props.background,
          padding: props.padding,
          fontSize: props.fontSize,
          fontWeight: props.fontWeight,
          borderColor: props.borderColor,
          border: props.border
        }}
        placeholder={placeholderModificado}
        required={props.required}
        value={props.valor}
        onChange={handleChange}
        type={type}
        rows="4"
      />
    </InputDiv>
  )
}

export default Input
