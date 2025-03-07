import React, { useEffect, useState } from "react";
import "./index.scss";
import axios from "axios";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import Aos from "aos";
import "aos/dist/aos.css";
const Blogs = () => {
  const [items, setItems] = useState([]);
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    axios
      .get("https://glamify-back.onrender.com/blogs/")
      .then((res) => {
        setItems(res.data);
      })
      .catch((error) => console.error("API error:", error));
  }, []);

  useEffect(() => {
    const container = document.querySelector(".blogs_page_items_container");

    const moveCursor = (e) => {
      const { clientX: x, clientY: y } = e;
      requestAnimationFrame(() => {
        setCursorPosition({ x, y });
      });
    };

    container.addEventListener("mousemove", moveCursor);

    return () => {
      container.removeEventListener("mousemove", moveCursor);
    };
  }, []);
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);
  return (
    <div id="blogs_page">
      <Helmet>
        <title> Glamify | Blogs</title>
      </Helmet>
      <div className="blogs_page_container">
        <div
          className="blogs_page_items_container"
          style={{
            "--x": `${cursorPosition.x}px`,
            "--y": `${cursorPosition.y}px`,
          }}
        >
          {items.map((item) => (
            <div key={item._id} className="blogs_page_item" data-aos="fade-up">
              <img src={item.mainImage} alt={item.title} />
              <div className="item_details">
                <div>
                  <h2>{item.title}</h2>
                  <p>
                    {item.description.slice(0, 150) === item.description
                      ? item.description
                      : item.description.slice(0, 150) + "..."}
                  </p>
                </div>
                <Link to={"detail/" + item._id}> Watch Video</Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blogs;
