import React, { useState } from "react";
import CustomButton from '../components/Buttons';
import InputBox from '../components/InputBox';
import './AdminOptions.css';
import SearchBarAdmin from '../components/SearchBarAdmin';

const AdminOptions = ({ type = 0 }) => {

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmationPass, setConfirmationPass] = useState('')
    const [result, setResult] = useState(null)

    function demoteAdmin(){
        if(result === null){
            alert("Por favor use a barra de search")
            return
        }
        let url = "http://localhost:3001/users/" + result.username
        let data = {
            "name" : result.name,
            "email" : result.email,
            "password" : (password === '' ? result.password : password),
            "isAdmin" : false 
        }

        fetch(url, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        })
        setResult(null)
    }

    function modifyAdmin() {
        if(result === null){
            alert("Por favor use a barra de search")
            return
        }
        let url = "http://localhost:3001/users/" + result.username
        let data = {
            "name" : name,
            "email" : email,
            "password" : (password === '' ? result.password : password),
            "isAdmin" : true
        }

        fetch(url, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        })
        setResult(null)
    }

    return (
        <div className="options-wrapper">
        <div className="admin-wrapper">
            <div className="label-wrapper"> 
            <label> Edit Admin </label>
            </div>
            <div className="searchbar-admin">
                <SearchBarAdmin placeholder="Search Admins" endpoint="users/admins" setData={setResult}/>
            </div>
            <div className="gap-2">
                <div className="inputbox-wrapper">
                    <InputBox inputType="text" placeholder={result === null ? "Name" : result.name}  setData={setName}/>
                </div>
                <div className="inputbox-wrapper">
                    <InputBox inputType="text" placeholder={result === null ? "Email" : result.email} setData={setEmail}/>
                </div>
                <div className="inputbox-wrapper">
                    <InputBox inputType="password" placeholder="Password" setData={setPassword}/>
                </div>
                <div className="inputbox-wrapper">
                    <InputBox inputType="password" placeholder="Confirm Password" setData={setConfirmationPass}/>
                </div>
            </div>
            <div className="button-admin">
                <CustomButton image={excludeMark} text="Demote" onClick={demoteAdmin} />
                <CustomButton image={okayMark} text="Update" onClick={modifyAdmin}/>
            </div>
        </div>
        </div>
    );
};

export default AdminOptions;
