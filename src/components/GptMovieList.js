import React from 'react'
import { useSelector } from 'react-redux';
import MovieList from './MovieList';

const GptMovieList = () => {
    const {movieResults,movieNames}=useSelector((state)=>state.gpt);
    if(!movieResults || !movieNames){
        return null;
    }
  return (
    <div className="p-4 m-4 bg-black text-white bg-opacity-70">
        <div>
        {movieNames.map((movieName, index) => (
          <MovieList
            key={movieName.trim()}
            title={movieName.trim()}
            movies={movieResults[index]}
          />
        ))}
      </div>
    </div>
  )
}

export default GptMovieList