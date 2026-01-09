import React from "react"
import { MdBusinessCenter } from "react-icons/md"

const agencies = [
  { name: "Alpha Technology", role: "Main Agency" },
  { name: "Alpha Academy", role: "Education & Training" },
  { name: "Alpha Bajar", role: "E-commerce" },
  { name: "Alpha Domain", role: "Domains" },
  { name: "Alpha Host", role: "Hosting" },
  { name: "Alpha Khabar", role: "News & Media" },
  { name: "eAlpha", role: "Marketplace" },
  { name: "eAlphaSoft", role: "Custom Software" },
  { name: "Alpha SMS", role: "Messaging" },
  { name: "Alpha Ric", role: "Messaging" },
]

const OurAgencies = () => {
  return (
    <section className="relative z-20 -mt-[20vh] bg-transparent pb-24">

      {/* Floating Card */}
      <div className="mx-auto w-[90%] rounded-3xl bg-white px-10 py-20 shadow-2xl">

        {/* Header */}
        <div className="mb-16 text-center">
          <p className="text-sm font-semibold uppercase tracking-wide text-blue-600">
            Our Agencies
          </p>
          <h2 className="mt-2 text-3xl font-bold text-gray-900 md:text-4xl">
            Our Specialized Agencies
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-gray-600">
            Alpha Group operates multiple ventures to provide end-to-end digital solutions
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {agencies.map((agency, index) => (
            <div
              key={index}
              className="group rounded-xl border border-gray-100 bg-white p-6 text-center shadow-md transition hover:-translate-y-1 hover:shadow-xl"
            >
              {/* Icon */}
              <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-blue-600 text-white">
                <MdBusinessCenter className="text-xl" />
              </div>

              {/* Text */}
              <h3 className="text-lg font-semibold text-gray-900 group-hover:text-blue-600">
                {agency.name}
              </h3>
              <p className="mt-1 text-sm text-gray-600">
                {agency.role}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}

export default OurAgencies
