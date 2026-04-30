import React from "react";
import "./Cart.css";
import { useSelector, useDispatch } from "react-redux";
import {
  removeFromCart,
  clearCart,
  increaseQty,
  decreaseQty,
} from "../store/cartSlice";
import { setSearch } from "../store/searchSlice";
import { Link } from "react-router-dom";

function Cart() {
  const dispatch = useDispatch();

  const cartItems = useSelector((state) => state.cart.items);
  const search = useSelector((state) => state.search.value); 


  const filteredCart = cartItems.filter((item) =>
    search.trim() === ""
      ? true
      : item.title.toLowerCase().includes(search.toLowerCase()) ||
        item.category.toLowerCase().includes(search.toLowerCase())
  );

  
  const subtotal = filteredCart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  const total = subtotal;

  return (
    <div className="container my-5">
      <h3 className="mb-4">Shopping Cart</h3>

      <div className="row">
        {/* Cart Items */}
        <div className="col-lg-8">
          <div className="cart-wrapper">
            <div className="cart-header d-flex justify-content-between align-items-center mb-3">
              <h6 className="mb-0">
                Cart{" "}
                <span className="text-muted">
                  ({filteredCart.length} Products)
                </span>
              </h6>

              <button
                className="btn btn-link text-danger p-0"
                onClick={() => dispatch(clearCart())}
              >
                Clear cart
              </button>
            </div>

            {filteredCart.length > 0 ? (
              filteredCart.map((item) => (
                <div className="cart-item" key={item.id}>
                  {/* Image */}
                  <img
                    src={item.image}
                    alt={item.title}
                    className="cart-item-img"
                  />

                  {/* Info */}
                  <div className="cart-item-info">
                    <div className="fw-semibold">{item.title}</div>
                    <small className="text-muted">
                      {item.category}
                    </small>
                  </div>

                  {/* Quantity */}
                  <div className="cart-qty">
                    <button
                      className="qty-btn"
                      onClick={() => dispatch(decreaseQty(item.id))}
                    >
                      <i className="bi bi-dash"></i>
                    </button>

                    <span>{item.quantity}</span>

                    <button
                      className="qty-btn"
                      onClick={() => dispatch(increaseQty(item.id))}
                    >
                      <i className="bi bi-plus"></i>
                    </button>
                  </div>

                  {/* Price */}
                  <div className="cart-price">
                    ${item.price}
                  </div>

                  {/* Remove */}
                  <button
                    className="remove-btn"
                    onClick={() => dispatch(removeFromCart(item.id))}
                  >
                    <i className="bi bi-trash"></i>
                  </button>
                </div>
              ))
            ) : (
              <h5 className="text-center">No items found</h5>
            )}
          </div>
        </div>

        {/* Checkout Summary */}
        <div className="col-lg-4">
          <div className="checkout-panel">
            <h6 className="mb-3">Promo code</h6>

            <div className="promo-box mb-3">
              <input
                type="text"
                className="form-control"
                placeholder="Type here..."
              />
              <button className="btn btn-dark">Apply</button>
            </div>

            <hr />

            <div className="d-flex justify-content-between mb-2">
              <span>Subtotal</span>
              <span>${subtotal.toFixed(2)}</span>
            </div>

            <div className="d-flex justify-content-between mb-3 text-muted">
              <span>Discount</span>
              <span>$0.00</span>
            </div>

            <div className="d-flex justify-content-between fw-bold mb-4">
              <span>Total</span>
              <span>${total.toFixed(2)}</span>
            </div>

            <button className="btn btn-dark w-100 checkout-btn">
              <Link to="/chekout" className="text-white text-decoration-none">
                Checkout
              </Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cart;