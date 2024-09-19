import { useDispatch, useSelector } from "react-redux";
import { addUpcomingMovies } from "../utils/movieSlice";
import { useEffect } from "react";
import { API_CONSTANTS } from "../utils/constants";

const useUpcomingMovies = () => {
  const dispatch = useDispatch();
  const upcomingMovies = useSelector((store) => store.movies.upcomingMovies);
  const url = 'https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1';

  const getTopRatedMovies = async () => {
    const response = await fetch(url, API_CONSTANTS);
    const data = await response.json();
    dispatch(addUpcomingMovies(data.results));
  };

  useEffect(() => {
    !upcomingMovies && getTopRatedMovies();
  }, []);
};

export default useUpcomingMovies;
