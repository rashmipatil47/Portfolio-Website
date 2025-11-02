import { Container, Row, Col } from "react-bootstrap";
import Techstack from "./Techstack";
import Toolstack from "./Toolstack";

function Home2() {
  return (
    <Container fluid className="home-section" id="home">
      <Container>
        <Row>
          <Col className="home-title">
            <h1 style={{ fontSize: "2.6em" }}>
              About Me
            </h1>
                    
            <p className="home-description"> 
            I’m a software developer with {" "}
            <b className="purple">
                  3 years{" "}
            </b> 
            of expereince in designing, developing, and deploying software solutions across various domains. 

            I’m currently pursuing {" "}
            <b className="purple">
                  Master's in Information Technology{" "}
            </b> 
            at{" "}
            <b className="purple">
              Arizona State University
            </b>
            .
            <br />
            <br />           
            I bring hands-on experience in 
                <b className="purple">
                  {" "}
                  Python, Java, JavaScript, and RPA technologies like UiPath,{" "}
                </b>
                along with knowledge in
                <b className="purple">
                  {" "}
                  AI, ML, and cloud computing.{" "}
                </b>
                From developing automation workflows that reduce manual work to designing intuitive dashboards and full-stack web applications, 
                I aim to create efficient, user-friendly, and data-driven solutions. I believe in using technology not just to solve problems,
                 but to simplify and empower.{" "}
              <br />
                      
              <br />
              I built projects like 
              <b className="purple"> Supermarket Sales Dashboard, IT Help Desk Ticket Tracking System and Book Recommender System</b> using {" "}
              <i>
                <b className="purple">Tabluae, SQL, Python</b> and{" "}
                <b className="purple">Machine learning algorithms</b>.
              </i>
            </p>
          </Col>
        </Row>

        <br/>
        
        <h1 style={{ fontSize: "2.6em", paddingBottom: "50px" }} className="project-heading">
        Technical Skills
        </h1>

        <Techstack />

        {/* <h1 className="project-heading">
          Tools Used
        </h1>
        <Toolstack />  */}

      </Container>
    </Container>

    
  );
}
export default Home2;
