import React from "react";
import withPageLayout from "../../components/page-container/withPageLayout";
import { Container, Row, Col, Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCode, faUserCircle } from "@fortawesome/free-solid-svg-icons";
import config from "../../config";

const ServicesComponent = () => {
  return (
    <Container>
      <Row className="align-items-center">
        <Col md={6} xs={12}>
          <h1>Consulting Services</h1>
          <p>
            I solve problems by building quality software that saves my clients
            time and money. I offer consultations to businesses and individuals
            who want to gain the competitive edge in their industry.
          </p>
          <p>
            For all your software needs I am happy to consult. Solution design
            and architecture, agile software development, test automation, data
            pipelines, infrastructure as code, web applications, and user
            experience. Learn more at{" "}
            <a
              href="https://www.teamwawe.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              teamwawe.com
            </a>
          </p>
        </Col>
        <Col md={6} xs={12} className="text-center">
          <Button
            className="red-shadow"
            size="lg"
            variant="light"
            href={`mailto:${config.emailAddress}?subject=I Need Your Help ASAP&body=Hi Hayden, I would love to work together. I am looking for...`}
          >
            Let's Work Together
          </Button>
        </Col>
      </Row>
    </Container>
  );
};

export default withPageLayout(ServicesComponent);
