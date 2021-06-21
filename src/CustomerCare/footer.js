import React, { Component } from 'react';
import FooterLeft from './footer_left'
import FooterRight from './footer_right';

class CustomerCareFooter extends Component {
    render() {
        return (
            
                <div className="row mt-3 pt-3 pb-3"  style={{backgroundColor:'#05386B'}}>
                    <div className="col-6">
                        <FooterLeft/>
                    </div>
                    <div className="col-6">
                        <FooterRight/>
                    </div>
                </div>
            
        );
    }
}
export default CustomerCareFooter;