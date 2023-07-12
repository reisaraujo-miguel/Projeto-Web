import React, { useState } from "react";
import CustomButton from '../components/Buttons';
import InputBox from '../components/InputBox';
import excludeMark from '../img/Buttons/excludeMark.png';
import okayMark from '../img/Buttons/okayMark.png';
import './AdminOptions.css';
import SearchBarAdmin from '../components/SearchBarAdmin';
import { toast } from "react-toastify";

const AdminOptions = () => {

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmationPass, setConfirmationPass] = useState('')
    const [result, setResult] = useState(null)

    function demoteAdmin(){
        if(result === null){
            toast.error('Use the search bar! :(', {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            });
            return
        }
        let url = "http://localhost:3001/users/" + result.username
        let data = {
            "name" : result.name,
            "email" : result.email,
            "password" : result.password,
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
            toast.error('Use the search bar! :(', {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            });
            return
        }
        if(confirmationPass !== password){
            toast.error('Passwords do not match!', {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            });
            return
        }
        let url = "http://localhost:3001/users/" + result.username
        let data = {
            "name" : (name === '' ? result.name : name),
            "email" : (email === '' ? result.email : email),
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
            <label className="text"> Edit Admin </label>
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
                <CustomButton text="Demote" onClick={demoteAdmin} />
                <CustomButton text="Update" onClick={modifyAdmin}/>
            </div>
        </div>
        </div>
    );
};

export default AdminOptions;
