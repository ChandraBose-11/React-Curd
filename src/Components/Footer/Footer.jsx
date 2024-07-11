import React from "react";
import { Link } from "react-router-dom";
import { FaInstagramSquare } from "react-icons/fa";
import { FaSquareFacebook } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { RiTwitterXLine } from "react-icons/ri";
const Footer = () => {
  return (
    <div>
      <footer className="py-5 bg-dark">
        <div className="container">
          <div className="card-body text-center">
            <h4 className="card-title m-0 text-center text-white">
              Curd Operation Using Axios
            </h4>

            <h4 className="card-text m-0 text-center text-white">
              Copyright © Chandru Website 2023 All rights reserved
            </h4>
            <h4 className="card-text m-0 text-center text-white">
              Find me on social media.
            </h4>
            <p className="card-text m-0 text-center text-white">
            <FaInstagramSquare /> <FaSquareFacebook/> <FaLinkedin/> <RiTwitterXLine/>
            </p>
            <p></p>
            <Link to={'/'} className="btn btn-warning">
              Back to Home
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
