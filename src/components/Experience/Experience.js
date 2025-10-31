import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ExperienceCards from "./ExperienceCards";
import Particle from "../Particle";

function Experience() {
  return (
    <Container fluid className="experience-section">
      <Particle />
      <Container>
        <h1 className="experience-heading">
        <strong className="purple">Professional Experience</strong>
        </h1>
        <Row className="experience-card">
          <ExperienceCards
          title="Software Engineer"
          company="Cognizant Technology Solutions India | Jul 2021 - Dec 2023"
          points={[
          "Led the full automation life-cycle, applied RPA best practices and reduced manual workloads by 30% across insurance domain.",
          "Employed systematic analysis and coding best practices in C#/VB.NET to enhance reliability, maintainability and scalability.",
          "Collaborated with teams to identify automation opportunities, AI features and designed scalable workflows, reusable frameworks.",
          "Mentored 3 junior developers, improved code quality, earned Cognizant “Cheers” award for my commitment & timely deliveries.",
          "Spearheaded ongoing maintenance, troubleshooting, user training and developed comprehensive documentation for smooth adoption and optimal performance of automated processes."
          ]}/>
        </Row>  

        <Row className="experience-card">
          <ExperienceCards
          title="Data Scientist Intern"
          company="Rubixe Pvt Ltd, Bangalore, India | Jan 2021 - Jun 2021"
          points={[
          "Spearheaded Exploratory Data Analysis on large datasets with Python libraries like Pandas, NumPy & Seaborn to extract insights.",
          "Refined dataset through feature engineering, enhancing model recall and precision by 12%, resulting in accurate predictions.",
          "Built and tuned Machine Learning models including Regression, Random Forest, KNN & Decision Trees accessing scikit-learn.",
          "Onboard new members and collaborate with IT team to resolve access and security issues."
          ]}
          />
        </Row>

        <Row className="experience-card">
          <ExperienceCards
          title="Office Aide"
          company="Arizona State University, Tempe, Arizona | Aug 2024 - Present "
          points={[
          "Provide technical & administrative support for staff by managing digital resources to streamline workflows & improve accessibility.",
          "Develop & implement reusable Python scripts to automate repetitive tasks, reducing manual workload.",
          "Onboard new members and collaborate with IT team to resolve access and security issues."
          ]}
          />
        </Row> 
      </Container>
    </Container>
  );
}

export default Experience;
