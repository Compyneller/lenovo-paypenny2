import React from "react";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import "./Blog.scss";

const Section3 = () => {
  return (
    <div className="w-100 bg-light">
      <Container className="py-5">
        <Row className="g-5">
          <Col sm={12} lg={6}>
            <img
              src="https://images.unsplash.com/photo-1558655146-364adaf1fcc9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=Mnw2MzQ2fDB8MXxzZWFyY2h8NXx8YXBwfGVufDB8fHx8MTYzNzA3ODYwNg&ixlib=rb-1.2.1&q=80&w=1080"
              className="w-100"
              alt=""
              height={600}
              style={{ objectFit: "cover" }}
            />
          </Col>
          <Col
            sm={12}
            lg={6}
            className="d-flex flex-column align-items-center justify-content-center">
            <h1>
              How long does it take to transfer money from Canada to India? -
              Paypenny
            </h1>
            <p className="doc__p">
              Paypenny is providing exceptional services to all our customers to
              become their favorite money remittance application.{" "}
              <strong>
                It will hardly take 15 minutes to send money from Canada to
                Indian Banks with Paypenny.
              </strong>{" "}
              Following are the services of the Paypenny app that helps users to
              send money faster.
            </p>
          </Col>
        </Row>
      </Container>
      <div style={{ background: "#051422" }}>
        <Container className="text-light py-5">
          <Row className="g-3">
            <Col sm={12} md={6} lg={3}>
              <Card className="blog__card">
                <Card.Body>
                  <h3 style={{ fontWeight: "500" }}> FINTRAC Registered</h3>

                  <p className="doc__p">
                    The Paypenny app is registered and regulated with FINTRAC.
                    That’s the reason we are the safe & secure platform in the
                    money remittance industry.
                  </p>
                </Card.Body>
              </Card>
            </Col>
            <Col sm={12} md={6} lg={3}>
              <Card className="blog__card">
                <Card.Body>
                  <h3 style={{ fontWeight: "500" }}> Highest Exchange Rate</h3>

                  <p className="doc__p">
                    Higher exchange rates in the market are guaranteed with
                    Paypenny. Believe in yourself by using our application &
                    compare it with others.
                  </p>
                </Card.Body>
              </Card>
            </Col>
            <Col sm={12} md={6} lg={3}>
              <Card className="blog__card">
                <Card.Body>
                  <h3 style={{ fontWeight: "500" }}> Zero Transaction Fee</h3>

                  <p className="doc__p">
                    Send money to India without any charges by using the
                    Paypenny app services. We charge no hidden fee or additional
                    fee on your transaction.
                  </p>
                  <ul>
                    <li>
                      <strong>
                        {" "}
                        Send $10 amount to India (without paying any charges)
                      </strong>
                    </li>
                    <li>
                      <strong>
                        Send $50,000 amount to India (without paying any
                        charges)
                      </strong>
                    </li>
                  </ul>
                </Card.Body>
              </Card>
            </Col>
            <Col sm={12} md={6} lg={3}>
              <Card className="blog__card">
                <Card.Body>
                  <h3 style={{ fontWeight: "500" }}>24/7 Customer Support</h3>

                  <p className="doc__p">
                    We are providing you services even on weekends. Paypenny is
                    available round the clock so that you can easily transfer
                    dollars to Indian banks.
                  </p>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
      <Container className="py-5">
        <h1>About Paypenny</h1>
        <p className="doc__p">
          Paypenny is a digital money remittance service provider where you can
          easily transfer INR(D) to your family members & friends worldwide.
          Leading with millions of transactions & thousands of customers in
          Canada, we have expanded our business in the United Kingdom and the
          European Union in 2022. What makes us stand out in the market is the
          trust of our customers & remarkable services of the Paypenny that is
          accessible every second of the clock!
        </p>
        <h5>
          To learn more about Paypenny visit our{" "}
          <a className="text-info" href="http://www.paypenny.io/">
            website
          </a>{" "}
          or download the Paypenny app!
        </h5>
      </Container>
    </div>
  );
};

export default Section3;
