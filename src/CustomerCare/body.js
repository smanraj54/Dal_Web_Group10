import React, { Component } from 'react';
import LeftBody from './left_body';
import RightBody from './right_body';

class Body extends Component {
    render(){
        return(
            <div className="row">
                <div className="col">
                    <LeftBody/>
                </div>
                <div className="col border-left">
                    <RightBody/>
                </div>
            </div>
        );
    }
}
export default Body;