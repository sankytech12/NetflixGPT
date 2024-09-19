import { useDispatch, useSelector } from "react-redux";
import { addPopularMovies } from "../utils/movieSlice";
import { useEffect } from "react";
import { API_CONSTANTS } from "../utils/constants";

const usePopularMovies = () => {
  const dispatch = useDispatch();
  const popularMovies = useSelector((store) => store.movies.popularMovies);
  const url =
    "https://api.themoviedb.org/3/movie/popular?language=en-US&page=1";

  const getPopularMovies = async () => {
    const response = await fetch(url, API_CONSTANTS);
    const data = await response.json();
    dispatch(addPopularMovies(data.results));
  };
  useEffect(() => {
    !popularMovies && getPopularMovies();
  }, []);
};

export default usePopularMovies;
