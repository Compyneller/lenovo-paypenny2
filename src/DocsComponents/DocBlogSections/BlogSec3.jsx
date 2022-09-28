import React from "react";
import { Card, Col, Row } from "react-bootstrap";
import bitcoin from "../../doc-assets/bitcoin_PNG38.png";
import ava from "../../doc-assets/avalanche-avax-logo.png";
import solona from "../../doc-assets/solana-sol-logo.png";
import xrp from "../../doc-assets/xrp-xrp-logo.png";
import eth from "../../doc-assets/—Pngtree—ethereum cryptocurrency coin icon_6259537.png";
import png from "../../doc-assets/pngwing.com (1).png";
import tether from "../../doc-assets/pngwing.com.png";
import tera from "../../doc-assets/terra-luna-icon.png";
import binance from "../../doc-assets/Binance-Coin-Crypto-Logo-PNG-Background.png";
import dollar from "../../doc-assets/dollar.png";
const BlogSec3 = () => {
  return (
    <>
      <h1 className="text-center">What are the top 10 cryptocurrency?</h1>
      <br />
      <Row className="g-3">
        <Col sm={12} lg={6} className="d-flex align-items-center">
          <p className="docs__p">
            From the year 2013 - 2022, it is assumed that the number of
            cryptocurrencies worldwide are nearly over 10,000. Indeed, it is a
            fact that top 20 crypto currencies run the market 90%. Let us check
            the value of the top 10 cryptocurrency March 2022 worldwide.
          </p>
        </Col>
        <Col sm={12} lg={6}>
          <Card>
            <Card.Body>
              <Row className="g-3">
                <Col xs={4} sm={3} md={3} lg={2}>
                  <img src={bitcoin} alt="" className="w-100" />
                </Col>
                <Col xs={4} sm={3} md={3} lg={2}>
                  <img src={ava} alt="" className="w-100" />
                </Col>
                <Col xs={4} sm={3} md={3} lg={2}>
                  <img src={solona} alt="" className="w-100" />
                </Col>
                <Col xs={4} sm={3} md={3} lg={2}>
                  <img src={eth} alt="" className="w-100" />
                </Col>
                <Col xs={4} sm={3} md={3} lg={2}>
                  <img src={tera} alt="" className="w-100" />
                </Col>
                <Col xs={4} sm={3} md={3} lg={2}>
                  <img src={binance} alt="" className="w-100" />
                </Col>
                <Col xs={4} sm={3} md={3} lg={2}>
                  <img src={xrp} alt="" className="w-100" />
                </Col>
                <Col xs={4} sm={3} md={3} lg={2}>
                  <img src={png} alt="" className="w-100" />
                </Col>
                <Col xs={4} sm={3} md={3} lg={2}>
                  <img src={tether} alt="" className="w-100" />
                </Col>
                <Col xs={4} sm={3} md={3} lg={2}>
                  <img src={bitcoin} alt="" className="w-100" />
                </Col>
                <Col xs={4} sm={3} md={3} lg={2}>
                  <img src={dollar} alt="" className="w-100" />
                </Col>
              </Row>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </>
  );
};

export default BlogSec3;
