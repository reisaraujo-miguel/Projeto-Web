import React, { useState } from "react";
import CustomButton from '../components/Buttons';
import InputBox from '../components/InputBox';
import './AdminOptions.css';
import SearchBarAdmin from '../components/SearchBarAdmin';
import addButton from '../img/Buttons/Addbutton.png';
import excludeMark from '../img/Buttons/excludeMark.png';
import okayMark from '../img/Buttons/okayMark.png';



const AdminOptions = ({ type = 0 }) => {

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
        <div className="admin-wrapper">
            <div className="label-wrapper"> 
            <label> Modify Admin </label>
            </div>
            <div className="searchbar-admin">
                <SearchBarAdmin placeholder="Search Admins"/>
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
            <div className="button-admin">
                <CustomButton image={excludeMark} text="Remove" />
                <CustomButton image={okayMark} text="Apply" />
            </div>
        </div>
        </div>
    );
};

export default AdminOptions;
