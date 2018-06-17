import React from 'react';
import { Navbar, Nav, NavItem } from 'react-bootstrap';

class AppNavBar extends React.Component {
  render() {
    return (
      <Navbar inverse collapseOnSelect>
        <Navbar.Header>
          <Navbar.Brand>
            <a href="/">Hayden Wade</a>
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
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}
export default AppNavBar