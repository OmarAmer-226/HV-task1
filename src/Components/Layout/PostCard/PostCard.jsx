function PostCard({ post }) {
  return (
    <article className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-md">
      <h2 className="mb-3 text-lg font-bold capitalize text-gray-900">
        {post.title}
      </h2>

      <p className="text-sm leading-6 text-gray-600">
        {post.body}
      </p>
    </article>
  );
}

export default PostCard;