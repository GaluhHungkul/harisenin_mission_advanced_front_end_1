import { faVolumeHigh, faVolumeXmark } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon,    } from "@fortawesome/react-fontawesome"
import { useState } from "react"
import { Link } from "react-router-dom"

const Banner = () => {

    const [isVolumeOn, setIsVolumeOn] = useState(false)
    

  return (
        <div className="w-full h-56 pt-10 lg:h-[587px] relative p-5 bg-cover bg-center bg-no-repeat" style={{ backgroundImage: `url('/assets/img/home/banner.png')` }}>
            <div className="w-80 h-[138px]  mt-5 text-white flex flex-col gap-3 lg:w-[1280px] lg:h-[233px] lg:gap-5 lg:px-5  lg:mt-56 ">
                <p className="font-bold text-[24px] lg:text-5xl 
                ">Duty After School</p>
                <p className="text-[12px] 
                 line-clamp-2 lg:line-clamp-none font-medium lg:w-[698px] lg:text-lg">Sebuah benda tak dikenal mengambil alih dunia. Dalam keputusasaan, Departemen Pertahanan mulai merekrut lebih banyak tentara, termasuk siswa sekolah menengah. Mereka pun segera menjadi pejuang garis depan dalam perang.</p>
                <section className="flex items-center justify-between w-full lg:mt-5 ">
                    <div className="flex gap-[8px] lg:gap-[10px]">
                        <Link  to={"/"} className="text-[12px] lg:px-[26px] lg:py-[10px] py-1 px-3 rounded-full  bg-gray-800 hover:bg-gray-900 active:bg-black lg:text-[16px] "><i className="mr-2 fa-solid fa-circle-info "></i>Selengkapnya</Link>
                        <Link to={"/"}  className="lg:px-[26px] lg:py-[10px]  rounded-full text-[12px] py-1 px-3 bg-blue-800 hover:bg-blue-900 lg:text-[16px] active:bg-blue-700">Mulai</Link>
                        <span className="text-[12px] border rounded-full p-1 lg:p-[10px] lg:text-[16px]">18+</span>
                    </div>
                    <FontAwesomeIcon onClick={() => setIsVolumeOn(!isVolumeOn)} icon={isVolumeOn ? faVolumeHigh : faVolumeXmark} className="border p-1.5 rounded-full"/>
                </section>
            </div>
        </div>
  )
}

export default Banner