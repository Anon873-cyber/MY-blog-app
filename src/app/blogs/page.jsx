
import React from "react";
import Blogs from "@/components/Blogs/Blogs";

function Page() {
  return (
    <main className="min-h-screen bg-white">
      <section className="mx-auto max-w-6xl px-6 py-16">
        {/* Header */}
        <header className="mx-auto max-w-3xl text-center">
          <p className="mb-3 text-sm font-medium uppercase tracking-widest text-gray-500">
            My Journal
          </p>

          <h1 className="text-4xl font-bold tracking-tight text-gray-800 sm:text-5xl">
            Things I’m learning & exploring
          </h1>

          <p className="mt-5 text-lg leading-8 text-gray-600">
            A collection of things I’ve learned, questions I’ve asked,
            projects I’ve built, and ideas I’ve been thinking about.
          </p>

          <p className="mt-3 text-base leading-7 text-gray-500">
            From mathematics and physics to computing, AI, and quantum science
            — this is where I document my journey.
          </p>
        </header>

        {/* Divider */}
        <div className="my-12 border-t border-gray-200" />

        {/* Blog Section */}
        <section>
          <div className="mb-8 flex items-end justify-between">
            <div>
              <h2 className="text-2xl font-semibold tracking-tight text-gray-800">
                Recent posts
              </h2>

              <p className="mt-2 text-sm text-gray-500">
                What has been on my mind lately.
              </p>
            </div>
          </div>

          <div className="rounded-2xl">
            <Blogs />
          </div>
        </section>
      </section>
    </main>
  );
}

export default Page;

