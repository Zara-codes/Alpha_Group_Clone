import React, { useRef } from "react"
import { Swiper, SwiperSlide } from "swiper/react"
import { Autoplay, Navigation } from "swiper/modules"
import { MdChevronLeft, MdChevronRight, MdFormatQuote } from "react-icons/md"

import "swiper/css"
import "swiper/css/navigation"

// 👉 Example profile images (replace with real ones)
import user1 from "../assets/user1.avif"
import user2 from "../assets/user2.avif"
import user3 from "../assets/user3.avif"

const testimonials = [
  {
    text: "Alpha Group helped us launch quickly and grow revenue fast.",
    name: "Sujan",
    role: "RetailCo",
    image: user1,
  },
  {
    text: "Excellent Customer Service and Support",
    name: "Albert Flores",
    role: "CEO - Flores Group",
    image: user2,
  },
  {
    text: "Alpha Group helped us launch quickly and grow revenue fast.",
    name: "Sujan",
    role: "RetailCo",
    image: user3,
  },
  {
    text: "Alpha Group helped us launch quickly and grow revenue fast.",
    name: "Sujan",
    role: "RetailCo",
    image: user1,
  },
  {
    text: "Excellent Customer Service and Support",
    name: "Albert Flores",
    role: "CEO - Flores Group",
    image: user2,
  },
  {
    text: "Alpha Group helped us launch quickly and grow revenue fast.",
    name: "Sujan",
    role: "RetailCo",
    image: user1,
  },
]

const Testimonials = () => {
  const prevRef = useRef(null)
  const nextRef = useRef(null)

  return (
    <section className="bg-gray-50 py-24">
      <div className="mx-auto max-w-7xl px-6">

        {/* Header */}
        <div className="mb-14 text-center">
          <p className="text-sm font-semibold uppercase tracking-wide text-blue-600">
            Testimonial
          </p>
          <h2 className="mt-3 text-3xl font-bold text-gray-900 md:text-4xl">
            What Saying Our Customers
          </h2>
        </div>

        {/* Carousel */}
        <div className="relative">

          {/* Left Arrow */}
          <button
            ref={prevRef}
            className="absolute -left-4 top-1/2 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white text-blue-600 shadow hover:bg-gray-100 transition"
          >
            <MdChevronLeft size={28} />
          </button>

          <Swiper
            modules={[Autoplay, Navigation]}
            autoplay={{ delay: 3500, disableOnInteraction: false }}
            loop
            spaceBetween={30}
            navigation={{
              prevEl: prevRef.current,
              nextEl: nextRef.current,
            }}
            onBeforeInit={(swiper) => {
              swiper.params.navigation.prevEl = prevRef.current
              swiper.params.navigation.nextEl = nextRef.current
            }}
            breakpoints={{
              320: { slidesPerView: 1 },
              640: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
          >
            {testimonials.map((item, index) => (
              <SwiperSlide key={index}>
                <div className="flex h-full flex-col rounded-2xl bg-white p-8 shadow-md transition hover:-translate-y-1 hover:shadow-xl">

                  {/* Quote Icon */}
                  <MdFormatQuote className="mb-4 text-4xl text-blue-600" />

                  {/* Testimonial Text */}
                  <p className="flex-grow text-gray-700">
                    “{item.text}”
                  </p>

                  {/* Profile */}
                  <div className="mt-8 flex items-center gap-4">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="h-12 w-12 rounded-full object-cover border-2 border-blue-600"
                    />
                    <div>
                      <h4 className="font-semibold text-gray-900">
                        {item.name}
                      </h4>
                      <p className="text-sm text-gray-500">
                        {item.role}
                      </p>
                    </div>
                  </div>

                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Right Arrow */}
          <button
            ref={nextRef}
            className="absolute -right-4 top-1/2 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white text-blue-600 shadow hover:bg-gray-100 transition"
          >
            <MdChevronRight size={28} />
          </button>

        </div>
      </div>
    </section>
  )
}

export default Testimonials
