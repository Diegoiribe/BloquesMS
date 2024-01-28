import React, { useState } from 'react'
import styled from 'styled-components'
import { ContactInput, ContactTextArea } from '../ContactInput/ContactInput'
import { v4 as uuid } from 'uuid'
// import { enviar } from '../../../api/api'
import { azul, gris } from '../../UI/UI'

const Form = styled.form`
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;
  gap: 1rem;
`

const Button = styled.button`
  background: ${azul};
  border-radius: 0.5rem;
  border: none;
  font-size: 1vw;
  padding: 0.5rem 1rem;
  color: white;
  font-weight: 500;
  cursor: pointer;
  @media (max-width: 980px) {
    font-size: 1rem;
    margin: 1rem 0;
  }
`
const Label = styled.label`
  font-size: 0.75rem;
  color: ${gris};
  text-align: justify;
  margin: 0 0 0 10px;
`

const ContactForm = () => {
  const [nombre, setNombre] = useState('')
  const [email, setEmail] = useState('')
  const [telefono, setTelefono] = useState('')
  const [mensaje, setMensaje] = useState('')

  // const [data, setData] = useState(null)
  // const manejarEnvio = async (datosDelFormulario) => {
  //   // La URL '/enviar-datos' es donde tu servidor espera recibir los datos POST
  //   // 'datosDelFormulario' es un objeto con los datos que quieres enviar
  //   await enviar('/contacto', datosDelFormulario, setData)
  // }

  const handleSubmit = (e) => {
    e.preventDefault()
    let datos = {
      nombre: nombre,
      email: email,
      telefono: telefono,
      mensaje: mensaje,
      id: uuid()
    }
    // manejarEnvio(datos)
    // console.log(datos)
  }

  // console.log(data)

  return (
    <div>
      <Form onSubmit={handleSubmit}>
        <div style={{ width: '100%', display: 'flex', gap: '1rem' }}>
          <ContactInput
            titulo=""
            placeholder="Ingresa tu nombre"
            valor={nombre}
            setValor={setNombre}
            width="50%"
          />
          <ContactInput
            titulo=""
            placeholder="Ingresa tu número de teléfono"
            type="email"
            valor={telefono}
            setValor={setTelefono}
            width="50%"
          />
        </div>
        <ContactInput
          titulo=""
          placeholder="Ingresa tu correo electrónico"
          type="number"
          valor={email}
          setValor={setEmail}
          width="100%"
        />
        <ContactTextArea
          titulo=""
          placeholder="Ingresa tu mensaje"
          valor={mensaje}
          setValor={setMensaje}
        />
        <div>
          <label style={{ width: '20px' }}>
            <input type="checkbox" id="span" style={{ color: 'black' }} />
          </label>
          <Label for="span">
            Estoy de acuerdo con los Términos y condiciones y con el tratamiento
            de mis datos según el Aviso de Privacidad.
          </Label>
        </div>

        <Button type="submit">Enviar</Button>
      </Form>
    </div>
  )
}

export default ContactForm
