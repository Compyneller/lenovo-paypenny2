import React from "react";
import { Card, Col, Row } from "react-bootstrap";

const BlogSec2 = () => {
  return (
    <>
      <Row className="g-4">
        <Col sm={12} lg={6} className="d-flex align-items-center">
          <img
            src="https://images.unsplash.com/photo-1631603090989-93f9ef6f9d80?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1172&q=80"
            alt=""
            className="w-100"
          />
        </Col>
        <Col
          sm={12}
          lg={6}
          className="d-flex justify-content-center flex-column ">
          <h1>What is cryptocurrency? How does it work?</h1>
          <br />
          <p className="docs__p">
            <b>Cryptocurrency-</b> is the type of any currency that works
            digitally on a distributed public ledger called{" "}
            <b>blockchain technology</b>
            under a <b>decentralized</b> record of the transaction and uses
            <b>cryptography</b> to secure the network. In another way-
            Cryptocurrency or crypto is encrypted data designed to work as
            digital money. Crypto works on the three main significant factors-
            Blockchain, decentralization, and cryptography.
          </p>
        </Col>
      </Row>
      <br />
      <br />
      <br />
      <Row className="g-3">
        <Col xs={12} sm={6} md={6} lg={4}>
          <Card style={{ height: "100%" }}>
            <Card.Body>
              <img
                src="https://img.icons8.com/external-vitaliy-gorbachev-blue-vitaly-gorbachev/344/external-blockchain-cryptocurrency-vitaliy-gorbachev-blue-vitaly-gorbachev-1.png"
                height={90}
                alt=""
              />
              <h5 className="my-3">Blockchain</h5>
              <p className="docs__p">
                Blockchain is the technology that uses a digital ledger of
                transactions that is spread across the entire network of the
                system on the blockchain and by this technology it is impossible
                to hack or change the system. For more information, please read{" "}
                <a href="https://en.wikipedia.org/wiki/Blockchain">here</a>
              </p>
            </Card.Body>
          </Card>
        </Col>
        <Col xs={12} sm={6} md={6} lg={4}>
          <Card style={{ height: "100%" }}>
            <Card.Body>
              <img
                src="https://img.icons8.com/external-parzival-1997-flat-parzival-1997/344/external-decentralization-centralized-influencer-parzival-1997-flat-parzival-1997.png"
                height={90}
                alt=""
              />
              <h5 className="my-3">Decentralization</h5>
              <p className="docs__p">
                Decentralization in the cryptocurrency refers to a system that
                maintains all the transactions by the decision of the
                distributed network. It doesn’t require supervision from a
                centralized association ( individual,corporation, or a group of
                people)
              </p>
            </Card.Body>
          </Card>
        </Col>
        <Col xs={12} sm={6} md={6} lg={4}>
          <Card style={{ height: "100%" }}>
            <Card.Body>
              <img
                src="https://img.icons8.com/external-smashingstocks-circular-smashing-stocks/344/external-cryptography-bitcoin-blockchain-and-cryptocurrency-smashingstocks-circular-smashing-stocks.png"
                height={90}
                alt=""
              />
              <h5 className="my-3">Cryptography</h5>
              <p className="docs__p">
                Cryptography is used to secure the transactions by using the
                calculative practice of coding and decoding data for the
                network.
              </p>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </>
  );
};

export default BlogSec2;
