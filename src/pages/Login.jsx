import React, { useState } from 'react'
import styled from 'styled-components'
import Input from '../Components/Input/Input'
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
  @media (max-width: 1540px) {
    height: auto;
    margin: 20vh 10vw;
  }
  @media (max-width: 980px) {
    width: 90vw;
    height: auto;
    margin: 15vh 5vw 15vh;
  }
`
const DivTop = styled.div`
  width: 45%;
  height: 20%;
  display: flex;
  flex-direction: column;
  gap: 1rem;

  @media (max-width: 980px) {
    width: 100%;
    h1 {
      font-size: 1.5rem;
    }
    p {
      font-size: 0.95rem;
    }
  }
`
const DivBottom = styled.div`
  width: 45%;
  height: 55%;
  @media (max-width: 980px) {
    width: 100%;
  }
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
  @media (max-width: 980px) {
    width: 95%;
    gap: 1rem;
  }
`

const LabelInput = styled.label`
  width: 20px;
  @media (max-width: 980px) {
    width: 30px;
  }
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

const Login = ({ usuarios }) => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault()

    // Comprobar si 'usuarios' está definido y es un arreglo
    const usuariosArray = Array.isArray(usuarios)
      ? usuarios
      : [usuarios].filter(Boolean)
    console.log(usuariosArray)
    try {
      const usuarioEncontrado = usuariosArray.find(
        (user) => user.email === email && user.password === password
      )

      if (usuarioEncontrado) {
        console.log('Credenciales correctas')
        // Aquí agregas la lógica para determinar a qué página redirigir
        if (usuarioEncontrado.email === 'admin@bloquesms.com') {
          navigate(`/admin/${usuarioEncontrado.id}`)
        } else {
          navigate(`/home/${usuarioEncontrado.id}`)
        }

        // Manejo de credenciales correctas
      } else {
        console.log('Credenciales incorrectas')
        // Manejo de credenciales incorrectas
      }
    } catch (error) {
      console.log(error)
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
              onChange={handleSubmit}
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
              onChange={handleSubmit}
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
            <LabelInput>
              <input type="checkbox" id="span" />
            </LabelInput>
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
