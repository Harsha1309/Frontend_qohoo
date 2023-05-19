import React from "react";
import IMG1 from "../../assets/header profile.png";
import IMG2 from "../../assets/right sign.png";
import "./Header.css";

const Header = () => {
  return (
    <div className="background">
      <div className="header">
        <div className="row">
          <div className="col-xl-8 col-sm-12 ">
            <img width="auto" src={IMG1} alt="" />
            <div className="row" style={{marginRight:'25px', marginTop:'7px'}}>
              <div className="col-9"></div>
              <div className="col-1">
                <div className='empty_div'></div>
              </div>
              <div className="col-1">
                <div className='empty_div'></div>
              </div>
              <div className="col-1">
                <div className='empty_div'></div>
              </div>
            </div>
          </div>
          <div className="col-xl-4 col-sm-12 " style={{paddingTop:'135px'}}>
            <h1>
              <span style={{ color: "#FB9B43" }}>Get ready</span>{" "}
              <span style={{ color: "#FFFFFF" }}>
                to grow <br /> with us
              </span>{" "}
              ⭐️
            </h1>
            <h5 style={{ color: "#FFFFFF" }}>Start with us today</h5>
            <button className="button_view">
              <b>View all courses ⟶</b>
            </button>
          </div>
        </div>
      </div>
      <div className="row header">
        <div className="col-4">
          <div className="img_div " >
            <img src={IMG2} alt="" />
          </div>
          <div style={{ color: "#FFFFFF",textAlign:'center' }}>500+ happy customers</div>
        </div>
        <div className="col-4">
          <div className="img_div">
            <img src={IMG2} alt="" />
          </div>
          <div style={{ color: "#FFFFFF",textAlign:'center' }}>Learn as you go</div>
        </div>
        <div className="col-4">
          <div className="img_div">
            <img src={IMG2} alt="" />
          </div>
          <div style={{ color: "#FFFFFF",textAlign:'center' }}>Self-paced learning</div>
        </div>
      </div>
    </div>
  );
};

export default Header;
