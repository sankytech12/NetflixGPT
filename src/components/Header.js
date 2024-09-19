import React from 'react'
import logo from '../assets/Netflix-Logo.png'
import { useDispatch, useSelector } from 'react-redux'
import { signOut } from 'firebase/auth';
import { auth } from '../utils/firebase';
import { toggleGptSeachView,removeGptMovieResult } from '../utils/gptSlice';
//netflix-gpt/src/assets/Netflix-Logo.png
export const Header = () => {
    const user=useSelector((state)=>state.user);
    const dispatch=useDispatch();
    const {showGptSearch}=useSelector((state)=>state.gpt);

    const handleSignOut=()=>{
        signOut(auth)
        .then(() => {})
        .catch((error) => {
        //   navigat("/error");
        });
    }
    const handleGptSearchClick=()=>{
        dispatch(toggleGptSeachView());
        dispatch(removeGptMovieResult());
    }


  return (
    <div className="w-full px-8 py-4 backdrop-blur-sm bg-gradient-to-b from-black flex flex-col md:flex-row justify-between align-middle fixed top-0 z-50">
        <img src={logo} className="w-44 md:m-0 m-auto"/>
        {user && (
        <div className="flex p-2 justify-between space-x-4 align-middle">
           <img
            className="hidden md:block w-12 h-12 mt-2"
            alt="usericon"
            src={user?.photoURL}
          />
          
          <button
            className="p-3 md:py-0 md:px-8 bg-transparent border-purple-800 border text-white rounded-2xl hover:border-purple-50 ease-in transition-colors duration-100"
            onClick={handleGptSearchClick}
          >
            {showGptSearch ? "Homepage" : "GPT Search"}
          </button> 
    
          <button onClick={handleSignOut} className="p-3 hover:border-red-50 ease-in transition-colors duration-100 font-bold text-white bg-transparent border-red-600 border md:px-10 rounded-2xl">
            Sign Out
          </button>
        </div>
      )}
    </div>
  )
}
