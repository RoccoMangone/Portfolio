import { Routes, Route } from 'react-router-dom'
import { useState } from 'react'
// import './App.css'
import Test from './components/test.jsx'
import Navbar from './components/Navbar.jsx'
import Footer from './components/Footer.jsx'
import Card from './components/card.jsx'
import Projects from './pages/Projects.jsx'
import Home from './pages/Home.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='app'>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/projects' element={<Projects/>}/>
      </Routes>
      <Footer/>
    </div>
  )
}

export default App
