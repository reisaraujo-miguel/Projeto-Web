import React, { useRef, useState } from "react";
import CustomButton from '../components/Buttons';
import InputBox from '../components/InputBox';
import './AdminOptions.css';
import SearchBarAdmin from '../components/SearchBarAdmin';
import { toast } from "react-toastify";

const AdminOptions = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmationPass, setConfirmationPass] = useState('');
    const [result, setResult] = useState(null);

    const formRef = useRef();

    function demoteAdmin() {
        if (result === null) {
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
            return;
        }

        const url = "http://localhost:3001/users/" + result.username;
        const data = {
            "name": result.name,
            "email": result.email,
            "password": result.password,
            "isAdmin": false
        };

        fetch(url, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        });

        toast.success('Admin Demoted', {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
        });

        formRef.current.reset();

        setResult(null);
    }

    function modifyAdmin() {
        if (result === null) {
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
            return;
        }

        if (confirmationPass !== password) {
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
            return;
        }

        const url = "http://localhost:3001/users/" + result.username;
        const data = {
            "name": (name === '' ? result.name : name),
            "email": (email === '' ? result.email : email),
            "password": (password === '' ? result.password : password),
            "isAdmin": true
        }

        fetch(url, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        });

        toast.success('Admin Updated', {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
        });

        formRef.current.reset();

        setResult(null);
    }

    return (
        <div className="options-wrapper">
            <div className="admin-wrapper">
                <div className="label-wrapper">
                    <label className="text"> Edit Admin </label>
                </div>
                <div className="searchbar-admin">
                    <SearchBarAdmin placeholder="Search Admins" endpoint="users/admins" setData={setResult} />
                </div>
                <div className="gap-2">
                    <form ref={formRef}>
                        <div className="inputbox-wrapper">
                            <InputBox inputType="text" placeholder={result === null ? "Name" : result.name} setData={setName} />
                        </div>
                        <div className="inputbox-wrapper">
                            <InputBox inputType="text" placeholder={result === null ? "Email" : result.email} setData={setEmail} />
                        </div>
                        <div className="inputbox-wrapper">
                            <InputBox inputType="password" placeholder="New Password" setData={setPassword} />
                        </div>
                        <div className="inputbox-wrapper">
                            <InputBox inputType="password" placeholder="Confirm New Password" setData={setConfirmationPass} />
                        </div>
                    </form>
                </div>
                <div className="button-admin">
                    <CustomButton text="Demote" onClick={demoteAdmin} />
                    <CustomButton text="Update" onClick={modifyAdmin} />
                </div>
            </div>
        </div>
    );
};

export default AdminOptions;
