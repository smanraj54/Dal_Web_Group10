import {BrowserRouter as Router,Switch, Route ,useHistory} from 'react-router-dom';
import './App.css';

import Homepage from "./UserManagement/pages/Homepage";
import UserHomepage from "./UserManagement/pages/UserHomepage";
import Login from "./UserManagement/pages/Login";
import SignUp from "./UserManagement/pages/SignUp";
import ForgotPassword from "./UserManagement/pages/ForgotPassword";
import Question from "./UserManagement/pages/Question";
import UpdatePassword from "./UserManagement/pages/UpdatePassword";
import UserHeader from './UserManagement/components/UserHeader';

function App() {
  const history = useHistory();  
  return (

    <Router>
    <Switch>
      <Route exact path="/">
        <Login />
      </Route>
      <Route exact path="/userHome">
        <UserHomepage />
      </Route>
      <Route exact path="/login">
        <Login />
      </Route>
      <Route exact path="/signUp">
        <SignUp />
      </Route>
      <Route exact path="/resetPassword">
        <ForgotPassword />
      </Route>
      <Route exact path="/question">
        <Question />
      </Route>
      <Route exact path="/updatePassword">
        <UpdatePassword />
      </Route>
      <Route path = "/Wrong">
          {" "}
          <h1>Wrong Email and Password!!!</h1>
      </Route>
      <Route>
          {" "}
          <h1>WrongPage!!!</h1>
      </Route>
    </Switch>
</Router>

  );
}

export default App;
