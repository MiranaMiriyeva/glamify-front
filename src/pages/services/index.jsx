import React, { useEffect, useState } from "react";
import axios from "axios";
import "./index.scss";
import { FaCheck } from "react-icons/fa";

const Services = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3000/glamify/services/")
      .then((res) => {
        setProducts(res.data);
      })
      .catch((error) => console.error("API error:", error));
  }, []);

  return (
    <div id="services">
      {products.map((product, index) => (
        <React.Fragment key={product.id}>
          <div className="services_container">
            <div className="services_box">
              {index % 2 === 0 ? (
                <>
                  <div className="services_box_context">
                    <span>From ${product.price}</span>
                    <h2>{product.title}</h2>
                    <p>{product.description}</p>
                    <div className="services_box_details">
                      {product.details.map((detail, i) => (
                        <div key={i}>
                          <FaCheck /> <p>{detail}</p>
                        </div>
                      ))}
                    </div>
                    <button>GET A QUOTE</button>
                  </div>
                  <div className="services_box_images">
                    <img
                      className="services_box_main_image"
                      src={product.images[0]}
                      alt={product.title}
                    />
                    <img
                      className="services_box_secondary_image"
                      src={product.images[1]}
                      alt={product.title}
                    />
                  </div>
                </>
              ) : (
                <>
                  <hr className="services_hr" />
                  <div className="services_box_images">
                    <img
                      className="services_box_main_image"
                      src={product.images[0]}
                      alt={product.title}
                    />
                    <img
                      className="services_box_secondary_image"
                      src={product.images[1]}
                      alt={product.title}
                    />
                  </div>
                  <div className="services_box_context">
                    <span>From ${product.price}</span>
                    <h2>{product.title}</h2>
                    <p>{product.description}</p>
                    <div className="services_box_details">
                      {product.details.map((detail, i) => (
                        <div key={i}>
                          <FaCheck /> <p>{detail}</p>
                        </div>
                      ))}
                    </div>
                    <button>GET A QUOTE</button>
                  </div>
                </>
              )}
            </div>
          </div>

          {/* Rezervasyon Bölümü (2. üründen sonra eklenir) */}
          {index === 1 && (
            <section id="contact_section">
              <div className="contact_section_container">
                <div className="left_side">
                  <h2>BOOK ONLINE FOR</h2>
                  <span>10% DISCOUNT</span>
                </div>
                <div className="right_side">
                  <h2>GET A QUOTE</h2>
                  <form>
                    <div>
                      <input type="text" placeholder="Name" required />
                      <input
                        type="number"
                        placeholder="Phone number"
                        required
                      />
                    </div>
                    <div>
                      <input type="email" placeholder="Email" required />
                      <select required>
                        <option value="Makeup">Makeup</option>
                        <option value="Hair">Hair</option>
                        <option value="Other">Other</option>
                      </select>
                    </div>
                    <textarea placeholder="Your message"></textarea>
                    <button className="book_btn">Book</button>
                  </form>
                </div>
              </div>
            </section>
          )}
        </React.Fragment>
      ))}
    </div>
  );
};

export default Services;
