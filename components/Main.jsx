import React from 'react';
import '../components/MainStyles.css';
import { Link } from 'react-router-dom';

const Main = (props) => {
  return (
    <div className="container-img">
        <img src={props.MainImg} alt="Mainimg"/>
         <div className="Main-text">
            <h1>{props.title}</h1> 
            <p>{props.text}</p>
            
         </div>
    </div>
  )
}

export default Main;