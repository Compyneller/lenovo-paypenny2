import React from "react";
import animate from "../../Assets/Online transactions.gif";
import "./Why.scss";

const Why = () => {
  return (
    <div className="whyMainContainer text-center">
      <div className="container">
        <h1>Why Choose Us?</h1>
        <div className="row ">
          <div className="col-12 col-lg-6 whySideImage">
            <img src={animate} className="w-100" alt="" />
          </div>
          <div className="col-12 col-lg-6 whySideCard">
            <img
              src="https://img.icons8.com/external-flaticons-lineal-color-flat-icons/344/external-fast-web-hosting-flaticons-lineal-color-flat-icons.png"
              alt=""
              data-aos="fade-down"
            />
            <h3 data-aos="fade-down">We're Fast</h3>
            <p data-aos="fade-down">
              90% of our transactions are authorized in minutes.
            </p>
            <br />
            <br />
            <img
              src="https://img.icons8.com/external-flaticons-flat-flat-icons/344/external-safe-skincare-flaticons-flat-flat-icons.png"
              alt=""
              data-aos="fade-up"
            />
            <h3 data-aos="fade-up">We’re Safe</h3>
            <p className="w-75 " data-aos="fade-up">
              Our industry-leading technology protects your Crypto and
              guarantees it arrives safely every time.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Why;
