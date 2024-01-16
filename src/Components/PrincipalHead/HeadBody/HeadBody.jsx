import React from 'react'
import styled from 'styled-components'
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline'
import { azul, azulClaro } from '../../UI/UI'
import img from '../../../assets/img/img.png'

// const DImg = styled.div`
// background-image: ;`

const Div = styled.div`
  width: 80%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin: 0 10%;
`

const DivInfo = styled.div`
  width: 50%;
  height: 70%;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`

const DivOne = styled.div`
  height: 50%;
  display: flex;
  flex-direction: column;
  justify-content: end;
  gap: 1rem;
`
const H1 = styled.h1`
  font-size: 48px;
  font-weight: 700;
  line-height: 1.2em;
  letter-spacing: -0.2px;
  color: #212121;
`
const H3 = styled.h3`
  font-family: dm sans, Sans-serif;
  font-size: 16px;
  font-weight: 400;
  line-height: 1.6em;
  letter-spacing: -0.02em;
  color: #212121;
`

const DivTwo = styled.div`
  height: 43%;
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-wrap: wrap;
`

const DivDestacado = styled.div`
  display: flex;
  align-items: center;
  justify-content: start;
  gap: 1rem;
  width: 50%;
  height: 33%;
`

const DivIcon = styled.div`
  width: 25px;
  height: 25px;
  background: ${azulClaro};
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
`

const P = styled.p`
  font-family: dm sans, Sans-serif;
  font-size: 14px;
  font-weight: 700;
  line-height: 1.4em;
  letter-spacing: -0.2px;
`

const DivThree = styled.div`
  height: 24%;
  display: flex;
  align-items: start;
  justify-content: start;
`

const DivHover = styled.div`
  width: 150px;
  height: 53px;
  cursor: pointer;
  &:hover > * {
    background: ${azul};
  }
`

const Btn = styled.div`
  display: flex;
  align-items: center;
  width: 150px;
  text-align: center;
  border: 1px solid ${azul};
  color: ${azul};
  border-radius: 5px;
  &:hover > * {
    background: ${azul};
    color: white;
  }
`
const PBtn = styled.p`
  padding: 0px 24px;
  font-family: dm sans, Sans-serif;
  font-size: 18px;
  font-weight: 500;
  line-height: 48px;
  color: ${azul};
  background-color: #05047e00;
`

const HeadBody = () => {
  return (
    <>
      <Div>
        <DivInfo>
          <DivOne>
            <H1>Bloques Meza Salazar</H1>

            <H3>
              Descubre proyectos arquitectónicos que combinan estética y
              funcionalidad. Explora mis diseños de interiores personalizados
              que transforman espacios ordinarios en entornos extraordinarios.
            </H3>
          </DivOne>
          <DivTwo>
            <DivDestacado>
              <DivIcon>
                <AddCircleOutlineIcon
                  fontSize="xs"
                  style={{ background: azulClaro, color: '#212121' }}
                />
              </DivIcon>
              <P>Diseños Personalizados Únicos</P>
            </DivDestacado>
            <DivDestacado>
              <DivIcon>
                <AddCircleOutlineIcon
                  fontSize="xs"
                  style={{ background: azulClaro, color: '#212121' }}
                />
              </DivIcon>
              <P>Enfoque Sostenible</P>
            </DivDestacado>
            <DivDestacado>
              <DivIcon>
                <AddCircleOutlineIcon
                  fontSize="xs"
                  style={{ background: azulClaro, color: '#212121' }}
                />
              </DivIcon>
              <P>Colaboración con Marcas de Renombre</P>
            </DivDestacado>
            <DivDestacado>
              <DivIcon>
                <AddCircleOutlineIcon
                  fontSize="xs"
                  style={{ background: azulClaro, color: '#212121' }}
                />
              </DivIcon>
              <P>Visualizaciones en 3D Realistas</P>
            </DivDestacado>
            <DivDestacado>
              <DivIcon>
                <AddCircleOutlineIcon
                  fontSize="xs"
                  style={{ background: azulClaro, color: '#212121' }}
                />
              </DivIcon>
              <P>Espacios Funcionales y Modernos</P>
            </DivDestacado>
            <DivDestacado>
              <DivIcon>
                <AddCircleOutlineIcon
                  fontSize="xs"
                  style={{ background: azulClaro, color: '#212121' }}
                />
              </DivIcon>
              <P>Soporte Integral en Proyectos</P>
            </DivDestacado>
          </DivTwo>
          <DivThree>
            <DivHover>
              <Btn>
                <PBtn>Ver mas</PBtn>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M2.24999 10.071C2.24999 9.65683 2.58578 9.32104 2.99999 9.32104L15.3315 9.32105L10.7031 4.69273C10.4103 4.39983 10.4103 3.92496 10.7031 3.63207C10.996 3.33917 11.4709 3.33917 11.7638 3.63207L17.6725 9.54071C17.9653 9.83361 17.9653 10.3085 17.6725 10.6014L11.7638 16.51C11.4709 16.8029 10.996 16.8029 10.7031 16.51C10.4103 16.2171 10.4103 15.7423 10.7031 15.4494L15.3315 10.821L2.99999 10.821C2.58578 10.821 2.24999 10.4853 2.24999 10.071Z"
                    fill="currentColor"
                  ></path>
                </svg>
              </Btn>
            </DivHover>
          </DivThree>
        </DivInfo>
        <div
          style={{
            backgroundImage: `url(${img})`,
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'bottom',
            width: '30%',
            height: '60%',
            borderRadius: '10px'
          }}
        ></div>
      </Div>
    </>
  )
}

export default HeadBody
