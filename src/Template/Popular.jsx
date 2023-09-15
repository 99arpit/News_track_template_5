import React from "react";

const Popular = () => {
  return (
    <div className="container-fluid py-3">
      <div className="container">
        <div className="row">
          <div className="col-lg-8">
            <div className="row mb-3">
              <div className="col-12">
                <div className="d-flex align-items-center justify-content-between bg-light py-2 px-4 mb-3">
                  <h3 className="m-0">Popular</h3>
                  <a
                    className="text-secondary font-weight-medium text-decoration-none"
                    href=""
                  >
                    View All
                  </a>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="position-relative mb-3">
                  <img
                    className="img-fluid w-100"
                    src={require("./img/news-500x280-2.jpg")}
                    style={{ objectFit: "cover" }}
                  />
                  <div className="overlay position-relative bg-light">
                    <div className="mb-2" style={{ fontSize: 14 }}>
                      <a href="">Technology</a>
                      <span className="px-1">/</span>
                      <span>January 01, 2045</span>
                    </div>
                    <a className="h4" href="">
                      Est stet amet ipsum stet clita rebum duo
                    </a>
                    <p className="m-0">
                      Rebum dolore duo et vero ipsum clita, est ea sed duo diam
                      ipsum, clita at justo, lorem amet vero eos sed sit...
                    </p>
                  </div>
                </div>
                <div className="d-flex mb-3">
                  <img
                    src={require("./img/news-100x100-1.jpg")}
                    style={{ width: 100, height: 100, objectFit: "cover" }}
                  />
                  <div
                    className="w-100 d-flex flex-column justify-content-center bg-light px-3"
                    style={{ height: 100 }}
                  >
                    <div className="mb-1" style={{ fontSize: 13 }}>
                      <a href="">Technology</a>
                      <span className="px-1">/</span>
                      <span>January 01, 2045</span>
                    </div>
                    <a className="h6 m-0" href="">
                      Lorem ipsum dolor sit amet consec adipis elit
                    </a>
                  </div>
                </div>
                <div className="d-flex mb-3">
                  <img
                    // src="img/news-100x100-2.jpg"
                    src={require("./img/news-100x100-2.jpg")}
                    style={{ width: 100, height: 100, objectFit: "cover" }}
                  />
                  <div
                    className="w-100 d-flex flex-column justify-content-center bg-light px-3"
                    style={{ height: 100 }}
                  >
                    <div className="mb-1" style={{ fontSize: 13 }}>
                      <a href="">Technology</a>
                      <span className="px-1">/</span>
                      <span>January 01, 2045</span>
                    </div>
                    <a className="h6 m-0" href="">
                      Lorem ipsum dolor sit amet consec adipis elit
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="position-relative mb-3">
                  <img
                    className="img-fluid w-100"
                    src={require("./img/news-500x280-3.jpg")}
                    style={{ objectFit: "cover" }}
                  />
                  <div className="overlay position-relative bg-light">
                    <div className="mb-2" style={{ fontSize: 14 }}>
                      <a href="">Technology</a>
                      <span className="px-1">/</span>
                      <span>January 01, 2045</span>
                    </div>
                    <a className="h4" href="">
                      Est stet amet ipsum stet clita rebum duo
                    </a>
                    <p className="m-0">
                      Rebum dolore duo et vero ipsum clita, est ea sed duo diam
                      ipsum, clita at justo, lorem amet vero eos sed sit...
                    </p>
                  </div>
                </div>
                <div className="d-flex mb-3">
                  <img
                    src={require("./img/news-100x100-3.jpg")}
                    style={{ width: 100, height: 100, objectFit: "cover" }}
                  />
                  <div
                    className="w-100 d-flex flex-column justify-content-center bg-light px-3"
                    style={{ height: 100 }}
                  >
                    <div className="mb-1" style={{ fontSize: 13 }}>
                      <a href="">Technology</a>
                      <span className="px-1">/</span>
                      <span>January 01, 2045</span>
                    </div>
                    <a className="h6 m-0" href="">
                      Lorem ipsum dolor sit amet consec adipis elit
                    </a>
                  </div>
                </div>
                <div className="d-flex mb-3">
                  <img
                    src={require("./img/news-100x100-4.jpg")}
                    style={{ width: 100, height: 100, objectFit: "cover" }}
                  />
                  <div
                    className="w-100 d-flex flex-column justify-content-center bg-light px-3"
                    style={{ height: 100 }}
                  >
                    <div className="mb-1" style={{ fontSize: 13 }}>
                      <a href="">Technology</a>
                      <span className="px-1">/</span>
                      <span>January 01, 2045</span>
                    </div>
                    <a className="h6 m-0" href="">
                      Lorem ipsum dolor sit amet consec adipis elit
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="mb-3 pb-3">
              <a href="">
                <img
                  className="img-fluid w-100"
                  src="img/ads-700x70.jpg"
                  alt=""
                />
              </a>
            </div>
            <div className="row">
              <div className="col-12">
                <div className="d-flex align-items-center justify-content-between bg-light py-2 px-4 mb-3">
                  <h3 className="m-0">Latest</h3>
                  <a
                    className="text-secondary font-weight-medium text-decoration-none"
                    href=""
                  >
                    View All
                  </a>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="position-relative mb-3">
                  <img
                    className="img-fluid w-100"
                    src={require("./img/news-500x280-5.jpg")}
                    style={{ objectFit: "cover" }}
                  />
                  <div className="overlay position-relative bg-light">
                    <div className="mb-2" style={{ fontSize: 14 }}>
                      <a href="">Technology</a>
                      <span className="px-1">/</span>
                      <span>January 01, 2045</span>
                    </div>
                    <a className="h4" href="">
                      Est stet amet ipsum stet clita rebum duo
                    </a>
                    <p className="m-0">
                      Rebum dolore duo et vero ipsum clita, est ea sed duo diam
                      ipsum, clita at justo, lorem amet vero eos sed sit...
                    </p>
                  </div>
                </div>
                <div className="d-flex mb-3">
                  <img
                    src={require("./img/news-100x100-5.jpg")}
                    style={{ width: 100, height: 100, objectFit: "cover" }}
                  />
                  <div
                    className="w-100 d-flex flex-column justify-content-center bg-light px-3"
                    style={{ height: 100 }}
                  >
                    <div className="mb-1" style={{ fontSize: 13 }}>
                      <a href="">Technology</a>
                      <span className="px-1">/</span>
                      <span>January 01, 2045</span>
                    </div>
                    <a className="h6 m-0" href="">
                      Lorem ipsum dolor sit amet consec adipis elit
                    </a>
                  </div>
                </div>
                <div className="d-flex mb-3">
                  <img
                    src={require("./img/news-100x100-1.jpg")}
                    style={{ width: 100, height: 100, objectFit: "cover" }}
                  />
                  <div
                    className="w-100 d-flex flex-column justify-content-center bg-light px-3"
                    style={{ height: 100 }}
                  >
                    <div className="mb-1" style={{ fontSize: 13 }}>
                      <a href="">Technology</a>
                      <span className="px-1">/</span>
                      <span>January 01, 2045</span>
                    </div>
                    <a className="h6 m-0" href="">
                      Lorem ipsum dolor sit amet consec adipis elit
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="position-relative mb-3">
                  <img
                    className="img-fluid w-100"
                    src={require("./img/news-500x280-6.jpg")}
                    style={{ objectFit: "cover" }}
                  />
                  <div className="overlay position-relative bg-light">
                    <div className="mb-2" style={{ fontSize: 14 }}>
                      <a href="">Technology</a>
                      <span className="px-1">/</span>
                      <span>January 01, 2045</span>
                    </div>
                    <a className="h4" href="">
                      Est stet amet ipsum stet clita rebum duo
                    </a>
                    <p className="m-0">
                      Rebum dolore duo et vero ipsum clita, est ea sed duo diam
                      ipsum, clita at justo, lorem amet vero eos sed sit...
                    </p>
                  </div>
                </div>
                <div className="d-flex mb-3">
                  <img
                    src={require("./img/news-100x100-2.jpg")}
                    style={{ width: 100, height: 100, objectFit: "cover" }}
                  />
                  <div
                    className="w-100 d-flex flex-column justify-content-center bg-light px-3"
                    style={{ height: 100 }}
                  >
                    <div className="mb-1" style={{ fontSize: 13 }}>
                      <a href="">Technology</a>
                      <span className="px-1">/</span>
                      <span>January 01, 2045</span>
                    </div>
                    <a className="h6 m-0" href="">
                      Lorem ipsum dolor sit amet consec adipis elit
                    </a>
                  </div>
                </div>
                <div className="d-flex mb-3">
                  <img
                    src={require("./img/news-100x100-3.jpg")}
                    style={{ width: 100, height: 100, objectFit: "cover" }}
                  />
                  <div
                    className="w-100 d-flex flex-column justify-content-center bg-light px-3"
                    style={{ height: 100 }}
                  >
                    <div className="mb-1" style={{ fontSize: 13 }}>
                      <a href="">Technology</a>
                      <span className="px-1">/</span>
                      <span>January 01, 2045</span>
                    </div>
                    <a className="h6 m-0" href="">
                      Lorem ipsum dolor sit amet consec adipis elit
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 pt-3 pt-lg-0">
            {/* Social Follow Start */}
            <div className="pb-3">
              <div className="bg-light py-2 px-4 mb-3">
                <h3 className="m-0">Follow Us</h3>
              </div>
              <div className="d-flex mb-3">
                <a
                  href=""
                  className="d-block w-50 py-2 px-3 text-white text-decoration-none mr-2"
                  style={{ background: "#39569E" }}
                >
                  <small className="fab fa-facebook-f mr-2" />
                  <small>12,345 Fans</small>
                </a>
                <a
                  href=""
                  className="d-block w-50 py-2 px-3 text-white text-decoration-none ml-2"
                  style={{ background: "#52AAF4" }}
                >
                  <small className="fab fa-twitter mr-2" />
                  <small>12,345 Followers</small>
                </a>
              </div>
              <div className="d-flex mb-3">
                <a
                  href=""
                  className="d-block w-50 py-2 px-3 text-white text-decoration-none mr-2"
                  style={{ background: "#0185AE" }}
                >
                  <small className="fab fa-linkedin-in mr-2" />
                  <small>12,345 Connects</small>
                </a>
                <a
                  href=""
                  className="d-block w-50 py-2 px-3 text-white text-decoration-none ml-2"
                  style={{ background: "#C8359D" }}
                >
                  <small className="fab fa-instagram mr-2" />
                  <small>12,345 Followers</small>
                </a>
              </div>
              <div className="d-flex mb-3">
                <a
                  href=""
                  className="d-block w-50 py-2 px-3 text-white text-decoration-none mr-2"
                  style={{ background: "#DC472E" }}
                >
                  <small className="fab fa-youtube mr-2" />
                  <small>12,345 Subscribers</small>
                </a>
                <a
                  href=""
                  className="d-block w-50 py-2 px-3 text-white text-decoration-none ml-2"
                  style={{ background: "#1AB7EA" }}
                >
                  <small className="fab fa-vimeo-v mr-2" />
                  <small>12,345 Followers</small>
                </a>
              </div>
            </div>
            {/* Social Follow End */}
            {/* Newsletter Start */}
            <div className="pb-3">
              <div className="bg-light py-2 px-4 mb-3">
                <h3 className="m-0">Newsletter</h3>
              </div>
              <div className="bg-light text-center p-4 mb-3">
                <p>
                  Aliqu justo et labore at eirmod justo sea erat diam dolor diam
                  vero kasd
                </p>
                <div className="input-group" style={{ width: "100%" }}>
                  <input
                    type="text"
                    className="form-control form-control-lg"
                    placeholder="Your Email"
                  />
                  <div className="input-group-append">
                    <button className="btn btn-primary">Sign Up</button>
                  </div>
                </div>
                <small>Sit eirmod nonumy kasd eirmod</small>
              </div>
            </div>
            {/* Newsletter End */}
            {/* Ads Start */}
            <div className="mb-3 pb-3">
              <a href="">
                <img
                  className="img-fluid"
                  src={require("./img/news-500x280-4.jpg")}
                  alt=""
                />
              </a>
            </div>
            {/* Ads End */}
            {/* Popular News Start */}
            <div className="pb-3">
              <div className="bg-light py-2 px-4 mb-3">
                <h3 className="m-0">Trending</h3>
              </div>
              <div className="d-flex mb-3">
                <img
                  src={require("./img/news-100x100-1.jpg")}
                  style={{ width: 100, height: 100, objectFit: "cover" }}
                />
                <div
                  className="w-100 d-flex flex-column justify-content-center bg-light px-3"
                  style={{ height: 100 }}
                >
                  <div className="mb-1" style={{ fontSize: 13 }}>
                    <a href="">Technology</a>
                    <span className="px-1">/</span>
                    <span>January 01, 2045</span>
                  </div>
                  <a className="h6 m-0" href="">
                    Lorem ipsum dolor sit amet consec adipis elit
                  </a>
                </div>
              </div>
              <div className="d-flex mb-3">
                <img
                  src={require("./img/news-100x100-2.jpg")}
                  style={{ width: 100, height: 100, objectFit: "cover" }}
                />
                <div
                  className="w-100 d-flex flex-column justify-content-center bg-light px-3"
                  style={{ height: 100 }}
                >
                  <div className="mb-1" style={{ fontSize: 13 }}>
                    <a href="">Technology</a>
                    <span className="px-1">/</span>
                    <span>January 01, 2045</span>
                  </div>
                  <a className="h6 m-0" href="">
                    Lorem ipsum dolor sit amet consec adipis elit
                  </a>
                </div>
              </div>
              <div className="d-flex mb-3">
                <img
                  src={require("./img/news-100x100-3.jpg")}
                  style={{ width: 100, height: 100, objectFit: "cover" }}
                />
                <div
                  className="w-100 d-flex flex-column justify-content-center bg-light px-3"
                  style={{ height: 100 }}
                >
                  <div className="mb-1" style={{ fontSize: 13 }}>
                    <a href="">Technology</a>
                    <span className="px-1">/</span>
                    <span>January 01, 2045</span>
                  </div>
                  <a className="h6 m-0" href="">
                    Lorem ipsum dolor sit amet consec adipis elit
                  </a>
                </div>
              </div>
              <div className="d-flex mb-3">
                <img
                  src={require("./img/news-100x100-4.jpg")}
                  style={{ width: 100, height: 100, objectFit: "cover" }}
                />
                <div
                  className="w-100 d-flex flex-column justify-content-center bg-light px-3"
                  style={{ height: 100 }}
                >
                  <div className="mb-1" style={{ fontSize: 13 }}>
                    <a href="">Technology</a>
                    <span className="px-1">/</span>
                    <span>January 01, 2045</span>
                  </div>
                  <a className="h6 m-0" href="">
                    Lorem ipsum dolor sit amet consec adipis elit
                  </a>
                </div>
              </div>
              <div className="d-flex mb-3">
                <img
                  src={require("./img/news-100x100-5.jpg")}
                  style={{ width: 100, height: 100, objectFit: "cover" }}
                />
                <div
                  className="w-100 d-flex flex-column justify-content-center bg-light px-3"
                  style={{ height: 100 }}
                >
                  <div className="mb-1" style={{ fontSize: 13 }}>
                    <a href="">Technology</a>
                    <span className="px-1">/</span>
                    <span>January 01, 2045</span>
                  </div>
                  <a className="h6 m-0" href="">
                    Lorem ipsum dolor sit amet consec adipis elit
                  </a>
                </div>
              </div>
            </div>
            {/* Popular News End */}
            {/* Tags Start */}
            <div className="pb-3">
              <div className="bg-light py-2 px-4 mb-3">
                <h3 className="m-0">Tags</h3>
              </div>
              <div className="d-flex flex-wrap m-n1">
                <a href="" className="btn btn-sm btn-outline-secondary m-1">
                  Politics
                </a>
                <a href="" className="btn btn-sm btn-outline-secondary m-1">
                  Business
                </a>
                <a href="" className="btn btn-sm btn-outline-secondary m-1">
                  Corporate
                </a>
                <a href="" className="btn btn-sm btn-outline-secondary m-1">
                  Sports
                </a>
                <a href="" className="btn btn-sm btn-outline-secondary m-1">
                  Health
                </a>
                <a href="" className="btn btn-sm btn-outline-secondary m-1">
                  Education
                </a>
                <a href="" className="btn btn-sm btn-outline-secondary m-1">
                  Science
                </a>
                <a href="" className="btn btn-sm btn-outline-secondary m-1">
                  Technology
                </a>
                <a href="" className="btn btn-sm btn-outline-secondary m-1">
                  Foods
                </a>
                <a href="" className="btn btn-sm btn-outline-secondary m-1">
                  Entertainment
                </a>
                <a href="" className="btn btn-sm btn-outline-secondary m-1">
                  Travel
                </a>
                <a href="" className="btn btn-sm btn-outline-secondary m-1">
                  Lifestyle
                </a>
              </div>
            </div>
            {/* Tags End */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Popular;
