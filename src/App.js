import React from "react";
import {BrowserRouter as Router,Route} from "react-router-dom";

import Home from "./component/home";
import TitleList from "./component/titleList";
import ComicDetails from "./component/comicDetails";
export default function App() {
    return (
      <Router>
          <Route path="/" exact component={Home}></Route>
          <Route path="/list-title" exact component={TitleList}></Route>
          <Route path="/comic/:id" exact component={ComicDetails}></Route>
      </Router>
    );
}