import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import ProductsData from "../../data/products.js";
import { useEffect, useState } from "react";
import styles from "../deals/DealsStyles.js";
import NavBar from "../Nav.js";
const API = "https://spicesprintproductsdata.onrender.com";
const MeatAndSeafood = () => {
    const [buttonTexts, setButtonTexts] = useState({});
    const [exchangeRate, setExchangeRate] = useState(83);
    useEffect(() => {
        fetch("https://api.exchangerate.host/latest?base=USD&symbols=INR")
            .then(res => res.json())
            .then(data => setExchangeRate(data.rates.INR))
            .catch(() => setExchangeRate(83)); // fallback if API fails
    }, []);

    const handleClick = async (product) => {
        try {
            const resFind = await fetch(`${API}/cartProducts?productId=${product.id}`);
            if (!resFind.ok) throw new Error("Find cart item failed");
            const matches = await resFind.json();
            const existing = matches.length > 0 ? matches[0] : null;

            if (existing) {
                // item exists, update quantity
                const resPatch = await fetch(`${API}/cartProducts/${existing.id}`, {
                    method: "PATCH",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({ quantity: (existing.quantity || 1) + 1 })
                });
                if (!resPatch.ok) throw new Error("Patch failed");
            } else {
                // add new item
                const cartItem = {
                    productId: product.id,
                    type: product.type,
                    imagePath: product.imagePath,
                    productName: product.productName,
                    productInfo: product.productInfo,
                    discount: product.discount,
                    price: product.price,
                    actualPrice: product.actualPrice,
                    quantity: 1
                };
                const resPost = await fetch(`${API}/cartProducts`, {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify(cartItem)
                });
                if (!resPost.ok) throw new Error("Post failed");

                setButtonTexts((prev) => ({
                    ...prev,
                    [product.id]: "✅ Added"
                }));
            }

        } catch (err) {
            console.error(err);
        }
    };
    return (
        <div>
            <NavBar />
            <div className="cardGrid">
                {ProductsData.filter(p => p.type === "Meat_Seafood").map((p) => (
                    <div key={p.id} className="card" style={{ width: "300px" }}>
                        <img src={p.imagePath} className="card-img-top" style={{ width: "100%", height: "200px" }} alt={p.productName} />
                        <div className="card-body">
                            <h5 className="card-title">{p.productName}</h5>
                            <p className="card-text">{p.productInfo}</p>
                            <div style={styles.cart}>
                                <span style={styles.discount}>{p.discount}%</span>
                                <span>
                                    ₹{(p.price * exchangeRate).toFixed(2)} | <em>{(p.actualPrice * exchangeRate).toFixed(2)}</em>
                                </span>

                                <button type="button" className="btn btn-primary" onClick={() => handleClick(p)}>
                                    {buttonTexts[p.id] || "Add to Cart"}
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>



        </div>
    )
}


export default MeatAndSeafood;