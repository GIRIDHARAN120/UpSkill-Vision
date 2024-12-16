import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './HrAdmin.css';

// HR Admin Login Component
const HrAdminLogin = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [isAnimating, setIsAnimating] = useState(false);
    const navigate = useNavigate();

    const handleLogin = (e) => {
        e.preventDefault();
        setIsAnimating(true);

        setTimeout(() => {
            if (email === 'hradmin@example.com' && password === 'password123') {
                navigate('/hradmin-dashboard');
            } else {
                setError('Invalid email or password!');
                setIsAnimating(false);
            }
        }, 500);
    };

    return (
        <div className={`login-container ${isAnimating ? 'fade-out' : 'fade-in'}`}>
            <h1>HR Admin Login</h1>
            <form onSubmit={handleLogin}>
                <label>Email</label>
                <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    required
                />
                <label>Password</label>
                <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Enter your password"
                    required
                />
                {error && <p className="error">{error}</p>}
                <button type="submit">Login</button>
            </form>
        </div>
    );
};

// HR Admin Dashboard Component
const HrAdminDashboard = () => {
    const [isAnimating, setIsAnimating] = useState(true);

    return (
        <div className={`dashboard ${isAnimating ? 'fade-in' : ''}`}>
            <div className="sidebar">
                <div className="logo">LOGO</div>
                <nav>
                    <a href="#">HR Admin</a>
                    <a href="#">Training Process</a>
                    <a href="#">Reports</a>
                    <a href="#">Roles</a>
                    <a href="#">Permissions</a>
                    <a href="#">Logout</a>
                </nav>
            </div>
            <div className="main-content">
                <div className="header">
                    <div className="nav-links">
                        <a href="#">Home</a>
                        <a href="#">Career Help</a>
                        <a href="#">About Us</a>
                    </div>
                </div>
                <h2>Welcome Back Admin!</h2>
                <div className="cards">
                    <div className="card">
                        <h3>Manage Users</h3>
                        <button>View &rarr;</button>
                    </div>
                    <div className="card">
                        <h3>Monitor Training</h3>
                        <button>View &rarr;</button>
                    </div>
                    <div className="card">
                        <h3>Configure Permissions</h3>
                        <button>View &rarr;</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export { HrAdminLogin, HrAdminDashboard };
