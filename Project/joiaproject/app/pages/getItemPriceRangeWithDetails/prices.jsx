
'use client'
import React from 'react';
import Price from './price';
import { useState } from 'react';

import styles from "@/app/price.module.css"
export default function Items({ initialPrice }) {
  const [prices, setPrices] = useState(initialPrice);
  return (
    <div>
    <h1 className={styles.title}>Customers Per Location</h1>
    <table className={styles.table}>
      <thead>
        <tr>
        {/* <tr> */}
    {/* <th colspan="4">Min Price Item</th>
  </tr> */}
          <th>Item Id</th>
          <th>Name</th>
          <th>Price</th>
          <th>Image</th>

        </tr>
      </thead>
      <tbody>
          <Price price={prices} />
      </tbody>
    </table>
  </div>
  );
}