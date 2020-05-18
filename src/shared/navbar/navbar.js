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
            {/* <NavItem eventKey={1} href="/about">
              About
            </NavItem> */}
            <NavItem eventKey={2} href="/experience">
              Experience
            </NavItem>
            <NavItem eventKey={3} href="/voice">
              Voice AI
            </NavItem>
            <NavItem eventKey={4} href="/services">
              Services
            </NavItem>
            <NavDropdown eventKey={4} title="Software" id="softwareNavDropdown">
              <MenuItem eventKey={4.1} href="/briefing-content-manager" >Briefing Content Manager</MenuItem>
            </NavDropdown>
            <NavItem eventKey={5} href="/about">
              About(D)
            </NavItem>
            <NavItem eventKey={6} href="/home">
              Old Home(D)
            </NavItem>
            {/* <NavDropdown eventKey={4} title="Voice AI" id="voiceNavDropdown">
              <MenuItem eventKey={4.1} href="/voice">Why Voice</MenuItem>
              <MenuItem eventKey={4.2} href="/briefing-content-manager" >Briefing Content Manager</MenuItem>
            </NavDropdown> */}
            {/* <NavItem >
              <AuthLoginProfile/>
            </NavItem> */}
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}
export default AppNavBar