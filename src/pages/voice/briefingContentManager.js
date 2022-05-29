import React from 'react';
import withPageLayout from '../../components/page-container/withPageLayout';
import withArchives from '../../components/page-container/withArchives';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSignInAlt, faPencilAlt, faSave } from '@fortawesome/free-solid-svg-icons'
import config from '../../config';

const BriefingContentManager = ()=> {
        return (
            <Container>
                <Row>
                    <Col md={12} xs={12}>
                        <h1 className='hr-black'>Briefing Content Manager</h1>
                        Being able to remove, update, and add new content to Alexa flash briefing feeds is essential to informing clients or updating followers what you are up to.
                        The Briefing Content Manager (BCM) allows you to do just that.
                        If you are not familiar with Alexa flash briefings, flash briefings are played when a person asks "Alexa, play my flash briefings." or "Alexa, what's in the news?".
                        A briefing is a single piece of content that is played from your Alexa enabled device. Briefings can be audio clips or text that Alexa will speak on your behalf.
                        Audio clips are great for building your brand because consumers will begin to identify that "voice" as your brand. There is a secret type of media that you can also use
                        for your briefings and that is video files. They are secret because Amazon hasn't officially stated if they are supported. If you choose to use video files for your briefings
                        the video will be played on devices like the echo show and just the audio will be played on other Alexa devices.
                    </Col>
                </Row>
                <Row>
                    <Col md={12} xs={12}>
                        <h2>How it Works</h2>
                    </Col>
                </Row>
                <Row>
                    <Col md={4} xs={12} className="text-center">
                        <FontAwesomeIcon icon={faSignInAlt} size="5x"></FontAwesomeIcon>
                        <br />
                        <h3>Step 1: Sign Up, Login</h3>
                        If you do not have an account yet please sign up for free trial. Email <a href={`mailto:${config.emailAddress}?subject=Sign Me Up For BCM&body=Hi Hayden, I would love to get a free trail! What do I need to do?`}>{config.emailAddress}</a> to get the free trial started.
                    </Col>
                    <Col md={4} xs={12} className="text-center">
                        <FontAwesomeIcon icon={faPencilAlt} size="5x"></FontAwesomeIcon>
                        <br />
                        <h3>Step 2: Modify Content</h3>
                        After signing in you can create, update, delete briefings from your feed. Briefings will be played based on their publish date. 
                        You can also upload media files that will be played instead of plain text. The text you enter will also appear in the Alexa iOS and Android apps.
                    </Col>
                    <Col md={4} xs={12} className="text-center">
                        <FontAwesomeIcon icon={faSave} size="5x"></FontAwesomeIcon>
                        <br />
                        <h3>Step 3: Publish</h3>
                        When you click 'Publish' all changes will go live, meaning your clients or followers will now hear your latest news.
                    </Col>
                </Row>
                <Row>
                    <Col md={12} xs={12} className="text-center">
                        <br/>
                        <Button className='red-shadow' size='lg' variant="light" href={`mailto:${config.emailAddress}?subject=Sign Me Up For Briefing Content Manager&body=Hi Hayden, I would love to get started using the Briefing Content Manager, what are the next steps?`}>Sign Up</Button>                    
                    </Col>
                </Row>
                {/* <Row>
                    <Col md={12} xs={12} className="text-center">
                        <h3>INSERT DEMO VIDEO</h3>
                    </Col>
                </Row> */}
                <Row>
                    <Col md={12} xs={12}>
                        <h2>FAQ</h2>
                        <h3>Don't want to use Alexa for your feed, maybe a different assistant?</h3>
                        Contact us and we can get you setup on a different platform. We offer both voice and chat bots over SMS, slack, skype, email, and others upon request.
                    </Col>
                </Row>
            </Container>
        )
}

export default withPageLayout(withArchives(BriefingContentManager));