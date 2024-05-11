'use client'
import React, { useState } from 'react';
import { useRouter } from 'next/navigation'; // Import useRouter hook


export default function Page() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter(); // Initialize useRouter


  const handleSubmit = async (event) => {
    event.preventDefault();

    const response=await fetch('/api/users');
    const users=await response.json();
    const user=users.find(user => user.username===username&&user.password===password);

    if (user) {
        router.push('/pages/joia/customer');

    } else {
      console.log('User not found');
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="username">Username:</label>
        <input
          type="text"
          id="username"
          name="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />

        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          name="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <input type="submit" value="Login" className="button" />
      </form>
    </div>
  );
}
