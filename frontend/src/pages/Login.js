// pages/Login.js

import React from "react";
import './Login.css';
import InputBox from "../InputBox";
import UserImage from '../img/icons/user.png';
import Password from '../img/icons/password.png';
import CustomButton from '../Buttons';

const Login = () => (
  
  <div className="loginDiv">
    <h1 style={{ marginBottom: "50px" }}>Login</h1>
    <InputBox image={UserImage} inputType={"text"} placeholder={"Username"} />
    <br style={{ marginBottom: '30px' }}></br>
    <InputBox image={Password} inputType={"password"} placeholder={"Password"} />

    <div className="loginOptions">
      <input type="checkbox" id="remember-me" name="remember-me" defaultChecked={true}></input>
      <label for="remember-me" className="rememberMe">Remember me</label>
      <label className="forgotPassword"><a href="none">Forgot password?</a></label>
    </div>
    <br style={{ marginBottom: '10px' }}></br>
    <CustomButton text={"Log in"} />
    <br style={{ marginBottom: '20px' }}></br>
    <label className="createAccount">Don’t have an account yet? <a href="signup">Sign up</a></label>

  </div>


);

export default Login;