import React, { useState } from 'react'
import styled from 'styled-components'
import { Link, useLocation } from 'react-router-dom'
import logo from '../../assets/img/logo.png'
import { blanco, azul } from '../UI/UI'
// Añadir ícono para el botón de menú (si lo necesitas)
import MenuIcon from '@mui/icons-material/Menu'

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
  @media (max-width: 980px) {
    width: 60%;
    margin: 0 0 0 5%;
  }
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
  @media (max-width: 980px) {
    font-size: 1.25rem;
  }
`

const DivLinks = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  justify-content: end;
  align-items: center;
  @media (max-width: 980px) {
    display: none;
  }
`
const PLinks = styled.p`
  font-size: 1.2rem;
  padding: 0 0.5rem;
  color: black;
`

const DivLogin = styled.div`
  width: 15%;
  height: 100%;
  background: ${azul};
  display: flex;
  justify-content: center;
  align-items: center;
  @media (max-width: 980px) {
    width: 25%;
  }
`

const PLogin = styled.p`
  font-size: 1.2rem;
  color: ${blanco};
  @media (max-width: 980px) {
    font-size: 0.85rem;
  }
`

const ToggleButton = styled.button`
  display: none;
  @media (max-width: 980px) {
    display: block;
    background: none;
    border: none;
    cursor: pointer;
    font-size: 1.5rem;
  }
`

const MobileMenu = styled.div`
  display: none;
  @media (max-width: 980px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    background: ${blanco};
    top: 9vh;
    width: 100%;
    height: 50%;
  }
`

const Header = ({ usuarios }) => {
  const [menuVisible, setMenuVisible] = useState(false)
  const location = useLocation()
  const currentURL = location.pathname
  const segments = currentURL.split('/')
  const idFromURL = segments[segments.length - 1]
  const isValidId = usuarios.some((item) => item.id === idFromURL)

  return (
    <Nav
      style={{
        height: menuVisible ? '40vh' : '9vh',
        flexDirection: menuVisible ? 'column' : 'row',
        gap: menuVisible ? '.5rem' : '0'
      }}
    >
      <DivImg
        style={{
          height: menuVisible ? '25%' : '60%',
          justifyContent: menuVisible ? 'center' : 'start',
          margin: menuVisible ? '0 0 0 0' : '0 0 0 5%'
        }}
      >
        <Img></Img>
        <Link to="/" style={{ textDecoration: 'none' }}>
          <Logo>BLOQUES MS</Logo>
        </Link>
      </DivImg>
      <ToggleButton onClick={() => setMenuVisible(!menuVisible)}>
        <MenuIcon />
      </ToggleButton>
      <MobileMenu
        style={{
          display: menuVisible ? 'flex' : 'none',
          gap: menuVisible ? '.5rem' : '0'
        }}
      >
        {isValidId ? (
          <>
            <Link
              to={`/home/${idFromURL}`}
              style={{
                textDecoration: 'none',
                width: menuVisible ? '100%' : 'none',
                display: menuVisible ? 'flex' : 'none',
                alignItems: menuVisible ? 'center' : 'none',
                justifyContent: menuVisible ? 'center' : 'none'
              }}
            >
              <PLinks
                style={{
                  width: menuVisible ? '80%' : 'none',
                  textAlign: menuVisible ? 'center' : 'none',
                  padding: menuVisible ? '.5rem' : 'none',
                  backgroundColor: menuVisible ? azul : 'none',
                  borderRadius: menuVisible ? '10px' : 'none',
                  color: menuVisible ? 'white' : 'black'
                }}
              >
                Oportunidades para invertir
              </PLinks>
            </Link>
            <Link
              to={`/usuario/${idFromURL}`}
              style={{
                textDecoration: 'none',
                width: menuVisible ? '100%' : 'none',
                display: menuVisible ? 'flex' : 'none',
                alignItems: menuVisible ? 'center' : 'none',
                justifyContent: menuVisible ? 'center' : 'none'
              }}
            >
              <PLinks
                style={{
                  width: menuVisible ? '80%' : 'none',
                  textAlign: menuVisible ? 'center' : 'none',
                  padding: menuVisible ? '.5rem' : 'none',
                  backgroundColor: menuVisible ? azul : 'none',
                  borderRadius: menuVisible ? '10px' : 'none',
                  color: menuVisible ? 'white' : 'black'
                }}
              >
                Dashboard
              </PLinks>
            </Link>
          </>
        ) : (
          <>
            <PLinks
              style={{
                pointerEvents: 'none',
                opacity: 0.5,

                width: menuVisible ? '80%' : 'none',
                textAlign: menuVisible ? 'center' : 'none',
                padding: menuVisible ? '.5rem' : 'none',
                backgroundColor: menuVisible ? azul : 'none',
                borderRadius: menuVisible ? '10px' : 'none',
                color: menuVisible ? 'white' : 'black'
              }}
            >
              Oportunidades para invertir
            </PLinks>
            <PLinks
              style={{
                pointerEvents: 'none',
                opacity: 0.5,
                width: menuVisible ? '80%' : 'none',
                textAlign: menuVisible ? 'center' : 'none',
                padding: menuVisible ? '.5rem' : 'none',
                backgroundColor: menuVisible ? azul : 'none',
                borderRadius: menuVisible ? '10px' : 'none',
                color: menuVisible ? 'white' : 'black'
              }}
            >
              Dashboard
            </PLinks>
          </>
        )}
      </MobileMenu>
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
            <PLinks
              style={{
                pointerEvents: 'none',
                opacity: 0.5
              }}
            >
              Oportunidades para invertir
            </PLinks>
            <PLinks
              style={{
                pointerEvents: 'none',
                opacity: 0.5
              }}
            >
              Dashboard
            </PLinks>
          </>
        )}
      </DivLinks>
      <DivLogin
        style={{
          display: menuVisible ? 'none' : 'flex'
        }}
      >
        <Link to="/login" style={{ textDecoration: 'none' }}>
          <PLogin>Inicia sesion</PLogin>
        </Link>
      </DivLogin>
    </Nav>
  )
}

export default Header
