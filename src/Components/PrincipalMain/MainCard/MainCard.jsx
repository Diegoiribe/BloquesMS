import React from 'react'
import styled from 'styled-components'
// import { buscar } from '../../../api/api'
import { useState, useEffect } from 'react'
import AddIcon from '@mui/icons-material/Add'
import { Link } from 'react-router-dom'

const Div = styled.div`
  width: 17vw;
  height: 100%;
  border-radius: 28px;
  @media (max-width: 1300px) {
    width: 30vw;
  }
  @media (max-width: 980px) {
    width: 50vw;
    height: 65vh;
  }
`
const Container = styled.div`
  width: 100%;
  height: 100%;
  border-radius: 28px;
  padding: 1rem;
  display: flex;
  flex-direction: row;
  @media (max-width: 980px) {
    flex-direction: column;
  }
`
const DivOne = styled.div`
  background: transparent;
  width: 90%;
  height: 100%;
  @media (max-width: 980px) {
    width: 100%;
    height: 50%;
  }
`
const DivTwo = styled.div`
  background: transparent;
  width: 10%;
  height: 100%;
  display: flex;
  align-items: end;
  justify-content: end;
  @media (max-width: 980px) {
    width: 100%;
    height: 50%;
  }
`
const DivIcon = styled.div`
  background: #37373a;
  border-radius: 50%;
  width: 1.5rem;
  height: 1.5rem;
  cursor: pointer;
`

const H1 = styled.h1`
  font-size: 17px;
  line-height: 1.2353641176;
  font-weight: 600;
  letter-spacing: -0.022em;
  font-family: SF Pro Text, SF Pro Icons, Helvetica Neue, Helvetica, Arial,
    sans-serif;
  color: #f5f5f7;
  background: transparent;
`
const P = styled.p`
  font-size: 20px;
  line-height: 1.1428571429;
  font-weight: 600;
  letter-spacing: 0.007em;
  font-family: SF Pro Display, SF Pro Icons, Helvetica Neue, Helvetica, Arial,
    sans-serif;
  color: #f5f5f7;
  background: transparent;
  @media (max-width: 1300px) {
    font-size: 15px;
  }
  @media (max-width: 980px) {
    font-size: 15px;
  }
`

//Diseño activo
const DivOneActivo = styled.div`
  width: 60%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: space-around;
  background: transparent;
  @media (max-width: 980px) {
    width: 100%;
    height: 100%;
  }
`
const Titulo = styled.div`
  width: 100%;
  background: transparent;
`
const Informacion = styled.div`
  width: 100%;
  background: transparent;
  @media (max-width: 980px) {
    p {
      font-size: 0.85rem;
    }
  }
`
const DivTwoActivo = styled.div`
  width: 40%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  background: transparent;
  padding: 2rem 2rem 0;
  @media (max-width: 1300px) {
    padding: 1rem 1rem 0;
  }
  @media (max-width: 980px) {
    width: 100%;
    height: 15%;
  }
`

const Img = styled.div`
  @media (max-width: 980px) {
    display: none;
  }
`
const DivIconActivo = styled.div`
  width: 100%;
  background: transparent;
  display: flex;
  align-items: center;
  justify-content: end;
`

const MainCard = ({ mainCard, widthMainCard }) => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth)

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth)
    }

    window.addEventListener('resize', handleResize)

    // Limpiar el escuchador de eventos al desmontar el componente
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  const styleDiv = {
    width: windowWidth < 980 ? '75vw' : '51vw'
  }

  console.log(mainCard)
  return (
    <>
      {mainCard.map((item, index) =>
        item.activa ? (
          <Div key={index} style={styleDiv}>
            <Container
              style={{
                background: item.color
              }}
            >
              <DivOneActivo>
                <Link
                  to={`${item.link}`}
                  style={{
                    textDecoration: 'none',
                    width: '100% ',
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-around'
                  }}
                >
                  <Titulo>
                    <H1 style={{ color: item.colorP }}>{item.titulo}</H1>
                    <P style={{ color: item.colorP }}>{item.subtitulo}</P>
                  </Titulo>
                  <Informacion>
                    <P style={{ color: item.colorP }}>{item.informacion}</P>
                  </Informacion>
                </Link>
              </DivOneActivo>

              <DivTwoActivo>
                <Img
                  style={{
                    backgroundImage: `url(${item.img})`,
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: 'bottom',
                    width: '100%',
                    height: '90%',
                    borderRadius: '14px'
                  }}
                ></Img>
                <DivIconActivo>
                  <DivIcon>
                    <AddIcon
                      style={{
                        background: 'transparent',
                        color: 'white'
                      }}
                      onClick={() => widthMainCard(item.id)}
                    />
                  </DivIcon>
                </DivIconActivo>
              </DivTwoActivo>
            </Container>
          </Div>
        ) : (
          <Div key={index}>
            <Container
              style={{
                backgroundImage: `url(${item.img})`,
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'bottom'
              }}
            >
              <Link
                to={`${item.link}`}
                style={{
                  textDecoration: 'none',
                  width: '100%',
                  height: '100%'
                }}
              >
                <DivOne>
                  <H1>{item.titulo}</H1>
                  <P>{item.subtitulo}</P>
                </DivOne>
              </Link>
              <DivTwo>
                <DivIcon>
                  <AddIcon
                    style={{
                      background: 'transparent',
                      color: 'white'
                    }}
                    onClick={() => widthMainCard(item.id)}
                  />
                </DivIcon>
              </DivTwo>
            </Container>
          </Div>
        )
      )}
    </>
  )
}

export default MainCard
