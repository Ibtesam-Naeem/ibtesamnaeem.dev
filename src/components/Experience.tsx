import React from "react";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
import Card from "react-bootstrap/esm/Card";
import Badge from "react-bootstrap/Badge";
import { FaCalendar, FaMapMarkerAlt } from "react-icons/fa";
import experience from "./content/experience.json";
import "./styles/Experience.scss";

const Experience = () => {
  return (
    <section id="experience">
      <Container fluid>
        <h1>
          Experience <hr />
        </h1>

        <Row className="experience-row">
          {experience.jobs.map((job) => (
            <Col lg="6" className="card-col">
              <Card
                bg="light"
                text="dark"
              >
                <Card.Header>
                  <h2>{job.title}</h2>
                  <h3 className="company-name">{job.company}</h3>
                  <FaCalendar className="map-marker" />
                  <p className="icon-text">{job.date}</p>
                  <FaMapMarkerAlt className="map-marker" />
                  <p className="icon-text">{job.location}</p>
                </Card.Header>

                <Card.Body>
                  {job.skills.map((skill) => (
                    <Badge pill bg="primary">
                      {skill}
                    </Badge>
                  ))}

                  <ul>
                    {job.bullets.map((bullet) => (
                      <li dangerouslySetInnerHTML={{ __html: bullet }} />
                    ))}
                  </ul>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Experience;
