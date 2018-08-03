import React from 'react';
import { Navbar, Nav, NavItem } from 'react-bootstrap';

class AppNavBar extends React.Component {
  render() {
    return (
      <Navbar inverse collapseOnSelect staticTop>
        <Navbar.Header>
          <Navbar.Brand>
            <a href="/">H/W</a>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav pullRight>
            <NavItem eventKey={1} href="/aboutme">
              About Me
            </NavItem>
            <NavItem eventKey={2} href="/resume">
              Resume
            </NavItem>
            <NavItem eventKey={3} href="/projects">
              Projects
            </NavItem>
            <NavItem eventKey={4} href="/voice">
              Voice
            </NavItem>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}
export default AppNavBar