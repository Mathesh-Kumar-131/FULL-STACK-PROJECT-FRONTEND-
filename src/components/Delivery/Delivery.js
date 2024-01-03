import React from 'react';
import '../Delivery/DeliveryStyles.css';
import Filter from '../Filters/Filter';
import DeliveryCollections from './DeliveryCollection/DeliveryCollections';
import ExploreSection from '../exploreSection/ExploreSection';

export const DeliveryFilters = [
  {
    id: 1,
    title: "Filters"
  },
];

const Delivery = () => {
  return (
    <div>
      <div className='max-width'>
        <Filter filterList={DeliveryFilters}/>
      </div>
      <DeliveryCollections />
      <ExploreSection  />
    </div>
  )
}

export default Delivery;