import React from 'react'
import styled from 'styled-components'
import HomeContainer from '../Components/HomeContainer/HomeContainer'

const DivHome = styled.div`
  width: 80vw;
  margin: 20vh 10vw 20vh;
  @media (max-width: 980px) {
    width: 95vw;
    margin: 15vh 2.5vw 15vh;
  }
`

const Home = ({ post }) => {
  return (
    <DivHome>
      <HomeContainer post={post} />
    </DivHome>
  )
}

export default Home
