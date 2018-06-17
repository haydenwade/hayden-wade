import React from 'react';
import { Grid, Row, Col, PageHeader} from 'react-bootstrap';
import content from './content';

class Projects extends React.Component {
    componentWillMount() {
        let element = document.getElementsByTagName('body');
        element[0].style.backgroundImage = "url('assets/bg8.jpg')";
        element[0].style.backgroundSize = "cover";
    }
    renderSingleProject(project, i) {
        return (
            <Row>
                <Col md={12} xs={12} key={i}>
                    <Row>
                        <Col md={12} xs={12}>
                            <h2>{project.title} <small>{project.subtitle}</small></h2>
                        </Col>
                    </Row>
                    <Row>
                        <Col md={12} xs={12} className='body-text'>
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
            <Grid className='page-content'>
                <Row>
                    <Col md={12} xs={12}>
                        <PageHeader className='hr-black'>Projects</PageHeader>
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