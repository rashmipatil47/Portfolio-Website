import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import dbms from "../../Assets/Projects/dbms.PNG";
import dashboard from "../../Assets/Projects/dashboard.png";
import book from "../../Assets/Projects/book.PNG";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
        <strong className="purple">My Projects</strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I worked on.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={dashboard}
              isBlog={false}
              title="Supermarket Sales Dashboard"
              description="Designed an interactive Tableau dashboard to analyze supermarket performance across multiple branches. Visualized trends in product lines, payment methods, customer demographics, and profitability using bar charts, line graphs, and filters. Strengthened skills in data cleaning, analytics, and storytelling to help businesses make data-driven decisions."
              ghLink="https://github.com/soumyajit4419/Bits-0f-C0de"
              demoLink="https://public.tableau.com/app/profile/prarthana.suresh.kumar/viz/SuperMarketSalesDashboard_17331100431560/SupermarketSalesDataanalysis?publish=yes"
            />
          </Col>       

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={dbms}
              isBlog={false}
              title="IT Help Desk Ticket Tracking System"
              description="Developed a SQL Server–based database to manage help desk tickets efficiently. Built relational tables, ERD, stored procedures, triggers, and views to track issues, assignments, statuses, and audit logs. Improved data integrity, automation, and reporting to support IT performance monitoring at an enterprise level."
              ghLink="https://github.com/soumyajit4419/Bits-0f-C0de"
              demoLink="https://blogs.soumya-jit.tech/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={book}
              isBlog={false}
              title="Book Recommender System"
              description="Created a machine learning book recommendation model using collaborative filtering and cosine similarity on a large ratings dataset. Performed preprocessing, model optimization, and evaluation, reducing MAE by 15%. Gained proficiency with Python, Pandas, NumPy, and scikit-learn while applying ML to real-world personalization tasks."
              ghLink="https://github.com/soumyajit4419/Editor.io"
              demoLink="https://editor.soumya-jit.tech/"              
            />
          </Col>  
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
