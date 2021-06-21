import React, { Component } from 'react';
import user from './logo.png'

class CustomerCareHeader extends Component {
    render() {
        return (
            <header style={{backgroundColor:'#5CDB95'}}>
                <div className="row mb-2 pt-3 pb-3">
                    <div className="col-2 pl-5" >
                        <img className="rounded-circle" alt="hello" src={user} width="65" height="65" />
                    </div>
                    <div className="col-8 align-self-center">
                        <div className="rounded row text-center pt-2 pb-2" style={{ backgroundColor: '#8EE4AF' }}>
                            <div className="col-3">
                                <h6><a href="#" style={{textDecoration: 'none',color:'black'}}>Home</a></h6>
                            </div>
                            <div className="col-3">
                                <h6><a href="#" style={{textDecoration: 'none',color:'black'}}>Search by category</a></h6>
                            </div>
                            <div className="col-3">
                                <h6><a href="#" style={{textDecoration: 'none',color:'black'}}>My Orders</a></h6>
                            </div>
                            <div className="col-3">
                                <h6><a href="#" style={{textDecoration: 'none',color:'black'}}>Cart</a></h6>
                            </div>
                        </div>
                    </div>
                    <div className="col-2 align-self-center">
                        <div className="row align-items-center">
                            <div className="col-1">
                                <img className="rounded-circle" alt="hello" src={user} width="50" height="50" />
                            </div>
                            <div className="col-9 text-center">
                                <h6><a href="#" style={{textDecoration: 'none',color:'black'}}>Jay Porter</a></h6>
                            </div>

                        </div>
                    </div>
                </div>
            </header>
        );
    }
}
export default CustomerCareHeader;