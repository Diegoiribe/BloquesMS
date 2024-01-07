import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import DeleteForeverIcon from '@mui/icons-material/DeleteForever'

import { azul } from '../UI/UI'

const Div = styled.div`
  width: 30%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 1rem;
  background: ${azul};
  border-radius: 10px;
  align-items: center;

  p {
    color: white;
    font-size: 1.5rem;
    font-weight: 700;
  }
`

const DivIcon = styled.div`
  cursor: pointer;
`

const AdminCardDelete = ({ post, eliminarPost }) => {
  return (
    <>
      {/* Mapeando los datos de la api */}
      {post.map((item, index) => (
        <Div key={index}>
          <p>{item.title}</p>
          <DivIcon onClick={() => eliminarPost(item.id)}>
            <DeleteForeverIcon style={{ color: 'white' }} />
          </DivIcon>
        </Div>
      ))}
    </>
  )
}

export default AdminCardDelete
