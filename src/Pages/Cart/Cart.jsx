import React,{useState,useEffect} from "react";
import "./Cart.css";

export default function Cart({cart,set}){
    let [products,setproducts]=useState([]);
    useEffect(()=>{
        console.log(cart);
        setproducts(cart);
    },[]);

    return(
     <div className="main">
        <div className="cart-list">
        {
        products.map((data)=>{
         return <div className="cart-items">
                  <div className="cart-items-image"><img src={data.image} alt="card"/></div>
                  <div className="cart-items-text">
                    <div className="cart-items-text-head">
                        <h1>{data.title}</h1>
                        <p id="description">{data.description.slice(0,100)}...</p>
                        <p id="price">{data.price}</p>
                  </div>
                  <div className="quantity-buttons"><button id="inc">+</button><button id="dec">-</button></div>
                  </div>
                </div>
         })
         }
        </div>
    </div> 
    );
}