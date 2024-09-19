import React from 'react'
import { useSelector } from 'react-redux'
import VideoTitle from './VideoTitle';
import VideoPlayer from './VideoPlayer';

const MainContainer = () => {

  const movies=useSelector((state)=>state.movies?.nowPlayingMovies);
  if(!movies) return;
  const mainMovie=movies[0];
  const {original_title,overview,id}=mainMovie;

  return (
    <div className="pt-[30%] bg-black md:pt-0">
      <VideoTitle title={original_title} overview={overview}/>
      <VideoPlayer movieId={id}/>
    </div>
  )
}

export default MainContainer