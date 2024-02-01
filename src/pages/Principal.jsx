import React from 'react'
import styled from 'styled-components'
import PrincipalHead from '../Components/PrincipalHead/PrincipalHead'
import PrincipalBody from '../Components/PrincipalBody/PrincipalBody'
import PrincipalMain from '../Components/PrincipalMain/PrincipalMain'
import PrincipalGallery from '../Components/PrincipalGallery/PrincipalGallery'
import PrincipalContact from '../Components/PrincipalContact/PrincipalContact'
import PrincipalInvertir from '../Components/PrincipalInvertir/PrincipalInvertir'

const Principal = ({ mainCard, widthMainCard, gallery }) => {
  return (
    <>
      <PrincipalHead />
      <PrincipalInvertir />
      <PrincipalMain mainCard={mainCard} widthMainCard={widthMainCard} />
      <PrincipalBody />
      <PrincipalGallery gallery={gallery} />
      <PrincipalContact />
    </>
  )
}

export default Principal
