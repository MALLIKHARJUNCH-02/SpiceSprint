import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from "./styles/LoginStyles";
import { Link } from "react-router-dom";
import NavBar from "../Nav";
import { useNavigate } from "react-router-dom";

const LogIn = () => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        email: "",
        password: ""
    });
    
    const [message, setMessage] = useState(""); // Use state for message
    const [messageType, setMessageType] = useState(""); // Use state for messageType

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.id]: e.target.value })
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!formData.email || !formData.password) {
            setMessage("All Fields Required");  // Set message via state
            setMessageType("error")
            return;
        }

        try {
            const response = await fetch("https://spicesprintbe.onrender.com/api/auth/login", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    email: formData.email,
                    password: formData.password,
                }),
            });

            const data = await response.json();
            if (response.ok) {
                setMessage(data.message);
                setMessageType("success")         // Update message in state
                localStorage.setItem("isLoggedIn", "true");
                localStorage.setItem("userName", data.name);
                localStorage.setItem("userEmail", data.email);
                setTimeout(() => {
                    navigate("/profile");
                }, 2000);
            } else {
                setMessage(data.message || "Login failed");
                setMessageType("error")
            }
        } catch (error) {
            console.error(error);
            setMessage("Something Went Wrong");
            setMessageType("error")
        }
    }

    return (
        <div>
            <NavBar />
            <div style={styles.form}>
                <form className="w-50" onSubmit={handleSubmit}>
                    <h1 className="h3 mb-3 fw-normal">Please sign in</h1>
                    <p style={{ color: 'red' }}>
                        <strong>Note:</strong> The backend of this web app is still being built. Some features may not
                        work fully yet as I develop the server and database. Thank you for your patience
                        and interest in my work.
                    </p>
                    <div className="form-floating m-1">
                        <input
                            type="email"
                            className="form-control"
                            id="email"
                            placeholder="name@example.com"
                            onChange={handleChange}
                        />
                        <label htmlFor="email">Email address</label>
                    </div>
                    <div className="form-floating m-1">
                        <input
                            type="password"
                            className="form-control"
                            id="password"
                            placeholder="Password"
                            onChange={handleChange}
                        />
                        <label htmlFor="password">Password</label>
                    </div>
                    <button className="btn btn-success w-100 py-2 m-1" type="submit">Sign in</button>

                    <p>If You Don't Have Account Please <Link to='/signup' className="link fs-5">Sign Up</Link></p>

                    {message && <p style={{ color: messageType === "success" ? "green" : "red" }}>{message}</p>}
                </form>
            </div>
        </div>
    );
}

export default LogIn;
