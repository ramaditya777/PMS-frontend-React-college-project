import React, { useState } from 'react';
import axios from 'axios';
import "./signup.css";

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
            })
            .catch(error => {
                alert(error)
                console.error('Error registering user:', error);
            });
    };

    return (
        <>
            <div class="registration-form">
                <div class="form-group">
                    <label for="fname">First Name:</label>
                    <input type="text" name="fname" placeholder="First Name" onChange={handleInputChange} /><br/>
                </div>
                <div class="form-group">
                    <label for="lname">Last Name:</label>
                    <input type="text" name="lname" placeholder="Last Name" onChange={handleInputChange} /><br/>
                </div>
                <div class="form-group">
                    <label for="email">Email:</label>
                    <input type="email" name="email" placeholder="Email" onChange={handleInputChange} /><br/>
                </div>
                <div class="form-group">
                    <label for="mobileno">Mobile Number:</label>
                    <input type="text" name="mobile" placeholder="Mobile" onChange={handleInputChange} /><br/>
                </div>
                <div class="form-group">
                    <label for="pwd">Password:</label>
                    <input type="password" name="password" placeholder="Password" onChange={handleInputChange} /><br/>
                </div>
                <div class="form-group">
                <button onClick={handleSignup}>Signup</button>
                </div>
            </div>

        
        </>
        
    );
};

export default SignupForm;

// <div>
//            <input type="text" name="fname" placeholder="First Name" onChange={handleInputChange} /><br/>
//           <input type="text" name="lname" placeholder="Last Name" onChange={handleInputChange} /><br/>
//            <input type="email" name="email" placeholder="Email" onChange={handleInputChange} /><br/>
//           <input type="text" name="mobile" placeholder="Mobile" onChange={handleInputChange} /><br/>
//            <input type="password" name="password" placeholder="Password" onChange={handleInputChange} /><br/>
//             <button onClick={handleSignup}>Signup</button>
//         </div>