import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from "../styles/CategoryStyles";
import '../styles/style.css';
import { Link } from "react-router-dom";
const Category = () => {
    return (

        <div style={styles.hero}>
            <div>
                <h2>Shop by Category</h2>
                <p>Everything you need, delivered fresh</p>
                <Link to="/categories" className="link">View All Categories</Link>
            </div>

            <div style={styles.categories}>

                <div style={styles.categorybackground} className="onHover">
                    <span>🍎</span>
                    <p>Fresh Produce</p>
                    <p>Fruits & Vegetables</p>
                </div>
                <div style={styles.categorybackground} className="onHover">
                    <span>🥛</span>
                    <p>Dairy & Eggs</p>
                    <p>Milk, Cheese & More</p>
                </div>
                <div style={styles.categorybackground} className="onHover">
                    <span>🥩</span>
                    <p>Meat & Seafood</p>
                    <p>Fresh & Frozen</p>
                </div>
                <div style={styles.categorybackground} className="onHover">
                    <span>🍞</span>
                    <p>Bakery</p>
                    <p>Fresh Bread & Pastries</p>
                </div>

            </div>
        </div>
    )
};

export default Category;