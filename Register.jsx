import React, { useState } from "react";
import './Login.css'; 
import back from './back.jpg';

export const Register = (props) => {
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const [name, setName] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(email);
    } 

    function handleClick() {
        window.location.href = '/LoginPage';
    }

    const containerStyle = {
        backgroundImage: `url(${back})`, // Set the background image
        backgroundSize: 'cover', // You can adjust the background properties based on your design needs
        
        height: '50vh', // Set the height as needed
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
    };

    return (
        <div className="auth-form-container" style={containerStyle}>
            <h2>Register</h2>
            <form className="register-form" onSubmit={handleSubmit}>
                <label htmlFor="name">Full Name</label>
                <input value={name} name="name" onChange={(e) => setName(e.target.value)} id="name" placeholder="Full Name" />
                <label htmlFor="email">Email</label>
                <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="Email" id="email" name="email" />
                <label htmlFor="password">Password</label>
                <input value={pass} onChange={(e) => setPass(e.target.value)} type="password" placeholder="Password" id="password" name="password" /><br></br>
                <button type="submit">Register</button><br></br>
            </form>
            <button className="link-btn" onClick={handleClick}>Already have an account? Login here.</button>
        </div>
    )
}
