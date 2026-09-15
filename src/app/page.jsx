
export default function page() {
  return (
    <main className="mx-auto flex min-h-[70vh] max-w-5xl flex-col justify-center px-6 py-16">
      <div className="space-y-10">
        {/* Intro */}
        <p className="text-center text-sm font-medium uppercase tracking-widest text-gray-500">
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

          {/* About */}
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
          </div>
        </div>

        {/* Blog Introduction */}
        <section className="border-t  border-gray-200 pt-10">
          <div className="max-w-3xl ">
            <h2 className="text-3xl text-center font-semibold tracking-tight text-gray-800">
              What I learn, dream, see, and think.
            </h2>

            <p className="mt-5 text-lg leading-8 text-gray-600">
              This blog is my little corner of the internet where I write about
              the things that make me curious.
            </p>

            <p className="mt-4 text-lg leading-8 text-gray-600">
              Sometimes that means writing about something I’ve just learned
              in mathematics or physics. Sometimes it’s a programming project,
              an interesting idea, a strange question, or something I noticed
              while exploring the world around me.
            </p>

            <p className="mt-4 text-lg leading-8 text-gray-600">
              I also write about the things I dream about — ideas I want to
              understand, experiments I want to build, technologies I want to
              explore, and questions that don’t yet have easy answers.
            </p>

            <p className="mt-4 text-lg leading-8 text-gray-600">
              Not everything here will be perfectly polished. Some posts may
              simply be thoughts in progress. That’s part of the journey.
            </p>

            <p className="mt-4 text-lg leading-8 text-gray-600">
              <span className="font-medium text-gray-900">
                I’m learning, building, questioning, and documenting the
                journey.
              </span>
            </p>
          </div>
        </section>

        {/* Blog CTA */}
        <section className="pt-4 text-center">
          <a
            href="/blogs"
            className="inline-block rounded-lg border border-gray-300 px-6 py-3 text-sm font-medium text-gray-800"
          >
            Explore my blog →
          </a>
        </section>
      </div>
    </main>
  );
}

