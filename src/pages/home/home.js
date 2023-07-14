import withPageLayout from "../../components/page-container/withPageLayout";
import { Container, Row, Col, Image } from "react-bootstrap";
import { PopupButton, PopupModal } from "react-calendly";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFileAlt,
  faUserFriends,
  faMoneyBill,
  faHandshake
} from "@fortawesome/free-solid-svg-icons";
import {
  careerCoaching,
  salaryNegotiation,
  resumeReview,
} from "../services/content";
import config from "../../config";
import { useLocation } from "react-router-dom";
import {useEffect, useState} from 'react'

//TODO: move to separate file
const ServiceComponent = (props) => {
  return (
    <div style={{ paddingTop: "3em" }}>
      <FontAwesomeIcon icon={props.icon} size="5x"></FontAwesomeIcon>
      <h1>{props.title}</h1>
      {props.text} <a href={props.link}>{props.linkText}</a>
      <br />
      <div className="text-muted">{props.price}</div>
      <PopupButton
        url={props.url}
        /*
         * react-calendly uses React's Portal feature (https://reactjs.org/docs/portals.html) to render the popup modal. As a result, you'll need to
         * specify the rootElement property to ensure that the modal is inserted into the correct domNode.
         */
        rootElement={document.getElementById("root")}
        text={props.buttonText}
        className="btn btn-primary"
      />
    </div>
  );
};

const HomeComponent = () => {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  useEffect(()=>{
    if (location.pathname.substr(0,6) === "/intro") {
      setIsOpen(true);
    }
  },useLocation)
  

  return (
    <Container>
      <Row className="align-items-center">
        <PopupModal
          url={config.calendly.introCallUrl}
          onModalClose={() => setIsOpen(false)}
          open={isOpen}
          rootElement={document.getElementById("root")}
        />
        <Col md={6} sm={12}>
          <h1>Hi, I'm Hayden Wade.</h1>I am a software engineer, creator, and
          adventurer who enjoys helping people learn new technology and how to
          build quality software that scales. Here you will find my professional
          experience and side projects that I've created over the years, as well
          as, links to all my socials where I am most active.
        </Col>
        <Col md={6} sm={12}>
          <Image
            src="assets/haydenwade.jpg"
            alt="Hayden sitting serious at a desk."
            fluid
          />
        </Col>
      </Row>
      <Row className="align-items-center" style={{ paddingTop: "2em" }}>
        <Col md={4} sm={12} className="text-center">
          <ServiceComponent
            icon={faUserFriends}
            title={careerCoaching.title}
            text={careerCoaching.text}
            linkText="Learn more."
            buttonText="Book Now"
            link="/services/career-coaching"
            price="$240/hr"
            url={config.calendly.careerCoachingUrl}
          />
        </Col>
        <Col md={4} sm={12} className="text-center">
          <ServiceComponent
            icon={faMoneyBill}
            title={salaryNegotiation.title}
            text={salaryNegotiation.text}
            linkText="Learn more."
            buttonText="Increase Offer"
            link="/services/salary-negotiation"
            price={
              <>
                <strike>$850</strike> $550
              </>
            }
            url={config.calendly.salaryNegotiationUrl}
          />
        </Col>
        <Col md={4} sm={12} className="text-center">
          <ServiceComponent
            icon={faFileAlt}
            title={resumeReview.title}
            text={resumeReview.text}
            linkText="Learn more."
            buttonText="Book Session"
            link="/services/resume-review"
            price="$229"
            url={config.calendly.resumeReviewUrl}
          />
        </Col>
      </Row>
      <Row>
        <Col className="text-center">
        <hr />
            <ServiceComponent
            icon={faHandshake}
            title={'Introduction Call'}
            text={'Not sure which is the right service for you or have a different inquiry, schedule an introduction call with me.'}
            buttonText="Schedule Call"
            url={config.calendly.introCallUrl}
          />
        </Col>
      </Row>
    </Container>
  );
};

export default withPageLayout(HomeComponent);
