import React,{useState,useEffect} from "react";
import "./Cart.css";
import CartCard from "../../Components/CartCard/CartCard";
import { Scrollbars } from 'react-custom-scrollbars-2';
export default function Cart({cart,set}){
    let [products,setproducts]=useState([]);
    let [total,settotal]= useState(0);
    useEffect(()=>{
        setproducts(cart);
    },[cart]);

    useEffect(()=>{
        let sum = products.reduce((partialSum, pro) => partialSum + pro.price, 0)
        settotal(sum);
    },[products])

    function del(id){
        set(products.filter((e)=>e.id!==id))
    }

    return(
     <div className="main">
        
        
        <div className="cart-list">
        <Scrollbars>
        { 
        products.map((data)=>{  
         return <><CartCard title={data.title} description={data.description} price={data.price}
          image={data.image} total={total} settot={settotal} but={<button onClick={()=>del(data.id)}>Delete</button>}/>
          <hr/>
         </>
         })
         }
         </Scrollbars>
        </div>
        
        
        <div className="order-summary">
            <h1>Order Summary</h1>
            <div>
                <p>Total Amount :</p>
                <p>${total.toFixed(2)}</p>
            </div>
            <button>Make Payment</button>
        </div>
    </div> 
    );
}