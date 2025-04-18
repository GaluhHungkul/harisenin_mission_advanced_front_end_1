import { faPlus, faVolumeHigh, faVolumeXmark } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon,    } from "@fortawesome/react-fontawesome"
import { FC, useState } from "react"
import { Link } from "react-router-dom"

type Props = {
    img_banner : string;
    selectGenre : boolean;
    title? : string;
    isPremium : boolean;
    img_poster : string
}

const BannerPopUpDetail : FC<Props> = ({img_banner,  title, isPremium, img_poster}) => {

    const [isVolumeOn, setIsVolumeOn] = useState(false)    


    const handleAddLocalStorage = (value:string) => {
        try {
            const existingData = JSON.parse(localStorage.getItem("img_daftar_saya")) ?? []
            if(existingData.includes(value)) return alert("Data film sudah ada")
            existingData.push(value)
            localStorage.setItem("img_daftar_saya", JSON.stringify(existingData))
            alert("Film telah ditambahkan ke daftar anda ")
        } catch (error) {
            console.log(error)
            alert("Terjadi kesalahan saat menambahkan film ke daftar anda ")
        }
    }


  return (
    <div className="w-full h-[190px] pt-10 lg:h-[500px] relative p-4 lg:px-16 bg-cover bg-center bg-no-repeat   " style={{ backgroundImage: `url(${img_banner})` }}>
        <div className="w-full  h-max top-10 relative  mt-10 text-white flex flex-col lg:top-60  gap-3 lg:w-full lg:h-max  lg:gap-3  lg:mx-auto">
            {title && <p className="font-bold text-[14px] lg:text-[32px] 
            ">{title}</p>}
            <section className="flex items-center text-sm lg:text-base justify-between w-full lg:mt-5 ">
                <div className="flex gap-[8px] lg:gap-[10px]">
                    <Link to={`/watch?episode=1`}  className="lg:px-[26px] lg:py-[10px]  rounded-full text-[12px] py-1 px-3 bg-blue-800 hover:bg-blue-900 lg:text-[16px] active:bg-blue-700">Mulai</Link>
                    <span onClick={() => handleAddLocalStorage(img_poster)} className="text-[12px] font-bold rounded-full bg-primary px-2 py-1 lg:py-[10px] lg:px-4 lg:text-[16px] hover:bg-slate-800 active:bg-slate-900 cursor-pointer"><FontAwesomeIcon icon={faPlus}/></span>
                    {isPremium && 
                    <span className="bg-yellow-600 text-[8px] rounded-full px-2 content-center lg:text-base lg:px-3">
                        Premium
                    </span>}
                </div>
                <FontAwesomeIcon onClick={() => setIsVolumeOn(!isVolumeOn)} icon={isVolumeOn ? faVolumeHigh : faVolumeXmark} className="border p-1.5 rounded-full cursor-pointer "/>
            </section>
        </div>
    </div>
  )
}

export default BannerPopUpDetail