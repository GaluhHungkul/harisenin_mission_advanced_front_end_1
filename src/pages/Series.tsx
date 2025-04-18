import GroupedFilmList from "@/components/common/GroupedFilmList";
import Banner from "../components/common/Banner";
import { ListDataPerPage } from "@/types/allTypes";


const ListDataSeriesPage: ListDataPerPage[] = [
  {
    title: "Film Trending",
    query: "/tv/popular",
  },
  {
    title: "Melanjutkan Tonton Film",
    query: "/discover/movie?sort_by=popularity.desc&with_genres=28",
  },
  {
    title: "Top Rating Film dan Series Hari ini",
    query: "/tv/top_rated",
  },
  {
    title: "Rilis baru",
    query: "/discover/tv?with_genres=16",
  },
];

const Series = () => {


  return (
    <>
      <Banner selectGenre/>
      <GroupedFilmList data={ListDataSeriesPage}/>
    </>
  );
};

export default Series;
