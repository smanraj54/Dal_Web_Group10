import { useEffect } from "react";
import { propTypes } from "react-bootstrap/esm/Image";
import { withRouter } from "react-router";
import UserHeader from "../components/UserHeader";

const UserHomepage = (props) => {
  var isUser = localStorage.getItem('email');
  console.log(isUser);
  useEffect(() => {
    if(!isUser){
      props.history.push('/');
    }
  },[]);
  return <UserHeader />;
};

export default withRouter(UserHomepage);
