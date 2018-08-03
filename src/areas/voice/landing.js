import React from 'react';
import { Grid, Row, Col, Button } from 'react-bootstrap';
import { isLoggedIn, login, logout } from '../../utils/auth/auth-service';

class LandingPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
        this.login = this.login.bind(this);
        this.logout = this.logout.bind(this);
    }
    login() {
        login('/briefings');
    }
    logout() {
        logout();
        this.forceUpdate();
    }
    render() {
        return (
            <Grid className='page-content'>
                <Row>
                    <Col md={12} xs={12}>
                        <h3 className='hr-black'>Welcome to Voice by Hayden</h3>
                    </Col>
                </Row>
                <Row>
                    <Col md={12} xs={12}>
                        {
                            isLoggedIn() ? (<Button onClick={this.logout}>Logout</Button>) : (<Button onClick={this.login}>Login</Button>)
                        }
                    </Col>
                </Row>
            </Grid>
        )
    }
}

export default LandingPage;