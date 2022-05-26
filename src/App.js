
import React, { Component } from "react";
import './index.css';
import Navtool from './Navtool';
import Movieslist from './Movieslist';
import Footer from "./Footer";
// import "bootstrap/dist/css/bootstrap.min.css"
// import { Spinner, Button } from "react-bootstrap";
class App extends Component {
  constructor(props) {
    super(props);
   
  }

  render() {
    return (
      <div>
        <div className="btnContainer">
        <Navtool />
      <Movieslist />
      <Footer />
        </div>
      </div>
    );
  }
}

export default App;
