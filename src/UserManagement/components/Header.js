import { withRouter } from "react-router";
import Logo from '../../logo.png';



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
          <header className="p-3  text-white bg-primary">
            <div className="container">
              <div className="container d-flex flex-wrap justify-content-center">
                <a href="#"className="d-flex align-items-center mb-3 mb-lg-0 me-lg-auto text-dark text-decoration-none">
                  <img
                    src={Logo}
                    className="img-thumbnail"
                    width="40"
                    height="32"
                    alt="Logo"
                  />
                </a>
    
                <div className="text-end">
                  <button type="button" className="btn btn-outline-light me-2" onClick={loginHandler}>
                    Login
                  </button>
                  <button type="button" className="btn btn-warning" onClick={signUpHandler}>
                    Sign-up
                  </button>
                </div>
              </div>
            </div>
          </header>
        );
}

export default withRouter(Header);