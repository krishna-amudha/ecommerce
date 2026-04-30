import React, { useEffect, useState, useRef } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "../store/cartSlice";
import "./ProductDetails.css";

function ProductDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const sliderRef = useRef(null);

  const [product, setProduct] = useState(null);
  const [allProducts, setAllProducts] = useState([]);

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // 🔹 Fetch single product
  useEffect(() => {
    const fetchProduct = async () => {
      try {
        setLoading(true);
        const response = await fetch(
          `https://fakestoreapi.com/products/${id}`
        );
        const data = await response.json();
        setProduct(data);
      } catch {
        setError("Failed to load product");
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

  // 🔹 Fetch all products
  useEffect(() => {
    const fetchAllProducts = async () => {
      try {
        const res = await fetch("https://fakestoreapi.com/products");
        const data = await res.json();
        setAllProducts(data);
      } catch (err) {
        console.error(err);
      }
    };

    fetchAllProducts();
  }, []);

  // 🔹 Auto Scroll
  useEffect(() => {
    const slider = sliderRef.current;
    if (!slider) return;

    const interval = setInterval(() => {
      slider.scrollBy({ left: 1 });

      if (slider.scrollLeft + slider.clientWidth >= slider.scrollWidth) {
        slider.scrollTo({ left: 0 });
      }
    }, 20);

    return () => clearInterval(interval);
  }, [allProducts]);

  // 🔹 Button Scroll
  const scroll = (direction) => {
    const slider = sliderRef.current;

    slider.scrollBy({
      left: direction === "left" ? -300 : 300,
      behavior: "smooth",
    });
  };

  if (loading) return <h3 className="text-center">Loading...</h3>;
  if (error) return <h3 className="text-center text-danger">{error}</h3>;
  if (!product) return null;

  return (
    <div className="container my-5 product-details-page">
      <div className="row">
        {/* LEFT: Image */}
        <div className="col-md-5 text-center">
          <div className="product-image-box">
            <img
              src={product.image}
              alt={product.title}
              className="img-fluid product-image"
            />
          </div>
        </div>

        {/* RIGHT: Details */}
        <div className="col-md-7 product-info">
          <p className="product-category">
            {product.category} • {product.brand}
          </p>

          <h2 className="product-titles">{product.title}</h2>

          {/* Rating */}
          <div className="product-rating">
            <span className="stars">
              {"★".repeat(Math.round(product.rating.rate))}
              {"☆".repeat(5 - Math.round(product.rating.rate))}
            </span>
            <span className="rating-text">
              {product.rating.rate}
            </span>
          </div>

          {/* Price */}
          <div className="product-price">
            <span className="original-price">
              ${product.price}
            </span>
            <span className="discount-badge">
              {product.discountPercentage}% OFF
            </span>
          </div>

          {/* Stock */}
          <p className="stock-info">
            <strong>Status:</strong>{" "}
            <span className="in-stock">
              {product.rating.count > 0 ? "In Stock" : "Out of Stock"}
            </span>{" "}
            | <strong>Stock:</strong> {product.rating.count}
          </p>

          {/* Description */}
          <p className="product-description">
            {product.description}
          </p>

          {/* Buttons */}
          <div className="product-actions">
            <button
              className="btn add-cart-btn"
              onClick={() => dispatch(addToCart(product))}
            >
              Add to Cart
            </button>

            <button className="btn wishlist-btn">
              Wishlist
            </button>
          </div>
        </div>
      </div>

      {/* 🔽 SLIDER */}
      <div className="s mt-5">
        <h4>More Products</h4>

        <div className="slider-wrapper">
          <button className="nav-btn" onClick={() => scroll("left")}>
            ◀
          </button>

          <div className="product-slider" ref={sliderRef}>
            {allProducts
              .filter((item) => item.id !== product.id)
              .map((item) => (
                <div
                  key={item.id}
                  className="product-card-slider"
                  onClick={() =>
                    navigate(`/productdetails/${item.id}`)
                  }
                >
                  <img src={item.image} alt={item.title} />
                  <p className="title">
                    {item.title.substring(0, 40)}...
                  </p>
                  <p className="price">${item.price}</p>
                </div>
              ))}
          </div>

          <button className="nav-btn" onClick={() => scroll("right")}>
            ▶
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;