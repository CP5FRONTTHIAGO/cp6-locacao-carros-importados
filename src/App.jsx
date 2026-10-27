import {BrowserRouter as Router,Routes,Route}from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import Contato from './pages/Contato'
import Carros from './pages/Carros'
import Login from './pages/Login'
import Error from './pages/Error'


const App = () => {
  return (
    <Router>
      <div className="min-h-screen flex flex-col justify-between bg-[#141414] pt-4">
        <Navbar/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/carros" element={<Carros/>}/>
          <Route path="/contato" element={<Contato/>}/>
          <Route path="/login" element={<Login />}/>
          <Route path="*" element={<Error />} />
        </Routes>
      </div>
      <Footer/>
    </Router>
  )
}

export default App
