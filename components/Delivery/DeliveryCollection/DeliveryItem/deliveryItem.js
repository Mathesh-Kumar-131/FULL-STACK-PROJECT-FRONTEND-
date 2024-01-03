import React from 'react';
import '../DeliveryItem/deliveryItemStyles.css';

const DeliveryItem = ({item, id}) => {
  return (
    <div>
        <div className='delivery-item-cover' key={id}> 
            <img src={item.cover} className='delivery-item-image'
                alt={item.title}
            />
        </div>
        <div className='delivery-item-title'>
            {item.title}
        </div>
    </div>
  )
}

export default DeliveryItem