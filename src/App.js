
import React, { Component } from "react";
import './index.css';
import Navtool from './Navtool';
import Movieslist from './Movieslist';
import Login from './Login';
import Register from './Register';
import "bootstrap/dist/css/bootstrap.min.css"
// import { Spinner, Button } from "react-bootstrap";
class App extends Component {
  constructor(props) {
    super(props);
    this.props=props
    this.state={
     default_page : localStorage.getItem("current-page"),
  
     

     
    }
   

   
  }


  loadPage = (pagename) =>{
   
    if(pagename === "register"){
      this.setState({
        default_page: 'register'
      })
    }else{
      this.setState({
        default_cage: 'login'
      })

    }

    localStorage.setItem("current-page", pagename);

  }
   


  render() {
    let current_page = this.state.default_page
    let displayPage;
    if(current_page == "login"){
        displayPage = <Login loader={this.loadPage} />
    }else{
      displayPage = <Register loader={this.loadPage} />
    }



    return (
      <div>
        <div className="btnContainer">
        <Navtool />
      <Movieslist />
      {displayPage}
    
        </div>
      </div>
    );
  }
}

export default App;
