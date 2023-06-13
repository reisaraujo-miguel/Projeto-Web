import React, { useState } from 'react';

const Form = () => {
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
        <form onSubmit={handleSubmit}>
            <div>
                <input
                    type="text"
                    name="StreetName"
                    value={formData.StreetName}
                    onChange={handleChange}
                    placeholder="Street Name*"
                    required
                    style={{ marginTop: '20px', marginBottom: '20px', marginRight: '20px' }}
                />
                <input
                    type="text"
                    name="Number"
                    value={formData.Number}
                    onChange={handleChange}
                    placeholder="Number*"
                    required
                    style={{ marginRight: '20px', width: '100px' }}
                />
                <input
                    type="text"
                    name="Apartment"
                    value={formData.Apartment}
                    onChange={handleChange}
                    placeholder="Unit/Apt."
                    style={{ width: '100px' }}

                />
            </div>
            <div>
                <input
                    type="text"
                    name="ZipCode"
                    value={formData.ZipCode}
                    onChange={handleChange}
                    placeholder="Zip Code*"
                    required
                    style={{ marginBottom: '20px', width: '255px', marginLeft:'20px', marginRight: '20px' }}
                />
                <input
                    type="text"
                    name="City"
                    value={formData.City}
                    onChange={handleChange}
                    placeholder="City*"
                    required
                    style={{ marginBottom: '20px', width: '260px', marginRight: '20px' }}
                />
            </div>
            <div>
                <input
                    type="text"
                    name="State"
                    value={formData.State}
                    onChange={handleChange}
                    placeholder="State*"
                    required
                    style={{ marginBottom: '20px', width: '255px', marginRight: '20px' }}
                />
                <select
                    name="Country"
                    value={formData.Country}
                    onChange={handleChange}
                    required
                    style={{ width: '260px', marginBottom: '10px' }}
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
            <button type="submit">Submit</button>
        </form>
    );
};

export default Form;
