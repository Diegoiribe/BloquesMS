import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import MainCard from './MainCard/MainCard'
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos'

const Div = styled.div`
  width: 100%;
  height: 89.5vh;
  margin: 5.5% 0 0;
  display: flex;
  align-items: center;
  justify-content: end;
  @media (max-width: 980px) {
    height: auto;
  }
`
const Container = styled.div`
  width: 100%;
  height: 95%;
  padding: 0 0 0 13%;
  display: flex;
  flex-direction: column;
  align-items: start;
  gap: 1rem;
  justify-content: space-between;
`
const H1 = styled.h1`
  font-size: 48px;
  @media (max-width: 980px) {
    font-size: 2rem;
  }
`
const Card = styled.div`
  height: 70%;
  display: flex;
  align-items: center;
  gap: 1rem;
  overflow-x: auto;
  margin-left: ${(props) => props.margin}px;
  transition: margin-left 0.6s ease;
`
const DivArrow = styled.div`
  display: flex;
  align-items: center;
  justify-content: end;
  padding: 0 17% 0 0;
  width: 100%;
  height: 10%;
`

const ScrollButton = styled.button`
  background: transparent;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2rem;
`

const PrincipalMain = ({ mainCard, widthMainCard }) => {
  const [margin, setMargin] = useState(0)

  const scrollRight = () => {
    if (margin < -1300) return // Si el margen es -1000, no hace nada
    setMargin(margin - 200) // Incrementa el margen derecho
  }

  const scrollLeft = () => {
    if (margin === 0) return // Si el margen es 0, no hace nada
    setMargin(margin + 200) // Disminuye el margen derecho
  }

  console.log(margin)
  return (
    <>
      <span id="section3"></span>

      <Div>
        <Container>
          <H1>Proyectos de Bloques MS</H1>
          <Card margin={margin}>
            <MainCard mainCard={mainCard} widthMainCard={widthMainCard} />
          </Card>
          <DivArrow>
            <ScrollButton onClick={scrollLeft}>
              <ArrowBackIosIcon />
            </ScrollButton>
            <ScrollButton onClick={scrollRight}>
              <ArrowForwardIosIcon />
            </ScrollButton>
          </DivArrow>
        </Container>
      </Div>
    </>
  )
}

export default PrincipalMain
