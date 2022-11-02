import React,{useState,useEffect} from "react";
import "./Product.css";
import { useParams } from "react-router-dom";
export default function Product(props){
    let  [productinfo,setproductinfo]=useState([]);
    const {id} = useParams();
    useEffect(()=>{
      getData();
    },[]);    
    useEffect(()=>{
        getData();
      },[id]);   
    console.log(id);
    const getData=()=>{
        fetch(`https://fakestoreapi.com/products/${id}`)
            .then(prop=>prop.json())
            .then(data=>setproductinfo(data))
    }

    function click(){
        props.set([...props.cart,productinfo])
    }

    return(
        <div className="product">
            <div className="productcard">
                <h1>{productinfo.title}</h1>
                <div className="productinfo"><img src={productinfo.image} alt="" /> <div className="productdescription"><h3>Product Description</h3><p>{productinfo.description}</p>
                <button className="addtocart" onClick={click}>Add to Cart</button>
                </div></div>
            </div>
        </div>
    );
}
