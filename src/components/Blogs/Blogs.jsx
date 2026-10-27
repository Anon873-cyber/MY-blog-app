
"use client";

import React, { useState, useEffect } from "react";
import service from "../../utils/conf";
import authService from "@/utils/auth";
import BlogBox from "../BlogBox";
import { useRouter } from "next/navigation";

function Blogs() {
  const [blogs, setBlogs] = useState([]);
  const [admin, setAdmin] = useState(false);
  const [loading, setLoading] = useState(true);

  const router = useRouter();

  // Fetch blogs
  useEffect(() => {
    let cancelled = false;

    async function fetchBlogs() {
      try {
        const response = await service.getPosts();

        const sortedBlogs = [...(response?.documents ?? [])].sort(
          (a, b) =>
            new Date(b.$createdAt).getTime() -
            new Date(a.$createdAt).getTime()
        );

        if (!cancelled) {
          setBlogs(sortedBlogs);
        }
      } catch (error) {
        console.error("Error fetching blogs:", error);
      } finally {
        if (!cancelled) {
          setLoading(false);
        }
      }
    }

    fetchBlogs();

    return () => {
      cancelled = true;
    };
  }, []);

  // Verify current user
  useEffect(() => {
    let cancelled = false;

    async function verifyUser() {
      try {
        const user = await authService.getCurrentUser();

        if (!cancelled) {
          // Replace this check with your actual admin-role
          // verification if getCurrentUser() returns any user.
          setAdmin(Boolean(user?.isAdmin));
        }
      } catch (error) {
        console.error("Error verifying user:", error);

        if (!cancelled) {
          setAdmin(false);
        }
      }
    }

    verifyUser();

    return () => {
      cancelled = true;
    };
  }, []);

  // Open blog
  const handleClick = (blogId) => {
    router.push(`/blog/${blogId}`);
  };

  // Delete blog
  const handleDelete = async (id) => {
    try {
      const blog = await service.getPost(id);

      if (!blog) {
        alert("Blog not found.");
        return;
      }

      const imageID = await service.getAppwriteFileId(
        blog.imageUrl
      );

      // Delete the image if one exists
      if (imageID) {
        await service.deleteFile(imageID);
      }

      const deleted = await service.deletePost(id);

      if (deleted) {
        setBlogs((prevBlogs) =>
          prevBlogs.filter((item) => item.$id !== id)
        );

        alert("Blog deleted successfully.");
      } else {
        alert("Could not delete the blog.");
      }
    } catch (error) {
      console.error("Error deleting blog:", error);
      alert("An error occurred while deleting the blog.");
    }
  };

  // Edit blog
  const handleEdit = (id) => {
    router.push(`/edit/${id}`);
  };

  if (loading) {
    return <p>Loading blogs...</p>;
  }

  if (blogs.length === 0) {
    return <p>No blogs found.</p>;
  }

  return (
    <section className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {blogs.map((blog) => (
        <BlogBox
          key={blog.$id}
          id={blog.$id}
          imageurl={blog.imageUrl}
          title={blog.title}
          onClick={() => handleClick(blog.$id)}
          handleDelete={handleDelete}
          handleEdit={handleEdit}
          editoptions={admin}
        />
      ))}
    </section>
  );
}

export default Blogs;
