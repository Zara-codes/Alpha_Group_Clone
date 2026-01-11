import React, { useRef } from "react"
import { Swiper, SwiperSlide } from "swiper/react"
import { Autoplay, Navigation } from "swiper/modules"
import { MdChevronLeft, MdChevronRight } from "react-icons/md"

import "swiper/css"
import "swiper/css/navigation"

import Logo1 from "../assets/company1.jpg"
import Logo2 from "../assets/company2.jpg"
import Logo3 from "../assets/company3.jpg"
import Logo4 from "../assets/company4.jpg"
import Logo5 from "../assets/company5.jpg"
import Logo6 from "../assets/company6.jpg"
import Logo7 from "../assets/company7.jpg"

const companies = [
  Logo1,
  Logo2,
  Logo3,
  Logo4,
  Logo5,
  Logo6,
  Logo7,
]

const TrustedBy = () => {
  const prevRef = useRef(null)
  const nextRef = useRef(null)

  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-6">

        {/* Header */}
        <div className="mb-12 text-center">
          <p className="text-sm font-semibold uppercase tracking-wide text-blue-600">
            Trusted By Companies
          </p>
          <h2 className="mt-3 text-3xl font-bold text-gray-900">
            Powering Businesses Worldwide
          </h2>
        </div>

        {/* Carousel */}
        <div className="relative flex items-center">

          {/* Left Arrow */}
          <button
            ref={prevRef}
            className="absolute left-0 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-gray-100 text-blue-600 shadow hover:bg-gray-200 transition"
          >
            <MdChevronLeft size={28} />
          </button>

          <Swiper
            modules={[Autoplay, Navigation]}
            autoplay={{ delay: 2500, disableOnInteraction: false }}
            loop
            spaceBetween={40}
            navigation={{
              prevEl: prevRef.current,
              nextEl: nextRef.current,
            }}
            onBeforeInit={(swiper) => {
              swiper.params.navigation.prevEl = prevRef.current
              swiper.params.navigation.nextEl = nextRef.current
            }}
            breakpoints={{
              320: { slidesPerView: 2 },
              640: { slidesPerView: 3 },
              1024: { slidesPerView: 5 },
            }}
            className="w-full px-12"
          >
            {companies.map((logo, index) => (
              <SwiperSlide key={index}>
                <div className="flex h-20 items-center justify-center">
                  <img
                    src={logo}
                    alt="Company Logo"
                    className="h-14 w-auto grayscale transition hover:grayscale-0"
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Right Arrow */}
          <button
            ref={nextRef}
            className="absolute right-0 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-gray-100 text-blue-600 shadow hover:bg-gray-200 transition"
          >
            <MdChevronRight size={28} />
          </button>

        </div>
      </div>
    </section>
  )
}

export default TrustedBy
