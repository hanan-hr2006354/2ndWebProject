import React from 'react';
import styles from '@/app/page.module.css';
import Link from 'next/link';

export default function Detail({ detail }) {
  return (
    <tr>
      <td>{detail.id}</td>
      <td>{detail.username}</td>
      <td>{detail.totalPurchaseQuantity}</td>
      <td>{detail.totalPrice}</td>
    </tr>
  );
}
