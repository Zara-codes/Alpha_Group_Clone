import React from "react"

import webProgramming from "../assets/webProgramming.png"
import data from "../assets/data.png"
import bullhorn from "../assets/bullhorn.png"
import sms from "../assets/sms.png"
import training from "../assets/training.png"
import ServicesCards from "./ServicesCards"

const servicesData = [
  {
    image: webProgramming,
    title: "Web & App Development",
    description: "Build responsive, user-friendly platforms",
  },
  {
    image: data,
    title: "Cloud Hosting & Domain",
    description: "Secure, scalable, and reliable infrastructure.",
  },
  {
    image: bullhorn,
    title: "Digital Marketing & SEO",
    description: "Boost visibility, reach, and growth.",
  },
  {
    image: sms,
    title: "Bulk SMS & Communication",
    description: "Stay connected with your audience.",
  },
  {
    image: training,
    title: "Training & Support",
    description: "Upskill teams with expert-led IT education.",
  },
]

const OurServices = () => {
  return (
    <section className="bg-gray-50 py-24">
      <div className="mx-auto max-w-7xl px-6">

        {/* Header */}
        {/* <div className="mb-16 text-center">
          <p className="text-sm font-semibold uppercase tracking-wide text-blue-600">
            Our Services
          </p>
          <h2 className="mt-2 text-3xl font-bold text-gray-900 md:text-4xl">
            Discover IT Auditing & Business Services
          </h2>
        </div> */}

        {/* Grid */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">

          {/* 🔹 First Column – Intro */}
          <div className="flex flex-col justify-center rounded-xl p-8 text-blue-600 shadow-lg">
            <h3 className="text-2xl">
              Our Services
            </h3>

            <p className="mt-4 text-black font-bold text-4xl">
              Discover IT Auditing & Business Services
            </p>

            <button className="mt-6 w-fit rounded-md bg-white px-6 py-3 font-semibold text-blue-600 transition hover:bg-blue-100">
              Explore Services
            </button>
          </div>

          {/* 🔹 Service Cards */}
          {servicesData.map((service, index) => (
            <ServicesCards
              key={index}
              image={service.image}
              title={service.title}
              description={service.description}
            />
          ))}

        </div>

      </div>
    </section>
  )
}

export default OurServices
