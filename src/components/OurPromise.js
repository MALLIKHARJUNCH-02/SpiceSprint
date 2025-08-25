import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/style.css';
import styles from "../styles/OurPronisestyles";


const OurPronise = () => {

    return (
        <div style={styles.hero}>
            <div>
                <h2>Why Choose SpiceSprint ?</h2>
                <p>We make grocery shopping and Food  Delivery simple and convenient</p>
            </div>

            <div style={styles.info}>

                <div style={styles.card}>
                    <div style={styles.p}>⚡</div>
                    <h4>Lightning Fast</h4>
                    <p>Get your groceries delivered in 30 minutes or less</p>
                </div>

                <div style={styles.card}>
                    <p style={styles.p}>🌟</p>
                    <h4>Premium Quality</h4>
                    <p>Hand-picked fresh produce and premium brands</p>
                </div>

                <div style={styles.card}>
                    <p style={styles.p}>💰</p>
                    <h4>Best Prices</h4>
                    <p>Competitive prices with exclusive deals and discounts</p>
                </div>
            </div>

        </div>
    )
}



export default OurPronise;