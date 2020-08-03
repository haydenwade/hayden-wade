import React from 'react';
import withPageLayout from '../../components/page-container/withPageLayout';
import { Grid, Row, Col} from 'react-bootstrap';
import Chat from '../../shared-components/chat/chat';

class HomeComponent extends React.Component {
    render() {
        return (
            <Grid>
                <Row>
                    <Col className="text-center">
                        <h1>Hi, I'm Hayden Wade.</h1>
                        If you ask me something I'll reply or my  AI assistant, Steve, will if I'm busy adventuring or at work.
                    </Col>
                </Row>
                <Row>
                <Chat/>
                </Row>
                <Row>
                    <Col className="text-center">
                        <a href="/about"><small>Read about me instead?</small></a>
                    </Col>
                </Row>
            </Grid>
        )
    }
}

export default withPageLayout(HomeComponent);