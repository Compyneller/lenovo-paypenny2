import React from "react";
import { Col, Row } from "react-bootstrap";

const Section1 = () => {
  return (
    <Row className="g-4">
      <Col sm={12} lg={6} className="d-flex align-items-center">
        <p className="docs__p">
          <b>Cryptocurrency future -</b> How the COVID-19 pandemic has turned
          the world upside down, we have already seen! The financial sector got
          affected tremendously, whether it was the stock market, commodities
          market, or cryptocurrency market. In that time of such calamity,
          Bitcoin - the most popular currency - became the highly valued asset
          of the 2020 year. It was the year that created history for the crypto
          market. The rise in the value of bitcoin has outperformed itself by
          rising more than 500% in the digital market. During the Covid, people
          from all over the world got immense profits by investing in{" "}
          <b>cryptocurrency</b>. Yes, you read it right. According to the
          research study- in 2020 year,
          <b>
            the demand of the cryptocurrency market was valued at around USD 800
            million, and by the end of 2028, it is expected that the value of
            the crypto market will reach USD 5200 million.
          </b>
          The post-pandemic world is all set for the mainstream of the crypto
          market. In this blog, we will study the predictions for the crypto
          market and information related to cryptocurrency.
        </p>
      </Col>
      <Col sm={12} lg={6}>
        <img
          src="https://images.unsplash.com/photo-1605792657660-596af9009e82?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1102&q=80"
          alt=""
          className="w-100"
        />
      </Col>
    </Row>
  );
};

export default Section1;
