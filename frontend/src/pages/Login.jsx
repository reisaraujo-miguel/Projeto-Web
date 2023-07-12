// pages/Login.js

import React, { useRef, useState } from "react";
import './Login.css';
import InputBox from "../components/InputBox";
import UserImage from '../img/icons/user.png';
import Password from '../img/icons/password.png';
import CustomButton from '../components/Buttons';
import { toast } from "react-toastify";

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const submitRef = useRef();

    const handleSubmit = async () => {
        if (submitRef.current.reportValidity()) {
            await logUser();
        }
    }

    const logUser = async () => {
        try {
            const response = await fetch('http://localhost:3001/api/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ username, password }),
            });

            if (!response.ok) {
                console.log(response);
                throw new Error('Login failed');
            }

            const data = await response.json();
            const { token } = data;
            console.log(data);

            localStorage.setItem('token', token);

            window.location.pathname = '/';
        } catch (error) {
            console.error(error.message);
            toast.error('Something Went Wrong :(', {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            });
        }
    };

    return (
        <div className="loginDiv">
            <form ref={submitRef}>
                <h1 style={{ marginBottom: "3rem" }}>Login</h1>
                <InputBox image={UserImage} inputType={"text"} placeholder={"Username*"} setData={setUsername} isRequired={true} />
                <br style={{ marginBottom: '1rem' }}></br>
                <InputBox image={Password} inputType={"password"} placeholder={"Password*"} setData={setPassword} isRequired={true} />
            </form>

            <div className="loginOptions">
                <input type="checkbox" id="remember-me" name="remember-me" defaultChecked={true}></input>
                <label htmlFor="remember-me" className="rememberMe">Remember me</label>
                <label className="forgotPassword"><a href="none">Forgot password?</a></label>
            </div>

            <br style={{ marginBottom: '1rem' }}></br>
            <CustomButton text={"Log in"} onClick={handleSubmit} />

            <br style={{ marginBottom: '1rem' }}></br>
            <label className="createAccount">Don’t have an account yet? <a href="signup">Sign up</a></label>

        </div>
    );
};

export default Login;
