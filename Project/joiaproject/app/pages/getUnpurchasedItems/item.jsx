import React from 'react';
import styles from '@/app/page.module.css';
import Link from 'next/link';


export default function Item({ item }) {
  return (
    <tr key={item.id}>

                            <td>{item.id}</td>
                            <td><img src={`/images/${item.image}`} alt={item.name} style={{ width: '100px' }} /></td>
                            <td>{item.name}</td>
                            <td>${item.price}</td>
                            <td>{item.quantity}</td>
                        </tr>
  );
}