import React from "react";
// import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Aboutus from "./components/Aboutus";

function App() {
  return (
    <div className="App">
      
      <Header/>
      <Aboutus/>
      <Footer/>
      
    </div>
  );
}

export default App;
