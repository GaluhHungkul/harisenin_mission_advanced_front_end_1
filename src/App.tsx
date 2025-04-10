import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import HomePage from './pages/Home'
import LoginPage from './pages/Login'
import RegisterPage from './pages/Register'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import DaftarSaya from "./pages/DaftarSaya"
import Series from "./pages/Series"
import Film from "./pages/Film"
import Watch from "./pages/Watch"
import MyProfile from "./pages/MyProfile"

function App() {

  return (
    <div className='bg-primary  overflow-x-hidden relative'>
      <Router>
          <Navbar />
          <Routes>
            <Route path='/' element={<HomePage />}/>
            <Route path='/login' element={<LoginPage />}/>
            <Route path='/register' element={<RegisterPage />}/>
            <Route path='/daftarsaya' element={<DaftarSaya />}/>
            <Route path='/series' element={<Series />}/>
            <Route path='/film' element={<Film />}/>
            <Route path='/watch' element={<Watch />}/>
            <Route path="/myprofile" element={<MyProfile />}/>
          </Routes>
          <Footer />
      </Router>
    </div>
  )
}

export default App
