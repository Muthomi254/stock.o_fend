'use client';

import React, { useState } from 'react';
import Link from 'next/link';

export default function HomePage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-green-50 text-gray-900">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-gray-600 mb-4 animate-pulse">
          Start Your Business Today
        </h1>
        <p className="text-lg text-gray-700 mb-8 ">
          Turn your ideas into reality and take the first step towards building
          your own business.
        </p>
        <Link href={'/BusinessForm'}>
          <button className="bg-green-600 hover:bg-green-800 animate-bounce text-white font-semibold py-3 px-6 rounded-lg shadow-lg transition duration-300">
            Create Your Business
          </button>
        </Link>
      </div>
    </div>
  );
}
