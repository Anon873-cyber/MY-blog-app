
import React from "react";

function Contact() {
  return (
    <main className="mx-auto flex min-h-[70vh] max-w-4xl flex-col justify-center px-6 py-16">
      <div className="space-y-8">

        <p className="text-sm font-medium uppercase tracking-widest text-gray-500">
          Get in touch
        </p>

        <div className="space-y-5">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
            Let’s connect.
          </h1>

          <p className="max-w-2xl text-lg leading-8 text-gray-600">
            If you’re interested in my projects, ideas, or the things I’m
            learning, feel free to connect with me.
          </p>

          <p className="max-w-2xl text-lg leading-8 text-gray-600">
            I’m always interested in learning, building things, and exploring
            ideas around science, computing, artificial intelligence, and
            quantum technology.
          </p>
        </div>

        <div className="pt-4">
          <a
            href="https://github.com/Anon873-cyber"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 rounded-lg border border-gray-300 px-5 py-3 text-gray-900"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="h-5 w-5"
            >
              <path d="M12 2C6.477 2 2 6.477 2 12c0 4.418 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.009-1.026-.014-1.86-2.782.604-3.369-1.18-3.369-1.18-.455-1.157-1.11-1.465-1.11-1.465-.908-.621.069-.609.069-.609 1.004.071 1.532 1.03 1.532 1.03.892 1.529 2.341 1.087 2.91.832.091-.647.349-1.087.635-1.337-2.22-.253-4.555-1.111-4.555-4.943 0-1.091.39-1.984 1.029-2.682-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.564 9.564 0 0 1 12 6.844a9.56 9.56 0 0 1 2.504.337c1.909-1.294 2.748-1.025 2.748-1.025.546 1.377.202 2.394.1 2.647.64.698 1.028 1.591 1.028 2.682 0 3.841-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.337-.012 2.415-.012 2.743 0 .267.18.578.688.48A10.001 10.001 0 0 0 22 12C22 6.477 17.523 2 12 2Z" />
            </svg>

            <span>View my GitHub</span>
          </a>
        </div>

        <p className="pt-8 text-sm text-gray-500">
          I’m still learning and building — this website is part of that
          journey.
        </p>

      </div>
    </main>
  );
}

export default Contact;

