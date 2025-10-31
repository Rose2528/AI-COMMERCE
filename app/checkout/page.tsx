// app/checkout/page.tsx
"use client";
import Navbar from "../../components/Navbar";
import { useState, useEffect } from "react";

export default function Checkout() {
    const [items, setItems] = useState<any[]>([]);
    const [email, setEmail] = useState("");
    const [paid, setPaid] = useState(false);
    const [error, setError] = useState("");

    useEffect(() => {
        const raw = localStorage.getItem("ai_cart");
        setItems(raw ? JSON.parse(raw) : []);
    }, []);

    const total = items.reduce((s, i) => s + i.price * (i.qty || 1), 0);

    const pay = () => {
        if (!email || !email.includes("@")) { setError("Please enter a valid email"); return; }
        // mock payment: in production TestSprite can integrate real payment
        setPaid(true);
        localStorage.removeItem("ai_cart");
    };

    if (paid) return (
        <>
            <Navbar />
            <div className="container">
                <h1>Thank you! ✅</h1>
                <p>Order confirmed — a receipt is sent to {email}</p>
            </div>
        </>
    );

    return (
        <>
            <Navbar />
            <div className="container">
                <h1>Checkout</h1>
                <div style={{ display: 'flex', gap: 20, marginTop: 14 }}>
                    <div style={{ flex: 1, background: '#fff', padding: 16, borderRadius: 8 }}>
                        <h3>Items</h3>
                        {items.length === 0 ? <p>No items in cart</p> :
                            <ul>{items.map(i => <li key={i.id}>{i.name} x {i.qty || 1} - ${(i.price * (i.qty || 1)).toFixed(2)}</li>)}</ul>
                        }
                        <div style={{ marginTop: 12, fontWeight: 700 }}>Total: ${total.toFixed(2)}</div>
                    </div>

                    <div style={{ width: 320, background: '#fff', padding: 16, borderRadius: 8 }}>
                        <h3>Payment</h3>
                        <input placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} style={{ width: '100%', padding: 8, marginBottom: 10 }} />
                        {error && <div style={{ color: 'red', marginBottom: 8 }}>{error}</div>}
                        <button className="btn" onClick={pay}>Pay ${total.toFixed(2)}</button>
                    </div>
                </div>
            </div>
        </>
    );
}
