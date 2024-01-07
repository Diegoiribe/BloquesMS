import React from 'react'
import styled from 'styled-components'
import AdminCardForm from '../AdminCardForm/AdminCardForm'
import AdminCardDelete from '../AdminCardDelete/AdminCardDelete'

const Div = styled.div`
  width: 85%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 2rem;
  padding: 2.5rem;
  background: #f4f5f7;
`
const DivHome = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  gap: 2rem;
  flex-wrap: wrap;
  align-items: center;
`
const AdminCard = ({ post, registrarMensajePost, eliminarPost }) => {
  return (
    <>
      <Div>
        <h1>Crear un nuevo proyecto</h1>
        <AdminCardForm registrarMensajePost={registrarMensajePost} />
        <DivHome>
          <AdminCardDelete post={post} eliminarPost={eliminarPost} />
        </DivHome>
      </Div>
    </>
  )
}

export default AdminCard
