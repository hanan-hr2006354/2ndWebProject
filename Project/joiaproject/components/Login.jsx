import React, { useState } from 'react';
import styles from '../styles/Login.module.css'; // Assume CSS module for styles

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = async (event) => {
        event.preventDefault();
        try {
            const response = await fetch('/api/auth/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ username, password }),
            });

            if (!response.ok) {
                throw new Error(`Error: ${response.statusText}`);
            }

            const result = await response.json();
            localStorage.setItem('loggedInUser', JSON.stringify(result.user));
            window.location.href = '/profile'; // Use Next.js routing instead
        } catch (error) {
            console.error('Error logging in:', error);
            alert('Invalid username or password. Please try again.');
        }
    };

    return (
        <div className={styles.loginContainer}>
            <form onSubmit={handleLogin}>
                <input
                    type="text"
                    placeholder="Username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />
                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <button type="submit">Login</button>
            </form>
        </div>
    );
};

export default Login;
