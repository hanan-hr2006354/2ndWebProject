
'use client'
import React from 'react';
import Item from './item';
import { useState } from 'react';

import styles from "@/app/page.module.css"
export default function Items({ initialItems }) {
  const [items, setItems] = useState(initialItems);
  return (
    <div>
    <h1 className={styles.title}>Unpurchased Items</h1>
    <table className={styles.table}>
      <thead>
        <tr>
          <th>Item Id</th>
          <th>Image</th>
          <th>Name</th>
          <th>Price</th>
          <th>Quantity Available</th>
        </tr>
      </thead>
      <tbody>
        {items.map((item) => (
          <Item key={item.id} item={item} />
        ))}
      </tbody>
    </table>
  </div>
  );
}