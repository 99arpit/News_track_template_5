import React from "react";

const Featured = () => {
  return (
    <>
      <div className="container-fluid py-3">
        <div className="container">
          <div className="d-flex align-items-center justify-content-between bg-light py-2 px-4 mb-3">
            <h3 className="m-0">Featured</h3>
            <a
              className="text-secondary font-weight-medium text-decoration-none"
              href=""
            >
              View All
            </a>
          </div>
          <div className="owl-carousel owl-carousel-2 carousel-item-4 position-relative d-flex ">
            {/* <div
              className="position-relative overflow-hidden"
              style={{ height: 300 }}
            >
              <img
                className="img-fluid w-100 h-100"
                src=".img/news-300x300-1.jpg"
                style={{ objectFit: "cover" }}
              />
              <div className="overlay">
                <div className="mb-1" style={{ fontSize: 13 }}>
                  <a className="text-white" href="">
                    Technology
                  </a>
                  <span className="px-1 text-white">/</span>
                  <a className="text-white" href="">
                    January 01, 2045
                  </a>
                </div>
                <a className="h4 m-0 text-white" href="">
                  Sanctus amet sed ipsum lorem
                </a>
              </div>
            </div> */}
            <div
              className="position-relative overflow-hidden m-2 "
              style={{ height: 300 }}
            >
              <img
                className="img-fluid w-100 h-100"
                src={require("./img/news-300x300-2.jpg")}
                style={{ objectFit: "cover" }}
              />
              <div className="overlay">
                <div className="mb-1" style={{ fontSize: 13 }}>
                  <a className="text-white" href="">
                    Technology
                  </a>
                  <span className="px-1 text-white">/</span>
                  <a className="text-white" href="">
                    January 01, 2045
                  </a>
                </div>
                <a className="h4 m-0 text-white" href="">
                  Sanctus amet sed ipsum lorem
                </a>
              </div>
            </div>
            <div
              className="position-relative overflow-hidden m-2 "
              style={{ height: 300 }}
            >
              <img
                className="img-fluid w-100 h-100"
                src={require("./img/news-300x300-3.jpg")}
                style={{ objectFit: "cover" }}
              />
              <div className="overlay">
                <div className="mb-1" style={{ fontSize: 13 }}>
                  <a className="text-white" href="">
                    Technology
                  </a>
                  <span className="px-1 text-white">/</span>
                  <a className="text-white" href="">
                    January 01, 2045
                  </a>
                </div>
                <a className="h4 m-0 text-white" href="">
                  Sanctus amet sed ipsum lorem
                </a>
              </div>
            </div>
            <div
              className="position-relative overflow-hidden m-2 "
              style={{ height: 300 }}
            >
              <img
                className="img-fluid w-100 h-100"
                src={require("./img/news-300x300-4.jpg")}
                style={{ objectFit: "cover" }}
              />
              <div className="overlay">
                <div className="mb-1" style={{ fontSize: 13 }}>
                  <a className="text-white" href="">
                    Technology
                  </a>
                  <span className="px-1 text-white">/</span>
                  <a className="text-white" href="">
                    January 01, 2045
                  </a>
                </div>
                <a className="h4 m-0 text-white" href="">
                  Sanctus amet sed ipsum lorem
                </a>
              </div>
            </div>
            <div
              className="position-relative overflow-hidden m-2 "
              style={{ height: 300 }}
            >
              <img
                className="img-fluid w-100 h-100"
                src={require("./img/news-300x300-5.jpg")}
                style={{ objectFit: "cover" }}
              />
              <div className="overlay">
                <div className="mb-1" style={{ fontSize: 13 }}>
                  <a className="text-white" href="">
                    Technology
                  </a>
                  <span className="px-1 text-white">/</span>
                  <a className="text-white" href="">
                    January 01, 2045
                  </a>
                </div>
                <a className="h4 m-0 text-white" href="">
                  Sanctus amet sed ipsum lorem
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Featured;
