
import { Card } from "../components"
import { useFetch } from '../hooks/useFetch'
import { useTitle } from "../hooks/useTitle";

export const  MovieList = ({apiPath , title}) => {
const{data : movies} = useFetch(apiPath); // {data : movies}
  //eslint-disable-next-line
const pageTitle =useTitle(title);
  
  return (
    <main>
      <section className="max-w-7xl mx-auto py-7">
        <div className="flex justify-start flex-wrap other:justify-evenly">
       {movies.map((movie) => (
        // loop over the movies array and pass each movie to the Card component
        <Card key={movie.id} movie={movie}/>
        ))}
     
        </div>

      </section>
    </main>
   
  )
}
