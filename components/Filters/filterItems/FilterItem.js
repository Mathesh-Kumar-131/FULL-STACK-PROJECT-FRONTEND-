import React from 'react';
import '../filterItems/FilterItem.css';
import Popup from 'reactjs-popup';
import PopElement from '../filterItems/filtertab/PopElement';


const FilterItem = ({filter}) => {
  return (
    <div className='filter-item'>
      <Popup trigger={<button className='filter-btn'>{filter.title}</button>} modal nested lockScroll >
        {
          close => (
            <div className='modal'>
              <div className='modal-page'>
                <div className='pop-nav'>
                  <h2>Make Your Filter</h2>
                  <button onClick={() => close()} className='pop-btn' >
                  <i className="fa-solid fa-circle-xmark"></i>
                  </button>
                </div>
                <PopElement />
              </div>
            </div>
          )
        }
      </Popup>
    </div>
  )
}

export default FilterItem;