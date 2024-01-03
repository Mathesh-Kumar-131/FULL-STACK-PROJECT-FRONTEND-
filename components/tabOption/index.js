import React from 'react';
import '../tabOption/tabOptionStyles.css';
import '../Styles/commonClass.css';

const tabs=[
  {
    id:1,
    name: "Delivery",
  
  },
  
]

const TabOption = ({activeTab, setActiveTab}) => {
  return (
    <div className="tab-options">
      <div className="max-width options-wrapper">
        {tabs.map((tab)=>{
          return (
            <div 
            key={tab.id}
            onClick={()=> setActiveTab(tab.name)}
            className={`tab-item absolute-center cur-po ${
              activeTab === tab.name && "active-tab"
              }`}
            >


            <div className='tab-name' >{tab.name}</div>
          </div>
          )
        })}
      </div>
    </div>

  );
}

export default TabOption;