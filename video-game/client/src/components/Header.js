import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { useLocation } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";

const Header = () => {
  const [isHomePage, setIsHomePage] = useState(false);
  const location = useLocation();
  console.log("location-", location.pathname);
  useEffect(() => {
    setIsHomePage(location.pathname === "/");
  }, [location]);
  return (
    // nav link highlights the page you are on
    <Navbar bg="dark" variant="dark">
      <Container>
        <img
          className="header-image"
          src="https://www.coregames.com/img/logo/flat/core-logo.png"
          alt=""
        />
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            {isHomePage ? (
              <Button variant="secondary">
                <NavLink className="display-link" to="/new">
                  Add a new game
                </NavLink>
              </Button>
            ) : (
              <>
              <Button variant="success">
                    {" "}
                    <NavLink className= 'display-link' to="/">Home Page</NavLink>
                  </Button>
                <span>&nbsp;&nbsp;&nbsp; | &nbsp;&nbsp;&nbsp;</span>
                  <Button variant="secondary">
                    {" "}
                    <NavLink className="display-link" to="/new">
                      Add a new game
                    </NavLink>
                  </Button>
              </>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
