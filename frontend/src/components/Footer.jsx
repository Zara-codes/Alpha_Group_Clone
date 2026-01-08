import { MdEmail, MdPhone, MdLocationOn } from "react-icons/md"
import React from "react"

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="mx-auto max-w-7xl px-6 py-12">

        {/* Grid */}
        <div className="grid gap-10 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">

          {/* Agencies */}
          <div>
            <h3 className="mb-4 text-lg font-semibold text-white">
              Agencies
            </h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-white">Alpha Technology</a></li>
              <li><a href="#" className="hover:text-white">Alpha Academy</a></li>
              <li><a href="#" className="hover:text-white">Alpha Bajar</a></li>
              <li><a href="#" className="hover:text-white">Alpha Domain</a></li>
              <li><a href="#" className="hover:text-white">Alpha Host</a></li>
              <li><a href="#" className="hover:text-white">Alpha Ric</a></li>
              <li><a href="#" className="hover:text-white">Alpha SMS</a></li>
              <li><a href="#" className="hover:text-white">eAlpha</a></li>
              <li><a href="#" className="hover:text-white">eAlpha</a></li>
              <li><a href="#" className="hover:text-white">eAlphaSoft</a></li>
            </ul>
          </div>

          {/* Our Services */}
          <div>
            <h3 className="mb-4 text-lg font-semibold text-white">
              Our Services
            </h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-white">App Development</a></li>
              <li><a href="#" className="hover:text-white">Bulk SMS Services</a></li>
              <li><a href="#" className="hover:text-white">Cloud Web Hosting</a></li>
              <li><a href="#" className="hover:text-white">Domain Registration</a></li>
              <li><a href="#" className="hover:text-white">Software Development</a></li>
              <li><a href="#" className="hover:text-white">SEO Optimization</a></li>
              <li><a href="#" className="hover:text-white">Technical Support</a></li>
              <li><a href="#" className="hover:text-white">Website Development</a></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="mb-4 text-lg font-semibold text-white">
              Company
            </h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-white">Whow We Are</a></li>
              <li><a href="#" className="hover:text-white">Our Story</a></li>
              <li><a href="#" className="hover:text-white">Leadership</a></li>
              <li><a href="#" className="hover:text-white">History</a></li>
              <li><a href="#" className="hover:text-white">Awards & Recognition</a></li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-4 text-lg font-semibold text-white">
              Quick Links
            </h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-white">Terms of Use</a></li>
              <li><a href="#" className="hover:text-white">Privacy Policy</a></li>
            </ul>
          </div>

          {/* Contact Us */}
          <div>
            <h3 className="mb-4 text-lg font-semibold text-white">
              Contact Us
            </h3>

            <ul className="space-y-4 text-sm text-gray-300">

              {/* Email */}
              <li className="flex items-start gap-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white">
                  <MdEmail className="text-lg text-blue-500" />
                </div>
                <div>
                  <p className="font-medium text-white">Email</p>
                  <p className="hover:text-white transition">
                    info@alpha.com.np
                  </p>
                </div>
              </li>

              {/* Phone */}
              <li className="flex items-start gap-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white">
                  <MdPhone className="text-lg text-blue-500" />
                </div>
                <div>
                  <p className="font-medium text-white">Phone</p>
                  <p className="hover:text-white transition">
                    +977 9876543210
                  </p>
                </div>
              </li>

              {/* Support */}
              <li className="flex items-start gap-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white">
                  <MdLocationOn className="text-lg text-blue-500" />
                </div>
                <div>
                  <p className="font-medium text-white">Support</p>
                  <p className="hover:text-white transition">
                    contact@alphadev.com
                  </p>
                </div>
              </li>

            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="mt-12 border-t border-gray-700 pt-6 text-center text-sm text-gray-400">
          © {new Date().getFullYear()} AlphaDev. All rights reserved.
        </div>

      </div>
    </footer>
  )
}

export default Footer
