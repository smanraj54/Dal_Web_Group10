import React, {Component} from 'react';
import "../css/Footer.css";

class Footer extends Component{

    render(){
        return(
            // <footer className="footer mt-auto py-3 text-white bg-primary">
            //     <div className="container">
            //         <p className="text-center">Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...</p>
            //     </div>
            // </footer>
            // <footer className="main-footer">
            //     <div classname="container">
                    // <div className="row">
                    //     <div className="col-md-3 col-sm-6">
                    //         <h5>Can we help ?</h5>
                    //         <ul className="list-unstyled">
                    //             <li>Contact Us: +1 705-913-6645</li>
                    //         </ul>
                    //     </div>
                    // </div>
                    // {/* Footer Bottom */}
                    // <div className="footer-bottom">
                    //     <p className="test-xs-center">
                    //         &copy;{new Date().getFullYear()} Volunteer Mart - All Rights Reserved
                    //     </p>
                    // </div>
            //     </div>
            // </footer>

            <footer class="main-footer">
                <div className = "container">
                    <span className="text-muted">
                    
                    {/* Footer Bottom */}
                    <div >
                    <h5>Can we help ?</h5>
                            <ul className="list-unstyled">
                                <li>Contact Us: +1 705-913-6645</li>
                            </ul>
                        <p className="text-center">
                            &copy;{new Date().getFullYear()} Volunteer Mart - All Rights Reserved
                        </p>
                    </div>
                    </span>
                </div>
            </footer>
        )
    }
}

export default Footer;