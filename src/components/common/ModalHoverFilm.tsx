import { faCheck,  faChevronDown,  faPlay } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FC } from "react";
import { Link } from "react-router-dom";

type Props = {
  img : string;
  index : number;
  dataLength : number;
  title : string;
}

const ModalHoverFilm : FC<Props> = ({img, index, dataLength, title }) => { 

  return (
    <div style={{ boxShadow : "0 0 10px  2px  #1C1E20" }} className={`absolute z-[-1] overflow-hidden hidden   w-[408px] h-[460px] text-white duration-300 opacity-0  group-hover:z-50 group-hover:-translate-y-10 bottom-0 group-hover:opacity-100  rounded-lg  ${index === dataLength - 1 || index === 0 ? (index === dataLength - 1 ? "right-0" : "left-0") : "right-1/2 translate-x-1/2"} lg:block`}>
      <div style={{ backgroundImage : `url(${img})` }} className="bg-cover bg-center w-full h-1/2">
      </div>
      <div className="bg-primary h-1/2 px-8 py-6">
          <section className="flex justify-between mb-5">
            <div className="flex gap-4">
              <Link to={`/watch?episode=1`} onClick={(e) => e.stopPropagation()} className="bg-white  rounded-full px-4 py-3  border hover:bg-primary hover:text-white hover:border duration-300 text-primary cursor-pointer">
                <FontAwesomeIcon icon={faPlay} size="lg" />
              </Link>
              <span className="bg-primary border  rounded-full px-4 py-3  hover:bg-white hover:text-primary duration-300 cursor-pointer ">
                <FontAwesomeIcon icon={faCheck} size="lg"/>
              </span>
            </div>
             <span  className="bg-primary border  rounded-full px-4 py-3   hover:bg-white hover:text-primary duration-300 cursor-pointer ">
                <FontAwesomeIcon icon={faChevronDown} size="lg"/>
            </span>
          </section>
          <section className="space-y-6">
            {title.includes("Melanjutkan") ?
            <div className="mb-12">
            <p className="mb-2">Episode 1</p>
            <div style={{ backgroundColor : "#3D4142" }} className="w-4/5 h-2  rounded-full group flex">
              <div className={`w-[0%] bg-blue-500 h-full group-hover:w-1/2 duration-300 delay-100 rounded-full`} /> 
              <span className="my-4 ">2j 33m</span>
            </div>
            </div>
            : 
            <div className="flex items-center gap-4">
              <span className="bg-gray-600 text-slate-300 rounded-full px-2  text-lg">13+</span>
              <span className="font-semibold">2j 33m</span>
            </div>
            }
            <div className=" flex justify-around">
              <span>Misteri</span>
              •
              <span>Kriminal</span>
              •
              <span>Fantasi</span>
            </div>
          </section>
      </div>
    </div>
  )
}

export default ModalHoverFilm