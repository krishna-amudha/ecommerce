import React, { useEffect, useState } from "react";
import Cards from "../components/Cards";
import { useSelector } from "react-redux";
import "./Products.css";

function Products() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [categoryFilter, setCategoryFilter] = useState("All");
  const [error, setError] = useState(null);

  const search = useSelector((state) => state.search.value);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch("https://fakestoreapi.com/products");

        if (!response.ok) {
          throw new Error("Network response was not ok");
        }

        const data = await response.json();
        setProducts(data);
      } catch (err) {
        setError("Failed to load products");
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  const filteredProducts = products
    .filter((item) =>
      categoryFilter === "All"
        ? true
        : item.category === categoryFilter
    )
    .filter((item) =>
      search.trim() === ""
        ? true
        : item.title.toLowerCase().includes(search.toLowerCase()) ||
          item.category.toLowerCase().includes(search.toLowerCase())
    );

  if (loading) return <h2 className="text-center">Loading...</h2>;
  if (error) return <h2 className="text-center text-danger">{error}</h2>;

  return (
    <div className="container my-5">

      {/* Header */}
      <div className="row pb-5 align-items-center">
        <div className="col-md-6">
          <h4 className="fw-bold">Featured Products</h4>
        </div>

        {/* Category Buttons */}
        <div className="col-md-6 text-md-end">
          <div className="category-filters">

            <button
              className={categoryFilter === "All" ? "active" : ""}
              onClick={() => setCategoryFilter("All")}
            >
              All
            </button>

            <button
              className={categoryFilter === "electronics" ? "active" : ""}
              onClick={() => setCategoryFilter("electronics")}
            >
              Electronics
            </button>

            <button
              className={categoryFilter === "jewelery" ? "active" : ""}
              onClick={() => setCategoryFilter("jewelery")}
            >
              Jewelery
            </button>

            <button
              className={categoryFilter === "men's clothing" ? "active" : ""}
              onClick={() => setCategoryFilter("men's clothing")}
            >
              Men's Clothing
            </button>

            <button
              className={categoryFilter === "women's clothing" ? "active" : ""}
              onClick={() => setCategoryFilter("women's clothing")}
            >
              Women's Clothing
            </button>

          </div>
        </div>
      </div>

      {/* Products Grid */}
      <div className="row">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((item) => (
            <div className="col-md-3 mb-4" key={item.id}>
              <Cards product={item} />
            </div>
          ))
        ) : (
          <h5 className="text-center">No products found</h5>
        )}
      </div>

    </div>
  );
}

export default Products;