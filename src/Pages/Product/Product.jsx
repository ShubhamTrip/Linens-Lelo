import React,{useState,useEffect} from "react";
import "./Product.css";
import { useParams } from "react-router-dom";
export default function Product(){
    
    let  [productinfo,setproductinfo]=useState([]);
    useEffect({
      getData
    },[]);    

    const {id} = useParams();

    useEffect({
        getData
    },[id])

     function getData(){
        fetch('https://fakestoreapi.com/products/1')
            .then(res=>res.json())
            .then(json=>setproductinfo(json))
     }
    return(
        <div className="product">
            <></>
        </div>
    );
}