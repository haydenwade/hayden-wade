import React from 'react';
import { Navbar, Nav, NavDropdown, Container } from 'react-bootstrap';
import AuthLoginProfile from '../../utils/auth/components/login-profile';
import { isLoggedIn } from '../../utils/auth/auth-service';

class AppNavBar extends React.Component {
  render() {
    return (
      <Navbar collapseOnSelect expand="md" variant="dark" >
        <Container style={{padding:'none'}}>
        <Navbar.Brand href="/">
          H/W
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav" className="justify-content-end" >
          <Nav className="mr-auto"></Nav>
          <Nav >
            <Nav.Item>
              <Nav.Link href="/experience">
                Experience
            </Nav.Link>
            </Nav.Item>
            <NavDropdown  title="Services" id="servicesNavDropdown" alignRight>
                <NavDropdown.Item  href="/services/career-coaching" >Career Coaching</NavDropdown.Item>
                <NavDropdown.Item  href="/services/resume-review" >Resume Review</NavDropdown.Item>
                <NavDropdown.Item  href="/services/salary-negotiation" >Salary Negotiation</NavDropdown.Item>
                <NavDropdown.Item  href="/services/consulting" >Consulting</NavDropdown.Item>
              </NavDropdown>
            <Nav.Item>
              <Nav.Link  href="/about">
                About
            </Nav.Link>
            </Nav.Item>
              <NavDropdown  title="Software" id="softwareNavDropdown" alignRight>
                <NavDropdown.Item  href="/ai-swiper" >AI Swiper</NavDropdown.Item>
                <NavDropdown.Item  href="/briefing-content-manager" >Briefing Content Manager</NavDropdown.Item>
                <NavDropdown.Item  href="/voice" >Voice AI</NavDropdown.Item>
                <NavDropdown.Item  href="/qr-contact" >QR Code Contact Generator</NavDropdown.Item>
              </NavDropdown>
              {isLoggedIn() &&
                <Nav.Item>
                  <Nav.Link  href="/briefings">
                  Briefings
              </Nav.Link>
              </Nav.Item>
              }
              <Nav.Item>
                <Nav.Link >
                <AuthLoginProfile />
              </Nav.Link>
              </Nav.Item>
          </Nav>
        </Navbar.Collapse>
        </Container>
      </Navbar>
    );
  }
}
export default AppNavBar