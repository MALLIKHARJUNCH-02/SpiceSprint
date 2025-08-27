import React, { useState, useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from '../styles/NavbarStyles';
import '../styles/style.css';
import { Link } from "react-router-dom";

const NavBar = () => {
    const [isMobile, setIsMobile] = useState(window.innerWidth < 850);
    const [menuOpen, setMenuOpen] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 850);
            if (window.innerWidth >= 850) {
                setMenuOpen(false); // close menu on desktop size
            }
        };
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return (
        <nav>
            <div style={styles.navbar}>
                <h1 style={styles.h1}> <img src="/SpiceSprint.png" alt="SpiceSprint Logo" style={{width: '20px', heighi: '20px'}}/> SpiceSprint | Quick Cart - Happy Heart</h1>

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
                            <li style={styles.buttonLinks}><Link to="/profile" className="link">Profile</Link></li>
                        </ul>
                        <button type="button" className="btn btn-success">
                            <Link to='/loginsignup' className="link">SignUp</Link>
                        </button>
                    </>
                )}
            </div>
        </nav>
    );
};

export default NavBar;
