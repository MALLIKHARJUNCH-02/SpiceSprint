import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from "./styles/TopNavstyles";
import './styles/styles.css';

const TopNav = () => {
    return (
        <div style={styles.hero}>
            <div style={styles.header}>
                <h1>🥬 Fresh Groceries</h1>
                <a href=""> <span>👤</span> </a>
            </div>
             <nav class="navbar bg-body-tertiary">
                    <div class="container-fluid">
                        <form class="d-flex search w-100" role="search" >
                            <input class="form-control me-2 w-50" type="search" placeholder="Search" aria-label="Search" />
                            <button class="btn btn-outline-success" type="submit">Search</button>
                        </form>
                    </div>
                </nav>
        </div>
    )
}

export default TopNav;