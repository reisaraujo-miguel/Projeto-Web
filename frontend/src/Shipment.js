import React, { useState } from 'react';
import './Shipment.css';

const ShipmentForm = () => {
    const [formData, setFormData] = useState({
        StreetName: '',
        Number: '',
        Apartment: '',
        ZipCode: '',
        City: '',
        State: '',
        Country: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevFormData) => ({
            ...prevFormData,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission here
        console.log(formData);
    };

    // List of 20 countries
    const countryOptions = [
        '',
        'Argentina',
        'Australia',
        'Brazil',
        'Canada',
        'China',
        'France',
        'Germany',
        'India',
        'Italy',
        'Japan',
        'Mexico',
        'Netherlands',
        'Russia',
        'South Africa',
        'South Korea',
        'Spain',
        'Sweden',
        'Switzerland',
        'United Kingdom',
        'United States',
    ];

    return (
        <div style={{ "textAlign": "left" }}>
            <label className='mt-5 mb-4' htmlFor='form'><b>Delivery Addres</b></label>
            <form onSubmit={handleSubmit}>
                <div>
                    <input
                        className='input'
                        type="text"
                        name="StreetName"
                        value={formData.StreetName}
                        onChange={handleChange}
                        placeholder="Street Name*"
                        required
                        style={{ marginTop: '20px', marginBottom: '30px', marginRight: '30px', width: '30%' }}
                    />
                    <input
                        className='input'
                        type="text"
                        name="Number"
                        value={formData.Number}
                        onChange={handleChange}
                        placeholder="Number*"
                        required
                        style={{ marginRight: '30px', width: '10%' }}
                    />
                    <input
                        className='input'
                        type="text"
                        name="Apartment"
                        value={formData.Apartment}
                        onChange={handleChange}
                        placeholder="Unit/Apt."
                        style={{ width: '10%' }}

                    />
                </div>
                <div>
                    <input
                        className='input'
                        type="text"
                        name="ZipCode"
                        value={formData.ZipCode}
                        onChange={handleChange}
                        placeholder="Zip Code*"
                        required
                        style={{ marginBottom: '30px', marginRight: '30px', width: '20%' }}
                    />
                    <input
                        className='input'
                        type="text"
                        name="City"
                        value={formData.City}
                        onChange={handleChange}
                        placeholder="City*"
                        required
                        style={{ marginBottom: '30px', width: '32%' }}
                    />
                </div>
                <div>
                    <input
                        className='input'
                        type="text"
                        name="State"
                        value={formData.State}
                        onChange={handleChange}
                        placeholder="State*"
                        required
                        style={{ marginBottom: '20px', marginRight: '20px', width: '28%' }}
                    />
                    <select
                        className='selector'
                        name="Country"
                        value={formData.Country}
                        onChange={handleChange}
                        required
                    >
                        <option value="" disabled hidden>
                            Select a country
                        </option>
                        {countryOptions.map((Country) => (
                            <option key={Country} value={Country}>
                                {Country}
                            </option>
                        ))}
                    </select>
                </div>
                <button className="submit" type="submit" style={{ borderRadius: '10px' }}>Submit</button>
            </form>
        </div>
    );
};

export default ShipmentForm;
