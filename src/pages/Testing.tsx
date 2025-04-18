import { getData } from "@/lib/getData"
import { useEffect, useState } from "react"


const Testing = () => {
    
    const [data, setData] = useState([])    
    

    useEffect(() => {
        getData({ query : "Avengers", setData })
    },[])

  return (
    <div className="min-h-screen">
        <div className="grid grid-cols-4 border-2 m-20 rounded min-h-screen text-white">
            {data?.map(film => (
                <div key={film.id} style={{ backgroundImage : `url(https://image.tmdb.org/t/p/w500/${film?.backdrop_path})` }} className="bg-cover bg-center  text-white" >
                    {film.title}
                </div>
            ))}
        </div>
    </div>
  )
}

export default Testing