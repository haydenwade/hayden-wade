import React from 'react';
import withPageLayout from '../../components/page-container/withPageLayout';
import { Grid, Row, Col} from 'react-bootstrap';

const HomeComponent = () => {
        return (
            <Grid>
                <Row>
                    <Col>
                       Home
                    </Col>
                </Row>
            </Grid>
        )
}

export default withPageLayout(HomeComponent);