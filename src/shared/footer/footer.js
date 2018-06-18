import React from 'react';
import { Grid, Row, Col } from 'react-bootstrap';

class AppFooter extends React.Component {
    render() {
        return (
            <Grid>
                <Row>
                    <Col xs={12} md={12} className="text-center">
                        <ul className="center-pills">
                            <li><a href="http://bit.ly/2cQj57q" title="Follow me on Instagram!"><span className="fa fa-instagram fa-2x"></span></a></li>
                            <li><a href="http://bit.ly/2icSqnt" title="Subscribe to my channel on YouTube!"><span className="fa fa-youtube-play fa-2x"></span></a></li>
                            <li><a href="http://bit.ly/2cxktcJ" title="Follow me on Twitter!"><span className="fa fa-twitter fa-2x"></span></a></li>
                            <li><a href="http://bit.ly/2jgAk0V" title="Connect with me on LinkedIn!"><span className="fa fa-linkedin-square fa-2x"></span></a></li>
                            <li><a href="http://bit.ly/2d5R5ui" title="Follow me on GitHub!"><span className="fa fa-github fa-2x"></span></a></li>
                        </ul>
                    </Col>
                </Row>
                <Row>
                    <Col xs={12} md={12} className="text-center">
                        <strong><i className="fa fa-copyright" aria-hidden="true"></i><small>2018 Hayden Wade</small></strong>
                    </Col>
                </Row>
            </Grid>
        );
    }
}
export default AppFooter;