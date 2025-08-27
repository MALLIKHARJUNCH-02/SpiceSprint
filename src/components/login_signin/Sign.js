import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from "react-router-dom";
import styles from "./styles/LoginStyles";


const SignIn = () => {
    return (
        <div style={styles.form}>
            <form className="w-50">
                <h1 className="h3 mb-3 fw-normal">Create an Account</h1>
                <p style={{ color: 'red' }}><strong> Note:</strong> The backend of this web app is still being built. Some features may not
                    work fully yet as I develop the server and database. Thank you for your patience
                    and interest in my work.</p>
                {/* Name Input */}
                <div className="form-floating m-1">
                    <input
                        type="text"
                        className="form-control"
                        id="floatingName"
                        placeholder="Your Name"
                    />
                    <label htmlFor="floatingName">Full Name</label>
                </div>

                {/* Email Input */}
                <div className="form-floating m-1">
                    <input
                        type="email"
                        className="form-control"
                        id="floatingEmail"
                        placeholder="name@example.com"
                    />
                    <label htmlFor="floatingEmail">Email address</label>
                </div>

                {/* Password Input */}
                <div className="form-floating m-1">
                    <input
                        type="password"
                        className="form-control"
                        id="floatingPassword"
                        placeholder="Password"
                    />
                    <label htmlFor="floatingPassword">Password</label>
                </div>

                {/* Confirm Password Input */}
                <div className="form-floating m-1">
                    <input
                        type="password"
                        className="form-control"
                        id="floatingConfirmPassword"
                        placeholder="Confirm Password"
                    />
                    <label htmlFor="floatingConfirmPassword">Confirm Password</label>
                </div>

                <button className="btn btn-success w-100 py-2 m-1" type="submit">Sign Up</button>

                <p>
                    Already have an account?{" "}
                    <Link to="/loginsignup" className="link fs-5">
                        Sign In
                    </Link>
                </p>
            </form>
        </div>
    )
}


export default SignIn;