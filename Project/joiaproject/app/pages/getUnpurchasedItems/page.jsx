import React from 'react'
import statics from "@/repo/statistics"


export  default async function page() {
    const items= await statics.getUnpurchasedItems;
  return (
        <div>
            <h1>Unpurchased Items</h1>
            <table>
                <thead>
                    <tr>
                        <th>Image</th>
                        <th>Name</th>
                        <th>Price</th>
                        <th>Quantity Available</th>
                    </tr>
                </thead>
                <tbody>
                    {items.map((item) => (
                        <tr key={item.id}>
                            <td><img src={item.image} alt={item.name} style={{ width: '100px' }} /></td>
                            <td>{item.name}</td>
                            <td>${item.price}</td>
                            <td>{item.quantity}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}
