import { useState } from "react";
import withPageLayout from "../../components/page-container/withPageLayout";
import { Container, Row, Col, Card, Alert } from "react-bootstrap";
import { resumeReview } from "./content";
import { PopupButton } from "react-calendly";
import config from "../../config";
import Countdown from "react-countdown";

const ResumeReviewPage = () => {
  const [isExpired, setExpired] = useState(false);
  return (
    <Container>
      <Row>
        <Col md={8} xs={12}>
          <h1>Let Recruiters Come to You!</h1>
          <p>{resumeReview.text}</p>
          <p>
            A great resume is the start of a new opportunity. We will teach you
            what makes a resume great so you never have to come to us again. We
            will tell you how to make your resume show up more frequently in
            recruiters searches so you get more requests for new opportunities.
          </p>
        </Col>
        <Col md={4} xs={12}>
          <Card>
            <Card.Body>
              <Card.Title>Resume Review Service</Card.Title>
              <Card.Text>
                <ul>
                  <li>45 minute chat with an resume expert</li>
                  <li>Direct feedback</li>
                  <li>Live editing</li>
                </ul>
                {!isExpired && (
                  <Alert key="warning" variant="warning">
                    <strong>Limited time offer:</strong> Order within the next{" "}
                    <Countdown
                      date={Date.now() + 5 * 60 * 1000}
                      onComplete={() => setExpired(true)}
                      renderer={(p) => {
                        return (
                          <>
                            {p.minutes}:{p.seconds}
                          </>
                        );
                      }}
                    />{" "}
                    and we will include a LinkedIn Review, a $350 value for free
                  </Alert>
                )}
                $229
              </Card.Text>
              <PopupButton
                url={isExpired ? config.calendly.resumeReviewUrl : config.calendly.resumeReviewXLinkedInReviewUrl}
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
            you will join the meeting where you will meet an resume expert who
            will review your resume with you (make sure to have it ready before
            hand - you may be asked to upload or email your resume). The expert
            will provide you feedback and will help you edit it during the 45
            minute call.
          </p>
          <h3>How do I book a session?</h3>
          <p>
            Click on the "Book Session" button above, you will be prompted to
            choose a time slot and enter payment information. After payment is
            complete you will receive an email containing the details for the
            session.
          </p>
          <h3>Who will be my reviewing my resume?</h3>
          <p>
            If you are lucky you will get Hayden to review your resume,
            otherwise one of his teammates will help you update your resume to
            be top notch. Hayden's teammates are recruiters and software
            engineers from top tech companies.
          </p>
          <h3>I'm not a software engineer, can you still help me?</h3>
          <p>
            Yes, of course we can help! Hayden and his team understand the core
            pieces of a resume regardless of career/industry. They got you!
          </p>
        </Col>
      </Row>
    </Container>
  );
};
export default withPageLayout(ResumeReviewPage);
