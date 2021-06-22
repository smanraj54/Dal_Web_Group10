import {Switch, Route} from 'react-router-dom';
import './App.css';
import SignUpHeader from './Signup/header';
import SignUpFooter from './Signup/footer';
import Delivery from './Delivery/Delivery';
import Main from './Signup/main';
import CustomerCareFooter from './CustomerCare/footer';
import CustomerCareHeader from './CustomerCare/header';
import Body from './CustomerCare/body';
import Payment from './PaymentManagement/Payment';
import { NavbarDetails } from './CartManagement/NavBarDetails';
import { Cart } from './CartManagement/Cart';
import { useHistory } from 'react-router-dom';
//import AdminPanel from './AdminPage/AdminPanel';

function App() {
  const history = useHistory();  
  return (
    // <div>
    //     <NavbarDetails/>
    //     <Cart/>
    // </div>
    // <div>
    //   <Header/>
    //   <Main/>
    //   <Footer/>
    // </div>
    // <div style={{'height':'100%'}}>
    //   <Header />
    //   <Payment/>
    //   <Footer />
    // </div>
    <div>
    <Switch>
      <Route exact path = "/">
          {" "}
          <div>
            <SignUpHeader/>
            <Main history = {history}/>
            <SignUpFooter/>
          </div>
      </Route>
      <Route exact path = "/home">
          {" "}
          <div>
            <NavbarDetails/>
            <h2>Welcome To Home Page!!!!</h2>
          </div>
      </Route>
      <Route path = "/Cart">
          {" "}
          <div>
            <NavbarDetails/>
            <Cart/>
          </div>
          {/* <h1>WELCOME TO SecondPage</h1> */}
      </Route>
      <Route path = "/Delivery">
          {" "}
          <div>
            <NavbarDetails/>
            <Delivery/>
          </div>
          {/* <h1>WELCOME TO SecondPage</h1> */}
      </Route>
      <Route path = "/CustomerCare">
          {" "}
          <div>
            <CustomerCareHeader/>
            <Body/>
            <CustomerCareFooter/>
          </div>
      </Route>
      <Route path = "/SignUp">
          {" "}
          <div>
            <SignUpHeader/>
            <Main history = {history}/>
            <SignUpFooter/>
          </div>
      </Route>
      <Route path = "/Payment">
          {" "}
          <div>
            <NavbarDetails/>
            <Payment/>
          </div>
      </Route>
      {/* <Route path = "/Admin">
          {" "}
          <div>
            <AdminPanel/>
          </div>
      </Route> */}
      <Route path = "/Wrong">
          {" "}
          <h1>Wrong Email and Password!!!</h1>
      </Route>
      <Route>
          {" "}
          <h1>WrongPage!!!</h1>
      </Route>
    </Switch>
</div>

  );
}

export default App;
