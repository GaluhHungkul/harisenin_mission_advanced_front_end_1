import { faFileArrowUp } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import FloatingLabelInput from "../tag/FloatingLabelInput"
import { useEffect, useState } from "react"
import { changeProfile } from "@/services/api/tmdb"

type User = {
  username : string;
  email : string;
  kataSandi : string;
}

const ProfileCard = () => {

    const id = localStorage.getItem("userId") ?? "1"

    const [user, setUser] = useState<User>({
      username : "",
      kataSandi : "",
      email : ""
    })

    useEffect(() => {
      const getUser = async () => {
        const res = await fetch(`${import.meta.env.VITE_BASE_URL_MOCKAPI_USERS}/${id}`)
        const data = await res.json()
        setUser({
          username : data.username,
          email : data.email,
          kataSandi : data.kataSandi
        })
      }
      getUser() 
    },[id])
    
    const handleChange = (e:React.ChangeEvent<HTMLInputElement>) => {
      const { name, value } = e.target
      setUser((prev) => ({
        ...prev,
        [name] : value
      }))
    }



  return (
    <div className=" lg:flex-1 ">
        <main className="flex mb-8 lg:items-center">
            <img className="size-20 lg:size-[140px]" src="/assets/img/myprofile/myprofile.png" alt="" />
            <div className="ml-8">
                <button className="mb-2 text-blue-600 border-2 border-blue-600 rounded-full px-3 py-1 hover:bg-blue-600 cursor-pointer hover:text-white">Ubah Foto</button>
                <p className="text-gray-400"><FontAwesomeIcon className="mr-2" icon={faFileArrowUp}/>Maksimal 2MB</p>
            </div>
        </main>
        <form className="space-y-8">
            <FloatingLabelInput name="username" showIcon label="Nama Pengguna" value={user.username} onChange={handleChange} type="text" id="namaPengguna"/>
            <FloatingLabelInput name="email" showIcon label="Email" value={user.email} onChange={handleChange} type="text" id="email"/>
            <FloatingLabelInput name="kataSandi" showIcon label="Kata Sandi" value={user.kataSandi} onChange={handleChange} type="password" id="kataSandi"/>
            <button onClick={() => changeProfile({username : user.username, email : user.email, kataSandi : user.kataSandi, id})} className="bg-blue-900 px-4 py-1 rounded-full cursor-pointer hover:brightness-90 active:brightness-75">Simpan</button>
        </form>
    </div>
  )
}

export default ProfileCard