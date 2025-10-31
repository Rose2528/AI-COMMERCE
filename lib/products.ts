// lib/products.ts
export type Product = {
    id: number;
    name: string;
    price: number;
    image: string;
    desc?: string;
    category?: string;
};

export const products: Product[] = [
    { id: 1, name: "Smart Headphones", price: 199, image: "https://i.postimg.cc/KY0WQgKL/Wireless-headphones.jpg", desc: "Hi-fi sound, ANC", category: "Audio" },
    { id: 2, name: "Wireless Keyboard", price: 89, image: "https://i.postimg.cc/65tB2GkJ/keyboard.jpg", desc: "Mechanical, compact", category: "Accessories" },
    { id: 3, name: "Gaming Mouse", price: 59, image: "https://i.postimg.cc/zvFKSTvY/Gaming-Mouse.jpg", desc: "High DPI sensor", category: "Accessories" },
    { id: 4, name: "Smart Watch", price: 199, image: "https://i.postimg.cc/cL4Mhkf9/smart-watch.jpg", desc: "Health & notifications", category: "Wearables" },
    { id: 5, name: "Portable Speaker", price: 79, image: "https://i.postimg.cc/hjVqhSMP/speaker.jpg.jpg", desc: "Bluetooth speaker", category: "Audio" },
    { id: 6, name: "4K Webcam", price: 129, image: "https://i.postimg.cc/CLhVLpqr/webcam.jpg", desc: "Crystal clear video", category: "Cameras" },
    { id: 7, name: "USB-C Hub", price: 39, image: "https://i.postimg.cc/2yCg6nVq/hub.jpg", desc: "Multiple ports", category: "Accessories" },
    { id: 8, name: "Laptop Stand", price: 49, image: "https://i.postimg.cc/x1XhcfTR/stand.jpg", desc: "Ergonomic stand", category: "Accessories" },
    { id: 9, name: "Noise Cancelling Earbuds", price: 129, image: "https://i.postimg.cc/Z5vsJwVf/earbuds.jpg", desc: "Compact & powerful", category: "Audio" },
    { id: 10, name: "Portable Charger", price: 59, image: "https://i.postimg.cc/26r0FrrL/powerbank.jpg", desc: "Fast charging", category: "Power" },
    { id: 11, name: "Smart Lamp", price: 69, image: "https://i.postimg.cc/vTmXkh1H/lamp.jpg", desc: "Ambient lighting", category: "Home" },
    { id: 12, name: "Wireless Router", price: 149, image: "https://i.postimg.cc/kXBfyj3R/router.jpg", desc: "High-speed WiFi", category: "Networking" },
    { id: 13, name: "Fitness Band", price: 49, image: "https://i.postimg.cc/7Zz9FfLv/band.jpg", desc: "Track workouts", category: "Wearables" },
    { id: 14, name: "Desktop Microphone", price: 89, image: "https://i.postimg.cc/jjrcttWX/mic.jpg", desc: "Stream-ready mic", category: "Audio" },
    { id: 15, name: "Graphic Tablet", price: 179, image: "https://i.postimg.cc/TwtJVbtQ/tablet.jpg", desc: "For designers", category: "Creative" },
];
