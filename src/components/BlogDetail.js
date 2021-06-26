import React from "react";
import { useParams } from "react-router-dom";
import useFetch from "../hooks/useFetch";

const BlogDetail = () => {
  const { id } = useParams();
  const {
    data: blog,
    error,
    isPending,
  } = useFetch("http://localhost:8000/blogs/" + id);

  return (
    <div className="blog-detail">
      {isPending && <div class="loading-message">Loading...</div>}
      {error && <div class="error-message">{error}</div>}
      {blog && (
        <article>
          <h2>{blog.title}</h2>
          <p>Written By : {blog.author}</p>
          <div>{blog.body}</div>
        </article>
      )}
    </div>
  );
};

export default BlogDetail;
