import logo from './logo.svg'
import './App.css'
import Header from './Components/Header/Header'
import { useState, useEffect } from 'react'
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom'
import Home from './pages/Home'
import Footer from './Components/Footer/Footer'
import Login from './pages/Login'
import Usuario from './pages/Usuario'
import Admin from './pages/Admin'

function App() {
  const [reservas, setReservas] = useState([
    {
      nombre: 'Luis A. Meza Salazar',
      personas: '2',
      dias: '1',
      fecha: '25/01/2024',
      id: '2394c639-ae2e-463f-bf5c-4ed16c45d4bd',
      idUsuario: '68894',
      img: 'https://img1.wsimg.com/isteam/ip/06c0c705-946a-4a72-851b-8bb928a539d7/IMG_1916%20(1).jpeg/:/',
      title: 'Vista Bonita'
    }
  ])
  const [loadingFromStorage, setLoadingFromStorage] = useState(true)

  useEffect(() => {
    // Intenta cargar datos de localStorage solo si loadingFromStorage es true
    if (loadingFromStorage) {
      const storedReservas = localStorage.getItem('reservas')
      if (storedReservas) {
        setReservas(JSON.parse(storedReservas))
      }
      setLoadingFromStorage(false) // Desactiva la carga desde localStorage después de cargar
    } else {
      // Guarda datos en localStorage cuando cita cambia
      localStorage.setItem('reservas', JSON.stringify(reservas))
    }
  }, [reservas, loadingFromStorage])

  const registrarMensajeReserva = (datos) => {
    console.log('Cita registrado', datos)
    setReservas([...reservas, datos])
  }

  const eliminarReserva = (id) => {
    console.log('Eliminar', id)
    const nuevaReserva = reservas.filter((item) => item.id !== id)
    setReservas(nuevaReserva)
    // Recuperar los datos almacenados en localStorage
    const storedData = localStorage.getItem('reservas')

    // Verificar si hay datos en localStorage
    if (storedData) {
      // Parsear los datos de JSON a un objeto JavaScript
      const data = JSON.parse(storedData)

      // Eliminar el elemento que deseas (por ejemplo, utilizando filter)
      const updatedData = data.filter((item) => item.id !== id)

      // Guardar los datos actualizados en localStorage
      localStorage.setItem('reservas', JSON.stringify(updatedData))

      // Actualizar el estado si es necesario (opcional)
      setReservas(updatedData)
    }
  }

  return (
    <Router className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/usuario/:id" element={<Usuario />} />
        <Route
          path="/admin/:id"
          element={
            <Admin
              reservas={reservas}
              registrarMensajeReserva={registrarMensajeReserva}
              eliminarReserva={eliminarReserva}
            />
          }
        />
      </Routes>
      <Footer />
    </Router>
  )
}

export default App
