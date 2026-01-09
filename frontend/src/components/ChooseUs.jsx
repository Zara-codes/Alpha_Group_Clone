import React from "react"
import chooseUsImg from "../assets/chooseUsImg.jpg"
import { MdCheck } from "react-icons/md"

const ChooseUs = () => {
  return (
    <section className="relative min-h-[120vh] bg-blue-800">

      <div className="mx-auto flex min-h-screen max-w-7xl items-center px-6 text-white">
        <div className="grid grid-cols-1 items-center gap-16 md:grid-cols-2">

          {/* Left */}
          <div className="relative flex justify-center md:justify-start">
            <div className="hexagon overflow-hidden shadow-xl">
              <img
                src={chooseUsImg}
                alt="Why Choose Us"
                className="h-full w-full object-cover object-bottom"
              />
            </div>
          </div>

          {/* Right */}
          <div>
            <p className="text-2xl font-semibold uppercase tracking-wide">
              Why Choose Us?
            </p>

            <h2 className="mt-3 text-3xl font-bold md:text-4xl">
              Your Reliable Digital Partner
            </h2>

            <ul className="mt-10 space-y-6">
              {[
                "7+ years of trusted experience in technology and innovation",
                "One-stop hub for all digital needs — from web to cloud",
                "Scalable solutions for startups, enterprises, and non-profits",
                "Dedicated team focused on client success and long-term partnerships",
              ].map((text, index) => (
                <li key={index} className="flex items-start gap-4 text-lg md:text-xl">
                  <span className="mt-1 flex h-8 w-8 items-center justify-center rounded-full bg-white">
                    <MdCheck className="text-xl text-blue-800" />
                  </span>
                  <span>{text}</span>
                </li>
              ))}
            </ul>
          </div>

        </div>
      </div>

      <style jsx>{`
        .hexagon {
          width: 320px;
          height: 360px;
          clip-path: polygon(
            50% 0%,
            100% 25%,
            100% 75%,
            50% 100%,
            0% 75%,
            0% 25%
          );
        }
      `}</style>
    </section>
  )
}

export default ChooseUs
