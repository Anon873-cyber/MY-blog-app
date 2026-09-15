import React from "react";

function BlogBox({ editoptions=false,handleDelete,id,handleEdit,imageurl, title,...props}) {
  console.log(handleEdit)
  return (
 <article
  className="w-full max-w-md overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition hover:shadow-md"
 
>
  {/* Image */}
  <div className="aspect-video w-full overflow-hidden bg-gray-100">
    <img
      src={imageurl}
      alt={title}
      className="h-full w-full object-cover transition duration-300 hover:scale-105"
    />
  </div>

  {/* Content */}
  <div className="p-5">
    <h2 className="line-clamp-2 text-xl font-bold leading-snug text-gray-900">
      {title}
    </h2>

    {/* Actions */}
    <div className="mt-6 flex items-center justify-between">
      <button
        type="button"
        className="text-sm font-medium text-gray-700 transition hover:text-black"
        {...props}
      >
        Read more →
      </button>

      <div className={`flex items-center gap-3 ${editoptions?"block":"hidden"}`}>
        <button
          type="button"
          className="rounded-md px-2 py-1 text-sm text-blue-600 hover:bg-blue-50"
          onClick={() => { handleEdit(id) }}
        >
          Edit

        </button>

        <button
          type="button"
          className="rounded-md px-2 py-1 text-sm text-red-600 hover:bg-red-50"
          onClick={() => { handleDelete(id) }}
        >
          Delete
        </button>
      </div>
    </div>
  </div>
</article>
  );
}

export default BlogBox;