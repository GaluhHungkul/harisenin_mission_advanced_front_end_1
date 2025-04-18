import { FetchedAllData, ListDataPerPage } from "@/types/allTypes";
import { getData } from "./getData";

export const getAllData = async (data: ListDataPerPage[], setter: (value: FetchedAllData[]) => void) => {
  try {
    const responses = await Promise.all(
        data.map(async (list) => {
          const res = await getData(list.query);
          const fallbacked = res.map((film) => ({
            ...film,
            backdrop_path: film.backdrop_path
              ? import.meta.env.VITE_BASE_URL_TMDB_IMG + film.backdrop_path
              : "/assets/img/home/2/banner/banner1.png",
            poster_path: film.poster_path
              ? import.meta.env.VITE_BASE_URL_TMDB_IMG + film.poster_path
              : "/assets/img/home/2/card/card1.png",
              title :  film?.title || film?.name || film?.original_title || film?.original_name || "Ted Lasso"
          }));
    
          return {
            title: list.title,
            data: fallbacked,
          };
        })
      );
      console.log(responses)
      setter(responses);
  } catch (error) {
    console.log("Error fetchAll Data : " , error)
    return {
        title : "Something went wrong",
        data : []
    }
  }
};
