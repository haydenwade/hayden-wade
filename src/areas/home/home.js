import React from 'react';
import { Grid, Row, Col,PageHeader} from 'react-bootstrap';
import Tile from '../../shared/linkTile/tile';
import FadeInHoc from '../../shared/animations/fade/fadeInHoc';

class HomeComponent extends React.Component {
    render() {
        return (
            <Grid>
                <Row>
                    <Col>
                        <PageHeader>Hayden Wade</PageHeader>
                    </Col>
                </Row>
                <Row />
                <Row>
                    <Col md={4} xs={12}>
                        <FadeInHoc>
                            <Tile icon='fa fa-id-card-o fa-5x' linkTo='aboutme' text='About Me'/>
                        </FadeInHoc>
                    </Col>
                    <Col md={4} xs={12}>
                        <FadeInHoc>
                            <Tile icon='fa fa-code fa-5x' linkTo='services' text='Services'/>
                        </FadeInHoc>
                    </Col>
                    <Col md={4} xs={12}>
                        <FadeInHoc>
                            <Tile icon='fa fa-rocket fa-5x' linkTo='/projects' text='Projects'/>
                        </FadeInHoc>
                    </Col>
                </Row>
            </Grid>
            )
    }
}

export default HomeComponent;