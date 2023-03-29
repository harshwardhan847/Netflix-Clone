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
    </div>
  );
};

export default HomeScreen;
