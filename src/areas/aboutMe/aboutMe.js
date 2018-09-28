import React from 'react';
import { Grid, Row, Col} from 'react-bootstrap';
import projects from './projects';

class AboutMe extends React.Component {
    renderSingleProject(project, i) {
        return (
            <Row key={i}>
                <Col md={12} xs={12} key={i}>
                    <Row>
                        <Col md={12} xs={12}>
                            <h4>{project.title} <small>{project.subtitle}</small></h4>
                        </Col>
                    </Row>
                    <Row>
                        <Col md={12} xs={12}>
                            {project.body}
                            <a href={project.link}>View Code</a>
                        </Col>
                    </Row>
                </Col>
            </Row>
        );
    }
    render() {
        return (
            <Grid>
                <Row>
                    <Col md={12} xs={12}>
                        <h3 className='hr-black'>About Me</h3>
                    </Col>
                </Row>
                <Row>
                    <Col md={8} xs={12}>
                        I am a software engineer, born and raised in Wisconsin and have now fled to the land of 10,000 Lakes,
                        city with the most fortune 500 companies per capita, Minneapolis. My passion for computers came at a young age,
                        around the time of the first iMac (I had a green one). At the age of 13 I spent my evenings after school editing the markup of my MySpace profile;
                        this was the stepping stone to my future. In high school I took a web development class and began helping my
                        dad make websites. With little ambition for anything else and the tech industry booming I decided to go to college for Software Engineering. I attended the 
                        University of Wisconsin - Platteville and graduate with a Bachelor's Of Science in Software Engineering in 2016. College is really when 
                        my mind began to flood with new ideas and creations. Working at a small startup in the basement of city hall to working at a Fortune 200 company
                        has gave me the exposure and knowledge to build high quality software that delivers value to customers. Today I build software for clients all over the world.
                    </Col>
                    <Col md={4} xs={12} className='text-center'>
                        <img src='assets/haydenwade5.jpg' alt='hayden wade is a software engineer from Minneapolis, Minnesota.' height='350'/>
                    </Col>
                </Row>
                <Row>
                    <Col md={12} xs={12}>
                        <h3 className='hr-black'>Projects</h3>
                    </Col>
                </Row>
                {
                    projects.map((project, i) => {
                        return this.renderSingleProject(project, i)
                    })
                }
            </Grid>
        )
    }
}
export default AboutMe;