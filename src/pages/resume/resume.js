import React from 'react';
import { Container, Row, Col, Image, Button } from 'react-bootstrap';
import withPageLayout from '../../components/page-container/withPageLayout';
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
                    <div className="display-linebreak">{experience.body}</div>
                    <br /><br />
                </Col>
            </Row>
        );
    }
    renderImageWithDownload() {
        return (
            <Row>
                <div className='page-img'>
                    <Image src='assets/bg10.png' alt='hayden wade resume' rounded fluid />
                    <Button variant="light" href='assets/resume.pdf' size='lg'>Download Resume</Button>
                </div>
            </Row>
        );
    }
    render() {
        return (
            <Container>
                {this.renderImageWithDownload()}
                <Row>
                    <Col md={12} xs={12}>
                        <h3 className='hr-black'>Key Skills</h3>
                    </Col>
                </Row>
                <Row>
                    <Col md={6} xs={12}>
                        <ul>
                            <li>Hiring and managing the right talent to complete a project</li>
                            <li>Building high performing cross functional teams</li>
                            <li>Scaling software</li>
                            <li>Leading revenue generating/cost savings initiatives</li>
                            <li>Continuous improvement</li>
                            <li>Vendor acquisition and contract negotiation</li>
                        </ul>
                    </Col>
                    <Col md={6} xs={12}>
                        <ul>
                            <li>Leadership and Mentoring</li>
                            <li>Project and Product Management</li>
                            <li>Digital Marketing and Branding</li>
                            <li>Change and Incident Management</li>
                            <li>Application development and testing (SDLC)</li>
                            <li>Cloud architecture</li>                
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
                <Row>
                    <Col md={12} xs={12}>
                        <br/>
                        Professional Scrum Master I (PSM I) Certification, August 2022
                    </Col>
                </Row>
                <Row style={{paddingTop:'2em'}}>
                    <Col md={12} xs={12}>
                        <h3 className='hr-black'>Other Relevant Experience</h3>
                    </Col>
                </Row>
                <Row>
                    <Col md={12} xs={12}>
                    <strong>PERSONAL DEVELOPMENT AND CAREER COACH, COMMUNITY MANAGER, PODCAST HOST</strong>
                    <br />
                    Part-time, 2020 - Current
                    <br /><br />
                    <div className="display-linebreak">Worked one on one with clients to help them grow in their career or transition careers into software engineering. Help clients with improving their coding skills (data structures, algorithms), interview skills (preparation, mock interviews), job searching, networking, total compensation negotiation, and leadership skills. Founded online community, called Growth Goats, that helps individuals grow in their life, career, relationships, and/or business. Hold weekly live calls for members. Hosted 2 podcasts: Zero Plus One Podcast - career development and all things software engineering, Goat Talk - personal and business development podcast.</div>
                    <br /><br />
                    </Col>
                </Row>
                <Row>
                    <Col md={12} xs={12}>
                        <h3 className='hr-black'>Technologies</h3>
                    </Col>
                </Row>
                <Row>
                    <Col md={3} xs={12}>
                        <h4>Development Practices & Architecture</h4>
                        <ul>
                            <li>Cloud Architecture</li>
                            <li>Microservice Architecture</li>
                            <li>Role-Based Access Control</li>
                            <li>CI/CD Pipelines</li>
                            <li>Mobile First Design</li>
                            <li>Agile Methodology</li>
                            <li>Scrum</li>
                        </ul>
                    </Col>
                    <Col md={3} xs={12}>
                        <h4>Day-To-Day Comfort</h4>
                        <ul>
                            <li>AWS</li>
                            <li>Kafka</li>
                            <li>Docker</li>
                            <li>Node.js</li>
                            <li>JavaScript, TypeScript</li>
                            <li>Redis</li>
                            <li>Auth0</li>
                            <li>Postgres</li>
                            <li>Elasticsearch</li>
                           
                        </ul>
                    </Col>
                    <Col md={3} xs={12} style={{paddingTop:'40px'}}>
                        <ul>
                            <li>Terraform</li>
                            <li>RESTful APIs</li>
                            <li>C#, VB .NET</li>
                            <li>SQL, NoSQL</li>
                            <li>React.js, Redux</li>
                            <li>HLS</li>
                            <li>Squadcast</li>
                            <li>Prometheus, Grafana</li>
                            <li>Jest</li>
                        </ul>
                    </Col>
                    <Col md={3} xs={12}>
                        <h4>Experience With</h4>
                        <ul>
                            <li>Alexa Skills</li>
                            <li>Azure, Heroku</li>
                            <li>Bing Maps</li>
                            <li>RabbitMQ</li>
                            <li>Java</li>
                            <li>Angular, AngularJS</li>
                            <li>HTML5, CSS3, Bootstrap</li>
                            <li>Puppeteer, Protractor</li>
                            <li>MongoDB</li>
                            <li>Socket.io</li>
                        </ul>
                    </Col>
                </Row>
            </Container>
        );
    }
}
export default withPageLayout(Resume);