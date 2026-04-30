import React from "react";
import "./Banner.css";
import bannerImg from "../assets/banner.png";
import Play_Circle from "../assets/Play_Circle.png";

const Banner = () => {
  return (
    <section className="banner pt-5" style={{ background: "#FCEED5" }}>
      <div className="container">
        <div className="row align-items-center">

          {/* Left Content */}
          <div className="col-md-6 my-5">
            <h1 className="banner-title">One More Friend</h1>
            <h3 className="banner-title2">Thousands More Fun!</h3>
            <p className="banner-text">
              Having a pet means you have more joy, a new friend, a happy person who will always be with you to have fun. We have 200+ different pets that can meet your needs!
            </p>

            <div className="d-flex gap-3 pb-5">
              <button className="btn btn-dark-color rounded-pill px-4 d-flex align-items-center gap-3">
                <span>View Intro</span>
                <span className="play-icon">
                  <i className="bi bi-play-fill"></i>
                </span>
              </button>

              <button className="btn btn-color rounded-pill px-4">
                Explore Now
              </button>
            </div>
          </div>

          {/* Right Image */}
          <div className="col-md-6 text-center">
            <img
              src={bannerImg}
              alt="Fashion Banner"
              className="banner-img"
            />
          </div>

        </div>
      </div>
    </section>
  );
};

export default Banner;