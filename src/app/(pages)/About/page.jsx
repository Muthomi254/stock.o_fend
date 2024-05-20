'use client';

import Link from 'next/link';
import { useEffect } from 'react';
import {
  InformationCircleIcon,
  UsersIcon,
  BriefcaseIcon,
  CheckCircleIcon,
} from '@heroicons/react/outline';
import { Avatar, Dropdown, Navbar, DarkThemeToggle } from 'flowbite-react';


export default function About() {
  useEffect(() => {
    // Optionally, add any JavaScript for animations or interactivity
  }, []);

  return (
    <div className="">
      <div className="flex flex-col items-center justify-center min-h-screen py-12 bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-white transition-colors duration-500">
        <header className="max-w-4xl mx-auto text-center py-12">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-pulse">
            About Stocko.io
          </h1>
          <p className="text-lg md:text-xl mb-10 animate-bounce">
            Your Trusted Partner in Inventory Management
          </p>
        </header>

        <section className="max-w-4xl mx-auto text-center mb-12">
          <h2 className="text-3xl font-semibold mb-8">Our Mission</h2>
          <p className="text-lg mb-8">
            At Stocko.io, our mission is to provide businesses with an
            intuitive, efficient, and reliable stock management solution. We
            believe in empowering businesses to operate smoothly and make
            informed decisions with real-time inventory data.
          </p>
        </section>

        <section className="max-w-4xl mx-auto text-center mb-12">
          <h2 className="text-3xl font-semibold mb-8">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <InfoCard
              icon={
                <InformationCircleIcon className="h-12 w-12 text-green-600 dark:text-green-400 mx-auto mb-4 animate-ping" />
              }
              title="Transparency"
              description="We believe in being transparent and honest with our clients."
            />
            <InfoCard
              icon={
                <UsersIcon className="h-12 w-12 text-green-600 dark:text-green-400 mx-auto mb-4 animate-wiggle" />
              }
              title="Customer Focus"
              description="Our clients are at the heart of everything we do."
            />
            <InfoCard
              icon={
                <BriefcaseIcon className="h-12 w-12 text-green-600 dark:text-green-400 mx-auto mb-4 animate-pulse" />
              }
              title="Professionalism"
              description="We maintain the highest standards of professionalism in our work."
            />
            <InfoCard
              icon={
                <CheckCircleIcon className="h-12 w-12 text-green-600 dark:text-green-400 mx-auto mb-4 animate-spin" />
              }
              title="Reliability"
              description="You can count on us to deliver what we promise."
            />
          </div>
        </section>

        <section className="max-w-4xl mx-auto text-center mb-12">
          <h2 className="text-3xl font-semibold mb-8">Our Team</h2>
          <p className="text-lg mb-8">
            Our team is composed of dedicated professionals with extensive
            experience in technology and business management. We are passionate
            about helping businesses thrive through effective inventory
            management solutions.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <TeamMember
              name="Alice Johnson"
              role="CEO"
              description="Alice has over 20 years of experience in the tech industry and is the visionary behind Stocko.io."
              image="https://via.placeholder.com/150" // Replace with actual image URL
            />
            <TeamMember
              name="Bob Smith"
              role="CTO"
              description="Bob is a tech genius with a passion for creating scalable solutions."
              image="https://via.placeholder.com/150" // Replace with actual image URL
            />
            <TeamMember
              name="Catherine Lee"
              role="COO"
              description="Catherine ensures our operations run smoothly and efficiently."
              image="https://flowbite.com/docs/images/people/profile-picture-1.jpg" // Replace with actual image URL
            />
            </div>
         
        </section>

        <section className="max-w-4xl mx-auto text-center py-12">
          <h2 className="text-3xl font-semibold mb-8">Join Us</h2>
          <p className="text-lg mb-8">
            Become a part of our journey and see how Stocko.io can revolutionize
            your business.
          </p>
          <Link href="/register">
            <button className="px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-900 transition-colors duration-300 animate-bounce hover:animate-pulse">
              Sign Up Now
            </button>
          </Link>
        </section>
      </div>
    </div>
  );
}

function InfoCard({ icon, title, description }) {
  return (
    <div className="p-6 bg-white dark:bg-gray-800 shadow-lg rounded-lg transition-transform transform hover:scale-105 hover:shadow-2xl">
      <div className="h-12 w-12 mx-auto mb-4">{icon}</div>
      <h3 className="text-xl font-semibold mt-4 mb-2">{title}</h3>
      <p className="text-gray-700 dark:text-gray-300">{description}</p>
    </div>
  );
}

function TeamMember({ name, role, description }) {
  return (
    <div className="p-6 bg-white dark:bg-gray-800 shadow-lg rounded-lg transition-transform transform hover:scale-105 hover:shadow-2xl">
      <h3 className="text-xl font-semibold mb-2">{name}</h3>
      <p className="text-green-600 dark:text-green-400 mb-4">{role}</p>
      <p className="text-gray-700 dark:text-gray-300">{description}</p>
    </div>
  );
}
