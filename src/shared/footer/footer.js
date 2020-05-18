import React from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import CopyrightFooter from '../../components/copyright-footer';
import SocialLinks from '../../components/social-links';

const AppFooter = () => {
    return (
        <Grid>
            <Row>
                <Col className="text-center">
                    <hr />
                    <SocialLinks />
                    <hr />
                    <CopyrightFooter />
                </Col>
            </Row>
        </Grid>
    );
}
export default AppFooter;