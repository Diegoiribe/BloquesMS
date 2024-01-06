import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { buscar } from '../../api/api'
import { useParams } from 'react-router-dom'
import { blanco, azul, gris } from '../UI/UI'
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline'
import UsuarioCardInversiones from '../UsuarioCardInversiones/UsuarioCardInversiones'

const Div = styled.div`
  width: 85%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`

const DivDashboard = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  padding: 2.5rem;
  background-color: #f4f5f7;
`
const DivPrincipal = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 2rem;
`

const DivPortafolio = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 0.5rem;
`
const DivCard = styled.div`
  width: 35%;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  background: ${blanco};
  padding: 2rem;
  border-radius: 5px;
  box-shadow: 2px 2px 8px 0 rgba(0, 0, 0, 0.2);
  margin: 0.5rem;
`
const DivCardOne = styled.div`
  width: 100%;
  text-align: center;
`

const DivCardTwo = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  border-bottom: 1px solid ${gris};
  padding: 1rem 0;
`

const DivCardThree = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`

const DivTwo = styled.div`
  width: 60%;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 0.5rem;
`

const DivCortoPlazo = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  gap: 1rem;
  background: ${blanco};
  padding: 2rem;
  border-radius: 5px;
  box-shadow: 2px 2px 8px 0 rgba(0, 0, 0, 0.2);
`

const DivLargoPlazo = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  gap: 1rem;
  background: ${blanco};
  padding: 2rem;
  border-radius: 5px;
  box-shadow: 2px 2px 8px 0 rgba(0, 0, 0, 0.2);
`

const UsuarioInversion = () => {
  const [usuario, setUsuario] = useState([])

  const { id } = useParams() // Esto captura el ID de la URL

  useEffect(() => {
    // Define la función callback que actualizará el estado con los datos del usuario
    const onUsuarioEncontrado = (usuarioData) => {
      setUsuario(usuarioData)
    }

    // Asegúrate de que tu función buscar puede manejar la ruta con un ID y una función callback
    buscar(`/usuarios/${id}`, onUsuarioEncontrado)
  }, [id]) // El efecto se ejecutará cada vez que el ID cambie

  console.log(id)
  console.log(usuario)

  return (
    <Div>
      <DivDashboard>
        <DivPrincipal>
          <div>
            <h1>Hola {usuario.nombre}</h1>
            <p>
              Este es un resumen de todas tus inversiones, su valor por proyecto
              y tipo de inversion
            </p>
          </div>
          <DivPortafolio>
            <DivCard>
              <DivCardOne>
                <p>Valor actual de tu portafolio</p>
                <p
                  style={{
                    fontSize: '2.5rem',
                    fontWeight: 'bold',
                    color: azul
                  }}
                >
                  ${usuario.valorActual}*
                </p>
              </DivCardOne>
              <DivCardTwo>
                <div>
                  <p
                    style={{
                      fontSize: '20px',
                      fontWeight: 'bold',
                      color: azul
                    }}
                  >
                    ${usuario.disponible}
                  </p>
                  <div style={{ display: 'flex' }}>
                    <p
                      style={{
                        fontSize: '11px',
                        color: gris,
                        padding: '4px 4px 0 0'
                      }}
                    >
                      Diponible
                    </p>
                    <span>
                      <ErrorOutlineIcon fontSize="xs" />
                    </span>
                  </div>
                </div>
                <div style={{ textAlign: 'end' }}>
                  <p
                    style={{
                      fontSize: '20px',
                      fontWeight: 'bold',
                      color: azul
                    }}
                  >
                    ${usuario.processo}
                  </p>
                  <div style={{ display: 'flex' }}>
                    <p
                      style={{
                        fontSize: '11px',
                        color: gris,
                        padding: '4px 4px 0 0'
                      }}
                    >
                      En transferencia
                    </p>
                    <span>
                      <ErrorOutlineIcon fontSize="xs" />
                    </span>
                  </div>
                </div>
              </DivCardTwo>
              <DivCardThree>
                <div>
                  <p>Total Invertido:</p>
                  <br />
                  <p>+ Retornos generados:</p>
                  <p>+ Plusvalia:</p>
                  <p>- Pagos recibidos:</p>
                  <br />
                  <p style={{ color: azul, fontWeight: 'bold' }}>Valor:</p>
                </div>
                <div style={{ textAlign: 'end' }}>
                  <p>${usuario.total}</p>
                  <br />
                  <p>${usuario.retorno}</p>
                  <p>${usuario.plusvalia}</p>
                  <p>${usuario.pagos}</p>
                  <br />
                  <p style={{ color: azul, fontWeight: 'bold' }}>
                    ${usuario.valor}
                  </p>
                </div>
              </DivCardThree>
            </DivCard>
            <DivTwo>
              <DivCortoPlazo>
                <div>
                  <h2>Corto plazo</h2>
                  <p
                    style={{
                      fontSize: '1.5rem',
                      color: azul,
                      fontWeight: 'bold',
                      padding: '.5rem',
                      textAlign: 'center'
                    }}
                  >
                    ${usuario.valorActualCorto}
                  </p>
                  <p
                    style={{
                      fontSize: '.75rem',
                      textAlign: 'center'
                    }}
                  >
                    Valor actual
                  </p>
                  <br />
                  <p
                    style={{
                      fontSize: '.75rem',
                      fontWeight: 600
                    }}
                  >
                    {usuario.proyectosCorto} proyectos
                  </p>
                </div>
                <div>
                  <p>Total Invertido:</p>
                  <br />
                  <p>+ Retornos generados:</p>
                  <p>+ Plusvalia:</p>
                  <p>- Pagos recibidos:</p>
                  <br />
                  <p style={{ color: azul, fontWeight: 'bold' }}>Valor:</p>
                </div>
                <div style={{ textAlign: 'end' }}>
                  <p>${usuario.totalCorto}</p>
                  <br />
                  <p>${usuario.retornoCorto}</p>
                  <p>${usuario.plusvaliaCorto}</p>
                  <p>${usuario.pagosCorto}</p>
                  <br />
                  <p style={{ color: azul, fontWeight: 'bold' }}>
                    ${usuario.valorCorto}
                  </p>
                </div>
              </DivCortoPlazo>
              <DivLargoPlazo>
                <div>
                  <h2>Largo plazo</h2>
                  <p
                    style={{
                      fontSize: '1.5rem',
                      color: azul,
                      fontWeight: 'bold',
                      padding: '.5rem',
                      textAlign: 'center'
                    }}
                  >
                    ${usuario.valorActualLargo}
                  </p>
                  <p
                    style={{
                      fontSize: '.75rem',
                      textAlign: 'center'
                    }}
                  >
                    Valor actual
                  </p>
                  <br />
                  <p
                    style={{
                      fontSize: '.75rem',
                      fontWeight: 600
                    }}
                  >
                    {usuario.proyectosLargo} proyectos
                  </p>
                </div>
                <div>
                  <p>Total Invertido:</p>
                  <br />
                  <p>+ Retornos generados:</p>
                  <p>+ Plusvalia:</p>
                  <p>- Pagos recibidos:</p>
                  <br />
                  <p style={{ color: azul, fontWeight: 'bold' }}>Valor:</p>
                </div>
                <div style={{ textAlign: 'end' }}>
                  <p>${usuario.totalLargo}</p>
                  <br />
                  <p>${usuario.retornoLargo}</p>
                  <p>${usuario.plusvaliaLargo}</p>
                  <p>${usuario.pagosLargo}</p>
                  <br />
                  <p style={{ color: azul, fontWeight: 'bold' }}>
                    ${usuario.valorLargo}
                  </p>
                </div>
              </DivLargoPlazo>
            </DivTwo>
          </DivPortafolio>
        </DivPrincipal>
        <div>
          <div>
            <h2>Mis inversiones</h2>
            <p>Portafolio actual</p>
          </div>
          <div style={{ padding: '1rem' }}>
            <UsuarioCardInversiones />
          </div>
        </div>
      </DivDashboard>
    </Div>
  )
}

export default UsuarioInversion
