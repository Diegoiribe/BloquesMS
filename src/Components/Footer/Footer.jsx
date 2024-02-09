import React from 'react'
import styled from 'styled-components'
import { blanco, azul } from '../UI/UI'
import FacebookIcon from '@mui/icons-material/Facebook'
import InstagramIcon from '@mui/icons-material/Instagram'
import YouTubeIcon from '@mui/icons-material/YouTube'
import TwitterIcon from '@mui/icons-material/Twitter'
import { Link } from 'react-router-dom'

const FooterContainer = styled.footer`
  width: 100%;
  background: ${azul};
  color: ${blanco};
  font-family: 'Arial', sans-serif;
`

const FooterContent = styled.div`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  align-items: start;
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem 1rem;
`

const Column = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  min-width: 200px;
  margin: 0 10px;
`

const SocialMedia = styled.div`
  display: flex;
  gap: 20px;
`

const FooterLink = styled.a`
  color: ${blanco};
  text-decoration: none;
  margin: 5px 0;

  &:hover {
    text-decoration: underline;
  }
`

const FooterText = styled.p`
  margin: 5px 0;
`

const Footer = () => {
  return (
    <FooterContainer>
      <FooterContent>
        <Column>
          <FooterText>BLOQUES MSZ SAPI DE CV</FooterText>
          <FooterText>MAZATLAN, SINALOA C.P. 82100</FooterText>
          <FooterText>TEL. 667 188 8281</FooterText>
        </Column>
        <Column>
          <SocialMedia>
            <FooterLink href="https://www.facebook.com/profile.php?id=61554278412098">
              <FacebookIcon fontSize="large" />
            </FooterLink>
            <FooterLink href="https://www.instagram.com/bloques.ms/">
              <InstagramIcon fontSize="large" />
            </FooterLink>
            <FooterLink to="/">
              <YouTubeIcon fontSize="large" />
            </FooterLink>
            <FooterLink to="/">
              <TwitterIcon fontSize="large" />
            </FooterLink>
          </SocialMedia>
        </Column>
        <Column>
          <FooterLink to="/">Inicio</FooterLink>
          <FooterLink to="/">Sobre Nosotros</FooterLink>
          <FooterLink to="/">Servicios</FooterLink>
          <FooterLink to="/">Contacto</FooterLink>
        </Column>
        <Column>
          <FooterText>Mejorando tu entorno, un bloque a la vez.</FooterText>
          <FooterText>
            © {new Date().getFullYear()} IsThisTheWay. Todos los derechos
            reservados.
          </FooterText>
        </Column>
      </FooterContent>
    </FooterContainer>
  )
}

export default Footer
