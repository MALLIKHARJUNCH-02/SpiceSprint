import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link, redirect } from "react-router-dom";
import styles from "./ProfileStyles";
import BottomNav from "../categories/BottomNav";
import Footer from "../Footer";
import Home from "../Home";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { useState } from "react";
import Dropdown from 'react-bootstrap/Dropdown';
const Profile = () => {
    const navigate = useNavigate();
    const isLoggedIn = localStorage.getItem("isLoggedIn");

    useEffect(() => {
        if (isLoggedIn !== "true") {
            navigate("/loginsignup"); // redirect if not logged in
        }
    }, [isLoggedIn, navigate]);
    const handleClick = () => {
        localStorage.setItem("isLoggedIn", "false");
        window.location.href = "/";
    }

    const [userName, setUserName] = useState("");
    const [userEmail, setUserEmail] = useState("");

    useEffect(() => {
        setUserName(localStorage.getItem("userName") || "");
        setUserEmail(localStorage.getItem("userEmail") || "");
    }, []);

    const imgFirst = userName[0];
    return (

        <div>

            <div style={styles.ProfileNav}>
                <div style={styles.ProfileHeading}>
                    <div style={styles.SpiceSprintLogo}>
                        🌶️
                    </div>

                    <div style={styles.SpiceSprintLogoInfo}>
                        <h4>SpiceSprint</h4>
                        <p>Quick Cart - Happy Heart</p>
                    </div>
                </div>
                <div>
                    <button type="button" className="btn btn-outline-warning">
                        <Link to="/" className="link">Home</Link></button>
                </div>
            </div>



            <div style={styles.ProfileOwner}>
                <div>
                    <div style={{ ...styles.ProfileOwnerImg, fontSize: "150px", fontFamily: "cursive", color: "lightgray" }}>
                        {imgFirst}
                    </div>

                    <div>
                        <h4>{userName}</h4>
                        <p>{userEmail}</p>
                    </div>

                    <div>
                        <button type="button" className="btn btn-primary m-1">Edit Profile</button>
                        <button
                            type="button"
                            className="btn btn-secondary m-1"
                            onClick={handleClick}>
                            Logout
                        </button>
                        <p style={{ color: 'red' }}><strong> Note:</strong> Please note this web application is hosted on a free
                            backend service, which may cause occasional delays while the server wakes up. Additionally, the backend
                            is still under active development, so some features may not be fully functional yet.
                            Your patience and understanding during this phase are greatly appreciated.</p>
                    </div>


                </div>
            </div>


            <div>

                <div style={styles.Settings}>

                    <div style={styles.AccountSettings}>
                        <h3>⚙️ Account Settings</h3>

                        <div style={styles.Email}>
                            <div>
                                <h6>Email Notifications</h6>
                                <p>Get updates about your orders</p>
                            </div>

                            <div>
                                <div className="form-check form-switch">
                                    <input className="form-check-input" type="checkbox" role="switch" id="switchCheckChecked" checked />
                                </div>

                            </div>
                        </div>


                        <div style={styles.Email}>
                            <div>
                                <h6>Quick Cart Auto-Save</h6>
                                <p>Automatically save cart items</p>
                            </div>

                            <div>
                                <div className="form-check form-switch">
                                    <input className="form-check-input" type="checkbox" role="switch" id="switchCheckChecked" checked />
                                </div>

                            </div>
                        </div>
                    </div>


                    <div style={styles.AccountSettings}>
                        <h3>🚚 Delivery Preferences</h3>

                        <div style={styles.Email}>
                            <div>
                                <h6>Preferred Delivery Time</h6>
                                <Dropdown>
                                    <Dropdown.Toggle variant="secondary" id="dropdown-basic">
                                        Delivery Time
                                    </Dropdown.Toggle>

                                    <Dropdown.Menu>
                                        <Dropdown.Item href="#">Morning</Dropdown.Item>
                                        <Dropdown.Item href="#">Afternoon</Dropdown.Item>
                                        <Dropdown.Item href="#">Evening</Dropdown.Item>
                                    </Dropdown.Menu>
                                </Dropdown>
                            </div>

                            <div>
                                <div className="form-check form-switch">
                                    <input className="form-check-input" type="checkbox" role="switch" id="switchCheckChecked" checked />
                                </div>

                            </div>
                        </div>


                        <div style={styles.Email}>
                            <div>
                                <h6>Contactless Delivery</h6>
                                <p>Enjoy safe, no-contact deliveries – orders left at your door</p>
                            </div>

                            <div>
                                <div className="form-check form-switch">
                                    <input className="form-check-input" type="checkbox" role="switch" id="switchCheckChecked" checked />
                                </div>

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


export default Profile;