import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/styles.css';
import styles from './styles/Mainstyles';

const Main = () => {
    return (
        <div style={styles.header}>


            <div>
                <h2>Shop by Categories</h2>
                <p>Fresh groceries delivered to your doorstep</p>
                <p style={{color: 'red'}}><strong> Note:</strong> The backend of this web app is still being built. Some features may not 
                        work fully yet as I develop the server and database. Thank you for your patience
                         and interest in my work.</p>
            </div>

            <div style={styles.categories}>

                <div style={styles.cardBackground} className="card">
                    <a style={styles.card}>
                        <span style={{...styles.color1, ...styles.span}}>🥕</span>
                        <h3>Fruits & Vegetables</h3>
                        <h4>Fresh & Organic</h4>

                        <h6 style={styles.color01}>500+ items</h6>
                    </a>
                </div>

                <div style={styles.cardBackground} className="card">
                    <a style={styles.card}>
                        <span style={{...styles.color2,...styles.span}}>🥛</span>
                        <h3>Dairy & Eggs</h3>
                        <h4>Farm Fresh</h4>

                        <h6 style={styles.color02}>200+ items</h6>
                    </a>
                </div>

                <div style={styles.cardBackground} className="card">
                    <a style={styles.card}>
                        <span style={{...styles.color3, ...styles.span}}>🥩</span>
                        <h3>Meat & Seafood</h3>
                        <h4>Premium Quality</h4>

                        <h6 style={styles.color03}>150+ items</h6>
                    </a>
                </div>

                <div style={styles.cardBackground} className="card">
                    <a style={styles.card}>
                        <span style={{...styles.color4, ...styles.span}}>🍞</span>
                        <h3>Bakery</h3>
                        <h4>Fresh Baked</h4>

                        <h6 style={styles.color04}>80+ items</h6>
                    </a>
                </div>

                <div style={styles.cardBackground} className="card">
                    <a style={styles.card}>
                        <span style={{...styles.color5, ...styles.span}}>🥤</span>
                        <h3>Beverages</h3>
                        <h4>Refreshing Drinks</h4>

                        <h6 style={styles.color05}>120+ items</h6>
                    </a>
                </div>

                <div style={styles.cardBackground} className="card">
                    <a style={styles.card}>
                        <span style={{...styles.color6, ...styles.span}}>🍿</span>
                        <h3>Snacks</h3>
                        <h4>Tasty Treats</h4>

                        <h6 style={styles.color06}>300+ items</h6>
                    </a>
                </div>

                <div style={styles.cardBackground} className="card">
                    <a style={styles.card}>
                        <span style={{...styles.color7, ...styles.span}}>🧊</span>
                        <h3>Frozen Foods</h3>
                        <h4>Ready to Cook</h4>

                        <h6 style={styles.color07}>90+ items</h6>
                    </a>
                </div>

                <div style={styles.cardBackground} className="card">
                    <a style={styles.card}>
                        <span style={{...styles.color8, ...styles.span}}>🧽</span>
                        <h3>Household</h3>
                        <h4>Daily Essentials</h4>

                        <h6 style={styles.color08}>250+ items</h6>
                    </a>
                </div>


            </div>


            <div style={styles.actions}>
                <div>
                    <h2>Quick Actions</h2>
                </div>

                <div style={styles.actionsButtons}>

                    <button style={styles.buttons} type="button" class="btn btn-outline-primary m-4">
                        <span style={styles.span}>🏷️</span>
                        <h3>Today's Deals</h3>
                    </button>

                    <button style={styles.buttons} type="button" class="btn btn-outline-info m-4">
                        <span style={styles.span}>❤️</span>
                        <h3>Favorites</h3>
                    </button>

                    <button style={styles.buttons} type="button" class="btn btn-outline-warning m-4">
                        <span style={styles.span}>📦</span>
                        <h3>My Orders</h3>
                    </button>

                    <button style={styles.buttons} type="button" class="btn btn-outline-success m-4">
                        <span style={styles.span}>👨‍🍳</span>
                        <h3>Recipes</h3>
                    </button>

                </div>
            </div>


        </div>
    )
}


export default Main;