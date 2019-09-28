import React from "react";
import "./App.css";
import Navbar from "./component/Navbar";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Home from "./component/Home";
import About from "./component/About";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
      </div>
    </Router>
  );
}

export default App;
