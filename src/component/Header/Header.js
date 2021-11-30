import React from 'react'
import { Container, Form, FormControl, Nav, Navbar, NavDropdown, Button } from 'react-bootstrap'
 import './Header.css'

const Header = () => {
    return (
        <div className="bar">
            <Navbar expand="lg" bg="success" variant="dark">
                <Container fluid>
                    <Navbar.Brand href="#">First React</Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll"  className="justify-content-end">
                        <Nav 
                            className="me-auto my-2 my-lg-0"
                            style={{ maxHeight: '100px' }}
                            navbarScroll
                        >
                            <Nav.Link href="#action1" className="text-white">Home</Nav.Link>
                            <Nav.Link href="#action2" className="text-white">About</Nav.Link>
                            <NavDropdown title="Cours" id="navbarScrollingDropdown">
                                <NavDropdown.Item href="#action3">ES 6</NavDropdown.Item>
                                <NavDropdown.Item href="#action4">React</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#action5">
                                    Something else here
                                </NavDropdown.Item>
                            </NavDropdown>
                            <Nav.Link href="#" disabled className="text-white">
                                Search
                            </Nav.Link>
                        </Nav>
                        <Form className="d-flex">
                            <FormControl
                                type="search"
                                placeholder="Search"
                                className="me-2"
                                aria-label="Search"
                            />
                            <Button variant="outline-success">Search</Button>
                        </Form>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    )
}

export default Header
