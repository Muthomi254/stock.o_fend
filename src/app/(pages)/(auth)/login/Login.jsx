'use client';

import React, { useState } from 'react';
import { Button, Checkbox, Label, TextInput } from 'flowbite-react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import toast from 'react-hot-toast';


export default function LoginForm() {

const router = useRouter();
const [loading, setLoading] = useState(false);

const handleSubmit = async (e) => {
  e.preventDefault();
  setLoading(true); // Set loading state to true during form submission
 
 // Use toast.promise to handle loading state and toast notifications
    await toast.promise(
      submitForm(), // Example function for form submission
      {
        loading: 'Logging in...', // Display loading message
        success: () => {
          router.push('/HomePage'); // Redirect to ProductTable page on success
          return toast('Good Job! Login Successful', {
            icon: '👏',
          });; // Return success message
        },
        error: (error) => {
          console.error('Form submission error:', error);
          return toast.error('Error while Login. Please try again later.');
; // Return error message
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
      <span className="text-3xl text-bold font-serif italic pb-5">Login</span>

      <form className="flex max-w-lg flex-col gap-4" onSubmit={handleSubmit}>
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
        <div>
          <div className="mb-2 block">
            <Label htmlFor="password" value="Your password" />
          </div>
          <TextInput
            id="password"
            type="password"
            placeholder="•••••••••"
            required
            shadow
          />
        </div>
        <div className="text-sm mt-2">
          <p className="text-gray-600 text-sm dark:text-gray-400">
            Forgot Password?{' '}
            <Link
              href="/forgotPassword"
              className="text-cyan-600 text-sm hover:underline hover:dark:text-green-500 hover:text-green-900 dark:text-cyan-500"
            >
              Reset here
            </Link>
          </p>
        </div>
        <div className="flex items-center gap-2">
          <Checkbox id="remember" />
          <Label htmlFor="remember" className="flex">
            Remember me
          </Label>
        </div>

        <button
          className="text-white bg-green-500 hover:bg-green-600 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-green-400 dark:hover:bg-green-500 dark:focus:ring-green-700"
          type="submit"
          disabled={loading} // Disable button during form submission
        >
          {loading ? 'Logging...' : 'Login'}{' '}
        </button>
        <div className="text-sm mt-2">
          <p className="text-green-600 dark:text-gray-400">
            <span className="text-gray-800 dark:text-gray-500"> Don't have an account?</span>
            <Link
              href="/register"
              className="text-green-600 hover:underline hover:dark:text-green-400 hover:text-green-800 dark:text-green-500"
            >
              Register here
            </Link>
          </p>
        </div>
      </form>
    </div>
  );
}
