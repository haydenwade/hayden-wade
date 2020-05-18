import React from 'react';
import withPageLayout from '../../components/page-container/withPageLayout';import { Grid, Row, Col, Button} from 'react-bootstrap';

const HomeComponent = () => {
        return (
            <Grid>
                <Row className='red-shadow'>
                    <Col md={6} xs={12} className='home-left-col'>
                        <h1 className='red-underline-text'>Leverage voice <br/>to grow your business.</h1>
                        <h2>Execute faster and build a stronger <br/>brand with voice.</h2>
                        <br/>
                        <Button className='red-shadow' bsSize='large' href='mailto:voice@haydenwade.com?subject=I Want to Leverage Voice For My Business&body=Hi Hayden, I would love to chat about how voice can build my brand and speed up execution.'>Get Started</Button>
                    </Col>
                    <Col md={6} xs={12} className='home-img-col'>
                        <img className='pull-right' src='assets/haydenwade3.jpg' alt='Hayden Wade is a software engineer.' height='450'/>
                    </Col>
                </Row>
                <Row>
                    <Col md={12} xs={12}>
                        <h2><strong>Meet me: </strong>Software Engineer & Voice Platform Fanatic</h2>
                        <br />
                        Hey there! I'm Hayden, a <strong>software engineer</strong> and <strong>voice platform fanatic</strong>.
                        <br />
                        Putting it simply: I solve problems by building quality software that saves my clients time and money.
                        By pairing software solutions with voice platforms, like Alexa, clients streamline their processes and build brand equity with their customers.
                        <br />
                        Ready to start? I offer consultations and SaaS products to business and individuals who want to gain the competitive edge in their industry.
                        <br />
                        <a href="/about">Read more about me...</a>
                    </Col>
                </Row>
                <Row>
                    <Col md={12} xs={12}>
                        <h2 className='text-center'><strong>Voice By Hayden</strong></h2>
                        <br/>
                        By integrating voice into day to day operations execution is much faster. How can this be? Well for starters a person can speak on average of 120 words per minute (wpm)
                        and only type 33 wpm. Let's walk through a scenario: sending a text to a friend. 
                        <br/>
                        <strong>Normal process:</strong> unlock phone, find and open texting app, choose contact, type text, and click send. (5 steps)
                        <br/>
                        <strong>Now with voice:</strong> speak the command "Hey Siri, text Susie V. that I will be late to the board meeting." (1 step)
                        <br/>
                        Voice is not only faster, but also helping build brands by building relationships with active users.
                        I provide several solutions around voice and<a href="/voice"> those can be found here</a>.
                    </Col>
                </Row>
                <Row>
                    <Col md={4} xs={12} className="text-center">
                        <i className="fa fa-pencil-square-o fa-5x"></i>
                        <br />
                        <h4>Briefing Content Manager</h4>
                        Briefing Content Manager (BCM) provides a way to manage Alexa flash briefing content at anytime from anywhere.
                        BCM makes distributing content instantly to clients, followers, and employees easy and does not require skills of a developer.
                        BCM supports media-files (mp3 and mp4) and text-to-speech (TTS). 
                        <a href="/briefing-content-manager">Read more.</a>
                    </Col>
                    <Col md={4} xs={12} className="text-center">
                        <i className="fa fa-microphone fa-5x"></i>
                        <br />
                        <h4>Custom Skill Development</h4>
                        For more complex tasks I will work one on one to build a custom skill to automate and stream line processes, as well as create a voice that expands your brand.
                        I can build voice skills for several platforms, as well as, for chat rooms.
                        <a href='mailto:voice@haydenwade.com?subject=Custom Skill&body=Hi Hayden, I am interested in building a custom skill and...'> Contact Me.</a>
                        {/* <a href="/custom-skills">Read more.</a> */}
                    </Col>
                    <Col md={4} xs={12} className="text-center">
                        <i className="fa fa-user-circle-o fa-5x"></i>
                        <br />
                        <h4>Consulting</h4>
                        For other software needs I am happy to consult. <a href='mailto:voice@haydenwade.com?subject=Software Consulting&body=Hi Hayden, I would love to work together. I am looking for...'>Contact Me.</a>
                    </Col>
                </Row>
                <Row className="text-center last-row">
                    <Col md={12} xs={12}>
                        <h2><strong>Ready to become innovative?</strong></h2>
                        <br />
                        <Button className='red-shadow' bsSize='large' href='mailto:voice@haydenwade.com?subject=I Need Your Help ASAP&body=Hi Hayden, I would love to work together. I am looking for...'>Let's Work Together</Button>                    
                    </Col>
                </Row>
            </Grid>
        )
}

export default withPageLayout(HomeComponent);