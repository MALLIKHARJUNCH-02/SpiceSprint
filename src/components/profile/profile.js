import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from "react-router-dom";
import styles from "./ProfileStyles";
import BottomNav from "../categories/BottomNav";
import Footer from "../Footer";

const Profile = () => {
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
                    <button type="button" class="btn btn-outline-warning">
                        <Link to="/" className="link">Home</Link></button>
                </div>
            </div>



            <div style={styles.ProfileOwner}>
                <div>
                    <div style={styles.ProfileOwnerImg}>
                        img
                    </div>

                    <div>
                        <h4>Chilukuri Mallikharjun</h4>
                        <p>mkreddychilukuri075@gmail.com</p>
                    </div>

                    <div>
                        <button type="button" class="btn btn-primary">Edit Profile</button>
                    </div>
                </div>
            </div>


            <div>

                <div style={styles.Settings}>

                    <div  style={styles.AccountSettings}>
                        <h3>⚙️ Account Settings</h3>

                        <div style={styles.Email}>
                            <div>
                                <h6>Email Notifications</h6>
                                <p>Get updates about your orders</p>
                            </div>

                            <div>
                                <div class="form-check form-switch">
                                    <input class="form-check-input" type="checkbox" role="switch" id="switchCheckChecked" checked/>
                                </div>

                            </div>
                        </div>


                        <div style={styles.Email}> 
                            <div>
                                <h6>Quick Cart Auto-Save</h6>
                                <p>Automatically save cart items</p>
                            </div>

                            <div>
                                <div class="form-check form-switch">
                                    <input class="form-check-input" type="checkbox" role="switch" id="switchCheckChecked" checked/>
                                </div>

                            </div>
                        </div>
                    </div>


                    <div  style={styles.AccountSettings}>
                        <h3>⚙️ Account Settings</h3>

                        <div style={styles.Email}>
                            <div>
                                <h6>Email Notifications</h6>
                                <p>Get updates about your orders</p>
                            </div>

                            <div>
                                <div class="form-check form-switch">
                                    <input class="form-check-input" type="checkbox" role="switch" id="switchCheckChecked" checked/>
                                </div>

                            </div>
                        </div>


                        <div style={styles.Email}> 
                            <div>
                                <h6>Quick Cart Auto-Save</h6>
                                <p>Automatically save cart items</p>
                            </div>

                            <div>
                                <div class="form-check form-switch">
                                    <input class="form-check-input" type="checkbox" role="switch" id="switchCheckChecked" checked/>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div>
                <Footer/>
            </div>

            <div>
                <BottomNav/>
            </div>
        </div>
    )
}


export default Profile;