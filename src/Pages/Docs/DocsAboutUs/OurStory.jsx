import React from "react";
import "./OurStory.scss";
import DocNav from "../../../DocsComponents/DocNavBar/DocNav";
import { Col, Container, Row } from "react-bootstrap";
import video from "../../../doc-assets/mixkit-top-aerial-shot-of-seashore-with-rocks-1090.mp4";
import OurStoryCard from "./OurStoryCard";
import img1 from "../../../doc-assets/Clip_recruting_ad_transparent_by_Icons8.gif";
import img2 from "../../../doc-assets/Clip_Brainstorm_transparent_by_Icons8.gif";
import "aos/dist/aos.css";
import DocsMobileNavBar from "../../../DocsComponents/DocNavBar/DocsMobileNavBar";

const OurStory = () => {
  return (
    <>
      {window.innerWidth > 950 ? <DocNav /> : <DocsMobileNavBar />}
      <div className="ourStory-container">
        <div className="ourStory-video">
          <video src={video} autoPlay loop muted></video>
          <h1>OUR STORY</h1>
        </div>
        <br />
        <br />
        <br />
        <Container className="py-5">
          <Row className="g-5">
            <Col
              sm={12}
              lg={6}
              className="d-flex justify-content-center flex-column">
              <h1>Our Story</h1>
              <br />
              <p className="doc__p" data-aos="fade-down">
                Paypenny is established by a group of young & dynamic business
                entrepreneurs. The conscientious team of managers, developers,
                graphic designers, customer support & content creators are
                magnificently working for the growth & development of the
                business. What makes us stand out in the market is the trust of
                our customers & remarkable services of Paypenny that is
                accessible every second of the clock!
              </p>
            </Col>
            <Col sm={12} lg={6}>
              <img src={img1} alt="" className="w-100" data-aos="fade-up" />
            </Col>
          </Row>
          <br />
          <br />
          <br />
          <Row className="g-5">
            <Col sm={12} lg={6}>
              <img src={img2} className="w-100" alt="" data-aos="zoom-in" />
            </Col>
            <Col
              sm={12}
              lg={6}
              className="d-flex justify-content-center flex-column"
              data-aos="zoom-out">
              <h1>How we got the idea to start Paypenny?</h1>
              <br />
              <p className="doc__p">
                The story starts with four friends living in Punjab, India. Two
                of them moved to Canada for further studies. While staying in
                foreign, they used to share their experiences with each other.
                To adjust the budget, two of the foreign friends started
                investing in crypto. And from there, the idea was generated.{" "}
                <br />
                <br />
                Together, they four— brainstormed, and invented the digital
                currency platform where BUYING & SELLING are exceptionally
                available at zero charges.
              </p>
            </Col>
          </Row>
          <br />
          <br />
          <br />
          <OurStoryCard />
        </Container>
      </div>
    </>
  );
};

export default OurStory;
