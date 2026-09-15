"use client";

import React, { useEffect, useState } from "react";
import authService from "@/utils/auth";
import service from "@/utils/conf";

import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";

function BlogForm({ post }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [disabled, setDisabled] = useState(!post);
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");

  const [formData, setFormData] = useState({
    title: post?.title || "",
  });

  // -----------------------------
  // Authentication
  // -----------------------------

  useEffect(() => {
    const checkUser = async () => {
      try {
        const currentUser = await authService.getCurrentUser();
        setUser(currentUser);
      } catch (error) {
        console.log("User is not logged in");
        setUser(null);
      } finally {
        setLoading(false);
      }
    };

    checkUser();
  }, []);

  // -----------------------------
  // Tiptap Editor
  // -----------------------------

  const editor = useEditor({
    immediatelyRender: true,
    extensions: [StarterKit],
    content: post?.description || "",
    onUpdate: () => {
      setDisabled(false);
    },
  });

  // -----------------------------
  // Input Change
  // -----------------------------

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    setDisabled(false);
  };

  // -----------------------------
  // Submit
  // -----------------------------

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!editor) return;

    setDisabled(true);
    setError("");
    setSuccess("");

    try {
      const imageFile = e.target.image.files[0];

      let imageUrl = post?.imageUrl || "";

      if (imageFile) {
        const uploadedFile = await service.uploadFile(imageFile);

        imageUrl = service.getFilePreview(uploadedFile.$id);

        // Delete old image when editing
        if (post?.imageUrl) {
          const previousImageId = await service.getAppwriteFileId(post.imageUrl);
          console.log("delete prev ", previousImageId);
          if (previousImageId) {
          const status =  await service.deleteFile(previousImageId);
          console.log(status,"deleting prev img")
          }
        }
      }

      // --------------------------------
      // Data for Appwrite
      // --------------------------------

      const postData = {
        ...formData,
        description: editor.getHTML(),
        imageUrl,
        
      };

      // --------------------------------
      // EDIT
      // --------------------------------

      if (post) {
        console.log("Updating post:", postData);

        const response = await service.updatePost(post.$id, postData);

        if (response) {
          setSuccess("Blog updated successfully");
        }
      }

      // --------------------------------
      // CREATE
      // --------------------------------
      else {
        console.log("Creating post:", postData);

        const response = await service.createPost(postData);

        if (response) {
          setSuccess("Blog created successfully");

          setFormData({
            title: "",
          });

          editor.commands.clearContent();
        }
      }
    } catch (error) {
      console.error(error);
      setError(error.message || "Something went wrong");
    } finally {
      setDisabled(false);
    }
  };

  // -----------------------------
  // Loading
  // -----------------------------

  if (loading) {
    return (
      <main className="flex min-h-[80vh] items-center justify-center px-6">
        <p className="text-gray-500">Checking authentication...</p>
      </main>
    );
  }

  // -----------------------------
  // Unauthorized
  // -----------------------------

  if (!user) {
    return (
      <main className="flex min-h-[80vh] items-center justify-center px-6">
        <div className="text-center">
          <h1 className="text-3xl font-semibold">404 - Page Not Found</h1>

          <p className="mt-2 text-gray-500">
            You don't have permission to access this page.
          </p>
        </div>
      </main>
    );
  }

  // -----------------------------
  // Form
  // -----------------------------

  return (
    <main className="mx-auto max-w-4xl px-4 py-10">
      {/* Success */}
      {success && (
        <div className="mb-5 rounded-xl border border-green-600 bg-green-400 p-3">
          {success}
        </div>
      )}

      {/* Error */}
      {error && (
        <div className="mb-5 rounded-xl border border-red-600 bg-red-400 p-3">
          {error}
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Header */}

        <div>
          <h1 className="text-3xl font-bold">
            {post ? "Edit Blog Post" : "Create Blog Post"}
          </h1>

          <p className="mt-1 text-gray-500">
            {post ? "Update your article." : "Write and publish a new article."}
          </p>
        </div>

        {/* Title */}

        <div>
          <label htmlFor="title" className="mb-2 block font-medium">
            Title
          </label>

          <input
            id="title"
            name="title"
            type="text"
            value={formData.title}
            onChange={handleChange}
            placeholder="Enter blog title"
            required
            className="w-full rounded-md border border-gray-300 px-4 py-3 outline-none focus:border-black"
          />
        </div>

        {/* Cover Image */}

        <div>
          <label htmlFor="image" className="mb-2 block font-medium">
            Cover Image
          </label>

          <input
            id="image"
            name="image"
            type="file"
            accept="image/*"
            onChange={() => setDisabled(false)}
            className="w-full rounded-md border border-gray-300 px-4 py-3 outline-none"
          />

          {post?.imageUrl && (
            <div className="mt-3">
              <p className="mb-2 text-sm text-gray-500">Current image:</p>

              <img
                src={post.imageUrl}
                alt={post.title}
                className="h-40 w-full rounded-lg object-cover"
              />
            </div>
          )}
        </div>

        {/* Tiptap Editor */}

        <div>
          <label className="mb-2 block font-medium">Blog Content</label>

          {/* Toolbar */}

          <div className="flex flex-wrap gap-2 border border-b-0 border-gray-300 p-2">
            <button
              type="button"
              onClick={() => editor?.chain().focus().toggleBold().run()}
              className={`rounded px-3 py-1 ${
                editor?.isActive("bold") ? "bg-gray-200" : "hover:bg-gray-100"
              }`}
            >
              <strong>B</strong>
            </button>

            <button
              type="button"
              onClick={() => editor?.chain().focus().toggleItalic().run()}
              className={`rounded px-3 py-1 ${
                editor?.isActive("italic") ? "bg-gray-200" : "hover:bg-gray-100"
              }`}
            >
              <em>I</em>
            </button>

            <button
              type="button"
              onClick={() =>
                editor?.chain().focus().toggleHeading({ level: 2 }).run()
              }
              className="rounded px-3 py-1 hover:bg-gray-100"
            >
              H2
            </button>

            <button
              type="button"
              onClick={() =>
                editor?.chain().focus().toggleHeading({ level: 3 }).run()
              }
              className="rounded px-3 py-1 hover:bg-gray-100"
            >
              H3
            </button>

            <button
              type="button"
              onClick={() => editor?.chain().focus().toggleBulletList().run()}
              className="rounded px-3 py-1 hover:bg-gray-100"
            >
              • List
            </button>

            <button
              type="button"
              onClick={() => editor?.chain().focus().toggleOrderedList().run()}
              className="rounded px-3 py-1 hover:bg-gray-100"
            >
              1. List
            </button>

            <button
              type="button"
              onClick={() => editor?.chain().focus().toggleBlockquote().run()}
              className="rounded px-3 py-1 hover:bg-gray-100"
            >
              Quote
            </button>

            <button
              type="button"
              onClick={() => editor?.chain().focus().toggleCodeBlock().run()}
              className="rounded px-3 py-1 hover:bg-gray-100"
            >
              Code
            </button>
          </div>

          {/* Editor */}

          <div className="min-h-[400px] border border-gray-300 p-4">
            <EditorContent editor={editor} />
          </div>
        </div>

        {/* Submit */}

        <button
          disabled={disabled}
          type="submit"
          className="rounded-md bg-black px-6 py-3 font-medium text-white transition
          hover:opacity-80
          disabled:cursor-not-allowed
          disabled:bg-gray-400
          disabled:hover:opacity-100"
        >
          {post ? "Update Post" : "Publish Post"}
        </button>
      </form>
    </main>
  );
}

export default BlogForm;
