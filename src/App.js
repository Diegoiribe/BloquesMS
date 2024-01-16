import logo from './logo.svg'
import './App.css'
import HeaderWithRouting from './Components/HeaderWithRouting/HeaderWithRouting'
import { useState, useEffect } from 'react'
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom'
import Home from './pages/Home'
import Informacion from './pages/Informacion'
import Footer from './Components/Footer/Footer'
import Login from './pages/Login'
import Usuario from './pages/Usuario'
import Admin from './pages/Admin'
import Principal from './pages/Principal'

function App() {
  const [post, setPost] = useState([
    {
      id: '5',
      title: 'Mirador del Valle',
      place: 'Querétaro, Qro.',
      logo: 'https://files.briq.mx/uploads/developer/logo/191/Logo_R_K.jpg',
      img: 'https://arquine.com/wp-content/uploads/2019/12/arquine_iconico_division_del_norte_vivienda_9.jpg',
      tasa: 26.75,
      monto: 35000,
      plazo: 'Entre 6 y 48 meses',
      descripcion:
        'Desarrollo de un complejo residencial con 20 apartamentos de lujo, distribuidos en 10 plantas. Cada departamento contará con amplias terrazas, acabados de primera y vistas panorámicas de la ciudad. El complejo incluirá amenidades como piscina climatizada, salón de eventos y seguridad 24 horas.',
      tipoGarantia: 'hipotecaria',
      pagoInteres: 'Bimestral',
      pagoDescripcion:
        'Los pagos de intereses se realizarán cada dos meses, iniciando el 15/mar/2024. Los inversionistas recibirán retornos consistentes y seguros a lo largo del tiempo de la inversión.',
      analisis:
        'El proyecto está estratégicamente ubicado cerca de centros comerciales y vías de acceso rápido. Se destaca por su diseño moderno y uso de tecnologías sustentables en la construcción. La demanda en la zona por este tipo de vivienda de lujo ha ido en aumento, lo que representa una oportunidad atractiva para los inversionistas.\nLos precios de venta están alineados con el mercado, lo que asegura una buena rentabilidad.',
      garantia:
        'La inversión está respaldada por una garantía hipotecaria sobre el inmueble, ofreciendo seguridad adicional a los inversionistas. La empresa desarrolladora tiene una trayectoria reconocida en el sector inmobiliario, con varios proyectos exitosos en su historial.',
      detalles:
        'Cada apartamento cuenta con tres habitaciones, cocina de diseño abierto, sala de estar con tecnología smart home y dos plazas de garaje. Los acabados son de alta calidad, incluyendo pisos de mármol y encimeras de granito.',
      edad: 'En construcción / Apartamento',
      bloques: 500,
      name: 'Desarrollos Habitacionales Elite',
      tipo: 'Inversión a Mediano Plazo'
    },
    {
      id: '3',
      title: 'Vista Bonita',
      place: 'Mazatlan, Sin.',
      logo: 'https://files.briq.mx/uploads/developer/logo/191/Logo_R_K.jpg',
      img: 'https://img1.wsimg.com/isteam/ip/06c0c705-946a-4a72-851b-8bb928a539d7/IMG_1916%20(1).jpeg/:/',
      tasa: 18.25,
      monto: 42000,
      plazo: 'Entre 5 y 60 meses',
      descripcion:
        'Construcción de condominio vertical de 15 departamentos de entre 40 m2 y 70 m2 distribuidos en 8 niveles. Se ofrecen 3 prototipos de departamentos y el conjunto contará con elevador, ventilación natural, rooftop, gimnasio y caseta de seguridad.',
      tipoGarantia: 'fiduciaria',
      pagoInteres: 'Mensual',
      pagoDescripcion:
        'Recibirás el primer pago el día 31/ene/2024 debido a que los intereses están alineados con las campañas anteriores del proyecto. Posterior a eso recibirás un pago de intereses trimestral.',
      analisis:
        'Puntos atractivos del proyecto\nEl proyecto se encuentra muy cerca de las avenidas principales de Acapulco, estando bien conectado a zonas de trabajo y comercio. A demás se encuentra a menos de 1 km de Playa Papagayo.\nUnidades com precio por m² competitivo\nEl precio por m² de las unidades se encuentran en el rango de la zona, lo cual permitirá al desarrollador comercializar las unidades a un precio atractivo y con una rapidez mayor.\nSocios con amplia experiencia en la zona\nEl proyecto será desarrollado y construido por RD, quien ya ha realizado más de seis proyectos inmobiliarios en Acapulco con resultados exitosos.\nResumen del proyecto\nEl proyecto Condominio Montebello consiste en la construcción y desarrollo de 12 departamentos distribuidos en 4 niveles. Tendrá áreas comunes, cuartos de servicio, sótano para 15 autos y una piscina en el roof top. Será desarrollado por RB Edificación, diseño y construcción, una empresa mexicana enfocada al desarrollo y venta de inmuebles en Acapulco.\nEl desarrollador cuenta con personal especializado en la construcción y comercialización. Asimismo es dueño y administrador de maquinaria pesada y talleres propios, por lo que ellos están llevando a cabo directamente la construcción y supervisión de la obra.\nEstructura legal de la inversión\nEl financiamiento de Condominio Montebello se rige mediante un contrato de crédito respaldado por una garantía fiduciaria. A través de este contrato, participarás en un préstamo con tasa fija, con pagos de intereses trimestrales y un reembolso del capital al finalizar el plazo (sin penalización por prepago a partir del tercer mes).',
      garantia:
        'Puntos atractivos del proyecto\nEl proyecto se encuentra muy cerca de las avenidas principales de Acapulco, estando bien conectado a zonas de trabajo y comercio. A demás se encuentra a menos de 1 km de Playa Papagayo.\nUnidades com precio por m² competitivo\nEl precio por m² de las unidades se encuentran en el rango de la zona, lo cual permitirá al desarrollador comercializar las unidades a un precio atractivo y con una rapidez mayor.\nSocios con amplia experiencia en la zona\nEl proyecto será desarrollado y construido por RD, quien ya ha realizado más de seis proyectos inmobiliarios en Acapulco con resultados exitosos.\nResumen del proyecto\nEl proyecto Condominio Montebello consiste en la construcción y desarrollo de 12 departamentos distribuidos en 4 niveles. Tendrá áreas comunes, cuartos de servicio, sótano para 15 autos y una piscina en el roof top. Será desarrollado por RB Edificación, diseño y construcción, una empresa mexicana enfocada al desarrollo y venta de inmuebles en Acapulco.\nEl desarrollador cuenta con personal especializado en la construcción y comercialización. Asimismo es dueño y administrador de maquinaria pesada y talleres propios, por lo que ellos están llevando a cabo directamente la construcción y supervisión de la obra.\nEstructura legal de la inversión\nEl financiamiento de Condominio Montebello se rige mediante un contrato de crédito respaldado por una garantía fiduciaria. A través de este contrato, participarás en un préstamo con tasa fija, con pagos de intereses trimestrales y un reembolso del capital al finalizar el plazo (sin penalización por prepago a partir del tercer mes).',
      detalles:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla euismod, nisl eget ultricies aliquam, nunc nisl ultricies nunc, vitae aliquam n',
      edad: 'Nuevo / Departamento',
      bloques: 1000,
      name: 'MS constructora',
      tipo: 'Largo plazo'
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
    },
    {
      email: 'usuario@bloquesms.com',
      password: '123456',
      nombre: 'Yair Villa ',
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
      id: '68895'
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

  const [gallery, setGallery] = useState([
    {
      img: 'https://cdn.homedepot.com.mx/especiales/shop_the_look/2022/165/Main165.jpg'
    },
    {
      img: 'https://images.adsttc.com/media/images/6234/fdc1/24a2/8328/3537/5be4/slideshow/corrigida054a8424-2-hdr.jpg?1647640033'
    },
    {
      img: 'https://images.adsttc.com/media/images/5a15/5c46/b22e/38b9/2200/00e2/medium_jpg/StudioSchicketanz_Carmel-6.jpg?1511349309'
    },
    {
      img: 'https://ingenieriacivilyarquitectura.com/wp-content/uploads/2022/05/casas-modernas-de-2-pisos.jpg'
    },
    {
      img: 'https://images.adsttc.com/media/images/5e5d/0a78/6ee6/7e88/ef00/01fc/newsletter/06._Living_room.jpg?1583155782'
    },
    {
      img: 'https://canalhogar.com/wp-content/uploads/2023/01/fachadas_de_casas_modernas_bonitas_con_forma_de_cubo_gris_doble_tono_3.jpg'
    },
    {
      img: 'https://tecnolite.lat/blog/especialistas/wp-content/uploads/2013/10/led-para-fachadas-650x487.jpg'
    },
    {
      img: 'https://images.adsttc.com/media/images/63fe/5f63/6a2f/ba58/6afd/eea1/newsletter/casa-mitica-arquipartners_14.jpg?1677615006'
    },
    {
      img: 'https://images.adsttc.com/media/images/5e7e/5c6e/b357/651b/7e00/06d6/newsletter/FEATURED.jpg?1585339486'
    },
    {
      img: 'https://images.adsttc.com/media/images/5c79/7ad5/284d/d1da/f100/003d/newsletter/-_Featured_Image.jpg?1551465167'
    },
    {
      img: 'https://images.adsttc.com/media/images/5e5d/19ee/6ee6/7e88/ef00/0230/newsletter/26._East_Elevation.jpg?1583159726'
    },
    {
      img: 'https://devitroeuropa.com/wp-content/uploads/2021/08/pintar-fachada-casa.jpg'
    },
    {
      img: 'https://canalhogar.com/wp-content/uploads/2023/10/25-planos-y-Disenos-de-Casas-de-2-Pisos-Modernas-800x600.jpg'
    }
  ])

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
          element={<Informacion post={post} usuarios={usuarios} />}
        />
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
