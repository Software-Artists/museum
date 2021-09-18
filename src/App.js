import "./App.css";
import React from "react";
import Collections from "./components/Collections";
class App extends React.Component {
  render() {
    return (
      <div id="bodyDiv">
        <Collections />
      </div>
    );
  }
}

export default App;
