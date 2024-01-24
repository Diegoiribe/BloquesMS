import React, { useState } from 'react'
import styled from 'styled-components'
import { AdminInput, AdminTextArea } from '../AdminInput/AdminInput'
import { azul } from '../UI/UI'
import { addDoc, collection } from 'firebase/firestore'
import { db } from '../../config'

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
`

const AdminCardForm = ({ registrarMensajePost }) => {
  const [title, setTitle] = useState('')
  const [place, setPlace] = useState('')
  const [logo, setLogo] = useState('')
  const [tasa, setTasa] = useState('')
  const [monto, setMonto] = useState('')
  const [plazo, setPlazo] = useState('')
  const [img, setImg] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    let datos = {
      title: title,
      place: place,
      logo: logo,
      tasa: tasa,
      monto: monto,
      plazo: plazo,
      img: img
    }
    const registroPost = collection(db, 'post')
    addDoc(registroPost, datos)
  }

  return (
    <div>
      <Form onSubmit={handleSubmit}>
        <div style={{ width: '100%', display: 'flex', gap: '1rem' }}>
          <AdminInput
            titulo=""
            placeholder="Titulo del proyecto"
            valor={title}
            setValor={setTitle}
            width="50%"
          />
          <AdminInput
            titulo=""
            placeholder="Logo"
            type="url"
            valor={logo}
            setValor={setLogo}
            width="50%"
          />
        </div>
        <AdminInput
          titulo=""
          placeholder="Lugar"
          type="text"
          valor={place}
          setValor={setPlace}
          width="100%"
        />
        <AdminInput
          titulo=""
          placeholder="Imagen"
          valor={img}
          setValor={setImg}
          width="100%"
        />
        <AdminInput
          titulo=""
          placeholder="Tasa"
          valor={tasa}
          setValor={setTasa}
          width="100%"
        />
        <AdminInput
          titulo=""
          placeholder="Monto"
          valor={monto}
          setValor={setMonto}
          width="100%"
        />
        <AdminTextArea
          titulo=""
          placeholder="Ingresa un plazo"
          valor={plazo}
          setValor={setPlazo}
        />
        <Button type="submit">Enviar</Button>
      </Form>
    </div>
  )
}

export default AdminCardForm
