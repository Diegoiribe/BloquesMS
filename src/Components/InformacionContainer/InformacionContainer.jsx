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
`
const SubDivInfo = styled.div`
  width: 60%;
`
const SubDivPago = styled.div`
  width: 40%;
  display: flex;
  flex-direction: column;
  align-items: center;
`

const InformacionContainer = ({ post, usuarios }) => {
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
        <Article post={post} id={id} usuarios={usuarios} />
      </SubDivPago>
    </Div>
  )
}

export default InformacionContainer
