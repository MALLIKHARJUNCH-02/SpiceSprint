import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import bannerStyles from "../styles/Banner";
import '../styles/style.css';


const Banner = () => {
    return (
        <header style={bannerStyles.header } className="header">
            <div style={bannerStyles.bannerLeft}>
                <h1>Fresh Groceries And Food Delivered to Your Door</h1>
                <p>Get fresh produce, pantry staples, and your favorite meals delivered in under 30 minutes.</p>
                <div className="input-group mb-3">
                    <input type="text" className="form-control" placeholder="Enter your address" aria-label="Recipient’s username" aria-describedby="button-addon2" />
                    <button className="btn btn-outline-warning" type="button" id="button-addon2">Find Food</button>
                </div>

                <div style={bannerStyles.bannerHigh}>
                    <div style={{ padding: '10px' }}>
                        <span>⚡</span>
                        <span>30min delivery</span>
                    </div>

                    <div style={{ padding: '10px' }}>
                        <span>🚚</span>
                        <span>Free delivery over ₹ 599</span>
                    </div>
                </div>
            </div>

            <div style={bannerStyles.bannerRight}>
                <div style={bannerStyles.bannerRightInfo}>
                    <div style={bannerStyles.bannerRightIcon}>🥗</div>
                    <h3>Fresh & Healthy</h3>
                    <p>Premium quality groceries and meals</p>
                </div>
            </div>
        </header>
    )




}


export default Banner;