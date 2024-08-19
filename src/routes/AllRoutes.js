import { Route,Routes } from "react-router";
import { MovieDetail, MovieList, Search, PageNotFound } from "../pages";

export const AllRoutes = () => {
  return (
    <div className=" dark:bg-darkbg">
 <Routes>
      <Route path="/"  element={<MovieList apiPath="movie/now_playing" title ="Home"/>}/>
      <Route path="movie/:id"  element={<MovieDetail  title ="Movie Details"/>}/>
      <Route path="movies/popular"  element={<MovieList  apiPath="movie/popular" title ="Popular Movies"/>}/>
      <Route path="movies/top"  element={<MovieList  apiPath="movie/top_rated" title ="Top Rated Movies"/>}/>
      <Route path="movies/upcoming"  element={<MovieList  apiPath="movie/upcoming" title ="Upcoming Movies"/>}/>
      <Route path="search"  element={<Search apiPath="search/movie" title ="Search Movies"/>}/>
      <Route path="*"  element={<PageNotFound title ="Page Not Found"/>}/>
    </Routes>
    </div>
   
  )
}

