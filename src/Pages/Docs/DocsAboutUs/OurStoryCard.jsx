import React from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import "./OurStory.scss";
import image1 from "../../../doc-assets/card-dynamic-gradient.png";
import image2 from "../../../doc-assets/fire-dynamic-gradient.png";
import image3 from "../../../doc-assets/flash-dynamic-gradient.png";
const OurStoryCard = () => {
  return (
    <>
      <h1 className="text-center">3 Things to Believe</h1>
      <br />
      <Row className="g-3">
        <Col xs={12} sm={6} md={6} lg={4}>
          <Card className="ourStory__card1 " data-aos="zoom-out">
            <Card.Body>
              <img src={image1} height={120} alt="" />
              <h5>Low Cost</h5>
              <p>
                Unfair fees have been a burden. To buy any asset at the true
                cost, and the extra fee during checkout should not be anybody’s
                concern. With us, you can BUY, SELL, STORE, TRADE & STAKE at
                zero charges. That’s comparatively cheaper, right?
              </p>
            </Card.Body>
          </Card>
        </Col>

        <Col xs={12} sm={6} md={6} lg={4}>
          <Card
            className="ourStory__card2 "
            data-aos="zoom-out"
            data-aos-delay="300">
            <Card.Body>
              <img src={image2} height={120} alt="" />
              <h5>User-Friendly</h5>
              <p>
                Trading should be stress-free – no matter where it is happening.
                Our app and website are designed for you to manage your currency
                on the go. And we’ve built a team that’s dedicated to keeping
                your app experience best & simply best!
              </p>
            </Card.Body>
          </Card>
        </Col>
        <Col xs={12} sm={6} md={6} lg={4}>
          <Card
            className="ourStory__card3 "
            data-aos="zoom-out"
            data-aos-delay="500">
            <Card.Body>
              <img src={image3} height={120} alt="" />
              <h5>Fast & Secure</h5>
              <p>
                When buying or selling digital currency, faster transfers &
                safety is the prominent thing that comes to our minds. With
                high-tech powerful security, & a team that is working all day &
                night assures you that your currency is 100% safe!
              </p>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </>
  );
};

export default OurStoryCard;
