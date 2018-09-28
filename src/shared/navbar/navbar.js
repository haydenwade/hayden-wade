import React from 'react';
import { Navbar, Nav, NavItem, NavDropdown,MenuItem } from 'react-bootstrap';
import AuthLoginProfile from '../../utils/auth/components/login-profile';

class AppNavBar extends React.Component {
  render() {
    return (
      <Navbar collapseOnSelect staticTop>
        <Navbar.Header>
          <Navbar.Brand>
            <a href="/">H/W</a>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav pullRight>
            <NavItem eventKey={1} href="/about">
              About
            </NavItem>
            <NavItem eventKey={2} href="/resume">
              Resume
            </NavItem>
            <NavDropdown eventKey={4} title="Voice" id="voiceNavDropdown">
              <MenuItem eventKey={4.1} href="/voice">Why Voice</MenuItem>
              <MenuItem eventKey={4.2} href="/briefing-content-manager" >Briefing Content Manager</MenuItem>
              {/* <MenuItem eventKey={4.3} href="/custom-skills">Custom Skills</MenuItem> */}
            </NavDropdown>
            <NavItem >
              <AuthLoginProfile/>
            </NavItem>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}
export default AppNavBar