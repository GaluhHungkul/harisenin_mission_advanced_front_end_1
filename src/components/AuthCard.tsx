import { FC,  useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import google from "/assets/img/others/google.png"
import axios from "axios"

type Props = {
    isLogin : boolean
}

const AuthCard: FC<Props> = ({isLogin}) => {

  const [username, setUsername] = useState<string>("")  
  const [kataSandi, setKataSandi] = useState<string>("")
  const [confirmSandi, setConfirmSandi] = useState<string>("")

  const navigate = useNavigate()

  const handleSubmit = async () => {
    if(kataSandi !== confirmSandi) return
    const res = await axios.post(import.meta.env.VITE_BASE_URL_MOCKAPI_USERS, {
      username, kataSandi,
      isSubscribe : false,
      daftarFilmSaya : []
    })
    
  }

  return (
    <div className="text-white gap-5 w-[306px] h-[452.28px] lg:h-[663px] lg:w-[529px] px-8 mx-auto rounded-xl flex flex-col items-center pt-7 backdrop-blur-sm bg-primary/60 lg:p-10 lg:gap-9">
    <header>
      <img src="assets/img/other/Logo.png" alt="" />
      <section className=" flex flex-col items-center">
        <h1 className="font-semibold text-[18px] lg:text-[32px]">{isLogin ? "Login" : "Register"}</h1>
        <p className="text-slate-300 text-[10px] lg:text-[16px]">
          Selamat datang {isLogin && "kembali"}!
        </p>
      </section>
    </header>
    <form onSubmit={handleSubmit}  className="w-full space-y-5">
      <label htmlFor="username" className="flex flex-col gap-1">
        <span className="text-[10px] lg:text-lg">Username</span>
        <input onChange={(e) => setUsername(e.target.value)} className="border w-full text-[10px] lg:text-lg border-slate-300 rounded-full px-4 py-1" placeholder='Masukkan username' />
        </label>
      <label htmlFor="KataSandi" className="flex flex-col gap-1">
        <span className="text-[10px] lg:text-lg">kata Sandi</span>
        <div className="relative w-full ">
          <input onChange={(e) => setKataSandi(e.target.value)} className="border w-full text-[10px] lg:text-lg border-slate-300 rounded-full px-4 py-1" placeholder='Masukkan kata sandi' />
          <span className="absolute right-3 cursor-pointer top-1">
            <i className="fa-solid fa-eye-slash"></i>
          </span>
        </div>
      </label>
      {!isLogin && <label htmlFor="KonfirmasiKataSandi" className="flex flex-col gap-1">
        <div>
          <span className="text-[10px] lg:text-lg">
            Konfirmasi Kata Sandi
          </span>
          <div className="relative w-full ">
            <input onChange={(e) => setConfirmSandi(e.target.value)} className="border w-full text-[10px] lg:text-lg border-slate-300 rounded-full px-4 py-1" placeholder='Masukkan kata sandi' />
            <span className="absolute right-3 cursor-pointer top-1">
              <i className="fa-solid fa-eye-slash"></i>
            </span>
          </div>
        </div>
      </label>}
        <section className="flex justify-between items-center w-full  text-[10px] lg:text-[16px]">
          <div>
            <span className="text-gray-300">
              {isLogin ? "Belum" :"Sudah"} punya akun? {""}
              <Link to={isLogin ? "/register" : "/login"} className="text-white">
                {isLogin ? "Buat akun" : "Masuk"}
              </Link>
            </span>
          </div>
          {isLogin && <Link to="/" className="text-gray-300">
            Lupa kata sandi?
          </Link>}
        </section>
    </form>
    <section className="flex items-center flex-col  w-full text-[10px] lg:text-[16px]">
      <button onClick={handleSubmit} className=" bg-white/30  font-semibold w-full rounded-full py-2 hover:bg-zinc-700 active:bg-zinc-800 cursor-pointer disabled:bg-zinc-800">
        {isLogin ? "Login" :"Daftar"}
      </button>
      <span className="text-gray-400 my-1">Atau</span>
      <button className=" border w-full rounded-full py-2 hover:bg-zinc-700 active:bg-zinc-800 cursor-pointer flex items-center justify-center gap-2">
        <img src={google} className="size-4" alt="" />
        {isLogin ? "Login" :"Daftar"} dengan Google
      </button>
    </section>
  </div>
  )
}

export default AuthCard