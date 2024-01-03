import React from "react";
import { useSelector, useDispatch } from "react-redux";
import Navbar from "../components/header/Navbar";
import { useNavigate } from "react-router-dom";
import { clearCart } from "../components/redux/ShoppingCart";
import { toast } from "react-hot-toast";

const orderComponent = {
  width: "90%",
  height: "60vh",
  overflow: "scroll",
};

const paymentComponent = {
  width: "45%",
  height: "90vh",
  overflow: "scroll",
};

const Orders = () => {
  const { cart } = useSelector((item) => item.user);
  const { amount } = useSelector((carts) => carts.user);

  const navigate = useNavigate();
  const handleBack = () => {
    navigate("/cart");
  };

  const dispatch = useDispatch();

  const handleClear = () => {
    dispatch(clearCart());
  };

  const handleCheck = () =>{
    if(cart.length === 0){
      toast.error('Select Atleast One Item!')
    }else{
      navigate('/confirm');
    }
  }

  const handleCheckCancel = () =>{
    if(cart.length === 0){
      toast.error('You do not have Sufficient Item!')
    }else{
      navigate('/menu');
      dispatch(clearCart());
    }
  }
  return (
    <>
      <Navbar />
      <div className="main-div">
        <div className="order-cart-container">
          <div className="collected-material">
            <i className="fa-solid fa-arrow-left" onClick={handleBack}></i>
            <h2 className="text">Selected Item</h2>
            <button className="total-btn1" onClick={handleClear}>
              Clear
            </button>
          </div>
          <div className="collected-item" style={orderComponent}>
            {cart.length === 0 ? (
              <div>
                <h1 className="text">No Item in cart!</h1>
              </div>
            ) : (
              cart?.map((orders) => (
                <div key={orders.id} className="div-scroll">
                  <ul className="order-ul">
                    <li className="order-li">
                      <div className="item-in-order">
                        <img
                          src={orders.image}
                          alt={orders.name}
                          className="order-image"
                        />
                        <h3>{orders.name}</h3>
                        <h3>{orders.price + "₹"}</h3>
                        <h3>
                          {"Total: " + orders.price * orders.quantity + "₹"}
                        </h3>
                      </div>
                    </li>
                  </ul>
                </div>
              ))
            )}
          </div>
        </div>
        <div className="payment-container" style={paymentComponent}>
            <h2 className="text-t">Total</h2>
            <div className="total-container">
              <div className="divv">
                <h2 className="totl">SubTotal:- {amount+"₹"}</h2>
              </div>
              <br/>
                <div className="mid-h1">
                  <h2 className="totl">Tax:- {amount*2/100+"₹"}</h2>
                </div>
                <div className="divv">
                <h2 className="totl">Grand Total:- {amount+(amount*2/100)+"₹"}</h2>
                </div>
            </div>
            <div className="payment">
                <h2 className="text-h2">Payment Method</h2>
                <input type="radio" className="radio-btn" value="1" name="2"/><label className="label">Cash On delivery</label>
                <input type="radio" className="radio-btn" value="1" name="2"/><label className="label">Debit Card</label>
                <input type="radio" className="radio-btn" value="1" name="2"/><label className="label">UPI Payment</label>
            </div>
            <div className="payment">
                <h2 className="text">Delivery Adress</h2>
                <input type="text" className="input-btn" placeholder="Enter Address..."/>
                <input type="submit" className="btn-1"/>
                
            </div>
              
              <div className="button-container">
                <button className="btn-order" onClick={handleCheck}>Complete Order</button>
                <button className="btn-order1" onClick={handleCheckCancel}>Cancel Process</button>
              </div>
        </div>
      </div>
    </>
  );
};

export default Orders;
