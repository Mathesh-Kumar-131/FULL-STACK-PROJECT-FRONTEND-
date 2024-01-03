import React, { useState } from 'react'
import Navbar from '../components/header/Navbar';
import TabOption from '../components/tabOption';
import Delivery from '../components/Delivery/Delivery';

const Menu = () => {
  const [activeTab, setActiveTab] = useState("Delivery");

  return (
    <div>
      <Navbar />
      <TabOption  activeTab={activeTab}  setActiveTab={setActiveTab}/>
      {getCorrectScreen(activeTab)}
    </div>
  )
};

const getCorrectScreen = (tab) =>{
  switch(tab){
    case "Delivery":
      return <Delivery />
    default:
      return <Delivery />
  }
};

export default Menu;