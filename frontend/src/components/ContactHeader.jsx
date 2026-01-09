import React, { useState } from "react"
import { MdEmail, MdPhone, MdMenu, MdClose } from "react-icons/md"
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
  FaPinterestP,
} from "react-icons/fa"

const ContactHeader = () => {
  const [open, setOpen] = useState(false)

  return (
    <header className="w-full overflow-x-hidden">

      {/* 🔹 TOP BAR (desktop only) */}
      <div className="hidden md:block bg-gray-100 text-sm text-gray-700">
        <div className="mx-auto max-w-7xl px-6 py-2">
          <div className="flex flex-wrap justify-between gap-4">

            {/* Contact */}
            <div className="flex flex-wrap gap-6">
              <div className="flex items-center gap-2 max-w-xs">
                <MdEmail className="text-blue-600 shrink-0" />
                <span className="break-all text-xs">
                  email@companyname.com.np
                </span>
              </div>

              <div className="flex items-center gap-2">
                <MdPhone className="text-blue-600 shrink-0" />
                <span className="text-xs">+977 9876543210</span>
              </div>
            </div>

            {/* Social */}
            <div className="flex flex-wrap items-center gap-4">
              {[FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram, FaPinterestP].map(
                (Icon, i) => (
                  <Icon
                    key={i}
                    className="cursor-pointer hover:text-blue-600"
                  />
                )
              )}
            </div>

          </div>
        </div>
      </div>

      {/* 🔹 NAVBAR */}
      <div className="bg-white shadow">
        <div className="mx-auto max-w-7xl px-4">
          <div className="flex min-h-[64px] items-center justify-between">

            {/* Logo */}
            <div className="text-lg font-bold text-blue-600">
              AlphaDev
            </div>

            {/* Burger */}
            <button
              className="md:hidden text-2xl"
              onClick={() => setOpen(!open)}
            >
              {open ? <MdClose /> : <MdMenu />}
            </button>

            {/* Desktop Menu */}
            <ul className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-700">
              {["Home", "About", "Services", "Teams", "Blog"].map(item => (
                <li key={item} className="cursor-pointer hover:text-blue-600">
                  {item}
                </li>
              ))}
              <button className="rounded-md bg-blue-600 px-4 py-2 text-white">
                Contact
              </button>
            </ul>

          </div>
        </div>

        {/* 🔹 MOBILE MENU */}
        {/* 🔹 MOBILE MENU */}
        {open && (
          <div className="md:hidden bg-white border-t overflow-x-hidden">
            <ul className="flex flex-col gap-4 px-4 py-6 text-sm text-gray-700 overflow-hidden">

              {["Home", "About", "Services", "Teams", "Blog"].map(item => (
                <li
                  key={item}
                  className="cursor-pointer hover:text-blue-600"
                  onClick={() => setOpen(false)}
                >
                  {item}
                </li>
              ))}

              {/* ✅ FIXED CONTACT BUTTON */}
              <button
                className="
          w-full 
          box-border
          rounded-md 
          bg-blue-600 
          py-2 
          text-white 
          hover:bg-blue-700
        "
              >
                Contact
              </button>

            </ul>
          </div>
        )}


      </div>
    </header>
  )
}

export default ContactHeader
