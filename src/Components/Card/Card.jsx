import React from "react";
import './Card.css';
export default function Card(props){
    
    return (
        <div className="card">
           <div className="card_img"><img src={props.cardimg} alt="" /></div>
           <div className="card_text">
            <h2></h2>
           </div>
        </div>
    );
}