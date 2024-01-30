import React from 'react'
import styled from 'styled-components'
import { azul, azulClaro } from '../../UI/UI'
import HealthAndSafetyIcon from '@mui/icons-material/HealthAndSafety'
import Logo from '../../../assets/img/img.png'
import Mobile from '../../../assets/img/mobile.png'

const Div = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  flex-direction: column;
`

const Img = styled.div`
  width: 100%;
  height: 50%;
  background-image: url('https://www.plusvela.com/hubfs/Aerea-2.jpg');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  display: flex;
  align-items: end;
  justify-content: center;
`

const ImgText = styled.div`
  width: 100%;
  height: 50%;
  display: flex;
  flex-direction: column;
  justify-content: end;
  align-items: start;
  gap: 1rem;
  padding: 2rem 0 2rem 33%;
  background: linear-gradient(
    to bottom,
    rgba(0, 0, 0, 0),
    rgba(0, 0, 0, 1)
  ) !important;

  h1 {
    font-size: 2.5rem;
    color: white;
  }
  h2 {
    font-size: 1.5rem;
    color: ${azul};
    font-weight: bold;
  }
  @media (max-width: 1540px) {
    height: auto;
  }

  @media (max-width: 980px) {
    padding: 2rem 0 2rem 1rem;
    height: 60%;

    h1 {
      font-size: 1.5rem;
    }
    h2 {
      font-size: 1rem;
    }
  }
`

const Container = styled.div`
  padding: 0 15%;
  width: 100%;
  height: 50%;
  display: flex;
  align-items: center;
  justify-content: space-around;
  gap: 2rem;
  background: linear-gradient(
    to bottom left,
    rgb(0, 163, 224),
    rgb(5, 109, 174)
  );
  @media (max-width: 980px) {
    padding: 0 5%;
    flex-direction: column;
  }
`

const Btn = styled.div`
  width: 15rem;
  height: 2.5rem;
  background: ${azul};
  color: white;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`
const CardOne = styled.div`
  width: 60%;
  height: 80%;
  background: white;
  border-radius: 20px;
  padding: 2rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 2rem;

  .one {
    div {
      background-image: url(${Logo});
      background-size: cover;
      background-position: center;
      background-repeat: no-repeat;
      width: 150px;
      height: 150px;
      margin: 0 0 2rem;
    }
    h1 {
      margin-bottom: 0.5rem;
    }
    p {
      font-size: 1.25rem;
      font-weight: 200;
    }
  }
  .two {
    background-image: url(${Mobile});
    background-size: contain;
    background-position: center;
    background-repeat: no-repeat;
    width: 100%;
    height: 90%;
  }
  @media (max-width: 1540px) {
    padding: 1rem;
    .one {
      div {
        margin: 0 0 0;
        width: 110px;
        height: 110px;
      }

      p {
        font-size: 1rem;
      }
    }
  }
  @media (max-width: 980px) {
    width: 100%;
    padding: 1rem;
    .one {
      div {
        width: 90px;
        height: 90px;
      }
      h1 {
        font-size: 1.5rem;
      }
      p {
        font-size: 0.85rem;
      }
    }
  }
`
const CardTwo = styled.div`
  width: 40%;
  height: 80%;
  background: white;
  border-radius: 20px;
  padding: 2rem;

  div {
    div {
      padding: 1rem 0;
    }
    h1 {
    }
    p {
      font-size: 1.25rem;
      font-weight: 200;
    }
  }
  @media (max-width: 1540px) {
    padding: 1rem;
    div {
      div {
        padding: 1rem 0;
      }
      h1 {
        font-size: 1.5rem;
      }
      p {
        font-size: 1rem;
      }
    }
  }
  @media (max-width: 980px) {
    display: none;
  }
`

const HeadBody = () => {
  return (
    <Div>
      <Img>
        <ImgText>
          <h1>Haz crecer tu capital</h1>
          <h2>Conoce lo que tennemos para ti como inversionista</h2>
          <Btn>
            <p>Elige donde invertir</p>
          </Btn>
        </ImgText>
      </Img>
      <Container>
        <CardOne>
          <div className="one">
            <div></div>
            <h1>Arranca o crece como inversionista</h1>
            <p>
              Te acompañamos y brindamos en tu camino a crecer el patrimonio
            </p>
          </div>
          <div className="two"></div>
        </CardOne>
        <CardTwo>
          <div>
            <div>
              <HealthAndSafetyIcon
                style={{ width: '150px', height: '150px', color: azul }}
              />
            </div>
            <h1>Seguro de inversor</h1>
            <p>
              ¿Hubo alguna eventualidad? Aplica y recibe hasta el 100% de tu
              inversión
            </p>
          </div>
        </CardTwo>
      </Container>
    </Div>
  )
}

export default HeadBody
