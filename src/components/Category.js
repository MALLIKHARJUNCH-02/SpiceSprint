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

                <a href="/FruitsVegetables" style={styles.categorybackground} className="onHover">
                    <div>
                        <span>🍎</span>
                        <p style={{color: "black"}}>Fresh Produce</p>
                        <p style={{color: "black"}}>Fruits & Vegetables</p>
                    </div>
                </a>
                <a href="/DiaryEggs" style={styles.categorybackground} className="onHover">
                    <div >
                        <span>🥛</span>
                        <p style={{color: "black"}}>Dairy & Eggs</p>
                        <p style={{color: "black"}}>Milk, Cheese & More</p>
                    </div>
                </a>
                <a href="/meatseafood" style={styles.categorybackground} className="onHover">
                    <div>
                        <span>🥩</span>
                        <p style={{color: "black"}}>Meat & Seafood</p>
                        <p style={{color: "black"}}>Fresh & Frozen</p>
                    </div>
                </a>
                <a href="/bakery" style={styles.categorybackground} className="onHover">
                    <div>
                        <span>🍞</span>
                        <p style={{color: "black"}}>Bakery</p>
                        <p style={{color: "black"}}>Fresh Bread & Pastries</p>
                    </div>
                </a>

            </div>
        </div>
    )
};

export default Category;