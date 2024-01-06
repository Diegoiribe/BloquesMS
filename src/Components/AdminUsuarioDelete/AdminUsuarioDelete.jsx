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
  h2 {
    color: white;
  }
  p {
    color: white;
    font-size: 1rem;
    font-weight: 700;
  }
`

const DivIcon = styled.div`
  cursor: pointer;
`

const AdminUsuarioDelete = () => {
  //Guardando los datos de la api en el estado
  const [usuarios, setUsuarios] = useState([])

  //Obteniendo los datos de la api
  useEffect(() => {
    buscar('/usuarios', setUsuarios)
  }, [])

  const handleDelete = async (id) => {
    try {
      // Realiza la solicitud DELETE a la API
      await eliminar(`/usuarios/${id}`)

      // Actualiza el estado para reflejar el cambio
      const updatedUsuarios = usuarios.filter((item) => item.id !== id)
      setUsuarios(updatedUsuarios)
    } catch (error) {
      console.error('Error al eliminar el usuario:', error)
      // Manejo de errores
    }
  }

  return (
    <>
      {/* Mapeando los datos de la api */}
      {usuarios.map((item, index) => (
        <Div key={index}>
          <div>
            <h2>{item.nombre}</h2>
            <p>{item.email}</p>
          </div>

          <DivIcon onClick={() => handleDelete(item.id)}>
            <DeleteForeverIcon style={{ color: 'white' }} />
          </DivIcon>
        </Div>
      ))}
    </>
  )
}

export default AdminUsuarioDelete
