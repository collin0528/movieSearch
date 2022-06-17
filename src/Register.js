import { Alert } from "bootstrap";
import React from "react";
import './form.css';
import regImg from "./images/reg.svg";

export class Registration extends React.Component {
  constructor(props) {
    super(props);
    this.props=props
    this.userRef = React.createRef(); 
    this.emailRef = React.createRef(); 
    this.passRef = React.createRef();
   
  }

  

  getUser= () =>{
		this.userRef.current.focus()
    
	}
  getEmail= () =>{
		this.emailrRef.current.focus()
    
	}
  getpass= () =>{
		this.passRef.current.focus()
    
	}



  checkStored = () => {
    let savedData= localStorage.getItem('current-user');
   // console.log(savedData);
    if(savedData == null || savedData == undefined) {
      
        return [];
        
        
    }else{
        savedData=JSON.parse(savedData);
        return savedData;
    }
     
 }

  clickMe = () =>{
    let email = this.emailRef.current.value;
    let password = this.passRef.current.value;
    let username = this.userRef.current.value;

    

    let user_object = {
      email: email, 
      password: password, 
      username: username
    }
   
          let storedValue=this.checkStored();
           storedValue.push(user_object);

    localStorage.setItem('current-user', JSON.stringify(storedValue))
    alert('User registered')
    

}



formHandle=(event)=>{
  event.preventDefault();
     }


     viewUserList=()=>{
      // alert("works")

      let userStorage = localStorage.getItem("current-user");
      if(userStorage == 0){
          console.log(userStorage);
          userStorage = JSON.parse(userStorage);
          alert("works")

          // this.setState({
          //      userStorage : ''
          // })
      }else {
        this.setState({
              movieList : userStorage 
          })

      }
    
    }
 

  render() {

    let registerStyle = {
      textDecoration: "underline",
      color: 'red',
      cursor: 'pointer'
  }
    return (
      <div className="base-container">
        <div className="header">Register</div>
        <form className="content" onClick={this.formHandle}>
          <div className="image">
            <img src={regImg} />
          </div>

          <div className='usersdiv' onClick={this.viewUserList}>
                    <b>{this.email}</b>
                    <b>{}</b>
                    <b>{}</b>
                </div>

          <div className="form">
            <div className="form-group">
              <label htmlFor="username">Username</label>
              <input type="text" name="username" placeholder="username" ref={this.userRef} />
            </div>
            <div className="form-group">
              <label>Email</label>
              <input type="text" name="email" placeholder="email" ref={this.emailRef} />
            </div>
            <div className="form-group">
              <label>Password</label>
              <input type="password" name="password" placeholder="password" ref={this.passRef}/>
            </div>
          </div>
          <button onClick={()=>this.clickMe()}>Register</button>
        </form>
        <div className="footer">
        <h5 className="mt-2">Already registered? <strong style={registerStyle} onClick={() => this.props.loader('login')}>Log in</strong> now</h5>
        </div>
      </div>
    );
  }
}
 
export default Registration;