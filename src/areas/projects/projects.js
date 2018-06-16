import React from 'react';
import { Grid, Row, Col, PageHeader } from 'react-bootstrap';
import content from './content';

class Projects extends React.Component {
    renderSingleProject(project,i) {
        return (
            <Col md={12} xs={12} key={i}>
            <Row>
                <Col md={12} xs={12}>
                    <h2>{project.title} <small>{project.subtitle}</small></h2>
                </Col>
            </Row>
            <Row>
                <Col md={12} xs={12} className='body-text'>
                    {project.body}
                </Col>
            </Row>
            </Col>
        );
    }
    render() {
        return (
            <Grid>
                <Row>
                    <Col>
                        <PageHeader>Projects</PageHeader>
                    </Col>
                </Row>
                    {
                        content.map((project,i) => {
                            return this.renderSingleProject(project,i)
                        })
                    }
                <Row />
               
            </Grid>
        );
    }
}
export default Projects;