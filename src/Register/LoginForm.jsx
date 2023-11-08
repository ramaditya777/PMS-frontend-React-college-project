import React, { useState } from 'react';
import axios from 'axios';

const LoginForm = () => {
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
            })
            .catch(error => {
                console.error('Error logging in:', error);
                alert("user this name not present")
            });
    };

    return (
        <div>
            <input type="email" placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
            <input type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
            <button onClick={handleLogin}>Login</button>
        </div>
    );
};

export default LoginForm;
