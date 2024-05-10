import React from 'react';
import statics from '@/repo/statistics';
import Sums from '@/app/pages/get3MostPurchasedItems/sums';
import item from '@/repo/ItemRepo';

export default async function Page() {
  const items=await item.getItem()
  const all=[];
  const part=[]
  for(const i of items){
    const s = await statics.getPurchasedItemsSum(i.id); // Call the function to fetch items
    part=[i,s]
    all.push(part)
  }
  return (
    <div>
      <Sums initialSums={all} />
    </div>
  );
}
