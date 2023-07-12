import React from "react";
import { useNavigate } from 'react-router-dom';
import './AdminPage.css';
import CustomButton from '../components/Buttons';
import AdminOptions from './AdminOptions';


const AdminPage = () => {
    const navigate = useNavigate();

    function showAdminOptions(){
        navigate('/admin/admins')
    }    

    return (
            <div className="centerOptions"> 
                <div className="row optionDiv">
                    <CustomButton text="Users"/>
                    <CustomButton text="Products"/>
                    <CustomButton text="Admins" onClick={showAdminOptions}/>
                </div>
            </div>
    );
}

export default AdminPage;
