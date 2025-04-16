import { useEffect, useState } from "react"


const Testing = () => {
    
    const [data, setData] = useState([])
    
    const getData = async () => {
        const res = await fetch(import.meta.env.VITE_TMDB_API + "avengers")
        const json = await res.json()
        setData(json.results)
        console.log(json.results)
    }

    useEffect(() => {
        getData()
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