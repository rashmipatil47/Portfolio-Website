// import React from "react";
// import { Row, Card } from "react-bootstrap";
// import { CgWebsite } from "react-icons/cg";
// import { BsGithub } from "react-icons/bs";

// function ExperienceCards({ imgPath, title, description, ghLink, isBlog, demoLink }) {
//   return (
//     <Card className="experience-card-view">
//       <Row className="align-items-center g-0">
//           <Card.Body>
//             <Card.Title style={{ textAlign: "left" }}>{title}</Card.Title>
//             <Card.Text style={{ textAlign: "left" }}>{description}</Card.Text>
//           </Card.Body>
//       </Row>
//     </Card>
//   );
// }

// export default ExperienceCards;


import React from "react";
import { Card } from "react-bootstrap";

function ExperienceCards({ title, company, description, points }) {
  return (
    <Card className="experience-card-view" style={{ padding: "20px" }}>
      <Card.Title style={{ textAlign: "left", fontSize: "1.4rem", fontWeight: "700", marginBottom: "6px" }}>
        {title}
      </Card.Title>

      <Card.Subtitle style={{ textAlign: "left", fontSize: "1.1rem", marginBottom: "12px", color: "gray" }}>
        {company}
      </Card.Subtitle>  

      {description && (
        <Card.Text style={{ textAlign: "left" }}>{description}</Card.Text>
      )}

      {points && (
        <ul style={{ textAlign: "left" }}>
          {points.map((point, index) => (
            <li key={index}>{point}</li>
          ))}
        </ul>
      )}
    </Card>
  );
}

export default ExperienceCards;