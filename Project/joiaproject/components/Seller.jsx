import React from 'react';
import styles from '../styles/Seller.module.css'; // Assume CSS module for styles

const Seller = ({ name, description }) => {
    // Assuming the seller has more properties that could be displayed
    return (
        <div className={styles.sellerContainer}>
            <h1>Seller Profile</h1>
            <h2>{name}</h2>
            <p>{description}</p>
            {/* Perhaps include a list of products or more details */}
        </div>
    );
};

export default Seller;
