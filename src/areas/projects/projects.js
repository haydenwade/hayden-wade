import React from 'react';
import { Grid, Row, Col, Image} from 'react-bootstrap';
import content from './content';

class Projects extends React.Component {
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
    renderImage() {
        return (
            <Row>
                <Image src='assets/bg8.png' alt='hayden wade projects' rounded responsive />
            </Row>
        );
    }
    render() {
        return (
            <Grid className='page-content'>
            {this.renderImage()}
                <Row>
                    <Col md={12} xs={12}>
                        <h3 className='hr-black'>Projects</h3>
                    </Col>
                </Row>
                {
                    content.map((project, i) => {
                        return this.renderSingleProject(project, i)
                    })
                }
            </Grid>
        );
    }
}
export default Projects;