import React from 'react';
import withPageLayout from '../../components/withPageLayout';
import { Grid, Row, Col, Button} from 'react-bootstrap';

const HomeComponent = () => {
        return (
            <Grid>
                <Row>
                    <Col md={12} xs={12} >
                       Home
                    </Col>
                </Row>
            </Grid>
        )
}

export default withPageLayout(HomeComponent);