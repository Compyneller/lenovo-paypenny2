import React from "react";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import "./Blog.scss";

const Section2 = () => {
  return (
    <div className="myPortfolioContainer">
      <Container className="py-5">
        <Row className="g-3">
          <div className="col-12 col-lg-6 d-flex justify-content-around align-items-start flex-column">
            <div
              className=" d-flex justify-content-center align-items-center flex-column"
              style={{
                width: "70px",
                height: "70px",
                borderRadius: "50%",
                background: "#233140",
              }}>
              <img
                src="https://img.icons8.com/material-rounded/344/inconsistency.png"
                height={50}
                width={50}
                alt=""
                style={{ filter: "invert(1)" }}
              />
            </div>
            <h1>How to send money from overseas to India using Paypenny?</h1>
          </div>
          <div className="col-12 col-lg-6">
            <img
              src="https://images.unsplash.com/photo-1497493292307-31c376b6e479?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80"
              alt=""
              className="w-100"
            />
          </div>
        </Row>
        <br />
        <br />
        <p>
          Paypenny is serving thousands of customers on a daily basis. We have
          covered millions of transactions and maintained appropriateness since
          then. That’s the reason our services are making us stand out in the
          market. Following are the steps to use for sending money.
        </p>
        <br />
        <br />
        <Row className="g-3">
          <Col sm={12} md={6} lg={3}>
            <Card className="blog__card">
              <Card.Body>
                <h3>1</h3>
                <br />

                <h3 style={{ fontWeight: "500" }}>
                  {" "}
                  Download the Paypenny App
                </h3>

                <p>
                  The Paypenny app is available on the Android & iOS platforms.
                  A user can download the app from the app store & play store.
                </p>
                <div className="row g-4">
                  <div className="col-6">
                    <a
                      target="_blank"
                      href="https://apps.apple.com/in/app/paypenny/id1545140323">
                      <Button
                        variant="outline-info"
                        style={{ fontSize: "12px" }}>
                        Download iOS
                      </Button>
                    </a>
                  </div>
                  <div className="col-6">
                    <a
                      target="_blank"
                      href="https://play.google.com/store/apps/details?id=com.bhanguz.Paypenny&&hl=en_IN&&gl=US">
                      <Button
                        variant="outline-info"
                        style={{ fontSize: "12px" }}>
                        Download Android
                      </Button>
                    </a>
                  </div>
                </div>
              </Card.Body>
            </Card>
          </Col>
          <Col sm={12} md={6} lg={3}>
            <Card className="blog__card">
              <Card.Body>
                <h3>2</h3>
                <br />

                <h3 style={{ fontWeight: "500" }}>Register yourself</h3>

                <p>
                  After downloading the Paypenny app, signup by entering your
                  number and login into the app for{" "}
                  <a
                    className="text-info"
                    href="https://medium.com/@admin_17494/how-to-set-up-create-a-profile-in-the-paypenny-app-ebe3e1c889e">
                    creating your profile.
                  </a>
                </p>
              </Card.Body>
            </Card>
          </Col>
          <Col sm={12} md={6} lg={3}>
            <Card className="blog__card">
              <Card.Body>
                <h3>3</h3>
                <br />

                <h3 style={{ fontWeight: "500" }}>KYC Verification</h3>

                <p>
                  Now after completely setting up your profile you can do your
                  KYC. The KYC section takes not more than 5 minutes. All you
                  have to do is to submit the live images of your ID & your
                  selfie.{" "}
                  <a
                    className="text-info"
                    href="https://medium.com/@admin_17494/how-to-complete-your-kyc-fa1b2ea70cf8">
                    How to do KYC in the Paypenny app?
                  </a>
                </p>
              </Card.Body>
            </Card>
          </Col>
          <Col sm={12} md={6} lg={3}>
            <Card className="blog__card">
              <Card.Body>
                <h3>4</h3>
                <br />

                <h3 style={{ fontWeight: "500" }}>Send Money to home</h3>

                <p>
                  Congrats! After the successful verification, you have become a
                  Paypenny eligible customer. Now you can{" "}
                  <a
                    className="text-info"
                    href="https://medium.com/@admin_17494/how-to-add-cad-into-your-paypenny-wallet-36f4c94c2538">
                    add money
                  </a>{" "}
                  to your wallet and{" "}
                  <a
                    className="text-info"
                    href="https://medium.com/@admin_17494/how-to-send-inr-d-from-paypenny-app-5cd1b17266">
                    send it to your family
                  </a>
                  .
                </p>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <br />
        <br />
        <p>
          That’s all you have to do to send money from abroad to India easily.
          Download the Paypenny app now.{" "}
        </p>
      </Container>
    </div>
  );
};

export default Section2;
