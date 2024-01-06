import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { buscar, enviar } from '../../api/api'
import { useParams } from 'react-router-dom'
import { blanco, azul } from '../UI/UI'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import dayjs from 'dayjs'
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar'
import { v4 as uuid } from 'uuid'
import AdminCalendarioCard from '../AdminCalendarioCard/AdeminCalendarioCard'
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
    justify-content: space-between;
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
  const [time, setTime] = useState(dayjs(''))
  const [fechas, setFechas] = useState([])

  //reserva
  const [nombre, setNombre] = useState('')
  const [personas, setPersonas] = useState('')
  const [dias, setDias] = useState('')
  const [fecha, setFecha] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Formulario enviado', e)
    let datosAEnviar = {
      fecha: time
    }
    console.log(datosAEnviar)
    setFechas([...fechas, datosAEnviar])
  }

  const [data, setData] = useState(null)
  console.log(data)
  const manejarEnvio = async (datosDelFormulario) => {
    // La URL '/enviar-datos' es donde tu servidor espera recibir los datos POST
    // 'datosDelFormulario' es un objeto con los datos que quieres enviar
    await enviar('/reservas', datosDelFormulario, setData)
  }

  const [reservas, setReservas] = useState([])
  reservas.map((reserva) => console.log(reserva.fecha))
  useEffect(() => {
    buscar('/reservas', setReservas)
  }, [])

  // Manejar el envío de la nueva reserva
  const handleSubmitReserva = (e) => {
    e.preventDefault()
    if (
      reservas.find((reserva) => reserva.fecha === time.format('DD/MM/YYYY'))
    ) {
      alert('Fecha no disponible')
      return
    }
    // Si la fecha no está reservada, preparar los datos y enviarlos
    let datos = {
      nombre: nombre,
      personas: personas,
      dias: dias,
      fecha: time.format('DD/MM/YYYY'),
      id: uuid(),
      idUsuario: usuario.id,
      img: cardInfo.img,
      title: cardInfo.title
    }

    manejarEnvio(datos)
  }

  const [usuario, setUsuario] = useState([])
  const { id } = useParams() // Esto captura el ID de la URL
  console.log(id)

  useEffect(() => {
    const onUsuario = (cardData) => {
      if (cardData && typeof cardData === 'object') {
        setUsuario(cardData) // Asegúrate de que cardData es un objeto
      } else {
        // Manejo de error o datos no esperados
        console.error('Datos de usuario no disponibles o en formato incorrecto')
      }
    }

    buscar(`/usuarios/${id}`, onUsuario)
  }, [id])
  console.log(usuario.id)

  const [card, setCard] = useState([])
  // Esto captura el ID de la URL

  useEffect(() => {
    // Define la función callback que actualizará el estado con los datos del usuario
    const onUsuarioEncontrado = (cardData) => {
      // Suponiendo que cardData debería ser un objeto
      if (!Array.isArray(cardData) && cardData != null) {
        setCard([cardData]) // Coloca el objeto dentro de un arreglo
      } else {
        setCard(cardData) // o manejar un error si los datos no son lo que esperabas
      }
    }

    // Asegúrate de que tu función buscar puede manejar la ruta con un ID y una función callback
    buscar(`/post/1`, onUsuarioEncontrado)
  }, []) // El efecto se ejecutará cada vez que el ID cambie

  const [cardInfo, setCardInfo] = useState([])
  // Esto captura el ID de la URL

  useEffect(() => {
    // Define la función callback que actualizará el estado con los datos del usuario
    const UsuarioEncontrado = (cardData) => {
      // Suponiendo que cardData debería ser un objeto
      if (cardData && typeof cardData === 'object') {
        setCardInfo(cardData) // Asegúrate de que cardData es un objeto
      } else {
        // Manejo de error o datos no esperados
        console.error('Datos de usuario no disponibles o en formato incorrecto')
      }
    }

    // Asegúrate de que tu función buscar puede manejar la ruta con un ID y una función callback
    buscar(`/post/1`, UsuarioEncontrado)
  }, []) // El efecto se ejecutará cada vez que el ID cambie

  const handleDelete = () => {
    setFechas([])
  }

  return (
    <Div>
      <DivDashboard>
        <DivReserva>
          <DivCalendario>
            <h1>Calendario</h1>
            <Form onSubmit={handleSubmit}>
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DateCalendar
                  valor={time}
                  onChange={(newValue) => setTime(newValue)}
                  sx={{
                    width: 500, // Ajusta a la anchura deseada
                    height: 500, // Ajusta a la altura deseada
                    '& .MuiPickersDay-day': {
                      width: '2.5rem', // Ajusta el tamaño de los días
                      height: '2.5rem'
                    },
                    // Para escalar todo el componente (incluyendo sus hijos)
                    transform: 'scale(1.3)' // Ajusta el factor de escala según sea necesario
                  }}
                />
              </LocalizationProvider>
              {/* <ul>
                {fechas.map((item, index) => (
                  <li key={index}>
                    Fecha seleccionada: {item.fecha.format('DD/MM/YYYY')}
                  </li>
                ))}
              </ul> */}
              <Button type="submit">Seleccionar</Button>
            </Form>
          </DivCalendario>
          <DivForm>
            <h1>Reservar Fecha</h1>
            <form onSubmit={handleSubmitReserva}>
              <Input
                type="text"
                value={nombre}
                onChange={(e) => setNombre(e.target.value)}
                placeholder="Nombre completo"
                style={{ width: '69%' }}
              />
              <Input
                type="text"
                value={personas}
                onChange={(e) => setPersonas(e.target.value)}
                placeholder="Personas"
                style={{ width: '29%' }}
              />
              <Input
                type="text"
                value={dias}
                onChange={(e) => setDias(e.target.value)}
                placeholder="Días"
                style={{ width: '19%' }}
              />
              {fechas.map((item, index) => (
                <P
                  valor={fecha}
                  setValor={setFecha}
                  style={{ width: '59%' }}
                  key={index}
                >
                  {item.fecha.format('DD/MM/YYYY')}
                </P>
              ))}
              <DivClose
                style={{ width: '9%' }}
                onClick={() => handleDelete(fecha)}
              >
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
          <AdminCalendarioCard id={id} />
        </Reservas>
      </DivDashboard>
    </Div>
  )
}

export default AdminCalendario
