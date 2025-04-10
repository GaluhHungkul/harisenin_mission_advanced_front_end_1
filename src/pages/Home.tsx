import Banner from "../components/common/Banner";
import FilmList from "../components/common/FilmList";
import banner_home from "/assets/img/home/banner.png";

type FilmList = {
  data: {
    card: string[];
    banner: string[];
  };
  title: string;
};

const dataFilmList: FilmList[] = [
  {
    data: {
      card: [
        "/assets/img/home/1/card1.png",
        "/assets/img/home/1/card2.png",
        "/assets/img/home/1/card3.png",
        "/assets/img/home/1/card4.png",
      ],
      banner: [
        "/assets/img/home/1/card1.png",
        "/assets/img/home/1/card2.png",
        "/assets/img/home/1/card3.png",
        "/assets/img/home/1/card4.png",
      ],
    },
    title: "Melanjutkan Tonton Film",
  },
  {
    data: {
      card: [
        "/assets/img/home/2/card/card1.png",
        "/assets/img/home/2/card/card2.png",
        "/assets/img/home/2/card/card3.png",
        "/assets/img/home/2/card/card4.png",
        "/assets/img/home/2/card/card5.png",
      ],
      banner: [
        "/assets/img/home/2/banner/banner1.png",
        "/assets/img/home/2/banner/banner2.png",
        "/assets/img/home/2/banner/banner3.png",
        "/assets/img/home/2/banner/banner4.png",
        "/assets/img/home/2/banner/banner5.png",
      ],
    },
    title: "Top Rating Film dan Series Hari ini",
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

const synopsis = "Sebuah benda tak dikenal mengambil alih dunia. Dalam keputusasaan, Departemen Pertahanan mulai merekrut lebih banyak tentara, termasuk siswa sekolah menengah. Mereka pun segera menjadi pejuang garis depan dalam perang."

const HomePage = () => {
  return (
    <>
      <Banner isPremium={false} isSelengkapnya={true} icon="18+" img={banner_home} selectGenre={false} synopsis={synopsis} title={"Duty After School"}/>
      <div className="px-5 lg:px-10 lg:flex lg:flex-col lg:items-center">
        {dataFilmList.map((film, index) => (
          <FilmList key={index} title={film.title} data={film.data} />
        ))}
      </div>
    </>
  );
};

export default HomePage;
