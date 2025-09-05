import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/style.css';
import styles from "../styles/TodaysDeals";
import productsData from "../data/products.js";
import { Link } from "react-router-dom";
const TodaysDeals = () => {
    return (
        <div style={styles.hero}>
            <div style={styles.header}>Today's Deals
                <div style={styles.viewAll} >
                    <p>Limited time offers</p>
                    <Link to="/deals" className="link-opacity-100">Deals</Link>
                </div>
            </div>

            <div style={styles.card}>
                <div className="cardGrid">
                    {productsData
                        .filter(p => p.type === "Deals")
                        .slice(0, 3)
                        .map((p) => (
                            <div key={p.id} className="card" style={{ width: "300px" }}>
                                <img src={p.imagePath} className="card-img-top" style={{width: "100%", height: "200px"}} alt={p.productName} />
                                <div className="card-body">
                                    <h5 className="card-title">{p.productName}</h5>
                                    <p className="card-text">{p.productInfo}</p>
                                    <div style={styles.cart}>
                                        <span style={styles.discount}>{p.discount}%</span>
                                        <span>
                                            {p.price} <em>{p.actualPrice}</em>
                                        </span>
                                    </div>
                                </div>
                            </div>
                        ))}
                </div>
            </div>

        </div>
    )
}


export default TodaysDeals;