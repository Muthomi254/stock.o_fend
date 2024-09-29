
'use client';

import { Footer } from 'flowbite-react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faFacebook,
  faTwitter,
  faLinkedin,
  faInstagram,
} from '@fortawesome/free-brands-svg-icons';

export default function FooterComponent() {
  return (
    <Footer container className=" bg-gray-900 py-8">
      <div className="w-full  sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between text-white space-y-6 md:space-y-0">
          {/* Footer Logo and Copyright */}
          <div className="text-center md:text-left">
            <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
              <img
                src="/stockoio.png"
                className="mr-5 h-24 sm:h-18"
                alt="Stocko Logo"
              />
            </span>{' '}
          </div>

          {/* Footer Links */}
          <div className="flex space-x-4 md:space-x-8 text-sm ">
            <Footer.Link
              href="#"
              className="flex space-x-4 md:space-x-8 text-sm hover:text-green-400 transition duration-300"
            >
              Back To Top
            </Footer.Link>
            <Footer.Link
              href="/About"
              className="flex space-x-4 md:space-x-8 text-sm hover:text-green-400 transition duration-300"
            >
              About
            </Footer.Link>
            <Footer.Link
              href="#"
              className="flex space-x-4 md:space-x-8 text-sm hover:text-green-400 transition duration-300"
            >
              Privacy Policy
            </Footer.Link>
            <Footer.Link
              href="#"
              className="flex space-x-4 md:space-x-8 text-sm hover:text-green-400 transition duration-300"
            >
              Licensing
            </Footer.Link>
            <Footer.Link
              href="/Contact"
              className="flex space-x-4 md:space-x-8 text-sm hover:text-green-400 transition duration-300"
            >
              Contact
            </Footer.Link>
          </div>

          {/* Social Media Links */}
          <div className="flex space-x-6">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon
                icon={faFacebook}
                className="text-white hover:text-green-400 transition duration-300 h-6 w-6"
              />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon
                icon={faTwitter}
                className="text-white hover:text-green-400 transition duration-300 h-6 w-6"
              />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon
                icon={faLinkedin}
                className="text-white hover:text-green-400 transition duration-300 h-6 w-6"
              />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon
                icon={faInstagram}
                className="text-white hover:text-green-400 transition duration-300 h-6 w-6"
              />
            </a>
          </div>
        </div>

        {/* Bottom Border */}
        <div className="border-t border-gray-700 mt-6 pt-6">
          <p className="text-center text-sm text-gray-500">
            © 2024 Stocko™. All rights reserved.
          </p>
        </div>
      </div>
    </Footer>
  );
}

