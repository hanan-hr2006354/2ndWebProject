import React from 'react';
import styles from '../styles/SellerDesc.module.css'; // Assume CSS module for styles

const SellerDesc = ({ sellerInfo }) => {
    return (
        <div className={styles.sellerDescContainer}>
            <h1>About the Seller</h1>
            <p>Name: {sellerInfo.name}</p>
            <p>Description: {sellerInfo.description}</p>
            {/* Additional seller info can be displayed here */}
        </div>
    );
};

export default SellerDesc;
