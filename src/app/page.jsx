"use client";

import Link from 'next/link';

import { useEffect, useState } from 'react';
import {
  ChartBarIcon,
  ClipboardCheckIcon,
  CloudUploadIcon,
  UserGroupIcon,
  CheckCircleIcon,
  ShieldCheckIcon,
  SupportIcon,
  TrendingUpIcon,
  LightningBoltIcon,
} from '@heroicons/react/outline';

export default function Home() {
  useEffect(() => {
    // Optionally, add any JavaScript for animations or interactivity
  }, []);

  return (
    <div className="bg-white dark:bg-gray-900">
      <div className="flex flex-col items-center justify-center min-h-screen py-12 bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-white transition-colors duration-500">
        <header className="max-w-4xl mx-auto text-center py-12 ">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-pulse">
            Welcome to Stocko.io
          </h1>

          <p className="text-lg md:text-xl mb-10 animate-bounce">
            Effortless Stock Management for Your Business
          </p>

          <Link href="/login">
            <button className="  px-4 py-3 bg-green-600 text-white rounded-lg hover:bg-green-900 transition-colors duration-300 animate-bounce">
              Login
            </button>
          </Link>
        </header>

        <section className="max-w-4xl mx-auto text-center mb-12">
          <h2 className="text-3xl font-semibold mb-8">Key Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <FeatureCard
              icon={
                <ChartBarIcon className="h-12 w-12 text-green-600 dark:text-green-400 mx-auto mb-4 animate-wiggle" />
              }
              title="Track Inventory"
              description="Monitor stock levels in real-time."
            />
            <FeatureCard
              icon={
                <ClipboardCheckIcon className="h-12 w-12 text-green-600 dark:text-green-400 mx-auto mb-4 animate-pulse" />
              }
              title="Manage Orders"
              description="Keep track of orders efficiently."
            />
            <FeatureCard
              icon={
                <CloudUploadIcon className="h-12 w-12 text-green-600 dark:text-green-400 mx-auto mb-4 animate-ping" />
              }
              title="Sync Data"
              description="Seamless integration with your system."
            />
          </div>
        </section>

        <section className="max-w-4xl mx-auto text-center mb-12">
          <h2 className="text-3xl font-semibold mb-8">Why Choose Us</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <InfoCard
              icon={
                <UserGroupIcon className="h-12 w-12 text-green-600 dark:text-green-400 mx-auto mb-4 animate-wiggle" />
              }
              title="User Friendly"
              description="Designed with simplicity and ease of use in mind."
            />
            <InfoCard
              icon={
                <CheckCircleIcon className="h-12 w-12 text-green-600 dark:text-green-400 mx-auto mb-4 animate-spin" />
              }
              title="Reliable"
              description="Our system ensures your data is always accurate and up-to-date."
            />
            <InfoCard
              icon={
                <ShieldCheckIcon className="h-12 w-12 text-green-600 dark:text-green-400 mx-auto mb-4 animate-pulse" />
              }
              title="Secure"
              description="Your data is protected with top-notch security measures."
            />
            <InfoCard
              icon={
                <SupportIcon className="h-12 w-12 text-green-600 dark:text-green-400 mx-auto mb-4 animate-ping" />
              }
              title="24/7 Support"
              description="We offer round-the-clock support for all your needs."
            />
            <InfoCard
              icon={
                <TrendingUpIcon className="h-12 w-12 text-green-600 dark:text-green-400 mx-auto mb-4 animate-wiggle" />
              }
              title="Scalable"
              description="Our system grows with your business."
            />

            <InfoCard
              icon={
                <LightningBoltIcon className="h-12 w-12 text-green-600 dark:text-green-400 mx-auto mb-4 animate-ping" />
              }
              title="High Performance"
              description="Experience lightning-fast performance with our system."
            />
          </div>
        </section>

        <section className="max-w-4xl mx-auto text-center mb-12">
          <h2 className="text-3xl font-semibold mb-8">Testimonials</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 animate-pulse">
            <Testimonial
              quote="Stocko has transformed the way we manage our inventory. It's efficient and easy to use!"
              author="Jane Doe, Store Manager"
            />
            <Testimonial
              quote="With Stocko, we can track our stock levels in real-time, which helps us make better decisions."
              author="John Smith, Business Owner"
            />
          </div>
        </section>

        <section className="max-w-4xl mx-auto text-center py-12">
          <h2 className="text-3xl font-semibold mb-8">Get Started Today</h2>
          <p className="text-lg mb-8">
            Join thousands of businesses using Stocko for their inventory
            management.
          </p>
          <Link href="/register">
            <button className="px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-900 transition-colors duration-300 animate-bounce">
              Sign Up Now
            </button>
          </Link>
        </section>
      </div>
    </div>
  );
}

function FeatureCard({ icon, title, description }) {
  return (
    <div className="p-6 bg-white dark:bg-gray-800 shadow-lg rounded-lg transition-transform transform hover:scale-105 hover:shadow-2xl">
      <div className="h-12 w-12 mx-auto mb-4">{icon}</div>
      <h3 className="text-xl font-semibold mt-4 mb-2">{title}</h3>
      <p className="text-gray-700 dark:text-gray-300">{description}</p>
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

function Testimonial({ quote, author }) {
  return (
    <div className="p-6 bg-white dark:bg-gray-800 shadow-lg rounded-lg transition-transform transform hover:scale-105 hover:shadow-2xl">
      <p className="text-lg italic mb-4">&quot;{quote}&quot;</p>
      <p className="font-semibold">{author}</p>
    </div>
  );
}
