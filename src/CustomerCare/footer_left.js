import React, { Component } from 'react';
import user from './logo.png'


class FooterLeft extends Component {
    render() {
        return (
            <div className="row">
                <div className="col-4 align-self-center text-center">
                    <img className="rounded-circle" alt="hello" src={user} width="65" height="65" />
                </div>
                <div className="col-8 align-self-start">
                    <h6 style={{color:'#EDF5E1'}}>Latest Blog Posts</h6>
                    <h4 style={{color:'#EDF5E1'}}>Ready to get started?</h4>
                    <small style={{color:'#EDF5E1'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</small>
                </div>
            </div>
        );
    }
}
export default FooterLeft;