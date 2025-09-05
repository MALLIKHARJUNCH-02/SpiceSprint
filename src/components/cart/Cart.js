import React, { useEffect, useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from "../Nav.js";
import styles from "./CartStyles.js";

const API = "https://spicesprintproductsdata.onrender.com";

const Cart = () => {
    const [items, setItems] = useState([]);
    const [totals, setTotals] = useState({ totalPrice: 0, totalActualPrice: 0, totalSavings: 0 });
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const [exchangeRate, setExchangeRate] = useState(83);
    useEffect(() => {
        fetch("https://api.exchangerate.host/latest?base=USD&symbols=INR")
            .then(res => res.json())
            .then(data => setExchangeRate(data.rates.INR))
            .catch(() => setExchangeRate(83)); // fallback if API fails
    }, []);

    const loadCart = async () => {
        try {
            const res = await fetch(`${API}/cartProducts`);
            if (!res.ok) throw new Error("Failed to fetch cart");
            const data = await res.json();

            // 🛒 calculate totals
            const totalsCalc = data.reduce(
                (acc, item) => {
                    const qty = item.quantity || 1;
                    acc.totalPrice += item.price * qty;
                    acc.totalActualPrice += item.actualPrice * qty;
                    acc.totalSavings += (item.actualPrice - item.price) * qty;
                    return acc;
                },
                { totalPrice: 0, totalActualPrice: 0, totalSavings: 0 }
            );

            setItems(data);
            setTotals(totalsCalc);
        } catch (e) {
            setError(e.message);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => { loadCart(); }, []);

    const removeItem = async (id) => {
        const res = await fetch(`${API}/cartProducts/${id}`, { method: "DELETE" });
        if (res.ok) {
            const newItems = items.filter(it => it.id !== id);
            setItems(newItems);

            // 🔄 recalc totals after removing item
            const totalsCalc = newItems.reduce(
                (acc, item) => {
                    const qty = item.quantity || 1;
                    acc.totalPrice += item.price * qty;
                    acc.totalActualPrice += item.actualPrice * qty;
                    acc.totalSavings += (item.actualPrice - item.price) * qty;
                    return acc;
                },
                { totalPrice: 0, totalActualPrice: 0, totalSavings: 0 }
            );
            setTotals(totalsCalc);
        }
    };

    if (loading) return <p className="text-center m-3">Loading cart… | Please note this web application is hosted on a free backend service,
        which may cause occasional delays while the server wakes up. Additionally, the backend is still under active development, so some features
        may not be fully functional yet. Your patience and understanding during this phase are greatly appreciated.</p>;
    if (error) return <p className="text-center text-danger m-3">Error: {error}</p>;

    return (
        <div>
            <NavBar />
            <div style={styles.card} className="d-flex flex-column">
                <div>
                    <h3 className="d-flex justify-content-center text-center m-1 text-primary">
                        Your Cart <small className="text-body-secondary m-1">Review items and checkout securely</small>
                    </h3>
                    <p className="text-center">
                        Double-check quantities and variants, then proceed with our secure, streamlined checkout in minutes.
                    </p>
                </div>

                <div className="cardGrid">
                    {items.length === 0 && <p className="m-3">Cart is empty.</p>}
                    {items.map((p) => (
                        <div key={p.id} className="card" style={{ width: "300px" }}>
                            <img src={p.imagePath} className="card-img-top" style={{ width: "100%", height: "200px" }} alt={p.productName || 'Product'} />
                            <div className="card-body">
                                <h5 className="card-title">{p.productName}</h5>
                                <p className="card-text">{p.productInfo}</p>
                                <div style={styles.cart}>
                                    <span style={styles.discount}>{p.discount}%</span>
                                    <span>
                                        ₹{(p.price * exchangeRate).toFixed(2)} | <em>{(p.actualPrice * exchangeRate).toFixed(2)}</em>
                                    </span>
                                    <button
                                        type="button"
                                        className="btn btn-outline-danger"
                                        onClick={() => removeItem(p.id)}
                                    >
                                        Remove
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>



            </div>
            {/* Cart Summary */}
            <div className="container mt-4">
                <div className="row justify-content-center">
                    <div className="col-md-6 col-lg-5 d-flex flex-column">
                        <h4 className="d-flex justify-content-between align-items-center mb-3">
                            <span className="text-primary">Your cart</span>
                            <span className="badge bg-primary rounded-pill">{items.length}</span>
                        </h4>

                        <ul className="list-group mb-3">
                            {items.map((p) => (
                                <li key={p.id} className="list-group-item d-flex justify-content-between lh-sm">
                                    <div>
                                        <h6 className="my-0">{p.productName}</h6>
                                        <small className="text-body-secondary">{p.productInfo}</small>
                                    </div>
                                    <span className="text-body-secondary">
                                        ₹{(p.price * exchangeRate).toFixed(2)}
                                    </span>
                                </li>
                            ))}

                            {/* Totals */}
                            <li className="list-group-item d-flex justify-content-between">
                                <span>Original Price</span>
                                <strong>₹{(totals.totalActualPrice * exchangeRate).toFixed(2)}</strong>
                            </li>
                            <li className="list-group-item d-flex justify-content-between text-success">
                                <span>You Save</span>
                                <strong>−₹{(totals.totalSavings * exchangeRate).toFixed(2)}</strong>
                            </li>
                            <li className="list-group-item d-flex justify-content-between">
                                <span>Total</span>
                                <strong>₹{(totals.totalPrice * exchangeRate).toFixed(2)}</strong>
                            </li>
                        </ul>


                        {/* Promo code form */}
                        <form className="card p-2">
                            <div className="input-group">
                                <input type="text" className="form-control" placeholder="Promo code" />
                                <button type="submit" className="btn btn-secondary">Redeem</button>

                            </div>
                            <button type="button" class="btn btn-primary m-2">Continue to checkout</button>
                        </form>
                    </div>
                </div>

            </div>

        </div>
    );
};

export default Cart;
