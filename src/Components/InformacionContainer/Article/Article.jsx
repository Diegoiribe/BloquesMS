import React, { useState } from 'react'
import styled from 'styled-components'
import { azul } from '../../UI/UI'
import { useNavigate, useLocation, Link } from 'react-router-dom'

const Div = styled.div`
  width: 90%;
  background: white;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  box-shadow: 0 1px 11px 0 rgba(0, 0, 0, 0.2);
  margin-top: 2rem;
  padding: 2rem;
  border-radius: 5px;
`

const DivOne = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`

const Range = styled.div`
  width: 100%;
  height: 1rem;
  border-radius: 1rem;
  background: #dadfe4;
`
const Barra = styled.div`
  width: ${(props) => props.value}%;
  height: 100%;
  background: ${azul};
`
const DivTwo = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`
const Sub = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  align-items: end;
`
const Subb = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`

const SubOne = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
`

const One = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
  align-items: center;
  justify-content: end;

  p {
    font-size: 0.75rem;
  }
`
const Span = styled.span`
  width: 25px;
  height: 5px;
  background: ${azul};
`
const DivFooter = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  align-items: center;
`

const Btn = styled.div`
  width: 90%;
  height: 2.5rem;
  background: ${azul};
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  p {
    color: white;
    font-weight: bold;
  }
`

const DivImg = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
`

const Img = styled.div`
  width: 40px;
  height: 40px;
  object-fit: cover;
  border-radius: 50%;
  margin: 0 -3% 0 0;
`

const Article = ({ post, id, usuarios }) => {
  const navigate = useNavigate()
  const location = useLocation()
  const currentURL = location.pathname
  const segments = currentURL.split('/')
  const idUsuario = segments[4]
  console.log(idUsuario)

  const [valor, setValor] = useState(0)
  const [porcentaje, setPorcentaje] = useState(0)

  const handleChange = (valor, bloques) => {
    let porcentajes = (1 * 100) / bloques
    setPorcentaje(porcentaje + porcentajes)
    setValor(valor + porcentajes)

    if (usuarios.find((item) => item.id === idUsuario)) {
      window.location.href = `https://buy.stripe.com/test_28o00Mf2A2dK5eE6oo`
    } else {
      navigate('/login')
    }
  }

  const bloquesRestantes = (bloques, valor) => {
    let calculo = bloques - valor * 10
    const formatter = new Intl.NumberFormat('en-US', {
      style: 'decimal',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0
    })
    return formatter.format(calculo)
  }

  const montoActual = (valor, monto, bloques) => {
    let calculoInicial = bloques - valor * 10 - bloques
    let calculo = calculoInicial * monto * -1
    const formatter = new Intl.NumberFormat('en-US', {
      style: 'decimal',
      minimumFractionDigits: 2,
      maximumFractionDigits: 2
    })
    return formatter.format(calculo)
  }

  const montoFinal = (monto, bloques) => {
    let calculo = bloques * monto
    const formatter = new Intl.NumberFormat('en-US', {
      style: 'decimal',
      minimumFractionDigits: 2,
      maximumFractionDigits: 2
    })
    return formatter.format(calculo)
  }

  return (
    <>
      {post
        .filter((item) => item.id === id)
        .map((item, index) => (
          <Div key={index}>
            <DivOne>
              <p>
                Bloques disponibles:{' '}
                <span style={{ color: azul, fontWeight: 'bold' }}>
                  {bloquesRestantes(item.bloques, valor)}
                </span>
              </p>
              <Range>
                <Barra value={porcentaje}></Barra>
              </Range>
            </DivOne>
            <DivTwo>
              <Subb>
                <p>Monto conseguido:</p>
                <p>Monto a conseguir:</p>
                <SubOne>
                  <p style={{ textAlign: 'center' }}>Tasa anual fija</p>
                  <p
                    style={{
                      textAlign: 'center',
                      color: azul,
                      fontWeight: 'bold',
                      fontSize: '1.5rem'
                    }}
                  >
                    {item.tasa}%
                  </p>
                </SubOne>
              </Subb>
              <Sub>
                <p style={{ fontWeight: 'bold' }}>
                  $ {montoActual(valor, item.monto, item.bloques)}
                </p>
                <p>$ {montoFinal(item.monto, item.bloques)}</p>

                <SubOne>
                  <p>Valuacion de riesgo:</p>
                  <div style={{ display: 'flex', gap: '.5rem' }}>
                    <One>
                      <p>1.6</p>
                      <Span style={{ background: '#13ce66' }}></Span>
                    </One>
                    <One>
                      <p></p>
                      <Span style={{ background: '#dff8ea' }}></Span>
                    </One>
                    <One>
                      <p></p>
                      <Span style={{ background: '#fff2d0' }}></Span>
                    </One>
                    <One>
                      <p></p>
                      <Span style={{ background: '#ffe0e0' }}></Span>
                    </One>
                    <One>
                      <p></p>
                      <Span style={{ background: '#fcd3d3' }}></Span>
                    </One>
                  </div>
                </SubOne>
              </Sub>
            </DivTwo>
            <DivFooter>
              <h3>Quedan 8 dias para invertir</h3>
              <Btn onClick={() => handleChange(valor, item.bloques)}>
                {usuarios.find((item) => item.id === idUsuario) ? (
                  <p>Comprar</p>
                ) : (
                  <p>Registrate para invertir</p>
                )}
              </Btn>
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '.5rem',
                  alignItems: 'center'
                }}
              >
                <p>
                  ¡<span style={{ color: azul, fontWeight: 'bold' }}>301</span>{' '}
                  personas ya han invertido!
                </p>
                <DivImg>
                  <Img
                    style={{
                      backgroundImage: `url(https://img.freepik.com/foto-gratis/chico-guapo-seguro-posando-contra-pared-blanca_176420-32936.jpg)`,
                      backgroundSize: 'cover',
                      backgroundRepeat: 'no-repeat',
                      backgroundPosition: 'center'
                    }}
                  ></Img>
                  <Img
                    style={{
                      backgroundImage: `url(https://img.freepik.com/foto-gratis/retrato-hermoso-mujer-joven-posicion-pared-gris_231208-10760.jpg)`,
                      backgroundSize: 'cover',
                      backgroundRepeat: 'no-repeat',
                      backgroundPosition: 'center'
                    }}
                  ></Img>
                  <Img
                    style={{
                      backgroundImage: `url(https://img.freepik.com/foto-gratis/retrato-mujer-joven-hermosa-gafas-aisladas_273609-48334.jpg)`,
                      backgroundSize: 'cover',
                      backgroundRepeat: 'no-repeat',
                      backgroundPosition: 'center'
                    }}
                  ></Img>
                  <Img
                    style={{
                      backgroundImage: `url(data:image/jpeg;base64,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)`,
                      backgroundSize: 'cover',
                      backgroundRepeat: 'no-repeat',
                      backgroundPosition: 'center'
                    }}
                  ></Img>
                  <Img
                    style={{
                      backgroundImage: `url(data:image/jpeg;base64,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)`,
                      backgroundSize: 'cover',
                      backgroundRepeat: 'no-repeat',
                      backgroundPosition: 'center'
                    }}
                  ></Img>
                  <Img
                    style={{
                      backgroundImage: `url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2zZxIDTvrAlA-KRSI2XbWuhuEbmnPIdEAIm0OeNC2Pd_be2HgM_AppGeMnLXjRjf1JdM&usqp=CAU})`,
                      backgroundSize: 'cover',
                      backgroundRepeat: 'no-repeat',
                      backgroundPosition: 'center'
                    }}
                  ></Img>
                  <Img
                    style={{
                      background: azul,
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'center'
                    }}
                  >
                    <p
                      style={{
                        fontSize: '.75rem',
                        fontWeight: 'bold',
                        color: 'white'
                      }}
                    >
                      + 295
                    </p>
                  </Img>
                </DivImg>
              </div>
            </DivFooter>
          </Div>
        ))}
    </>
  )
}

export default Article
