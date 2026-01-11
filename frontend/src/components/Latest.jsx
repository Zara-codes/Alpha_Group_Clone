import React from "react"
import { Link } from "react-router-dom"
import blogPosts from "../data/blogPosts"

const Latest = () => {
  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-6">

        <div className="mb-16 text-center">
          <p className="text-sm font-semibold uppercase tracking-wide text-blue-600">
            Latest Updates
          </p>
          <h2 className="mt-3 text-3xl font-bold text-gray-900 md:text-4xl">
            Latest from Alpha Khabar
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {blogPosts.map((post) => (
            <div
              key={post.slug}
              className="flex flex-col rounded-2xl bg-gray-50 p-8 shadow hover:-translate-y-1 hover:shadow-xl transition"
            >
              <h3 className="text-xl font-semibold text-gray-900">
                {post.title}
              </h3>

              <p className="mt-4 flex-grow text-gray-600">
                {post.excerpt}
              </p>

              <Link
                to={`/blog/${post.slug}`}
                className="mt-6 w-fit font-semibold text-blue-600 hover:underline"
              >
                Read More →
              </Link>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}

export default Latest
