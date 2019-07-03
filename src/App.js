import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";
import Section from "./components/section";
import Home from "./components/home";

class App extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <ToastContainer />
        <Switch>
          <Route path="/about" component={Section} />
          <Route path="/" component={Home} />
        </Switch>
      </React.Fragment>
    );
  }
}

export default App;
