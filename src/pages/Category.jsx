import React, { useEffect, useState } from "react";
import Cards from "../components/Cards";
import { useSelector } from "react-redux";

function Category() {
  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [selectedCategories, setSelectedCategories] = useState([]);

  const [loading, setLoading] = useState(true);     // ✅ FIXED
  const [error, setError] = useState(null);         // ✅ FIXED

  const search = useSelector((state) => state.search.value);

  // ✅ FETCH DATA
  useEffect(() => {
    let isMounted = true;

    const fetchData = async () => {
      try {
        const [catRes, prodRes] = await Promise.all([
          fetch("https://fakestoreapi.com/products/categories"),
          fetch("https://fakestoreapi.com/products"),
        ]);

        if (!catRes.ok || !prodRes.ok) {
          throw new Error("Failed to fetch data");
        }

        const categoriesData = await catRes.json();
        const productsData = await prodRes.json();

        if (isMounted) {
          setCategories(categoriesData);
          setProducts(productsData);
          setFilteredProducts(productsData);
        }
      } catch (err) {
        if (isMounted) setError(err.message);
      } finally {
        if (isMounted) setLoading(false);
      }
    };

    fetchData();

    return () => {
      isMounted = false;
    };
  }, []);

  // ✅ 🔥 MAIN FILTER LOGIC (FIXED SEARCH + CATEGORY)
  useEffect(() => {
    let filtered = products;

    // Category filter
    if (selectedCategories.length > 0) {
      filtered = filtered.filter((p) =>
        selectedCategories.includes(p.category)
      );
    }

    // 🔍 Search filter
    if (search && search.trim() !== "") {
      filtered = filtered.filter((p) =>
        p.title.toLowerCase().includes(search.toLowerCase())
      );
    }

    setFilteredProducts(filtered);
  }, [search, selectedCategories, products]); // ✅ IMPORTANT

  // ✅ Handle category checkbox
  const handleCategoryChange = (category) => {
    let updated = [...selectedCategories];

    if (updated.includes(category)) {
      updated = updated.filter((c) => c !== category);
    } else {
      updated.push(category);
    }

    setSelectedCategories(updated);
  };

  // ✅ UI STATES
  if (loading) return <h4 className="text-center">Loading...</h4>;
  if (error) return <h4 className="text-center text-danger">{error}</h4>;

  return (
    <div className="container py-4">
      <div className="row">

        {/* LEFT FILTER */}
        <div className="col-md-2">
          <h5>Categories</h5>

          {categories.map((cat, index) => (
            <div className="form-check" key={index}>
              <input
                type="checkbox"
                className="form-check-input"
                checked={selectedCategories.includes(cat)}
                onChange={() => handleCategoryChange(cat)}
              />
              <label className="form-check-label">{cat}</label>
            </div>
          ))}
        </div>

        {/* RIGHT PRODUCTS */}
        <div className="col-md-10">
          <div className="row">
            {filteredProducts.length > 0 ? (
              filteredProducts.map((item) => (
                <div className="col-md-3 mb-4" key={item.id}>
                  <Cards product={item} />
                </div>
              ))
            ) : (
              <h5>No products found</h5>
            )}
          </div>
        </div>

      </div>
    </div>
  );
}

export default Category;