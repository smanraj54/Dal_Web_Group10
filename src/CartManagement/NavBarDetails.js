import React from 'react';
import {Navbar, Nav, NavDropdown, Form, FormControl, Button} from 'react-bootstrap';
//import styled from 'styled-components';



export const NavbarDetails = () =>{

return(
  <Navbar bg="light" expand="lg">
  <Navbar.Brand href="#">Volunteer Mart</Navbar.Brand>
  <Navbar.Toggle aria-controls="navbarScroll" />
  <Navbar.Collapse id="navbarScroll">
    <Nav
      className="mr-auto my-2 my-lg-0"
      style={{ maxHeight: '100px' }}
      navbarScroll
    >
      <Nav.Link href="#action1">Home</Nav.Link>
      <Nav.Link href="#action2">Contacts</Nav.Link>
      <NavDropdown title="Account" id="navbarScrollingDropdown">
        <NavDropdown.Item href="#action3">Account Details</NavDropdown.Item>
        <NavDropdown.Item href="#action4"></NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#action5">Wishlist</NavDropdown.Item>
      </NavDropdown>
    </Nav>
    <Form className="d-flex">
      <FormControl
        type="search"
        placeholder="Search"
        className="mr-2"
        aria-label="Search"
      />
      <Button variant="outline-success"onClick = {() => {
                        alert("Search Page Redirected"); 
                    }}>Search</Button>
    </Form>
  </Navbar.Collapse>
</Navbar>
);

}