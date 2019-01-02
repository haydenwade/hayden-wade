import React from 'react';
import { Grid, Row, Col, Image, Button} from 'react-bootstrap';
import content from './content';

class Resume extends React.Component {
    renderSingleExperience(experience, i) {
        return (
            <Row key={i}>
                <Col md={12} xs={12}>
                    <strong>{experience.title}</strong>
                    <br />
                    {experience.subtitle}
                    <br /><br />
                    {experience.body}
                    <br /><br />
                </Col>
            </Row>
        );
    }
    renderImageWithDownload() {
        return (
            <Row>
            <div className='page-img'>
                <Image src='assets/bg10.png' alt='hayden wade resume' rounded responsive />
                <Button href='assets/resume.pdf' bsSize='lg'>Download Resume</Button>
                </div>
            </Row>
        );
    }
    render() {
        return (
            <Grid>
                {this.renderImageWithDownload()}
                <Row>
                    <Col md={12} xs={12}>
                        <h3 className='hr-black'>Technologies</h3>
                    </Col>
                </Row>
                <Row>
                    <Col md={4} xs={12}>
                        <h4>Development Practices & Architecture</h4>
                        <ul>
                            <li>Mobile First Design</li>
                            <li>Cross-browser Support</li>
                            <li>Agile Methodology</li>
                            <li>CI/CD Pipelines</li>
                            <li>Microservice Architecture</li>
                            <li>Role-Based Access Control</li>
                        </ul>
                    </Col>
                    <Col md={4} xs={12}>
                        <h4>Day-To-Day Comfort</h4>
                        <ul>
                            <li>Angular & AngularJS</li>
                            <li>React.js, Redux</li>
                            <li>Bootstrap</li>
                            <li>HTML5, CSS3</li>
                            <li>JavaScript</li>
                            <li>Node.js - Hapi.js, Express</li>
                            <li>Enzyme, Jest, Nightwatch.js</li>
                            <li>RESTful Apis</li>
                            <li>C#, VB .NET</li>
                            <li>Auth0</li>
                            <li>Elastic Search</li>
                            <li>SQL</li>
                            <li>ServiceStack</li>
                            <li>Git</li>
                        </ul>
                    </Col>
                    <Col md={4} xs={12}>
                        <h4>Experience With</h4>
                        <ul>
                            <li>MongoDB</li>
                            <li>Alexa Skills</li>
                            <li>AWS, Azure</li>
                            <li>Bing Maps</li>
                            <li>Socket.io</li>
                            <li>C++</li>
                            <li>Assembly</li>
                            <li>Java</li>
                            <li>Kafka</li>
                        </ul>
                    </Col>
                </Row>
                <Row>
                    <Col md={12} xs={12}>
                        <h3 className='hr-black'>Work Experience</h3>
                    </Col>
                </Row>
                {
                    content.map((experience, i) => {
                        return this.renderSingleExperience(experience, i);
                    })
                }
                <Row>
                    <Col md={12} xs={12}>
                        <h3 className='hr-black'>Education</h3>
                    </Col>
                </Row>
                <Row>
                    <Col md={12} xs={12}>
                        University of Wisconsin - Platteville, 2012-2016<br />
                        Bachelor's of Science, Software Engineering - Magna Cum Laude, Deans List
                    </Col>
                </Row>
            </Grid>
        );
    }
}
export default Resume;