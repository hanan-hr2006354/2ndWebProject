import React from 'react';
import styles from '@/app/page.module.css';
import Link from 'next/link';


export default function Purchase({ sum }) {
  return (
    < tr key={sum.item.id}>
        <td>{sum.item.id}</td>
        <td>{sum.item.name}</td>
        <td>{sum.item.price}</td>
        <td><img src={`/images/${sum.item.image}`} alt={sum.item.image} style={{ width: '100px' }} /></td>

        <td>{sum.quantity}</td>

    </tr>
  );
}

