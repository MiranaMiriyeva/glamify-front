import React, { useEffect, useState } from "react";
import "./index.scss";

const Services = () => {
   const [products, setProducts] = useState([]);
  
    useEffect(() => {
      fetch("http://localhost:3000/glamify/products/")
        .then((res) => res.json())
        .then((data) => setProducts(data))
        .catch((err) => console.error("Veri çekme hatası:", err));
    }, []);
  
    return (
      <div>
        {products ? (
          products.map((product) => {
            return (
              <div>
                <h2>{product.name}</h2>
                <p>
                  <strong>Kategori:</strong> {product.category}
                </p>
                <p>
                  <strong>Boyut:</strong> {product.size}
                </p>
                <p>
                  <strong>Fiyat:</strong> ${product.price}
                </p>
                <p>
                  <strong>İndirim:</strong> %{product.salePercent}
                </p>
                <p>
                  <strong>Puan:</strong> {product.rate} ⭐
                </p>
                <p>
                  <strong>Açıklama:</strong> {product.description}
                </p>
                <p>
                  <strong>Kullanım:</strong> {product.howToUse}
                </p>
                <p>
                  <strong>İçerik:</strong> {product.ingredients}
                </p>
                <img
                  src={product.mainImage}
                  alt={product.name}
                  style={{ width: "200px" }}
                />
  
                <h3>Mevcut Renkler:</h3>
                {product.colors?.map((color) => (
                  <div key={color._id}>
                    <h4>
                      {color.colorName}
                      {color.outOfStock ? "(Stokta Yok)" : "(Stokta Var)"}
                    </h4>
                    {color.colorImages.map((image, index) => (
                      <img
                        key={index}
                        src={image}
                        alt={color.colorName}
                        style={{ width: "100px", margin: "5px" }}
                      />
                    ))}
                  </div>
                ))}
              </div>
            );
          })
        ) : (
          <p>Ürün yükleniyor...</p>
        )}
      </div>
    );
};

export default Services;
