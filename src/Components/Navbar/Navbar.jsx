import React from "react";
import "./Nav.css";
import img from "../../Images/img";

const Navbar = () => {
  return (
    <>
      <div className="container">
        <div className="container2">
          <div className="Navbar">
            <div className="img">
              <img src={img.Logo} alt="" style={{marginTop:"13px"}} />
            </div>
            <div className="link">
              <ul>
                <li>
                  <button>Home</button>
                </li>
                <li>
                  <button>Frature</button>
                </li>
                <li>
                  <button>Service</button>
                </li>
                <li>
                  <button>Listed</button>
                </li>
                <li>
                  <button>Contact</button>
                </li>
              </ul>
            </div>
            <div className="sinup register">
              <button>Sign Up </button>
              <button id="regbtn">Register</button>
            </div>
          </div>

          <div className="header">
            <div className="content">
              <h4>Welcome to Besnik Agency</h4>
              <h1>Discover a place you'll love to live.</h1>
              <p>
                get the best real estate deals first, before they hit the mass
                market! HOT FORECLOSURE DEALS with one simple search
              </p>
              <button>More About Us</button>
            </div>
            <div className="headerimg">
              <img src={img.house} alt="" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
