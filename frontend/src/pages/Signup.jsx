// pages/Signup.js

import React from "react";
import './Signup.css';
import InputBox from "../components/InputBox";
import UserImage from '../img/icons/user.png';
import Password from '../img/icons/password.png';
import Mail from '../img/icons/mail.png';
import Phone from '../img/icons/phone.png';
import ZipCode from '../img/icons/zipcode.png';
import Identity from '../img/icons/identity.png';
import CustomButton from '../components/Buttons';

const Signup = () => (
  <div className="SignUpDiv">
    <h1 style={{ marginBottom: "70px" }}>Create Account</h1>

    <div class="input-row">
      <div style={{ marginRight: '30px' }}>
        <InputBox image={UserImage} inputType={"text"} placeholder={"Full name"} />
      </div>
      <div>
        <InputBox image={Identity} inputType={"text"} placeholder={"ID number"} />
      </div>
    </div>

    <br></br>

    <div class="input-row">
      <div style={{ marginRight: '30px' }}>
        <InputBox image={Phone} inputType={"text"} placeholder={"Phone number"} />
      </div>
      <div>
        <InputBox image={ZipCode} inputType={"text"} placeholder={"Zip Code"} />
      </div>
    </div>

    <br></br>

    <div class="input-row">
      <div style={{ marginRight: '30px' }}>
        <InputBox image={ZipCode} inputType={"text"} placeholder={"Bairro"} />
      </div>
      <div>
        <InputBox image={ZipCode} inputType={"text"} placeholder={"Número"} />
      </div>
    </div>

    <br></br>
    <hr style={{ width: "90%", margin: "auto" }}></hr>
    <br></br>

    <div class="input-row">
      <div style={{ marginRight: '30px' }}>
        <InputBox image={UserImage} inputType={"text"} placeholder={"Username"} />
      </div>
      <div>
        <InputBox image={Mail} inputType={"email"} placeholder={"E-mail"} />
      </div>
    </div>

    <br></br>

    <div class="input-row">
      <div style={{ marginRight: '30px' }}>
        <InputBox image={Password} inputType={"password"} placeholder={"Password"} />
      </div>
      <div>
        <InputBox image={Password} inputType={"password"} placeholder={"Confirm password"} />
      </div>
    </div>

    <br style={{ marginBottom: '40px' }}></br>
    <CustomButton text={"Sign up"} />
  </div>
);

export default Signup;
