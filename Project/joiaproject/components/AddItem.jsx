import React, { useState } from 'react';
import styles from '../styles/AddItem.module.css'; // Assume CSS module for styles

const AddItem = () => {
    const [itemName, setItemName] = useState('');
    const [price, setPrice] = useState('');

    const handleAddItem = async (event) => {
        event.preventDefault();
        try {
            const response = await fetch('/api/items/add', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ name: itemName, price: price }),
            });

            if (!response.ok) {
                throw new Error(`Error: ${response.statusText}`);
            }

            alert('Item added successfully!');
            setItemName('');
            setPrice('');
        } catch (error) {
            console.error('Error adding item:', error);
            alert('Failed to add the item. Please try again.');
        }
    };

    return (
        <div className={styles.addItemContainer}>
            <form onSubmit={handleAddItem}>
                <input
                    type="text"
                    placeholder="Item Name"
                    value={itemName}
                    onChange={(e) => setItemName(e.target.value)}
                />
                <input
                    type="number"
                    placeholder="Price"
                    value={price}
                    onChange={(e) => setPrice(e.target.value)}
                />
                <button type="submit">Add Item</button>
            </form>
        </div>
    );
};

export default AddItem;
