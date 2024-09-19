import React from 'react'
import MovieCard from './MovieCard';

const MovieList = ({title,movies}) => {
    // console.log(movies);
    
  return movies && (
    <div className="px-6">
        <h1 className="text-lg md:text-3xl py-5 pl-3 text-white">{title}</h1>
        <div className="flex overflow-x-scroll pl-12">
            <div className="flex">
                {
                    movies.map((movie)=><MovieCard key={movie.id} posterPath={movie.poster_path} movie={movie}/>)
                }
            </div>
        </div>
    </div>
  )
}

export default MovieList