import React from 'react'
import styled from 'styled-components'
import { useLocation } from 'react-router-dom'
import Head from './Head/Head'
import Main from './Main/Main'
import Footer from './Footer/Footer'
import Article from './Article/Article'

const Div = styled.div`
  width: 80vw;
  margin: 10vh 10vw 0;
  display: flex;
  flex-direction: row;
  gap: 2rem;
  @media (max-width: 1300px) {
    width: 90vw;
    margin: 10vh 5vw 0;
  }
  @media (max-width: 980px) {
    width: 95vw;
    margin: 15vh 2.5vw 0;
    flex-direction: column;
  }
`
const SubDivInfo = styled.div`
  width: 60%;
  @media (max-width: 980px) {
    width: 100%;
  }
`
const SubDivPago = styled.div`
  width: 40%;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (max-width: 980px) {
    width: 100%;
    margin-bottom: 2rem;
    padding-bottom: 2rem;
  }
`

const InformacionContainer = ({ post, usuarios, setPost }) => {
  const location = useLocation()
  const currentURL = location.pathname
  const segments = currentURL.split('/')
  const id = segments[segments.length - 2] // El último segmento debería ser el ID

  return (
    <Div>
      <SubDivInfo>
        <Head post={post} id={id} />
        <Main post={post} id={id} />
        <Footer post={post} id={id} />
      </SubDivInfo>
      <SubDivPago>
        <Article post={post} id={id} usuarios={usuarios} setPost={setPost} />
      </SubDivPago>
    </Div>
  )
}

export default InformacionContainer
