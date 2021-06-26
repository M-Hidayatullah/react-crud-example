import React, { useState, useEffect } from "react";
import BlogLists from "./BlogLists";
import useFetch from "../hooks/useFetch";

const Home = () => {
  const {
    error,
    isPending,
    data: blogs,
  } = useFetch("http://localhost:8000/blogs");

  return (
    <div className="home">
      {error && <div className="error-message">{error}</div>}
      {isPending && <div className="loading-message">Loading...</div>}
      {blogs && <BlogLists blogs={blogs} />}
    </div>
  );
};

export default Home;
