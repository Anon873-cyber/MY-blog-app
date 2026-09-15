"use client";

import React from "react";
import { useRouter } from "next/navigation";

function Page() {
	const router = useRouter();

	const editorDeleteBlog = () => {
		router.push("/blogs");
	};

	const createBlog = () => {
		router.push("/manage-blog");
	};

	return (
		<main className="min-h-screen bg-gray-50 px-6 py-12">
			<div className="mx-auto max-w-3xl">
				{/* Header */}
				<div className="mb-10">
					<p className="mb-2 text-sm font-medium text-gray-500">
						Blog Dashboard
					</p>
					<h1 className="text-3xl font-bold tracking-tight text-gray-900">
						Add or Edit a Blog
					</h1>
					<p className="mt-2 text-gray-600">
						Create a new post or manage your existing blog posts.
					</p>
				</div>

				{/* Options */}
				<div className="grid gap-5 sm:grid-cols-2">
					{/* Edit Blog */}
					<button
						onClick={editorDeleteBlog}
						className="group rounded-xl border border-gray-200 bg-white p-6 text-left shadow-sm transition hover:-translate-y-1 hover:shadow-md"
					>
						<div className="mb-5 flex h-12 w-12 items-center justify-center rounded-lg bg-gray-100 text-xl">
							✏️
						</div>
						<h2 className="text-xl font-semibold text-gray-900">Edit Blog</h2>
						<p className="mt-2 text-sm leading-6 text-gray-500">
							View, edit, or manage your existing blog posts.
						</p>
						<span className="mt-5 inline-block text-sm font-medium text-gray-900">
							Manage posts →
						</span>
					</button>

					{/* Create Blog */}
					<button
						onClick={createBlog}
						className="group rounded-xl border border-gray-200 bg-white p-6 text-left shadow-sm transition hover:-translate-y-1 hover:shadow-md"
					>
						<div className="mb-5 flex h-12 w-12 items-center justify-center rounded-lg bg-gray-100 text-xl">
							+
						</div>
						<h2 className="text-xl font-semibold text-gray-900">
							Create Blog
						</h2>
						<p className="mt-2 text-sm leading-6 text-gray-500">
							Write and publish a new article to your blog.
						</p>
						<span className="mt-5 inline-block text-sm font-medium text-gray-900">
							Create a post →
						</span>
					</button>
				</div>

				{/* Back */}
				<button
					onClick={() => router.back()}
					className="mt-8 text-sm font-medium text-gray-500 transition hover:text-gray-900"
				>
					← Go back
				</button>
			</div>
		</main>
	);
}

export default Page;