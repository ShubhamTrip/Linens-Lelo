import React,{useState,useEffect} from "react";
import "./Cart.css";
import CartCard from "../../Components/CartCard/CartCard";

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
         return <><CartCard title={data.title} description={data.description} price={data.price} image={data.image}/>
          <hr/>
         </>
         })
         }
        </div>
    </div> 
    );
}