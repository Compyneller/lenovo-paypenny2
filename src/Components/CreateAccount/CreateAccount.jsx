import React from "react";
import "./CreateAccount.scss";

const CreateAccount = () => {
  return (
    <div className="CreateAccountMainContainer">
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-6 col-lg-3">
            <div className="midCard" data-aos="fade-up">
              <img
                src="https://img.icons8.com/fluency/344/guest-male.png"
                alt=""
              />
              <h5>Create your account</h5>
              <p>
                Register online, enter your personal details for ID
                verification. Make sure what you enter matches exactly with your
                identification documents.
              </p>
            </div>
          </div>
          <div className="col-12 col-md-6 col-lg-3">
            <div className="midCard" data-aos="fade-down">
              <img
                src="https://img.icons8.com/external-itim2101-flat-itim2101/344/external-select-business-recruitment-itim2101-flat-itim2101-3.png"
                alt=""
              />
              <h5>Choose method</h5>
              <p>
                We’ll show you the exchange rate and you Select the Method to
                add the Crypto to your wallet.
              </p>
            </div>
          </div>
          <div className="col-12 col-md-6 col-lg-3">
            <div className="midCard" data-aos="fade-up">
              <img
                src="https://img.icons8.com/flat-round/344/lock-file.png"
                alt=""
              />
              <h5>Input receiver details</h5>
              <p>Tell us the details of the person receiving the Crypto.</p>
            </div>
          </div>
          <div className="col-12 col-md-6 col-lg-3">
            <div className="midCard" data-aos="fade-down">
              <img
                src="https://img.icons8.com/external-flaticons-flat-flat-icons/344/external-send-contact-us-flaticons-flat-flat-icons.png"
                alt=""
              />
              <h5>Confirm and send</h5>
              <p>
                Verify and cross check everything is correct and send your
                Crypto. That’s it. We’ll take care of the rest and tell you when
                Crypto is transferred.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateAccount;
