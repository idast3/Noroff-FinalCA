import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";
import Button from "react-bootstrap/Button";
import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    NavLink,
} from "react-router-dom";
import Container from "react-bootstrap/Container";
import Home from "../home/Home";
import About from "../about/About";
import Contact from "../contact/Contact";
import Login from "../login/Login";

function Layout() {
    return (
      <Router>
      <Navbar bg="dark" variant="dark" expand="lg">
<Navbar.Brand href="#home">Card Game</Navbar.Brand>
<Navbar.Toggle aria-controls="basic-navbar-nav" />
<Navbar.Collapse id="basic-navbar-nav">
  <Nav className="mr-auto">
  <NavLink to="/" exact className="nav-link">
                      Home
                  </NavLink>
                  <NavLink to="/about/" className="nav-link">
                      About
                  </NavLink>
                  <NavLink to="/contact/" className="nav-link">
                      Contact
                  </NavLink>
                  <NavLink to="/login/" className="nav-link">
                      Login
                  </NavLink>
  </Nav>
  <Form inline>
    <FormControl type="text" placeholder="Search" className="mr-sm-2" />
    <Button variant="outline-light">Search</Button>
  </Form>
</Navbar.Collapse>
</Navbar>
<Container>
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/about" component={About} />
                <Route path="/contact" component={Contact} />
                <Route path="/login" component={Login} />
            </Switch>
        </Container>
    </Router>
    );
}

export default Layout;
