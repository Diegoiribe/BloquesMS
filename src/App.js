import logo from './logo.svg'
import './App.css'
import Header from './Components/Header/Header'
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom'
import Home from './pages/Home'
import Footer from './Components/Footer/Footer'
import Login from './pages/Login'
import Usuario from './pages/Usuario'
import Admin from './pages/Admin'

function App() {
  return (
    <Router className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/usuario/:id" element={<Usuario />} />
        <Route path="/admin/:id" element={<Admin />} />
      </Routes>
      <Footer />
    </Router>
  )
}

export default App
