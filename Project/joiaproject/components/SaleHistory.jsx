import React from 'react';
import styles from '../styles/SaleHistory.module.css'; // Assume CSS module for styles

const SaleHistory = () => {
    const sales = [
        { id: 1, product: 'Platinum Ring', quantity: 1, price: 1200 },
        { id: 2, product: 'Diamond Earrings', quantity: 1, price: 3000 }
    ];

    return (
        <div className={styles.saleHistoryContainer}>
            <h1>Sale History</h1>
            {sales.map((sale) => (
                <div key={sale.id}>
                    <p>Product: {sale.product}</p>
                    <p>Quantity: {sale.quantity}</p>
                    <p>Price: ${sale.price}</p>
                </div>
            ))}
        </div>
    );
};

export default SaleHistory;
