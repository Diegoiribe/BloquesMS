import React, { useState } from 'react'
import styled from 'styled-components'
import Input from '../Components/Input/Input'
import { buscar } from '../api/api'
import { blanco, azul, gris } from '../Components/UI/UI'
import { useNavigate } from 'react-router-dom'

const DivLogin = styled.div`
  width: 80vw;
  height: 80vh;
  display: flex;
  margin: 10vh 10vw;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
const DivTop = styled.div`
  width: 45%;
  height: 20%;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`
const DivBottom = styled.div`
  width: 45%;
  height: 55%;
`
const Label = styled.label`
  font-size: 0.75rem;
  color: ${gris};
  text-align: justify;
  margin: 0 0 0 10px;
`
const DivInput = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`
const DivCondiciones = styled.div`
  display: flex;
  flex-direction: row;
`
const Btn = styled.button`
  width: 100%;
  height: 3rem;
  background: ${azul};
  color: ${blanco};
  border-radius: 0.5rem;
  border: none;
  font-size: 1.2rem;
  cursor: pointer;
`

const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleInputChange = (e) => {
    const { name, value } = e.target
    if (name === 'email') setEmail(value)
    if (name === 'password') setPassword(value)
  }

  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault()

    try {
      // Utiliza la función buscar para obtener los usuarios
      await buscar('/usuarios', (usuarios) => {
        const usuarioEncontrado = usuarios.find(
          (user) => user.email === email && user.password === password
        )

        if (usuarioEncontrado) {
          console.log('Credenciales correctas')
          // Aquí agregas la lógica para determinar a qué página redirigir
          if (usuarioEncontrado.email === 'admin@bloquesms.com') {
            navigate(`/admin/${usuarioEncontrado.id}`)
          } else {
            navigate(`/usuario/${usuarioEncontrado.id}`)
          }

          // Manejo de credenciales correctas
        } else {
          console.log('Credenciales incorrectas')
          // Manejo de credenciales incorrectas
        }
      })
    } catch (error) {
      console.error('Error al obtener datos:', error)
    }
  }

  return (
    <DivLogin>
      <DivTop>
        <h1>Empieza a invertir en BLOQUES MS</h1>
        <p>Ingresa tus datos para iniciar sesion</p>
      </DivTop>
      <DivBottom>
        <form
          style={{
            display: 'flex',
            justifyContent: 'space-around',
            gap: '2rem',
            flexDirection: 'column'
          }}
          onSubmit={handleSubmit}
        >
          <DivInput>
            <Input
              type="email"
              titulo="Email"
              placeholder="Correo electronico"
              value={email}
              setValor={setEmail}
              onChange={handleInputChange}
              width="100%"
              height="3rem"
              padding="1rem"
              fontSize="1rem"
              borderColor={gris}
              borderRadius="0.5rem"
              border="1px solid"
            />
            <Input
              type="password"
              titulo="Contraseña"
              placeholder="Ingrese su contraseña"
              value={password}
              setValor={setPassword}
              onChange={handleInputChange}
              width="100%"
              height="3rem"
              padding="1rem"
              fontSize="1rem"
              borderColor={gris}
              border="1px solid"
              borderRadius="0.5rem"
            />
          </DivInput>
          <DivCondiciones>
            <label style={{ width: '20px' }}>
              <input type="checkbox" id="span" />
            </label>
            <Label for="span">
              Estoy de acuerdo con los Términos y condiciones y con el
              tratamiento de mis datos según el Aviso de Privacidad.
            </Label>
          </DivCondiciones>
          <Btn type="submit">Iniciar sesion</Btn>
        </form>
      </DivBottom>
    </DivLogin>
  )
}

export default Login
