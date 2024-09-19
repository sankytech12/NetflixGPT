import React from 'react'
import GptSearchBar from './GptSearchBar'
import GptMovieList from './GptMovieList'
import { BACKGROUND_IMG } from '../utils/constants'

const GptSearchPage = () => {
  return (
    <>
    <div className="fixed -z-10">
      <img className="h-screen w-screen object-cover" src={BACKGROUND_IMG} alt="logo" />
    </div>
    <div>
      <GptSearchBar />
      <GptMovieList />
    </div>
  </>
  )
}

export default GptSearchPage