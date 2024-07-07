/* eslint-disable */
import './App.css';
import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Routes, Route } from "react-router-dom";


import Carousel_ from './pages/Carousel';
import Intro from './Intro';
import Error from './pages/Error';
import Teacher from './pages/Teacher';

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
        <Route path='/courses' element={<div>강의 설명</div>}></Route>
        <Route path='/contact' element={<div>연락 수단</div>}></Route>
        <Route path='*' element={<Error />}></Route>
      </Routes>
    </div>
  );
}

function Navbar_() {
  return (
    <Navbar className='custom-navbar'>
      <Container>
        <Navbar.Brand href="/" style={{ color: "white" }}><strong>Martin Island</strong></Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link href="/" style={{ color: "white" }}>Home</Nav.Link>
          <Nav.Link href="/who" style={{ color: "white" }}>Teacher</Nav.Link>
          <Nav.Link href="/courses" style={{ color: "white" }}>Courses</Nav.Link>
          <Nav.Link href="/contact" style={{ color: "white" }}>Contact Us</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
}

export default App;
