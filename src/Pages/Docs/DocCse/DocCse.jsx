import React from "react";
import DocNav from "../../../DocsComponents/DocNavBar/DocNav";
import video from "../../../doc-assets/mixkit-woman-and-man-working-at-a-call-center-4610.mp4";
import "./DocCse.scss";
import { Card, Col, Container, Row } from "react-bootstrap";
import image from "../../../doc-assets/Flame_Training_transparent_by_Icons8.gif";
import image2 from "../../../doc-assets/Taxi_teamwork_in_office_transparent_by_Icons8.gif";
import image3 from "../../../doc-assets/Clip_Applying_to_University_online_transparent_by_Icons8.gif";
import image4 from "../../../doc-assets/Clip_Schoolteacher_transparent_by_Icons8.gif";
import image5 from "../../../doc-assets/Taxi_phone_transparent_by_Icons8.gif";
import DocsMobileNavBar from "../../../DocsComponents/DocNavBar/DocsMobileNavBar";

const DocCse = () => {
  return (
    <>
      {window.innerWidth > 950 ? <DocNav /> : <DocsMobileNavBar />}
      <div className="docsCse__container">
        <div className="docCse__video">
          <video src={video} autoPlay muted loop />
          <h1>CUSTOMER SERVICE</h1>
        </div>
        <br />

        <Container className="py-5">
          <Row className="g-3">
            <Col
              sm={12}
              lg={5}
              className="d-flex flex-column justify-content-center"
              data-aos="fade-up">
              <img
                src="https://img.icons8.com/ios-filled/344/quote-left.png "
                height={120}
                width={100}
                alt=""
              />
              <br />

              <h5 className="quote__text">
                CUSTOMER SERVICE IS NOT JUST A DEPARTMENT BUT THEY ARE THE
                ASSETS OF THE COMPANY.{" "}
              </h5>
            </Col>
            <Col sm={12} lg={7} data-aos="fade-down">
              <img src={image3} alt="" className="w-100" />
            </Col>
          </Row>
          <br />
          <Row className="g-3">
            <Col sm={12} lg={7}>
              <img src={image} className="w-100" alt="" data-aos="fade-down" />
            </Col>
            <Col
              sm={12}
              lg={5}
              className="d-flex flex-column justify-content-center"
              data-aos="fade-up">
              <h1>Let’s talk about them who talk 24/7!</h1> <br />
              <p className="doc__p">
                A group of enthusiastic, challenging, and regressively working
                people makes the Customer Support Team. The team members always
                said yes to every obstacle and never lose their confidence while
                accepting challenges. All the people show team spirit and never
                said no to any problem instead worked every ounce to prove
                themselves. Our CSE team plays an important part in bringing
                revenue to the company by being in the battle 24/7. The CSE team
                is not only our pride but they are the reason our customers love
                us.
              </p>
            </Col>
          </Row>
          <Row className="g-3">
            <Col
              sm={12}
              lg={5}
              className="d-flex flex-column justify-content-center"
              data-aos="fade-up">
              <h1>Let’s talk about them who talk 24/7!</h1> <br />
              <p className="doc__p">
                A group of enthusiastic, challenging, and regressively working
                people makes the Customer Support Team. The team members always
                said yes to every obstacle and never lose their confidence while
                accepting challenges. All the people show team spirit and never
                said no to any problem instead worked every ounce to prove
                themselves. Our CSE team plays an important part in bringing
                revenue to the company by being in the battle 24/7. The CSE team
                is not only our pride but they are the reason our customers love
                us.
              </p>
            </Col>
            <Col sm={12} lg={7}>
              <img src={image2} className="w-100" alt="" data-aos="fade-down" />
            </Col>
          </Row>
          <br />
          <br />
          <br />
          <Row className="g-3">
            <Col sm={12} lg={7}>
              <img src={image4} alt="" className="w-100" />
            </Col>
            <Col
              sm={12}
              lg={5}
              className="d-flex flex-column justify-content-center">
              <h1 className="text-center">How do we resolve your queries?</h1>
              <p className="doc__p">
                Whenever a customer faces any issue or wants our help in
                assisting, they can directly report to the help & support team.
                There are multiple ways available to reach out to our team. To
                provide faster solutions to the user, our team quickly activates
                the resolution mode to deliver satisfaction to our customers.
                <br />
                <br />
                We will explain to you what happens next when you report your
                problems to us-
              </p>
              <ol>
                <li className="doc__p">
                  You report your query via calling Paypenny
                </li>
                <li className="doc__p">
                  The customer Service Executive picks up your call and listens
                  to your concerns and tries to give you a resolution at the
                  moment.
                </li>
                <li className="doc__p">
                  Just in case, if the CSE member is unable to resolve it they
                  pass the query to the Customer Service Team Head on the live
                  barging means without disconnecting your call.
                </li>
                <li className="doc__p">
                  CS Team Head assures you to give you a solution without
                  wasting your precious time and succeed in giving you the
                  solution for your query!
                </li>
              </ol>
            </Col>
          </Row>
          <br />
          <br />

          <br />

          <Row className="g-3">
            <Col
              sm={12}
              lg={5}
              className="d-flex flex-column justify-content-center">
              <h1>What happens when we ask you to wait for some time?</h1>
              <p className="doc__p">
                Most of the time, we resolve your problems at the moment. A few
                times there can be some technical error that leads to a delay in
                delivering the solution to your doorstep and that's the reason
                we ask you to wait for at least 24 hours!
                <br />
                <br />
                In this case, we take the necessary actions and forward your
                query to our IT team.
              </p>
            </Col>
            <Col sm={12} lg={7}>
              <img src={image5} alt="" className="w-100" />
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default DocCse;
