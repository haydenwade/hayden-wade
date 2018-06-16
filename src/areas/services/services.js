import React from 'react';
import { Grid, Row, Col, PageHeader } from 'react-bootstrap';

class Services extends React.Component {
    componentWillMount(){
        let element = document.getElementsByTagName('body');
        element[0].style.backgroundImage = "url('assets/bg7.jpg')";
        element[0].style.backgroundSize = "cover";
    }
    render() {
        return (
            <Grid>
                <Row>
                    <Col>
                        <PageHeader>Services</PageHeader>
                    </Col>
                </Row>
                <Row />
                <Row>
                    <Col md={12} xs={12} className='body-text'>

                    </Col>
                </Row>
            </Grid>
        );
    }
}
export default Services;