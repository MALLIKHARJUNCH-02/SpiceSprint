import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/style.css';


const year = new Date().getFullYear();

const Footer = () => {
    return (

        <div className="bg-black bg-gradient">
            <footer className="row row-cols-1 row-cols-sm-2 row-cols-md-5">
                <div className="col mb-3">
                    <p className="text-light">© {year} SpiceSprint. All rights reserved.</p>
                </div>
                <div className="col mb-3">
                </div>
                <div className="col mb-3">
                    <h5 className="text-primary">Company</h5>
                    <ul className="nav flex-column">
                        <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-light">About Us</a></li>
                        <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-light">Careers</a></li>
                        <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-light">Press</a></li>
                        <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-light">Blog</a></li>
                    </ul>
                </div>
                <div className="col mb-3">
                    <h5 className="text-primary">Support</h5>
                    <ul className="nav flex-column">
                        <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-light">Help Center</a></li>
                        <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-light">Contact Us</a></li>
                        <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-light">Track Order</a></li>
                        <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-light">Returns</a></li>
                    </ul>
                </div>
            </footer>
        </div>
    )
}


export default Footer; 