import React from "react";
import { Link } from "react-router-dom";

import 'bootstrap/dist/css/bootstrap.min.css';

import './styles/styles.css';
import styles from './styles/BottomNavstyles';


const BottomNav = () =>{
    return (
        <div>

            <div style={styles.hero}>

                <div style={styles.links}>
                       <Link to="/" className="link">  <span>🏠</span> Home</Link>
                </div>

                <div style={styles.links}>
                        <Link to="/categories" className="link">  <span>📂</span> Categories</Link>
                </div>

                <div style={styles.links}>
                        <Link to="/about" className="link">  <span>🧾</span> About</Link>
                </div>

                <div style={styles.links}>
                        <Link to="" className="link">   <span>🔍</span> Search</Link>
                </div>

                <div style={styles.links}>
                        <Link to="" className="link">   <span>🛒</span> Cart</Link>
                </div>

                <div style={styles.links}>
                         <Link to="/profile" className="link">   <span>👤</span> Profile</Link>
                </div>

            </div>


        </div>
    )
}


export default BottomNav;