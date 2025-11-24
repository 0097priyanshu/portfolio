import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";

function ResumeNew() {
  return (
    <Container fluid className="resume-section section-3d">
      <Row style={{ justifyContent: "center" }}>
        <Col md={10}>
          <div className="resume-card card-3d">
            <div className="meta">
              <h2>My Resume</h2>
              <p>
                I’m a third-year IT student building sharp, scalable, AI-powered
                solutions across data analytics, advanced web development, and
                DSA. The resume includes my internships, projects, and
                contributions — click to view or download.
              </p>
            </div>

            <div className="actions">
              <Button
                variant="outline-light"
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                View
              </Button>

              <Button
                variant="primary"
                href="/resume.pdf"
                download
              >
                Download
              </Button>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default ResumeNew;