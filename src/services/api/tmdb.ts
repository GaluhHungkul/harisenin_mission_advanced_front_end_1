import { FetchedAllData, ListDataPerPage } from "@/types/allTypes";
import { FilmtmbdApi } from "@/types/allTypes";
import toast  from "react-hot-toast"

export const getData = async (query: string): Promise<FilmtmbdApi[]> => {
  try {
    const separator = query.includes("?") ? "&" : "?"
    const res = await fetch(`${import.meta.env.VITE_TMDB_API}${query}${separator}api_key=${import.meta.env.VITE_TMDB_API_KEY}`);
    if (!res.ok) throw new Error("Failed to fetch");
    
    const data = await res.json();

    if (!data.results || !Array.isArray(data.results)) {
      throw new Error("Invalid data format");
    }

    return data.results.slice(10); 
  } catch (error) {
    console.error("getData error:", error);
    return []; 
  }
};

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

export const getMyMovieList = async (length=50) => {
    try {
        const res = await fetch(import.meta.env.VITE_BASE_URL_MOCKAPI_MYMOVIELIST)
        if(!res.ok) throw new Error("Gagal mengambil data")
        const data = await res.json()
        console.log(data)
        return data.slice(0,length)
    } catch (error) {
        console.log("Error : " , error)
        return []
    }
}

export const addToMyMovieList = async ({title, img, vote_average} : { title : string, img : string, vote_average : number }) => {

  const loadingToast = toast.loading("Menambahkan movie...")

    try {
        const checkExist = await getMyMovieList()
        const isExist = checkExist.some((film) => film.title === title)
        if(isExist) {
          toast.error("Film sudah ada di dalam list movie anda")
          toast.dismiss(loadingToast)
          return
        }

        const res = await fetch(import.meta.env.VITE_BASE_URL_MOCKAPI_MYMOVIELIST, {
            method : "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body : JSON.stringify({
                title, img, vote_average
            })
        })
        if(!res.ok) throw new Error("Gagal menambahkan data")
        toast.success("Film berhasil ditambahkan ke dalam list anda")
        toast.dismiss(loadingToast)
      } catch (error) {
        console.log("Error : " , error)
        toast.error("Terjadi kesalahan saat menambahkan film, coba lagi nanti")
        toast.dismiss(loadingToast)
      }
    }
    
export const deleteFromMyMovieList = async (id:string) => {
      
  const loadingToast = toast.loading("menghapus movie...")
      
  try {
    const res = await fetch(`${import.meta.env.VITE_BASE_URL_MOCKAPI_MYMOVIELIST}/${id}`, {
      method : "DELETE"
    })
    if(!res.ok) throw new Error("Gagal menghapus film dari list")
    toast.success("Film berhasil dihapus dari list anda")
    toast.dismiss(loadingToast)
  } catch (error) {
    console.log("Error : " , error)
    toast.error("Terjadi kesalahan saat menghapus film, coba lagi nanti")
    toast.dismiss(loadingToast)
  }
}