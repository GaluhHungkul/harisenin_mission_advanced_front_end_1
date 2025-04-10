
import Banner from "../components/common/Banner";
import FilmList from "../components/common/FilmList";
import banner_series from "/assets/img/series/banner_series.png";

type DataSeries = {
  data: {
    card: string[];
    banner: string[];
  };
  title: string;
};

const dataSeries: DataSeries[] = [
  {
    data: {
      card: [
        "/assets/img/series/1/1.png",
        "/assets/img/series/1/2.png",
        "/assets/img/series/1/3.png",
        "/assets/img/series/1/4.png",
      ],
      banner: [
        "/assets/img/series/1/1.png",
        "/assets/img/series/1/2.png",
        "/assets/img/series/1/3.png",
        "/assets/img/series/1/4.png",
      ],
    },
    title: "Melanjutkan Tonton Series",
  },
  {
    data: {
      card: [
        "/assets/img/series/2/1.png",
        "/assets/img/series/2/2.png",
        "/assets/img/series/2/3.png",
        "/assets/img/series/2/4.png",
        "/assets/img/series/2/5.png",
      ],
      banner: [
        "/assets/img/home/3/banner/banner2.png",
        "/assets/img/home/4/banner/banner4.png",
        "/assets/img/home/2/banner/banner3.png",
        "/assets/img/home/4/banner/banner5.png",
        "/assets/img/home/4/banner/banner3.png",
      ],
    },
    title: "Series Persembahan Chill",
  },
  {
    data: {
      card: [
        "/assets/img/home/3/card/card1.png",
        "/assets/img/home/3/card/card2.png",
        "/assets/img/home/3/card/card3.png",
        "/assets/img/home/3/card/card4.png",
        "/assets/img/home/3/card/card5.png",
      ],
      banner: [
        "/assets/img/home/3/banner/banner1.png",
        "/assets/img/home/3/banner/banner2.png",
        "/assets/img/home/3/banner/banner3.png",
        "/assets/img/home/3/banner/banner4.png",
        "/assets/img/home/3/banner/banner5.png",
      ],
    },
    title: "Top Rating Series Hari ini",
  },
  {
    data: {
      card: [
        "/assets/img/home/4/card/card1.png",
        "/assets/img/home/4/card/card2.png",
        "/assets/img/home/4/card/card3.png",
        "/assets/img/home/4/card/card4.png",
        "/assets/img/home/4/card/card5.png",
      ],
      banner: [
        "/assets/img/home/4/banner/banner1.png",
        "/assets/img/home/4/banner/banner2.png",
        "/assets/img/home/4/banner/banner3.png",
        "/assets/img/home/4/banner/banner4.png",
        "/assets/img/home/4/banner/banner5.png",
      ],
    },
    title: "Series Trending",
  },
  {
    data: {
      card: [
        "/assets/img/home/4/card/card1.png",
        "/assets/img/home/4/card/card2.png",
        "/assets/img/home/4/card/card3.png",
        "/assets/img/home/4/card/card4.png",
        "/assets/img/home/4/card/card5.png",
      ],
      banner: [
        "/assets/img/home/4/banner/banner1.png",
        "/assets/img/home/4/banner/banner2.png",
        "/assets/img/home/4/banner/banner3.png",
        "/assets/img/home/4/banner/banner4.png",
        "/assets/img/home/4/banner/banner5.png",
      ],
    },
    title: "Rilis Baru",
  },
];

const synopsis = "Mengisahkan tentang sekelompok orang yang berjunag untuk bertahan hidup di dalam sebuah gedung apartemen yang penuh dengan zombie. Sayangnya, virus zombie hanya terdapat di dalam area apartemen tersebut dan tidak menyebar ke luar kawasan apartemen."

const Series = () => {


  return (
    <>
      <Banner isSelengkapnya={true} isPremium={false} icon="18+" img={banner_series} selectGenre={true} synopsis={synopsis} title={"Happiness"}/>
      <div className="px-5 lg:px-10 lg:flex lg:flex-col lg:items-center">
        {dataSeries.map((film, index) => (
          <FilmList key={index} title={film.title} data={film.data} />
        ))}
      </div>
    </>
  );
};

export default Series;
