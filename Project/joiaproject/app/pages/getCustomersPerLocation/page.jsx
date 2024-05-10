import React from 'react';
import statics from '@/repo/statistics';
import Locations from '@/app/pages/getCustomersPerLocation/locations';

export default async function Page() {
  const items = await statics.getCustomersPerLocation(); // Call the function to fetch items
  return (
    <div>
      <Locations initialLocation={items} />
    </div>
  );
}
