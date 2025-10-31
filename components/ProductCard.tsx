// components/ProductCard.tsx
"use client";
import { useState } from "react";

export default function ProductCard({ product, onAdd }: { product: any, onAdd: (p: any) => void }) {
    const [added, setAdded] = useState(false);

    const handleAdd = () => {
        setAdded(true);
        onAdd(product);
    };

    return (
        <div className="card">
            <img src={product.image} alt={product.name} />
            <div className="title">{product.name}</div>
            <div className="price">${product.price}</div>
            <div className="actions">
                <button className="btn" onClick={handleAdd}>{added ? "Added" : "Add to Cart"}</button>
                <a href={`/checkout?product=${product.id}`} style={{ alignSelf: "center", marginLeft: 6 }}>Buy now</a>
            </div>
        </div>
    );
}
