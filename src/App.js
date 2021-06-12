import React from "react";
import "./App.css";
import { Homepage } from "./containers/homepage/index.jsx";
// import { Navbar } from "../../components/navbar";
import { BrowserRouter, Route, Switch} from "react-router-dom";
// import { Login, Register } from "./components/form/authcomponents/index.jsx";
import Authapp  from "./components/form/Authapp.jsx";
import { Dum } from "./dummy.jsx";


function App(props) {
  return(
    <BrowserRouter>
      <Switch>
      <Route path="/" exact>
          <Homepage/>
        </Route>
        <Route path="/home" exact>
          <Homepage/>
        </Route>
        <Route path="/about" exact>
          <Dum display={"About us"}/>
        </Route>
        <Route path="/tutors" exact>
          <Dum display={"Tutors"}/>
        </Route>
        <Route path="/courses" exact>
          <Dum display={"Buy a course"}/>
        </Route>
        <Route path="/contact" exact>
          <Dum display={"Contact us"}/>
        </Route>
        <Route path="/auth/login" exact>
          <Authapp action={"login"}/>
        </Route>
        <Route path="/auth/register" exact>
          <Authapp action={"register"}/>
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
