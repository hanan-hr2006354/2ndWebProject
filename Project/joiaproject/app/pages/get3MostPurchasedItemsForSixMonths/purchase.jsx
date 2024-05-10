import React from 'react';
import styles from '@/app/page.module.css';
import Link from 'next/link';


export default function Purchase({ purchase }) {
  return (
    < tr key={purchase.id}>

    <td>{purchase.id}</td>
    <td>{purchase.name}</td>
    <td>{purchase.price}</td>
    <td><img src={`/images/${purchase.image}`} alt={purchase.name} style={{ width: '100px' }} /></td>
    <td>{purchase.quantity}</td>
    <td>{purchase.purchases.length}</td>

</tr>
  );
}