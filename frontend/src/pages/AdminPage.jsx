import React from "react";
import { useNavigate } from 'react-router-dom';
import './AdminPage.css';
import CustomButton from '../components/Buttons';

const AdminPage = () => {
    const navigate = useNavigate();

    function showAdminOptions(){
        navigate('/admin/admins')
    }

    function showUserOptions(){
        navigate('/admin/users')
    }    

    function showProductOptions(){
        navigate('/admin/products')
    }    

    return (
            <div className="centerOptions"> 
                <div className="row optionDiv">
                    <CustomButton text="Users" onClick={showUserOptions}/>
                    <CustomButton text="Products" onClick={showProductOptions}/>
                    <CustomButton text="Admins" onClick={showAdminOptions}/>
                </div>
            </div>
    );
}

export default AdminPage;
