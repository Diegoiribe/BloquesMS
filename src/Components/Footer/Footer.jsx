import React from 'react'
import styled from 'styled-components'
import { blanco, azul } from '../UI/UI'
import FacebookIcon from '@mui/icons-material/Facebook'
import InstagramIcon from '@mui/icons-material/Instagram'
import YouTubeIcon from '@mui/icons-material/YouTube'
import TwitterIcon from '@mui/icons-material/Twitter'
import { Link } from 'react-router-dom'

const DivFooter = styled.div`
  width: 100vw;
  height: 30vh;
  padding: 0 10vw;
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
`

const DivTop = styled.div`
  width: 100vw;
  height: 80%;
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  background: ${azul};
`
const DivFooterTop = styled.div`
  width: 100%;
  height: 40%;
  display: flex;
  flex-direction: row;
  align-items: center;
`

const DivLineaLeft = styled.div`
  margin: 0 0 0 10vw;
  width: 30vw;
  height: 1px;
  background: ${blanco};
`

const DivIcons = styled.div`
  width: 20vw;
  height: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 2.5rem;
  padding: 1rem;
`

const DivLineaRight = styled.div`
  margin: 0 10 0 0vw;
  width: 30vw;
  height: 1px;
  background: ${blanco};
`
const DivFooterBottom = styled.div`
  H1 {
    color: ${blanco};
  }
`

const DivBottom = styled.div`
  width: 100vw;
  height: 20%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`

const Footer = () => {
  return (
    <DivFooter>
      <DivTop>
        <DivFooterTop>
          <DivLineaLeft />
          <DivIcons>
            <Link to="/">
              <FacebookIcon fontSize="large" style={{ color: blanco }} />
            </Link>
            <Link to="/">
              <InstagramIcon fontSize="large" style={{ color: blanco }} />
            </Link>
            <Link to="/">
              <YouTubeIcon fontSize="large" style={{ color: blanco }} />
            </Link>
            <Link to="/">
              <TwitterIcon fontSize="large" style={{ color: blanco }} />
            </Link>
          </DivIcons>
          <DivLineaRight />
        </DivFooterTop>
        <DivFooterBottom>
          <h1>BLOQUES MS</h1>
        </DivFooterBottom>
      </DivTop>
      <DivBottom>
        <h4>© Copyright IsThisTheWay</h4>
      </DivBottom>
    </DivFooter>
  )
}

export default Footer
