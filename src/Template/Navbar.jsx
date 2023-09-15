import axios from "axios";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Navbar = () => {
  const agencyDetails = useSelector((state) => {
    return state.User;
  });

  const [ad, setAd] = useState();
  // console.log(agencyDetails);

  const [categories, setCategory] = useState();
  const getCategories = async () => {
    try {
      const response = await axios.get(
        "http://174.138.101.222:8080/getmastercategories"
      );
      // console.log(response.data.data, "categories");
      setCategory(response.data.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getCategories();
  }, []);

  return (
    <div className="container-fluid p-0 mb-3">
      <nav  className="navbar navbar-expand-lg bg-light navbar-light py-2 py-lg-0 px-lg px-sm-1">
        <a href="" className="navbar-brand d-block d-lg-none">
          <h1 className="m-0 display-5 ">
            <span className="text-danger">
              {agencyDetails.publication_name}
            </span>
          </h1>
        </a>
        <button
          type="button"
          className="navbar-toggler"
          data-toggle="collapse"
          data-target="#navbarCollapse"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div
          style={{ backgroundColor: "blue" }}
          className="collapse navbar-collapse justify-content-between px-0 px-lg-3"
          id="navbarCollapse"
        >
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr" }}>
            <div>
              <img
                src={`http://174.138.101.222:8080${agencyDetails.logo_small}`}
                alt=""
                width={"50%"}
                height={"100%"}
              />
            </div>
            <div style={{ paddingLeft: "250%" }}>
              <div className="navbar-nav mr-auto py-0">
                <Link
                  style={{ color: "white" }}
                  to={`/${agencyDetails._id}`}
                  className="nav-item nav-link active"
                >
                  Home
                </Link>

                <a
                  style={{ color: "white" }}
                  href="single.html"
                  className="nav-item nav-link"
                >
                  Single News
                </a>
                <div className="nav-item dropdown">
                  <a
                    style={{ color: "white" }}
                    href="#"
                    className="nav-link dropdown-toggle"
                    data-bs-toggle="dropdown"
                  >
                    Categories
                  </a>
                  <div className="dropdown-menu rounded-0 m-0">
                    {categories &&
                      categories.map((item, index) => {
                        return (
                          <Link
                            to={`/${agencyDetails._id}/Category/${item.categories_Name_Url}`}
                            state={agencyDetails}
                            key={index}
                            className="dropdown-item"
                          >
                            {item.categories_Name_English}
                          </Link>
                        );
                      })}
                  </div>
                </div>

                <a
                  style={{ color: "white" }}
                  href="contact.html"
                  className="nav-item nav-link"
                >
                  Contact
                </a>
              </div>
            </div>
          </div>
          {/* <div
            className="input-group ml-auto"
            style={{ width: "100%", maxWidth: 300 }}
          >
            <input type="text" className="form-control" placeholder="Keyword" />
            <div className="input-group-append">
              <button className="input-group-text text-secondary">
                <i className="fa fa-search" />
              </button>
            </div>
          </div> */}
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
