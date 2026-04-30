import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import MainLayout from "./layouts/MainLayout";
import Products from "./pages/Products";
import ProductDetails from "./pages/ProductDetails"
import About from "./pages/About";
import Home from "./pages/Home";
import Category from "./pages/Category";
import Cart from './pages/Cart'
import Checkout from "./pages/Checkout";
import Contacts from "./pages/Contacts";


function App() {
const theme = useSelector((state) => state.theme.mode);

 useEffect(() => {
  document.body.setAttribute("data-theme", theme);
}, [theme]);
   
  return (
    
    <BrowserRouter>
    <ToastContainer
  position="top-center"
  autoClose={2000}
  hideProgressBar
  theme="light"
/>
      <Routes>
       
        <Route path="/" element={<MainLayout />}>
         
          <Route index element={<Home />} />

     
          <Route path="products" element={<Products />} />
          <Route path="category" element={<Category/>} />
          <Route path="productdetails/:id" element={<ProductDetails />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contacts />} />
          <Route path="cart" element={<Cart />} />
         <Route path='chekout' element={<Checkout/>} />
        </Route>
      </Routes>
    </BrowserRouter>
    
  );
}

export default App;
