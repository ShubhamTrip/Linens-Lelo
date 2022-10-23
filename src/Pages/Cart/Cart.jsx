import React,{useState,useEffect} from "react";


export default function Cart({cart}){
    let [products,setproducts]=useState([]);
    useEffect(()=>{
        console.log(cart);
        setproducts(cart);
    },[]);

    return(
     <div>
        hello
        {
         products.map((data)=>{
          return  <div><img src={data.image} alt="" /></div>
        })
    } </div> 

    );
}