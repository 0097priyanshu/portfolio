import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

function ProjectCards({ imgPath, title, description, ghLink, demoLink, tech }) {
  return (
    <Card className="project-card-view card-3d">
      {imgPath && <Card.Img variant="top" src={imgPath} alt="project-image" />}

      <Card.Body>
        <Card.Title>{title}</Card.Title>

        <Card.Text style={{ textAlign: "justify" }}>
          {description}
        </Card.Text>

        {tech && (
          <Card.Text>
            <strong>Tech Stack:</strong> {tech}
          </Card.Text>
        )}

        <div style={{ display: "flex", gap: "10px" }}>
          <Button variant="primary" href={ghLink} target="_blank">
            GitHub
          </Button>

          {demoLink && (
            <Button variant="success" href={demoLink} target="_blank">
              Live Demo
            </Button>
          )}
        </div>
      </Card.Body>
    </Card>
  );
}

export default ProjectCards;