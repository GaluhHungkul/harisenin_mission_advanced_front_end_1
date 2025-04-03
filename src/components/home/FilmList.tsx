import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FC } from "react"


type Props = { title : string; data : string[] }

const FilmList : FC<Props> = ({title, data}) => {
  return (
    <div className="py-5 lg:py-10 ">
      <h1 className="font-bold text-[20px] text-white mb-5 lg:text-[32px]">{title}</h1>
      <div className="relative flex gap-4 lg:gap-6 w-max ">  
          <button className="absolute hidden px-3 py-2 text-white -translate-y-1/2 bg-gray-600 rounded-full cursor-pointer lg:block -left-5 top-1/2 size-max hover:bg-gray-700 active:bg-gray-800 ">
            <FontAwesomeIcon icon={faArrowLeft} color="#fff"/>
          </button>
          {data.map((card) => (
            <section className={`flex items-end justify-between p-4 bg-cover bg-no-repeat bg-center text-white rounded  ${data.length > 4 ? "w-24 h-36 lg:w-[234px] lg:h-[365px]" : "w-[302px] h-[151px] lg:h-[162px]"}`} style={{ backgroundImage : `url(${card})` }}>
          </section>
          ))}
          <button className="absolute z-10 hidden px-3 py-2 text-white -translate-y-1/2 bg-gray-600 rounded-full cursor-pointer lg:block -right-5 top-1/2 size-max hover:bg-gray-700 active:bg-gray-800 ">
            <FontAwesomeIcon icon={faArrowRight} />
          </button>
      </div>           
    </div>
  )
}

export default FilmList