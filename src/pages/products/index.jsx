import React, { useState, useEffect } from "react";
import axios from "axios";
import "./index.scss";
import RatingStars from "../../components/ratingstarts";
import ProductColorsSlider from "../../components/coloeslider";
import { Link, NavLink } from "react-router-dom";

function Products() {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [searchQuery, setSearchQuery] = useState("");
  const [sortType, setSortType] = useState("priceDesc");

  useEffect(() => {
    axios
      .get("http://localhost:3000/glamify/products/")
      .then((response) => {
        setProducts(response.data);
        const uniqueCategories = [
          ...new Set(response.data.map((product) => product.category)),
        ];
        setCategories(uniqueCategories);
      })
      .catch((error) => console.error("API hatası:", error));
  }, []);

  const filteredProducts = products
    .filter((product) => {
      return (
        (selectedCategory === "" || product.category === selectedCategory) &&
        product.name.toLowerCase().includes(searchQuery.toLowerCase())
      );
    })
    .sort((a, b) => {
      if (sortType === "priceAsc") return a.price - b.price;
      if (sortType === "priceDesc") return b.price - a.price;
      if (sortType === "rateAsc") return a.rate - b.rate;
      if (sortType === "rateDesc") return b.rate - a.rate;
      return 0;
    });

  return (
    <div className="products_page">
      <div className="products_page__container">
        <div className="products_page__heading">
          <div className="products_page__categories">
            <h2>Categories</h2>
            <ul>
              <li onClick={() => setSelectedCategory("")}>All</li>
              {categories.map((category, index) => (
                <li key={index} onClick={() => setSelectedCategory(category)}>
                  {category}
                </li>
              ))}
            </ul>
          </div>
          <div className="products_page__search_sort">
            <input
              type="text"
              placeholder="Search..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <select
              value={sortType}
              onChange={(e) => setSortType(e.target.value)}
            >
              <option value="priceAsc">Price: Lower To Higher </option>
              <option value="priceDesc">Price: Higher To Lower</option>
              <option value="rateAsc">Rate: Lower To Higher</option>
              <option value="rateDesc">Rate: Higher To Lower</option>
            </select>
          </div>
        </div>

        <div className="products_page__items_container">
          {filteredProducts.map((product) => (
            <div key={product._id} className="products_page__item">
              <img src={product.mainImage} alt={product.name} />
              <div className="products_page__item_details">
                <div className="products_page__item_details_top">
                  <h3>{product.name}</h3>
                  <div>
                    <RatingStars rate={product.rate} />
                  </div>
                </div>

                <div className="products_page__item_details_bottom">
                  <p className="product_price"> ${product.price}.00</p>

                  <div className="product_description">
                    {product.description.length > 110 ? (
                      <> {product.description.slice(0, 115)}...</>
                    ) : (
                      <>{product.description}</>
                    )}
                  </div>
                  <Link to={"/details/" + product._id}>Go Details</Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Products;
