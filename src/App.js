import React from "react";
import Main from "./components/Main";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Collections from "./components/Collections";
import Profile from "./components/Profile";
import Event from "./components/Event";
import Aboutus from "./components/Aboutus";
import Feedback from "./components/Feedback";
import axios from "axios";
import Header from "./components/Header";
import Footer from "./components/Footer";
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      museumData: [],
      paintingsData: [],
      mus: [],
      genderr: "",
      data: [],
      passingData: [],
      loader: true,
    };
  }
  handel = (x) => {
    this.setState({ data: x });
    console.log(x);
    console.log(this.state.data, "app.js data");
  };
  componentDidMount = () => {
    axios
      .get(`${process.env.REACT_APP_SERVER_URL}/museum`)
      .then((museumResponse) => {
        this.setState({ museumData: museumResponse.data, loader: false });
      });
    axios
      .get(`${process.env.REACT_APP_SERVER_URL}/paintings`)
      .then((paintingsResponse) => {
        this.setState({ paintingsData: paintingsResponse.data });
      });
  };
  gendarHandel = (value) => {
    this.setState({
      genderr: value,
    });
  };

  handelPassingFav = (test) => {
    this.setState({
      passingData: test,
    });
    // console.log("AAAPPPJJSS", this.state.passingData);
  };
  render() {
    console.log(this.state.museumData);
    return (
      <div className="App">
        <Router>
          <Header />
          <Switch>
            <Route exact path="/">
              <Main
                museumData={this.state.museumData}
                paintingsData={this.state.paintingsData}
                loader={this.state.loader}
              />
            </Route>
            <Route exact path="/profile">
              <Profile
                selectedData={this.state.passingData}
                data={this.state.data}
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
              <Collections handelPassingFav={this.handelPassingFav} museumData={this.state.museumData} />
            </Route>
            <Route exact path="/Aboutus">
              <Aboutus />
            </Route>
            <Route exact path="/Feedback">
              <Feedback
                gendarHandel={this.gendarHandel}
                genderr={this.state.genderr}
              />
            </Route>
          </Switch>
          <Footer />
        </Router>
      </div>
    );
  }
}

export default App;
