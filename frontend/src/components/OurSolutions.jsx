import React from "react"
import {
  MdShoppingCart,
  MdEventAvailable,
  MdCloudDone,
  MdSms,
} from "react-icons/md"
import Solutions from "../assets/Solutions.jpg"

const solutions = [
  { title: "E-commerce Solutions", icon: MdShoppingCart },
  { title: "Booking & Reservation", icon: MdEventAvailable },
  { title: "Managed Hosting Plan", icon: MdCloudDone },
  { title: "SMS & Communication Packs", icon: MdSms },
]

const OurSolutions = () => {
  return (
    <section className="bg-gray-50 py-24">
      <div className="mx-auto max-w-7xl px-6">

        {/* 🔹 GRID */}
        <div className="grid grid-cols-1 gap-16 md:grid-cols-2">

          {/* 🔹 LEFT SECTION */}
          <div>
            <p className="text-4xl font-semibold uppercase tracking-wide text-blue-600">
              Our Solutions & Products
            </p>

            <h2 className="mt-3 text-3xl font-bold text-gray-900 md:text-4xl">
              Smart Digital Solutions
            </h2>

            <p className="mt-6 max-w-lg text-lg text-gray-600">
              Innovative digital solutions designed to streamline operations,
              enhance customer engagement, and drive business growth.
            </p>

            {/* Image */}
            <div className="mt-10">
              <img
                src={Solutions}
                alt="Our Solutions"
                className="w-full max-w-md rounded-2xl object-cover shadow-xl"
              />
            </div>
          </div>

          {/* 🔹 RIGHT SECTION */}
          <div className="grid grid-cols-1 gap-6">
            {solutions.map((solution, index) => {
              const Icon = solution.icon
              return (
                <div
                  key={index}
                  className="group flex items-center gap-4 rounded-xl bg-white p-6 shadow-md transition hover:-translate-y-1 hover:shadow-xl"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-blue-600 text-white">
                    <Icon className="text-xl" />
                  </div>

                  <h3 className="text-lg font-semibold text-gray-900 group-hover:text-blue-600">
                    {solution.title}
                  </h3>
                </div>
              )
            })}
          </div>

        </div>
      </div>
    </section>
  )
}

export default OurSolutions
