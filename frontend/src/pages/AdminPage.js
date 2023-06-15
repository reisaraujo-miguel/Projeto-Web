import React from "react";
import './AdminPage.css';
import CustomButton from '../components/Buttons.js';
import AdminOptions from './AdminOptions.js';

const AdminPage = () => (
    <div className="row">
        <div className="col-md-3">
            <div className="row optionDiv">
                <CustomButton text="Admins" />
                <CustomButton text="Products" />
            </div>
        </div>
        <div className="col-md-7">
            <div className="row gap-5">
                <div className="modifyDiv">
                    <AdminOptions />
                </div>
                <div className="modifyDiv">
                    <AdminOptions type={1} />
                </div>
            </div>
        </div>
    </div>
);

export default AdminPage;
