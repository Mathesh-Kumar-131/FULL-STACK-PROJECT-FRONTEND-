import React from 'react';
import '../DeliveryCollection/DeliveryCollectionsStyles.css';
import NextArrow from '../../Carousal/nextArrow';
import PrevArrow from '../../Carousal/prevArrow';
import Slider from 'react-slick';
import DeliveryItem from './DeliveryItem/deliveryItem';

const deliveryItem = [
    {
        id: 1,
        title: "Italian Food",
        cover: "https://i.ndtvimg.com/i/2017-09/margherita-pizza_600x300_51506418004.jpg"
    },
    {
        id: 2,
        title: "Indian Food",
        cover: "https://wallpaperaccess.com/full/2069188.jpg"
    },
    {
        id: 3,
        title: "South Indian Food",
        cover: "https://www.chefspencil.com/wp-content/uploads/Dosa-1.jpg.webp"
    },
    {
        id: 4,
        title: "Rajasthani Food", 
        cover: "https://wp.scoopwhoop.com/wp-content/uploads/2014/09/5677315b6e510a6f3a759a81_1.jpg"
    },
    {
        id: 5,
        title:  "American Food",
        cover: "https://i.ndtvimg.com/i/2015-07/burger-625_625x350_51435922877.jpg"
    },
    {
        id: 6,
        title: "Chinese Food",
        cover: "https://www.hotelmousai.com/blog/wp-content/uploads/2021/12/Chow-Mein.jpg"
    },
    {
        id: 7,
        title:  "Indian Food",
        cover: "https://cdn.tasteatlas.com//Images/Dishes/f77866f0f5474fc0b41d316f885edcc3.jpg?w=905&h=510"
    },
    {
        id: 8,
        title: "Rajasthani Food",
        cover: "https://wp.scoopwhoop.com/wp-content/uploads/2014/09/5677315b6e510a6f3a759a81_14.jpg"
    },
    {
        id: 9,
        title: "Chinese Food",
        cover: "https://www.myplantifulcooking.com/wp-content/uploads/2022/01/cabbage-manchurian-featured.jpg"
    },
    {
        id: 10,
        title:  "American Food",
        cover: "https://i.ndtvimg.com/i/2015-07/pancakes-625_625x350_71435918903.jpg"
    },
]

const settings = {
    infinite: false,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
};


const DeliveryCollections = () => {
  return (
    <div className='delivery-collection'>
         <div className='max-width'>
            <div className='collection-title'>
                <h2>Eat What Makes You Happy</h2>
                <br></br>
                <Slider {...settings}>
                    {
                        deliveryItem.map((item)=>{
                            return <DeliveryItem  item={item} key={item.id}/>
                        })
                    }
                </Slider>
            </div>
         </div>
    </div>
  )
};

export default DeliveryCollections;