import axios from "../axios";
import React, { useEffect, useState } from "react";
import requests from "../requests";
const Banner = () => {
  const [movie, setMovie] = useState();
  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(requests.fetchTrending);
      setMovie(
        request.data.results[
          Math.floor(Math.random() * request.data.results.length - 1)
        ]
      );
      return request;
    }
    fetchData();
  }, []);

  console.log(movie);

  function truncate(string, n) {
    return string?.length > n ? string.substr(0, n - 1) + "..." : string;
  }
  return (
    <header
      className="bg-center bg-black text-white bg-no-repeat h-auto w-full"
      style={{
        backgroundImage: `url(https://image.tmdb.org/t/p/original${movie?.backdrop_path})`,
        // https://image.tmdb.org/r/p/original//qzSjrYSZAWrjhg6Yf3hCcfJE4o0.jpg
        backgroundSize: "cover",
        backgroundPosition: "center center",
      }}
    >
      <div className="ml-7 pt-[140px] h-[190px">
        <h1 className="text-5xl font-extrabold pb-1">
          {movie?.title || movie?.original_title || movie?.name}
        </h1>
        <div>
          <button className=" bg-[rgba(51,51,51,0.5)] text-white cursor-pointer outline-none font-bold rounded-[0.2vw] px-8 mr-4 py-2 transition-all duration-200 hover:text-black hover:bg-white">
            Play
          </button>
          <button className=" bg-[rgba(51,51,51,0.5)] text-white cursor-pointer outline-none font-bold rounded-[0.2vw] px-8 mr-4 py-2 transition-all duration-200 hover:text-black hover:bg-white">
            My List
          </button>
        </div>
        <h1 className="w-[45rem] leading-5 text-sm max-w-[360px] h-20">
          {truncate(movie?.overview, 150)}
        </h1>
      </div>
      <div className="h-28 bg-gradient-to-b from-transparent via-[rgba(37,37,37,0.61)] to-black" />
    </header>
  );
};

export default Banner;
