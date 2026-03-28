html {
  /* Base font size (18px if browser default is 16px) */
  font-size: 1.125rem;
  line-height: 1.6;

  /* Uncomment if you want OS-level light/dark */
  color-scheme: light dark;
}

*,
*::before,
*::after {
  margin: 0;
  outline: 0;
  border: 0;
  padding: 0;
  box-sizing: border-box;
  scroll-behavior: smooth;

  /* Layout debugging */
  /* outline: 1px solid limegreen !important; */
}

@media (prefers-reduced-motion: reduce) {
  * {
    animation: none !important;
    transition: none !important;
  }
}

.mobile{
  visibility: hidden;
}
.PC{
  visibility: visible;
}

:root {
  /* ========================
     BRAND (Luxury Accent)
  ======================== */
  --gold: #c9a96e;        /* your chosen soft gold */
  --gold-soft: #e6c98b;   
  --silver: #a1a1aa;      /* softer, modern silver */

  /* ========================
     DARK MODE (default)
  ======================== */
  --bg: #0b0b0c;          /* deep luxury black */
  --bg-alt: #212121;      /* your choice → very clean */


  /*--bg-alt: #0b0b0c;           deep luxury black */
  /* --bg: #212121;      your choice → very clean */


  --border: #2a2a2e;

  --text: #f5f5f5;
  --text-muted: #a1a1aa;  /* your choice → KEEP */

  --accent: var(--gold);
}

@media (prefers-color-scheme: light) {
  :root {
     /*--bg-alt: #f3f4f6;     soft neutral, not too blue */
    /* --bg: #e5e7eb; */
     --bg: #f3f4f6;   /*   soft neutral, not too blue */
    --bg-alt: #e5e7eb;

    --text: #0b0b0c;
    --text-muted: #6b7280;

    /* Switch vibe in light mode */
    --accent: var(--silver);
  }
}
body {
  font-family: system-ui, -apple-system, BlinkMacSystemFont, sans-serif;
  background-color: var(--bg);
  color: var(--text);
  margin-inline: auto;
}

.container {
  width: min(100% - 2rem, 70rem);
  margin-inline: auto;
}
img {
  max-width: 100%;
  display: block;
  /* aspect-ratio: 16 / 9; */
  /* object-fit: cover; */
}

/* NavBar */
.back{
  background-color: inherit;
  outline: none;
  border: 0;
  display: flex;
  font-size: 17px;
  color: var(--accent);
  margin: 15px;
  align-items: center;
}
.back> span{
  border-left: 3px solid var(--accent);
  border-bottom: 3px solid var(--accent);
  display: inline-block;
  width: 20px;
  height: 20px;
  transform: rotate(45deg);
}
.navbar{
  display: grid;
  /* grid-template-columns: 2fr 1fr 2fr; */
  align-items: center;
  justify-items: center;
  /* grid-column-gap: 10px; */
  grid-row-gap: 10px;
  padding: 10px 5px 0px 5px;
  box-shadow: 0px -5px 10px 5px var(--gold);
  background-color: var(--bg-alt);
  color: var(--text-muted);
}
.navbar > h2 { grid-area: 1 / 1 / 2 / 2; color: var(--gold); }
.navbar > nav { grid-area: 1 / 2 / 2 / 4; }
hr { grid-area: 2 / 1 / 3 / 4; }
#nav_cart_total { grid-area: 1 / 4 / 2 / 4; position: relative;}
#nav_cart_total>p { display: inline; }
.nav_cart_total{position: absolute; right: 5px; top: 10px; display: flex;}
.nav_cart_total>#cartNotif { margin-left: 10px; }



#cartNotif {
  background-color: var(--gold);
  color: var(--bg-alt);
  border-radius: 50%;
  width: 15px;
  font-size: 9px;
  height: 15px;
  text-align: center;
  padding-bottom: 0px;
  top:-3px;
  margin-left: -5px;
  position: absolute;
}


nav>a{
  text-decoration: none;
  color: var(--text-muted);  
  transition: all ease-in-out 0.3s;
  cursor: pointer;
}

nav>a:hover{
  color: var(--gold);
  transform: translateY(-5px) scale(1.15);
  /* transform: translateY(-3px); */
}
hr{
  /* color: var(--silver); */
  width: 98%;
  /* justify-content: center; */
  grid-area: 2 / 1 / 4 / 5;
  opacity: 0.4;
  /* border-top: 1px solid var(--accent); */
  /* color: red; */
}

/* From Uiverse.io by akshat-patel28 */ 
nav {
  display: flex;
  width: 100%;
  /* background-color: #c9a96e; */
  /* width: 250px;
  height: 40px; */
  align-items: center;
  justify-content: space-around;
  /* border-radius: 10px; */
  /* box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px, */
    /* rgba(245, 73, 144, 0.5) 5px 10px 15px; */
}

.icon {
  font-size: 20px;
}
/* ---------- */


/* button {
  background: var(--accent);
  color: black;
  border: none;
  padding: 0.5rem 1rem;
  border-radius: 6px;
  cursor: pointer;
}

button:hover {
  opacity: 0.85;
} */

/* Toast */
.toast{
  border-radius: 7px;
  position: fixed;
  bottom: 7rem;
  right: 2rem;
  background-color: var(--bg);
  color: var(--text);
  padding: 10px 15px;
  display: flex;
}
.toast >p{
  display: block;
  padding-left: 1rem;
}
#checkbox{
  background-color:green;
  border-radius:50%;
  width:30px;
  height:30px;
  display: inline-block;
}
#checkmark{
  border-bottom: 3px solid white;
  border-right: 3px solid white;
  width: 10px;
  height: 20px;
  margin-left: 9px;
  padding-top: 20px;
  transform: rotate(45deg);
}
/* ---------- */


/* Checkout Page */

/* Input Fields */

.input-group {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  justify-content: center;
  align-items: center;
}

/* Each input wrapper */
.input-field {
  position: relative;
}
.input-group small{
  width: 200px;
}

/* Input styling */
.input {
  padding: 0.7rem 2rem;
  border: 1.5px solid var(--border);
  border-radius: 0.8rem;
  background: var(--bg-alt);
  /* padding: 1rem; */
  font-size: 1rem;
  color: var(--gold);
  transition: 0.2s ease;
}

/* Label */
.user-label {
  position: absolute;
  left: 12px;
  top: 50%;
  transform: translateY(-50%);
  color: var(--text-muted);
  pointer-events: none;
  transition: 0.2s ease;
  background: var(--bg-alt);
  padding: 0 4px;
}

/* Focus + filled state */
.input:focus,
.input:not(:placeholder-shown) {
  outline: none;
  border-color: var(--gold);
  color: var(--gold);
}

/* Floating effect */
.input:focus + .user-label,
.input:not(:placeholder-shown) + .user-label{
  top: 0;
  transform: translateY(-50%) scale(0.85);
  color: var(--gold-soft);
  /* border-color: var(--gold); */
  outline: none;
}

.input:invalid{
  border-color: var(--silver);
}

/* input:-internal-autofill-selected {
  background-color: green !important;
} */

.input:internal-autofill-selected {
  background: rgba(255, 255, 255, 0.03);
  backdrop-filter: blur(8px);
  color:green ;
  border: 1px solid rgba(255, 255, 255, 0.08);
}

.user-label {
  background: var(--bg-alt); /* important so text doesn’t overlap */
}

#checkout>h2{
  text-align: center;
  color: var(--accent);
  padding-bottom: 20px;
}
/* input[type="email" i] {
    padding-block: 1px;
    padding-inline: 2px;
} */
/* ----------- */
/* input:-internal-autofill-selected {} */


.productDisplay {
  background: var(--bg-alt);
  padding: 1rem;
  border-radius: 10px;
  margin: 1rem 0;
}

/* mobile view  */
/* @media (max-width: 768px) { */
@media (max-width: 670px) {

  .navbar {
    display: grid;
    /* grid-template-columns: auto 1fr auto; */
    grid-template-rows: repeat(2, 1fr);
    grid-column-gap: 10px;
    grid-row-gap: 0px;
  }

  .navbar > h2 { grid-area: 1 / 1 / 2 / 2; }
  /* #nav_cart_total{ grid-area: 1 / 3 / 2 / 5; } */
  .navbar > nav{ grid-area: 2 / 1 / 3 / 5; }
  hr{ grid-area: 3 / 1 / 4 / 5; }

  .mobile{
    visibility: visible;
  }
  .PC{
    visibility: hidden;
  }
}


<!-- New APP JSX -->

import React, { useState, useEffect, useRef } from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  useParams,
  useNavigate,
  useLocation,
} from "react-router-dom";
import emailjs from "@emailjs/browser";
import { products } from "./products";
import "./App.css";

export default function App() {
  return (
    <BrowserRouter>
      <AppLayout />
    </BrowserRouter>
  );
}

function AppLayout() {
  const [cart, setCart] = useState(() => {
    const saved = localStorage.getItem("cart");
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  const [toastMsg, setToastMsg] = useState(null);

  useEffect(() => {
    if (!toastMsg) return;
    const id = setTimeout(() => setToastMsg(null), 5000);
    return () => clearTimeout(id);
  }, [toastMsg]);

  const total = cart
    .reduce((prev, item) => prev + item.price * item.quantity, 0)
    .toFixed(2);
  const cartCount = cart.reduce((sum, item) => sum + item.quantity, 0);

  const location = useLocation();
  const navigate = useNavigate();

  const isProductPage = location.pathname.startsWith("/product/");
  const isCheckoutPage = location.pathname.startsWith("/checkout");
  const isTermsPage = location.pathname.startsWith("/terms");

  return (
    <>
      {isProductPage || isCheckoutPage || isTermsPage ? (
        <>
          <button className="back" onClick={() => navigate(-1)}>
            <span></span> Back
          </button>
          <span className="nav_cart_total">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="1em"
              height="1em"
              fill="currentColor"
              className="icon"
              viewBox="0 0 16 16"
            >
              <path d="M11.354 6.354a.5.5 0 0 0-.708-.708L8 8.293 6.854 7.146a.5.5 0 1 0-.708.708l1.5 1.5a.5.5 0 0 0 .708 0z" />
              <path d="M.5 1a.5.5 0 0 0 0 1h1.11l.401 1.607 1.498 7.985A.5.5 0 0 0 4 12h1a2 2 0 1 0 0 4 2 2 0 0 0 0-4h7a2 2 0 1 0 0 4 2 2 0 0 0 0-4h1a.5.5 0 0 0 .491-.408l1.5-8A.5.5 0 0 0 14.5 3H2.89l-.405-1.621A.5.5 0 0 0 2 1zm3.915 10L3.102 4h10.796l-1.313 7zM6 14a1 1 0 1 1-2 0 1 1 0 0 1 2 0m7 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0" />
            </svg>
            <p id="cartNotif">{cartCount}</p>
            <p>| £{total}</p>
          </span>
        </>
      ) : (
        <Navbar cartCount={cartCount} cartTotal={total} />
      )}

      {toastMsg && <Toast message={toastMsg} />}

      <main className="page">
        <Routes>
          <Route path="/" element={<Home />} />

          <Route
            path="/shop"
            element={<Shop products={products} setCart={setCart} />}
          />

          <Route
            path="/product/:slug"
            element={
              <Product
                products={products}
                setCart={setCart}
                setToastMsg={setToastMsg}
              />
            }
          />

          <Route
            path="/cart"
            element={
              <Cart cart={cart} total={total} setCart={setCart} />
            }
          />

          <Route
            path="/checkout"
            element={
              <Checkout
                cart={cart}
                total={total}
                setCart={setCart}
                setToastMsg={setToastMsg}
              />
            }
          />

          <Route path="/about" element={<About />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </main>
    </>
  );
}

/* ========== NAVBAR ========== */

function Navbar({ cartCount, cartTotal }) {
  return (
    <header className="navbar">
      <h2 className="logo">RAJA</h2>

      <nav className="nav-links pc">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/shop">Shop</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/cart">Cart</Link>
      </nav>

      <nav className="nav-links mobile">
        <Link to="/">
          {/* home icon */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1em"
            height="1em"
            viewBox="0 0 1024 1024"
            strokeWidth="0"
            fill="currentColor"
            stroke="currentColor"
            className="icon"
          >
            <path d="M946.5 505L560.1 118.8l-25.9-25.9a31.5 31.5 0 0 0-44.4 0L77.5 505a63.9 63.9 0 0 0-18.8 46c.4 35.2 29.7 63.3 64.9 63.3h42.5V940h691.8V614.3h43.4c17.1 0 33.2-6.7 45.3-18.8a63.6 63.6 0 0 0 18.7-45.3c0-17-6.7-33.1-18.8-45.2zM568 868H456V664h112v204zm217.9-325.7V868H632V640c0-22.1-17.9-40-40-40H432c-22.1 0-40 17.9-40 40v228H238.1V542.3h-96l370-369.7 23.1 23.1L882 542.3h-96.1z" />
          </svg>
        </Link>

        <Link to="/about">
          {/* user icon */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1em"
            height="1em"
            viewBox="0 0 24 24"
            strokeWidth="0"
            fill="currentColor"
            stroke="currentColor"
            className="icon"
          >
            <path d="M12 2.5a5.5 5.5 0 0 1 3.096 10.047 9.005 9.005 0 0 1 5.9 8.181.75.75 0 1 1-1.499.044 7.5 7.5 0 0 0-14.993 0 .75.75 0 0 1-1.5-.045 9.005 9.005 0 0 1 5.9-8.18A5.5 5.5 0 0 1 12 2.5ZM8 8a4 4 0 1 0 8 0 4 4 0 0 0-8 0Z" />
          </svg>
        </Link>

        <Link to="/shop">
          {/* shop icon */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1em"
            height="1em"
            fill="currentColor"
            className="icon"
            viewBox="0 0 16 16"
          >
            <path d="M2.97 1.35A1 1 0 0 1 3.73 1h8.54a1 1 0 0 1 .76.35l2.609 3.044A1.5 1.5 0 0 1 16 5.37v.255a2.375 2.375 0 0 1-4.25 1.458A2.37 2.37 0 0 1 9.875 8 2.37 2.37 0 0 1 8 7.083 2.37 2.37 0 0 1 6.125 8a2.37 2.37 0 0 1-1.875-.917A2.375 2.375 0 0 1 0 5.625V5.37a1.5 1.5 0 0 1 .361-.976zm1.78 4.275a1.375 1.375 0 0 0 2.75 0 .5.5 0 0 1 1 0 1.375 1.375 0 0 0 2.75 0 .5.5 0 0 1 1 0 1.375 1.375 0 1 0 2.75 0V5.37a.5.5 0 0 0-.12-.325L12.27 2H3.73L1.12 5.045A.5.5 0 0 0 1 5.37v.255a1.375 1.375 0 0 0 2.75 0 .5.5 0 0 1 1 0M1.5 8.5A.5.5 0 0 1 2 9v6h1v-5a1 1 0 0 1 1-1h3a1 1 0 0 1 1 1v5h6V9a.5.5 0 0 1 1 0v6h.5a.5.5 0 0 1 0 1H.5a.5.5 0 0 1 0-1H1V9a.5.5 0 0 1 .5-.5M4 15h3v-5H4zm5-5a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1zm3 0h-2v3h2z" />
          </svg>
        </Link>

        <Link to="/contact">
          {/* phone icon */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1em"
            height="1em"
            fill="currentColor"
            viewBox="0 0 16 16"
            className="icon"
          >
            <path d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.6 17.6 0 0 0 4.168 6.608 17.6 17.6 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.68.68 0 0 0-.58-.122l-2.19.547a1.75 1.75 0 0 1-1.657-.459L5.482 8.062a1.75 1.75 0 0 1-.46-1.657l.548-2.19a.68.68 0 0 0-.122-.58z" />
          </svg>
        </Link>

        <Link to="/cart">
          {/* cart icon */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1em"
            height="1em"
            strokeLinejoin="round"
            strokeLinecap="round"
            viewBox="0 0 24 24"
            strokeWidth="2"
            fill="none"
            stroke="currentColor"
            className="icon"
          >
            <circle r="1" cy="21" cx="9"></circle>
            <circle r="1" cy="21" cx="20"></circle>
            <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
          </svg>
        </Link>
      </nav>

      <span id="nav_cart_total">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="1em"
          height="1em"
          fill="currentColor"
          className="icon"
          viewBox="0 0 16 16"
        >
          <path d="M11.354 6.354a.5.5 0 0 0-.708-.708L8 8.293 6.854 7.146a.5.5 0 1 0-.708.708l1.5 1.5a.5.5 0 0 0 .708 0z" />
          <path d="M.5 1a.5.5 0 0 0 0 1h1.11l.401 1.607 1.498 7.985A.5.5 0 0 0 4 12h1a2 2 0 1 0 0 4 2 2 0 0 0 0-4h7a2 2 0 1 0 0 4 2 2 0 0 0 0-4h1a.5.5 0 0 0 .491-.408l1.5-8A.5.5 0 0 0 14.5 3H2.89l-.405-1.621A.5.5 0 0 0 2 1zm3.915 10L3.102 4h10.796l-1.313 7zM6 14a1 1 0 1 1-2 0 1 1 0 0 1 2 0m7 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0" />
        </svg>
        <p id="cartNotif">{cartCount}</p>
        <p>| £{cartTotal}</p>
      </span>
    </header>
  );
}

/* ========== PAGES ========== */

function Home() {
  return (
    <section className="home">
      <h1>Welcome to RAJA Fragrance</h1>
      <p>Browse our products!</p>
      <Link className="btn primary" to="/shop">
        Shop Now
      </Link>
      <h2>Featured products</h2>
      <Link className="link" to="/about">
        Learn more
      </Link>
    </section>
  );
}

function Shop({ products, setCart }) {
  const [search, setSearch] = useState("");

  const filteredProducts = products.filter((p) =>
    p.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <section className="shop">
      <input
        type="search"
        placeholder="Search perfumes..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="search-input"
      />

      <div className="product-grid">
        {filteredProducts.map((product) => {
          const { id, image, name, price, slug } = product;
          return (
            <article key={id} className="product-card">
              <img src={image} alt={name} />
              <Link to={`/product/${slug}`} className="product-name">
                {name}
              </Link>
              <p className="product-price">£{price}</p>
            </article>
          );
        })}
      </div>
    </section>
  );
}

function Product({ products, setCart, setToastMsg }) {
  const { slug } = useParams();

  const product = products.find((p) => p.slug === slug.toString());
  if (!product) return <Error />;

  const { id, name, image, color, description, price, inStock } = product;

  function addToCart(item) {
    setCart((prev) => {
      const existing = prev.find((p) => p.id === item.id);
      if (existing) {
        return prev.map((p) =>
          p.id === item.id ? { ...p, quantity: p.quantity + 1 } : p
        );
      }
      return [...prev, { ...item, quantity: 1 }];
    });
    setToastMsg("Item added to cart 🛒");
  }

  return (
    <section className="product-detail">
      <img src={image} alt={name + id} />
      <div className="product-detail-info">
        <h2>{name}</h2>
        <p className="product-price">£{price}</p>
        <p>Color: {color}</p>
        <p>{description}</p>
        <button
          onClick={() => addToCart(product)}
          disabled={!inStock}
          className="btn primary"
        >
          {inStock ? "Add to cart" : "Out of stock"}
        </button>
      </div>
    </section>
  );
}

/* ========== TOAST ========== */

function Toast({ message }) {
  return (
    <div className="toast">
      <div id="checkbox">
        <div id="checkmark"></div>
      </div>
      <p>{message}</p>
    </div>
  );
}

/* ========== CART ========== */

function Cart({ cart, total, setCart }) {
  function deleteCartItem(item) {
    setCart((prev) => prev.filter((p) => p.id !== item.id));
  }

  function increaseCartQuantity(item) {
    setCart((prev) =>
      prev.map((p) =>
        p.id === item.id ? { ...p, quantity: p.quantity + 1 } : p
      )
    );
  }

  function decreaseCartQuantity(item) {
    setCart((prev) =>
      prev.map((p) =>
        p.id === item.id && p.quantity > 1
          ? { ...p, quantity: p.quantity - 1 }
          : p
      )
    );
  }

  if (cart.length === 0) {
    return <p className="empty-cart">Your cart is empty.</p>;
  }

  return (
    <section className="cart">
      {cart.map((item) => (
        <div key={item.id} className="cart-item">
          <img src={item.image} alt={item.name} />
          <div className="cart-item-info">
            <p>
              {item.name} – £{item.price}
            </p>
            <div className="cart-qty">
              <button onClick={() => decreaseCartQuantity(item)}>-</button>
              <span>{item.quantity}</span>
              <button onClick={() => increaseCartQuantity(item)}>+</button>
            </div>
            <button
              onClick={() => deleteCartItem(item)}
              className="link danger"
            >
              Remove item
            </button>
          </div>
        </div>
      ))}

      <div className="cart-summary">
        <p>Total: £{total}</p>
        <Link className="btn primary" to="/checkout">
          Check out
        </Link>
      </div>
    </section>
  );
}

/* ========== CHECKOUT ========== */

function Checkout({ total, cart, setCart, setToastMsg }) {
  const nav = useNavigate();
  const form = useRef(null);

  const [formInputData, setFormInputData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    postcode: "",
  });

  useEffect(() => {
    form.current?.focus();
  }, []);

  function ctrlInput(e) {
    const { name, value } = e.target;
    setFormInputData((prev) => ({ ...prev, [name]: value }));
  }

  function checkOut(e) {
    e.preventDefault();

    const orderId = Math.floor(Math.random() * 1000000);
    const order_time = new Date().toLocaleString();

    const { name, email, phone, address, city, postcode } = formInputData;

    const order = {
      orderId,
      time: order_time,
      name,
      email,
      phone,
      address,
      city: city.toUpperCase(),
      postcode: postcode.toUpperCase(),
      items: cart
        .map(
          (item) =>
            `\n    ${item.name} x${item.quantity} — £${
              item.quantity * item.price
            }`
        )
        .join("\n"),
      total,
    };

    emailjs
      .send(
        "service_ns8ejfa",
        "template_reaktal",
        order,
        "1yOck1z4gr8NcXnNe"
      )
      .then(() => {
        return emailjs.send(
          "service_ns8ejfa",
          "template_yrks50l",
          order,
          "1yOck1z4gr8NcXnNe"
        );
      })
      .then(() => {
        setCart([]);
        setToastMsg(`Order #${orderId} sent! We'll contact you soon.`);
        nav("/");
        form.current?.reset();
      })
      .catch(() => {
        alert("Failed to send order.");
        setToastMsg("Unable to send order ❌");
      });
  }

  if (cart.length < 1) {
    return <Error />;
  }

  return (
    <section id="checkout">
      <h2>Checkout</h2>
      <p className="checkout-total">Total: £{total}</p>

      <form method="POST" ref={form} onSubmit={checkOut}>
        <div className="input-group">
          <div className="input-field">
            <input
              type="text"
              name="name"
              value={formInputData.name}
              onChange={ctrlInput}
              required
              className="input"
              placeholder=" "
            />
            <label htmlFor="name" className="user-label">
              Full name
            </label>
          </div>

          <div className="input-field">
            <input
              type="email"
              name="email"
              value={formInputData.email}
              onChange={ctrlInput}
              required
              className="input"
              placeholder=" "
            />
            <label className="user-label" htmlFor="email">
              Email
            </label>
          </div>

          <div className="input-field">
            <input
              type="text"
              name="phone"
              placeholder="07123456789"
              pattern="[0][0-9]{10}"
              maxLength={11}
              value={formInputData.phone}
              onChange={ctrlInput}
              required
              className="input"
            />
            <label className="user-label" htmlFor="phone">
              Phone number
            </label>
          </div>

          <div className="input-field">
            <input
              type="text"
              name="address"
              value={formInputData.address}
              onChange={ctrlInput}
              required
              className="input"
              placeholder=" "
            />
            <label className="user-label" htmlFor="address">
              Address line 1
            </label>
          </div>

          <div className="input-field">
            <input
              type="text"
              name="city"
              value={formInputData.city}
              onChange={ctrlInput}
              required
              className="input"
              placeholder=" "
            />
            <label className="user-label" htmlFor="city">
              City
            </label>
          </div>

          <div className="input-field">
            <input
              type="text"
              name="postcode"
              value={formInputData.postcode}
              onChange={ctrlInput}
              required
              className="input"
              placeholder=" "
            />
            <label className="user-label" htmlFor="postcode">
              Postcode
            </label>
          </div>

          <div className="checkout-consent">
            <label>
              <input type="checkbox" name="understand" required />
              <small>
                I understand this is an order request and payment is processed
                afterwards.
              </small>
            </label>
            <label>
              <input type="checkbox" name="terms" required />
              <small>
                By placing this order, you agree to our{" "}
                <Link to="/terms">terms and conditions</Link>.
              </small>
            </label>
          </div>
        </div>

        <button type="submit" className="btn primary full">
          Checkout £{total}
        </button>
      </form>
    </section>
  );
}

/* ========== OTHER PAGES ========== */

function About() {
  return (
    <section className="text-page">
      <h2>About</h2>
      <h3>What is RAJA Fragrance</h3>
      <p>
        RAJA Fragrance is a small independent brand offering high-quality,
        long-lasting scents inspired by luxury perfumes. Our goal is to provide
        premium fragrance experiences at affordable prices.
      </p>
      <h3>What type of perfumes</h3>
      <p>
        We specialise in bold and rich scents including oud, amber, and sweet
        blends. Each fragrance is selected for its longevity and strong
        projection.
      </p>
      <h3>Frequently asked questions</h3>
      <h4>How do I pay?</h4>
      <p>After placing your order, we will contact you to arrange payment.</p>
      <h4>How long is delivery?</h4>
      <p>Orders are delivered via Royal Mail within a few days.</p>
      <h4>Can I return items?</h4>
      <p>Returns are not accepted once items are shipped.</p>
    </section>
  );
}

function Terms() {
  return (
    <section className="text-page">
      <h2>Terms and conditions</h2>
      <ul>
        <li>This is an order request, not instant purchase.</li>
        <li>Payment is arranged after confirmation.</li>
        <li>Items are shipped manually via Royal Mail.</li>
        <li>No refunds after shipping (or whatever you decide).</li>
      </ul>
    </section>
  );
}

function Contact() {
  return (
    <section className="text-page">
      <h2>Contact and feedback</h2>
      <p>Email, phone, or social links can go here.</p>
      <ul>
        <li>Order request only, not instant purchase.</li>
        <li>Payment is arranged after confirmation.</li>
        <li>Items are shipped manually via Royal Mail.</li>
      </ul>
    </section>
  );
}

function Error() {
  return <p className="error-page">Error 404 – Page not found.</p>;
}


<!-- New APP CSS -->
html {
  /* Base font size (18px if browser default is 16px) */
  font-size: 1.125rem;
  line-height: 1.6;

  /* Uncomment if you want OS-level light/dark */
  color-scheme: light dark;
}

*,
*::before,
*::after {
  margin: 0;
  outline: 0;
  border: 0;
  padding: 0;
  box-sizing: border-box;
  scroll-behavior: smooth;

  /* Layout debugging */
  /* outline: 1px solid limegreen !important; */
}

@media (prefers-reduced-motion: reduce) {
  * {
    animation: none !important;
    transition: none !important;
  }
}

.mobile{
  visibility: hidden;
}
.PC{
  visibility: visible;
}

:root {
  /* ========================
     BRAND (Luxury Accent)
  ======================== */
  --gold: #c9a96e;        /* your chosen soft gold */
  --gold-soft: #e6c98b;   
  --silver: #a1a1aa;      /* softer, modern silver */

  /* ========================
     DARK MODE (default)
  ======================== */
  --bg: #0b0b0c;          /* deep luxury black */
  --bg-alt: #212121;      /* your choice → very clean */


  /*--bg-alt: #0b0b0c;           deep luxury black */
  /* --bg: #212121;      your choice → very clean */


  --border: #2a2a2e;

  --text: #f5f5f5;
  --text-muted: #a1a1aa;  /* your choice → KEEP */

  --accent: var(--gold);
}

@media (prefers-color-scheme: light) {
  :root {
     /*--bg-alt: #f3f4f6;     soft neutral, not too blue */
    /* --bg: #e5e7eb; */
     --bg: #f3f4f6;   /*   soft neutral, not too blue */
    --bg-alt: #e5e7eb;

    --text: #0b0b0c;
    --text-muted: #6b7280;

    /* Switch vibe in light mode */
    --accent: var(--silver);
  }
}
body {
  font-family: system-ui, -apple-system, BlinkMacSystemFont, sans-serif;
  background-color: var(--bg);
  color: var(--text);
  margin-inline: auto;
}

.container {
  width: min(100% - 2rem, 70rem);
  margin-inline: auto;
}
img {
  max-width: 100%;
  display: block;
  /* aspect-ratio: 16 / 9; */
  /* object-fit: cover; */
}

/* NavBar */
.back{
  background-color: inherit;
  outline: none;
  border: 0;
  display: flex;
  font-size: 17px;
  color: var(--accent);
  margin: 15px;
  align-items: center;
}
.back> span{
  border-left: 3px solid var(--accent);
  border-bottom: 3px solid var(--accent);
  display: inline-block;
  width: 20px;
  height: 20px;
  transform: rotate(45deg);
}
.navbar{
  display: grid;
  /* grid-template-columns: 2fr 1fr 2fr; */
  align-items: center;
  justify-items: center;
  /* grid-column-gap: 10px; */
  grid-row-gap: 10px;
  padding: 10px 5px 0px 5px;
  box-shadow: 0px -5px 10px 5px var(--gold);
  background-color: var(--bg-alt);
  color: var(--text-muted);
}
.navbar > h2 { grid-area: 1 / 1 / 2 / 2; color: var(--gold); }
.navbar > nav { grid-area: 1 / 2 / 2 / 4; }
hr { grid-area: 2 / 1 / 3 / 4; }
#nav_cart_total { grid-area: 1 / 4 / 2 / 4; position: relative;}
#nav_cart_total>p { display: inline; }
.nav_cart_total{position: absolute; right: 5px; top: 10px; display: flex;}
.nav_cart_total>#cartNotif { margin-left: 10px; }



#cartNotif {
  background-color: var(--gold);
  color: var(--bg-alt);
  border-radius: 50%;
  width: 15px;
  font-size: 9px;
  height: 15px;
  text-align: center;
  padding-bottom: 0px;
  top:-3px;
  margin-left: -5px;
  position: absolute;
}


nav>a{
  text-decoration: none;
  color: var(--text-muted);  
  transition: all ease-in-out 0.3s;
  cursor: pointer;
}

nav>a:hover{
  color: var(--gold);
  transform: translateY(-5px) scale(1.15);
  /* transform: translateY(-3px); */
}
hr{
  /* color: var(--silver); */
  width: 98%;
  /* justify-content: center; */
  grid-area: 2 / 1 / 4 / 5;
  opacity: 0.4;
  /* border-top: 1px solid var(--accent); */
  /* color: red; */
}

/* From Uiverse.io by akshat-patel28 */ 
nav {
  display: flex;
  width: 100%;
  /* background-color: #c9a96e; */
  /* width: 250px;
  height: 40px; */
  align-items: center;
  justify-content: space-around;
  /* border-radius: 10px; */
  /* box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px, */
    /* rgba(245, 73, 144, 0.5) 5px 10px 15px; */
}

.icon {
  font-size: 20px;
}
/* ---------- */


/* button {
  background: var(--accent);
  color: black;
  border: none;
  padding: 0.5rem 1rem;
  border-radius: 6px;
  cursor: pointer;
}

button:hover {
  opacity: 0.85;
} */

/* Toast */
.toast{
  border-radius: 7px;
  position: fixed;
  bottom: 7rem;
  right: 2rem;
  background-color: var(--bg);
  color: var(--text);
  padding: 10px 15px;
  display: flex;
}
.toast >p{
  display: block;
  padding-left: 1rem;
}
#checkbox{
  background-color:green;
  border-radius:50%;
  width:30px;
  height:30px;
  display: inline-block;
}
#checkmark{
  border-bottom: 3px solid white;
  border-right: 3px solid white;
  width: 10px;
  height: 20px;
  margin-left: 9px;
  padding-top: 20px;
  transform: rotate(45deg);
}
/* ---------- */


/* Checkout Page */

/* Input Fields */

.input-group {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  justify-content: center;
  align-items: center;
}

/* Each input wrapper */
.input-field {
  position: relative;
}
.input-group small{
  width: 200px;
}

/* Input styling */
.input {
  padding: 0.7rem 2rem;
  border: 1.5px solid var(--border);
  border-radius: 0.8rem;
  background: var(--bg-alt);
  /* padding: 1rem; */
  font-size: 1rem;
  color: var(--gold);
  transition: 0.2s ease;
}

/* Label */
.user-label {
  position: absolute;
  left: 12px;
  top: 50%;
  transform: translateY(-50%);
  color: var(--text-muted);
  pointer-events: none;
  transition: 0.2s ease;
  background: var(--bg-alt);
  padding: 0 4px;
}

/* Focus + filled state */
.input:focus,
.input:not(:placeholder-shown) {
  outline: none;
  border-color: var(--gold);
  color: var(--gold);
}

/* Floating effect */
.input:focus + .user-label,
.input:not(:placeholder-shown) + .user-label{
  top: 0;
  transform: translateY(-50%) scale(0.85);
  color: var(--gold-soft);
  /* border-color: var(--gold); */
  outline: none;
}

.input:invalid{
  border-color: var(--silver);
}

/* input:-internal-autofill-selected {
  background-color: green !important;
} */

.input:internal-autofill-selected {
  background: rgba(255, 255, 255, 0.03);
  backdrop-filter: blur(8px);
  color:green ;
  border: 1px solid rgba(255, 255, 255, 0.08);
}

.user-label {
  background: var(--bg-alt); /* important so text doesn’t overlap */
}

#checkout>h2{
  text-align: center;
  color: var(--accent);
  padding-bottom: 20px;
}
/* input[type="email" i] {
    padding-block: 1px;
    padding-inline: 2px;
} */
/* ----------- */
/* input:-internal-autofill-selected {} */


.productDisplay {
  background: var(--bg-alt);
  padding: 1rem;
  border-radius: 10px;
  margin: 1rem 0;
}

/* mobile view  */
/* @media (max-width: 768px) { */
@media (max-width: 670px) {


  .navbar {
    display: grid;
    /* grid-template-columns: auto 1fr auto; */
    grid-template-rows: repeat(2, 1fr);
    grid-column-gap: 10px;
    grid-row-gap: 0px;
  }

  .navbar > h2 { grid-area: 1 / 1 / 2 / 2; }
  /* #nav_cart_total{ grid-area: 1 / 3 / 2 / 5; } */
  .navbar > nav{ grid-area: 2 / 1 / 3 / 5; }
  hr{ grid-area: 3 / 1 / 4 / 5; }

  .mobile{
    visibility: visible;
  }
  .PC{
    visibility: hidden;
  }

}