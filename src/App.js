import React from "react";
import Main from "./components/Main";
// import logo from './logo.svg';
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Collections from './components/Collections';
import Profile from './components/Profile';
import Event from './components/Event';
import Aboutus from './components/Aboutus';
import Feedback from './components/Feedback';


function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route exact path="/">
            <Main />
          </Route>
          <Route exact path="./components/profile">
            <Profile />
          </Route>
          <Route exact path="./components/Event">
            <Event />
          </Route>
          <Route exact path="./components/Collections">
            <Collections />
          </Route>
          <Route exact path="./components/Aboutus">
            <Aboutus />
          </Route>
          <Route exact path="./components/Feedback">
            <Feedback />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;

