import withPageLayout from "../../components/page-container/withPageLayout";
import { salaryNegotiation } from "./content";
import { Container, Row, Col, Card } from "react-bootstrap";
import { PopupButton } from "react-calendly";
import config from "../../config";

const SalaryNegotiationPage = () => {
  return (
    <Container>
      <Row>
        <Col md={8} xs={12}>
          <h1>{salaryNegotiation.title}</h1>
          <p>{salaryNegotiation.text}</p>
        </Col>
        <Col md={4} xs={12}>
          <Card>
            <Card.Body>
              <Card.Title>Salary Negotiation</Card.Title>
              <Card.Text>
                <ul>
                  <li>Unlimited emails/texts until offer signed</li>
                  <li>Direct examples of what to say</li>
                  <li>Step-by-step coaching</li>
                </ul>
                <strike>$850</strike> $550
              </Card.Text>
              <PopupButton
                url={config.calendly.salaryNegotiationUrl}
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
        <Col>
          <h2>FAQ</h2>
          <h3>How does it work?</h3>
          <p>
            After you schedule a session you will be sent a calendar invite with
            a video meeting attached to it. On the day and time of your session
            you will join the meeting where you will meet Hayden. Discuss your
            current offer and establish a plan to get you an higher offer.
          </p>
          <h3>How do I book a session?</h3>
          <p>
            Click on the "Book Session" button above, you will be prompted to
            choose a time slot and enter payment information. After payment is
            complete you will receive an email containing the details for the
            session.
          </p>
          <h3>I'm not a software engineer, can you still help me?</h3>
          <p>
            Yes, of course we can help! Hayden's knowledge is transferable
            across careers when it comes to negotiating offers.
          </p>
        </Col>
      </Row>
    </Container>
  );
};
export default withPageLayout(SalaryNegotiationPage);
