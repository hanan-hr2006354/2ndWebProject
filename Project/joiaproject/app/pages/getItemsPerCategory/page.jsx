import React from 'react';
import statics from '@/repo/statistics';
import Categories from '@/app/pages/getItemsPerCategory/categories';

export default async function Page() {
  const cat = await statics.getItemsPerCategory(); // Call the function to fetch items
  return (
    <div>
      <Categories initialCategory={cat} />
    </div>
  );
}
