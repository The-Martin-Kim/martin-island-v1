/* eslint-disable */
import './App.css';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { Routes, Route } from "react-router-dom";

import Carousel_ from './pages/Carousel';
import Intro from './Intro';
import Error from './pages/Error';
import Teacher from './pages/Teacher';
import Contact from "./pages/contact";
import CourseOverview from "./pages/CourseOverview";
import Blog from "./pages/Blog/Blog";
import Course from "./pages/course";
import { pythonCourse, dataCourse, mlCourse, cCourse, cCourse2, javaCourse, htmlCourse } from './courseData';


function App() {
    return (
        <div className="App">
            <Navbar_ />

            <Routes>
                <Route path='/' element={
                    <>
                        <Carousel_ />
                        <Intro />
                    </>} />
                <Route path='/who' element={<Teacher />} />
                <Route path='/courses' element={<CourseOverview />} />
                <Route path='/courses/c1' element={<Course course={cCourse} />} />
                <Route path='/courses/c2' element={<Course course={cCourse2} />} />
                <Route path='/courses/python' element={<Course course={pythonCourse} />} />
                <Route path='/courses/data_science' element={<Course course={dataCourse} />} />
                <Route path='/courses/machine_learning' element={<Course course={mlCourse} />} />
                <Route path='/courses/java' element={<Course course={javaCourse} />} />
                <Route path='/courses/html' element={<Course course={htmlCourse} />} />
                <Route path="/blog/*" element={<Blog />} />
                <Route path='/contact' element={<Contact />} />
                <Route path='*' element={<Error />} />
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
                        src="/logo.png"
                        width={"30"}
                        height={"30"}
                        className="d-inline-block align-top"
                    />{' '}
                    <strong style={{fontFamily: "GowunDodum-Regular"}}>Welcome to Martin Island 🏝️</strong>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto" style={{fontFamily: "GowunDodum-Regular"}}>
                        <Nav.Link href="/">Home</Nav.Link>
                        <Nav.Link href="/who">Teacher</Nav.Link>
                        <NavDropdown title="Courses" id="basic-nav-dropdown">
                            <NavDropdown.Item href="/courses">수업 안내</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="/courses/c1">C언어 기초</NavDropdown.Item>
                            <NavDropdown.Item href="/courses/c2">C언어 심화</NavDropdown.Item>
                            <NavDropdown.Item href="/courses/python">Python</NavDropdown.Item>
                            <NavDropdown.Item href="/courses/data_science">데이터 분석</NavDropdown.Item>
                            <NavDropdown.Item href="/courses/machine_learning">머신 러닝</NavDropdown.Item>
                            <NavDropdown.Item href="/courses/java">Java</NavDropdown.Item>
                            <NavDropdown.Item href="/courses/html">HTML</NavDropdown.Item>
                        </NavDropdown>
                        <Nav.Link href="/blog">Blog</Nav.Link>
                        <Nav.Link href="/contact">Contact Us</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default App;
