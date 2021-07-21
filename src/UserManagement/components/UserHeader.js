import React, {Component} from 'react';
import Logo from '../../logo.png';
import { withRouter } from "react-router";


class UserHeader extends Component{
    constructor(props){
        super(props);
    }

    render() {
        return (
            <header className="p-3  text-white bg-primary">
            <div className="container">
              <div className="container d-flex flex-wrap justify-content-center">
                <a href="#" className="d-flex align-items-center mb-3 mb-lg-0 me-lg-auto text-dark text-decoration-none">
                      <img src={Logo} className="img-thumbnail" width="40" height="32" alt="Logo"/> 
                </a>

                <div className="text-end">
                  <button type="button" className="btn btn-outline-light me-2">Login</button>
                  <button type="button" className="btn btn-warning">Sign-up</button>
                </div>
              </div>
              <div>
                <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
                  <li><a href="#" className="nav-link px-2 text-light">Vegetables</a></li>
                  <li><a href="#" className="nav-link px-2 text-light">Personal Care</a></li>
                  <li><a href="#" className="nav-link px-2 text-light">Snacks</a></li>
                  <li><a href="#" className="nav-link px-2 text-light">Dairy Products</a></li>
                  <li><a href="#" className="nav-link px-2 text-light">Household</a></li>
                </ul>
              </div>
            </div>
            </header>
              
        );
    }
}

export default withRouter(UserHeader);