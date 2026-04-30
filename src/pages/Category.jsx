import React, { useEffect, useState } from "react";
import Cards from "../components/Cards";
import { useSelector } from "react-redux";

function Category() {
  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [selectedCategories, setSelectedCategories] = useState([]);

  const [loading, setLoading] = useState(true); 
  const [error, setError] = useState(null);         

  const search = useSelector((state) => state.search.value);

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

  useEffect(() => {
    let filtered = products;

    if (selectedCategories.length > 0) {
      filtered = filtered.filter((p) =>
        selectedCategories.includes(p.category)
      );
    }

    if (search && search.trim() !== "") {
      filtered = filtered.filter((p) =>
        p.title.toLowerCase().includes(search.toLowerCase())
      );
    }

    setFilteredProducts(filtered);
  }, [search, selectedCategories, products]); 

  const handleCategoryChange = (category) => {
    let updated = [...selectedCategories];

    if (updated.includes(category)) {
      updated = updated.filter((c) => c !== category);
    } else {
      updated.push(category);
    }

    setSelectedCategories(updated);
  };

  if (loading) return <h4 className="text-center">Loading...</h4>;
  if (error) return <h4 className="text-center text-danger">{error}</h4>;

  return (
    <div className="container py-5">
      <div className="row">

        <div className="col-md-2">
          <h5>Categories</h5>

          {categories.map((cat, index) => (
            <div className="form-check" key={index}>
              <input
                type="checkbox"
                className="form-check-input my-2"
                checked={selectedCategories.includes(cat)}
                onChange={() => handleCategoryChange(cat)}
              />
              <label className="form-check-label my-1">{cat}</label>
            </div>
          ))}
        </div>
        <div className="col-md-10">
          <div className="row">
            <p>Total Products: {filteredProducts.length}</p>
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