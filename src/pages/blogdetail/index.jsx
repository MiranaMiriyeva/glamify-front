import React, { useEffect, useState } from "react";
import "./index.scss";
import axios from "axios";
import { useParams } from "react-router-dom";

const BlogDetail = () => {
  const { id } = useParams();
  const [blog, setBlog] = useState(null);

  useEffect(() => {
    axios
      .get(`http://localhost:3000/glamify/blogs/${id}`)
      .then((response) => {
        setBlog(response.data);
      })
      .catch((error) => console.error("API error:", error));
  }, [id]);

  if (!blog) {
    return <div>Loading...</div>; // veya bir yükleme spinner'ı göster
  }

  return (
    <>
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
          ></video>
        </div>
      </div>
    </>
  );
};

export default BlogDetail;
