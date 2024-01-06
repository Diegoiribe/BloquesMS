import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import DeleteForeverIcon from '@mui/icons-material/DeleteForever'
import { buscar, eliminar } from '../../api/api'
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

const AdminCardDelete = () => {
  //Guardando los datos de la api en el estado
  const [post, setPost] = useState([])

  //Obteniendo los datos de la api
  useEffect(() => {
    buscar('/post', setPost)
  }, [])

  const handleDelete = async (id) => {
    try {
      // Realiza la solicitud DELETE a la API
      await eliminar(`/post/${id}`)

      // Actualiza el estado para reflejar el cambio
      const updatedPosts = post.filter((item) => item.id !== id)
      setPost(updatedPosts)
    } catch (error) {
      console.error('Error al eliminar el post:', error)
      // Manejo de errores
    }
  }

  return (
    <>
      {/* Mapeando los datos de la api */}
      {post.map((item, index) => (
        <Div key={index}>
          <p>{item.title}</p>
          <DivIcon onClick={() => handleDelete(item.id)}>
            <DeleteForeverIcon style={{ color: 'white' }} />
          </DivIcon>
        </Div>
      ))}
    </>
  )
}

export default AdminCardDelete
