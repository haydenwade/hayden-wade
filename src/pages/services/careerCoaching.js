import withPageLayout from "../../components/page-container/withPageLayout";
import { Container, Row, Col, Button, Card, Image } from "react-bootstrap";
import { careerCoaching } from "./content";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMicrosoft, faAmazon } from "@fortawesome/free-brands-svg-icons";
import { PopupButton } from "react-calendly";
import config from "../../config";

const CareerCoachingPage = () => {
  return (
    <Container>
      <Row>
        <Col md={8} xs={12}>
          <h1>{careerCoaching.title}</h1>
          <p>{careerCoaching.text}</p>
          <p>
            Looking to become a software engineer, struggling to get an
            interview at your dream job, having a hard time getting promoted,
            let me help! I offer lots of advice over here at{" "}
            <a
              href="https://www.zeroplusonepodcast.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              Zero Plus One Podcast
            </a>{" "}
            but if you would like personal advice book a session!
          </p>
        </Col>
        <Col md={4} xs={12}>
          <Card>
            <Card.Body>
              <Card.Title>Career Coaching Session</Card.Title>
              <Card.Text>
                <ul>
                  <li>60 minute chat</li>
                  <li>Direct feedback</li>
                  <li>Discuss growth</li>
                  <li>Understand career paths</li>
                  <li>Understand goals</li>
                  <li>Q&A</li>
                </ul>
                $240
              </Card.Text>
              <PopupButton
                url={config.calendly.careerCoachingUrl}
                /*
                 * react-calendly uses React's Portal feature (https://reactjs.org/docs/portals.html) to render the popup modal. As a result, you'll need to
                 * specify the rootElement property to ensure that the modal is inserted into the correct domNode.
                 */
                rootElement={document.getElementById("root")}
                text="Book Session"
                className="btn btn-primary"
              />
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Row>
        <Col className="text-center pt-3">
          Hayden has coached individuals who now work at the following
          companies:
          <hr/>
          <Row>
            <Col>
              <FontAwesomeIcon icon={faMicrosoft} size="3x"></FontAwesomeIcon>
            </Col>
            <Col>
              <FontAwesomeIcon icon={faAmazon} size="3x"></FontAwesomeIcon>
            </Col>
            <Col>
              <Image src="../assets/chr-logo.png" height={50} />
            </Col>
            <Col>
              <Image src='../assets/amount-logo.png' height={50}/>
            </Col>
            <Col>
              <Image src="../assets/target-logo.png" height={50}/>
            </Col>
          </Row>
          <hr/>
        </Col>
      </Row>
      <Row>
        <Col>
          <h2>FAQ</h2>
          <h3>How does it work?</h3>
          <p>
            After you schedule a session you will be sent a calendar invite with
            a video meeting attached to it. On the day and time of your session
            you will join the meeting where you will meet Hayden. He will take
            the time to understand where you are at and where you want to go. We
            suggest coming with specific questions or topics you would like to
            discuss.
          </p>
          <h3>How do I book a session?</h3>
          <p>
            Click on the "Book Session" button above, you will be prompted to
            choose a time slot and enter payment information. After payment is
            complete you will receive an email containing the details for the
            session.
          </p>
          <h3>How do I know if I will like working with Hayden?</h3>
          <p>
            If you are unsure if Hayden is a good fit, you can schedule a 10
            minute intro session{" "}
            <PopupButton
              url={config.calendly.introCallUrl}
              text="here"
              className="intro-calendly-link"
              /*
               * react-calendly uses React's Portal feature (https://reactjs.org/docs/portals.html) to render the popup modal. As a result, you'll need to
               * specify the rootElement property to ensure that the modal is inserted into the correct domNode.
               */
              rootElement={document.getElementById("root")}
            />
            .
          </p>
          <h3>I'm not a software engineer, can you still help me?</h3>
          <p>
            Yes, of course we can help! Hayden's knowledge is transferable
            across careers when it comes to leadership and growth. He's great at
            helping people get unstuck from their current sitution they are
            unhappy about. Unfortanetly if you are looking for advice specfic to
            your field, he can't help you there unless its related to software
            engineering.
          </p>
        </Col>
      </Row>
    </Container>
  );
};
export default withPageLayout(CareerCoachingPage);
