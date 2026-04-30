import React from "react";
import { Link, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setSearch } from "../store/searchSlice";
import Logo from "../assets/logo.png";
import "./Navbar.css";
import { toggleTheme } from "../store/themeSlice";

const Header = () => {
  const dispatch = useDispatch();
  const search = useSelector((state) => state.search.value);
  const cartItems = useSelector((state) => state.cart.items);
  const theme = useSelector((state) => state.theme.mode);
  console.log("Theme:", theme);

  const location = useLocation();
  const isHome = location.pathname === "/";
  const handleSearchChange = (e) => {
    dispatch(setSearch(e.target.value));
  };
  const handleClear = () => {
    dispatch(setSearch(""));
  };

  return (
    <header
      className={`navbar-custom py-3 ${
        isHome ? "home-header" : "inner-header bg-white"
      }`}
    >
      <div className="container">
        <div className="row align-items-center">

          <div className="col-6 col-md-2 d-flex align-items-center">
            <img src={Logo} alt="logo" style={{ height: "45px" }} />
          </div>

          <div className="col-6 d-md-none text-end">
            <button
              className="btn"
              data-bs-toggle="collapse"
              data-bs-target="#navbarMenu"
            >
              <i className="bi bi-list fs-2"></i>
            </button>
          </div>

          {/* Menu */}
          <div className="col-12 col-md-4">
            <div id="navbarMenu" className="collapse d-md-block">
              <ul className="nav justify-content-md-center flex-column flex-md-row gap-3 mt-3 mt-md-0">
                <li className="nav-item">
                  <Link className="nav-link fw-medium" to="/">Home</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link fw-medium" to="/category">Category</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link fw-medium" to="/about">About</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link fw-medium" to="/contact">Contact</Link>
                </li>
              </ul>
            </div>
          </div>

          {/* Right Side */}
          <div className="col-12 col-md-6 mt-3 mt-md-0">
            <div className="d-flex align-items-center justify-content-md-end gap-4 flex-wrap">

              <div className="position-relative d-none d-md-block">
                <i className="bi bi-search position-absolute top-50 start-0 translate-middle-y ms-3 text-muted"></i>

                <input
                  type="text"
                  value={search}
                  onChange={handleSearchChange}
                  className="form-control ps-5 pe-5 rounded-pill border-0"
                  placeholder="Search something here!"
                  style={{ width: "250px" }}
                />

                {/* ❌ Clear button */}
                {search && (
                  <span
                    onClick={handleClear}
                    className="position-absolute top-50 end-0 translate-middle-y me-3 cursor-pointer"
                    style={{ cursor: "pointer" }}
                  >
                    ✖
                  </span>
                )}
              </div>

              {/* Button */}
              <button
                className="btn rounded-pill px-4 text-white"
                style={{ backgroundColor: "#0B3C5D" }}
              >
                Join the community
              </button>

              {/* 🛒 Cart */}
              <Link to="/cart" className="position-relative text-dark">
                <i className="bi bi-cart fs-4"></i>
                <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                  {cartItems.length}
                </span>
              </Link>
               <button
                onClick={() => dispatch(toggleTheme())}
                className="btn btn-sm rounded-circle border"
                title="Toggle theme"
              >
                {theme === "light" ? (
                  <i className="bi bi-moon-fill"></i>
                ) : (
                  <i className="bi bi-sun-fill text-warning"></i>
                )}
              </button>

            </div>
          </div>

        </div>
      </div>
    </header>
  );
};

export default Header;