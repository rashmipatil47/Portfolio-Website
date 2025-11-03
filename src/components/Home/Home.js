import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import Home2 from "./Home2";
import Type from "./Type";
import Tilt from "react-parallax-tilt";
import myImg from "../../Assets/avatar.svg";

import {
  AiFillGithub,
  AiFillPhone,
  AiFillMail,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home() {
  return (
    <section>
      <Container fluid className="home-about-section" id="about">
      <Container> 
        <Row>
          <Col className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" style={{width: "150px", height: "165px", borderRadius: "50%", objectFit: "cover"}}/>
            </Tilt>
          </Col>
        </Row>
        
      </Container>
    </Container>


      <Container fluid className="home-section" id="home">
        <Particle />
        <Container className="home-content">
          <Row>
            <Col>
              <h1 style={{ paddingBottom: 15 }} className="heading">
                Hello!{" "}
                <span className="wave" role="img" aria-labelledby="wave">
                  👋🏻
                </span>
              </h1>
              <h1 className="heading-name">
                I'm
                <strong className="main-name"> Rashmi Venkangouda Patil </strong> 
                <br/>
                <strong className="main-name"> Software Developer</strong>  
              </h1>
              <div style={{ fontSize:12, padding: 20}}>
                <Type />
              </div>
            </Col>
          </Row>
        </Container>
      </Container>

      <Home2 />

      <Container>
        <Row style={{ paddingTop: "50px", paddingBottom: "50px" }}>
          <Col md={12} className="home-social">
            <h1>Find Me On</h1>
            {/* <p>
              Feel free to <span className="purple">connect </span>with me
            </p> */}
            <ul className="home-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/rashmipatil47/Portfolio-Website"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/rashmi-venkangouda-patil/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="mailto:rashmipatil34@gmail.com"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillMail />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="tel:+1480-287-6281"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillPhone />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Home;
