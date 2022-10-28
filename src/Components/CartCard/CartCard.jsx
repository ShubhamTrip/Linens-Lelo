import React,{useState,useEffect} from 'react';
import './CartCard.css';
export default function CartCard(props){
    
    let [quantity,setquantity]=useState(1);
    
    function dec(){
        if(quantity >1){
            setquantity(quantity-1)
            props.settot(props.total - (props.price))
        }
    }
    function inc(){
         setquantity(quantity+1)
         props.settot(props.total+(props.price*quantity))
    }
    return(
        <div className="cart-items">
                  <div className="cart-items-image"><img src={props.image} alt="card"/></div>
                  <div className="cart-items-text">
                       <div className="cart-items-text-head">
                        <h1>{props.title}</h1>
                        <p id="description">{props.description.slice(0,100)}...</p>
                        <p id="price">$ {props.price}</p>
                        <p id='quantity'>Quantity: {quantity}</p>
                       </div>
                      <div className="quantity-buttons"><button id="inc" onClick={()=>inc()}>+</button><button id="dec" onClick={()=>dec()}>-</button></div>
                  </div>
        </div>
    );
}