import React from 'react'
import styled from 'styled-components'
import HomeContainer from '../Components/HomeContainer/HomeContainer'

const DivHome = styled.div`
  width: 80vw;
  margin: 20vh 10vw 0;
`

const Home = ({ post }) => {
  return (
    <DivHome>
      <HomeContainer post={post} />
    </DivHome>
  )
}

export default Home
