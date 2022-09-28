import React from "react";
import { Col, Row } from "react-bootstrap";

const BlogSec5 = () => {
  return (
    <Row className="g-3">
      <Col sm={12} lg={6}>
        <h1>Is Crypto coming to India?</h1>
        <br />
        <p className="docs__p">
          During the release of the new budget in 2022, The Finance Minister of
          India, Mrs. Nirmala Sitharaman gave a speech and stated -{" "}
          <b>
            India will introduce its central bank backed - first digital rupee
            using blockchain technology by 2023 year, issued by the Reserve Bank
            of India
          </b>
          . Further the minister said-{" "}
          <b>
            The launch of CBDC (Central Bank Digital Currency) in 2022-2023 will
            boost the Indian Digital Economy.
          </b>{" "}
          <br />
          Further, RBI indicated that the digital currency would be set to
          launch by the end of next financial year. RBI will be able to trace
          all the digital transactions unlike other crypto transactions
          happening worldwide. So, instead of carrying rupees in your hand, you
          will have the digital currency in your wallet. <br />
          It means, India will witness its first digital rupee and by the launch
          of digital rupee, the blackmarket of crypto established in India will
          also get a hold! <br />
          <br />
          The Government has already clarified that they are against private
          cryptocurrency and have no further plans to accept it legally. The
          Central government is imposing this action because of national data
          security and financial stability of the country.
        </p>
      </Col>
      <Col sm={12} lg={6} className="d-flex align-items-center">
        <img
          src="https://images.unsplash.com/photo-1599076246685-1020d62bfaae?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
          alt=""
          className="w-100"
        />
      </Col>
    </Row>
  );
};

export default BlogSec5;
