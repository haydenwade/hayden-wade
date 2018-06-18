import React from 'react';
import { Grid, Row, Col, PageHeader } from 'react-bootstrap';
import content from './content';

class Resume extends React.Component {
    componentWillMount() {
        let element = document.getElementsByTagName('body');
        element[0].style.backgroundImage = "url('assets/bg7.jpg')";
        element[0].style.backgroundSize = "cover";
    }
    renderSingleExperience(experience,i) {
        return (
            <Row key={i}>
                <Col md={12} xs={12} className='body-text'>
                    <strong>{experience.title}</strong>
                    <br/>
                    {experience.subtitle}
                    <br/><br/>
                    {experience.body}
                    <br/><br/>
                </Col>
            </Row>
        );
    }
    render() {
        return (
            <Grid className='page-content'>
                <Row>
                    <Col md={12} xs={12}>
                        <PageHeader className='hr-black'>Technologies</PageHeader>
                    </Col>
                </Row>
                <Row>
                    <Col md={4} xs={12} className='body-text'>
                        <h3>Development Practices & Architecture</h3>
                        <ul>
                            <li>Mobile First Design</li>
                            <li>Cross-browser Support</li>
                            <li>Agile Methodology</li>
                            <li>CI/CD Pipelines</li>
                            <li>Microservice Architecture</li>
                            <li>Role-Based Access Control</li>
                        </ul>
                    </Col>
                    <Col md={4} xs={12} className='body-text'>
                        <h3>Day-To-Day Comfort</h3>
                        <ul>
                            <li>Angular & AngularJS</li>
                            <li>React.js (work in progress)</li>
                            <li>Redux</li>
                            <li>HTML5, CSS3</li>
                            <li>Bootstrap</li>
                            <li>JavaScript</li>
                            <li>Node.js</li>
                            <li>RESTful Apis</li>
                            <li>C#, VB .NET</li>
                            <li>ServiceStack</li>
                            <li>Auth0</li>
                            <li>Elasticsearch</li>
                            <li>SQL</li>
                            <li>Git along with GitHub</li>
                        </ul>
                    </Col>
                    <Col md={4} xs={12} className='body-text'>
                        <h3>Experience With</h3>
                        <ul>
                            <li>MongoDB</li>
                            <li>Alexa Skills</li>
                            <li>AWS Lambda</li>
                            <li>Enzyme, Jest, Jasmine - Test Frameworks</li>
                            <li>Nightwatch.js - E2E Test Framework(limited)</li>
                            <li>Protractor - E2E Test Framework</li>
                            <li>Gulp</li>
                            <li>C++</li>
                            <li>Assembly</li>
                            <li>Java</li>
                        </ul>
                    </Col>
                </Row>
                <Row>
                    <Col md={12} xs={12}>
                        <PageHeader className='hr-black'>Work Experience</PageHeader>
                    </Col>
                </Row>
                {
                    content.map((experience,i)=>{
                        return this.renderSingleExperience(experience,i);
                    })
                }
                <Row>
                    <Col md={12} xs={12}>
                        <PageHeader className='hr-black'>Education</PageHeader>
                    </Col>
                </Row>
                <Row>
                    <Col md={12} xs={12} className='body-text'>
                        University of Wisconsin - Platteville<br />
                        Bachelor's of Science, Software Engineering - Magna Cum Laude, Deans List
                    </Col>
                </Row>
            </Grid>
        );
    }
}
export default Resume;