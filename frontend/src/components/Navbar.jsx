import { useState } from "react"
import React from "react"
import { MdKeyboardArrowDown } from "react-icons/md"


const Navbar = () => {
  const [aboutOpen, setAboutOpen] = useState(false)
  const [servicesOpen, setServicesOpen] = useState(false)

  return (
    <nav className="sticky top-0 z-50 bg-white shadow">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex h-16 items-center justify-between">

          {/* Logo */}
          <div className="text-xl font-bold text-blue-600">
            AlphaDev
          </div>

          {/* Menu */}
          <ul className="flex items-center space-x-8 text-sm font-medium text-gray-700">

            <li className="hover:text-blue-600 cursor-pointer">
              Home
            </li>

            {/* About Dropdown */}
            <li className="relative group">
              <span className="inline-flex items-center gap-1 cursor-pointer hover:text-blue-600">
                About
                <MdKeyboardArrowDown className="text-lg transition-transform duration-200 group-hover:rotate-180" />
              </span>

              <div className="invisible absolute left-0 top-full mt-3 w-64 rounded-lg bg-white shadow-lg border
                  opacity-0 transition-all duration-200
                  group-hover:visible group-hover:opacity-100">
                <ul className="py-2 text-sm text-gray-700">
                  {[
                    "Who We Are",
                    "Our Story",
                    "Timeline",
                    "Our Values",
                    "Mission & Vision",
                    "History",
                    "Leadership",
                    "Awards & Recognition",
                    "Associated Partners",
                  ].map(item => (
                    <li
                      key={item}
                      className="px-4 py-2 hover:bg-blue-50 hover:text-blue-600 cursor-pointer"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </li>


            {/* Services Dropdown */}
            <li
              className="relative"
              onMouseEnter={() => setServicesOpen(true)}
              onMouseLeave={() => setServicesOpen(false)}
            >
              <span className="inline-flex items-center gap-1 cursor-pointer hover:text-blue-600">
                Services
                <MdKeyboardArrowDown className="text-lg transition-transform duration-200 group-hover:rotate-180" />
              </span>

              {servicesOpen && (
                <div className="absolute left-0 top-full mt-3 w-80 rounded-lg bg-white shadow-lg border">
                  <ul className="py-2 text-sm text-gray-700">
                    {[
                      "Website Development",
                      "App Development",
                      "IT Training & Technical Support",
                      "Software Development",
                      "Digital Marketing & SEO",
                      "Domain Registration & Management",
                      "Cloud Hosting & Server Solutions",
                      "Bulk SMS Services"
                    ].map(service => (
                      <li
                        key={service}
                        className="px-4 py-2 hover:bg-blue-50 hover:text-blue-600 cursor-pointer"
                      >
                        {service}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </li>

            <li className="relative group">
  <span className="inline-flex items-center gap-1 cursor-pointer hover:text-blue-600">
    Agencies
    <MdKeyboardArrowDown className="text-lg transition-transform duration-200 group-hover:rotate-180" />
  </span>

  <div
    className="invisible absolute left-0 top-full mt-3 w-64 rounded-lg bg-white shadow-lg border
               opacity-0 transition-all duration-200
               group-hover:visible group-hover:opacity-100"
  >
    <ul className="py-2 text-sm text-gray-700">
      {[
        "Alpha Technology",
        "Alpha Bajar",
        "Alpha Academy",
        "Alpha Domain",
        "Alpha Host",
        "Alpha Khabar",
        "Alpha Ric",
        "Alpha SMS",
        "eAlpha",
        "eAlphaSoft",
      ].map(agency => (
        <li
          key={agency}
          className="px-4 py-2 hover:bg-blue-50 hover:text-blue-600 cursor-pointer"
        >
          {agency}
        </li>
      ))}
    </ul>
  </div>
</li>


            {/* Contact Button */}
            <li>
              <button className="rounded-md bg-blue-600 px-4 py-2 text-white hover:bg-blue-700 transition">
                Contact
              </button>
            </li>

          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
