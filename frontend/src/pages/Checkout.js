// pages/Checkout.js

import React from "react";
import ProgressSteps from '../ProgressSteps';
import CheckoutCart from "../CheckoutCart";


const Checkout = () => (
    <div className="mt-5 mb-4">
        <ProgressSteps content={<CheckoutCart data="http://localhost:8080/sla.json" />} />
    </div>
);

export default Checkout;
