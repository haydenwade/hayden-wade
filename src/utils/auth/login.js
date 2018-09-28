import { Component } from 'react';
import { login } from './auth-service';

class Login extends Component {

  componentDidMount() {
    login('/briefings');
  }

  render() {
    return null;
  }
}

export default Login;