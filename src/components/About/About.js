import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Aboutcard from "./AboutCard";
import developer from "../../assets/priyanshu.png";
import { SKILLS } from "../../Constants";

function About() {
  return (
    <Container fluid className="about-section">
      <Container>

        {/* ABOUT HEADER */}
        <Row style={{ justifyContent: "center", textAlign: "center", padding: "10px" }}>
          <Col
            md={7}
            style={{
              justifyContent: "center",
              paddingTop: "30px",
              paddingBottom: "50px",
            }}
          >
            <h1 className="about-title">
              <strong className="purple"> About Me</strong>
            </h1>
            <Aboutcard />
          </Col>
          {/* EXPERIENCE / JOURNEY GALLERY */}
<Row style={{ marginTop: "40px" }}>
  <Col>
    <h1 className="experience-title">
      <strong className="purple"> My Journey in Pictures</strong>
    </h1>

   <div className="journey-gallery">
  {[
    process.env.PUBLIC_URL + "/images/gfg1.jpeg",
    process.env.PUBLIC_URL + "/images/gfg2.jpeg",
    process.env.PUBLIC_URL + "/images/gfg3.jpeg",
    process.env.PUBLIC_URL + "/images/gfg4.jpeg",
    process.env.PUBLIC_URL + "/images/gfg5.jpeg",
    process.env.PUBLIC_URL + "/images/gfg6.jpeg",
    process.env.PUBLIC_URL + "/images/gfg7.jpeg",
    process.env.PUBLIC_URL + "/images/gfg9.jpeg"
  ].map((img, index) => (
    <div key={index} className="journey-card">
      <img src={img} alt="journey" className="journey-img" />
    </div>
  ))}
</div>
  </Col>
</Row>
        </Row>

        {/* PROFESSIONAL SKILLSET */}
        <Row style={{ marginTop: "30px" }}>
          <Col>
           <h1 className="skillset-title" style={{ textAlign: "center" }}>
  <strong className="purple"> Technical Profficiency</strong>
</h1>

            <div className="skillset-container">
              {SKILLS.map((group, index) => (
                <div key={index} className="skill-category">
                  <h3 className="skill-title">{group.category}</h3>

                  <ul className="skill-list">
                    {group.items.map((item, i) => (
                      <li key={i} className="skill-item">
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </Col>
        </Row>

      </Container>
    </Container>
  );
}

export default About;