import React from "react"
import banner_01 from "../assets/banner_01.png"
import { MdChevronRight } from "react-icons/md"


const HeroSection = () => {
  return (
    <section className="relative bg-slate-900">
      <div className="mx-auto max-w-7xl px-6 py-24">
        <div className="grid grid-cols-1 items-center gap-12 md:grid-cols-2">

          {/* 🔹 Left Content */}
          <div>
            <h1 className="text-4xl font-bold leading-tight text-white md:text-5xl">
              Stay Digital. <br />
              <span className="text-white">Stay Ahead.</span>
            </h1>

            <p className="mt-6 max-w-lg text-lg text-blue-100">
              Alpha Group is a dynamic network of technology-driven companies delivering simple, scalable, and impactful digital solutions. From web development and cloud hosting to digital marketing, domains, and education — we help businesses and individuals thrive in the digital era
            </p>

            <div className="mt-8 flex gap-4">
              <button className="flex items-center gap-1 rounded-md bg-blue-600 px-6 py-3 font-semibold text-white transition hover:bg-blue-500">
                Get Started
                <MdChevronRight className="text-2xl" />
              </button>
            </div>

          </div>

          {/* 🔹 Right Image Section */}
          <div className="relative flex justify-start">

            {/* 🔵 Circular Badge */}
            <div className="absolute -top-6 left-0 z-10 flex h-28 w-28 items-center justify-center rounded-full border-2 border-white bg-slate-700 text-center text-base font-semibold text-white shadow-xl">
              Explore <br /> Services
            </div>

            {/* 🖼 Hero Image */}
            <img
              src={banner_01}
              alt="Hero"
              className="mt-8 ml-10 w-full max-w-md rounded-xl object-cover shadow-2xl"
            />
          </div>


        </div>
      </div>
    </section>
  )
}

export default HeroSection
