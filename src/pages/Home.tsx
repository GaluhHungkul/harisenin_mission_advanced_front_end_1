import GroupedFilmList from "@/components/common/GroupedFilmList";
import Banner from "../components/common/Banner";
import { ListDataPerPage } from "@/types/allTypes";


const ListDataHomePage: ListDataPerPage[] = [
  {
    title: "Film Trending",
    query: "/trending/movie/day",
  },
  {
    title: "Melanjutkan Tonton Film",
    query: "/movie/popular",
  },
  {
    title: "Top Rating Film dan Series Hari ini",
    query: "/movie/top_rated",
  },
  {
    title: "Rilis baru",
    query: "/movie/upcoming",
  },
];

const HomePage = () => {
  

  return (
    <>
      <Banner />
      <GroupedFilmList data={ListDataHomePage}/>
    </>
  );
};

export default HomePage;
