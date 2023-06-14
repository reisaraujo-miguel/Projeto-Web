import React from "react";
import './AdminPage.css';
import CustomButton from '../components/Buttons.js';
import AdminOptions from './AdminOptions.js';

const AdminPage = () => (
  <div className="outDiv">
    <div className="optionDiv">
      <CustomButton text="Admins"/> 
      <CustomButton text="Products"/> 
    </div>
    <div className="crudDiv">
      <div className="modifyDiv"> 
        <AdminOptions/>
      </div>
      <div className="modifyDiv"> 
        <AdminOptions
          type={1}/>
      </div>
    </div>
  </div>
);

export default AdminPage;
