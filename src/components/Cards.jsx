import React from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../store/cartSlice";
import { toast, Zoom } from "react-toastify";

function Cards({ product }) {
  const dispatch = useDispatch();
  const items = useSelector((state) => state.cart.items);

  const handleAddToCart = () => {
    const alreadyInCart = items.some(
      (item) => item.id === product.id
    );

    if (!alreadyInCart) {
      dispatch(addToCart(product));

      toast.success("Added to cart 🛒", {
        position: "top-center",
        autoClose: 2000,
        hideProgressBar: true,
        theme: "light",
        transition: Zoom,
      });
    } else {
      toast.error("Already added to cart", {
        position: "top-center",
        autoClose: 2000,
        hideProgressBar: true,
        theme: "light",
        transition: Zoom,
      });
    }
  };

  return (
    <div className="product-card">
      <div className="product-badge">
        <span className="sale-heart">
          <i className="bi bi-heart"></i>
        </span>
      </div>

      <Link to={`/productdetails/${product.id}`}>
        <div className="text-center product-image-bg">
          <img
            src={product.image}
            alt={product.title}
            className="product-img"
          />
        </div>
      </Link>

      <div className="mt-3">
        <p className="category">{product.category}</p>

        <h6 className="product-title">
          {product.title.length > 40
            ? product.title.slice(0, 40) + "..."
            : product.title}
        </h6>

        <div className="price-row d-flex justify-content-between align-items-center">
          <div>
            <span className="price">${product.price}</span>
            <span className="old-price">$24</span>
          </div>

          <button className="add-btn btn btn-sm btn-primary" onClick={handleAddToCart}>
            + Add
          </button>
        </div>
      </div>
    </div>
  );
}

export default Cards;