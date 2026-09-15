import React from "react";

function page() {
  return (
    <main className="mx-auto flex min-h-[70vh] max-w-5xl flex-col justify-center px-6 py-16">
      <div className="space-y-6">
        <p className="text-sm text-center font-medium uppercase tracking-widest text-gray-500">
          Science • Computing • Exploration
        </p>

        <div className="flex flex-col gap-10 md:flex-row md:items-start">
          {/* Image */}
          <div className="shrink-0">
            <img
              src="https://fra.cloud.appwrite.io/v1/storage/buckets/6aa6df5000261e8da0c4/files/6aa6f36c002af0626e27/view?project=6a8afe49000862cfbaf7&impersonateuserid=&mode=admin"
              alt="Aditya"
              className="h-64 w-64 rounded-lg object-cover"
            />
          </div>

          {/* Text */}
          <div className="space-y-5">
            <h1 className="text-4xl font-bold tracking-tight text-gray-800 sm:text-5xl">
              Hi! I’m Aditya.
            </h1>

            <p className="max-w-2xl text-lg leading-8 text-gray-600">
              I’m a science student fascinated by mathematics, physics, and
              computing.
            </p>

            <p className="max-w-2xl text-lg leading-8 text-gray-600">
              I love understanding how things work — from the fundamental laws
              of nature to the systems and programs we build with computers.
            </p>

            <p className="max-w-2xl text-lg leading-8 text-gray-600">
              I’m particularly passionate about{" "}
              <span className="font-medium text-gray-900">
                quantum science and computing
              </span>
              , artificial intelligence, and the mathematics behind them.
            </p>

            <p className="max-w-2xl text-lg leading-8 text-gray-600">
              This website is where I share what I learn, the things I build,
              and the questions I explore along the way.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}

export default page;
