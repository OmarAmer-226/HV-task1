import { useQuery } from "@tanstack/react-query";

function Home() {
  const {
    data: posts,
    isLoading,
    isError,
    error,
  } = useQuery({
    queryKey: ["posts"],
    queryFn: async () => {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/posts"
      );

      if (!response.ok) {
        throw new Error("Failed to fetch posts");
      }

      return response.json();
    },
  });

  if (isLoading) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <p className="text-xl font-semibold text-gray-600">
          Loading posts...
        </p>
      </div>
    );
  }

  if (isError) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <p className="text-xl font-semibold text-red-500">
          Error: {error.message}
        </p>
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-gray-100 px-6 py-10">
      <div className="mx-auto max-w-7xl">
        <h1 className="mb-8 text-3xl font-bold text-gray-900">
          Posts
        </h1>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {posts.map((post) => (
            <article
              key={post.id}
              className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
            >
              <h2 className="mb-3 text-lg font-bold capitalize text-gray-900">
                {post.title}
              </h2>

              <p className="leading-6 text-gray-600">
                {post.body}
              </p>
            </article>
          ))}
        </div>
      </div>
    </main>
  );
}

export default Home;