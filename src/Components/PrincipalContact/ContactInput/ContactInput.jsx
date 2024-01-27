import React from 'react'
import styled from 'styled-components'

const Input = styled.input`
  background: #e8eaeb;
  border-radius: 0.5rem;
  border: none;
  height: 2.5rem;
  font-size: 1vw;
  padding: 0.5rem 1rem;
  color: black;
  font-weight: 500;
  &:focus {
    outline: none;
  }
  @media (max-width: 980px) {
    font-size: 0.85rem;
  }
`

const ContactInput = (props) => {
  const placeholderModificado = `${props.placeholder}...`
  const { type = 'text' } = props
  const handleChange = (e) => {
    props.setValor(e.target.value)
  }
  return (
    <>
      <Input
        placeholder={placeholderModificado}
        value={props.valor}
        onChange={handleChange}
        type={type}
        style={{
          width: props.width
        }}
      />
    </>
  )
}

const TextArea = styled.textarea`
  min-width: 100%;
  min-height: 15vh;
  background: #e8eaeb;
  border-radius: 0.5rem;
  border: none;
  font-size: 1vw;
  padding: 0.5rem 1rem;
  color: black;
  font-weight: 500;
  border: none;
  resize: none;
  font-size: 1vw;
  &:focus {
    outline: none;
  }
  @media (max-width: 980px) {
    font-size: 0.85rem;
  }
`

const ContactTextArea = (props) => {
  const placeholderModificado = `${props.placeholder}...`
  const { type = 'text' } = props
  const handleChange = (e) => {
    props.setValor(e.target.value)
  }
  return (
    <>
      <TextArea
        placeholder={placeholderModificado}
        value={props.valor}
        onChange={handleChange}
        type={type}
        rows="4"
        as="textarea"
        style={{
          minWidth: props.width,
          minHeight: props.height,
          borderRadius: props.borderRadius
        }}
      />
    </>
  )
}

export { ContactInput, ContactTextArea }
