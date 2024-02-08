import React from 'react'
import styled from 'styled-components'
import { azul, azulClaro } from '../../UI/UI'

const Div = styled.div`
  background: white;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 2rem;
`
const Logo = styled.div`
  display: flex;
  flex-direction: row;
  padding: 1rem;
  gap: 2rem;
  align-items: center;
`
const DivHImg = styled.img`
  box-shadow: 0 0 4px 2px rgba(0, 0, 0, 0.2);
  object-fit: contain;
  width: 60px;
  height: 60px;
  border-radius: 50%;
`
const DivImg = styled.img`
  border-radius: 5px;
  width: 100%;
  height: 50vh;
  object-fit: cover;
`
const DivPrincipal = styled.div`
  display: flex;
  gap: 1rem;
  flex-direction: column;
`

const DivSecundario = styled.div`
  display: flex;
  gap: 0.5rem;
  flex-direction: column;
`

const Info = styled.div`
  display: flex;
  flex-direction: row;
  gap: 0.5rem;
  align-items: center;
  padding: 0 1rem 2rem;
  @media (max-width: 980px) {
    padding: 0 0.5rem 1rem;
    justify-content: space-between;
    div {
      p {
        font-size: 0.75rem;
      }
    }
  }
`
const P = styled.p`
  font-weight: bold;
  font-size: 2rem;
  @media (max-width: 980px) {
    font-size: 1.75rem;
  }
`

const Head = ({ post, id }) => {
  console.log(id)
  return (
    <>
      {post
        .filter((item) => item.id === id)
        .map((item, index) => (
          <Div key={index}>
            <DivPrincipal>
              <Logo>
                <DivHImg src={item.logo} />
                <div>
                  <P>{item.title}</P>
                </div>
              </Logo>
              <DivImg src={item.img}></DivImg>
            </DivPrincipal>
            <DivSecundario>
              <div>
                <p
                  style={{
                    fontSize: '1.25rem',
                    fontWeight: '100',
                    textTransform: 'uppercase'
                  }}
                >
                  {item.edad}
                </p>
              </div>
              <div>
                <P>{item.title}</P>
              </div>
              <Info>
                <div
                  style={{
                    borderRadius: '20px',
                    padding: '.25rem .75rem',
                    color: 'white',
                    background: azulClaro
                  }}
                >
                  <p>{item.tipo}</p>
                </div>
                <div style={{ color: azul, fontWeight: 'bold' }}>
                  <p>
                    Bloques:{' '}
                    {item.bloques.toLocaleString('en-US', {
                      minimumFractionDigits: 0,
                      maximumFractionDigits: 0
                    })}
                  </p>
                </div>
                <div style={{ color: azul, fontWeight: 'bold' }}>
                  <p>Lugar: {item.place}</p>
                </div>
              </Info>
            </DivSecundario>
          </Div>
        ))}
    </>
  )
}

export default Head
