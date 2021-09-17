import React from "react";
import { Navbar, Container, Nav ,NavDropdown } from "react-bootstrap";
// import { Link } from "react-router-dom";
import "../Style/header.css";
// import NavLink from "react-bootstrap/NavLink";
// import LoginButton from "./LoginButton";
// import LogoutButton from "./LogoutButton";
// import { withAuth0 } from "@auth0/auth0-react";

class Header extends React.Component {
  render() {
    // const isAuth = this.props.auth0.isAuthenticated;
    return (
      <>
        <Navbar bg="dark" variant="dark">
          <Container>
            <Navbar.Brand href="#home">Home</Navbar.Brand>
            <Nav className="me-auto">
              <Nav.Link href="#Collection" style={{paddingLeft:"250px"}}>Collection</Nav.Link>
              <Nav.Link href="#Event" style={{paddingLeft:"50px"}}>Event</Nav.Link>
              <NavDropdown title="Profile" id="collasible-nav-dropdown" style={{paddingLeft:"50px"}}>
                <NavDropdown.Item href="#logIn" >log in</NavDropdown.Item>
                <NavDropdown.Item href="#logOut">
                  log out
                </NavDropdown.Item>
                
              </NavDropdown>
              <NavDropdown title="About us" id="collasible-nav-dropdown" style={{paddingLeft:"50px"}}>
                <NavDropdown.Item href="#about">About team</NavDropdown.Item>
                <NavDropdown.Item href="#feedback">
                  feedback
                </NavDropdown.Item>
                
              </NavDropdown>
            </Nav>
          </Container>
        </Navbar>
        <br />
      </>
    );
  }
}

export default Header;
