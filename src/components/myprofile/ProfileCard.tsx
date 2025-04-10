import { faFileArrowUp } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import FloatingLabelInput from "../tag/FloatingLabelInput"
import { useState } from "react"

const ProfileCard = () => {

    const [namaPengguna, setNamaPengguna] = useState<string>("William")
    const [email, setEmail] = useState<string>("william1980@gmail.com")
    const [kataSandi, setKataSandi] = useState<string>("acumalaka123")

  return (
    <div className=" lg:flex-1 ">
        <main className="flex mb-8 lg:items-center">
            <img className="size-20 lg:size-[140px]" src="/assets/img/myprofile/myprofile.png" alt="" />
            <div className="ml-8">
                <button className="mb-2 text-blue-600 border-2 border-blue-600 rounded-full px-3 py-1 hover:bg-blue-600 cursor-pointer hover:text-white">Ubah Foto</button>
                <p className="text-gray-400"><FontAwesomeIcon className="mr-2" icon={faFileArrowUp}/>Maksimal 2MB</p>
            </div>
        </main>
        <main className="space-y-8">
            <FloatingLabelInput showIcon label="Nama Pengguna" value={namaPengguna} onChange={(e) => setNamaPengguna(e.target.value)} type="text" id="namaPengguna"/>
            <FloatingLabelInput showIcon label="Nama Pengguna" value={email} onChange={(e) => setEmail(e.target.value)} type="text" id="email"/>
            <FloatingLabelInput showIcon label="Nama Pengguna" value={kataSandi} onChange={(e) => setKataSandi(e.target.value)} type="password" id="kataSandi"/>
            <button className="bg-blue-900 px-4 py-1 rounded-full cursor-pointer hover:brightness-90 active:brightness-75">Simpan</button>
        </main>
    </div>
  )
}

export default ProfileCard