import React from 'react';
import styles from '@/app/page.module.css';
import Link from 'next/link';


export default function Category({ category }) {
  let categoryName = '';

  if (category.categoryId===21) {
    categoryName = 'Necklaces';
  } else if (category.categoryId === 22) {
    categoryName = 'Bracelets';
  }   else if (category.categoryId === 23) {
    categoryName = 'Earrings';
  }   else if (category.categoryId === 24) {
    categoryName = 'Rings';
  }
  return (
    <tr>
        <td>{categoryName}</td>
        <td>{category._count}</td>
    </tr>
  );
}