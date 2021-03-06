import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import React from "react";
import { BrowserRouter as Router, Switch, Route, NavLink } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Home from "../home/Home";
import About from "../about/About";
import Contact from "../contact/Contact";
import Cards from "../cards/Cards";
import CardDetailContainer from "../cards/detail/CardDetailContainer";

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
                        <NavLink to="/cards/" className="nav-link">
                            Cards
                        </NavLink>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
            <Container>
                <Switch>
                    <Route path="/" exact component={Home} />
                    <Route path="/about" component={About} />
                    <Route path="/contact" component={Contact} />
                    <Route path="/cards" component={Cards} />
                    <Route path="/card/:id" component={CardDetailContainer} />
                </Switch>
            </Container>
        </Router>
    );
}

export default Layout;
