import React from "react";
import "./Benefits.scss";

const Benefits = () => {
  return (
    <div className="BenefitsMainContainer">
      <div className="container">
        <h1 className="text-light mb-5">
          Benefits of sending Crypto with Paypenny
        </h1>
        <div className="row">
          <div
            className="col-12 col-md-6 col-lg-4 my-5"
            data-aos="zoom-in-right">
            <div
              className="benefitsCards
            ">
              <img
                src="https://img.icons8.com/external-flaticons-lineal-color-flat-icons/344/external-government-quarantine-flaticons-lineal-color-flat-icons-2.png"
                alt=""
              />
              <h5>Govt Reg & Regulated</h5>
              <p>
                Our company is registered with FINTRAC which clearly mentions
                how healthy our paypenny ecosystem is.
              </p>
            </div>
          </div>
          <div className="col-12 col-md-6 col-lg-4 my-5" data-aos="zoom-out">
            <div
              className="benefitsCards
            ">
              <img
                src="https://img.icons8.com/arcade/344/experimental-marker-arcade.png"
                alt=""
              />
              <h5>Anytime Anywhere</h5>
              <p>
                We are available for you every time that's the reason we have
                made our system powerful and anyone can access it anytime
                anywhere.
              </p>
            </div>
          </div>
          <div
            className="col-12 col-md-6 col-lg-4 my-5"
            data-aos="zoom-in-left">
            <div
              className="benefitsCards
            ">
              <img
                src="https://img.icons8.com/external-flaticons-lineal-color-flat-icons/344/external-rate-advertising-agency-flaticons-lineal-color-flat-icons.png"
                alt=""
              />
              <h5>Better Rates</h5>
              <p>
                Sending Crypto to your home is comparatively lower than the
                banks, get the best rates at ease!
              </p>
            </div>
          </div>
        </div>
        <div className="row">
          <div
            className="col-12 col-md-6 col-lg-4 my-5"
            data-aos="zoom-in-right">
            <div
              className="benefitsCards
            ">
              <img
                src="https://img.icons8.com/arcade/344/experimental-easy-arcade.png"
                alt=""
              />
              <h5>Easy & Convenient</h5>
              <p>
                Get started in minutes with our simple signup process. Remit
                Crypto worldwide on the go with our mobile app.
              </p>
            </div>
          </div>
          <div className="col-12 col-md-6 col-lg-4 my-5" data-aos="zoom-out">
            <div
              className="benefitsCards
            ">
              <img
                src="https://img.icons8.com/external-filled-outline-berkahicon/344/external-Track-fitness-filled-outline-berkahicon.png"
                alt=""
              />
              <h5>Track your transfer online</h5>
              <p>
                Don't lose sight of your Crypto. Track your transfer at every
                stage.
              </p>
            </div>
          </div>
          <div
            className="col-12 col-md-6 col-lg-4 my-5"
            data-aos="zoom-in-left">
            <div
              className="benefitsCards
            ">
              <img
                src="https://img.icons8.com/color/344/customer-support.png"
                alt=""
              />
              <h5>Round The Clock Support</h5>
              <p>
                Our amazing customer support team are on standby to help you
                when need them. Get an answer to your question, fast.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Benefits;
