import React, { useEffect, useState } from "react";
import InputBox from "./InputBox";
import ExpirationDateField from "./ExpirationDateField";
import "./PaymentMethod.css";

const PaymentMethod = ({ updatePayment = (e) => { console.log(e); }, submitRef, setContinue }) => {
    const [name, setName] = useState(null);
    const [date, setDate] = useState(null);
    const [card, setCard] = useState(null);
    const [code, setCode] = useState(null);
    const [data, setData] = useState([]);

    useEffect(() => {
        const updatedData = {
            name,
            date,
            card,
            code,
        };

        setData(updatedData);
    }, [name, date, card, code]);

    const handleSubmit = (e) => {
        e.preventDefault();
        setContinue(true);
        updatePayment(data);
    }

    return (
        <div style={{ "textAlign": "left" }}>
            <label className="text" htmlFor="list"><b>Credit Card:</b></label>
            <form ref={submitRef} onSubmit={handleSubmit}>
                <div className="container">
                    <div className="row mb-5">
                        <div className="col" style={{ "paddingTop": "3.5%" }}>
                            <InputBox padding={"6px"} setData={setName} placeholder={"Card Holder*"} isRequired={true} />
                        </div>
                        <div className="col">
                            <ExpirationDateField setData={setDate} isRequired={true} />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                            <InputBox padding={"6px"} setData={setCard} placeholder={"Card Number*"} isRequired={true} />
                        </div>
                        <div className="col">
                            <InputBox padding={"6px"} setData={setCode} placeholder={"Security Code*"} isRequired={true} />
                        </div>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default PaymentMethod;
