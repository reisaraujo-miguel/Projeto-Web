import React, { useState } from "react";
import './Signup.css';
import InputBox from "../components/InputBox";
import UserImage from '../img/icons/user.png';
import Password from '../img/icons/password.png';
import Mail from '../img/icons/mail.png';
import Phone from '../img/icons/phone.png';
import ZipCode from '../img/icons/zipcode.png';
import Identity from '../img/icons/identity.png';
import CustomButton from '../components/Buttons';


const Signup = () => {

  const [name, setName] = useState('')
  const [cpf, setCpf] = useState('')
  const [bairro, setBairro] = useState('')
  const [number, setNumber] = useState('')
  const [cep, setCep] = useState('')
  const [phone, setPhone] = useState('')
  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPass, setConfirmPass] = useState('')

  function signUser() {
    if(confirmPass !== password){
      alert("senhas diferem!");

      return;
    }
    
    const url = 'http://localhost:3001/users'
    const data = {
      "name": name,
      "cpf": cpf,
      "address": {
        "cep": cep,
        "bairro": bairro,
        "number": number 
      },
      "username": username,
      "email": email,
      "password": password,
      "phone": phone,
      "isAdmin": false
    } 
      fetch(url,{
        method: 'POST',
        headers: {
          'Content-Type' : 'application/json'
        },
        body: JSON.stringify(data)

      })
      .then(response => response.json())
      .then(res => {
        console.log(res);
      })
      .catch(e =>{
        console.log(e);
      });
  }

  return (
    <div className="SignUpDiv">
      <h1 style={{ marginBottom: "70px" }}>Create Account</h1>

      <div class="input-row">
        <div style={{ marginRight: '30px' }}>
          <InputBox image={UserImage} inputType={"text"} placeholder={"Full name"} setData={setName}/>
        </div>
        <div>
          <InputBox image={Identity} inputType={"text"} placeholder={"ID number"} setData={setCpf}/>
        </div>
      </div>

      <br></br>

      <div class="input-row">
        <div style={{ marginRight: '30px' }}>
          <InputBox image={Phone} inputType={"text"} placeholder={"Phone number"} setData={setPhone}/>
        </div>
        <div>
          <InputBox image={ZipCode} inputType={"text"} placeholder={"Zip Code"} setData={setCep}/>
        </div>
      </div>

      <br></br>

      <div class="input-row">
        <div style={{ marginRight: '30px' }}>
          <InputBox image={ZipCode} inputType={"text"} placeholder={"Bairro"} setData={setBairro}/>
        </div>
        <div>
          <InputBox image={ZipCode} inputType={"text"} placeholder={"Número"} setData={setNumber}/>
        </div>
      </div>

      <br></br>

      <div class="input-row">
        <div style={{ marginRight: '30px' }}>
          <InputBox image={UserImage} inputType={"text"} placeholder={"Username"} setData={setUsername} />
        </div>
        <div>
          <InputBox image={Mail} inputType={"email"} placeholder={"E-mail"} setData={setEmail}/>
        </div>
      </div>

      <br></br>

      <div class="input-row">
        <div style={{ marginRight: '30px' }}>
          <InputBox image={Password} inputType={"password"} placeholder={"Password"} setData={setPassword} />
        </div>
        <div>
          <InputBox image={Password} inputType={"password"} placeholder={"Confirm password"} setData={setConfirmPass} />
        </div>
      </div>

      <br style={{ marginBottom: '40px' }}></br>
      <CustomButton text={"Sign up"} onClick={signUser} />
    </div>
  );
}

export default Signup;
