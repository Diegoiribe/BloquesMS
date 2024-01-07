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
`

const Titulo = styled.h1`
  font-size: 3rem;
  font-weight: bold;
`

const DivSubtitulo = styled.div`
  width: 100%;
  display: flex;
  gap: 1rem;
  align-items: center;
  justify-content: start;
`

const PSubtitulo = styled.p`
  color: ${gris};
`

const DivCard = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
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
