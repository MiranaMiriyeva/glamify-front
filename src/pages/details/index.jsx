import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import "./index.scss";
import RatingStars from "../../components/ratingstarts";
import BasketContext from "../../context/basket/basketContext";
import AuthContext from "../../context/auth/authContext";
import { Helmet } from "react-helmet-async";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Details = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [selectedColor, setSelectedColor] = useState(null);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [openAccordion, setOpenAccordion] = useState(null);
  const [loading, setLoading] = useState(true);

  const { addToBasket } = useContext(BasketContext);
  const { isAuth, isLogin, setIsLogin } = useContext(AuthContext);

  useEffect(() => {
    axios
      .get(`http://localhost:3000/glamify/products/${id}`)
      .then((response) => {
        setProduct(response.data);
        setSelectedColor(response.data.colors[0]);
        setTimeout(() => {
          setLoading(false);
        }, 2300);
      })
      .catch((error) => console.error("API error:", error));
  }, [id]);

  const toggleAccordion = (accordion) => {
    setOpenAccordion(openAccordion === accordion ? null : accordion);
  };

  const handleAddToBasket = () => {
    console.log(isLogin);

    if (isLogin == false) {
      toast.error("Please login to add items to your basket.");
      return;
    }

    if (product && selectedColor) {
      const basketItem = {
        productId: product._id,
        name: product.name,
        mainImage: product.mainImage,
        price: product.price,
        colorName: selectedColor.colorName,
        colorImages: selectedColor.colorImages,
      };

      addToBasket(basketItem);
      toast(`${product.name} (${selectedColor.colorName}) added to basket!`);
      // alert(`${product.name} (${selectedColor.colorName}) added to basket!`);
    }
  };

  if (loading) {
    return (
      <div className="loading">
        <img
          src="https://i.pinimg.com/originals/8f/16/fa/8f16fab10e0c10b1399b0611def6d242.gif"
          alt=""
        />
      </div>
    );
  }

  return (
    <div className="detail_page">
      <Helmet>
        <title> Glamify | {product.name}</title>
      </Helmet>
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

          {/* Sepete Ekle Butonu */}
          <button className="add_to_basket" onClick={handleAddToBasket}>
            Add To Basket
          </button>
        </div>

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
