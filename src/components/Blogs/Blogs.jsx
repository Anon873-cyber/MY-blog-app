"use client";
import React, { useState, useEffect } from "react";
import service from "../../utils/conf";
import authService from "@/utils/auth";
import BlogBox from "../BlogBox";
import { useRouter } from "next/navigation";

function Blogs() {
  const [blogs, setBlogs] = useState([]);
  const [admin, setadmin] = useState(false);
  const router = useRouter();
  useEffect(() => {
    const posts = async () => {
      try {
        const response = await service.getPosts();
        setBlogs(response.documents);
        console.log(response.documents);
      } catch (error) {
        console.error(error);
      }
    };

    posts();
  }, []);
  useEffect(() => {
    async function verifyUser() {
      const isadmin = await authService.getCurrentUser();

      if (isadmin) {
        console.log("dsldsdoskdosadposakd");
        setadmin(true);
      }
    }
    verifyUser()
  }, []);

  const handleclick = (blogId) => {
    // Handle the click event for the blog with the given blogId
    console.log(`Blog with ID ${blogId} clicked!`);
    router.push(`/blog/${blogId}`);
  };

  const handleDelete = async (id) => {
    const blog = await service.getPost(id);

    if (blog) {
      const imageID = await service.getAppwriteFileId(blog?.imageUrl);
      if (imageID) {
        await service.deleteFile(imageID);
      }
      const deleteBlog = await service.deletePost(id);
      if (deleteBlog) {
        alert("Blog Deleted Successfully");
      }
    }
  };
  const handleEdit = async (id) => {
 
    router.push(`edit/${id}`)

  };

  return (
    <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {blogs.map((blog) => (
        <BlogBox
          key={blog.$id}
          id={blog.$id}
          imageurl={blog.imageUrl}
          title={blog.title}
          onClick={() => handleclick(blog.$id)}
          handleDelete={handleDelete}
          handleEdit={handleEdit}
          editoptions={admin}
        />
      ))}
    </section>
  );
}

export default Blogs;
