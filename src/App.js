import logo from './logo.svg'
import './App.css'
import HeaderWithRouting from './Components/HeaderWithRouting/HeaderWithRouting'
import { useState, useEffect } from 'react'
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom'
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
      titulo: 'Diseño de Interiores',
      subtitulo: 'Diseños personalizados.',
      img: 'https://pbs.twimg.com/media/GCIpNcQbEAAjQ81?format=jpg&name=900x900',
      activa: false,
      color: '#364020',
      colorP: '#f5f5f7',
      informacion:
        'La arquitectura y el diseño de interiores son más que la suma de sus partes. Son la colaboración de ideas, la convergencia de arte y la funcionalidad vivida. A cada trazo y textura, inyecto la visión colectiva de quienes serán sus habitantes y los artesanos que lo hacen realidad.'
    },
    {
      id: 5,
      titulo: 'Diseño de Interiores',
      subtitulo: 'Diseños personalizados.',
      img: 'https://pbs.twimg.com/media/GCIpNcQbEAAjQ81?format=jpg&name=900x900',
      activa: false,
      color: '#402921',
      colorP: '#f5f5f7',
      informacion:
        'La arquitectura y el diseño de interiores son más que la suma de sus partes. Son la colaboración de ideas, la convergencia de arte y la funcionalidad vivida. A cada trazo y textura, inyecto la visión colectiva de quienes serán sus habitantes y los artesanos que lo hacen realidad.'
    },
    {
      id: 8,
      titulo: 'Diseño de Interiores',
      subtitulo: 'Diseños personalizados.',
      img: 'https://pbs.twimg.com/media/GCIpNcQbEAAjQ81?format=jpg&name=900x900',
      activa: false,
      color: '#202040',
      colorP: '#f5f5f7',
      informacion:
        'La arquitectura y el diseño de interiores son más que la suma de sus partes. Son la colaboración de ideas, la convergencia de arte y la funcionalidad vivida. A cada trazo y textura, inyecto la visión colectiva de quienes serán sus habitantes y los artesanos que lo hacen realidad.'
    },
    {
      id: 2,
      titulo: 'Diseño de Interiores',
      subtitulo: 'Diseños personalizados.',
      img: 'https://pbs.twimg.com/media/GCIpNcQbEAAjQ81?format=jpg&name=900x900',
      activa: false,
      color: '#e8eaeb',
      colorP: '#000000',
      informacion:
        'La arquitectura y el diseño de interiores son más que la suma de sus partes. Son la colaboración de ideas, la convergencia de arte y la funcionalidad vivida. A cada trazo y textura, inyecto la visión colectiva de quienes serán sus habitantes y los artesanos que lo hacen realidad.'
    },
    {
      id: 3,
      titulo: 'Diseño de Interiores',
      subtitulo: 'Diseños personalizados.',
      img: 'https://pbs.twimg.com/media/GCIpNcQbEAAjQ81?format=jpg&name=900x900',
      activa: false,
      color: '#050505',
      colorP: '#f5f5f7',
      informacion:
        'La arquitectura y el diseño de interiores son más que la suma de sus partes. Son la colaboración de ideas, la convergencia de arte y la funcionalidad vivida. A cada trazo y textura, inyecto la visión colectiva de quienes serán sus habitantes y los artesanos que lo hacen realidad.'
    },
    {
      id: 9,
      titulo: 'Diseño de Interiores',
      subtitulo: 'Diseños personalizados.',
      img: 'https://pbs.twimg.com/media/GCIpNcQbEAAjQ81?format=jpg&name=900x900',
      activa: false,
      color: '#e8eaeb',
      colorP: '#000000',
      informacion:
        'La arquitectura y el diseño de interiores son más que la suma de sus partes. Son la colaboración de ideas, la convergencia de arte y la funcionalidad vivida. A cada trazo y textura, inyecto la visión colectiva de quienes serán sus habitantes y los artesanos que lo hacen realidad.'
    },
    {
      id: 7,
      titulo: 'Diseño de Interiores',
      subtitulo: 'Diseños personalizados.',
      img: 'https://pbs.twimg.com/media/GCIpNcQbEAAjQ81?format=jpg&name=900x900',
      activa: false,
      color: '#204035',
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

  return (
    <Router className="App">
      <HeaderWithRouting usuarios={usuarios} />
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
          path="/admin/:id"
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
