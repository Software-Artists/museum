import React from "react";
import Main from "./components/Main";
// import logo from './logo.svg';
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Collections from "./components/Collections";
import Profile from "./components/Profile";
import Event from "./components/Event";
import Aboutus from "./components/Aboutus";
import Feedback from "./components/Feedback";
import axios from "axios";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      museumData: [],
      paintingsData: [],
      mus: [],
      data: '',
    };
  }
  handel = (x) => {
    this.setState({ data: x });
    console.log(x);
    console.log(this.state.data);
  };
  componentDidMount = () => {
    axios
      .get(`${process.env.REACT_APP_SERVER_URL}/museum`)
      .then((museumResponse) => {
        this.setState({ museumData: museumResponse.data });
      });
    axios
      .get(`${process.env.REACT_APP_SERVER_URL}/paintings`)
      .then((paintingsResponse) => {
        this.setState({ paintingsData: paintingsResponse.data });
      });
  };
  render() {
    
    return (
      <div className="App">
        <Router>
          <Header />
          <Switch>
            <Route exact path="/">
              <Main
                museumData={this.state.museumData}
                paintingsData={this.state.paintingsData}
              />
            </Route>
            <Route exact path="/profile">
              <Profile
                data={this.state.data}
                museumData={this.state.museumData}
              />
            </Route>
            <Route exact path="/Event">
              <Event
                museumData={this.state.museumData}
                paintingsData={this.state.paintingsData}
                handel={this.handel}
              />
            </Route>
            <Route exact path="/Collections">
              <Collections />
            </Route>
            <Route exact path="/Aboutus">
              <Aboutus />
            </Route>
            <Route exact path="/Feedback">
              <Feedback />
            </Route>
          </Switch>
          <Footer />
        </Router>
      </div>
    );
  }
}

export default App;
