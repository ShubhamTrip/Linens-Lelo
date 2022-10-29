import React,{useState,useEffect} from 'react';
import './Home.css';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import Card from '../../Components/Card/Card';
export default function Home(props){

    let [products, setproducts]= useState([]);
    useEffect(()=>{
        fetch('https://fakestoreapi.com/products')
        .then(res=>res.json()).then(data=> setproducts(data));
    },[])
    return(
        <div className='home'>
             <div className='caraosel'>
                <Carousel className='car'
                showThumbs={false}
                autoPlay={true}
                transitionTime={3}
                infiniteLoop={true}
                showStatus={false}>
                {
                    products.map(data=>(
                        <div className='caraosel_img' ><img src={data.image} alt='product images'/></div>
                    ))
                }  
                </Carousel>
             </div>
             <h2>All Products</h2>
             <div className='home_products'>       
             {products.map(data =>(
                           <Card cardimg={data.image} productname={data.title} price={data.price} set={props.set} data={data} crt={props.crt}/>
                    ))
             }                  
             </div>
        </div>
    );
}