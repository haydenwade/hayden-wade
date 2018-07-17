import React from 'react';
import { Grid, Row, Col } from 'react-bootstrap';

class AppFooter extends React.Component {
    render() {
        return (
            <Grid>
                <Row>
                    <Col xs={12} md={12} className="text-center">
                        <ul className="center-pills">
                            <li><a href="https://instagram.com/haydenty1" title="Follow me on Instagram!"><span className="fa fa-instagram fa-2x"></span></a></li>
                            <li><a href="https://youtube.com/haydenty" title="Subscribe to my channel on YouTube!"><span className="fa fa-youtube-play fa-2x"></span></a></li>
                            <li><a href="https://twitter.com/haydenty1" title="Follow me on Twitter!"><span className="fa fa-twitter fa-2x"></span></a></li>
                            <li><a href="https://www.linkedin.com/in/haydenwade/" title="Connect with me on LinkedIn!"><span className="fa fa-linkedin-square fa-2x"></span></a></li>
                            <li><a href="https://github.com/haydenwade" title="Follow me on GitHub!"><span className="fa fa-github fa-2x"></span></a></li>
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