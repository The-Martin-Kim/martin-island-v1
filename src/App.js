/* eslint-disable */
import './App.css';
import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { Card, Row, Col } from 'react-bootstrap';
import { Routes, Route } from "react-router-dom";


import Carousel_ from './pages/Carousel';
import Intro from './Intro';
import Error from './pages/Error';
import Teacher from './pages/Teacher';
import Contact from "./pages/contact";
import Course from "./pages/course";

function App() {
  return (
    <div className="App">
      <Navbar_ />


      <Routes>
        <Route path='/' element={
          <>
            <Carousel_ />
            <Intro />
          </>}></Route>
        <Route path='/who' element={<Teacher/>}></Route>
        <Route path='/courses' element={<Course />}></Route>
        <Route path='/contact' element={<Contact />}></Route>
        <Route path='*' element={<Error />}></Route>
      </Routes>
    </div>
  );
}

function Navbar_() {
    return (
        <Navbar className="bg-body-tertiary" expand="lg">
            <Container>
                <Navbar.Brand href="/">
                    <img
                        alt=""
                        src="/logogo.png"
                        width={"30"}
                        height={"30"}
                        className="d-inline-block align-top"
                    />{' '}
                    <strong>Welcome to Martin Island 🏝️</strong>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto">
                        <Nav.Link href="/" >Home</Nav.Link>
                        <Nav.Link href="/who" >Teacher</Nav.Link>
                        <NavDropdown title="Courses" id="basic-nav-dropdown">
                            <NavDropdown.Item href="/courses">Python</NavDropdown.Item>
                            <NavDropdown.Item href="/c_lang">C Language</NavDropdown.Item>
                            <NavDropdown.Item href="/java">Java</NavDropdown.Item>
                        </NavDropdown>
                        <Nav.Link href="/contact">Contact Us</Nav.Link>

                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default App;
