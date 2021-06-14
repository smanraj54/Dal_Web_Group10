import './App.css';
import FirstPage from "./Pages/FirstPage";
import SecondPage from "./Pages/SecondPage";
import ThirdPage from "./Pages/ThirdPage";
import FourthPage from "./Pages/FourthPage";
import {Switch, Route} from 'react-router-dom';

function App() {
  
  
  return (
    <div className="App">
      
      <header className="App-header">
      <Switch>
      <Route exact path = "/">
          {" "}
          <FirstPage/>
        </Route>
        <Route path = "/SecondPage">
          {" "}
          <SecondPage/>
          {/* <h1>WELCOME TO SecondPage</h1> */}
        </Route>
        <Route path = "/ThirdPage">
          {" "}
          <ThirdPage/>
        </Route>
        <Route path = "/FourthPage">
          {" "}
          <FourthPage/>
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

      </header>
    </div>
  );
}

export default App;
