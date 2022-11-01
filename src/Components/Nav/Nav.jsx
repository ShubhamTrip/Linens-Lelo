import React from "react";
import './Nav.css';
import logo from '../../images/linens.jpeg';
import {Link} from 'react-router-dom';

export default function Nav(props){

    return(
        <div className="Navbar"> 
            <div className="linenicon">
              <img src={logo} alt="logo"/>
            </div>
            <div className="navbutton">
        
                <button><Link className="cart" to='/Cart'>Cart ({props.length})</Link></button>
            </div>
        </div>
    );
}