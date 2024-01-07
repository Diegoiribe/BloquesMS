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
  const [post, setPost] = useState([
    {
      id: 1,
      title: 'Vista Bonita',
      place: 'Mazatlan, Sin.',
      logo: 'https://files.briq.mx/uploads/developer/logo/191/Logo_R_K.jpg',
      img: 'https://img1.wsimg.com/isteam/ip/06c0c705-946a-4a72-851b-8bb928a539d7/IMG_1916%20(1).jpeg/:/',
      tasa: '18.25%',
      monto: '$ 42,000',
      plazo: 'Entre 5 y 60 meses'
    }
  ])
  const [loadingFromStoragePost, setLoadingFromStoragePost] = useState(true)

  useEffect(() => {
    // Intenta cargar datos de localStorage solo si loadingFromStorage es true
    if (loadingFromStoragePost) {
      const storedPost = localStorage.getItem('post')
      if (storedPost) {
        setPost(JSON.parse(storedPost))
      }
      setLoadingFromStoragePost(false) // Desactiva la carga desde localStorage después de cargar
    } else {
      // Guarda datos en localStorage cuando cita cambia
      localStorage.setItem('post', JSON.stringify(post))
    }
  }, [post, loadingFromStoragePost])

  const registrarMensajePost = (datos) => {
    console.log('Cita registrado', datos)
    setPost([...post, datos])
  }

  const eliminarPost = (id) => {
    console.log('Eliminar', id)
    const nuevaPost = post.filter((item) => item.id !== id)
    setPost(nuevaPost)
    // Recuperar los datos almacenados en localStorage
    const storedDataPost = localStorage.getItem('post')

    // Verificar si hay datos en localStorage
    if (storedDataPost) {
      // Parsear los datos de JSON a un objeto JavaScript
      const dataPost = JSON.parse(storedDataPost)

      // Eliminar el elemento que deseas (por ejemplo, utilizando filter)
      const updatedDataPost = dataPost.filter((item) => item.id !== id)

      // Guardar los datos actualizados en localStorage
      localStorage.setItem('post', JSON.stringify(updatedDataPost))

      // Actualizar el estado si es necesario (opcional)
      setPost(updatedDataPost)
    }
  }

  // Metodo para guardar datos en localStorage de usuario

  const [usuarios, setUsuarios] = useState([
    {
      email: 'admin@bloquesms.com',
      password: '123456',
      nombre: 'Luis A. Meza Salazar',
      valorActual: '10,000.00',
      disponible: '10,000.00',
      processo: '0.00',
      total: '10,000.00',
      retorno: '0.00',
      plusvalia: '0.00',
      pagos: '0.00',
      valor: '10,000.00',
      valorActualCorto: '10,000.00',
      proyectosCorto: '4',
      totalCorto: '10,000.00',
      retornoCorto: '0.00',
      plusvaliaCorto: '0.00',
      pagosCorto: '0.00',
      valorCorto: '10,000.00',
      valorActualLargo: '10,000.00',
      proyectosLargo: '2',
      totalLargo: '10,000.00',
      retornoLargo: '0.00',
      plusvaliaLargo: '0.00',
      pagosLargo: '0.00',
      valorLargo: '10,000.00',
      title: 'Vista Bonita',
      place: 'Mazatlan, Sin.',
      tasa: '18.25%',
      inversion: '10,000.00',
      recibido: '0.00',
      bloques: '5',
      id: '68894'
    }
  ])
  const [loadingFromStorageUsuarios, setLoadingFromStorageUsuarios] =
    useState(true)

  useEffect(() => {
    // Intenta cargar datos de localStorage solo si loadingFromStorage es true
    if (loadingFromStorageUsuarios) {
      const storedUsuarios = localStorage.getItem('usuarios')
      if (storedUsuarios) {
        setUsuarios(JSON.parse(storedUsuarios))
      }
      setLoadingFromStorageUsuarios(false) // Desactiva la carga desde localStorage después de cargar
    } else {
      // Guarda datos en localStorage cuando cita cambia
      localStorage.setItem('usuarios', JSON.stringify(usuarios))
    }
  }, [usuarios, loadingFromStorageUsuarios])

  const registrarMensajeUsuarios = (datos) => {
    console.log('Cita registrado', datos)
    setUsuarios([...usuarios, datos])
  }

  const eliminarUsuarios = (id) => {
    console.log('Eliminar', id)
    const nuevaUsuarios = usuarios.filter((item) => item.id !== id)
    setUsuarios(nuevaUsuarios)
    // Recuperar los datos almacenados en localStorage
    const storedDataUsuarios = localStorage.getItem('usuarios')

    // Verificar si hay datos en localStorage
    if (storedDataUsuarios) {
      // Parsear los datos de JSON a un objeto JavaScript
      const dataUsuarios = JSON.parse(storedDataUsuarios)

      // Eliminar el elemento que deseas (por ejemplo, utilizando filter)
      const updatedDataUsuarios = dataUsuarios.filter((item) => item.id !== id)

      // Guardar los datos actualizados en localStorage
      localStorage.setItem('usuarios', JSON.stringify(updatedDataUsuarios))

      // Actualizar el estado si es necesario (opcional)
      setUsuarios(updatedDataUsuarios)
    }
  }

  // Metodo para guardar datos en localStorage de reservas
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
        <Route path="/" element={<Home post={post} />} />
        <Route path="/login" element={<Login usuarios={usuarios} />} />
        <Route
          path="/usuario/:id"
          element={
            <Usuario
              reservas={reservas}
              registrarMensajeReserva={registrarMensajeReserva}
              eliminarReserva={eliminarReserva}
              post={post}
              usuarios={usuarios}
            />
          }
        />
        <Route
          path="/admin/:id"
          element={
            <Admin
              reservas={reservas}
              registrarMensajeReserva={registrarMensajeReserva}
              eliminarReserva={eliminarReserva}
              post={post}
              registrarMensajePost={registrarMensajePost}
              eliminarPost={eliminarPost}
              usuarios={usuarios}
              registrarMensajeUsuarios={registrarMensajeUsuarios}
              eliminarUsuarios={eliminarUsuarios}
            />
          }
        />
      </Routes>
      <Footer />
    </Router>
  )
}

export default App
