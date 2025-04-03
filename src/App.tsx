import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import HomePage from './pages/Home'
import LoginPage from './pages/Login'
import RegisterPage from './pages/Register'
import Navbar from './components/Navbar'
import Footer from './components/common/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='bg-primary'>
      <Router>
          <Navbar />
          <Routes>
            <Route path='/' element={<HomePage />}/>
            <Route path='/login' element={<LoginPage />}/>
            <Route path='/register' element={<RegisterPage />}/>
          </Routes>
          <Footer />
      </Router>
    </div>
  )
}

export default App
