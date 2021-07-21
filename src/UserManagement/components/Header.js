import { withRouter } from "react-router";
import {Navbar, Nav, NavDropdown, Form, FormControl, Button, ButtonGroup, ButtonToolbar} from 'react-bootstrap';
import Logo from '../../logo.png';
import "../css/Header.css";



const Header = (props) => {
    const loginHandler = (event) => {
        props.history.push({
          pathname: "/login"
        });
      }
    
        const signUpHandler = (event) => {
          props.history.push({
            pathname: "/signup"
          });
      }
      
        return (
        <Navbar className = "color_nav" expand="lg">
          <Navbar.Brand onClick = {() => {
            props.history.push("/home");
            }}>
              <img
              alt="Logo"
              src={Logo}
              width="30"
              height="30"
              className="d-inline-block align-top"/>
              {' '}Volunteer Mart
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav className="mr-auto my-2 my-lg-0" 
            style={{ maxHeight: '100px' }}
            navbarScroll>
            </Nav>
          </Navbar.Collapse>
          <ButtonToolbar>
            <Button className = "btn" variant="outline-dark" onClick={loginHandler}>Login</Button>{' '}
            <Button variant="success" onClick={signUpHandler}>Sign Up</Button>{' '}
          </ButtonToolbar>
          </Navbar>
        );
}

export default withRouter(Header);