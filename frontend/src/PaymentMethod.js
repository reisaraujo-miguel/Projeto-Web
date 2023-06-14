import React, { useEffect, useState } from "react";
import InputBox from "./InputBox";
import ExpirationDateField from "./ExpirationDateField";

const PaymentMethod = ({ updatePayment = (e) => { console.log(e); } }) => {
    const [name, setName] = useState(null);
    const [date, setDate] = useState(null);
    const [card, setCard] = useState(null);
    const [code, setCode] = useState(null);

    useEffect(() => {
        const updatedData = {
            name,
            date,
            card,
            code,
        };

        updatePayment(updatedData);
    }, [name, date, card, code, updatePayment]);

    return (
        <div style={{ "textAlign": "left" }}>
            <label className="mt-5 mb-4" htmlFor="list"><b>Credit Card:</b></label>
            <div className="container">
                <div className="row mb-5">
                    <div className="col" style={{ "paddingTop": "3.5%" }}>
                        <InputBox padding={"6px"} setData={setName} placeholder={"Card Holder*"} />
                    </div>
                    <div className="col">
                        <ExpirationDateField setData={setDate} />
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <InputBox padding={"6px"} setData={setCard} placeholder={"Card Number*"} />
                    </div>
                    <div className="col">
                        <InputBox padding={"6px"} setData={setCode} placeholder={"Security Code*"} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PaymentMethod;
