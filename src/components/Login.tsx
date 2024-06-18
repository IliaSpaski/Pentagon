import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './Login.css';
import FBI from '../assets/FBI.jpg'

const Login: React.FC = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (event: React.FormEvent) => {
        event.preventDefault();
        try {
            const response = await axios.post('http://localhost:5000/login', { username, password });
            localStorage.setItem('token', response.data.message);
            navigate('/');
        } catch (error) {
            console.error('Login failed', error);
        }
    };

    return (

        <form onSubmit={handleSubmit}>
            <div>
                <div className="fbi-form">
                    <img src={FBI} alt="FBI Logo" className="fbi-logo"></img>
                    <h1>Authorization Required</h1>
                    <div>
                        <input className="fbi-input" name="username" placeholder="Username" type="text" value={username} onChange={(e) => setUsername(e.target.value)} required />
                    </div>
                    <div>
                        <input className="fbi-input" name="password" placeholder="Password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
                    </div>
                    <button type="submit" className="fbi-button">Authorize</button>
                    <p className="fbi-disclaimer">This system is for authorized users only. Unauthorized access is prohibited and
                        subject to prosecution to the full extent of the law.</p>
                    <p className="">Don't have an account? <a className="fbi-a-button" href="register">Register here</a>.</p>
                </div>
            </div>
        </form>
    );
};

export default Login;
