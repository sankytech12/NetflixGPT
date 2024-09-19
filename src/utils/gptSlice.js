import { createSlice } from "@reduxjs/toolkit";


const gptSlice=createSlice({
    name:"gpt",
    initialState:{
        showGptSearch:false,
        movieResults: null,
        movieNames: null,
    },
    reducers:{
        toggleGptSeachView:(state,action)=>{
            state.showGptSearch=!state.showGptSearch;
        },
        addGptMovieResult: (state, action) => {
            const { movieNames, movieResults } = action.payload;
            state.movieNames = movieNames;
            state.movieResults = movieResults;
        },
        removeGptMovieResult: (state) => {
            state.movieNames = null;
            state.movieResults = null;
        },
    }

})

export const {toggleGptSeachView, addGptMovieResult, removeGptMovieResult}=gptSlice.actions;
export default gptSlice.reducer;