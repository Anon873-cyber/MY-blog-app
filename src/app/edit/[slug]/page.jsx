"use client";

import React, { use, useEffect, useState } from "react";
import service from "@/utils/conf";
import BlogForm from "@/components/BlogForm/BlogForm";

function EditBlog({ params }) {
  const { slug } = use(params);
  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBlog = async () => {
      try {
        const post = await service.getPost(slug);
        setBlog(post);
      } catch (error) {
        console.error("Failed to fetch blog:", error);
      } finally {
        setLoading(false);
      }
    };

    if (slug) {
      fetchBlog();
    }
  }, [slug]);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (!blog) {
    return <p>Blog not found.</p>;
  }

  return <BlogForm post={blog} />;
}

export default EditBlog;