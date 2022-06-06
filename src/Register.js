import React from "react";
import './form.css';
import regImg from "./images/reg.svg";

export class Registration extends React.Component {
  constructor(props) {
    super(props);
    this.props=props
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
        <div className="content">
          <div className="image">
            <img src={regImg} />
          </div>
          <div className="form">
            <div className="form-group">
              <label htmlFor="username">Username</label>
              <input type="text" name="username" placeholder="username" />
            </div>
            <div className="form-group">
              <label>Email</label>
              <input type="text" name="email" placeholder="email" />
            </div>
            <div className="form-group">
              <label>Password</label>
              <input type="text" name="password" placeholder="password" />
            </div>
          </div>
        </div>
        <div className="footer">
        <h5 className="mt-2">Already registered? <strong style={registerStyle} onClick={() => this.props.loader('login')}>Log in</strong> now</h5>
        </div>
      </div>
    );
  }
}
 
export default Registration;