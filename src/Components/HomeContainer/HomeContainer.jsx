import React from 'react'
import styled from 'styled-components'
import SearchIcon from '@mui/icons-material/Search'
import CheckIcon from '@mui/icons-material/Check'
import { azul, gris } from '../UI/UI'
import HomeContainerCard from '../HomeContainerCard/HomeContainerCard'

const Div = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  align-items: start;
  justify-content: center;
  position: relative;
  margin: 1rem 1rem 4rem;
  @media (max-width: 980px) {
    gap: 1rem;
    margin: 1rem 1rem 2rem;
  }
`

const Titulo = styled.h1`
  font-size: 3rem;
  font-weight: bold;
  @media (max-width: 980px) {
    font-size: 1.5rem;
  }
`

const DivSubtitulo = styled.div`
  width: 100%;
  display: flex;
  gap: 1rem;
  align-items: center;
  justify-content: start;
  @media (max-width: 980px) {
    gap: 0.5rem;
  }
`

const PSubtitulo = styled.p`
  color: ${gris};
  @media (max-width: 980px) {
    font-size: 0.85rem;
  }
`

const DivCard = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  @media (max-width: 980px) {
    flex-direction: column;
  }
`

const HomeContainer = ({ post }) => {
  return (
    <>
      <Div>
        <Titulo>Oportunidades para invertir</Titulo>
        <DivSubtitulo>
          <SearchIcon style={{ color: azul }} />
          <PSubtitulo>
            Conoce los proyectos inmobiliarios que buscan inversion
          </PSubtitulo>
        </DivSubtitulo>
        <DivSubtitulo>
          <CheckIcon style={{ color: azul }} />
          <PSubtitulo>
            Elige en cual invertir y recibe las instrucciones
          </PSubtitulo>
        </DivSubtitulo>
      </Div>
      <DivCard>
        <HomeContainerCard post={post} />
      </DivCard>
    </>
  )
}

export default HomeContainer
