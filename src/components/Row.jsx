import axios from "../axios";
import React, { useEffect, useState } from "react";
import LoadingBar from "react-top-loading-bar";
const Row = ({ title, fetchUrl, isLargeRow = false }) => {
  const [movies, setMovies] = useState([]);
  const [progress, setProgress] = useState(0);

  const base_url = "https://image.tmdb.org/t/p/original";
  useEffect(() => {
    setProgress(40);
    async function fetchData() {
      const request = await axios.get(fetchUrl);
      setProgress(60);
      setMovies(request?.data?.results);
      setProgress(100);
      return request;
    }
    fetchData();
  }, [fetchUrl]);
  function getRating(rating) {
    return rating.toFixed(1);
  }
  function getRatingColor(rating) {
    // if(rating>=9)return "bg-blue-600"
    if (rating >= 7) return "bg-green-600";
    if (rating >= 5) return "bg-yellow-500";
    return "bg-red-600";
  }
  console.log(movies);
  return (
    <div className="pb-9">
      <LoadingBar
        color={"red"}
        progress={progress}
        onLoaderFinished={() => setProgress(0)}
      />
      <h2 className={`text-white mx-4 ${isLargeRow ? "text-3xl" : "text-lg"}`}>
        {title}
      </h2>

      <div className="flex items-center gap-5 pt-5 w-full bg-cover scroll overflow-y-hidden scrollbar-hide overflow-x-scroll px-5">
        {movies.map((movie) => {
          return (
            <div className="text-white relative h-[200px] bg-red-600 duration-300 hover:scale-105 hover:opacity-100 group">
              <img
                className="h-full max-w-none bg-contain"
                key={movie?.id}
                src={`${base_url}${
                  isLargeRow ? movie?.poster_path : movie?.backdrop_path
                }`}
                alt=""
              />
              {!isLargeRow && (
                <div className="text-white flex justify-between w-full bottom-[-200%] p-2 absolute bg-clip-padding backdrop-filter backdrop-blur-xl bg-opacity-60 opacity-0 duration-200 ease-in-out group-hover:opacity-100 group-hover:bottom-0">
                  <div>{movie?.title}</div>
                  <div
                    className={`${getRatingColor(
                      movie.vote_average
                    )} w-fit h-fit p-1 rounded-sm`}
                  >
                    {getRating(movie?.vote_average)}
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Row;
