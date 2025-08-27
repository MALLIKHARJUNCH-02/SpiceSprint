import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from "./styles/LoginStyles";
import { Link } from "react-router-dom";



const LogIn = () => {
    return (
        <div style={styles.form}>

            <form className="w-50">
                <h1 class="h3 mb-3 fw-normal">Please sign in</h1>
                <p style={{ color: 'red' }}><strong> Note:</strong> The backend of this web app is still being built. Some features may not
                    work fully yet as I develop the server and database. Thank you for your patience
                    and interest in my work.</p>
                <div class="form-floating m-1">
                    <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com" />
                    <label for="floatingInput">Email address</label>
                </div>
                <div class="form-floating m-1">
                    <input type="password" class="form-control" id="floatingPassword" placeholder="Password" />
                    <label for="floatingPassword">Password</label>
                </div>
                <button class="btn btn-success w-100 py-2 m-1" type="submit">Sign in</button>

                <p>If You Dont Have Account Please <Link to='/signup' className="link fs-5">Sign Up</Link> </p>
            </form>

        </div>
    )
}


export default LogIn;