import React from "react";
import CustomButton from '../components/Buttons';
import InputBox from '../components/InputBox';
import './AdminOptions.css';
import SearchBarAdmin from '../components/SearchBarAdmin';
import addButton from '../img/Buttons/Addbutton.png';
import excludeMark from '../img/Buttons/excludeMark.png';
import okayMark from '../img/Buttons/okayMark.png';

const AdminOptions = ({ type = 0 }) => {

    if (type === 0) {
        return (
            <div className="row gap-4 admin-wrapper">
                <label> Add New Admin </label>
                <div className="row gap-2">
                    <div>
                        <InputBox inputType="text" placeholder="Name" />
                    </div>
                    <div>
                        <InputBox inputType="text" placeholder="Email" />
                    </div>
                    <div>
                        <InputBox inputType="password" placeholder="Password" />
                    </div>
                    <div>
                        <InputBox inputType="password" placeholder="Confirm Password" />
                    </div>
                </div>
                <div>
                    <CustomButton image={addButton} />
                </div>
            </div>
        );
    }

    return (
        <div className="row gap-4 admin-wrapper">
            <label> Modify Admin </label>
            <div>
                <SearchBarAdmin />
            </div>
            <div className="row gap-2">
                <div>
                    <InputBox inputType="text" placeholder="Name" />
                </div>
                <div>
                    <InputBox inputType="text" placeholder="Email" />
                </div>
                <div>
                    <InputBox inputType="password" placeholder="Password" />
                </div>
                <div>
                    <InputBox inputType="password" placeholder="Confirm Password" />
                </div>
            </div>
            <div>
                <CustomButton image={excludeMark} text="Remove" />
                <CustomButton image={okayMark} text="Apply" />
            </div>
        </div>
    );
};

export default AdminOptions;
