import React, { useState } from 'react';
import styles from '../styles/Search.module.css'; // Assume CSS module for styles

const Search = () => {
    const [searchTerm, setSearchTerm] = useState('');

    const handleSearch = async (event) => {
        event.preventDefault();
        try {
            const response = await fetch(`/api/search?query=${searchTerm}`);
            if (!response.ok) {
                throw new Error(`Error: ${response.statusText}`);
            }
            const results = await response.json();
            console.log(results); // Handle the display of search results as needed
        } catch (error) {
            console.error('Error during search:', error);
            alert('Search failed. Please try again.');
        }
    };

    return (
        <div className={styles.searchContainer}>
            <form onSubmit={handleSearch}>
                <input
                    type="text"
                    placeholder="Search for items..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
                <button type="submit">Search</button>
            </form>
        </div>
    );
};

export default Search;
