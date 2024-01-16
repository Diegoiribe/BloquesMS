import React from 'react'
import styled from 'styled-components'
import { Link, useLocation } from 'react-router-dom'
import logo from '../../assets/img/logo.png'
import { blanco, azul } from '../UI/UI'

const Nav = styled.nav`
  position: fixed;
  width: 100%;
  height: 9vh;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0 0 4px 2px rgba(0, 0, 0, 0.2);
  background: ${blanco};
  z-index: 1;
`

const DivImg = styled.div`
  width: 40%;
  height: 100%;
  margin: 0 0 0 2.5%;
  display: flex;
  justify-content: start;
  align-items: center;
  gap: 5px;
`

const Img = styled.div`
  width: 30px;
  height: 30px;
  background-image: url(${logo});
  background-size: cover;
`

const Logo = styled.p`
  font-size: 1.75rem;
  font-weight: bold;
  color: black;
`

const DivLinks = styled.div`
  width: 50%;
  height: 100%;

  display: flex;
  justify-content: end;
  align-items: center;
`
const PLinks = styled.p`
  font-size: 1.2rem;
  padding: 0 1.5rem;
  color: black;
`

const DivLogin = styled.div`
  width: 25%;
  height: 100%;
  padding: 0 5%;
  background: ${azul};
  display: flex;
  justify-content: center;
  align-items: center;
`

const PLogin = styled.p`
  font-size: 1.2rem;
  color: ${blanco};
`

const Header = ({ usuarios }) => {
  const location = useLocation()
  const currentURL = location.pathname
  const segments = currentURL.split('/')
  const idFromURL = segments[segments.length - 1] // El último segmento debería ser el ID
  const isValidId = usuarios.some((item) => item.id === idFromURL)

  return (
    <Nav>
      <DivImg>
        {/* <SelectAllIcon
          fontSize="large"
          style={{ margin: '0 5px', color: '#012d48' }}
        /> */}
        <Img></Img>
        <Link to="/" style={{ textDecoration: 'none' }}>
          <Logo>BLOQUES MS</Logo>
        </Link>
      </DivImg>
      <DivLinks>
        {isValidId ? (
          <>
            <Link to={`/home/${idFromURL}`} style={{ textDecoration: 'none' }}>
              <PLinks>Oportunidades para invertir</PLinks>
            </Link>
            <Link
              to={`/usuario/${idFromURL}`}
              style={{ textDecoration: 'none' }}
            >
              <PLinks>Dashboard</PLinks>
            </Link>
          </>
        ) : (
          <>
            {/* Si no es válido, mostramos el texto sin el componente Link */}
            <PLinks style={{ pointerEvents: 'none', opacity: 0.5 }}>
              Oportunidades para invertir
            </PLinks>
            <PLinks style={{ pointerEvents: 'none', opacity: 0.5 }}>
              Dashboard
            </PLinks>
          </>
        )}
        <DivLogin>
          <Link to="/login" style={{ textDecoration: 'none' }}>
            <PLogin>Inicia sesion</PLogin>
          </Link>
        </DivLogin>
      </DivLinks>
    </Nav>
  )
}

export default Header
