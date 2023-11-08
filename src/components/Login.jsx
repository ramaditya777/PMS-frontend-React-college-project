import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './Login.css';

     const LoginForm = () => {                                          // const LoginForm = ({History}) => { 
    const navigate = useNavigate();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = () => {
        axios.post('http://localhost:8069/api/users/login', null, {
            params: {
                email: email,
                password: password
            }
        })
            .then(response => {
                console.log('User logged in successfully:', response.data);
                alert("yes he is present")
                //                 navigate('/check');

            })
            .catch(error => {
                console.error('Error logging in:', error);
                //alert("user  name not present")
                 //history.push('/check');
                 navigate('/check');

            });
    };

    return (
        <>
        <div class="login-form">
        <div class="form-group">
            <label for="email">Email:</label>
            <input type="email" placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
        </div>
        <div class="form-group">
            <label for="pwd">Password:</label>
            <input type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
        </div>
        <div class="form-group">
        <button onClick={handleLogin}>Login</button>
        </div>
    </div>
        </>
    );
};

export default LoginForm;
