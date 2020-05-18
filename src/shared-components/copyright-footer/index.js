import React from 'react';
import { Row, Col } from 'react-bootstrap';

import './styles.css';

const copyrightFooter = (props) => {
    return (
        <Row>
            <Col className="copyright-footer">
                Copyright © 2020 {props.beholder}. All rights reserved.
            </Col>
        </Row>
    );
}
export default copyrightFooter;