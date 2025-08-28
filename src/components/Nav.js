import React, { useState, useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from '../styles/NavbarStyles';
import '../styles/style.css';
import { Link } from "react-router-dom";

const NavBar = () => {
    const [isMobile, setIsMobile] = useState(window.innerWidth < 900);
    const [menuOpen, setMenuOpen] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 900);
            if (window.innerWidth >= 900) {
                setMenuOpen(false); // close menu on desktop size
            }
        };
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return (
        <nav>
            <div style={styles.navbar}>
                <div style={styles.ProfileHeading}>
                    <div style={styles.SpiceSprintLogo}>
                        🌶️
                    </div>

                    <div style={styles.SpiceSprintLogoInfo}>
                        <h4>SpiceSprint</h4>
                        <p>Quick Cart - Happy Heart</p>
                    </div>
                </div>

                {isMobile ? (
                    <>
                        <button
                            className="btn btn-primary"
                            onClick={() => setMenuOpen(!menuOpen)}
                            aria-label="Toggle menu"
                        >
                            &#9776; {/* Hamburger icon */}
                        </button>

                        {menuOpen && (
                            <ul style={{ ...styles.linksList, flexDirection: 'column', marginTop: '10px', padding: '10px', background: '#f8f9fa', borderRadius: '8px' }}>
                                <li style={styles.buttonLinks}><Link to="/" className="link" onClick={() => setMenuOpen(false)}>Home</Link></li>
                                <li style={styles.buttonLinks}><Link to="/categories" className="link" onClick={() => setMenuOpen(false)}>Categories</Link></li>
                                <li style={styles.buttonLinks}><a href="" className="link" onClick={() => setMenuOpen(false)}>Deals</a></li>
                                <li style={styles.buttonLinks}><Link to="/about" className="link" onClick={() => setMenuOpen(false)}>About</Link></li>
                                <li style={styles.buttonLinks}><Link to="/" className="link" onClick={() => setMenuOpen(false)}>Cart</Link></li>
                                <li style={styles.buttonLinks}><Link to="/profile" className="link" onClick={() => setMenuOpen(false)}>Profile</Link></li>
                                <li style={styles.buttonLinks}>
                                    <button type="button" className="btn btn-success w-100">
                                        <Link to="/loginsignup" className="link" onClick={() => setMenuOpen(false)}>SignUp</Link>
                                    </button>
                                </li>
                            </ul>
                        )}
                    </>
                ) : (
                    <>
                        <ul style={styles.linksList}>
                            <li style={styles.buttonLinks}><Link to="/" className="link">Home</Link></li>
                            <li style={styles.buttonLinks}><Link to="/categories" className="link">Categories</Link></li>
                            <li style={styles.buttonLinks}><a href="" className="link">Deals</a></li>
                            <li style={styles.buttonLinks}><Link to="/about" className="link">About</Link></li>
                            <li style={styles.buttonLinks}><Link to="/" className="link">Cart</Link></li>
                            <li style={styles.buttonLinks}><Link to="/profile" className="link">Profile</Link></li>
                        </ul>
                        <button type="button" className="btn btn-info">
                            <Link to='/loginsignup' className="link">SignUp</Link>
                        </button>
                    </>
                )}
            </div>
        </nav>
    );
};

export default NavBar;
