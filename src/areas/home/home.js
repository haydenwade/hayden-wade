import React from 'react';
import { Grid, Row, Col} from 'react-bootstrap';
import Tile from '../../shared/linkTile/tile';
import FadeInHoc from '../../shared/animations/fade/fadeInHoc';

class HomeComponent extends React.Component {
    //defaulting in it css to see if it loads quicker
    componentWillMount(){
        let element = document.getElementsByTagName('body');
        element[0].style.backgroundImage = "url('assets/bg6.jpg')";
        element[0].style.backgroundSize = "cover";
    }
    render() {
        return (
            <Grid>
                <Row>
                    <Col>
                        <header className='masthead'>
                            <div className='hw-header text-center'>
                                <h1>Hayden Wade</h1>
                                <h2>Software Engineer</h2>
                            </div>
                        </header>
                    </Col>
                </Row>
                <Row />
                <Row>
                    <Col md={4} xs={12}>
                        <FadeInHoc>
                            <Tile icon='fa fa-id-card-o fa-5x' linkTo='aboutme' text='About Me' />
                        </FadeInHoc>
                    </Col>
                    <Col md={4} xs={12}>
                        <FadeInHoc>
                            <Tile icon='fa fa-code fa-5x' linkTo='resume' text='Resume' />
                        </FadeInHoc>
                    </Col>
                    <Col md={4} xs={12}>
                        <FadeInHoc>
                            <Tile icon='fa fa-rocket fa-5x' linkTo='/projects' text='Projects' />
                        </FadeInHoc>
                    </Col>
                </Row>
            </Grid>
        )
    }
}

export default HomeComponent;