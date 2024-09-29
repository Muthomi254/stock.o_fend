'use client';

import Link from 'next/link';
import { useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faEnvelope,
  faPhone,
  faMapMarkerAlt,
} from '@fortawesome/free-solid-svg-icons';
import {
  faFacebook,
  faTwitter,
  faLinkedin,
  faInstagram,
} from '@fortawesome/free-brands-svg-icons';

export default function Contact() {
  useEffect(() => {
    // Optionally, add any JavaScript for animations or interactivity
  }, []);

  return (
    <div className="">
      <div className="flex flex-col items-center justify-center min-h-screen py-12 bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-white transition-colors duration-500">
        <header className="max-w-4xl mx-auto text-center py-12">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-pulse">
            Contact Us
          </h1>
          <p className="text-lg md:text-xl mb-10 animate-bounce">
            We&#39;d love to hear from you. Get in touch with us!
          </p>
        </header>

        <section className="max-w-4xl mx-auto text-center mb-12">
          <h2 className="text-3xl font-semibold mb-8">Get In Touch</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <ContactInfo
              icon={
                <FontAwesomeIcon
                  icon={faEnvelope}
                  className="h-12 w-12 text-green-600 dark:text-green-400 mx-auto mb-4 animate-wiggle"
                />
              }
              title="Email"
              description="contact@stocko.io"
            />
            <ContactInfo
              icon={
                <FontAwesomeIcon
                  icon={faPhone}
                  className="h-12 w-12 text-green-600 dark:text-green-400 mx-auto mb-4 animate-pulse"
                />
              }
              title="Phone"
              description="+1 (234) 567-890"
            />
            <ContactInfo
              icon={
                <FontAwesomeIcon
                  icon={faMapMarkerAlt}
                  className="h-12 w-12 text-green-600 dark:text-green-400 mx-auto mb-4 animate-ping"
                />
              }
              title="Address"
              description="1234 Stocko Lane, Business City, 56789"
            />
          </div>

          <form className="max-w-2xl mx-auto text-left bg-white dark:bg-gray-800 p-8 shadow-lg rounded-lg">
            <div className="mb-4">
              <label className="block text-sm font-medium mb-2" htmlFor="name">
                Name
              </label>
              <input
                className="w-full px-4 py-2 border border-gray-300 rounded-md dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                type="text"
                id="name"
                name="name"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium mb-2" htmlFor="email">
                Email
              </label>
              <input
                className="w-full px-4 py-2 border border-gray-300 rounded-md dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                type="email"
                id="email"
                name="email"
                required
              />
            </div>
            <div className="mb-4">
              <label
                className="block text-sm font-medium mb-2"
                htmlFor="message"
              >
                Message
              </label>
              <textarea
                className="w-full px-4 py-2 border border-gray-300 rounded-md dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                id="message"
                name="message"
                rows="5"
                required
              ></textarea>
            </div>
            <button
              className="w-full px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-900 transition-colors duration-300"
              type="submit"
            >
              Send Message
            </button>
          </form>
        </section>

        <section className="max-w-4xl mx-auto text-center py-12">
          <h2 className="text-3xl font-semibold mb-8">Follow Us</h2>
          <div className="flex justify-center space-x-8 mb-8">
            <SocialMediaIcon
              href="https://facebook.com"
              icon={
                <FontAwesomeIcon
                  icon={faFacebook}
                  className="h-8 w-8 text-green-600 dark:text-green-400 animate-wiggle hover:animate-pulse"
                />
              }
            />
            <SocialMediaIcon
              href="https://twitter.com"
              icon={
                <FontAwesomeIcon
                  icon={faTwitter}
                  className="h-8 w-8 text-green-600 dark:text-green-400  animate-wiggle"
                />
              }
            />
            <SocialMediaIcon
              href="https://linkedin.com"
              icon={
                <FontAwesomeIcon
                  icon={faLinkedin}
                  className="h-8 w-8 text-green-600 dark:text-green-400 hover:animate-wiggle"
                />
              }
            />
            <SocialMediaIcon
              href="https://instagram.com"
              icon={
                <FontAwesomeIcon
                  icon={faInstagram}
                  className="h-8 w-8 text-green-600 dark:text-green-400 hover:animate-wiggle"
                />
              }
            />
          </div>
        </section>
      </div>
    </div>
  );
}

function ContactInfo({ icon, title, description }) {
  return (
    <div className="p-6 bg-white dark:bg-gray-800 shadow-lg rounded-lg transition-transform transform hover:scale-105 hover:shadow-2xl">
      <div className="h-12 w-12 mx-auto mb-4">{icon}</div>
      <h3 className="text-xl font-semibold mt-4 mb-2">{title}</h3>
      <p className="text-gray-700 dark:text-gray-300">{description}</p>
    </div>
  );
}

function SocialMediaIcon({ href, icon }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="transition-transform transform hover:scale-110"
    >
      {icon}
    </a>
  );
}
