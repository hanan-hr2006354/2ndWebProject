
'use client'
import React from 'react';
import Detail from './detail';
import { useState } from 'react';

import styles from "@/app/details.module.css"
export default function Details({ initialDetails }) {
  const [details, setDetails] = useState(initialDetails);
  return (
    <div>
    <h1 className={styles.title}>Customers Details</h1>
    <table className={styles.table}>
      <thead>
        <tr>
          <th>Customer ID</th>
          <th>Username</th>
          <th>Total Quantity's Purchased</th>
          <th>Total Price Spent</th>

        </tr>
      </thead>
      <tbody>
        {details.map((l) => (
          <Detail detail={l} />
        ))}
      </tbody>
    </table>
  </div>
  );
}