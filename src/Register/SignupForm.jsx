import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import "./signup.css";

const navigate = useNavigate();

const SignupForm = () => {
    const [formData, setFormData] = useState({
        fname: '',
        lname: '',
        email: '',
        mobile: '',
        password: ''
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSignup = () => {
        axios.post('http://localhost:8069/api/users/signup', formData)
            .then(response => {
                alert("successful")
                console.log('User registered successfully:', response.data);
                 // Redirect to a new page after successful registration
       // history.push('/dashboard');
       //                 navigate('/check');

            })
            .catch(error => {
                alert(error)
                console.error('Error registering user:', error);
            // Redirect to a new page after unsuccessful registration
               // history.push('/check');
               navigate('/check');

            });
    };

    return (
        <div>
            <input type="text" name="fname" placeholder="First Name" onChange={handleInputChange} />
            <input type="text" name="lname" placeholder="Last Name" onChange={handleInputChange} />
            <input type="email" name="email" placeholder="Email" onChange={handleInputChange} />
            <input type="text" name="mobile" placeholder="Mobile" onChange={handleInputChange} />
            <input type="password" name="password" placeholder="Password" onChange={handleInputChange} />
            <button onClick={handleSignup}>Signup</button>
        </div>
    );
};

export default SignupForm;
