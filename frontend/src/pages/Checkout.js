// pages/Checkout.js

import React from "react";
import ProgressSteps from '../ProgressSteps';
//import CheckoutCart from "../CheckoutCart";
import PaymentMethod from "../PaymentMethod";


const Checkout = () => (
    <div className="mt-5 mb-4">
        <ProgressSteps content={<PaymentMethod />} />
    </div>
);

export default Checkout;
