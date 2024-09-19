import React from 'react'
import { Play,Info } from 'lucide-react';

const VideoTitle = ({title,overview}) => {
  return (
    <div className="w-screen aspect-video pt-[20%] px-6 md:px-24 absolute text-white bg-gradient-to-r from-black">
        <h1 className="text-5xl font-bold">{title}</h1>
        <p className="hidden md:inline-block  py-6 text-lg w-2/4">{overview}</p>
        <div className="flex space-x-3 font-bold mt-8">
            <button className="p-2 md:px-10 md:py-3 bg-white text-black rounded-sm flex gap-1 hover:bg-slate-200 transition-all ease-in-out duration-150 justify-start">
                <Play fill='black'/> <span>Play</span>
            </button>
            <button className="p-2 md:px-12 md:py-3 bg-white/25 rounded-sm flex gap-1 hover:bg-slate-600 transition-all ease-in-out duration-150 justify-start ">
            <Info strokeWidth={3} /> <span>More Info</span>
            </button>
        </div>
    </div>
  )
}

export default VideoTitle