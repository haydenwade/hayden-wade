import React from 'react';
import { Grid, Row, Col, PageHeader} from 'react-bootstrap';

class Resume extends React.Component {
    componentWillMount() {
        let element = document.getElementsByTagName('body');
        element[0].style.backgroundImage = "url('assets/bg7.jpg')";
        element[0].style.backgroundSize = "cover";
    }
    render() {
        return (
            <Grid className='page-content'>
                <Row>
                    <Col md={12} xs={12}>
                        <PageHeader className='hr-black'>Resume</PageHeader>
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
                            <li>JavaScript</li>
                            <li>Node.js</li>
                            <li>RESTful Apis</li>
                            <li>C# .NET</li>
                            <li>ServiceStack</li>
                            <li>Auth0</li>
                            <li>Elastic Search</li>
                            <li>Git along with GitHub</li>
                        </ul>
                    </Col>
                    <Col md={4} xs={12} className='body-text'>
                        <h3>Experience With</h3>
                        <ul>
                            <li>Alexa Skills</li>
                            <li>AWS Lambda</li>
                            <li>Enzyme - Test Framework</li>
                            <li>Jest - Test Framework</li>
                            <li>Nightwatch.js - E2E Test Framework(limited)</li>
                            <li>Protractor - E2E Test Framework</li>
                            <li>Gulp</li>
                            <li>C++</li>
                            <li>Java</li>
                        </ul>
                    </Col>
                </Row>
                <Row>
                    <Col md={12} xs={12} className='body-text'>
                    </Col>
                </Row>
            </Grid>
        );
    }
}
export default Resume;