import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import bannerStyles from "../styles/Banner";
import '../styles/style.css';
import { useState } from "react";
import { useEffect } from "react";


const Banner = () => {

    const [isMobile, setIsmobile] = useState(window.innerWidth < 1000);

    useEffect(() => {

        const handleReSize = () => setIsmobile(window.innerWidth < 1000);
        window.addEventListener('resize', handleReSize);
        return () => window.removeEventListener('resize', handleReSize);

    }, []);
    
    return (
        <header style={bannerStyles.header} className="header">
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
                <p style={{ color: 'red' }}><strong> Note:</strong> The backend of this web app is still being built. Some features may not
                    work fully yet as I develop the server and database. Thank you for your patience
                    and interest in my work.</p>
            </div>
        </header>
    )




}


export default Banner;