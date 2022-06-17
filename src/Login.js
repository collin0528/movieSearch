import React from "react";
import './form.css';
import logImg from "./images/log.svg";

export class Login extends React.Component {

  constructor(props) {
    super(props);

    this.logUserRef = React.createRef();
    this.logpassRef = React.createRef();

  }

  logUser= () =>{
		this.logUserRef.current.focus()
    
    
	}
  logpass= () =>{
		this.logpassRef.current.focus()
    
	}

  logRef=()=>{
    
    let password = this.logpassRef.current.value;
    let username = this.logUserRef.current.value;
    let currentUser = localStorage.getItem('current-user');

       currentUser=JSON.parse(currentUser);

       let users_found = []
       for (let i = 0; i < currentUser.length; i++) {
        // console.log(currentUser);
        let eachpassword= currentUser[i].password;
        let eachuser= currentUser[i].username;


        if(eachuser == username && eachpassword == password){
          users_found.push(currentUser[i])
          break;
        }


         
       }

       if(users_found.length > 0){
         alert('User logged in')

       }else{
        alert('you have not registered')
       }

       

       
       

  }

//   refreshPage = ()=>{
//     location.reload();
//  }
  
  // logRef=()=>{
  //   let password = this.logpassRef.current.value;
  //   let username = this.logUserRef.current.value;
    
  //   let currentUser = localStorage.getItem('current-user');

  //      currentUser=JSON.parse(currentUser);

  //      for (let i = 0; i < currentUser.length; i++) {
  //       let eachpassword= currentUser[i].password;
  //       let eachuser= currentUser[i].username;
         
  //      }

  //      if(currentUser == null){

  //     }else{
  //       currentUser = JSON.parse(currentUser)
  //       if(currentUser.username == username && currentUser.password == password){
  //         alert('user logged in')
  //       }else{
  //         alert('Could not log you in at the monent. Ae you registered?')
  //       }
  
  //     }


    
  // }

  formHandle=(event)=>{
    event.preventDefault();
   
       }

  render() {

    
  let registerStyle = {
    textDecoration: "underline",
    color: 'red',
    cursor: 'pointer'
}
    return (
      <div className="base-container">
        <div className="header">Login</div>
        <form className="content" onClick={this.formHandle}>
          <div className="image">
            <img src={logImg} />
          </div>
          <div className="form" >
            <div className="form-group">
              <label>Username</label>
              <input type="text" name="username" placeholder="username" ref={this.logUserRef} />
            </div>
            <div className="form-group">
              <label>Password</label>
              <input type="password" name="password" placeholder="password" ref={this.logpassRef}/>
            </div>
            <button onClick={()=>this.logRef()}>login</button>
          </div>
        </form>
        <div className="footer">
        <h5 className="mt-2">Not registered? <strong style={registerStyle} onClick={() => this.props.loader('register')}>Register</strong> now</h5>
        </div>
      </div>
         
    );
  }
}

export default Login;