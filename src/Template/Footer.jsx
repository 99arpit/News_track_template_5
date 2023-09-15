import axios from "axios";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import img9 from "../Template/img/Advslider.jpg";


const Footer = ({page_name}) => {
  const agencyDetails = useSelector((state) => {
    return state.User;
  });
  const [ad, setAd] = useState();

  const fetchAd= async ()=>{
    try {
      const response = await axios.get(`http://174.138.101.222:8080/${agencyDetails._id}/${page_name}/Footer/get-Advertisement`)
      // console.log(response.data.data[0])
      setAd(response.data.data[0])
    } catch (error) {
      console.log(error)
    }
  }
  useEffect(()=>{
    fetchAd();
  },[agencyDetails,page_name])
  return (
    <>
      <div className="container-fluid bg-light pt-5 px-sm-3 px-md-5">
        <div className="row">
          <div className="col-lg-4 col-md-6 mb-5">
            <a href="index.html" className="navbar-brand">
              <h1
                className="mb-2 mt-n2 display-8 text-danger"
                style={{ wordBreak: "break-word" }}
              >
                {/* <span className="text-danger"> */}
                {agencyDetails.publication_name}
                {/* </span> */}
              </h1>
            </a>
            <p>{agencyDetails.publisher_BIO}</p>
            <div className="d-flex justify-content-start mt-4">
              <a
                className="btn btn-outline-secondary text-center mr-2 px-0"
                style={{ width: 38, height: 38 }}
                href={`https://${agencyDetails.pub_social_twitter}`}
                target="_blank"
              >
                <i className="fab fa-twitter" />
              </a>
              <a
                className="btn btn-outline-secondary text-center mr-2 px-0"
                style={{ width: 38, height: 38 }}
                href={`https://${agencyDetails.pub_social_facebook}`}
                target="_blank"
              >
                <i className="fab fa-facebook-f" />
              </a>
              <a
                className="btn btn-outline-secondary text-center mr-2 px-0"
                style={{ width: 38, height: 38 }}
                href={`https://${agencyDetails.pub_social_linkedin}`}
                target="_blank"
              >
                <i className="fab fa-linkedin-in" />
              </a>
              <a
                className="btn btn-outline-secondary text-center mr-2 px-0"
                style={{ width: 38, height: 38 }}
                href={`https://${agencyDetails.pub_social_instagram}`}
                target="_blank"
              >
                <i className="fab fa-instagram" />
              </a>
              <a
                className="btn btn-outline-secondary text-center mr-2 px-0"
                style={{ width: 38, height: 38 }}
                href={`https://${agencyDetails.pub_social_youtube}`}
                target="_blank"
              >
                <i className="fab fa-youtube" />
              </a>
            </div>
          </div>



          <div
            className="col-lg-6 col-md-6 mb-5"
          >
             {
            ad?.script.length>0 && <p className="mb-0" style={{border:'1px solid black', width:'100%',height:'350px',overflow:'hidden'}}>{ad?.script}</p>
          }
          {
            ad?.text.length>0 && <p className="mb-0" style={{border:'1px solid black',width:'100%',height:'350px',overflow:'hidden'}}>{ad?.text}</p>
          }
           {
            ad?.image.length>0 && <img style={{width:'90%',height:'100%', maxHeight: "270px",paddingLeft:'10%'}} src={img9} />
          } 

          
          </div> 





          <div className="col-lg-2 col-md-6 mb-5">
            <h4 className="font-weight-bold mb-4">Quick Links</h4>
            <div className="d-flex flex-column justify-content-start">
              <a className="text-secondary mb-2" href="#">
                <i className="fa fa-angle-right text-dark mr-2" />
                About
              </a>
              <a className="text-secondary mb-2" href="#">
                <i className="fa fa-angle-right text-dark mr-2" />
                Advertise
              </a>
              <a className="text-secondary mb-2" href="#">
                <i className="fa fa-angle-right text-dark mr-2" />
                Privacy &amp; policy
              </a>
              <a className="text-secondary mb-2" href="#">
                <i className="fa fa-angle-right text-dark mr-2" />
                Terms &amp; conditions
              </a>
              <a className="text-secondary" href="#">
                <i className="fa fa-angle-right text-dark mr-2" />
                Contact
              </a>
            </div>
          </div>
          

        
        </div>
      </div>
      {/* <div className="container-fluid py-4 px-sm-3 px-md-5"> */}
        {/* <p className="m-0 text-center"> */}
          {/* ©{" "}
          <a className="font-weight-bold text-danger" href="#">
            www.newstracklive.com
          </a>
          . All Rights Reserved. */}
          {/*/*** This template is free as long as you keep the footer author’s credit link/attribution link/backlink. If you'd like to use the template without the footer author’s credit link/attribution link/backlink, you can purchase the Credit Removal License from "https://htmlcodex.com/credit-removal". Thank you for your support. *** /*/}
          {/* Designed by{" "}
          <a
            className="font-weight-bold text-danger"
            href="https://www.linkedin.com/in/aman-garg-076012212/"
          >
            Aman Garg (Version 1)
          </a> */}
        {/* </p> */}
      {/* </div> */}
    </>
  );
};

export default Footer;
