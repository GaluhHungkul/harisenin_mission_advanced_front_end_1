import banner_popup_detail_series from "/assets/img/series/banner_popup_detail_series.png";
import Banner from "./Banner";
import { faPlus} from "@fortawesome/free-solid-svg-icons";
import DetailMovie from "../series/DetailMovie";
import EpisodeList from "../series/EpisodeList";
import { FC } from "react";
import RekomendasiSerupa from "../film/RekomendasiSerupa";

type Props = {
  isPremium: boolean;
  isSeriesPage : boolean;
};

const dataEpisodeSeries = [
  {
    episode: 1,
    img: "/public/assets/img/series/1.png",
    title: "Pilot",
    description:
      "American football coach Ted Lasso is hired by a wealthy divorcee to coach the English soccer team AFC Richmond",
    duration: "30min",
  },
  {
    episode: 2,
    img: "/public/assets/img/series/2.png",
    title: "Biscuits",
    description:
      "It’s Ted’s first day of coaching, and fans aren’t happy. He makes little headway but remains undeterred as the team play their first match.",
    duration: "29min",
  },
  {
    episode: 3,
    img: "/public/assets/img/series/3.png",
    title: "Trent Crimm: Independent",
    description:
      "To arrange an in-depth exposé, Rebecca pairs cynical journalist Trent Crimm with Ted for a day. Ted and Roy venture into the community.",
    duration: "30min",
  },
  {
    episode: 4,
    img: "/public/assets/img/series/4.png",
    title: "For The Children",
    description:
      "Rebecca hosts the team’s annual charity benefit, where Ted stages a reconciliation between Roy and Jamie.",
    duration: "33min",
  },
  {
    episode: 5,
    img: "/public/assets/img/series/5.png",
    title: "Tan Lines",
    description:
      "With his wife and son visiting from America, Ted makes drastic changes to the lineup during a critical match.",
    duration: "31min",
  },
];

const dataRekomendasiSerupa = ["/assets/img/home/3/card/card1.png","/assets/img/home/3/card/card3.png","/assets/img/home/3/card/card4.png"]

const PopupDetail: FC<Props> = ({ isPremium, isSeriesPage }) => {

  return (
    <>
      <Banner
        isPremium={isPremium}
        isSelengkapnya={false}
        icon={faPlus}
        img={banner_popup_detail_series}
        title="Ted Lasso"
        selectGenre={false}
      />
       
      <div className="px-4 text-white relative bottom-8 text-[10px] lg:px-16 ">
        <DetailMovie />
        {isSeriesPage ? <EpisodeList data={dataEpisodeSeries} /> : <RekomendasiSerupa data={dataRekomendasiSerupa}/>}
      </div>
    </>
  );
};

export default PopupDetail;
