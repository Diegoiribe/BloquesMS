import React from 'react'
import styled from 'styled-components'
import Nav from './Nav/Nav'
import HeadBody from './HeadBody/HeadBody'

const Div = styled.div`
  width: 100%;
  height: 100vh;
`

const PrincipalHead = () => {
  return (
    <Div id="section1">
      <Nav />
      <HeadBody />
    </Div>
  )
}

export default PrincipalHead
