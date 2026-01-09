import React from "react"
import { MdEmail, MdPhone, MdSearch } from "react-icons/md"
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
  FaPinterestP,
} from "react-icons/fa"

const ContactHeader = () => {
  return (
    <header className="w-full">

      {/* 🔹 Top Info Bar */}
      <div className="bg-gray-100 text-gray-800 text-sm">
        <div className="mx-auto max-w-7xl px-6">
          <div className="flex h-10 items-center justify-between">

            {/* Contact Info */}
            <div className="flex items-center gap-6">
              <div className="flex items-center gap-2">
                <MdEmail className="text-blue-500" />
                <span>email@companyname.com.np</span>
              </div>
              <div className="flex items-center gap-2">
                <MdPhone className="text-blue-500" />
                <span>+977 9876543210</span>
              </div>
            </div>

            {/* Social Media + Search */}
            <div className="flex items-center gap-4">
              <a href="#" className="hover:text-blue-600 transition">
                <FaFacebookF />
              </a>
              <a href="#" className="hover:text-blue-600 transition">
                <FaTwitter />
              </a>
              <a href="#" className="hover:text-blue-600 transition">
                <FaLinkedinIn />
              </a>
              <a href="#" className="hover:text-blue-600 transition">
                <FaInstagram />
              </a>
              <a href="#" className="hover:text-blue-600 transition">
                <FaPinterestP />
              </a>

              {/* Search Button */}
              <button className="ml-2 rounded-full border border-gray-300 p-1.5 hover:bg-gray-200 transition">
                <MdSearch className="text-gray-700" />
              </button>
            </div>

          </div>
        </div>
      </div>

      {/* 🔹 Main Navbar */}
      <div className="bg-white shadow">
        <div className="mx-auto max-w-7xl px-6">
          <nav className="flex h-16 items-center justify-between">

            {/* Logo */}
            <div className="text-xl font-bold text-blue-600 cursor-pointer">
              AlphaDev
            </div>

            {/* Nav Links */}
            <ul className="flex items-center gap-8 text-sm font-medium text-gray-700">
              <li className="hover:text-blue-600 cursor-pointer">Home</li>
              <li className="hover:text-blue-600 cursor-pointer">About</li>
              <li className="hover:text-blue-600 cursor-pointer">Services</li>
              <li className="hover:text-blue-600 cursor-pointer">Teams</li>
              <li className="hover:text-blue-600 cursor-pointer">Blog</li>
              <li>
                <button className="rounded-md bg-blue-600 px-4 py-2 text-white hover:bg-blue-700 transition">
                  Contact
                </button>
              </li>
            </ul>

          </nav>
        </div>
      </div>

    </header>
  )
}

export default ContactHeader
