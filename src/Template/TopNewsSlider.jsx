import React from "react";

import "owl.carousel/dist/assets/owl.carousel.css";

import "owl.carousel/dist/assets/owl.theme.default.css";

const TopNewsSlider = () => {
  return (
    <div className="container-fluid py-3">
      <div className="container">
        <div className="owl-carousel owl-carousel-2 carousel-item-3 position-relative d-flex">
          <div className="d-flex">
            <img
              src={require("./img/news-100x100-2.jpg")}
              style={{ width: 80, height: 80, objectFit: "cover" }}
            />
            <div
              className="d-flex align-items-center bg-light px-3"
              style={{ height: 80 }}
            >
              <a className="text-secondary font-weight-semi-bold" href="">
                Lorem ipsum dolor sit amet consec adipis elit
              </a>
            </div>
          </div>
          <div className="d-flex">
            <img
              src={require("./img/news-100x100-3.jpg")}
              style={{ width: 80, height: 80, objectFit: "cover" }}
            />
            <div
              className="d-flex align-items-center bg-light px-3"
              style={{ height: 80 }}
            >
              <a className="text-secondary font-weight-semi-bold" href="">
                Lorem ipsum dolor sit amet consec adipis elit
              </a>
            </div>
          </div>
          <div className="d-flex">
            <img
              src={require("./img/news-100x100-4.jpg")}
              style={{ width: 80, height: 80, objectFit: "cover" }}
            />
            <div
              className="d-flex align-items-center bg-light px-3"
              style={{ height: 80 }}
            >
              <a className="text-secondary font-weight-semi-bold" href="">
                Lorem ipsum dolor sit amet consec adipis elit
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopNewsSlider;
