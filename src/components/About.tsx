import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Typewriter from "./TypeWriter";
import BlinkingCursor from "./BlinkingCursor";
import about from "./content/about.json";
import "./styles/About.scss";

const About = () => {
  return (
    <section id="about">
      <Container fluid>
        <Row className="justify-content-center">
          <Col className="about-intro" lg={8}>
            <h1>
              Ibtesam <span className="about-secondary-color">Naeem</span>
              <hr />
            </h1>

            <h2>
              Hello! I'm a Software Engineer passionate about <br />
              <span className="about-secondary-color">
                <Typewriter words={about.interests} />
              </span>
              <BlinkingCursor />
            </h2>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default About;
