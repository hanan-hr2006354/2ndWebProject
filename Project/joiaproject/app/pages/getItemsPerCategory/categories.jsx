
'use client'
import React from 'react';
import Category from './category';
import { useState } from 'react';

import styles from "@/app/category.module.css"
export default function Items({ initialCategory }) {
  const [categories, setCategories] = useState(initialCategory);
  return (
    <div>
    <h1 className={styles.title}>No of Items Per Category</h1>
    <table className={styles.table}>
      <thead>
        <tr>
          <th>Category</th>
          <th>Number Of Items</th>
        </tr>
      </thead>
      <tbody>
        {categories.map((l) => (
          <Category category={l} />
        ))}
      </tbody>
    </table>
  </div>
  );
}