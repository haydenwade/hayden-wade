import React from 'react';
import withPageLayout from '../../components/page-container/withPageLayout';
import { Container, Row, Col, Button} from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCode, faUserCircle } from '@fortawesome/free-solid-svg-icons'

const ServicesComponent = () => {
        return (
            <Container>
                <Row>
                    <Col md={12} xs={12}>
                        <h1 className='hr-black'>Services</h1>
                        I solve problems by building quality software that saves my clients time and money. I offer consultations to businesses and individuals who want to gain the competitive edge in their industry.
                        <hr/>
                    </Col>
                </Row>
                <Row>
                    <Col md={6} xs={12} className="text-center">
                        <FontAwesomeIcon icon={faCode} size="5x"></FontAwesomeIcon>
                        <br />
                        <h2>Software Consulting</h2>
                        For all your software needs I am happy to consult. Solution design and architecture, agile software development, test automation, data pipelines, infrastructure as code, web applications, and user experience. Learn more at <a href="https://www.teamwawe.com" target="_blank" rel="noopener noreferrer">teamwawe.com</a>
                    </Col>
                    <Col md={6} xs={12} className="text-center">
                        <FontAwesomeIcon icon={faUserCircle} size="5x"></FontAwesomeIcon>
                        <br />
                        <h2>Mentoring</h2>
                        Looking to become a software engineer, struggling to get an interview at your dream job, let me help! I offer lots of advice over here at <a href="https://www.zeroplusonepodcast.com" target="_blank" rel="noopener noreferrer">Zero Plus One Podcast</a> but if you are looking for something
                        specific shoot me a message and I would be happy to help.
                    </Col>
                </Row>
                <Row className="text-center last-row">
                    <Col md={12} xs={12}>
                        <br />
                        <Button className='red-shadow' size='lg' variant="light" href='mailto:solutions@haydenwade.com?subject=I Need Your Help ASAP&body=Hi Hayden, I would love to work together. I am looking for...'>Let's Work Together</Button>                    
                    </Col>
                </Row>
            </Container>
        )
}

export default withPageLayout(ServicesComponent);