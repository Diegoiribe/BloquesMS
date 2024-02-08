import logo from './logo.svg'
import './App.css'
import HeaderWithRouting from './Components/HeaderWithRouting/HeaderWithRouting'
import { useState, useEffect } from 'react'
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom'
import ScrollToTop from './ScrollTop.js'
import {
  collection,
  onSnapshot,
  addDoc,
  doc,
  updateDoc,
  getDocs,
  deleteDoc
} from 'firebase/firestore'
import { db } from './config.js'
import Home from './pages/Home'
import Informacion from './pages/Informacion'
import Footer from './Components/Footer/Footer'
import Login from './pages/Login'
import Usuario from './pages/Usuario'
import Admin from './pages/Admin'
import Principal from './pages/Principal'
import Registro from './pages/registro.jsx'

function App() {
  const [post, setPost] = useState([])
  const [loadingFromStoragePost, setLoadingFromStoragePost] = useState(true)

  useEffect(() => {
    const postRef = collection(db, 'post')
    const unPost = onSnapshot(postRef, (querySnapshot) => {
      const data = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data()
      }))
      setPost(data)
      setLoadingFromStoragePost(false)
    })
    return () => unPost()
  }, [])

  // Metodo para guardar datos en localStorage de usuario

  const [usuarios, setUsuarios] = useState([])
  const [loadingFromStorageUsuarios, setLoadingFromStorageUsuarios] =
    useState(true)

  useEffect(() => {
    const usuariosRef = collection(db, 'usuarios')
    const unUsuarios = onSnapshot(usuariosRef, (querySnapshot) => {
      const data = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data()
      }))
      setUsuarios(data)
      setLoadingFromStorageUsuarios(false)
    })
    return () => unUsuarios()
  }, [])

  // Metodo para guardar datos en localStorage de reservas
  const [reservas, setReservas] = useState([])
  const [loadingFromStorage, setLoadingFromStorage] = useState(true)

  useEffect(() => {
    const reservasRef = collection(db, 'reservas')
    const unReservas = onSnapshot(reservasRef, (querySnapshot) => {
      const data = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data()
      }))
      setReservas(data)
      setLoadingFromStorage(false)
    })
    return () => unReservas()
  }, [])

  // almacenar datos de Principal

  const [mainCard, setMainCard] = useState([
    {
      id: 1,
      titulo: 'Largo Plazo',
      subtitulo: 'Sunset Sabalo',
      img: 'https://assets.easybroker.com/property_images/3718246/60808449/EB-NG8246.jpg?version=1683137617',
      activa: false,
      color: '#5f97d0',
      colorP: '#f5f5f7',
      informacion:
        'La arquitectura y el diseño de interiores son más que la suma de sus partes. Son la colaboración de ideas, la convergencia de arte y la funcionalidad vivida. A cada trazo y textura, inyecto la visión colectiva de quienes serán sus habitantes y los artesanos que lo hacen realidad.'
    },
    {
      id: 5,
      titulo: 'Corto Plazo',
      subtitulo: 'Fondo inmobiliario',
      img: 'https://images.unsplash.com/photo-1583248483203-555f3d850303?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Y29uc3RydWNjaSVDMyVCM24lMjBkZSUyMGVkaWZpY2lvc3xlbnwwfHwwfHx8MA%3D%3D',
      activa: false,
      color: '#aea5a0',
      colorP: '#f5f5f7',
      informacion:
        'La arquitectura y el diseño de interiores son más que la suma de sus partes. Son la colaboración de ideas, la convergencia de arte y la funcionalidad vivida. A cada trazo y textura, inyecto la visión colectiva de quienes serán sus habitantes y los artesanos que lo hacen realidad.'
    }
  ])

  const widthMainCard = (id) => {
    const activa = mainCard.map((item) => {
      if (item.id === id) {
        item.activa = !item.activa
      } else {
        item.activa = false
      }
      return item
    })
    setMainCard(activa)
  }

  const [gallery, setGallery] = useState([])
  const [loadingFromStorageGallery, setLoadingFromStorageGallery] =
    useState(true)

  useEffect(() => {
    const galleryRef = collection(db, 'gallery')
    const unGallery = onSnapshot(galleryRef, (querySnapshot) => {
      const data = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data()
      }))
      setGallery(data)
      setLoadingFromStorageGallery(false)
    })
    return () => unGallery()
  }, [])

  return (
    <Router className="App">
      <HeaderWithRouting usuarios={usuarios} />
      <ScrollToTop />
      <Routes>
        <Route
          path="/"
          element={
            <Principal
              mainCard={mainCard}
              widthMainCard={widthMainCard}
              gallery={gallery}
            />
          }
        />
        <Route path="/Home" element={<Home post={post} />} />
        <Route path="/Home/:id/" element={<Home post={post} />} />
        <Route
          path="/Home/informacion/:id/:id"
          element={
            <Informacion post={post} usuarios={usuarios} setPost={setPost} />
          }
        />
        <Route path="/login" element={<Login usuarios={usuarios} />} />
        <Route path="/registro" element={<Registro usuarios={usuarios} />} />
        <Route
          path="/usuario/:id"
          element={
            <Usuario
              reservas={reservas}
              setReservas={setReservas}
              post={post}
              usuarios={usuarios}
            />
          }
        />
        <Route
          path="/admin/68894"
          element={
            <Admin
              reservas={reservas}
              setReservas={setReservas}
              post={post}
              setPost={setPost}
              usuarios={usuarios}
              setUsuarios={setUsuarios}
            />
          }
        />
        {/* <Route
          path="*"
          element={
            <Principal
              mainCard={mainCard}
              widthMainCard={widthMainCard}
              gallery={gallery}
            />
          }
        /> ERROR 404 */}
      </Routes>
      <Footer />
    </Router>
  )
}

export default App
