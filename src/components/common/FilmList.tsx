import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FC } from "react";
import ModalHoverFilm from "./ModalHoverFilm";
import {
  Dialog,
  DialogContent,
  DialogTrigger,
  DialogTitle,
} from "../ui/dialog";
import PopupDetail from "./PopupDetail";
import { useLocation } from "react-router-dom";
import Card from "./Card";

type Props = {
  title: string;
  data: {
    card: string[];
    banner: string[];
  };
};

const FilmList: FC<Props> = ({ title, data }) => {
  const location = useLocation();

  const disabelModalDetail = location.pathname === "/";

  return (
    <div className="py-5 lg:py-10 ">
      <h1 className="font-bold text-[20px] text-white mb-5 lg:text-[32px]">
        {title}
      </h1>
      <div className="relative flex gap-4 lg:gap-6 w-max ">
        <button className="absolute z-10 hidden px-3 py-2 text-white -translate-y-1/2 bg-gray-600 rounded-full cursor-pointer lg:block -left-5 top-1/2 size-max hover:bg-gray-700 active:bg-gray-800 ">
          <FontAwesomeIcon icon={faArrowLeft} color="#fff" />
        </button>
        {data.card.map((card, index) => (
          <Dialog key={index}>
              <DialogTrigger>
                <Card img={card} isVertical={data.card.length > 4} >
                  <ModalHoverFilm
                    img={data.banner[index]}
                    index={index}
                    dataLength={data.card.length}
                    title={title}
                    />                
                </Card>
              </DialogTrigger>
            {!disabelModalDetail && (
              <DialogContent className="w-80  min-h-[670px] bg-primary p-0 border-none  flex flex-col border lg:w-[933px] lg:max-w-screen overflow-x-hidden lg:max-h-[90vh] overflow-y-auto  lg:h-[1568px]  ">
                <DialogTitle className="sr-only">Detail Movie</DialogTitle>                
                <PopupDetail isPremium={index % 2 === 0} isSeriesPage={location.pathname === '/series'} />
              </DialogContent>
            )}
          </Dialog>
        ))}
        <button className="absolute z-10 hidden px-3 py-2 text-white -translate-y-1/2 bg-gray-600 rounded-full cursor-pointer lg:block -right-5 top-1/2 size-max hover:bg-gray-700 active:bg-gray-800 ">
          <FontAwesomeIcon icon={faArrowRight} />
        </button>
      </div>
    </div>
  );
};

export default FilmList;
