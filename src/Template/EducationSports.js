import { current } from "@reduxjs/toolkit";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";
// import ReactPaginate from "react-paginate";
const EducationSports = ({ agencyDetails }) => {
  const [data, setData] = useState([]);
  const [fetch, setFetch] = useState(false);
  const navigate = useNavigate();

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
  const getCategories = async () => {
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
  // console.log(input, "input");
  useEffect(() => {
    getCategories();
    getData(input);
  }, [categories?.length]);

  // console.log(data);

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
    <div className="container" style={{ textAlign: "center" }}>
      <div className="row">
        {fetch &&
          data.map((item, index) => {
            return (
              <div key={index} className="col-lg-12 py-3 ">
                <div className="bg-light py-2 px-4 mb-3">
                  {item.data.length > 0 && (
                    <h3 className="m-0">
                      <Link
                        style={{ color: "black" }}
                        to={`/${agencyDetails._id}/Category/${item.category}`}
                      >
                        {getCategoryName(item.category)}
                      </Link>
                    </h3>
                  )}
                </div>

                <div
                  // style={{
                  //   justifyContent: "space-between",
                  // }}
                  className="row  "
                >
                  {item.data
                    .reverse()
                    .slice(0, 2)
                    .map((news, index) => {
                      return (
                        <div
                          key={index}
                          className="position-relative col-sm-12 col-md-6"
                          style={{
                            height: "300px",
                          }}
                          onClick={() => {
                            // console.log("Img clicked");
                            navigate(
                              `/${agencyDetails._id}/DetailedNews/${news._id}`,
                              {
                                state: {
                                  item: news,
                                  agencyDetails: agencyDetails,
                                },
                              }
                            );
                          }}
                        >
                          <img
                            className="img-fluid w-100 h-75"
                            // src={news.image}
                            src={`http://174.138.101.222:8080${news.image}`}
                            style={{
                              // objectFit: "cover",
                              // height: "100%",
                              width: "100%",

                              boxShadow: "0px 0px 10px 0px rgba(0,0,0,0.1)",
                              borderRadius: "1rem 1rem 0 0",
                            }}
                          />
                          <div
                            className="overlay position-relative bg-light "
                            style={{
                              borderRadius: "0 0 1rem 1rem",
                              boxShadow: "0px 0px 10px 0px rgba(0,0,0,0.1)",
                              height: "20%",
                            }}
                          >
                            <div className="mb-2" style={{ fontSize: 13 }}>
                              <span>{formatDate(news.updatedAt)}</span>
                            </div>
                            <p className=" m-0" href="">
                              {news.title}
                            </p>
                          </div>
                        </div>
                      );
                    })}
                </div>
              </div>
            );
          })}
          {/* <div>
            <ReactPaginate 







            />
          </div> */}

      </div>
    </div>
  </>
  );
};

export default EducationSports;
