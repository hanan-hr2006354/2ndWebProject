import React from 'react';
import statics from '@/repo/statistics';
import Prices from '@/app/pages/getItemPriceRangeWithDetails/prices';

export default async function Page() {
  const items = await statics.getItemPriceRangeWithDetails(); // Call the function to fetch items
  return (
    <div>
      <Prices initialPrice={items} />
    </div>
  );
}
