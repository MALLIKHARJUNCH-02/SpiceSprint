import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import bannerStyles from "../styles/Banner";
import '../styles/style.css';
import { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";


const Banner = () => {

    const [isMobile, setIsmobile] = useState(window.innerWidth < 1000);

    useEffect(() => {

        const handleReSize = () => setIsmobile(window.innerWidth < 1000);
        window.addEventListener('resize', handleReSize);
        return () => window.removeEventListener('resize', handleReSize);

    }, []);

     const [isMobileCarousel, setIsmobileCarousel] = useState(window.innerWidth < 500);

    useEffect(() => {

        const handleReSizeCarousel = () => setIsmobileCarousel(window.innerWidth < 500);
        window.addEventListener('resize', handleReSizeCarousel);
        return () => window.removeEventListener('resize', handleReSizeCarousel);

    }, []);

    return (
        <div>
            <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel" style={{ width: '100%', height: '100vh', display: isMobileCarousel ? "none" : "block" }}>
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>

                <div className="carousel-inner" style={{ height: '100vh' }}>
                    <div className="carousel-item active" style={{ height: '100vh' }}>
                        <img src="/young-fashion-woman.jpg" className="d-block w-100" alt="First slide"
                            style={{ height: '100vh', objectFit: 'cover' }} />
                        <div className="carousel-caption">
                            <button type="button" className="btn btn-secondary">
                                <Link to='/loginsignup' className="link">SignUp</Link>
                            </button>
                            <p>Get 30% off on everything — limited time only!</p>
                        </div>
                    </div>

                    <div className="carousel-item" style={{ height: '100vh' }}>
                        <img src="/healthy-food-with-emojis.jpg" className="d-block w-100" alt="Second slide"
                            style={{ height: '100vh', objectFit: 'cover' }} />
                        <div className="carousel-caption ">
                            <p>Healthy choices made easy — explore our wellness range</p>
                            <button type="button" className="btn btn-secondary">
                                <Link to='/loginsignup' className="link">SignUp</Link>
                            </button>
                        </div>
                    </div>

                    <div className="carousel-item" style={{ height: '100vh' }}>
                        <img src="/top-view-delicious-meals-arrangement.jpg" className="d-block w-100" alt="Third slide"
                            style={{ height: '100vh', objectFit: 'cover' }} />
                        <div className="carousel-caption">
                            <button type="button" className="btn btn-secondary">
                                <Link to='/loginsignup' className="link">SignUp</Link>
                            </button>
                            <p style={{ color: '#b9b928' }}>Save time and energy — let SpiceSprint handle your grocery needs</p>
                        </div>
                    </div>
                </div>

                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
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
                    <p style={{ color: 'red' }}><strong> Note:</strong> Please note this web application is hosted on a free 
                    backend service, which may cause occasional delays while the server wakes up. Additionally, the backend 
                    is still under active development, so some features may not be fully functional yet.
                     Your patience and understanding during this phase are greatly appreciated.</p>
                </div>
            </header>
        </div>
    )




}


export default Banner;