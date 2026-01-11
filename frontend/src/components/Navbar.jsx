import React, { useState } from "react"
import { MdKeyboardArrowDown, MdMenu, MdClose } from "react-icons/md"
import { HiOutlineViewGrid } from "react-icons/hi"

const apps = [
  { name: "Alpha Mail", icon: "📧" },
  { name: "Alpha Drive", icon: "☁️" },
  { name: "Alpha Docs", icon: "📄" },
  { name: "Alpha Sheets", icon: "📊" },
  { name: "Alpha Meet", icon: "🎥" },
  { name: "Alpha Chat", icon: "💬" },
  { name: "Alpha CRM", icon: "🧩" },
  { name: "Alpha SMS", icon: "📩" },
  { name: "Alpha Cloud", icon: "🚀" },
]

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [appsOpen, setAppsOpen] = useState(false)

  return (
    <nav className="sticky top-0 z-50 bg-white shadow">
      <div className="mx-auto max-w-7xl px-6">

        {/* Top Bar */}
        <div className="flex h-16 items-center justify-between">

          {/* Logo */}
          <div className="text-xl font-bold text-blue-600">
            AlphaDev
          </div>

          {/* Desktop Menu */}
          <ul className="hidden items-center space-x-8 text-sm font-medium text-gray-700 md:flex">

            <li className="cursor-pointer hover:text-blue-600">Home</li>

            <li className="relative group">
              <span className="inline-flex cursor-pointer items-center gap-1 hover:text-blue-600">
                About
                <MdKeyboardArrowDown className="text-lg transition-transform group-hover:rotate-180" />
              </span>

              <div
                className="
      invisible absolute left-0 top-full mt-2 w-64
      rounded-lg border bg-white shadow-lg
      opacity-0 transition-all duration-200
      group-hover:visible group-hover:opacity-100
    "
              >
                <ul className="py-2 text-sm text-gray-700">
                  {[
                    "Who We Are",
                    "Our Story",
                    "Timeline",
                    "Our Values",
                    "Mission & Vision",
                    "Leadership",
                    "Awards & Recognition",
                    "Associated Partners",
                  ].map(item => (
                    <li
                      key={item}
                      className="cursor-pointer px-4 py-2 hover:bg-blue-50 hover:text-blue-600"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </li>

            <li className="relative group">
              <span className="inline-flex cursor-pointer items-center gap-1 hover:text-blue-600">
                Services
                <MdKeyboardArrowDown className="text-lg transition-transform group-hover:rotate-180" />
              </span>

              <div
                className="
      invisible absolute left-0 top-full mt-2 w-80
      rounded-lg border bg-white shadow-lg
      opacity-0 transition-all duration-200
      group-hover:visible group-hover:opacity-100
    "
              >
                <ul className="py-2 text-sm text-gray-700">
                  {[
                    "Website Development",
                    "App Development",
                    "IT Training & Technical Support",
                    "Software Development",
                    "Digital Marketing & SEO",
                    "Domain Registration & Management",
                    "Cloud Hosting & Server Solutions",
                    "Bulk SMS Services",
                  ].map(service => (
                    <li
                      key={service}
                      className="cursor-pointer px-4 py-2 hover:bg-blue-50 hover:text-blue-600"
                    >
                      {service}
                    </li>
                  ))}
                </ul>
              </div>
            </li>

            <li className="relative group">
              <span className="inline-flex cursor-pointer items-center gap-1 hover:text-blue-600">
                Agencies
                <MdKeyboardArrowDown className="text-lg transition-transform group-hover:rotate-180" />
              </span>

              <div
                className="
      invisible absolute left-0 top-full mt-2 w-64
      rounded-lg border bg-white shadow-lg
      opacity-0 transition-all duration-200
      group-hover:visible group-hover:opacity-100
    "
              >
                <ul className="py-2 text-sm text-gray-700">
                  {[
                    "Alpha Technology",
                    "Alpha Bajar",
                    "Alpha Academy",
                    "Alpha Domain",
                    "Alpha Host",
                    "Alpha Khabar",
                    "Alpha SMS",
                    "eAlpha",
                    "eAlphaSoft",
                  ].map(agency => (
                    <li
                      key={agency}
                      className="cursor-pointer px-4 py-2 hover:bg-blue-50 hover:text-blue-600"
                    >
                      {agency}
                    </li>
                  ))}
                </ul>
              </div>
            </li>


            {/* Apps Menu */}
            {/* Apps Menu */}
            <li className="relative group">
              <button className="rounded-full p-2 hover:bg-blue-600 hover:text-white">
                <HiOutlineViewGrid className="text-xl" />
              </button>

              <div
                className="
      invisible absolute right-0 top-full mt-2 w-80
      rounded-xl border bg-white shadow-xl
      opacity-0 transition-all duration-200
      group-hover:visible group-hover:opacity-100
    "
              >
                <div className="grid grid-cols-3 gap-4 p-4 text-center">
                  {apps.map(app => (
                    <div
                      key={app.name}
                      className="flex cursor-pointer flex-col items-center rounded-lg p-3 hover:bg-blue-50"
                    >
                      <span className="text-2xl">{app.icon}</span>
                      <span className="mt-2 text-sm font-medium text-gray-700">
                        {app.name}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </li>


            {/* Contact */}
            <li>
              <button className="rounded-md bg-blue-600 px-4 py-2 text-white transition hover:bg-blue-700">
                Contact
              </button>
            </li>
          </ul>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? <MdClose size={26} /> : <MdMenu size={26} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileOpen && (
          <div className="md:hidden border-t pb-6">

            <ul className="flex flex-col gap-4 pt-6 text-sm font-medium text-gray-700">

              <li className="hover:text-blue-600">Home</li>
              <li className="relative group">
                <span className="inline-flex cursor-pointer items-center gap-1 hover:text-blue-600">
                  About
                  <MdKeyboardArrowDown className="text-lg transition-transform group-hover:rotate-180" />
                </span>

                <div
                  className="
      invisible absolute left-0 top-full mt-2 w-64
      rounded-lg border bg-white shadow-lg
      opacity-0 transition-all duration-200
      group-hover:visible group-hover:opacity-100
    "
                >
                  <ul className="py-2 text-sm text-gray-700">
                    {[
                      "Who We Are",
                      "Our Story",
                      "Timeline",
                      "Our Values",
                      "Mission & Vision",
                      "Leadership",
                      "Awards & Recognition",
                      "Associated Partners",
                    ].map(item => (
                      <li
                        key={item}
                        className="cursor-pointer px-4 py-2 hover:bg-blue-50 hover:text-blue-600"
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </li>

              <li className="hover:text-blue-600">Services</li>
              <li className="relative group">
                <span className="inline-flex cursor-pointer items-center gap-1 hover:text-blue-600">
                  Agencies
                  <MdKeyboardArrowDown className="text-lg transition-transform group-hover:rotate-180" />
                </span>

                <div
                  className="
      invisible absolute left-0 top-full mt-2 w-64
      rounded-lg border bg-white shadow-lg
      opacity-0 transition-all duration-200
      group-hover:visible group-hover:opacity-100
    "
                >
                  <ul className="py-2 text-sm text-gray-700">
                    {[
                      "Alpha Technology",
                      "Alpha Bajar",
                      "Alpha Academy",
                      "Alpha Domain",
                      "Alpha Host",
                      "Alpha Khabar",
                      "Alpha SMS",
                      "eAlpha",
                      "eAlphaSoft",
                    ].map(agency => (
                      <li
                        key={agency}
                        className="cursor-pointer px-4 py-2 hover:bg-blue-50 hover:text-blue-600"
                      >
                        {agency}
                      </li>
                    ))}
                  </ul>
                </div>
              </li>


              {/* Mobile Apps Grid */}
              <div className="mt-4">
                <p className="mb-2 text-xs font-semibold uppercase text-gray-500">
                  Alpha Apps
                </p>

                <div className="grid grid-cols-3 gap-4">
                  {apps.map(app => (
                    <div
                      key={app.name}
                      className="flex flex-col items-center rounded-lg p-3 hover:bg-blue-50"
                    >
                      <span className="text-2xl">{app.icon}</span>
                      <span className="mt-1 text-xs text-gray-700">
                        {app.name}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <button className="mt-6 rounded-md bg-blue-600 px-4 py-2 text-white">
                Contact
              </button>

            </ul>
          </div>
        )}

      </div>
    </nav>
  )
}

export default Navbar
