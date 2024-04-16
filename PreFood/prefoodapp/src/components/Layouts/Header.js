import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Logo from "../../assets/Logo.png";
import "./Header.css";
import { Link } from "react-router-dom";
import { useState } from "react";

export const Header = () => {
  return (
    <header>
      <Navbar expand="lg" className="bg-body-tertiary ">
        <Container>
          <Navbar.Brand as={Link} to="/">
            <img
              src={Logo}
              width="130"
              height="40"
              className="d-inline-block align-top"
              alt="React Bootstrap logo"
            />
          </Navbar.Brand>

          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <div className=" secondNavContainer">
              <Link to="/">
                <span className="bi bi-gear-wide-connected "></span>
              </Link>

              <Link to="/cart" className=" position-relative">
                <span className="bi bi-cart-fill "></span>
                <span className="badge bg-danger rounded-circle position-absolute top-0 start-50 translate-middle">
                  0
                </span>
              </Link>

              <Link to="/profile">
                <span className="bi bi-person-circle"></span>
              </Link>
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};
