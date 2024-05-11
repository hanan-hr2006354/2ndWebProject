import React from 'react';
// import styles from '@/app/page.module.css';
import Link from 'next/link';


export default function Purchase({ purchase }) {
  return (
    <> <div class="item" id={purchase.id}>
          <div class="card">
            {/* <img src={purchase.image} alt="${item.category}" width="250" height="300"/> */}
            <p>Item ID: {purchase.itemId}</p>
            {/* <div class="price">Total Price: $${purchase.price}</div> */}
            <div class="quantity">Quantity: {purchase.quantity}</div>
            <div class="quantity">Date: {purchase.date}</div>

          </div>
        </div></>

  );
}