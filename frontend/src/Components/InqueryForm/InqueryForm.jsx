import React, { useState } from 'react';
import axios from 'axios';

const InqueryForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        number: '',
        email: '',
        inqueryFor: '',
        message: ''
    });

    const [successMessage, setSuccessMessage] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:4000/api/inquiry/add', formData);
            setSuccessMessage('Inquiry submitted successfully!');
            setErrorMessage('');
            setFormData({ name: '', number: '', email: '', inqueryFor: '', message: '' });
        } catch (error) {
            setErrorMessage('Failed to submit inquiry. Please try again.');
            setSuccessMessage('');
        }
    };

    return (
        <div>
            <form onSubmit={handleSubmit} method="post">
                <h1>Send us an inquiry</h1>
                <label htmlFor="name">Full Name</label><br />
                <input type="text" name='name' value={formData.name} onChange={handleChange} required /><br />
                <label htmlFor="number">Phone Number</label><br />
                <input type="number" name='number' value={formData.number} onChange={handleChange} required /><br />
                <label htmlFor="email">Email</label> <br />
                <input type="email" name='email' value={formData.email} onChange={handleChange} required /><br />
                <label htmlFor="inqueryFor">Inquiry For</label><br />
                <select name="inqueryFor" id="inqueryFor" value={formData.inqueryFor} onChange={handleChange} required>
                    <option value="">Select</option>
                    <option value="Sale">Sale Properties</option>
                    <option value="Rent">Rent Properties</option>
                    <option value="Buy">Buy Properties</option>
                </select><br />
                <label htmlFor="message">Message</label><br />
                <textarea name="message" id="message" cols={50} rows={5} value={formData.message} onChange={handleChange}></textarea><br />
                <input type="submit" value="Submit" className='submit_btn' name='inquery_message'/>
            </form>
            {successMessage && <p className="success-message">{successMessage}</p>}
            {errorMessage && <p className="error-message">{errorMessage}</p>}
        </div>
    );
};

export default InqueryForm;
