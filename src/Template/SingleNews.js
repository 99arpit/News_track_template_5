import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import img9 from "../Template/img/ma.jpg";
import img16 from "../Template/img/go.png";
import img17 from "../Template/img/insta.png";
import img18 from "../Template/img/youtub.png";
import img19 from "../Template/img/twi.png";
import img20 from "../Template/img/linkdin.png";

import {
  FacebookShareButton,
  TwitterShareButton,
  WhatsappShareButton,
  FacebookIcon,
  WhatsappIcon,
  TwitterIcon,
} from "react-share";

const SingleNews = ({ prop }) => {
  const [categories, setCategory] = useState();

  const getCategoryName = (url) => {
    for (let i = 0; i < categories.length; i++) {
      if (categories[i].categories_Name_Url === url) {
        return categories[i].categories_Name_Hindi;
      }
    }
  };

  const getData = async (categories) => {
    try {
      const promises = categories.map((category) =>
        axios.get(
          `http://174.138.101.222:8080/${agencyDetails._id}/get-Postnews/${category}`
        )
      );

      const responses = await Promise.all(promises);

      const newData = responses.map((response, index) => ({
        category: categories[index],
        data: response.data.data,
      }));

      setData((prevData) => [...prevData, ...newData]);
      setFetch(true);

      // console.log("data fetched");
    } catch (error) {
      console.log(error);
    }
  };

  const [input, setInput] = useState([]);
  const getCategorie = async () => {
    try {
      const response = await axios.get(
        "http://174.138.101.222:8080/getmastercategories"
      );
      // console.log(response.data.data, "categories");
      setCategory(response.data.data);

      response.data.data.map((item) => {
        setInput((prev) => [...prev, item.categories_Name_Url]);
      });
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getCategorie();
    getData(input);
  }, [categories?.length]);

  function formatDate(inputDate) {
    // Step 1: Parse the input string into a JavaScript Date object
    const dateObj = new Date(inputDate);

    // Step 2: Extract day, month, and year from the Date object
    const day = dateObj.getUTCDate();
    const month = dateObj.toLocaleString("default", { month: "long" });
    const year = dateObj.getUTCFullYear();

    // Step 3: Format the values into "day month year" format
    const formattedDate = `${day} ${month} ${year}`;
    return formattedDate;
  }

  // console.log(prop);
  const dateConverter = (dateStr) => {
    // const dateStr = "2023-07-08";
    const dateObj = new Date(dateStr);

    // Step 2: Format the date object to the desired format
    const options = {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    };
    const formattedDate = dateObj.toLocaleDateString("en-US", options);

    return formattedDate;
  };
  const getCurrentPageURL = window.location.href;
  const { id } = useParams();

  const [breakingNews, setBreakingNews] = useState();
  const fetchBreakingNews = async () => {
    try {
      const response = await axios.get(
        `http://174.138.101.222:8080/${id}/getBreakingNews`
      );
      // console.log(response.data.data, "breaking");
      setBreakingNews(response.data.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchBreakingNews();
  }, []);

  function formatDate(inputDate) {
    // Step 1: Parse the input string into a JavaScript Date object
    const dateObj = new Date(inputDate);

    // Step 2: Extract day, month, and year from the Date object
    const day = dateObj.getUTCDate();
    const month = dateObj.toLocaleString("default", { month: "long" });
    const year = dateObj.getUTCFullYear();

    // Step 3: Format the values into "day month year" format
    const formattedDate = `${day} ${month} ${year}`;
    return formattedDate;
  }

  return (
    <>
      <>
        <div className="container-fluid py-3">
          <div>
            <div className="row">
              <div>
                <div
                  style={{ display: "flex", justifyContent: "space-between" }}
                >
                  <div
                    style={{
                      width: "30%",
                      backgroundColor: "white",
                      border: "1px solid black",
                      padding: "10px",
                      textAlign: "center",
                      margin: "1%",
                    }}
                  >
                    <div className="bg-light py-2 px-4 mb-3">
                      <h3
                        style={{
                          backgroundColor: "blue",
                          color: "white",
                          textAlign: "center",
                          width: "100%",
                        }}
                        className="m-0"
                      >
                        Trending News
                      </h3>
                    </div>
                    {breakingNews &&
                      breakingNews.map((news, index) => {
                        return (
                          <div
                          key={index}
                          className="d-flex mb-3"
                          style={{ paddingTop: "15%" }}
                        >
                            <img
                              src={
                                news.image
                                  ? `http://174.138.101.222:8080${news.image}`
                                  : `https://www.newsclick.in/sites/default/files/2018-09/xfakenews_0.jpg.pagespeed.ic_.232PSP6q2x_0.jpg`
                              }
                              style={{
                                width: 100,
                                height: 100,
                                objectFit: "fill",
                              }}
                            />
                            <div
                              className="w-100 d-flex flex-column justify-content-center bg-light px-3"
                              style={{ height: 100 }}
                            >
                              <div className="mb-1" style={{ fontSize: 13 }}>
                                <p
                                  className="mb-0"
                                  style={{ display: "inline" }}
                                  href=""
                                >
                                  {news.category}
                                </p>
                                <span className="px-1">/</span>
                                <span>{formatDate(news.updatedAt)}</span>
                              </div>
                              <Link
                                to={`/${id}/DetailedNews/${news._id}`}
                                className="h6 m-0"
                              >
                                {news.title}
                              </Link>
                            </div>
                          </div>
                        );
                      })}

                    <div style={{ paddingTop: "20%" }} className="pb-3">
                      <div className="bg-light py-2 px-4 mb-3">
                        <h3
                          style={{ backgroundColor: "blue", color: "white" }}
                          className="m-0"
                        >
                          Newsletter
                        </h3>
                      </div>
                      <div className="bg-light text-center p-4 mb-3">
                        <p>
                          Aliqu justo et labore at eirmod justo sea erat diam
                          dolor diam vero kasd
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
                  </div>

                  <div
                    style={{
                      width: "60%",
                      backgroundColor: "white",
                      border: "1px solid black",
                      padding: "10px",
                      textAlign: "center",
                      margin: "1%",
                    }}
                  >
                    <div className="  d-flex flex-column justify-content-between">
                      <div className="d-flex align-items-center justify-content-between bg-light py-2 px-4 mb-1">
                        <h3
                          style={{
                            border: "1px solid black",
                            backgroundColor: "blue",
                            width: "100%",
                            textAlign: "center",
                            color: "white",
                            paddingBottom: "1%",
                            paddingTop: "1%",
                          }}
                          className="m-0"
                        >
                          News
                        </h3>
                      </div>

                      <img
                        className="img-fluid w-100"
                        src={`http://174.138.101.222:8080${prop.image}`}
                        style={{ objectFit: "cover", borderRadius: "1rem" }}
                      />
                      <div
                        style={{
                          position: "relative",
                          // left: "85%",
                          float: "right",
                          marginBottom: "10px",
                        }}
                      >
                        <FacebookShareButton
                          url={getCurrentPageURL}
                          quote={prop.title}
                        >
                          <FacebookIcon size={32} round />
                        </FacebookShareButton>
                        <WhatsappShareButton
                          title={prop.title}
                          separator=" "
                          url={getCurrentPageURL}
                        >
                          <WhatsappIcon size={32} round />
                        </WhatsappShareButton>
                        <TwitterShareButton
                          title={prop.title}
                          url={getCurrentPageURL}
                        >
                          <TwitterIcon size={32} round />
                        </TwitterShareButton>
                      </div>

                      <div>
                        <div className="mb-3">
                          <a href="">{prop.category}</a>
                          <span className="px-1">/</span>
                          <span>{dateConverter(prop.schedule_date)}</span>
                        </div>
                        <div>
                          <h3 className="mb-3">{prop.title}</h3>
                          <p
                            style={{
                              fontFamily: "bhaskar",
                              fontSize: "1.5rem",
                            }}
                          >
                            {prop.body}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div
                    style={{
                      width: "30%",
                      backgroundColor: "white",
                      border: "1px solid black",
                      padding: "10px",
                      textAlign: "center",
                      margin: "1%",
                    }}
                  >
                    {" "}
                    <div className=" d-flex flex-column justify-content-between">
                    <div className="d-flex align-items-center justify-content-between bg-light py-2 px-4 mb-1">
                        <h3
                          style={{
                            textAlign: "center",
                    backgroundColor: "blue",
                    width: "100%",
                    color: "white",
                    paddingBottom: "2%",
                    paddingTop: "1%",
                          }}
                          className="m-0"
                        >
                          Categories
                        </h3>
                      </div>
                      {categories &&
                        categories.map((item, index) => {
                          return (
                            <div
                              key={index}
                              className="position-relative overflow-hidden"
                              style={{
                                height: "11%",
                                backgroundColor: "rgb(232, 232, 232)",
                                minHeight: "50px",
                              }}
                              onClick={() =>
                                navigate(
                                  `/${agencyDetails._id}/Category/${item.categories_Name_Url}`,
                                  {
                                    state: { agencyDetails },
                                  }
                                )
                              }
                            >
                              <p className="overlay align-items-center justify-content-center h4 mb-0 text-white text-decoration-none">
                                {item.categories_Name_Hindi}
                              </p>
                            </div>
                          );
                        })}
                    </div>
                    <div style={{ paddingTop: "10%" }}>
                      {" "}
                      <h4
                        style={{
                          backgroundColor: "blue",
                          color: "white",
                          textAlign: "center",
                          paddingTop: "5px",
                          paddingBottom: "5px",
                        }}
                      >
                        Advertisement{" "}
                      </h4>
                    </div>
                    <div>
                      <img
                        style={{
                          paddingLeft: "5%",
                          paddingRight: "5%",
                          height: "100%",
                          width: "100%",
                          paddingTop: "20px",
                        }}
                        src={img9}
                      />
                    </div>{" "}
                    <div style={{ paddingTop: "5%" }}>
                      <h4
                        style={{
                          backgroundColor: "blue",
                          color: "white",
                          textAlign: "center",
                          paddingTop: "5px",
                          paddingBottom: "5px",
                        }}
                      >
                        Social Links
                      </h4>

                      <div style={{ textAlign: "center", paddingTop: "6%" }}>
                        <img
                          style={{
                            height: "90px",
                            width: "80px",
                            // paddingLeft: "10px",
                            paddingTop: "20px",
                          }}
                          src={img16}
                        />

                        <img
                          style={{
                            height: "90px",
                            width: "80px",
                            // paddingLeft: "10px",
                            paddingTop: "20px",
                          }}
                          src={img17}
                        />

                        <img
                          style={{
                            height: "90px",
                            width: "80px",
                            // paddingLeft: "10px",
                            paddingTop: "20px",
                          }}
                          src={img18}
                        />

                        <img
                          style={{
                            height: "90px",
                            width: "80px",
                            // paddingLeft: "10px",
                            paddingTop: "20px",
                          }}
                          src={img20}
                        />

                        <img
                          style={{
                            height: "90px",
                            width: "80px",
                            // paddingLeft: "10px",
                            paddingTop: "20px",
                          }}
                          src={img19}
                        />
                      </div>
                    </div>
                  </div>

                  {/* <div
                    style={{ flex: "1", border: "1px solid black" }}
                    className="pb-3"
                  >
                    <div className="bg-light py-2 px-4 mb-3">
                      <h3 className="m-0">Categories</h3>
                    </div>
                    {breakingNews &&
                      breakingNews.map((news, index) => {
                        return (
                          <div key={index} className="d-flex mb-3">
                            <img
                              src={
                                news.image
                                  ? `http://174.138.101.222:8080${news.image}`
                                  : `https://www.newsclick.in/sites/default/files/2018-09/xfakenews_0.jpg.pagespeed.ic_.232PSP6q2x_0.jpg`
                              }
                              style={{
                                width: 100,
                                height: 100,
                                objectFit: "fill",
                              }}
                            />
                            <div
                              className="w-100 d-flex flex-column justify-content-center bg-light px-3"
                              style={{ height: 100 }}
                            >
                              <div className="mb-1" style={{ fontSize: 13 }}>
                                <p
                                  className="mb-0"
                                  style={{ display: "inline" }}
                                  href=""
                                >
                                  {news.category}
                                </p>
                                <span className="px-1">/</span>
                                <span>{formatDate(news.updatedAt)}</span>
                              </div>
                              <Link
                                to={`/${id}/DetailedNews/${news._id}`}
                                className="h6 m-0"
                              >
                                {news.title}
                              </Link>
                            </div>
                          </div>
                        );
                      })}
                  </div> */}
                </div>
              </div>
              <div className="col-lg-4 pt-3 pt-lg-0">
                {/* Social Follow Start */}
                {/* <div className="pb-3">
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
                </div> */}
                {/* Social Follow End */}
                {/* Newsletter Start */}
                {/* <div className="pb-3">
                  <div className="bg-light py-2 px-4 mb-3">
                    <h3 className="m-0">Newsletter</h3>
                  </div>
                  <div className="bg-light text-center p-4 mb-3">
                    <p>
                      Aliqu justo et labore at eirmod justo sea erat diam dolor
                      diam vero kasd
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
                </div> */}
                {/* Newsletter End */}
                {/* Ads Start */}
                {/* <div className="mb-3 pb-3">
                  <a href="">
                    <img
                      className="img-fluid"
                      src="img/news-500x280-4.jpg"
                      alt=""
                    />
                  </a>
                </div> */}
                {/* Ads End */}
                {/* Popular News Start */}
                {/* <div className="pb-3">
                  <div className="bg-light py-2 px-4 mb-3">
                    <h3 className="m-0">Trending</h3>
                  </div>
                  {breakingNews &&
                    breakingNews.map((news, index) => {
                      return (
                        <div key={index} className="d-flex mb-3">
                          <img
                            src={
                              news.image
                                ? `http://174.138.101.222:8080${news.image}`
                                : `https://www.newsclick.in/sites/default/files/2018-09/xfakenews_0.jpg.pagespeed.ic_.232PSP6q2x_0.jpg`
                            }
                            style={{
                              width: 100,
                              height: 100,
                              objectFit: "fill",
                            }}
                          />
                          <div
                            className="w-100 d-flex flex-column justify-content-center bg-light px-3"
                            style={{ height: 100 }}
                          >
                            <div className="mb-1" style={{ fontSize: 13 }}>
                              <p
                                className="mb-0"
                                style={{ display: "inline" }}
                                href=""
                              >
                                {news.category}
                              </p>
                              <span className="px-1">/</span>
                              <span>{formatDate(news.updatedAt)}</span>
                            </div>
                            <Link
                              to={`/${id}/DetailedNews/${news._id}`}
                              className="h6 m-0"
                            >
                              {news.title}
                            </Link>
                          </div>
                        </div>
                      );
                    })}
                </div> */}
                {/* Popular News End */}
              </div>
            </div>
          </div>
        </div>
      </>
    </>
  );
};

export default SingleNews;
