import React from "react"
import { 
  MdVerified, 
  MdCloudDone, 
  MdWorkspaces, 
  MdEmojiEvents 
} from "react-icons/md"

const excellenceItems = [
  {
    icon: MdCloudDone,
    text: "Certified Cloud & Web Solutions Partner",
  },
  {
    icon: MdWorkspaces,
    text: "500+ Successful Projects Delivered",
  },
  {
    icon: MdVerified,
    text: "Trusted by Clients Across Multiple Industries",
  },
  {
    icon: MdEmojiEvents,
    text: "Awarded “Emerging Technology Company”",
  },
]

const RecognizedExcellence = () => {
  return (
    <section className="bg-gray-50 py-24">
      <div className="mx-auto max-w-7xl px-6">

        <div className="grid grid-cols-1 gap-16 md:grid-cols-2 items-center">

          {/* 🔹 Left Content */}
          <div>
            <p className="text-sm font-semibold uppercase tracking-wide text-blue-600">
              Recognized for Excellence
            </p>

            <h2 className="mt-3 text-3xl font-bold text-gray-900 md:text-4xl">
              Trusted. Certified. Awarded.
            </h2>

            <p className="mt-6 max-w-xl text-lg text-gray-600">
              We are proud to be acknowledged for our commitment to innovation,
              quality, and customer satisfaction. Our awards, certifications,
              and milestones reflect our dedication to delivering reliable and
              impactful digital solutions.
            </p>

            <button className="mt-8 inline-flex items-center gap-2 rounded-lg bg-blue-600 px-6 py-3 font-semibold text-white transition hover:bg-blue-700">
              Learn More
            </button>
          </div>

          {/* 🔹 Right Highlights */}
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            {excellenceItems.map((item, index) => {
              const Icon = item.icon
              return (
                <div
                  key={index}
                  className="flex items-start gap-4 rounded-xl bg-white p-6 shadow-md"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-blue-600 text-white">
                    <Icon className="text-xl" />
                  </div>

                  <p className="text-lg font-semibold text-gray-900">
                    {item.text}
                  </p>
                </div>
              )
            })}
          </div>

        </div>

      </div>
    </section>
  )
}

export default RecognizedExcellence
