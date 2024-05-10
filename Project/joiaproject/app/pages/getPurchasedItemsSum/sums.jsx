
'use client'
import React from 'react';
import Sum from './sum';
import { useState } from 'react';

import styles from "@/app/page.module.css"
export default function Sums({ initialSums }) {
  const [sums, setSums] = useState(initialSums);
  return (
    <div>
    <h1 className={styles.title}>Total Purchases per Item</h1>

    <table className={styles.table}>
      <thead>
        <tr>
          <th>Id</th>
          <th>Name</th>
          <th>Price</th>
          <th>Image</th>
          <th>Total Quantity</th>
        </tr>
      </thead>
      <tbody>
  {Array.isArray(sums) && sums.map((sum) => (
    <Sum key={sum.item.id} sum={sum} />
  ))}
</tbody>
    </table>
  </div>
  );
}