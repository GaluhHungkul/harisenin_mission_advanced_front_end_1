import { FC } from 'react'
import { Link } from 'react-router-dom'
import Input from './tags/Input'

type Props = {
    login : boolean
}

const AuthCard: FC<Props> = ({login}) => {
  return (
    <div className="text-white gap-5 w-[306px] h-[452.28px] lg:h-[663px] lg:w-[529px] px-8 mx-auto rounded-xl flex flex-col items-center pt-7 backdrop-blur-sm bg-primary/60 lg:p-10 lg:gap-9">
    <header>
      <img src="assets/img/other/Logo.png" alt="" />
      <section className=" flex flex-col items-center">
        <h1 className="font-semibold text-[18px] lg:text-[32px]">{login ? "Login" : "Register"}</h1>
        <p className="text-slate-300 text-[10px] lg:text-[16px]">
          Selamat datang {login && "kembali!"}
        </p>
      </section>
    </header>
    <form className="w-full space-y-5">
      <label htmlFor="username" className="flex flex-col gap-1">
        <span className="text-[10px] lg:text-lg">Username</span>
        <Input id='username' placeholder='Masukkan username ' type='text'/>
        </label>
      <label htmlFor="KataSandi" className="flex flex-col gap-1">
        <span className="text-[10px] lg:text-lg">kata Sandi</span>
        <div className="relative w-full ">
        <Input id='KataSandi' placeholder='Masukkan Kata Sandi' type='password'/>
          <span className="absolute right-3 cursor-pointer top-1">
            <i className="fa-solid fa-eye-slash"></i>
          </span>
        </div>
      </label>
      {!login && <label htmlFor="KonfirmasiKataSandi" className="flex flex-col gap-1">
        <div>
          <span className="text-[10px] lg:text-lg">
            Konfirmasi Kata Sandi
          </span>
          <div className="relative w-full ">
          <Input id='KonfirmasiKataSandi' placeholder='Konfirmasi Kata Sandi' type='password'/>
            <span className="absolute right-3 cursor-pointer top-1">
              <i className="fa-solid fa-eye-slash"></i>
            </span>
          </div>
        </div>
      </label>}
        <section className="flex justify-between items-center w-full  text-[10px] lg:text-[16px]">
          <div>
            <span className="text-gray-300">
              {login ? "Belum" :"Sudah"} punya akun? {""}
              <Link to={login ? "/register" : "/login"} className="text-white">
                {login ? "Buat akun" : "Masuk"}
              </Link>
            </span>
          </div>
          {login && <Link to="/" className="text-gray-300">
            Lupa kata sandi?
          </Link>}
        </section>
    </form>
    <section className="flex items-center flex-col  w-full text-[10px] lg:text-[16px]">
      <button className=" bg-white/30  font-semibold w-full rounded-full py-2 hover:bg-zinc-700 active:bg-zinc-800 cursor-pointer">
        {login ? "Login" :"Daftar"}
      </button>
      <span className="text-gray-400 my-1">Atau</span>
      <button className=" border w-full rounded-full py-2 hover:bg-zinc-700 active:bg-zinc-800 cursor-pointer flex items-center justify-center gap-2">
        <img src="" className="size-4" alt="" />
        {login ? "Login" :"Daftar"} dengan Google
      </button>
    </section>
  </div>
  )
}

export default AuthCard