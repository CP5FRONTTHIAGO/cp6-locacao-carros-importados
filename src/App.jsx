import { useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import Carros from './pages/Carros'
import Contato from './pages/Contato'
import Login from './pages/Login'
import Error from './pages/Error'

const RolarParaTopo = () => {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' })
  }, [pathname])

  return null
}

const App = () => {
  return (
    <Router>
      <RolarParaTopo/>
      <div className="min-h-screen flex flex-col bg-[#0b0b0f]">
        <Navbar/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/carros" element={<Carros/>}/>
          <Route path="/contato" element={<Contato/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="*" element={<Error/>}/>
        </Routes>
        <Footer/>
      </div>
    </Router>
  )
}

export default App
