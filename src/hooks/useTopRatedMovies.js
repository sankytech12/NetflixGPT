import { useDispatch, useSelector } from "react-redux";
import { addTopRatedMovies } from "../utils/movieSlice";
import { useEffect } from "react";
import { API_CONSTANTS } from "../utils/constants";

const useTopRatedMovies = () => {
  const dispatch = useDispatch();
  const topRatedMovies = useSelector((store) => store.movies.topRatedMovies);
  const url = 'https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1';

  const getTopRatedMovies = async () => {
    const response = await fetch(url, API_CONSTANTS);
    const data = await response.json();
    dispatch(addTopRatedMovies(data.results));
  };

  useEffect(() => {
   !topRatedMovies && getTopRatedMovies();
  }, []);
};

export default useTopRatedMovies;
