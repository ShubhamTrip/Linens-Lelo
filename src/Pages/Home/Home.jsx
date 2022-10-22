import React,{useState,useEffect} from 'react';
import './Home.css';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

export default function Home(){

    let [products, setproducts]= useState([]);
    useEffect(()=>{
        fetch('https://fakestoreapi.com/products')
        .then(res=>res.json()).then(data=> setproducts(data));
    },[])
    return(
        <div className='home'>
             <div className='caraosel'>
                <Carousel
                showThumbs={false}
                autoPlay={true}
                transitionTime={3}
                infiniteLoop={true}
                showStatus={false}>
                {
                    products.map(data=>(
                        <div ><img src={data.image}/></div>
                    ))
                }  
                

                </Carousel>
             </div>
        </div>
    );

}