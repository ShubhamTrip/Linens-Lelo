import React from "react";
import './Nav.css';
import logo from '../../images/linens.jpeg';
import {Link} from 'react-router-dom';

export default function Nav(){

    return(
        <div className="Navbar"> 
            <div className="linenicon">
              <img src={logo} alt="logo"/>
            </div>
            <div className="navlink">
                <Link to='/'>Home</Link>
                <Link to='/Products'>Products</Link>
                <Link to='/About'>About</Link>
                <Link to='/Contact'>Contact</Link>
            </div>
            <div className="navbutton">
                <button>Login</button>
                <button>Register</button>
                <button>Cart</button>
            </div>
        </div>
    );
}