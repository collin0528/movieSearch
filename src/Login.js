import React from "react";
import './form.css';
import logImg from "./images/log.svg";

export class Login extends React.Component {

  constructor(props) {
    super(props);

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
        <form className="content">
          <div className="image">
            <img src={logImg} />
          </div>
          <div className="form">
            <div className="form-group">
              <label>Username</label>
              <input type="text" name="username" placeholder="username" />
            </div>
            <div className="form-group">
              <label>Password</label>
              <input type="password" name="password" placeholder="password" />
            </div>
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