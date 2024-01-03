import React from 'react';
import Navbar from '../components/header/Navbar';
import Main from '../components/Main';
import Footer from '../components/footer/Footer';


const Home = () => {
  return (
    <>
      <Navbar/>
      <Main 
        MainImg="https://static.vecteezy.com/system/resources/previews/007/550/780/original/food-delivery-app-on-a-smartphone-tracking-a-delivery-man-on-a-moped-with-a-ready-meal-technology-and-logistics-concept-city-skyline-in-the-background-vector.jpg"
       
        url="/item"
        btnclass="show"         
      />
      <Footer />
    </>
  )
};


export default Home;
