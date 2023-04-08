import React from "react";
import Banner from "../components/Banner";
import Nav from "../components/Nav";
import Row from "../components/Row";
import requests from "../requests";
const HomeScreen = () => {
  return (
    <div className="">
      
      <Nav />
      <Banner />
      <Row
        title="NETFLIX ORIGIONALS"
        fetchUrl={requests.fetchNetflixOriginals}
        isLargeRow
      />
      <Row
        title="Trending Now"
        fetchUrl={requests.fetchTrending}
        isLargeRow={false}
      />
      <Row
        title="Top Rated"
        fetchUrl={requests.fetchTopRated}
        isLargeRow={false}
      />
      <Row
        title="Comedy"
        fetchUrl={requests.fetchComedyMovies}
        isLargeRow={false}
      />
      <Row
        title="Romance"
        fetchUrl={requests.fetchRomanceMovies}
        isLargeRow={false}
      />
      <Row
        title="Action"
        fetchUrl={requests.fetchActionMovies}
        isLargeRow={false}
      />
      <Row
        title="Documentries"
        fetchUrl={requests.fetchDocumentaries}
        isLargeRow={false}
      />
      <Row
        title="Horror"
        fetchUrl={requests.fetchHorrorMovies}
        isLargeRow={false}
      />
    </div>
  );
};

export default HomeScreen;
