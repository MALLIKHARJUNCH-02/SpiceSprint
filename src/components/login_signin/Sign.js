import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from "react-router-dom";
import { useState } from "react";
import styles from "./styles/LoginStyles";
import NavBar from "../Nav";

const SignIn = () => {


    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: "",
        confirmPassword: ""
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.id]: e.target.value });
    };


    const handleSubmit = async (e) => {
        e.preventDefault(); // prevent page reload

        if (formData.password !== formData.confirmPassword) {
            alert("Passwords do not match!");
            return;
        }

        try {
            // 👇 This is where you mention the backend route
            const response = await fetch("https://spicesprintbe.onrender.com/api/auth/signup", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    name: formData.name,
                    email: formData.email,
                    password: formData.password,
                }),
            });

            const data = await response.json();
            if (response.ok) {
                alert("Signup successful!");
            } else {
                alert(data.message || "Signup failed");
            }
        } catch (error) {
            console.error("Error:", error);
            alert("Something went wrong");
        }
    };


    return (

        <div>

            <NavBar/>
            <div style={styles.form}>
                <form className="w-50" onSubmit={handleSubmit}>
                    <h1 className="h3 mb-3 fw-normal">Create an Account</h1>
                    <p style={{ color: 'red' }}><strong> Note:</strong> The backend of this web app is still being built. Some features may not
                        work fully yet as I develop the server and database. Thank you for your patience
                        and interest in my work.</p>
                    {/* Name Input */}
                    <div className="form-floating m-1">
                        <input
                            type="text"
                            className="form-control"
                            id="name"
                            placeholder="Your Name"
                            onChange={handleChange}
                        />
                        <label htmlFor="floatingName">Full Name</label>
                    </div>

                    {/* Email Input */}
                    <div className="form-floating m-1">
                        <input
                            type="email"
                            className="form-control"
                            id="email"
                            placeholder="name@example.com"
                            onChange={handleChange}
                        />
                        <label htmlFor="floatingEmail">Email address</label>
                    </div>

                    {/* Password Input */}
                    <div className="form-floating m-1">
                        <input
                            type="password"
                            className="form-control"
                            id="password"
                            placeholder="Password"
                            onChange={handleChange}
                        />
                        <label htmlFor="floatingPassword">Password</label>
                    </div>

                    {/* Confirm Password Input */}
                    <div className="form-floating m-1">
                        <input
                            type="password"
                            className="form-control"
                            id="confirmPassword"
                            placeholder="Confirm Password"
                            onChange={handleChange}
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
        </div>
    )
}


export default SignIn;