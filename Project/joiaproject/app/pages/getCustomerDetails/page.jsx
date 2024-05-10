import React from 'react';
import statics from '@/repo/statistics';
import Details from '@/app/pages/getCustomerDetails/details';

export default async function Page() {
  const items = await statics.getCustomerDetails(); // Call the function to fetch items
  return (
    <div>
      <Details initialDetails={items} />
    </div>
  );
}
