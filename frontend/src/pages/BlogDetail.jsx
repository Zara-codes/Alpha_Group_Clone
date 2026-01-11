import React from "react"
import { useParams, Link } from "react-router-dom"
import blogPosts from "../data/blogPosts"

const BlogDetail = () => {
  const { slug } = useParams()
  const post = blogPosts.find((p) => p.slug === slug)

  if (!post) {
    return (
      <div className="py-24 text-center">
        <h2 className="text-2xl font-bold">Post not found</h2>
        <Link to="/" className="text-blue-600 underline">
          Go back home
        </Link>
      </div>
    )
  }

  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-4xl px-6">

        <p className="text-sm uppercase text-blue-600">{post.category}</p>

        <h1 className="mt-2 text-4xl font-bold text-gray-900">
          {post.title}
        </h1>

        <p className="mt-2 text-sm text-gray-500">
          By {post.author} • {post.date}
        </p>

        <div className="prose prose-lg mt-10 max-w-none text-gray-700 whitespace-pre-line">
          {post.content}
        </div>

        <Link
          to="/"
          className="mt-12 inline-block font-semibold text-blue-600 hover:underline"
        >
          ← Back to Home
        </Link>

      </div>
    </section>
  )
}

export default BlogDetail
