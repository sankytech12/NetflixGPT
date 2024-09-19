import React, { useRef } from "react";
import model from "../utils/genai";
import { API_CONSTANTS } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addGptMovieResult } from "../utils/gptSlice";


const GptSearchBar = () => {
    const dispatch = useDispatch();
    const searchText=useRef(null);

    const searchMovieTMDB=async(movie)=>{
        const data = await fetch(
            "https://api.themoviedb.org/3/search/movie?query=" +
              movie +
              "&include_adult=false&language=en-US&page=1",
              API_CONSTANTS
          );
          const json = await data.json();
      
          return json.results;
    }

    const handleGptSearch = async() => {
        const gptQuery =
        "Act as a Movie Recommendation system and suggest some movies for the query : " +
        searchText.current.value +
        ". only give me names of 5 movies, comma seperated like the example result given ahead. Example Result: Gadar, Sholay, Don, Golmaal, Koi Mil Gaya";
        const result = await model.generateContent(gptQuery);
        const geminiResponse = result?.response?.text()?.trim().split(",");
        
        const promiseArray=geminiResponse.map((movie)=>searchMovieTMDB(movie.trim()));
        const movieList=await Promise.all(promiseArray);
        console.log(movieList);
        
        dispatch(addGptMovieResult({movieResults:movieList,movieNames:geminiResponse}));
        searchText.current.value="";
    }

  return (
    <div className="pt-[45%] md:pt-[10%] flex justify-center">
      <form className="w-full md:w-1/2 bg-transparent grid grid-cols-12"  onSubmit={(e) => e.preventDefault()}>
        <input
          className="col-span-9 p-5 focus:outline-red-700 my-4 mr-2 ml-4 rounded-lg text-slate-900"
          type="text"
          placeholder="What would you like to watch today?"
          ref={searchText}
        />
        <button onClick={handleGptSearch} className="text-white col-span-3 hover:bg-transparent font-bold  hover:border-red-700 hover:border transition-colors duration-300 ease-in-out  bg-red-700 rounded-lg my-4 mr-4">
          Search
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
