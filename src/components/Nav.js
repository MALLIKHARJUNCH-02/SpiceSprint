import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from '../styles/NavbarStyles';
import '../styles/style.css';
import { Link } from "react-router-dom";

const NavBar = () => {
    return (
        <nav>
            <div style={styles.navbar}>
                <h1 style={styles.h1}>SpiceSprint | Quick Cart - Happy Heart</h1>
                <ul style={styles.linksList}>
                    <li style={styles.buttonLinks}><a href="" className="link">Home</a></li>
                    <li style={styles.buttonLinks}><Link to="/categories" className="link">Categories</Link></li>
                    <li style={styles.buttonLinks}><a href="" className="link">Deals</a></li>
                    <li style={styles.buttonLinks}><a href="" className="link">About</a></li>
                </ul>
                <button type="button" class="btn btn-success"><Link to='/loginsignup' className="link">SignUp</Link></button>
            </div>
        </nav>
    )
};


export default NavBar;