import React, { useState, useEffect, useCallback } from 'react'
import styled from 'styled-components'
import { azul, blanco } from '../UI/UI'
import dayjs from 'dayjs'
import { v4 as uuid } from 'uuid'
import { useParams } from 'react-router-dom'
import { enviar, buscar } from '../../api/api'
// Asumiendo que los componentes estilizados están importados correctamente
import { LocalizationProvider, DateCalendar } from '@mui/x-date-pickers'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import AdminCalendarioCard from '../AdminCalendarioCard/AdminCalendarioCard'
import CloseIcon from '@mui/icons-material/Close'

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

const DivReserva = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  gap: 2rem;
`
const Form = styled.form`
  height: 60vh;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
`

const DivCalendario = styled.div`
  width: 40%;
  display: flex;
  flex-direction: column;
  gap: 5rem;
`
const Button = styled.button`
  width: 30%;
  height: 3rem;
  background: ${azul};
  color: ${blanco};
  border: none;
  border-radius: 5px;
  font-size: 1.2rem;
  font-weight: bold;
  cursor: pointer;
`

const DivForm = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2rem;

  form {
    width: 75%;
    display: flex;
    padding: 1rem;
    flex-direction: row;
    gap: 0.5rem;
    justify-content: space-around;
    align-items: center;
    flex-wrap: wrap;
  }
`
const P = styled.p`
  font-size: 1.2rem;
  padding: 1rem;
  font-weight: bold;
  background: ${blanco};
  border-radius: 10px;
  box-shadow: 0 1px 11px 0 rgba(0, 0, 0, 0.2);
  text-align: center;
`

const Input = styled.input`
  font-size: 1.2rem;
  padding: 1rem;
  font-weight: bold;
  background: ${blanco};
  border-radius: 10px;
  box-shadow: 0 1px 11px 0 rgba(0, 0, 0, 0.2);
  text-align: center;
  border: none;
  &:focus {
    outline: none;
  }
`
const DivImg = styled.img`
  width: 100%;
  background: ${blanco};
  border-radius: 10px;
  box-shadow: 0 1px 11px 0 rgba(0, 0, 0, 0.2);
  object-fit: fill;
`

const Reservas = styled.div`
  width: 100%;
  min-height: 70vh;
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
`
const DivClose = styled.div`
  padding: 0.75rem;
  font-weight: bold;
  background: ${azul};
  border-radius: 10px;
  box-shadow: 0 1px 11px 0 rgba(0, 0, 0, 0.2);
  text-align: center;
  cursor: pointer;
`
const AdminCalendario = () => {
  const [reserva, setReserva] = useState({
    time: dayjs(''),
    fechas: [],
    nombre: '',
    personas: '',
    dias: ''
  })
  const [data, setData] = useState(null)
  const [reservas, setReservas] = useState([])
  const [usuario, setUsuario] = useState({})
  const [card, setCard] = useState([])
  const [cardInfo, setCardInfo] = useState({})
  const { id } = useParams()

  useEffect(() => {
    const cargarDatos = async () => {
      try {
        const datosUsuario = await buscar(`/usuarios/${id}`)
        if (datosUsuario && typeof datosUsuario === 'object') {
          setUsuario(datosUsuario)
        } else {
          console.error(
            'Datos de usuario no disponibles o en formato incorrecto'
          )
        }

        const datosReserva = await buscar('/reservas')
        setReservas(datosReserva)

        const datosCard = await buscar(`/post/1`)
        setCard(Array.isArray(datosCard) ? datosCard : [datosCard])
      } catch (error) {
        console.error('Error al cargar datos:', error)
      }
    }

    cargarDatos()
  }, [id])

  const manejarEnvio = useCallback(async (datosDelFormulario) => {
    await enviar('/reservas', datosDelFormulario, setData)
  }, [])

  const handleSubmit = useCallback(
    (e) => {
      e.preventDefault()
      const datosAEnviar = { fecha: reserva.time }
      setReserva((prev) => ({
        ...prev,
        fechas: [...prev.fechas, datosAEnviar]
      }))
    },
    [reserva.time]
  )

  const handleSubmitReserva = useCallback(
    (e) => {
      e.preventDefault()
      if (reservas.find((r) => r.fecha === reserva.time.format('DD/MM/YYYY'))) {
        alert('Fecha no disponible')
        return
      }
      const datos = {
        ...reserva,
        fecha: reserva.time.format('DD/MM/YYYY'),
        id: uuid(),
        idUsuario: usuario.id,
        img: cardInfo.img,
        title: cardInfo.title
      }
      manejarEnvio(datos)
    },
    [reserva, reservas, usuario.id, cardInfo, manejarEnvio]
  )

  const handleDelete = useCallback(() => {
    setReserva((prev) => ({ ...prev, fechas: [] }))
  }, [])

  const handleChange = useCallback((e) => {
    const { name, value } = e.target
    setReserva((prev) => ({ ...prev, [name]: value }))
  }, [])

  return (
    <Div>
      <DivDashboard>
        <DivReserva>
          <DivCalendario>
            <h1>Calendario</h1>
            <Form onSubmit={handleSubmit}>
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DateCalendar
                  value={reserva.time}
                  onChange={(newValue) =>
                    setReserva((prev) => ({ ...prev, time: newValue }))
                  }
                  sx={{
                    width: 500,
                    height: 500,
                    '& .MuiPickersDay-day': {
                      width: '2.5rem',
                      height: '2.5rem'
                    },
                    transform: 'scale(1.3)'
                  }}
                />
              </LocalizationProvider>
              <Button type="submit">Seleccionar</Button>
            </Form>
          </DivCalendario>
          <DivForm>
            <h1>Reservar Fecha</h1>
            <form onSubmit={handleSubmitReserva}>
              <Input
                type="text"
                name="nombre"
                value={reserva.nombre}
                onChange={handleChange}
                placeholder="Nombre completo"
                style={{ width: '59%' }}
              />
              <Input
                type="text"
                name="personas"
                value={reserva.personas}
                onChange={handleChange}
                placeholder="Personas"
                style={{ width: '29%' }}
              />
              <Input
                type="text"
                name="dias"
                value={reserva.dias}
                onChange={handleChange}
                placeholder="Días"
                style={{ width: '19%' }}
              />
              {reserva.fechas.map((item, index) => (
                <P key={index} style={{ width: '69%' }}>
                  Fecha: {item.fecha.format('DD/MM/YYYY')}
                </P>
              ))}
              <DivClose style={{ width: '9%' }} onClick={handleDelete}>
                <CloseIcon style={{ color: 'white' }} />
              </DivClose>
              {card.map((item, index) => (
                <DivImg key={index} src={item.img} style={{ width: '100%' }} />
              ))}
              {card.map((item, index) => (
                <P key={index} style={{ width: '100%' }}>
                  {item.title}
                </P>
              ))}
              <Button style={{ width: '100%' }} type="submit">
                Reservar
              </Button>
            </form>
          </DivForm>
        </DivReserva>
        <div>
          <h1>Reserva</h1>
        </div>
        <Reservas>
          {reservas.map((reserva, index) => (
            <AdminCalendarioCard key={index} id={reserva.id} />
          ))}
        </Reservas>
      </DivDashboard>
    </Div>
  )
}

export default AdminCalendario
