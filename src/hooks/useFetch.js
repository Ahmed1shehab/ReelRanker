
import { useEffect, useState } from "react"
export const useFetch = (apiPath, query="") => {//pass apipath and query
const [data , setData] = useState([])
const api_key=process.env.REACT_APP_API_KEY; //gets the api from the env file

const url = `https://api.themoviedb.org/3/${apiPath}?api_key=${api_key}&query=${query}`  //take the api and query if it exists
useEffect(()=>{
    async function fetchMovie() {
      const response = await fetch(url);
      const json = await response.json();
      setData(json.results);//save the results in the data state
    }
    fetchMovie();
   },[url]);
  return { data } //return the data 
}

