import React from 'react'
import styled from 'styled-components'
import InformacionContainer from '../Components/InformacionContainer/InformacionContainer'

const Informacion = ({ post, usuarios }) => {
  return (
    <>
      <InformacionContainer usuarios={usuarios} post={post} />
    </>
  )
}

export default Informacion
