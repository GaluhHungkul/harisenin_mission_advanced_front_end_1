import { FilmtmbdApi } from "@/types/allTypes";

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
