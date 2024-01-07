import React from 'react'
import styled from 'styled-components'
import AdminUsuarioForm from '../AdminUsuarioForm/AdminUsuarioForm'
import AdminUsuarioDelete from '../AdminUsuarioDelete/AdminUsuarioDelete'

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
  justify-content: center;
  gap: 2rem;
  flex-wrap: wrap;
  align-items: center;
`
const AdminUsuario = ({
  usuarios,
  registrarMensajeUsuarios,
  eliminarUsuarios
}) => {
  return (
    <>
      <Div>
        <h1>Crear un nuevo Usuario</h1>
        <AdminUsuarioForm registrarMensajeUsuarios={registrarMensajeUsuarios} />
        <DivHome>
          <AdminUsuarioDelete
            usuarios={usuarios}
            eliminarUsuarios={eliminarUsuarios}
          />
        </DivHome>
      </Div>
    </>
  )
}

export default AdminUsuario
