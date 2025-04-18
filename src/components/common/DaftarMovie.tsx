import { faTrash } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {  useCallback, useEffect, useState } from "react"


const DaftarMovie = ({ length } : { length? : number }) => {

  const [data, setData] = useState<string[]>([])

  const getDataImages = useCallback(() => {
    const images = JSON.parse(localStorage.getItem("img_daftar_saya") ?? "[]") 
    setData(images.slice(0, length ?? images.length))
  },[length])

  useEffect(() => {
    getDataImages()
  },[getDataImages])  

  const handleDeleteDaftarSaya = (value:string) => {
    try {
      const existedData = JSON.parse(localStorage.getItem("img_daftar_saya"))
      const newData = existedData.filter((img) => img !== value)
      localStorage.setItem("img_daftar_saya", JSON.stringify(newData))
      alert("Data berhasil dihapus")
      getDataImages()
    } catch (error) {
      console.log("error saat menghapus data" , error)
      alert("Terdapat kesalahan dalam menghapus data")
    } 
  }

  return (
    <div className="min-h-[70vh]">
       {data.length ? 
        <div className="grid grid-cols-3 justify-items-center  gap-4 lg:gap-y-8 lg:grid-cols-6">
            {data.map((img, index) => (
              <section key={index} className={`relative  text-white rounded  w-24 h-36 lg:w-[200px] lg:h-[300px] overflow-hidden group duration-300`}>
                <button onClick={() => handleDeleteDaftarSaya(img)} className="absolute duration-300 right-0 p-2  z-10   bg-white text-primary top-0 text-sm rounded opacity-0  group-hover:opacity-100 cursor-pointer font-bold "><FontAwesomeIcon icon={faTrash} /></button>
                <img src={img} className="object-center object-cover size-full group-hover:scale-110 duration-300" alt="" />
              </section>
            ))}
        </div>
        :
        <div className="h-full  text-white font-bold text-lg pt-48 text-center lg:pt-40 lg:text-2xl">
          Daftar Film Anda Kosong
        </div>
        }
    </div>
  )
}

export default DaftarMovie