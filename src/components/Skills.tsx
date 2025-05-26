import React from "react";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
import Badge from "react-bootstrap/Badge";
import skills from "./content/skills.json";
// import skills from "./content/skills_extended.json";
import "./styles/Skills.scss";

const Skills = () => {
  return (
    <section id="skills">
      <Container fluid>
        <h1>
          Skills <hr />
        </h1>

        <Row className="skills-row">
          <Col lg="4">
            <h2>Languages</h2>
            {skills.languages.map((skill) => (
              <Badge pill bg="primary">
                {skill}
              </Badge>
            ))}
          </Col>

          <Col lg="4">
            <h2>Frameworks & Libraries</h2>
            {skills.frameworks_and_libraries.map((skill) => (
              <Badge pill bg="primary">
                {skill}
              </Badge>
            ))}
          </Col>

          <Col lg="4">
            <h2>Cloud & DevOps</h2>
            {skills.cloud_and_devops.map((skill) => (
              <Badge pill bg="primary">
                {skill}
              </Badge>
            ))}
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Skills;
