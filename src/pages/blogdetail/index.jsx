import React, { useEffect, useState } from "react";
import "./index.scss";
import axios from "axios";
import { useParams } from "react-router-dom";
import { Helmet } from "react-helmet-async";

const BlogDetail = () => {
  const { id } = useParams();
  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get(`https://glamify-back.onrender.com/blogs/${id}`)
      .then((response) => {
        setBlog(response.data);
        setTimeout(() => {
          setLoading(false);
        }, 2300);
      })
      .catch((error) => console.error("API error:", error));
  }, [id]);

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
    <>
      <Helmet>
        <title> Glamify | {blog.title}</title>
      </Helmet>
      <div id="blog_detail_page">
        <div className="blog_detail_page_container">
          <div className="blog_detail_page_context">
            <h2>{blog.title}</h2>
            <p className="blog_detail_page_description">{blog.description}</p>
            {blog.steps &&
              blog.steps.map((step, index) => (
                <div key={index} className="step">
                  <h3>Step {index + 1}</h3>
                  <p>{step}</p>
                </div>
              ))}
          </div>
          <video
            className="blog_detail_page_video"
            src={blog.video}
            autoPlay
            loop
            controls
            muted
            playsInline
          ></video>
        </div>
      </div>
    </>
  );
};

export default BlogDetail;
