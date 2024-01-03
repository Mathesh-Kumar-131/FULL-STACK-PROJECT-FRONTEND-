import React, { useState } from "react";
import './Login.css';
import back from './back.jpg';

export const Login = (props) => {
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(email);
    }

    function handleClick() {
        window.location.href = '/Register';
    }

    const containerStyle = {
        backgroundImage: `url(${back})`, // Set the background image
        backgroundSize: 'cover', // You can adjust the background properties based on your design needs
      
        height: '10vh', // Set the height as needed
        display: 'cover',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
    };

    return (
        <div className="auth-form-container" style={containerStyle}>
            <h2>Login</h2>
          
            <form className="login-form11" onSubmit={handleSubmit}>
                <label htmlFor="email">Email</label>
                <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="Email" id="email" name="email" />
                <label htmlFor="password">Password</label>
                <input value={pass} onChange={(e) => setPass(e.target.value)} type="password" placeholder="Password" id="password" name="password" /><br></br>
                <button type="submit">Log In</button><br></br>
            </form>
            <button className="link-btn" onClick={handleClick}>Don't have an account? Register here.</button>
        </div>
    )
}
