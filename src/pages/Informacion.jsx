import React from 'react'
import styled from 'styled-components'
import InformacionContainer from '../Components/InformacionContainer/InformacionContainer'

const Informacion = ({ post, usuarios, setPost }) => {
  return (
    <>
      <InformacionContainer usuarios={usuarios} post={post} setPost={setPost} />
    </>
  )
}

export default Informacion
