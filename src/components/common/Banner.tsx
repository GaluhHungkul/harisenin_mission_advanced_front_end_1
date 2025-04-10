import { faVolumeHigh, faVolumeXmark } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon,    } from "@fortawesome/react-fontawesome"
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { FC, useState } from "react"
import { Link } from "react-router-dom"
import SelectGenre from "../common/SelectGenre"

type Props = {
    img : string;
    selectGenre : boolean;
    synopsis? : string;
    title? : string;
    icon : string | IconProp;
    isSelengkapnya : boolean;
    isPremium : boolean;
}

const Banner : FC<Props> = ({img, selectGenre, synopsis, title, icon, isSelengkapnya, isPremium}) => {

    const [isVolumeOn, setIsVolumeOn] = useState(false)
    

  return (
    <div className="w-full h-56 pt-10 lg:h-[587px] relative p-5 bg-cover bg-center bg-no-repeat" style={{ backgroundImage: `url(${img})` }}>
        {selectGenre && <SelectGenre />}
        <div className="w-full h-[138px] relative  mt-10 text-white flex flex-col  gap-3 lg:w-[1280px] lg:h-[233px] lg:gap-5 lg:px-5  lg:mt-56 lg:mx-auto">
            {title && <p className="font-bold text-[24px] lg:text-5xl 
            ">{title}</p>}
            {synopsis && <p className="text-[12px] 
                line-clamp-2 lg:line-clamp-none font-medium lg:w-[698px] lg:text-lg">{synopsis}</p>}
            <section className="flex items-center justify-between w-full lg:mt-5 ">
                <div className="flex gap-[8px] lg:gap-[10px]">
                    {isSelengkapnya && <Link  to={"/"} className="text-[12px] lg:px-[26px] lg:py-[10px] py-1 px-3 rounded-full  bg-gray-800 hover:bg-gray-900 active:bg-black lg:text-[16px] "><i className="mr-2 fa-solid fa-circle-info "></i>Selengkapnya</Link>}
                    <Link to={`/watch?episode=1`}  className="lg:px-[26px] lg:py-[10px]  rounded-full text-[12px] py-1 px-3 bg-blue-800 hover:bg-blue-900 lg:text-[16px] active:bg-blue-700">Mulai</Link>
                    <span className="text-[12px] border font-bold rounded-full px-2 py-1 lg:p-[10px] lg:text-[16px]">{ typeof icon === 'string' ? icon : <FontAwesomeIcon icon={icon} className="lg:px-[5px] cursor-pointer"/>}</span>
                    {isPremium && 
                    <span className="bg-yellow-600 text-[8px] rounded-full px-2 content-center lg:text-base lg:px-3">
                        Premium
                    </span>}
                </div>
                <FontAwesomeIcon onClick={() => setIsVolumeOn(!isVolumeOn)} icon={isVolumeOn ? faVolumeHigh : faVolumeXmark} className="border p-1.5 rounded-full cursor-pointer"/>
            </section>
        </div>
    </div>
  )
}

export default Banner