import React from "react"
import { MdPhone, MdCalendarToday } from "react-icons/md"
import { FaWhatsapp } from "react-icons/fa"

const CTASection = () => {
  return (
    <section className="mx-6 mb-20 rounded-2xl bg-blue-600 py-16 md:mx-20">
      <div className="mx-auto max-w-7xl px-6">

        <div className="flex flex-col items-center justify-between gap-10 text-white md:flex-row">

          {/* Left Content */}
          <div className="max-w-xl text-center md:text-left">
            <h2 className="text-3xl font-bold md:text-4xl">
              Ready to Transform Your Business?
            </h2>

            <p className="mt-4 text-lg text-blue-100">
              Let’s build your digital future together with innovative solutions
              tailored to your needs.
            </p>
          </div>

          {/* Right Actions */}
          <div className="flex flex-col items-center gap-4 sm:flex-row">

            {/* Book Consultation */}
            <button
  type="button"
  className="flex items-center gap-2 rounded-lg bg-white px-6 py-3 font-semibold text-blue-600 transition hover:bg-gray-100"
>
  <MdCalendarToday className="text-xl" />
  Book Free Consultation
</button>


            {/* WhatsApp */}
            <a
              href="https://wa.me/9779807070767"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 rounded-lg border border-white px-6 py-3 font-semibold transition hover:bg-white hover:text-blue-600"
            >
              <FaWhatsapp className="text-xl" />
              WhatsApp Us
            </a>

            {/* Phone */}
            <div className="flex items-center gap-2 text-lg font-semibold">
              <MdPhone className="text-xl" />
              +977 9807070767
            </div>

          </div>

        </div>
      </div>
    </section>
  )
}

export default CTASection
