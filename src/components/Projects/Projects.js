import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCards from "./ProjectCards";

import datasetImg from "../../assets/projects/dataset.png";
import medigoImg from "../../assets/projects/medigo.png";
import artisanImg from "../../assets/projects/artisan.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Container>
        <h1 className="project-heading">
          My <strong className="purple">Projects</strong>
        </h1>
        <p style={{ color: "white" }}>Here are some of my recent works.</p>

        <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>

          {/* Image Dataset Analytics */}
          <Col md={4} className="project-card">
            <ProjectCards
              imgPath={datasetImg}
              title="Image Dataset Analytics"
              description="A Python-based analytics tool that processes image datasets, visualizes class distribution, detects anomalies, and prepares formatted reports for ML workflows."
              tech="Python, Pandas, NumPy, Matplotlib"
              ghLink="https://github.com/0097priyanshu/image-dataset-analytics"
              demoLink="https://example.com/dataset-demo" // replace if needed
            />
          </Col>

          {/* MediGo */}
          <Col md={4} className="project-card">
            <ProjectCards
              imgPath={medigoImg}
              title="MediGo – Medicine Delivery Platform"
              description="A full-stack medicine ordering platform with secure user authentication, pharmacy listings, product search, and real-time order management."
              tech="React, Node.js, Express, MongoDB, TypeScript"
              ghLink="https://github.com/0097priyanshu/MediGo"
              demoLink="https://example.com/medigo" // add your link later
            />
          </Col>

          {/* Artisan Marketplace */}
          <Col md={4} className="project-card">
            <ProjectCards
              imgPath={artisanImg}
              title="Artisan Marketplace"
              description="An e-commerce platform where artisans can showcase and sell handmade products. Built using React with Firebase backend."
              tech="React, Firebase"
              ghLink="https://github.com/aadya284/artisan-marketplace"
              demoLink="https://example.com/artisan" // optional
            />
          </Col>

        </Row>
      </Container>
    </Container>
  );
}

export default Projects;