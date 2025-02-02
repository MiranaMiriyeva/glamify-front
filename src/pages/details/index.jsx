import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import "./index.scss";
import RatingStars from "../../components/ratingstarts";

const Details = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [selectedColor, setSelectedColor] = useState(null);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [openAccordion, setOpenAccordion] = useState(null);

  useEffect(() => {
    axios
      .get(`http://localhost:3000/glamify/products/${id}`)
      .then((response) => {
        setProduct(response.data);
        setSelectedColor(response.data.colors[0]);
      })
      .catch((error) => console.error("API error:", error));
  }, [id]);

  const toggleAccordion = (accordion) => {
    setOpenAccordion(openAccordion === accordion ? null : accordion);
  };

  if (!product) {
    return <div className="loading">Loading...</div>;
  }

  return (
    <div className="detail_page">
      <div className="detail_page_container">
        <div className="detail_page_ls">
          <h1 className="product_name">{product.name}</h1>
          <p className="product_rating">
            <RatingStars rate={product.rate} />
          </p>
          <p className="product_size">{product.size}</p>

          <p className="product_description">{product.description}</p>
          <h3 className="selected_color">{selectedColor.colorName}</h3>
          <div className="color_buttons">
            {product.colors.map((color, index) => (
              <button
                key={index}
                onClick={() => setSelectedColor(color)}
                className={`color_button ${
                  selectedColor._id === color._id ? "active" : ""
                }`}
              >
                <img src={color.colorImages[0]} alt={color.colorName} />
              </button>
            ))}
          </div>

          <div
            className={`accordion ${
              openAccordion === "ingredients" ? "open" : ""
            }`}
          >
            <div
              className="accordion_header"
              onClick={() => toggleAccordion("ingredients")}
            >
              <h3>Ingredients</h3>
              <span>{openAccordion === "ingredients" ? "−" : "+"}</span>
            </div>
            <div className="accordion_content">
              <p>{product.ingredients}</p>
            </div>
          </div>

          {/* Accordion: How To Use */}
          <div
            className={`accordion ${
              openAccordion === "howToUse" ? "open" : ""
            }`}
          >
            <div
              className="accordion_header"
              onClick={() => toggleAccordion("howToUse")}
            >
              <h3>How To Use</h3>
              <span>{openAccordion === "howToUse" ? "−" : "+"}</span>
            </div>
            <div className="accordion_content">
              <p>{product.howToUse}</p>
            </div>
          </div>
          <button className="add_to_basket">Add To Basket</button>
        </div>

        {/* Sağ Kısım */}
        <div className="detail_page_rs">
          <div className="main_image">
            <img
              src={selectedColor.colorImages[selectedImageIndex]}
              alt={selectedColor.colorName}
            />
          </div>
          <div className="thumbnail_images">
            {selectedColor.colorImages.map((image, index) => (
              <img
                key={index}
                src={image}
                alt={`${selectedColor.colorName} ${index}`}
                onClick={() => setSelectedImageIndex(index)}
                className={`thumbnail ${
                  selectedImageIndex === index ? "active" : ""
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
