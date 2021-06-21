import {Switch, Route} from 'react-router-dom';
import './App.css';
import SignUpHeader from './Signup/header';
import SignUpFooter from './Signup/footer';
import Main from './Signup/main';
import CustomerCareFooter from './CustomerCare/footer';
import CustomerCareHeader from './CustomerCare/header';
import Body from './CustomerCare/body';
import Payment from './PaymentManagement/Payment';
import { NavbarDetails } from './CartManagement/NavBarDetails';
import { Cart } from './CartManagement/Cart';

function App() {
  
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
      <Route path = "/Customer">
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
            <Main/>
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
