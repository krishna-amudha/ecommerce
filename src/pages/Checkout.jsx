import React from "react";
import "./Checkout.css";
import { useSelector, useDispatch } from "react-redux";
import { clearCart } from "../store/cartSlice";
import { useNavigate } from "react-router-dom";

function Checkout() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const cartItems = useSelector((state) => state.cart.items);

  const subtotal = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  const handlePlaceOrder = () => {
    if (cartItems.length === 0) {
      alert("Your cart is empty!");
      return;
    }

    alert("Order placed successfully!");
    dispatch(clearCart());
    navigate("/"); // home page redirect
  };

  return (
    <div className="checkout-wrapper">
      <div className="container">
        <div className="row">

          {/* LEFT SIDE */}
          <div className="col-lg-8">
            <div className="checkout-card">
              <h2 className="checkout-title">Checkout</h2>

              {/* Contact */}
              <div className="checkout-section">
                <h5>Contact Information</h5>
                <input type="text" className="form-control mb-3" placeholder="Full Name" />
                <input type="email" className="form-control mb-3" placeholder="Email Address" />
              </div>

              {/* Shipping */}
              <div className="checkout-section">
                <h5>Shipping Address</h5>
                <input type="text" className="form-control mb-3" placeholder="Street Address" />

                <div className="row">
                  <div className="col-md-6">
                    <input type="text" className="form-control mb-3" placeholder="City" />
                  </div>
                  <div className="col-md-6">
                    <input type="text" className="form-control mb-3" placeholder="ZIP Code" />
                  </div>
                </div>
              </div>

              {/* Payment */}
              <div className="checkout-section">
                <h5>Payment Details</h5>
                <input type="text" className="form-control mb-3" placeholder="Card Number" />

                <div className="row">
                  <div className="col-md-6">
                    <input type="text" className="form-control mb-3" placeholder="Expiry" />
                  </div>
                  <div className="col-md-6">
                    <input type="text" className="form-control mb-3" placeholder="CVV" />
                  </div>
                </div>
              </div>

              <button
                className="btn btn-dark w-100 checkout-btn"
                onClick={handlePlaceOrder}
              >
                Place Order (${subtotal.toFixed(2)})
              </button>
            </div>
          </div>

          {/* RIGHT SIDE */}
          <div className="col-lg-4">
            <div className="summary-card">
              <h4>Order Summary</h4>

              {cartItems.length === 0 ? (
                <p>Your cart is empty.</p>
              ) : (
                <>
                  {cartItems.map((item) => (
                    <div className="summary-item d-flex justify-content-between mb-2" key={item.id}>
                      <span>
                        {item.title} × {item.quantity}
                      </span>
                      <span>
                        ${(item.price * item.quantity).toFixed(2)}
                      </span>
                    </div>
                  ))}

                  <hr />

                  <div className="summary-total d-flex justify-content-between fw-bold">
                    <span>Total</span>
                    <span>${subtotal.toFixed(2)}</span>
                  </div>
                </>
              )}
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

export default Checkout;