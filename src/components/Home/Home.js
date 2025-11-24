import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../assets/priyanshu.png";
import SocialMedia from "../SocialMedia";
import TypeWriter from "./TypeWriter";

function Home() {
  return (
    <section>
      <Container fluid className="home-section" id="home">
        <Container className="home-content">
          <Row>
            <Col md={6} className="home-header">
              <h1 style={{ paddingBottom: 15 }} className="heading">
                Hi There!{" "}
                <span className="wave" role="img" aria-labelledby="wave">
                  👋🏻
                </span>
              </h1>

              <h1 className="heading-name">
                I'm{" "}
                <strong className="main-name">Priyanshu Mahobia</strong>
              </h1>

              <p className="heading-description blockquote">
               I’m a IT student building sharp, scalable,
               AI-powered solutions across data analytics, advanced web development,
               and DSA shaped by hands-on experience at Innoplexus, Google GenAI Exchange, and HackRX.
              </p>

              <div className="heading-type">
                <TypeWriter />
              </div>
            </Col>

            <Col md={5} className="myAvtar" style={{ position: "relative" }}>
              <div className="profile-3d">
                <div className="profile-card">
                  <img src={myImg} className="profile-pic" alt="avatar" />
                </div>
                <div className="floating-shapes" aria-hidden="true">
                  <span className="s1" />
                  <span className="s2" />
                  <span className="s3" />
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </Container>
      <Container fluid className="home-about-section" id="about">
        <Container>
          <Row>
            <Col md={12} className="home-about-social">
              <h1>Get in Touch</h1>
              <p>
                {" "}
                Whether you want to get in touch, or talk about a project
                collaboration.
                <br />
                <strong>Feel free to connect with me</strong>
              </p>
              <SocialMedia />
            </Col>
          </Row>
        </Container>
      </Container>
    </section>
  );
}

export default Home;
