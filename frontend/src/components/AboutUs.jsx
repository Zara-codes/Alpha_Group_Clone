import React from 'react'
import about from "../assets/about.jpg"
import about1 from "../assets/about1.jpg"
import { MdArrowForward } from "react-icons/md"
import { FaWhatsapp } from "react-icons/fa"

const AboutUs = () => {
    return (
        <section className="bg-white py-24">
            <div className="mx-auto max-w-7xl px-6">
                <div className="grid grid-cols-1 items-center gap-16 md:grid-cols-2">

                    {/* 🔹 Left Images */}
                    <div className="relative inline-block">

  {/* Main Image */}
  <img
    src={about}
    alt="About Alpha Group"
    className="w-full max-w-md object-cover shadow-xl"
    style={{
      clipPath:
        "polygon(8% 0%, 100% 0%, 100% 92%, 92% 100%, 0% 100%, 0% 8%)",
    }}
  />

  {/* Overlay Image — centered in right half */}
  <img
    src={about1}
    alt="Team at work"
    className="absolute left-3/4 top-1/2 w-1/3 -translate-x-1/2 -translate-y-1/2 rounded-xl border-4 border-white object-cover shadow-2xl"
  />

</div>


                    {/* 🔹 Right Content */}
                    <div>
                        <p className="mb-2 text-sm font-semibold uppercase tracking-wide text-blue-600">
                            About Us
                        </p>

                        <h2 className="text-3xl font-bold leading-tight text-gray-900 md:text-4xl">
                            Empowering Businesses <br /> with Technology
                        </h2>

                        <p className="mt-6 text-gray-600 leading-relaxed">
                            Since 2018, Alpha Group has been a trusted digital partner for
                            organizations across industries. As a parent company managing
                            multiple ventures — including Alpha Technology, Alpha Academy,
                            Alpha Bajar, Alpha Domain, Alpha Host, Alpha SMS, and more — we
                            provide end-to-end technology services tailored to your business
                            growth.
                        </p>

                        {/* Buttons */}
                        <div className="mt-8 flex flex-wrap items-center gap-6">

  {/* Discover Button */}
  <button className="group flex items-center gap-2 rounded-md bg-blue-600 px-6 py-3 font-semibold text-white transition hover:bg-blue-700">
    Discover More
    <MdArrowForward className="transition-transform group-hover:translate-x-1" />
  </button>

  {/* WhatsApp Info */}
  <div className="flex items-center gap-3 font-semibold">
    <FaWhatsapp className="text-2xl text-blue-600" />

    <div className="flex flex-col leading-tight">
      <span className="text-gray-900">WhatsApp Us</span>
      <span className="text-gray-700">+977 9807070767</span>
    </div>
  </div>

</div>

                    </div>

                </div>
            </div>
        </section>
    )
}

export default AboutUs
