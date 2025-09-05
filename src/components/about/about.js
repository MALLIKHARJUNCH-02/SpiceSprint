import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from "react-router-dom";
import styles from './aboutstyles';
import { useState } from "react";
import { useEffect } from "react";
import CountUp from 'react-countup';

import Footer from "../Footer";
import BottomNav from "../categories/BottomNav";
import NavBar from "../Nav";

const About = () => {
    const [isMobile, setIsMobile] = useState(window.innerWidth < 500);

    useEffect(() => {
        const handleResize = () => setIsMobile(window.innerWidth < 500);
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);



    return (
        <div>
            <div><NavBar /></div>

            <div style={styles.Welcome}>
                <h3 style={styles.h1}>Welcome to SpiceSprint!</h3>
                <div>
                    <p style={{ color: ' #26734d' }}>
                        Empowering your kitchen. Saving you time. Connecting neighborhoods with fresh groceries and delicious meals every day.
                    </p>
                </div>
            </div>

            <div style={{ ...styles.quickFactsStyle, display: 'flex', gap: '2rem', justifyContent: 'center', flexWrap: 'wrap' }}>
                <div>
                    {/* <span style={styles.labelStyle}>Serving:&nbsp;</span> */}
                    <span style={styles.numberStyle}>
                        <span style={{ color: "blue" }}>
                            <CountUp end={10} duration={2} />
                        </span>
                        <span style={{ color: "green" }}> + cities</span>
                    </span>

                </div>
                <div>
                    {/* <span style={styles.labelStyle}>Deliveries:&nbsp;</span> */}
                    {/* <span style={styles.numberStyle}> <CountUp end={5000} duration={1} separator=',' />+ Deliveries</span> */}
                    <span style={styles.numberStyle}>
                        <span style={{ color: "blue" }}>
                            <CountUp end={5000} duration={2} />
                        </span>
                        <span style={{ color: "green" }}> + Deliveries</span>
                    </span>
                </div>
                <div>
                    {/* <span style={styles.labelStyle}>Vendors:&nbsp;</span> */}
                    {/* <span style={styles.numberStyle}> <CountUp end={50} duration={1} />+ local partners</span> */}

                    <span style={styles.numberStyle}>
                        <span style={{ color: "blue" }}>
                            <CountUp end={50} duration={2} />
                        </span>
                        <span style={{ color: "green" }}> + local partners</span>
                    </span>
                </div>
                <div>
                    {/* <span style={styles.labelStyle}>Customers:&nbsp;</span> */}
                    {/* <span style={styles.numberStyle}> <CountUp end={1000} duration={1} separator=',' />+ happy hearts </span> */}

                    <span style={styles.numberStyle}>
                        <span style={{ color: "blue" }}>
                            <CountUp end={1000} duration={2} />
                        </span>
                        <span style={{ color: "green" }}> + happy hearts</span>
                    </span>
                </div>
            </div>

            <div><h1>The SpiceSprint Team</h1>
                <div style={styles.cards}>


                    <div className="card" style={{ width: '18rem' }}>
                        <img src="/1cmk.jpg" className="card-img-top" alt="Chilukuri Mallikharjun Reddy" />
                        <div className="card-body">
                            <h5>Chief Executive Officer</h5>
                            <p className="card-text">Chilukuri Mallikharjun Reddy</p>
                            <a href="https://www.linkedin.com/in/mallikharjun-reddy-chilukuri-754b92241" target="_blank" rel="noopener noreferrer" className="btn btn-secondary">
                                LinkedIn
                            </a>

                        </div>
                    </div>

                    <div className="card" style={{ width: '18rem' }}>
                        <img src="/1cmk.jpg" className="card-img-top" alt="Chilukuri Mallikharjun Reddy" />
                        <div className="card-body">
                            <h5>Chief Operating Officer</h5>
                            <p className="card-text">Chilukuri Mallikharjun Reddy</p>
                            <a href="https://www.linkedin.com/in/mallikharjun-reddy-chilukuri-754b92241" target="_blank" rel="noopener noreferrer" className="btn btn-secondary">
                                LinkedIn
                            </a>

                        </div>
                    </div>

                    <div className="card" style={{ width: '18rem' }}>
                        <img src="/1cmk.jpg" className="card-img-top" alt="Chilukuri Mallikharjun Reddy" />
                        <div className="card-body">
                            <h5>Chief Technology Office</h5>
                            <p className="card-text">Chilukuri Mallikharjun Reddy</p>
                            <a href="https://www.linkedin.com/in/mallikharjun-reddy-chilukuri-754b92241" target="_blank" rel="noopener noreferrer" className="btn btn-secondary">
                                LinkedIn
                            </a>

                        </div>
                    </div>
                </div>

            </div>

            <div style={styles.About}>
                <div style={styles.Inner}>
                    <h4 id="Beginning">The Beginning of SpiceSprint</h4>
                    <p>SpiceSprint was founded with a vision to simplify grocery and meal deliveries, combining technology and local partnerships. The early days involved building a reliable network of stores and delivery partners, focused on quality and speed.</p>
                    <h4 id="Challenges">Overcoming Challenges</h4>
                    <p>Like many startups, SpiceSprint faced hurdles including supply chain delays, maintaining freshness, and scaling delivery logistics. Continuous improvements, technology adoption, and customer feedback helped us refine our operations.</p>
                    <h4 id="FirstOrder">Celebrating Our First Order</h4>
                    <p>The first successful delivery marked a milestone, validating our concept and fueling team motivation. That moment taught us the importance of seamless user experience and operational efficiency.</p>
                    <h4 id="Milestones"> Growth and Milestones</h4>
                    <p>SpiceSprint expanded rapidly, adding new cities, products, and features like live order tracking and loyalty programs. Strategic partnerships with local vendors strengthened our footprint while improving service quality.</p>
                    <h4 id="LookingAhead">Looking Ahead</h4>
                    <p>With a clear mission, SpiceSprint is focused on innovation, sustainability, and customer delight. We aim to become the most trusted and convenient food and grocery delivery app, continuously evolving with technology and trends.</p>
                </div>
            </div>

            <div style={styles.Accordion}>

                <div className="accordion w-75" id="accordionExample">
                    <h4>Why Choose SpiceSprint?</h4>
                    <div className="accordion-item">
                        <h2 className="accordion-header">
                            <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                Fast and Reliable Delivery
                            </button>
                        </h2>
                        <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                            <div className="accordion-body">
                                At SpiceSprint, we ensure your groceries and meals reach your doorstep quickly and safely. Our delivery partners are trained to maintain freshness and timely service, reducing wait times and making your shopping hassle-free.
                            </div>
                        </div>
                    </div>
                    <div className="accordion-item">
                        <h2 className="accordion-header">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                Wide Range of Quality Products
                            </button>
                        </h2>
                        <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                            <div className="accordion-body">
                                Explore an extensive selection of fresh groceries, spices, snacks, and ready-to-eat meals curated from trusted local stores and restaurants. Our platform guarantees quality products that enrich your daily cooking and dining experience.
                            </div>
                        </div>
                    </div>
                    <div className="accordion-item">
                        <h2 className="accordion-header">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                Customer Support and Satisfaction
                            </button>
                        </h2>
                        <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                            <div className="accordion-body">
                                Our dedicated customer support team is here to help you with order tracking, returns, refunds, or any queries. We prioritize your satisfaction and strive to resolve issues promptly to create a seamless shopping experience.
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            <div style={styles.FAQ}>

                <div className="accordion w-75" id="faqAccordion">
                    <h4>FAQ</h4>
                    <div className="accordion-item">
                        <h2 className="accordion-header">
                            <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="true" aria-controls="collapseOne">
                                How do I place an order on SpiceSprint?
                            </button>
                        </h2>
                        <div id="collapseFour" className="accordion-collapse collapse show" data-bs-parent="#faqAccordion">
                            <div className="accordion-body">
                                Simply browse your favorite groceries and meals, add them to your cart, apply any coupons, then proceed to checkout to select your payment method and delivery address.
                            </div>
                        </div>
                    </div>
                    <div className="accordion-item">
                        <h2 className="accordion-header">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFive" aria-expanded="false" aria-controls="collapseTwo">
                                Can I modify or cancel my order after placing it?
                            </button>
                        </h2>
                        <div id="collapseFive" className="accordion-collapse collapse" data-bs-parent="#faqAccordion">
                            <div className="accordion-body">
                                You can modify or cancel orders within a limited time window before the restaurant prepares the food, using the app’s order management features.
                            </div>
                        </div>
                    </div>
                    <div className="accordion-item">
                        <h2 className="accordion-header">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseSix" aria-expanded="false" aria-controls="collapseThree">
                                What payment methods are accepted?
                            </button>
                        </h2>
                        <div id="collapseSix" className="accordion-collapse collapse" data-bs-parent="#faqAccordion">
                            <div className="accordion-body">
                                We accept multiple payment options including credit/debit cards, UPI, net banking, PayPal, and cash on delivery.
                            </div>
                        </div>
                    </div>

                    <div className="accordion-item">
                        <h2 className="accordion-header">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseSeven" aria-expanded="false" aria-controls="collapseThree">
                                What areas do you deliver to?
                            </button>
                        </h2>
                        <div id="collapseSeven" className="accordion-collapse collapse" data-bs-parent="#faqAccordion">
                            <div className="accordion-body">
                                SpiceSprint delivers within designated service zones; you can check delivery availability by entering your pin code in the app.
                            </div>
                        </div>
                    </div>

                    <div className="accordion-item">
                        <h2 className="accordion-header">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseEight" aria-expanded="false" aria-controls="collapseThree">
                                How long does delivery usually take?
                            </button>
                        </h2>
                        <div id="collapseEight" className="accordion-collapse collapse" data-bs-parent="#faqAccordion">
                            <div className="accordion-body">
                                Typical delivery time ranges from 25-35 minutes depending on your location and order details.
                            </div>
                        </div>
                    </div>

                    <div className="accordion-item">
                        <h2 className="accordion-header">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseNine" aria-expanded="false" aria-controls="collapseThree">
                                Can I schedule a delivery for a specific time?
                            </button>
                        </h2>
                        <div id="collapseNine" className="accordion-collapse collapse" data-bs-parent="#faqAccordion">
                            <div className="accordion-body">
                                Currently, orders can be placed for immediate delivery; scheduled deliveries are planned for future updates.
                            </div>
                        </div>
                    </div>

                    <div className="accordion-item">
                        <h2 className="accordion-header">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTen" aria-expanded="false" aria-controls="collapseThree">
                                How do I create and manage my account?
                            </button>
                        </h2>
                        <div id="collapseTen" className="accordion-collapse collapse" data-bs-parent="#faqAccordion">
                            <div className="accordion-body">
                                Sign up using your email or phone number. You can manage your profile, addresses, and payment options securely within the app.
                            </div>
                        </div>
                    </div>

                    <div className="accordion-item">
                        <h2 className="accordion-header">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseEleven" aria-expanded="false" aria-controls="collapseThree">
                                Is my payment information secure?
                            </button>
                        </h2>
                        <div id="collapseEleven" className="accordion-collapse collapse" data-bs-parent="#faqAccordion">
                            <div className="accordion-body">
                                Yes, all payments are processed securely with encryption and comply with industry-standard security protocols.
                            </div>
                        </div>
                    </div>

                    <div className="accordion-item">
                        <h2 className="accordion-header">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwelve" aria-expanded="false" aria-controls="collapseThree">
                                What should I do if I forget my password?
                            </button>
                        </h2>
                        <div id="collapseTwelve" className="accordion-collapse collapse" data-bs-parent="#faqAccordion">
                            <div className="accordion-body">
                                Use the “Forgot Password” option on the login screen to reset your password via email or SMS verification.
                            </div>
                        </div>
                    </div>

                    <div className="accordion-item">
                        <h2 className="accordion-header">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThirteen" aria-expanded="false" aria-controls="collapseThree">
                                What is your refund policy?
                            </button>
                        </h2>
                        <div id="collapseThirteen" className="accordion-collapse collapse" data-bs-parent="#faqAccordion">
                            <div className="accordion-body">
                                Refunds are processed for cancelled orders or issues like missing/damaged items, following verification and within applicable timeframes.
                            </div>
                        </div>
                    </div>

                    <div className="accordion-item">
                        <h2 className="accordion-header">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFourteen" aria-expanded="false" aria-controls="collapseThree">
                                How do I return an item or report a damaged product?
                            </button>
                        </h2>
                        <div id="collapseFourteen" className="accordion-collapse collapse" data-bs-parent="#faqAccordion">
                            <div className="accordion-body">
                                Report any order issues directly via the app’s support section and our team will assist you promptly.
                            </div>
                        </div>
                    </div>

                    <div className="accordion-item">
                        <h2 className="accordion-header">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFifteen" aria-expanded="false" aria-controls="collapseThree">
                                Can I save my favorite products or build a shopping list?
                            </button>
                        </h2>
                        <div id="collapseFifteen" className="accordion-collapse collapse" data-bs-parent="#faqAccordion">
                            <div className="accordion-body">
                                Yes, you can save favorites and create shopping lists for faster reordering.
                            </div>
                        </div>
                    </div>

                    <div className="accordion-item">
                        <h2 className="accordion-header">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseSixteen" aria-expanded="false" aria-controls="collapseThree">
                                Do you offer any loyalty or rewards programs?
                            </button>
                        </h2>
                        <div id="collapseSixteen" className="accordion-collapse collapse" data-bs-parent="#faqAccordion">
                            <div className="accordion-body">
                                SpiceSprint rewards loyal customers with points and exclusive offers; check the “Rewards” tab in your profile.
                            </div>
                        </div>
                    </div>

                    <div className="accordion-item">
                        <h2 className="accordion-header">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseSeventeen" aria-expanded="false" aria-controls="collapseThree">
                                How can I contact customer support?
                            </button>
                        </h2>
                        <div id="collapseSeventeen" className="accordion-collapse collapse" data-bs-parent="#faqAccordion">
                            <div className="accordion-body">
                                Reach out via in-app chat, email, or phone support available 24×7 for any assistance.
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            <div>
                <Footer />
            </div>
        </div>
    )
}

export default About;
