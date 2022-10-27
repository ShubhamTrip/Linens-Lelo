import React,{useState,useEffect} from "react";
import "./Cart.css";
import CartCard from "../../Components/CartCard/CartCard";

export default function Cart({cart,set}){
    let [products,setproducts]=useState([]);
    let [total,settotal]= useState(0);
    useEffect(()=>{
        console.log(cart);
        setproducts(cart);
    },[]);

    useEffect(()=>{
        let sum = products.reduce((partialSum, pro) => partialSum + pro.price, 0)

        settotal(sum);
    },[products])

    return(
     <div className="main">
        <div className="cart-list">
        { 
        products.map((data)=>{  
         return <><CartCard title={data.title} description={data.description} price={data.price} image={data.image} />
          <hr/>
         </>
         })
         }
        </div>
        <div className="order-summary">
            <h1>Order Summary</h1>
            <div>
                <p>Total Amount :</p>
                <p>${total}</p>
            </div>
            <button>Make Payment</button>
        </div>
    </div> 
    );
}