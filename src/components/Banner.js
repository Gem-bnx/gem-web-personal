import React from "react";
import banner from "../img/banner.png";

function Banner() {
  return (
    <section id="banner" className="pl ps">
      <div className="container">
        <div className="intro">
          <p className="heading">Welcome to my website!</p>
          <hr color="#0e6a89" />
          <p className="detail">
            Explore some interesting things of a progressive <br></br> front-end
            developer.
          </p>
        </div>
        <img src={banner} alt="banner-img"></img>
      </div>
    </section>
  );
}

export default Banner;
