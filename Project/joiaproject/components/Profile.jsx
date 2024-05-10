import React, { useEffect, useState } from 'react';
import styles from '../styles/Profile.module.css'; // Assume CSS module for styles

const Profile = () => {
    const [user, setUser] = useState(null);

    useEffect(() => {
        const fetchUserProfile = async () => {
            const loggedInUser = JSON.parse(localStorage.getItem('loggedInUser'));
            if (!loggedInUser) {
                alert('Please log in to view your profile.');
                window.location.href = '/login'; // Use Next.js routing instead
                return;
            }

            try {
                const response = await fetch(`/api/users/${loggedInUser.id}`);
                if (!response.ok) {
                    throw new Error(`Error: ${response.statusText}`);
                }
                const userData = await response.json();
                setUser(userData);
            } catch (error) {
                console.error('Error fetching user profile:', error);
                alert('Failed to load user profile. Please try again.');
            }
        };

        fetchUserProfile();
    }, []);

    if (!user) {
        return <p>Loading...</p>;
    }

    return (
        <div className={styles.profileContainer}>
            <img src={`/images/${user.name}.jpg`} alt="Profile" />
            <p>Name: {user.name}</p>
            <p>Username: {user.username}</p>
            <p>Shipping Address: {user.shippingAddress}</p>
            <p>Balance: ${user.balance}</p>
        </div>
    );
};

export default Profile;
