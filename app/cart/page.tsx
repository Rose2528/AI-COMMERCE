// app/cart/page.tsx
import Navbar from "../../components/Navbar";
import CartList from "../../components/CartList";

export default function CartPage() {
    return (
        <>
            <Navbar />
            <div className="container">
                <h1>Cart</h1>
                <section style={{ marginTop: 12 }}>
                    <CartList />
                </section>
            </div>
        </>
    );
}
