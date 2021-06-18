import './App.css';
// import Header from './Signup/header';
// import Footer from './Signup/footer';
// import Main from './Signup/main';
import Footer from './CustomerCare/footer';
import Header from './CustomerCare/header';
import Body from './CustomerCare/body';
//import FirstPage from "./Pages/FirstPage";
//import SecondPage from "./Pages/SecondPage";
import { NavbarDetails } from './CartManagement/NavBarDetails';
import { Cart } from './CartManagement/Cart';
//import { CardComponent } from './Assignment1/Components/CardComponent';
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
    <div style={{'height':'100%'}}>
      <Header />
      <Body/>
      <Footer />
    </div>
  );
}

export default App;
