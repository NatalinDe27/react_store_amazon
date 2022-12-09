import React from 'react';
import './Header.css';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCartShopping, faMagnifyingGlass} from "@fortawesome/free-solid-svg-icons";
import '../../styles/App.css';
import logo_amazon from './Amazon-logo.png';

function Header() {
    return (
        <div className="header">
            <div id="header">
                <a href="#"><img
                    src={logo_amazon}
                    alt="logo" className="logo"/></a>
                <div className="nav_search">
                    <form action="#" method="GET">
                        <input type="text" className="nav_input"/>
                    </form>
                   <a href="#"><FontAwesomeIcon icon={faMagnifyingGlass}/></a>
                </div>
                <p>
                    <a href="#">Sign in</a>
                    <a href="#"><FontAwesomeIcon icon={faCartShopping}/></a>
                </p>
            </div>
            <nav>
                <div>
                    <ul className="menu_horizontally">
                        <li><a href="#">Today's Deals</a></li>
                        <li><a href="#">Customer Service</a></li>
                        <li><a href="#">Registry</a></li>
                        <li><a href="#">Gift cards</a></li>
                        <li><a href="#">Sell</a></li>
                    </ul>
                    <div id="menuToggle">
                        <input type="checkbox" />
                        <span></span>
                        <span></span>
                        <span></span>
                        <ul id="menu">
                            <a href="#"><li>Fashion</li></a>
                            <a href="#"><li>TVs</li></a>
                            <a href="#"><li>Electronics</li></a>
                            <a href="#"><li>Jewelry</li></a>
                            <a href="#"><li>See All</li></a>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Header;