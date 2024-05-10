import React from 'react';
import styles from '@/app/page.module.css';
import Link from 'next/link';


export default function Price({ price }) {
    return (<>  <tr>
    <th colspan="4">Min Price Item</th>
    </tr>
      <tr>
        <td>{price.minPriceItem.id}</td>
        <td>{price.minPriceItem.name}</td>
        <td>${price.minPriceItem.price}</td>
        <td>
        <td><img src={`/images/${price.minPriceItem.image}`} alt={price.minPriceItem.image} style={{ width: '500px' }} /></td>
        </td>
      </tr>
      <tr>
    <th colspan="4">Max Price Item</th>
    </tr>
      <tr>
      <td>{price.maxPriceItem.id}</td>
        <td>{price.maxPriceItem.name}</td>
        <td>${price.maxPriceItem.price}</td>
        <td>
        <td><img src={`/images/${price.maxPriceItem.image}`} alt={price.maxPriceItem.image} style={{ width: '500px' }} /></td>
        </td>
      </tr>
      </>
    );
  
}