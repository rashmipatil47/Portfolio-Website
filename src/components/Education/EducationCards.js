import { Card } from "react-bootstrap";

function EducationCards({ title, company, description, points }) {
  return (
    <Card className="education-card-view" style={{ padding: "20px" }}>
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

export default EducationCards;