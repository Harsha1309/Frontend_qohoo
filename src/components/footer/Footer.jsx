import React from 'react'
import IMG from "../../assets/footer.png";
import "./Footer.css";

const Footer = () => {
  return (
    <div className='footer container-fluid row my-2'>
      <div className="fs-1 col-4">
        <h5 className='d-inline'>Powered by </h5>
        <img src={IMG} alt="" />
      </div>
      <div className='col-4'></div>
      <div className="fs-1 col-4">
          <h5 className='d-inline mx-2'>Privacy Policy</h5>
          <h5 className='d-inline mx-2'>Terms & Conditions</h5>
      </div>
    </div>
  )
}

export default Footer
