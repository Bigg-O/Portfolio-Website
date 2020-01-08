import React, { Component } from "react";
import Nav from "react-bootstrap/Nav";
import logo from "../Images/Name_Logo.png";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Link } from "react-router-dom";
import Image from "react-bootstrap/Image";
import "../CSS/Homebar.css";

export class Homebar extends Component {
  render() {
    return (
      <Navbar collapseOnSelect expand="lg" variant="dark" fixed="top">
          <Link to="/">
            <Image className="name_logo" src={logo} />
          </Link>

        <Navbar.Toggle aria-controls="responsive-navbar-nav" />

        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <Link to="/">About</Link>

            <NavDropdown title="Portfolio">
              <Link to="/">
                <NavDropdown.Item>Sofeware Engineer</NavDropdown.Item>
              </Link>
              <Link to="/">
                <NavDropdown.Item>Robotics</NavDropdown.Item>
              </Link>
            </NavDropdown>

            <NavDropdown title="Resume">
              <Link to="/">
                <NavDropdown.Item>Sofeware Engineer</NavDropdown.Item>
              </Link>
              <NavDropdown.Divider />
              <Link to="/">
                <NavDropdown.Item>Routesetting</NavDropdown.Item>
              </Link>
              <Link to="/">
                <NavDropdown.Item>Rock Climbing</NavDropdown.Item>
              </Link>
            </NavDropdown>

            <a href="https://github.com/Bigg-O">GitHub</a>

            <a href="https://www.linkedin.com/in/wookeun-s">LinkedIn</a>

            <Link to="/">Contact</Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

export default Homebar;
