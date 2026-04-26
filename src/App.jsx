
    
    //   
    //   const total = cart.reduce((prevValue, item)=> prevValue + (item.price * item.quantity),0).toFixed(2);
    //   const cartCount = cart.reduce((sum,item)=>sum+item.quantity,0)
    
    //   // Navigation control to go back
    //   const location = useLocation();
//   const navigate = useNavigate();

//   // Pages we don't want nav bar in and wanna replace with back
//   const isProductPage = location.pathname.startsWith("/product/");
//   const isCheckoutPage = location.pathname.startsWith("/checkout");
//   const isTermsPage = location.pathname.startsWith("/terms");

//   return (
  //     <>
  //       {/* Navbar only needs the COUNT, not full cart */}
  //       {isProductPage || isCheckoutPage || isTermsPage ? (
    //         <>
    //         <button className="back" onClick={() => navigate(-1)}><span ></span> Back</button>
//         <span className="nav_cart_total" >
//           <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" class="icon" viewBox="0 0 16 16">
//             <path d="M11.354 6.354a.5.5 0 0 0-.708-.708L8 8.293 6.854 7.146a.5.5 0 1 0-.708.708l1.5 1.5a.5.5 0 0 0 .708 0z"/>
//             <path d="M.5 1a.5.5 0 0 0 0 1h1.11l.401 1.607 1.498 7.985A.5.5 0 0 0 4 12h1a2 2 0 1 0 0 4 2 2 0 0 0 0-4h7a2 2 0 1 0 0 4 2 2 0 0 0 0-4h1a.5.5 0 0 0 .491-.408l1.5-8A.5.5 0 0 0 14.5 3H2.89l-.405-1.621A.5.5 0 0 0 2 1zm3.915 10L3.102 4h10.796l-1.313 7zM6 14a1 1 0 1 1-2 0 1 1 0 0 1 2 0m7 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0"/>
//           </svg>
//           <p id="cartNotif">{cartCount}</p>
//           <p>| £{total}</p>
//         </span>
//         </>

//       ) : (
  //         <Navbar cartCount={cartCount} cartTotal={total}/>
  //       )}
  //       {toastMsg && <Toast message={toastMsg} />}
  
  
  //       <Routes>
  //         {/* Static pages */}
//         <Route path="/" element={<Home />} />

//         {/* Shop displays all products */}
//         {/* setCart is passed DOWN so children can update cart */}
//         <Route
//           path="/shop"
//           element={<Shop products={products} setCart={setCart} />}
//         />

//         {/* Dynamic product page */}
//         {/* Uses :slug from URL */}
//         <Route
//           path="/product/:slug"
//           element={
  //             <Product
  //               products={products}
//               setCart={setCart}
//               setToastMsg={setToastMsg}
//             />
//           }
//         />



//         {/* Cart page ONLY reads cart */}
//         <Route path="/cart" element={
//           <Cart 
//             cart={cart} 
//             total={total} 
//             setCart={setCart} 
//           />
//         } />

//         {/* CheckOut setToast messages asw */}
//         <Route path="/checkout" element={
//           <Checkout 
//           cart={cart} 
//           total={total} 
//           setCart={setCart} 
//           setToastMsg={setToastMsg}
//           />} 
//         />

//         <Route path="/about" element={<About />} />

//         <Route path="/terms" element={<Terms />} />
//         <Route path="/contact" element={<Contact />} />

//         {/* Catch all Url errors */}
//         <Route path="*" element={<Error />} />
//       </Routes>
//      </>
//   );
// }

// /* =======================
// NAVBAR cart<1
// ======================= */
// function Navbar({ cartCount,cartTotal }) {
//   return (
//     <div className="navbar">
//       <h2>RAJA</h2>
//       <nav className=" PC">
//         <Link to="/">Home  </Link>
//         <Link to="/about">About </Link>
//         <Link to="/shop">Shop  </Link>
//         <Link to="/contact">Contact </Link>
//         <Link to="/cart">Cart  </Link>
//       </nav>
//       <nav className="mobile">
//         <Link to="/">
//           <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 1024 1024" stroke-width="0" fill="currentColor" stroke="currentColor" class="icon">
//             <path d="M946.5 505L560.1 118.8l-25.9-25.9a31.5 31.5 0 0 0-44.4 0L77.5 505a63.9 63.9 0 0 0-18.8 46c.4 35.2 29.7 63.3 64.9 63.3h42.5V940h691.8V614.3h43.4c17.1 0 33.2-6.7 45.3-18.8a63.6 63.6 0 0 0 18.7-45.3c0-17-6.7-33.1-18.8-45.2zM568 868H456V664h112v204zm217.9-325.7V868H632V640c0-22.1-17.9-40-40-40H432c-22.1 0-40 17.9-40 40v228H238.1V542.3h-96l370-369.7 23.1 23.1L882 542.3h-96.1z"></path>
//           </svg>
//         </Link>
//         <Link to="/about">
//           <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" stroke-width="0" fill="currentColor" stroke="currentColor" class="icon">
//             <path d="M12 2.5a5.5 5.5 0 0 1 3.096 10.047 9.005 9.005 0 0 1 5.9 8.181.75.75 0 1 1-1.499.044 7.5 7.5 0 0 0-14.993 0 .75.75 0 0 1-1.5-.045 9.005 9.005 0 0 1 5.9-8.18A5.5 5.5 0 0 1 12 2.5ZM8 8a4 4 0 1 0 8 0 4 4 0 0 0-8 0Z"></path>
//           </svg>
//         </Link>
//         <Link to="/shop">
//           <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" class="icon" viewBox="0 0 16 16">
//             <path d="M2.97 1.35A1 1 0 0 1 3.73 1h8.54a1 1 0 0 1 .76.35l2.609 3.044A1.5 1.5 0 0 1 16 5.37v.255a2.375 2.375 0 0 1-4.25 1.458A2.37 2.37 0 0 1 9.875 8 2.37 2.37 0 0 1 8 7.083 2.37 2.37 0 0 1 6.125 8a2.37 2.37 0 0 1-1.875-.917A2.375 2.375 0 0 1 0 5.625V5.37a1.5 1.5 0 0 1 .361-.976zm1.78 4.275a1.375 1.375 0 0 0 2.75 0 .5.5 0 0 1 1 0 1.375 1.375 0 0 0 2.75 0 .5.5 0 0 1 1 0 1.375 1.375 0 1 0 2.75 0V5.37a.5.5 0 0 0-.12-.325L12.27 2H3.73L1.12 5.045A.5.5 0 0 0 1 5.37v.255a1.375 1.375 0 0 0 2.75 0 .5.5 0 0 1 1 0M1.5 8.5A.5.5 0 0 1 2 9v6h1v-5a1 1 0 0 1 1-1h3a1 1 0 0 1 1 1v5h6V9a.5.5 0 0 1 1 0v6h.5a.5.5 0 0 1 0 1H.5a.5.5 0 0 1 0-1H1V9a.5.5 0 0 1 .5-.5M4 15h3v-5H4zm5-5a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1zm3 0h-2v3h2z"/>
//           </svg>
//         </Link>

//         <Link to="/contact">
//           <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-telephone" viewBox="0 0 16 16">
//             <path d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.6 17.6 0 0 0 4.168 6.608 17.6 17.6 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.68.68 0 0 0-.58-.122l-2.19.547a1.75 1.75 0 0 1-1.657-.459L5.482 8.062a1.75 1.75 0 0 1-.46-1.657l.548-2.19a.68.68 0 0 0-.122-.58zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.68.68 0 0 0 .178.643l2.457 2.457a.68.68 0 0 0 .644.178l2.189-.547a1.75 1.75 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.6 18.6 0 0 1-7.01-4.42 18.6 18.6 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877z"/>
//           </svg>
//         </Link>
//         <Link to="/cart">
//           <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" stroke-linejoin="round" stroke-linecap="round" viewBox="0 0 24 24" stroke-width="2" fill="none" stroke="currentColor" class="icon">
//             <circle r="1" cy="21" cx="9"></circle>
//             <circle r="1" cy="21" cx="20"></circle>
//             <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
//           </svg>
//         </Link>
//       </nav>

//       {/* Cart number updates like a Notif */}
//       <span id="nav_cart_total">
//         <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" class="icon" viewBox="0 0 16 16">
//           <path d="M11.354 6.354a.5.5 0 0 0-.708-.708L8 8.293 6.854 7.146a.5.5 0 1 0-.708.708l1.5 1.5a.5.5 0 0 0 .708 0z"/>
//           <path d="M.5 1a.5.5 0 0 0 0 1h1.11l.401 1.607 1.498 7.985A.5.5 0 0 0 4 12h1a2 2 0 1 0 0 4 2 2 0 0 0 0-4h7a2 2 0 1 0 0 4 2 2 0 0 0 0-4h1a.5.5 0 0 0 .491-.408l1.5-8A.5.5 0 0 0 14.5 3H2.89l-.405-1.621A.5.5 0 0 0 2 1zm3.915 10L3.102 4h10.796l-1.313 7zM6 14a1 1 0 1 1-2 0 1 1 0 0 1 2 0m7 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0"/>
//         </svg>
//         <p id="cartNotif">{cartCount}</p>
//         <p>| £{cartTotal}</p>
//       </span>
//     </div>
//   );
// }

// /* =======================
// HOME PAGE
// ======================= */
// function Home() {
//   return(
//     <>
//         <h1>Welcome to RAJA Fragrance</h1>
//         <p>Browse our products!</p>
//         <Link to="/shop">Shop Now </Link>
//         <h2>Here are some of our featured products</h2>
//         <Link to="/about">Learn More </Link>
//     </>) ;
// }

// /* ======================
// SHOP PAGE
// ======================= */
// function Shop({ products, setCart }) {
//   // const [filter,setFilter] = useState(null);
//   const [search,setSearch] = useState('');

//   const filterProducts = products.filter(p => p.name.toLowerCase().includes(search.toLowerCase()))
//   return (
//     <>
//       <input type="search" name="" placeholder="Search perfumes..." value={search} onChange={(e)=> setSearch(e.target.value)} />
//       {filterProducts.map((product) => {
//         // Destructuring for readability ONLY
//         const { id, image, name, price,slug } = product;

//         return (
//           <div key={id} className="productDisplay">
//             <img src={image} alt={name} />

//             {/* Link to dynamic product page */}
//             <Link to={`/product/${slug}`}>{name}</Link>

//             <p>Price: £{price}</p>

//             {/* 
//             Add-to-cart is intentionally OFF here for now
//             Decision pending: Shop vs Product page
//             */}
//           </div>
//         );
//       })}
//     </>
//   );
// }

// /* =======================
// Dynamic Product PAGES
// ======================= */
// function Product({ products, setCart, setToastMsg }) {

//   // Get ID from URL
//   const { slug } = useParams();

//   // Find the ONE product that matches the ID
//   // find() does NOT mutate
//   const product = products.find(
//     (p) => p.slug === slug.toString()
//   );
//   if (!product) {
//     return<Error />
//   }

//   // Safe destructuring because product exists
//   const { id, name, image, color, description, price, inStock } = product;

//   function addToCart(product){

//     setCart(prev => {
//     const existing = prev.find(item => item.id === product.id);

//     if (existing) {
//       // quantity already exists → update it
//       return prev.map(item =>
//         item.id === product.id
//           ? { ...item, quantity: item.quantity + 1 }
//           : item
//       );
//     }

//     // product not in cart → create quantity
//     return [...prev, { ...product, quantity: 1 }];
//   });
//   // setToastMsg(true)  @
//   setToastMsg("Item added to cart 🛒");
//   }

//   return (
//     <div className="productDisplay">
//       <img src={image} alt={name+id} />
//       <p>Price: £{price}</p>
//       <p>Color: {color}</p>
//       <p>{description}</p>

//       {/* Simple add-to-cart (no quantity yet) */}
//       <button onClick={() => addToCart(product)} disabled={!inStock}>
//         {inStock ? "Add to cart" : "Out of stock"}
//       </button>
//     </div>
//   );
// }

// /* =======================
// Toast component
// ======================= */

// function Toast({ message }) {
//   return (
//   <div className="toast">
//     <div id='checkbox'>
//       <div id='checkmark'> </div>
//     </div>
//     <p>{message}</p>
//   </div>);
// }

// /* =======================
// CART PAGE
// ======================= */
// function Cart({ cart,total,setCart}) {
//   function deleteCartItem(item){
//     setCart(prev => prev.filter((p) => p.id !== item.id));
//   }
//     function increaseCartQuantity(item) {
//     setCart(prev =>
//       prev.map(p =>
//         p.id === item.id
//           ? { ...p, quantity: p.quantity + 1 }
//           : p
//       )
//     );
//   }
//   function decreaseCartQuantity(item) {
//     setCart(prev =>
//       prev
//       .map(p =>
//         p.id === item.id 
//         // Note: just incase you change your mind to auto-deleting item once
//         // comment next line and uncomment 5th line(filter) after this
//         && p.quantity > 1
//           ? { ...p, quantity: p.quantity - 1 } 
//           : p
//       )
//       // .filter((p) => p.quantity>0)
//     );
//   }

//   return (
//     <>
//     {/* If cart is empty display this */}
//     {cart.length === 0 && <p>HEY ADD SMT, CART IS EMPTY</p>}

//     {/* Mappping out the items being added to cart*/}
//     {cart.map((item, index) => (

//       <div key={item.id}>

//         <img src={item.image} alt="" />
//         {item.name} is worth £{item.price} x{item.quantity}

//         <button onClick={()=> decreaseCartQuantity(item)}>-</button>        
//         <span>{item.quantity}</span>
//         <button onClick={()=> increaseCartQuantity(item)}>+</button>
//         <button onClick={()=> deleteCartItem(item)}>Remove Item{/* delete/basket icon */}</button>
        
//       </div>
//     ))}
//     {cart.length >= 1 && <Link to='/checkout'>Check Out £{total}</Link>}
    
//     </>
//   );
// }


// /* =======================
// CheckOut PAGES
// ======================= */
// function Checkout({total, cart ,setCart,setToastMsg}) {
  

//   const nav = useNavigate();

//   const form = useRef(null);

//   const [formInputData,setFormInputData] = 
//   useState({ 
//     name: '',
//     email:'',
//     phone: '',
//     address:'',
//     city:'',
//     postcode:''
//   })

//   useEffect(()=>{
//     form.current?.focus();
//   })
   
//   function ctrlInput(e){
//     const {name, value} = e.target
//     setFormInputData( prev=> ({...prev,[name]:value}))
//   }
//   function checkOut(e){
    
//     // I might also have a randomiser to keep records so no one scammed
//     const orderId = Math.floor(Math.random()*1000000);

//     const order_time = new Date().toLocaleString();

//     // const time = Temporal.Now.plainTimeISO().toString();

//     // console.log("Current Time:", time);

//     e.preventDefault()
//     console.table(cart);
//     console.table(formInputData);
    
//       // Send Order Request to EmailJS
      
//     const {name,email,phone,address,city,postcode} = formInputData;
//     const order = {
     
//       orderId:orderId,
//       time:order_time,

//       name:name,
//       email:email,
//       phone:phone,
//       address:address,
//       city:city.toUpperCase(),
//       postcode:postcode.toUpperCase(),
//       items: cart.map( item=> `\n    ${item.name} x${item.quantity} — £${item.quantity* item.price}`).join('\n'),
//       total:total,
      
//     }
    
//     // {/* @Important Next task */}
//     // Sends an Email to Raja about an order request.
//     emailjs.send(
//       "service_ns8ejfa",
//       "template_reaktal",
//       order,
//       "1yOck1z4gr8NcXnNe"
//     )
//     .then(() => {
//       return emailjs.send(
//       "service_ns8ejfa",
//       "template_yrks50l",
//       order,
//       "1yOck1z4gr8NcXnNe"
//       )
//     })
//     .then(() => {
//       // alert("Order sent successfully!✅");
//       setCart([]);
//       setToastMsg(`Order #${orderId} sent! We'll contact you soon.`);
//       nav('/');
//       form.current?.reset();
//     }).catch((error) => {
//       console.log(error);
//       alert("Failed to send order.");
//       setToastMsg(`Unable to send Order ❌`);
//     });
//     console.table(order);

//     // Not sure but wanna send mail and notify to customer about item
//     // Customer Email confirmation Mail.
//   }




// // To prevent a Checkout Page on reload
//   if (cart.length < 1) {
//     return (<Error/>)
//   }
//    else  return (
//   <div id="checkout">
//     <h2>Checking Out here</h2>

//     {/* { ?:<></>} */}
//     {/* <h2>Total price : {total}</h2> */}
//     <form method='POST' ref={form} onSubmit={checkOut}>
//       <div className="input-group">
//         <div className="input-field">
//           <input type="text" name="name" value={formInputData.name} onChange={ctrlInput} required className="input" placeholder=" "/>
//           <label htmlFor="name" className="user-label">Full Name:</label>
//         </div>

//         <div className="input-field">
//           <input type="email" name="email" value={formInputData.email} onChange={ctrlInput} required className="input" placeholder=" "/> 
//           <label className="user-label" htmlFor="email" >Email:</label>
//         </div>

//         <div className="input-field">
//           <input type="text" name="phone" placeholder="07123456789" pattern="[0][0-9]{10}" maxLength={11} value={formInputData.phone} onChange={ctrlInput} required class="input"/> 
//           <label className="user-label" htmlFor="phone">Phone Number</label> 
//         </div>

//         <div className="input-field">
//           <input type="text" name="address" value={formInputData.address} onChange={ctrlInput} required class="input" placeholder=" "/> 
//           <label className="user-label" htmlFor="address">Address Line 1:</label> 
//         </div>
        
//         <div className="input-field">
//           <input type="text" name="city" value={formInputData.city} onChange={ctrlInput} required class="input" placeholder=" "/> 
//           <label className="user-label" htmlFor="city">City:</label> 
//         </div>

//         <div className="input-field">
//           <input type="text" name="postcode" value={formInputData.postcode} onChange={ctrlInput} required class="input" placeholder=" "/> 
//           <label className="user-label" htmlFor="postcode"> Postcode:</label> 
//         </div>
//         <span>
//           <input type="checkbox" name="understand" required/><small>I understand this is an order request and would process payment afterwards</small> 
//           <input type="checkbox" name="terms" required/><small>By placing this order, you agree to our <Link to='/terms'>terms and conditions</Link></small> 
//         </span>
//       </div>
      
//       <button type="submit" >CheckOut £{total}</button> 

//     </form>
//   </div>);
// }

// /* =======================
// COMPONENTS
// ======================= */
// // @Important Next Task

// /* =======================
// OTHER PAGES
// ======================= */
// function About() {
//   return (
//   <>
//     <h2>ABOUT</h2>
//     <h3>What is RAJA Fragrance</h3>
//     <p>RAJA Fragrance is a small independent brand offering high-quality, long-lasting scents inspired by luxury perfumes. Our goal is to provide premium fragrance experiences at affordable prices.</p>
//     <h3>What type of perfumes (oud, luxury, etc.)</h3>
//     <p>We specialise in bold and rich scents including oud, amber, and sweet blends. Each fragrance is selected for its longevity and strong projection.</p>



//     {/* FAQ Accordion opitonal  */}
//     <h3>Frequently Asked Questions</h3>
//     <h4>Q: How do I pay?</h4>
//     <p>A: After placing your order, we will contact you to arrange payment.</p>
//     <h4>Q: How long is delivery?</h4>
//     <p>A: Orders are delivered via Royal Mail within a few days.</p>
//     <h4>Q: Can I return items?</h4>
//     <p>A: Returns are not accepted once items are shipped.</p>
    
//   </>);
// }

// function Terms() {
//   return (
//     <>
//       <h2>Terms and Conditions</h2>
//       <ul>
//         <li>- This is an order request, not instant purchase</li>
//         <li>- Payment is arranged after confirmation</li>
//         <li>- Items are shipped manually via Royal Mail</li>
//         <li>- No refunds after shipping (or whatever you decide)</li>
//       </ul>
//     </>
//   );
// }
// function Contact() {
//   return (
//     <>
//       <h2>Contact and FeedBack</h2>
//       <ul>
//         <li>- This is an order request, not instant purchase</li>
//         <li>- Payment is arranged after confirmation</li>
//         <li>- Items are shipped manually via Royal Mail</li>
//         <li>- No refunds after shipping (or whatever you decide)</li>
//       </ul>
//     </>
//   );
// }
// function Error() {
//   return <>Error 404 Page Not Found</>;
// }


// @ REAL CODE 


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

import heroVideo from './heroVid.mp4';
// import { type } from "@testing-library/user-event/dist/type";


export default function App() {
  return (
    <BrowserRouter>
      <AppLayout />
    </BrowserRouter>
  );
}


// /* =======================
// APP (State Owner)
// ======================= */

function AppLayout() {

  // Cart state lives at the top level
  // This is the SINGLE source of truth for cart data 
  const [cart, setCart] = useState(() => {

    // Uncomment to Store in Localstorage 👇
    const saved = localStorage.getItem("cart");

    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {

    localStorage.setItem("cart", JSON.stringify(cart));

  }, [cart]);

  const [toastMsg, setToastMsg] = useState(null); // Toast state is empty
  // {message: '', type: 'success'||'error'||'info'}
  
  useEffect(() => {
    //  Basically if toastmsg changes wait 5 secs then change it back to null again

    if (!toastMsg) return;

    const id = setTimeout(() => setToastMsg(null), 5000);

    return () => clearTimeout(id);

  }, [toastMsg]); // Only Triggered when a msg is passed in

  // Total depends on cart therefore no useState
  const total = cart.reduce((prev, item) => prev + item.price * item.quantity, 0).toFixed(2);
  
  // CartCount counts amount of items in basket
  const cartCount = cart.reduce((sum, item) => sum + item.quantity, 0);

  const location = useLocation();
  const navigate = useNavigate();

  function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

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
        <>
          <Navbar cartCount={cartCount} cartTotal={total} />
          <Footer />
        </>
      )}

      {toastMsg && <Toast message={toastMsg.message} type={toastMsg.type}/>}

      <main className="page">
        <ScrollToTop />
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

      <nav className="nav-links PC">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/shop">Shop</Link>
        {/* <Link to="/contact">Contact</Link> */}
        <Link to="/cart">Cart</Link>
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
function Footer() {
  return(
  <nav className="footer mobile nav-links  navbar">
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

        {/* <Link to="/contact"> */}
          {/* phone icon */}
          {/* <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1em"
            height="1em"
            fill="currentColor"
            viewBox="0 0 16 16"
            className="icon"
          >
            <path d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.6 17.6 0 0 0 4.168 6.608 17.6 17.6 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.68.68 0 0 0-.58-.122l-2.19.547a1.75 1.75 0 0 1-1.657-.459L5.482 8.062a1.75 1.75 0 0 1-.46-1.657l.548-2.19a.68.68 0 0 0-.122-.58z" />
          </svg>
        </Link> */}

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
  )
}

/* ========== PAGES ========== */


// import heroVideo from "../assets/hero.mp4"; // download & place in assets

function Home() {
  return (
    <section className="home text-page">
      
      {/* HERO */}
      <div id="hero">
        <video className="video-bg" autoPlay muted loop>
          <source src={heroVideo} type="video/mp4" />
        </video>

        <div className="overlay"></div>

        <div className="hero-content">
          <p className="eyebrow">Luxury-inspired fragrance</p>

          <h1>RAJA Fragrance</h1>

          <p className="hero-text">
            Bold, long-lasting scents crafted to feel premium, confident, and unforgettable.
            Discover fragrances that move with you from day to night.
          </p>

          <div className="hero-actions">
            <Link className="btn primary" to="/shop">Shop Now</Link>
            <Link className="btn secondary" to="/about">Our Story</Link>
          </div>
        </div>
      </div>

      {/* WHY */}
      <section className="home-block">
        <h2>Why choose RAJA?</h2>

        <div className="feature-grid">
          <article className="feature-card">
            <h3>Long-lasting scent</h3>
            <p>Designed for strong projection and all-day wear.</p>
          </article>

          <article className="feature-card">
            <h3>Premium feel</h3>
            <p>Elegant fragrance choices with a luxury-inspired finish.</p>
          </article>

          <article className="feature-card">
            <h3>Easy to wear</h3>
            <p>Perfect for daily use, evenings, and special occasions.</p>
          </article>
        </div>
      </section>

      {/* PROMISE */}
      <section className="home-block split-block">
        <div>
          <h2>Our promise</h2>
          <p>
            We keep things simple: quality scents, clear presentation, and a smooth shopping
            experience from browsing to checkout.
          </p>
        </div>
        

        <div className="promise-box">
          <p>• Luxury-inspired fragrances</p>
          <p>• Gold and silver brand style</p>
          <p>• Simple order request checkout</p>
        </div>
      </section>

      {/* COLLECTION */}
      <section className="home-block">
        <h2>Featured collection</h2>
        <p>Explore a small selection of our most popular scents.</p>
        <Link className="link" to="/shop">Go to shop</Link>
      </section>

      {/* FAQ */}
      <section className="home-block faq-block">
        <h2>Quick FAQ</h2>

        <div className="faq-item">
          <h3>How do orders work?</h3>
          <p>You place an order request, then payment is arranged afterwards.</p>
        </div>

        <div className="faq-item">
          <h3>How is delivery handled?</h3>
          <p>Orders are processed manually and shipped via Royal Mail.</p>
        </div>
      </section>

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
          const { id, image, name, price, slug ,quote } = product;
          return (
            <article key={id} className="product-card">
              <img src={image} alt={name} />
              <Link to={`/product/${slug}`} className="product-name">
                {name}
              </Link>
              <p className="product-price">£{price}</p>
              <i>{quote}</i>
              
                <Link to={`/product/${slug}`} className="product-name">
                  <button> Learn More </button>
                </Link>
              
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
    if (!inStock){
      setToastMsg({
          message:'Item Out of Stock',
          type: 'error'
      })
    } else{
        setCart((prev) => {
          const existing = prev.find((p) => p.id === item.id);
          if (existing) {
            return prev.map((p) =>
              p.id === item.id ? { ...p, quantity: p.quantity + 1 } : p
            );
          }
          return [...prev, { ...item, quantity: 1 }];
        });
        setToastMsg({
          message:"Item added to cart 🛒",
          type: 'info'
        }
      );
    }
  }

  return (
    <section className="product-page">
      <div className="product-page-image">
        <img src={image} alt={name + id} />
      </div>

      <div className="product-page-info">
        <p className="eyebrow">Signature scent</p>
        <h1>{name}</h1>
        <p className="product-price">£{price}</p>
        <p className="product-subtitle">{color}</p>

        <p className="product-description">{description}</p>

        <div className="product-highlights">
          <div className="highlight-card">
            <h3>Wear it for</h3>
            <p>Daily use, evenings out, and special moments.</p>
          </div>
          <div className="highlight-card">
            <h3>Character</h3>
            <p>Rich, bold, and designed to leave an impression.</p>
          </div>
          <div className="highlight-card">
            <h3>Style</h3>
            <p>A modern fragrance with a premium, confident feel.</p>
          </div>
        </div>

        <div className="product-notes">
          <h2>What to expect</h2>
          <ul>
            <li>Strong presence without feeling messy.</li>
            <li>Elegant scent profile suited for day or night.</li>
            <li>Made to feel like a luxury-inspired fragrance choice.</li>
          </ul>
        </div>

        <button
          onClick={() => addToCart(product)}
          // disabled={!inStock}
          className="btn primary"
        >
          {inStock ? "Add to cart" : "Out of stock"}
        </button>
      </div>
    </section>
  );
}

/* ========== TOAST ========== */

function Toast({ message, type }) {
  return (
    <div className={`toast ${type}`}>
      
      <div className="icon">
        {type === "success" && <span className="checkmark"></span>}
        {type === "error" && <span className="cross">✕</span>}
        {type === "info" && <span className="info">i</span>}
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
              {item.name} <br /> £{(item.price) * (item.quantity)}
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
        setToastMsg({
          message:`Order #${orderId} sent! We'll contact you soon.`,
          type: 'success'
        });
        nav("/");
        form.current?.reset();
      })
      .catch(() => {
        alert("Failed to send order.");
        setToastMsg({
          message:"Unable to send order ",
          type: 'error'
        });
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
      <h3>Our Story</h3>
      <p>
      RAJA Fragrance began with a simple idea: luxury scents shouldn’t be limited to
      luxury price tags. What started as a passion for collecting and studying
      high‑end perfumes grew into a mission to make premium-quality fragrances
      accessible to everyone.
      </p>
      <p>
      Every bottle is crafted with care, using long-lasting oils and rich blends
      chosen for depth, projection, and character. We believe fragrance is more than
      a scent — it’s an identity.
      </p>

      <h3>Our Philosophy</h3>
      <p>
      We focus on quality over quantity. Each fragrance is selected for its
      performance, uniqueness, and ability to leave a lasting impression. No fillers,
      no shortcuts — just bold, confident scents designed to stand out.
      </p>

      <h3>How We Create Our Scents</h3>
      <p>
      Our perfumes are inspired by iconic luxury fragrances, but each blend is
      refined to offer its own personality. We work with high-concentration oils to
      ensure strong projection and long wear, giving you a premium experience from
      the first spray to the final dry-down.
      </p>

      <h3>Who Our Scents Are For</h3>
      <p>
      RAJA Fragrance is made for people who appreciate richness, depth, and
      confidence in a bottle. Whether you prefer sweet, smoky, woody, or fresh
      profiles, our collection is designed to suit every mood and moment.
      </p>

      
      {/* Prolly gon be an accordion not now  */}
      {/* FAQ */}
      <h3>Frequently asked questions</h3>
      <h4>Are your fragrances safe for sensitive skin?</h4>
      <p>
      Our perfumes use high-quality ingredients, but sensitivity varies from person
      to person. We recommend patch testing before full use.
      </p>

      <h3>How strong are your perfumes?</h3>
      <p>
      Our scents are formulated for long-lasting performance with noticeable
      projection. Most customers report 6–10 hours of wear depending on the
      fragrance.
      </p>

      <h4>Do you offer samples?</h4>
      <p>
      Sample sets will be available soon so you can explore multiple scents before
      choosing a full bottle.
      </p>

      <h4>Do the perfumes smell exactly like designer brands?</h4>
      <p>
      Our fragrances are inspired by luxury scents, but each blend has its own twist
      and character. We aim for high quality, not imitation.
      </p>
      <h4>How do I pay?</h4>
      <p>After placing your order, we will contact you to arrange payment.</p>
      <h4>How long is delivery?</h4>
      <p>Orders are delivered via Royal Mail within a few days.</p>
      <h4>Can I return items?</h4>
      <p>Returns are not accepted once items are shipped.</p>

      <h3>Our Values</h3>
      <p><strong>Transparency.</strong> Clear information, honest pricing, no hidden extras.</p>
      <p><strong>Quality.</strong> High-concentration oils and carefully selected blends.</p>
      <p><strong>Accessibility.</strong> Luxury-level scents without luxury-level prices.</p>
      <p><strong>Longevity.</strong> Fragrances designed to last all day.</p>
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
