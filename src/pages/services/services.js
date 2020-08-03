import React from 'react';
import withPageLayout from '../../components/page-container/withPageLayout';
import { Grid, Row, Col, Button} from 'react-bootstrap';

const ServicesComponent = () => {
        return (
            <Grid>
                <Row>
                    <Col md={12} xs={12}>
                        <h1 className='hr-black'>Software Engineer & Voice Platform Fanatic</h1>
                        Hey there! I'm Hayden, a <strong>software engineer</strong> and <strong>voice platform fanatic</strong>.
                        <br />
                        Putting it simply: I solve problems by building quality software that saves my clients time and money.
                        By pairing software solutions with voice platforms, like Alexa, clients streamline their processes and build brand equity with their customers.
                        <br />
                        Ready to start? I offer consultations and SaaS products to business and individuals who want to gain the competitive edge in their industry.
                        <hr/>
                    </Col>
                </Row>
                <Row>
                    <Col md={6} xs={12} className="text-center">
                        <i className="fa fa-code fa-5x"></i>
                        <br />
                        <h2>Software Consulting</h2>
                        For all your software needs I am happy to consult. Solution design and architecture, agile software development, test automation, data pipelines, infrastructure as code, web applications, and user experience.
                    </Col>
                    <Col md={6} xs={12} className="text-center">
                        <i className="fa fa-user-circle-o fa-5x"></i>
                        <br />
                        <h2>Mentoring</h2>
                        Looking to become a software engineer, struggling to get an interview at your dream job, let me help! I offer lots of advice over here at <a href="https://www.zeroplusonepodcast.com" target="_blank" rel="noopener noreferrer">Zero Plus One Podcast</a> but if you are looking for something
                        specific shoot me a message and I would be happy to help.
                    </Col>
                </Row>
                <Row className="text-center last-row">
                    <Col md={12} xs={12}>
                        <br />
                        <Button className='red-shadow' bsSize='large' href='mailto:solutions@haydenwade.com?subject=I Need Your Help ASAP&body=Hi Hayden, I would love to work together. I am looking for...'>Let's Work Together</Button>                    
                    </Col>
                </Row>
            </Grid>
        )
}

export default withPageLayout(ServicesComponent);