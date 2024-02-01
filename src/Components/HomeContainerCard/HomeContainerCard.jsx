import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import Btn from '../Btn/Btn'
import LocationOnIcon from '@mui/icons-material/LocationOn'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { blanco, azul } from '../UI/UI'

const DivCard = styled.div`
  width: 24.5841vw;
  height: 83vh;
  background: ${blanco};
  border-radius: 10px;
  margin: 1rem 1rem;
  box-shadow: 0 1px 11px 0 rgba(0, 0, 0, 0.2);
  @media (max-width: 1540px) {
    height: 95vh;
  }
  @media (max-width: 1300px) {
    width: 35vw;
  }
  @media (max-width: 980px) {
    width: 85vw;
    height: 87.5vh;
  }
`
const DivHeader = styled.div`
  width: 100%;
  height: 20%;
  display: flex;
  flex-direction: row;
  justify-content: start;
  gap: 1rem;
  padding: 1rem;
  align-items: center;
`
const DivHImg = styled.img`
  box-shadow: 0 0 4px 2px rgba(0, 0, 0, 0.2);
  object-fit: contain;
  width: 40px;
  height: 40px;
  border-radius: 50%;
`
const DivHSub = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: start;
  align-items: center;
  gap: 0.5rem;
`
const DivColor = styled.div`
  width: 100%;
  height: 3%;
  background: ${azul};
`
const DivImg = styled.img`
  width: 100%;
  height: 40%;
  object-fit: cover;
  @media (max-width: 1300px) {
    height: 35%;
  }
`
const DivBody = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: start;
  gap: 0.5rem;
  padding: 1rem;
`

const PBTitulo = styled.p`
  font-weight: bold;
`

const PBTasa = styled.p`
  color: ${azul};
  font-weight: bold;
  font-size: 2rem;

  @media (max-width: 1300px) {
    font-size: 1.5rem;
  }
`

const DivBSub = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`

const PBSub = styled.p`
  font-weight: bold;
`

const DivPie = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 1rem;
`

const H1 = styled.h1`
  @media (max-width: 1300px) {
    font-size: 1.5rem;
  }
`

const HomeContainerCard = ({ post }) => {
  const navigate = useNavigate()
  const location = useLocation()
  const currentURL = location.pathname
  const segments = currentURL.split('/')
  const id = segments[2]
  console.log(id)

  const pago = () => {
    if (id !== undefined) {
      window.location.href = `https://buy.stripe.com/test_28o00Mf2A2dK5eE6oo`
    } else {
      navigate('/login')
    }
  }
  return (
    <>
      {/* Mapeando los datos de la api */}
      {post.map((post) => (
        <DivCard>
          <DivHeader>
            <DivHImg src={post.logo} />
            <div>
              <H1>{post.title}</H1>
              <DivHSub>
                <LocationOnIcon style={{ color: azul }} />
                <p>{post.place}</p>
              </DivHSub>
            </div>
          </DivHeader>
          <DivColor></DivColor>
          <DivImg src={post.img} />

          <DivBody>
            <PBTitulo>Tasa anual fija</PBTitulo>
            <PBTasa>{post.tasa}%</PBTasa>
            <DivBSub>
              <p>Minimo de inversion</p>
              <PBSub>
                $
                {post.monto.toLocaleString('en-US', {
                  minimumFractionDigits: 2,
                  maximumFractionDigits: 2
                })}
              </PBSub>
            </DivBSub>
            <DivBSub>
              <p>Plazo</p>
              <PBSub>{post.plazo}</PBSub>
            </DivBSub>
          </DivBody>
          <DivPie>
            <Link
              style={{ textDecoration: 'none' }}
              to={`/home/informacion/${post.id}/${id}`}
            >
              <Btn
                titulo="Conoce mas"
                width="100%"
                padding=".75rem 2rem"
                borderRadius="5px"
                background={blanco}
                fontSize="1rem"
                fontWeight="bold"
                borderColor="#000000"
                border="1px solid"
                textDecoration="none"
                color="#000000"
              />
            </Link>
            <div onClick={() => pago()}>
              <Btn
                titulo="Quiero invertir"
                width="100%"
                padding=".75rem 2rem"
                borderRadius="5px"
                background={azul}
                color={blanco}
                fontSize="1rem"
                fontWeight="bold"
                borderColor={azul}
                border="1px solid"
                textDecoration="none"
              />
            </div>
          </DivPie>
        </DivCard>
      ))}
    </>
  )
}

export default HomeContainerCard
