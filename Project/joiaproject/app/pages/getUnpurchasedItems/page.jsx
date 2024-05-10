import React from 'react';
import statics from '@/repo/statistics';
import Items from '@/app/pages/getUnpurchasedItems/items';

export default async function Page() {
  const items = await statics.getUnpurchasedItems(); // Call the function to fetch items
  return (
    <div>
      <Items initialItems={items} />
    </div>
  );
}
