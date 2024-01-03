import React from "react";
import "../Cart/ParticularItemStyles.css";
import { useParams } from "react-router-dom";
import { restaurant } from "../Lists";
import Navbar from "../header/Navbar";
import { useDispatch } from "react-redux";
import { AddCart, AddWishlist } from "../redux/ShoppingCart";
import { toast } from "react-hot-toast";

const ParticularItem = () => {
  const { id } = useParams();
  const val = parseInt(id);

  const dispatch = useDispatch();

  const addToCart = (item) =>{
    dispatch(AddCart(item));
    toast.success('Item added in cart!');
  }
  const addToWish = (item) =>{
    dispatch(AddWishlist(item));
    toast.success('Item added in Wishlist!');
  }
  return (
    <div>
      <Navbar />
      {restaurant.map((item) => {
        return (
          <div key={item.id} className="main-container">
            {item.id === val ? (
              <>
                <div className="img-food-true">
                  <img className="img" src={item.image} alt={item.name} />
                  <div className="time-container">
                    {item.deliveryTime + " min"}
                  </div>
                </div>
                <div className="true-container">
                  <div className="detail-container">
                    <h1>{item.name}</h1>
                    <h4>{"Price: "+item.price+"₹"}</h4>
                    <div className="detail-container-1">
                      <h5>{item.foodType}</h5>
                      <div className="Rating-container">
                        {"Rating: " + item.rating + "+"}
                      </div>
                    </div>
                  </div>
                  <div className="main-btn-container">
                    <button
                      className="main-btn"
                      onClick={()=>addToCart(item)}>
                      <i className="fa-solid fa-cart-shopping"></i>
                      Add to Cart
                    </button>
                    <button 
                      className="main-btn"
                      onClick={()=>addToWish(item)}
                    ><i class="fa-regular fa-heart"></i>
                    Wishlist</button>
                  </div>
                </div>
              </>
            ) : (
              ""
            )}
          </div>
        );
      })}
    </div>
  );
};

export default ParticularItem;
