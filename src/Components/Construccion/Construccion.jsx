import React from 'react'
import Body from './Body/Body'
import styled from 'styled-components'

const Div = styled.div`
  width: 100vw;
  height: calc(100vh - 60px);
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 15rem;
  @media (max-width: 980px) {
    padding: 2.5rem 2.5rem 0 2.5rem;
    height: 150vh;

    justify-content: start;
  }
`

const Construccion = () => {
  return (
    <Div>
      <Body />
    </Div>
  )
}

export default Construccion
