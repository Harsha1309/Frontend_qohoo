import React from "react";
import IMG1 from "../../assets/toledo.png";
import IMG2 from "../../assets/pembrone.png";
import IMG3 from "../../assets/naperville.png";
import "./Checkout.css";

const Checkout = () => {
  return (
    <div style={{background: "#C1CFFF"}}>
      <div>
        <h1><b>Checkout my courses</b></h1>
      </div>
      <div className="row px-5">
        <div className="card box1 col-4 " >
          <img className="card-img-top frame_gap" src={IMG1} alt="Card image cap" />
          <div className="card-body">
            <h5 className="card-title"><b>Toledo</b></h5>
            <button className="button_join"><b>Join Now →</b></button>
          </div>
        </div>
        <div className="card box2 col-4 " >
          <img className="card-img-top frame_gap" src={IMG2} alt="Card image cap" />
          <div className="card-body">
            <h5 className="card-title"><b>Pembroke Pines</b></h5>
            <button className="button_join"><b>Join Now →</b></button>
          </div>
        </div>
        <div className="card box3 col-4 " >
          <img className="card-img-top frame_gap" src={IMG3} alt="Card image cap" />
          <div className="card-body">
            <h5 className="card-title"><b>Naperville</b></h5>
            <button className="button_join"><b>Join Now →</b></button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
