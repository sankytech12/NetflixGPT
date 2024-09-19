import React from 'react'
import MovieList from './MovieList'
import { useSelector } from 'react-redux'

const SecondaryContainer = () => {
  const nowPlayingMovies=useSelector(state=>state.movies?.nowPlayingMovies);
  const topRatedMovies=useSelector(state=>state.movies?.topRatedMovies);
  const popularMovies=useSelector(state=>state.movies?.popularMovies);
  const upcomingMovies=useSelector(state=>state.movies?.upcomingMovies);

  return (
    <div className=" bg-black">
      <div className="mt-0 md:-mt-52 pl-4 md:pl-12 relative z-10">
      <MovieList title={"Now Playing Movie"} movies={nowPlayingMovies} />
      <MovieList title={"Populars"} movies={popularMovies} />
      <MovieList title={"Top Rated"} movies={topRatedMovies} />
      <MovieList title={"Upcomings"} movies={upcomingMovies} />
      </div>
    </div>
  )
}

export default SecondaryContainer