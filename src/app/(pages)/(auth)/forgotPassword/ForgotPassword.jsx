'use client';

import { Button, Label, TextInput } from 'flowbite-react';
import Link from 'next/link';
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import toast from 'react-hot-toast';

export default function ForgotPassword() {

const router = useRouter();
const [loading, setLoading] = useState(false);

const handleSubmit = async (e) => {
  e.preventDefault();
  setLoading(true); // Set loading state to true during form submission

  // Use toast.promise to handle loading state and toast notifications
  await toast.promise(
    submitForm(), // Example function for form submission
    {
      loading: 'Resetting...', // Display loading message
      success: () => {
        router.push('/login'); // Redirect to ProductTable page on success
        return toast('Good Job! Password Reset is Successful!', {
          icon: '👏',
        }); // Return success message
      },
      error: (error) => {
        console.error('Form submission error:', error);
        return toast.error('Error while Resetting Password. Please try again later.'); // Return error message
      },
    }
  );

  setLoading(false); // Set loading state to false after form submission completes
};

const submitForm = async () => {
  // Simulate form submission function
  // Replace this with your actual form submission logic
  // For demonstration purposes, add a delay using setTimeout
  return new Promise((resolve) => {
    setTimeout(() => {
      // Assume form submission is successful
      resolve();
    }, 1000); // Simulate 1 second delay
  });
};

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-12 bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-white transition-colors duration-500">
      <span className="text-3xl text-bold font-serif italic pb-5">
        Reset Password
      </span>

      <form className="flex max-w-md flex-col gap-4" onSubmit={handleSubmit}>
        <div>
          <div>
            <div className="mb-2 block">
              <Label htmlFor="email" value="Your email" />
            </div>
            <TextInput
              id="email"
              type="email"
              placeholder="name@email.com"
              required
              shadow
            />
          </div>
          <div className="mb-2 block">
            <Label htmlFor="password" value="New Password" />
          </div>
          <TextInput
            id="password"
            type="password"
            placeholder="•••••••••"
            required
            shadow
          />
        </div>
        <div>
          <div className="mb-2 block">
            <Label htmlFor="confirm-password" value="Confirm Password" />
          </div>
          <TextInput
            id="confirm-password"
            type="password"
            placeholder="•••••••••"
            required
            shadow
          />
        </div>

        <button
          className="text-white bg-green-500 hover:bg-green-600 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-green-400 dark:hover:bg-green-500 dark:focus:ring-green-700"
          type="submit"
          disabled={loading}
        >
          {loading ? 'Resetting...' : 'Reset new Password'}
        </button>
        <div className="text-sm mt-2">
          <p className="text-gray-600 dark:text-gray-400">
            Don&#39;t have an account?{' '}
            <Link
              href="/register"
              className="text-green-600 hover:underline hover:dark:text-green-400  hover:text-green-800 dark:text-green-500"
            >
              Register here
            </Link>
          </p>
        </div>
      </form>
    </div>
  );
}
