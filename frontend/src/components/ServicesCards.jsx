import React from "react"

const ServicesCards = ({ image, title, description }) => {
  return (
    <div className="group rounded-xl bg-white p-6 shadow-md transition hover:-translate-y-1 hover:shadow-xl">

      {/* 🔹 Top Center Image */}
      <div className="flex justify-center">
        <img
          src={image}
          alt={title}
          className="h-20 w-20 rounded-lg object-contain"
        />
      </div>

      {/* 🔹 Content */}
      <div className="mt-5 text-center">
        <h3 className="text-lg font-semibold text-gray-900">
          {title}
        </h3>

        <p className="mt-2 text-sm text-gray-600 line-clamp-2">
          {description}
        </p>
      </div>

    </div>
  )
}

export default ServicesCards
