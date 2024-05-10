import React from 'react';
import styles from '../styles/Category.module.css'; // Assume CSS module for styles

const Category = () => {
    // Categories would ideally come from API or static props in Next.js
    const categories = ['Necklaces', 'Bracelets', 'Rings', 'Earrings'];

    return (
        <div className={styles.categoryContainer}>
            <ul>
                {categories.map((category, index) => (
                    <li key={index}>{category}</li>
                ))}
            </ul>
        </div>
    );
};

export default Category;
