import React from 'react';
import styles from '../styles/Purchase.module.css'; // Assume CSS module for styles

const Purchase = () => {
    // Mock data; replace with actual data fetching
    const purchases = [
        { id: 1, product: 'Gold Necklace', quantity: 2, price: 500 },
        { id: 2, product: 'Silver Bracelet', quantity: 1, price: 150 }
    ];

    return (
        <div className={styles.purchaseContainer}>
            <h1>Purchase History</h1>
            {purchases.map((purchase) => (
                <div key={purchase.id}>
                    <p>Product: {purchase.product}</p>
                    <p>Quantity: {purchase.quantity}</p>
                    <p>Price: ${purchase.price}</p>
                </div>
            ))}
        </div>
    );
};

export default Purchase;
