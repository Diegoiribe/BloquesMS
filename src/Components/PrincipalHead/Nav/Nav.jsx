import React from 'react'
import styled from 'styled-components'
import DehazeIcon from '@mui/icons-material/Dehaze'
import { useState, useEffect } from 'react'
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward'
import { grisNav, hoverNav, azul } from '../../UI/UI'
import { Link } from 'react-router-dom'

const DivNav = styled.div`
  position: fixed;
  width: 100%;
  height: 10.5%;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  background: fill;
  backdrop-filter: blur(10px);
`

const Div = styled.div`
  width: 100%;
  height: 100%;
  margin: 0.5rem;
  display: flex;
  align-items: center;
  justify-content: space-around;
`

const Btn = styled.button`
  background: ${azul};
  border-radius: 0.5rem;
  border: none;
  min-width: 6rem;
  height: 2.5rem;
  cursor: pointer;
`

const P = styled.p`
  padding: 0.5rem 1rem;
  color: white;
  background: transparent;
  font-size: 1rem;
  font-weight: 500;
`

const Ul = styled.ul`
  display: flex;

  align-items: center;

  background-color: ${grisNav};
  min-width: 25.5%;
  max-width: 40%;
  border-radius: 4.375rem;
  padding: 0.05rem;
  @media (max-width: 980px) {
    min-width: auto;
  }
`
const Li = styled.a`
  font-size: 0.875rem;
  padding: 0.45rem 1.5rem;
  background: ${grisNav};
  display: flex;
  justify-content: center;
  cursor: pointer;
  text-decoration: none;
  color: black;
  @media (max-width: 980px) {
    padding: 0.45rem 0.5rem;
  }
`

const MobileMenu = styled.div`
  display: none;
  @media (max-width: 980px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    background: white;
    top: 9vh;
    width: 100%;
    height: 50%;
  }
`

const Nav = () => {
  const [seccion, setSeccion] = useState('1')

  const cambiarSeccion = (nombre) => {
    setSeccion(nombre)
    // Esto hará que la ventana se desplace hacia arriba en 50px.
    window.scrollBy({
      top: -1000, // Valor negativo para subir
      behavior: 'smooth' // Para un efecto de desplazamiento suave
    })
  }
  //Estilos del nav
  const customStyle = {
    background: azul,
    borderRadius: '4.375rem',
    color: 'white',
    transition: '.6s'
  }
  const Arrow = {
    background: grisNav
  }
  const customStyleArrow = {
    fontSize: '2.1rem',
    background: hoverNav,
    borderRadius: '50%'
  }

  const customStyleLi = {
    padding: '0.15rem 1.2rem'
  }

  const mobil = window.innerWidth < 980

  return (
    <DivNav>
      <Div id="section0">
        {/* Asegúrate de tener una key única aquí */}
        {mobil ? (
          <Ul>
            <Li>
              <DehazeIcon />
            </Li>
          </Ul>
        ) : (
          <Ul>
            <Li
              style={seccion === '0' ? customStyleLi : null}
              onClick={() => cambiarSeccion('0')}
              href="#section1"
            >
              <ArrowUpwardIcon
                style={seccion === '0' ? customStyleArrow : Arrow}
              />
            </Li>
            <Li
              style={seccion === '1' ? customStyle : null}
              onClick={() => cambiarSeccion('1')}
              href="#section1"
            >
              Inicio
            </Li>

            <Li
              style={seccion === '2' ? customStyle : null}
              onClick={() => cambiarSeccion('2')}
              href="#section2"
            >
              Sobre Nosotros
            </Li>
            <Li
              style={seccion === '3' ? customStyle : null}
              onClick={() => cambiarSeccion('3')}
              href="#section3"
            >
              Proyectos
            </Li>
            <Li
              style={seccion === '4' ? customStyle : null}
              onClick={() => cambiarSeccion('4')}
              href="#section4"
            >
              Galeria
            </Li>
            <Li
              style={seccion === '5' ? customStyle : null}
              onClick={() => cambiarSeccion('5')}
              href="#section5"
            >
              Contacto
            </Li>
          </Ul>
        )}
        <Btn>
          <Link
            style={{ width: '100%', height: '100%', textDecoration: 'none' }}
            to="/home"
          >
            <P>Plataforma de Inversion</P>
          </Link>
        </Btn>
      </Div>
    </DivNav>
  )
}

export default Nav
