import React from 'react'
import { Inter } from 'next/font/google'
const inter = Inter({ subsets: ['latin'] })
import styles from "@/app/page.module.css"
export default function Page() {
  return (
    <div className={styles.container}>
      <h1 className={styles.text}>Joia Company's Statics & Data Analysis</h1>
      <div>
        {/* Add buttons with corresponding class name */}
        <button className={styles.button}>Number of Customers Per Location</button>
        <button className={styles.button}>3 Most Purchased Items</button>
        <button className={styles.button}>3 Most Purchased Items For Last Six Months</button>
        <button className={styles.button}>Purchased Items Sum</button>
        <button className={styles.button}>Unpurchased Items</button>
      </div>
    </div>
  );
}