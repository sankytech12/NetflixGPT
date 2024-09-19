import React from 'react'
import { IMG_CDN_URL } from '../utils/constants'

const MovieCard = ({posterPath,movie}) => {
    if(!posterPath){
        return null;
    }
  return (
    <div className="w-36 md:w-52 pr-4 hover:scale-125 transition-all duration-300 hover:cursor-pointer">
        <img src={IMG_CDN_URL+posterPath} alt="movie poster"/>
    </div>
  )
}

export default MovieCard