"use client";

import service from "@/utils/conf";
import { use, useEffect, useState } from "react";

export default function Page({ params }) {
  const { slug } = use(params);

  const [response, setResponse] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBlog = async () => {
      try {
        const data = await service.getPost(slug);
        console.log(data);

        setResponse(data);
      } catch (error) {
        console.error("Failed to fetch blog:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchBlog();
  }, [slug]);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (!response) {
    return <p>Blog not found.</p>;
  }

  return (
    <main className="mx-auto max-w-4xl px-4 py-10 sm:px-6 lg:px-8">
      <article>
        {/* Title */}
        <h1 className="text-4xl font-bold  text-center leading-tight tracking-tight text-gray-900 sm:text-5xl">
          {response.title}
        </h1>

        {/* Author & Date */}
        <div className="mt-4 flex items-center justify-center gap-3 text-sm text-gray-500">
          <span>By {response.authorName || "site owner"}</span>
          <span>•</span>
          <time dateTime={response.$createdAt}>
            {new Date(response.$createdAt).toLocaleDateString("en-IN", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </time>
        </div>

        {/* Image */}
        <img
          src={response.imageUrl}
          alt={response.title}
          className="mt-8 w-225 h-95 rounded-lg object-cover"
        />

        {/* Description */}
        <div
          className="mt-8 prose prose-lg max-w-none text-gray-700 break-words"
          dangerouslySetInnerHTML={{
            __html: response.description,
          }}
        />
      </article>
    </main>
  );
}
