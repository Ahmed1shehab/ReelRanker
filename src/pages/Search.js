
import { Card } from "../components"
import { useFetch } from '../hooks/useFetch'
import { useSearchParams } from "react-router-dom";
import { useTitle } from "../hooks/useTitle";

export const  Search = ({apiPath}) => {
  const [searchParams] = useSearchParams();//search the params
  const query = searchParams.get("q"); //get the query
  const{data : movies} = useFetch(apiPath,query); // {data : movies}

  const pageTitle = useTitle(`Result for ${query}`);
  
  return (
    <main>
      <section className="py-7">
        <p className="text-3xl text-gray-700 dark:text-white">{movies.length===0 ? `No result for "${query}"` : `Result for "${query}"`}</p>
      </section>
      <section className="max-w-7xl mx-auto py-7">
        <div className="flex justify-start flex-wrap">
       {movies.map((movie) => (
        <Card key={movie.id} movie={movie}/>
        ))}
     
        </div>

      </section>
    </main>
   
  )
}

 