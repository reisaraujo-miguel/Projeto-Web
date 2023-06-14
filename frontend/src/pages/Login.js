// pages/Login.js

import React from "react";
import './Login.css';
import InputBox from "../InputBox";
import UserImage from '../img/icons/user.png';
import Password from '../img/icons/password.png';
import CustomButton from '../Buttons';

const Login = () => (
  <div className="loginDiv">
    <h1 style={{marginBottom:"50px"}}>Login</h1>
    <InputBox image={UserImage} inputType={"text"} placeholder={"Username"} />
    <br style={{ marginBottom: '30px' }}></br>
    <InputBox image={Password} inputType={"password"} placeholder={"Password"} />
    <br style={{ marginBottom: '30px' }}></br>
    <CustomButton text={"Log in"}/>
  </div>
);

export default Login;