import React from 'react';
import './Footer_style.css';
import '../../styles/App.css';

function Footer() {
    return (
        <div id="footer">
            <div>
                <ul>
                    <h4>Get to Know Us</h4>
                    <a href="#">
                        <li>Blog</li>
                    </a>
                    <a href="#">
                        <li>Careers</li>
                    </a>
                    <a href="#">
                        <li>About Amazon</li>
                    </a>
                </ul>
            </div>
            <div>
                <ul>
                    <h4>Make Money with Us</h4>
                    <a href="#">
                        <li>Sell on Amazon Business</li>
                    </a>
                    <a href="#">
                        <li>Sell products on Amazon</li>
                    </a>
                    <a href="#">
                        <li>Sell apps on Amazon</li>
                    </a>
                </ul>
            </div>
            <div>
                <ul>
                    <h4>Amazon Payment Products</h4>
                    <a href="#">
                        <li>Amazon Business Card</li>
                    </a>
                    <a href="#">
                        <li>Shop with Points</li>
                    </a>
                    <a href="#">
                        <li>Reload Your Balance</li>
                    </a>
                </ul>
            </div>
        </div>
    );
}

export default Footer;

