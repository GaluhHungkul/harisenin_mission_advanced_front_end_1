import Banner from "../components/common/Banner";
import FilmList from "../components/common/FilmList";
import banner_film from "/assets/img/film/banner_film.png";

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
    title: "Melanjutkan Tonton Film",
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
    title: "Film Persembahan Chill",
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
    title: "Top Rating Film Hari ini",
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
    title: "Film Trending",
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

const synopsis = "Di planet Pandora yang kaya akan sumber daya alam, manusia datang untuk mengeksploitasi isinya. Namun mereka harus berhadapan dengan suku asli Na'vi. Jake Sully, mantan prajurit yang dikirim sebagai avatar manusia-Na'vi, terjebak di antara dua dunia. Dalam pertempuran besar antara keserakahan dan harmoni alam, Jake harus memilih di sisi mana dia berdiri."

const Film = () => {
  return (
    <>
      <Banner img={banner_film} isPremium={false} isSelengkapnya={true} icon="18+" selectGenre={true} synopsis={synopsis} title={"Avatar"}/>
      <div className="px-5 lg:px-10 lg:flex lg:flex-col lg:items-center">
        {dataSeries.map((film, index) => (
          <FilmList key={index} title={film.title} data={film.data} />
        ))}
      </div>
    </>
  );
};

export default Film;
