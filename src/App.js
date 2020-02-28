import React from "react";
import {BrowserRouter as Router,Switch,Route,Link} from "react-router-dom";

import Home from "./component/home";
import TitleList from "./component/titleList";

export default function App() {
    return (
      <Router>
          <Route path="/" exact component={Home}></Route>
          <Route path="/list-title" exact component={TitleList}></Route>
      </Router>
    );
}