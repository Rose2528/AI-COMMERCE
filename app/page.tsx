// app/page.tsx
"use client";

import Navbar from "../components/Navbar";
import ProductCard from "../components/ProductCard";
import { products } from "../lib/products";
import { useState, useEffect } from "react";

export default function Home() {
  const [query, setQuery] = useState("");
  const [items, setItems] = useState(products);

  useEffect(() => {
    if (!query) setItems(products);
    else setItems(products.filter(p => p.name.toLowerCase().includes(query.toLowerCase())));
  }, [query]);

  // local add-to-cart: append simple item to localStorage
  const addToCart = (p: any) => {
    const raw = localStorage.getItem("ai_cart");
    const cart = raw ? JSON.parse(raw) : [];
    const found = cart.find((x: any) => x.id === p.id);
    if (found) found.qty = (found.qty || 1) + 1;
    else cart.push({ ...p, qty: 1 });
    localStorage.setItem("ai_cart", JSON.stringify(cart));
    // small toast could be added by TestSprite
  };

  return (
    <>
      <Navbar />
      <div className="container">
        <div className="hero">
          <h1 style={{ margin: 0 }}>AI Commerce — Smart, Tested Products</h1>
          <p style={{ marginTop: 8, color: '#d1d5db' }}>Demo store built with TestSprite in mind</p>
        </div>

        <div style={{ display: 'flex', gap: 12, alignItems: 'center', marginBottom: 12 }}>
          <div style={{ flex: 1 }}>
            <div className="search">
              <input placeholder="Search products..." value={query} onChange={e => setQuery(e.target.value)} />
            </div>
          </div>
        </div>

        <div className="grid">
          {items.map(p => <ProductCard key={p.id} product={p} onAdd={addToCart} />)}
        </div>

        <div className="footer">© {new Date().getFullYear()} AI Commerce — demo</div>
      </div>
    </>
  );
}
