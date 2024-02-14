import React, { useState } from 'react'
import styled from 'styled-components'
import { AdminInput } from '../AdminInput/AdminInput'
import { azul } from '../UI/UI'
import { addDoc, collection } from 'firebase/firestore'
import { db } from '../../config'

const Form = styled.form`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`

const Button = styled.button`
  background: ${azul};
  border-radius: 0.5rem;
  border: none;
  font-size: 1vw;
  padding: 0.5rem 1rem;
  color: white;
  font-weight: 500;
  cursor: pointer;
`

const AdminUsuarioForm = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [nombre, setNombre] = useState('')
  const [valorA, setValorA] = useState('')
  const [dispoible, setDisponible] = useState('')
  const [processo, setProcesso] = useState('')
  const [total, setTotal] = useState('')
  const [retorno, setRetorno] = useState('')
  const [plusvalia, setPlusvalia] = useState('')
  const [pagos, setPagos] = useState('')
  const [valor, setValor] = useState('')
  const [valorAC, setValorAC] = useState('')
  const [proyectoC, setProyectoC] = useState('')
  const [totalC, setTotalC] = useState('')
  const [retornoC, setRetornoC] = useState('')
  const [plusvaliaC, setPlusvaliaC] = useState('')
  const [pagosC, setPagosC] = useState('')
  const [valorC, setValorC] = useState('')
  const [valorAL, setValorAL] = useState('')
  const [proyectoL, setProyectoL] = useState('')
  const [totalL, setTotalL] = useState('')
  const [retornoL, setRetornoL] = useState('')
  const [plusvaliaL, setPlusvaliaL] = useState('')
  const [pagosL, setPagosL] = useState('')
  const [valorL, setValorL] = useState('')

  const [title, setTitle] = useState('')
  const [place, setPlace] = useState('')
  const [tasa, setTasa] = useState('')
  const [inversion, setInversion] = useState('')
  const [recibido, setRecibido] = useState('')
  const [bloques, setBloques] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    let datos = {
      email: email,
      password: password,
      nombre: nombre,
      valorActual: valorA,
      dispoible: dispoible,
      processo: processo,
      total: total,
      retorno: retorno,
      plusvalia: plusvalia,
      pagos: pagos,
      valor: valor,
      valorActualCorto: valorAC,
      proyectosCorto: proyectoC,
      totalCorto: totalC,
      retornoCorto: retornoC,
      plusvaliaCorto: plusvaliaC,
      pagosCorto: pagosC,
      valorCorto: valorC,
      valorActualLargo: valorAL,
      proyectosLargo: proyectoL,
      totalLargo: totalL,
      retornoLargo: retornoL,
      plusvaliaLargo: plusvaliaL,
      pagosLargo: pagosL,
      valorLargo: valorL,
      title: title,
      place: place,
      tasa: tasa,
      inversion: inversion,
      recibido: recibido,
      bloques: bloques
    }
    const registroUsuario = collection(db, 'usuarios')
    // addDoc(registroUsuario, datos)
  }

  return (
    <div>
      <Form onSubmit={handleSubmit}>
        <div style={{ width: '100%', display: 'flex', gap: '1rem' }}>
          <AdminInput
            titulo=""
            type="email"
            placeholder="Correo electronico"
            valor={email}
            setValor={setEmail}
            width="50%"
          />
          <AdminInput
            titulo=""
            placeholder="Contraseña"
            type="password"
            valor={password}
            setValor={setPassword}
            width="50%"
          />
        </div>

        <AdminInput
          titulo=""
          placeholder="Nombre"
          type="text"
          valor={nombre}
          setValor={setNombre}
          width="100%"
        />
        <br />
        <h1>Valor Actual</h1>
        <div
          style={{
            width: '100%',
            display: 'flex',
            gap: '1rem',
            flexWrap: 'wrap',
            justifyContent: 'space-between'
          }}
        >
          <AdminInput
            titulo=""
            placeholder="Valor Actual"
            valor={valorA}
            setValor={setValorA}
            width="30%"
          />
          <AdminInput
            titulo=""
            placeholder="Disponible"
            valor={dispoible}
            setValor={setDisponible}
            width="30%"
          />
          <AdminInput
            titulo=""
            placeholder="Proceso"
            valor={processo}
            setValor={setProcesso}
            width="30%"
          />
          <AdminInput
            titulo=""
            placeholder="Total"
            valor={total}
            setValor={setTotal}
            width="30%"
          />
          <AdminInput
            titulo=""
            placeholder="Retorno"
            valor={retorno}
            setValor={setRetorno}
            width="30%"
          />
          <AdminInput
            titulo=""
            placeholder="Plusvalia"
            valor={plusvalia}
            setValor={setPlusvalia}
            width="30%"
          />
          <AdminInput
            titulo=""
            placeholder="Pagos"
            valor={pagos}
            setValor={setPagos}
            width="49%"
          />
          <AdminInput
            titulo=""
            placeholder="Valor"
            valor={valor}
            setValor={setValor}
            width="49%"
          />
        </div>
        <br />
        <h1>Valor Corto</h1>
        <div
          style={{
            width: '100%',
            display: 'flex',
            gap: '1rem',
            flexWrap: 'wrap',
            justifyContent: 'space-between'
          }}
        >
          <AdminInput
            titulo=""
            placeholder="Valor Actual Corto"
            valor={valorAC}
            setValor={setValorAC}
            width="30%"
          />
          <AdminInput
            titulo=""
            placeholder="Proyecto Corto"
            valor={proyectoC}
            setValor={setProyectoC}
            width="30%"
          />
          <AdminInput
            titulo=""
            placeholder="Total Corto"
            valor={totalC}
            setValor={setTotalC}
            width="30%"
          />
          <AdminInput
            titulo=""
            placeholder="Retorno Corto"
            valor={retornoC}
            setValor={setRetornoC}
            width="30%"
          />
          <AdminInput
            titulo=""
            placeholder="Plusvalia Corto"
            valor={plusvaliaC}
            setValor={setPlusvaliaC}
            width="30%"
          />
          <AdminInput
            titulo=""
            placeholder="Pagos Corto"
            valor={pagosC}
            setValor={setPagosC}
            width="30%"
          />
          <AdminInput
            titulo=""
            placeholder="Valor Corto"
            valor={valorC}
            setValor={setValorC}
            width="100%"
          />
        </div>
        <br />
        <h1>Valor Largo</h1>
        <div
          style={{
            width: '100%',
            display: 'flex',
            gap: '1rem',
            flexWrap: 'wrap',
            justifyContent: 'space-between'
          }}
        >
          <AdminInput
            titulo=""
            placeholder="Valor Actual Largo"
            valor={valorAL}
            setValor={setValorAL}
            width="30%"
          />
          <AdminInput
            titulo=""
            placeholder="Proyecto Largo"
            valor={proyectoL}
            setValor={setProyectoL}
            width="30%"
          />
          <AdminInput
            titulo=""
            placeholder="Total Largo"
            valor={totalL}
            setValor={setTotalL}
            width="30%"
          />
          <AdminInput
            titulo=""
            placeholder="Retorno Largo"
            valor={retornoL}
            setValor={setRetornoL}
            width="30%"
          />
          <AdminInput
            titulo=""
            placeholder="Plusvalia Largo"
            valor={plusvaliaL}
            setValor={setPlusvaliaL}
            width="30%"
          />
          <AdminInput
            titulo=""
            placeholder="Pagos Largo"
            valor={pagosL}
            setValor={setPagosL}
            width="30%"
          />
          <AdminInput
            titulo=""
            placeholder="Valor Largo"
            valor={valorL}
            setValor={setValorL}
            width="100%"
          />
        </div>
        <br />
        <h1>Proyecto</h1>
        <div
          style={{
            width: '100%',
            display: 'flex',
            gap: '1rem',
            flexWrap: 'wrap',
            justifyContent: 'space-between'
          }}
        >
          <AdminInput
            titulo=""
            placeholder="Titulo"
            valor={title}
            setValor={setTitle}
            width="30%"
          />
          <AdminInput
            titulo=""
            placeholder="Lugar"
            valor={place}
            setValor={setPlace}
            width="30%"
          />
          <AdminInput
            titulo=""
            placeholder="Tasa"
            valor={tasa}
            setValor={setTasa}
            width="30%"
          />
          <AdminInput
            titulo=""
            placeholder="Inversion"
            valor={inversion}
            setValor={setInversion}
            width="30%"
          />
          <AdminInput
            titulo=""
            placeholder="Recibido"
            valor={recibido}
            setValor={setRecibido}
            width="30%"
          />
          <AdminInput
            titulo=""
            placeholder="Bloques"
            valor={bloques}
            setValor={setBloques}
            width="30%"
          />
        </div>
        <br />
        <Button type="submit">Enviar</Button>
      </Form>
    </div>
  )
}

export default AdminUsuarioForm
