// components/CartList.tsx
"use client";
import { useState, useEffect } from "react";

export default function CartList() {
    const [items, setItems] = useState<any[]>([]);

    useEffect(() => {
        const raw = localStorage.getItem("ai_cart");
        if (raw) setItems(JSON.parse(raw));
    }, []);

    const remove = (id: number) => {
        const next = items.filter(i => i.id !== id);
        setItems(next);
        localStorage.setItem("ai_cart", JSON.stringify(next));
    };

    const updateQty = (id: number, delta: number) => {
        const next = items.map(i => i.id === id ? { ...i, qty: Math.max(1, (i.qty || 1) + delta) } : i);
        setItems(next);
        localStorage.setItem("ai_cart", JSON.stringify(next));
    };

    const total = items.reduce((s, i) => s + (i.price * (i.qty || 1)), 0);

    if (!items.length) return <p>Your cart is empty.</p>;

    return (
        <div>
            <ul>
                {items.map(i =>
                    <li key={i.id} style={{ display: 'flex', justifyContent: 'space-between', padding: '10px 0', borderBottom: '1px solid #eee' }}>
                        <div>
                            <div style={{ fontWeight: 600 }}>{i.name}</div>
                            <div style={{ color: '#6b7280' }}>Qty: {(i.qty || 1)}</div>
                        </div>
                        <div style={{ textAlign: 'right' }}>
                            <div>${(i.price * (i.qty || 1)).toFixed(2)}</div>
                            <div style={{ marginTop: 8, display: 'flex', gap: 6, justifyContent: 'flex-end' }}>
                                <button onClick={() => updateQty(i.id, -1)}>-</button>
                                <button onClick={() => updateQty(i.id, 1)}>+</button>
                                <button onClick={() => remove(i.id)} style={{ marginLeft: 8 }}>Remove</button>
                            </div>
                        </div>
                    </li>
                )}
            </ul>

            <div style={{ marginTop: 12, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div style={{ fontWeight: 700 }}>Total: ${total.toFixed(2)}</div>
                <a href="/checkout" className="btn">Proceed to Checkout</a>
            </div>
        </div>
    );
}
