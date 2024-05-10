import React from 'react';
import styles from '@/app/page.module.css';
import Link from 'next/link';


export default function Location({ location }) {
  return (
    <tr>
        <td>{location.location}</td>
        <td>{location._count.id}</td>
    </tr>
  );
}