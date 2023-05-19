import React from 'react';
import IMG from "../../assets/annette.png";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div className='background'>
      <nav className="navbar navbar-expand-lg navbar-light ">
        <a className="navbar-brand" href="#home">
          <img
            src={IMG}
            width="30"
            height="30"
            className="d-inline-block align-top "
            alt="Your Name"
            style={{borderRadius: "100%"}}
          />
          {' Annette Black'}
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item mx-2">
              <a className="nav-link" >Programs</a>
            </li>
            <li className="nav-item mx-2">
              <a className="nav-link" >Retreats</a>
            </li>
            <li className="nav-item mx-2">
              <a className="nav-link" >Blogs</a>
            </li>
            <li className="nav-item mx-2">
              <a className="nav-link" >Contact us</a>
            </li>
            <li className="nav-item mx-2 px-2 login_div">
              <a className="nav-link" >Login</a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  )
}

export default Navbar;
