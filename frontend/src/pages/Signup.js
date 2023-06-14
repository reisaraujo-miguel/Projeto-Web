// pages/Signup.js

import React from "react";
import './Signup.css';
import InputBox from "../InputBox";
import UserImage from '../img/icons/user.png';
import Password from '../img/icons/password.png';
import CustomButton from '../Buttons';

const Signup = () => (
  <div className="SignUpDiv">
    <h1 style={{ marginBottom: "50px" }}>Create Account</h1>
    <InputBox image={UserImage} inputType={"text"} placeholder={"Username"} />
    <br style={{ marginBottom: '30px' }}></br>
    <InputBox image={Password} inputType={"password"} placeholder={"Password"} />
    <br style={{ marginBottom: '30px' }}></br>
    <CustomButton text={"Sign up"} />
  </div>
);

export default Signup;