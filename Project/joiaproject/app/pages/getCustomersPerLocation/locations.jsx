
'use client'
import React from 'react';
import Location from './location';
import { useState } from 'react';

import styles from "@/app/location.module.css"
export default function Items({ initialLocation }) {
  const [locations, setLocations] = useState(initialLocation);
  return (
    <div>
    <h1 className={styles.title}>Customers Per Location</h1>
    <table className={styles.table}>
      <thead>
        <tr>
          <th>Location</th>
          <th>Number Of Customers/Buyers</th>
        </tr>
      </thead>
      <tbody>
        {locations.map((l) => (
          <Location location={l} />
        ))}
      </tbody>
    </table>
  </div>
  );
}