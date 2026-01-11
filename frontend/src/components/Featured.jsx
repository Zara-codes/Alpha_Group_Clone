import React from "react"
import { MdTrendingUp, MdPeople, MdCloudDone } from "react-icons/md"
import Featured1 from "../assets/Featured1.jpg"
import Featured2 from "../assets/Featured2.jpg"
import Featured3 from "../assets/Featured3.jpg"

const caseStudies = [
  {
    title: "Retail E-commerce",
    result: "200% increase in sales in 4 months",
    icon: MdTrendingUp,
    image: Featured1,
  },
  {
    title: "Mobile App Engagement",
    result: "50% increase in active users",
    icon: MdPeople,
    image: Featured2,
  },
  {
    title: "Cloud Hosting Migration",
    result: "99.99% uptime achieved",
    icon: MdCloudDone,
    image: Featured3,
  },
]

const Featured = () => {
  return (
    <section className="bg-gray-50 py-24">
      <div className="mx-auto max-w-7xl px-6">

        {/* 🔹 Section Header */}
        <div className="mb-20 text-center">
          <p className="text-sm font-semibold uppercase tracking-wide text-blue-600">
            Featured Case Studies
          </p>

          <h2 className="mt-3 text-3xl font-bold text-gray-900 md:text-4xl">
            Proven Results, Real Impact
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg text-gray-600">
            Explore real-world success stories showcasing how our digital solutions
            deliver measurable growth, performance improvements, and business impact
            across industries.
          </p>
        </div>

        {/* 🔹 Image Cards Row */}
        <div className="grid grid-cols-1 gap-12 md:grid-cols-3">
          {caseStudies.map((item, index) => {
            const Icon = item.icon
            return (
              <div key={index} className="relative">

                {/* Image */}
                <div className="overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="h-[320px] w-full object-cover"
                  />
                </div>

                {/* Floating Card */}
                <div className="absolute left-1/2 top-[70%] w-[90%] -translate-x-1/2 rounded-2xl bg-white p-6 text-center shadow-xl">
                  <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-blue-600 text-white">
                    <Icon className="text-xl" />
                  </div>

                  <h3 className="text-lg font-semibold text-gray-900">
                    {item.title}
                  </h3>

                  <p className="mt-2 text-sm text-gray-600">
                    {item.result}
                  </p>
                </div>

              </div>
            )
          })}
        </div>

      </div>
    </section>
  )
}

export default Featured
