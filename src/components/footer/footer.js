import React from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import CopyrightFooter from '../../shared-components/copyright-footer';
import SocialLinks from '../social-links';

const AppFooter = () => {
    return (
        <Grid>
            <Row>
                <Col className="text-center">
                    <hr />
                    <SocialLinks />
                    <hr />
                    <CopyrightFooter beholder="Hayden Wade"/>
                </Col>
            </Row>
        </Grid>
    );
}
export default AppFooter;