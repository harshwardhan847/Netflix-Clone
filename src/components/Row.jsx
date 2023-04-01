import axios from "../axios";
import React, { useEffect, useState } from "react";

const Row = ({ title, fetchUrl, isLargeRow = false }) => {
  const [movies, setMovies] = useState([]);
  const base_url = "https://image.tmdb.org/t/p/original";
  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchUrl);
      setMovies(request?.data?.results);
      return request;
    }
    fetchData();
  }, [fetchUrl]);
  console.log(movies);
  return (
    <div className="pb-9">
      <h2 className={`text-white mx-4 ${isLargeRow ? "text-3xl" : "text-lg"}`}>
        {title}
      </h2>
      <div className="flex scroll bg-cover overflow-y-hidden scrollbar-hide overflow-x-scroll px-5">
        {movies.map((movie) => {
          return (
            <img
              className={`text-white mt-5 max-h-[200px] w-full duration-300 mr-5 hover:scale-105 hover:opacity-100`}
              key={movie.id}
              src={`${base_url}${
                isLargeRow ? movie?.poster_path : movie?.backdrop_path
              }`}
              alt=""
            />
          );
        })}
      </div>
    </div>
  );
};

export default Row;
