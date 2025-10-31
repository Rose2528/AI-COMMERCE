// components/Navbar.tsx
import Link from "next/link";

export default function Navbar() {
    return (
        <header className="header">
            <div className="logo">AI Commerce</div>
            <nav className="nav-links">
                <Link href="/">Home</Link>
                <Link href="/about">About</Link>
                <Link href="/contact">Contact</Link>
                <Link href="/cart"><button className="btn">Cart</button></Link>
            </nav>
        </header>
    );
}
