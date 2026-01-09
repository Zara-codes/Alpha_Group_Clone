import React from "react"
import {
  MdSchool,
  MdLocalHospital,
  MdStore,
  MdApartment,
  MdShoppingCart,
  MdRocketLaunch,
  MdBusiness,
  MdVolunteerActivism,
} from "react-icons/md"

const industries = [
  {
    title: "Education",
    description:
      "Digital platforms and learning solutions that enhance teaching, improve administration, and support modern educational experiences.",
    icon: MdSchool,
  },
  {
    title: "Healthcare",
    description:
      "Secure and reliable healthcare solutions designed to streamline patient management, appointments, and digital health services.",
    icon: MdLocalHospital,
  },
  {
    title: "Retail",
    description:
      "Technology solutions that help retailers manage sales, inventory, and customer engagement across online and offline channels.",
    icon: MdStore,
  },
  {
    title: "Real Estate",
    description:
      "Smart digital tools for property listings, lead management, virtual tours, and customer relationship management.",
    icon: MdApartment,
  },
  {
    title: "E-commerce",
    description:
      "Scalable e-commerce solutions built to support online selling, payment integration, order management, and customer growth.",
    icon: MdShoppingCart,
  },
  {
    title: "Startups",
    description:
      "Flexible and cost-effective technology solutions that help startups launch faster, scale smarter, and innovate confidently.",
    icon: MdRocketLaunch,
  },
  {
    title: "Corporate",
    description:
      "Enterprise-level digital solutions focused on automation, data security, operational efficiency, and long-term growth.",
    icon: MdBusiness,
  },
  {
    title: "Non-profits",
    description:
      "Purpose-driven digital solutions that help non-profit organizations increase reach, manage donors, and maximize social impact.",
    icon: MdVolunteerActivism,
  },
]

const IndustriesWeServe = () => {
  return (
    <section className="bg-slate-700 py-24">
      <div className="mx-auto max-w-7xl px-6">

        {/* 🔹 Section Header */}
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <h1 className="text-4xl font-semibold uppercase tracking-wide text-white">
            Industries We Serve
          </h1>
          <p className="mt-6 text-lg text-white">
            Delivering tailored digital solutions across diverse industries to
            solve real-world business challenges.
          </p>
        </div>

        {/* 🔹 Industry Cards */}
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {industries.map((industry, index) => {
            const Icon = industry.icon
            return (
              <div
                key={index}
                className="group rounded-2xl border bg-gray-50 p-6 transition hover:-translate-y-1 hover:border-blue-600 hover:bg-white hover:shadow-xl"
              >
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-blue-600 text-white">
                  <Icon className="text-xl" />
                </div>

                <h3 className="mb-3 text-lg font-semibold text-gray-900 group-hover:text-blue-600">
                  {industry.title}
                </h3>

                <p className="text-sm leading-relaxed text-gray-600">
                  {industry.description}
                </p>
              </div>
            )
          })}
        </div>

      </div>
    </section>
  )
}

export default IndustriesWeServe
