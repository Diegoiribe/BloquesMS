import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import DeleteForeverIcon from '@mui/icons-material/DeleteForever'
import { azul } from '../UI/UI'
import { deleteDoc, doc } from 'firebase/firestore'
import { db } from './../../config'

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

const AdminCardDelete = ({ post, setPost }) => {
  const deletePost = async (id) => {
    try {
      await deleteDoc(doc(db, 'post', id))
      // Actualizar el estado local para reflejar la eliminación
      const updatedPosts = post.filter((item) => item.id !== id)
      setPost(updatedPosts)
    } catch (error) {
      console.error('Error al eliminar el post: ', error)
    }
  }

  return (
    <>
      {/* Mapeando los datos de la api */}
      {post.map((item, index) => (
        <Div key={index}>
          <p>{item.title}</p>
          <DivIcon onClick={() => deletePost(item.id)}>
            <DeleteForeverIcon style={{ color: 'white' }} />
          </DivIcon>
        </Div>
      ))}
    </>
  )
}

export default AdminCardDelete
