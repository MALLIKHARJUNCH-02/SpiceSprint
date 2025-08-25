import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/style.css';
import styles from "../styles/TodaysDeals";

import banana from '../images/bananas.png';
import lettuce from '../images/Fresh Lettuce.webp';
import grapes from '../images/grapes.avif';


const TodaysDeals = () => {
    return (
        <div style={styles.hero}>
            <div style={styles.header}>Today's Deals
                <div style={styles.viewAll} >
                    <p>Limited time offers</p>
                    <a href="" >View All &gt;</a>
                </div>
            </div>

            <div style={styles.card}>
                <div className="card" style={{ width: "300px" }}>
                    <img src={banana} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">Organic Bananas</h5>
                        <p className="card-text">
                            Fresh organic bananas, perfect for smoothies
                        </p>
                        <div style={styles.cart}>
                            <span style={styles.discount}>30% off</span>
                            <span>₹84 <em> ₹120</em> </span>
                            <a href="#" className="btn btn-primary">Add to Cart</a>
                        </div>
                    </div>
                </div>

                <div className="card" style={{ width: "300px" }}>
                    <img src={lettuce} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">Fresh Lettuce</h5>
                        <p className="card-text">
                            Crisp romaine lettuce, locally grown
                        </p>
                        <div style={styles.cart}>
                            <span style={styles.discount}>25% off</span>
                            <span>₹150 <em> ₹200</em> </span>
                            <a href="#" className="btn btn-primary">Add to Cart</a>
                        </div>
                    </div>
                </div>


                <div className="card" style={{ width: "300px" }}>
                    <img src={grapes} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">Purple Grapes</h5>
                        <p className="card-text">
                            Sweet seedless grapes, perfect for snacking
                        </p>
                        <div style={styles.cart}>
                            <span style={styles.discount}>20% off</span>
                            <span>₹96 <em> ₹120</em> </span>
                            <a href="#" className="btn btn-primary">Add to Cart</a>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}


export default TodaysDeals;