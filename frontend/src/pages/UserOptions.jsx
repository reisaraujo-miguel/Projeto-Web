import React, { useState } from "react";
import CustomButton from '../components/Buttons';
import InputBox from '../components/InputBox';
import './UserOptions.css';

const UserOptions = ({ type = 0 }) => {

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmationPass, setConfirmationPass] = useState('')

    function foo() {
        console.log(`${name} ${email} ${password}, ${confirmationPass}`)
        let url = ""
        let data = {
            "name" : name,
            "email" : email,
            "password" : password
        }

        fetch(url, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        })
    }

    return (
        <div className="options-wrapper">
        <div className="user-wrapper">
            <div className="label-wrapper"> 
            <label> Edit user </label>
            </div>
            <div className="searchbar-user">
            </div>
            <div className="gap-2">
                <div className="inputbox-wrapper">
                    <InputBox inputType="text" placeholder="Name" setData={setName}/>
                </div>
                <div className="inputbox-wrapper">
                    <InputBox inputType="text" placeholder="Email" setData={setEmail}/>
                </div>
                <div className="inputbox-wrapper">
                    <InputBox inputType="password" placeholder="Password" setData={setPassword}/>
                </div>
                <div className="inputbox-wrapper">
                    <InputBox inputType="password" placeholder="Confirm Password" setData={setConfirmationPass}/>
                </div>
            </div>
            <div className="button-user">
                <CustomButton text="Delete"/>
                <CustomButton text="Update"/>
            </div>
        </div>
        </div>
    );
};

export default UserOptions;