import { API_CONSTANTS } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { addTrailerMovie } from "../utils/movieSlice";
import { useEffect } from "react";

const useMovieTrailer = (movieId) => {
  const dispath = useDispatch();
  const trailerMovie=useSelector((store)=>store.movies.trailerMovie);
  const url = `https://api.themoviedb.org/3/movie/${movieId}/videos?language=en-US`;

  const getMoviesVideo = async () => {
    const response = await fetch(url, API_CONSTANTS);
    const data = await response.json();
    const filteredData = data.results.filter((item) => item.type === "Trailer");
    const trailer = filteredData.length ? filteredData[0] : data.results[0];
    dispath(addTrailerMovie(trailer));
  };
  useEffect(() => {
    !trailerMovie && getMoviesVideo();
  }, []);
};

export default useMovieTrailer;
