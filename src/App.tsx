import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom"
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
import Subscription from "./pages/Subscription"
import PembayaranSubscription from "./pages/PembayaranSubscription"
import NotFound from "./pages/NotFound"
import Testing from "./pages/Testing"
import ScrollToTop from "./components/ScrollToTop"

function App() {

  return (
    <div className='bg-primary  overflow-x-hidden relative '>
      <Router>
          <Navbar />
          <ScrollToTop />
          <Routes>
            <Route path='/' element={<HomePage />}/>
            <Route path='/home' element={<Navigate to={"/"} replace/>}/>
            <Route path='/login' element={<LoginPage />}/>
            <Route path='/register' element={<RegisterPage />}/>
            <Route path='/daftarsaya' element={<DaftarSaya />}/>
            <Route path='/series' element={<Series />}/>
            <Route path='/film' element={<Film />}/>
            <Route path='/watch' element={<Watch />}/>
            <Route path="/myprofile" element={<MyProfile />}/>
            <Route path="/subscription" element={<Subscription />}/>
            <Route path="/subscription/pembayaran" element={<PembayaranSubscription />}/>
            <Route path="/testing" element={<Testing />}/>
            <Route path="/404" element={<NotFound />}/>
            <Route path="*" element={<Navigate to="/404" replace />}/>
          </Routes>
          <Footer />
      </Router>
    </div>
  )
}

export default App
