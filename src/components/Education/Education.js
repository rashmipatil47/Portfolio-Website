import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import EducationCards from "./EducationCards";
import Particle from "../Particle";

function Education() {
  return (
    <Container fluid className="education-section">
      <Particle />
      <Container>
        <h1 className="education-heading">
        <strong className="purple">Education</strong>
        </h1>
        <Row className="education-card">
          <EducationCards
          title="Master's in Information Technology"
          company="Arizona State University, Tempe, Arizona | Jan 2024 - Dec 2025"
          />
        </Row>  

        <Row className="education-card">
          <EducationCards
          title="Bachelor's in Computer Science and Engineering"
          company="Basaveshwar Engineering College, Bagalkot, India | Aug 2016 - Aug 2020"
          />
        </Row> 
      </Container>
    </Container>
  );
}

export default Education;
