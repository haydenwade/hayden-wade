import React from 'react';
import { Grid, Row, Col, PageHeader } from 'react-bootstrap';

class Services extends React.Component {
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