import React from 'react';
import statics from '@/repo/statistics';
import Purchases from '@/app/pages/get3MostPurchasedItems/purchases';

export default async function Page() {
  const p = await statics.get3MostPurchasedItems(); // Call the function to fetch items
  return (
    <div>
      <Purchases initialPurchase={p} />
    </div>
  );
}
