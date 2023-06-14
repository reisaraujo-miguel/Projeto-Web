import React from "react";
import CustomButton from '../components/Buttons.js';
import InputBox from '../components/InputBox.js';
import './AdminOptions.css';
import SearchBarAdmin from '../components/SearchBarAdmin.js';
import addButton from '../img/Buttons/Addbutton.png';
import excludeMark from '../img/Buttons/excludeMark.png';
import okayMark from '../img/Buttons/okayMark.png';

const AdminOptions = ({ type = 0 }) => {

  if(type === 0){
    return (
      <div className="admin-wrapper">
        <label className="add-label"> Add New Admin </label>
        <div className="input-box-wrapper"> 
          <InputBox inputType="text" placeholder="Name"/>
        </div>
        <div className="input-box-wrapper">
          <InputBox inputType="text" placeholder="Email"/>
        </div>
        <div className="input-box-wrapper">
          <InputBox 
            inputType="password" 
            placeholder="Password"
          />
        </div>
        <div className="input-box-wrapper">
          <InputBox inputType="password" placeholder="Confirm Password"/>
        </div>
        <div className="add-button-wrapper">
          <CustomButton
            image={addButton}/>
        </div>

      </div>
    );
  }    
  
  return (
    <div className="admin-wrapper">
      <label className="add-label"> Modify Admin </label>
      <div className="search-bar-wrapper">
        <SearchBarAdmin/>
      </div>
      <div className="input-box-wrapper">
        <InputBox inputType="text" placeholder="Name"/>
      </div>
      <div className="input-box-wrapper">
        <InputBox inputType="text" placeholder="Email"/>
      </div>
      <div className="input-box-wrapper">
        <InputBox inputType="password" placeholder="Password"/>
      </div>
      <div className="input-box-wrapper">
        <InputBox inputType="password" placeholder="Confirm Password"/>
      </div>
        <div className="add-button-wrapper">
          <CustomButton
            image={excludeMark}
            text="Remove"/>
           <CustomButton
            image={okayMark}
            text="Apply"/>           
        </div>
    </div>
  );

};

export default AdminOptions;
