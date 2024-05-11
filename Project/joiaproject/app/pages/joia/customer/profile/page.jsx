'use client'
import React, { useEffect, useState } from 'react';
import Purchase from "./purchase"
export default function ProfilePage() {
  const [currentUser, setCurrentUser] = useState(null);
  const [userPurchases, setUserPurchases] = useState([]);

  const getCurrentUsername = () => {
    return 'current_username';
  };

  const fetchUserPurchases = async (userId) => {
    try {
      const response = await fetch(`/api/users/${userId}/purchase`);
      const data = await response.json();
      setUserPurchases(data);
    } catch (error) {
      console.error('Error fetching user purchases:', error);
    }
  };

  useEffect(() => {
    const username = getCurrentUsername();
    fetch(`/api/users?username=${username}`)
      .then((response) => response.json())
      .then((users) => {
        const user = users[0];
        if (user) {
          setCurrentUser(user);
          fetchUserPurchases(user.id);
        } else {
          console.error('User not found');
        }
      })
      .catch((error) => console.error('Error fetching user:', error));
  }, []);

  return (
    <div>
      <header className="profileInfo">
        <h2 className="info">Account Information:</h2>
        <div className="profileDetails" id="profileDetails">
          {/* Display user details */}
          {currentUser && (
            <>
              <p>Username: {currentUser.username}</p>
              {/* Display other user details */}
            </>
          )}
        </div>
      </header>
      <main>
        <h2 className="AllPurchased">All Purchased Items</h2>
        <div className="category" id="category">
          {/* Display user purchases */}
          {userPurchases.map((purchase) => 
             (<Purchase purchase={purchase} />
          ))}
        </div>
      </main>
    </div>
  );
}
