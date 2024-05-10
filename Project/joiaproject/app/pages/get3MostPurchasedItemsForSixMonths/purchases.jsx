
'use client'
import React from 'react';
import Purchase from './purchase';
import { useState } from 'react';

import styles from "@/app/location.module.css"
export default function Purchases({ initialPurchase }) {
  const [purchases, setpurchases] = useState(initialPurchase);
  return (
    <div>
    <h1 className={styles.title}>Most 3 Purchases Past 6 Months</h1>

    <table className={styles.table}>
      <thead>
        <tr>
          <th>Id</th>
          <th>Name</th>
          <th>Price</th>
          <th>Image</th>
          <th>Quantity</th>
          <th>Total Purchases</th>
        </tr>
      </thead>
      <tbody>
        {purchases.map((p) => (
          <Purchase purchase={p} />
        ))}
      </tbody>
    </table>
  </div>
  );
}