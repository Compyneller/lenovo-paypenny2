import React from "react";
import { Col, Row } from "react-bootstrap";

const BlogSec6 = () => {
  return (
    <Row className="g-3">
      <Col sm={12} lg={6} className="d-flex align-items-center">
        <img
          src="https://images.unsplash.com/photo-1617396900799-f4ec2b43c7ae?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
          alt=""
          className="w-100"
        />
      </Col>
      <Col sm={12} lg={6}>
        <h1>The future of Crypto in the next five years</h1>
        <br />
        <p className="docs__p">
          We have witnessed the rise of cryptocurrency in 2021. The craze of
          cryptocurrency in the world is faster than the speed of the light! The
          big investors like Elon Musk have already invested in the top three
          crypto currencies (bitcoin, ethereum and dogecoin) where Tesla holds
          more than 42,902 coins. <br />
          <br />
          Bitcoin top's the list of most expensive cryptocurrency whereas
          Ethereum is second on the list. The U.S. Administration has set new
          regulations for the cryptocurrency market.
          <br />
          <br />
          The crypto market has shown rapid growth in the cryptocurrency
          followed by major drops in the market! It is impossible to predict the
          exact future of the constantly evolving industry. According to experts
          - The Authorities around the different corners of the world are
          planning to set new rules & regulations to make cryptocurrency safer
          for investors and less informative to fraudsters! <br />
          <br />
          The experts says- Bitcoin will hit $100,000 and will create a
          benchmark in the history of the cryptocurrency.
        </p>
      </Col>
    </Row>
  );
};

export default BlogSec6;
