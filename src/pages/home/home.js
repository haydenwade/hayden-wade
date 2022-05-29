import React from 'react';
import withPageLayout from '../../components/page-container/withPageLayout';
import { Container, Row, Col, Image } from 'react-bootstrap';
import Chat from '../../shared-components/chat/chat';

class HomeComponent extends React.Component {
    render() {
        return (
            <Container>
                <Row>
                    <Col className="text-center">
                        <h1>Hi, I'm Hayden Wade.</h1>
                        {/* If you ask me something I'll reply or my  AI assistant, Steve, will if I'm busy adventuring or at work.
                        <br/>
                        [Beta] */}
                    </Col>
                </Row>
                {/* <Row>
                    <Chat />
                </Row>
                <Row>
                    <Col className="text-center">
                        <a href="/about"><small>Read about me instead?</small></a>
                    </Col>
                </Row> */}
                <Row className="align-items-center">
                    <Col md={6} sm={12}>
                        I am a software engineer, creator, and adventurer who enjoys helping people learn new technology and 
                        how to build quality software that scales. Here you will find my professional experience and side projects
                        that I've created over the years, as well as, links to all my socials where I am most active.
                    </Col>
                    <Col md={6} sm={12}>
                        <Image src='assets/haydenwade.jpg' alt='Seven Magic Mountains, Las Vegas, Nevada' fluid/> 
                    </Col>
                </Row>
            </Container>
        )
    }
}

export default withPageLayout(HomeComponent);