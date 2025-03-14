import React, { useEffect, useState } from "react";
import axios from "axios";
import "./index.scss";
import { FaCheck } from "react-icons/fa";
import { Helmet } from "react-helmet-async";
import Aos from "aos";
import "aos/dist/aos.css";
import ContactSection from "../../components/contactsection";

const Services = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get("https://glamify-back.onrender.com/services/")
      .then((res) => {
        setProducts(res.data);
        setTimeout(() => {
          setLoading(false);
        }, 2300);
      })
      .catch((error) => console.error("API error:", error));
  }, []);
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);
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
    <div id="services">
      <Helmet>
        <title> Glamify | Services </title>
      </Helmet>
      {products.map((product, index) => (
        <React.Fragment key={product.id}>
          <div className="services_container">
            <div className="services_box" data-aos="fade-up">
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
                    <button>
                      <a href="#contact_section">GET A QUOTE</a>
                    </button>
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
                  <div className="services_box_images" data-aos="fade-up">
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
                  <div className="services_box_context" data-aos="fade-up">
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
                    <button>
                      <a href="#contact_section">GET A QUOTE</a>
                    </button>
                  </div>
                </>
              )}
            </div>
          </div>

          {index === 1 && (
            <section id="contact_section">
              <ContactSection />
            </section>
          )}
        </React.Fragment>
      ))}
    </div>
  );
};

export default Services;
