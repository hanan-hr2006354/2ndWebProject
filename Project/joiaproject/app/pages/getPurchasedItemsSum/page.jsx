import React from 'react';
import statics from '@/repo/statistics';
import Sums from '@/app/pages/getPurchasedItemsSum/sums';
import item from '@/repo/ItemRepo';

export default async function Page() {
  const items = await item.getItem();
  const all = [];
  let totalQuantity = 0;

  for (const i of items) {
    const s = await statics.getPurchasedItemsSum(i.id);
    all.push({ item: i, quantity: s });
    totalQuantity += s;
  }

  const output = {
    items: all.reduce((acc, curr) => {
      acc[curr.item.id] = curr.item;
      return acc;
    }, {}),
    totalQuantity: totalQuantity
  };

  return (
    <div>
      <Sums initialSums={output} />
    </div>
  );
}
