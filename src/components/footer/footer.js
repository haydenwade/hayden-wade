import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import CopyrightFooter from '../../shared-components/copyright-footer';
import SocialLinks from '../social-links';

const AppFooter = () => {
    return (
        <Container>
            <Row>
                <Col className="text-center">
                    <hr />
                    <SocialLinks />
                    <hr />
                    <CopyrightFooter beholder="Hayden Wade"/>
                </Col>
            </Row>
        </Container>
    );
}
export default AppFooter;