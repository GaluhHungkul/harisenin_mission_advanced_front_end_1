import Banner from "../components/home/Banner"
import FilmList from "../components/home/FilmList"

const dataFilmList = [
  {
    data : ["/assets/img/home/1/card1.png","/assets/img/home/1/card2.png","/assets/img/home/1/card3.png","/assets/img/home/1/card4.png"],
    title : "Melanjutkan Tonton Film"
  },
  {
    data : ["/assets/img/home/2/card1.png","/assets/img/home/2/card2.png","/assets/img/home/2/card3.png","/assets/img/home/2/card4.png","/assets/img/home/2/card5.png"],
    title : "Top Rating Film dan Series Hari ini"
  },
  {
    data : ["/assets/img/home/3/card1.png","/assets/img/home/3/card2.png","/assets/img/home/3/card3.png","/assets/img/home/3/card4.png","/assets/img/home/3/card5.png"],
    title : "Film Trending"
  },
  {
    data : ["/assets/img/home/4/card1.png","/assets/img/home/4/card2.png","/assets/img/home/4/card3.png","/assets/img/home/4/card4.png","/assets/img/home/4/card5.png"],
    title : "Rilis Baru"
  }
]

const HomePage = () => {




  return (
    <div className="min-h-screen">
      <Banner />
      <div className="px-5 lg:px-10">
        {dataFilmList.map((film, index) => (
          <FilmList key={index} title={film.title} data={film.data} />
        ))}
      </div>
    </div>
  )
}

export default HomePage