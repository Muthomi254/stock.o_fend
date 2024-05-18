'use client';

import { Button, Checkbox, Label, TextInput } from 'flowbite-react';
import Link from 'next/link';
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import toast from 'react-hot-toast';

export default function RegistrationForm() {

const router = useRouter();
const [loading, setLoading] = useState(false);


const handleSubmit = async (e) => {
  e.preventDefault();
  setLoading(true); // Set loading state to true during form submission

  // Use toast.promise to handle loading state and toast notifications
  await toast.promise(
    submitForm(), // Example function for form submission
    {
      loading: 'Registering...', // Display loading message
      success: () => {
        router.push('/login'); // Redirect to ProductTable page on success
        return toast('Good Job! Registration is Successful!', {
          icon: '👏',
        }); // Return success message
      },
      error: (error) => {
        console.error('Form submission error:', error);
        return toast.error('Error while Registering. Please try again later.'); // Return error message
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
        Registration
      </span>

      <form className="flex max-w-md flex-col gap-4 " onSubmit={handleSubmit}>
        <div>
          <div className="flex space-x-4">
            <div className="flex flex-col">
              <div className="mb-2 block">
                <Label htmlFor="firstName" value="First Name" />
              </div>
              <TextInput
                id="firstName"
                type="text"
                placeholder="Enter your First Name"
                required
                shadow
              />
            </div>
            <div className="flex flex-col">
              <div className="mb-2 block">
                <Label htmlFor="secondName" value="Second Name" />
              </div>
              <TextInput
                id="secondName"
                type="text"
                placeholder="Enter your Second Name"
                required
                shadow
              />
            </div>
          </div>
          <div className="flex flex-col">
            <div className="mb-2 block">
              <Label htmlFor="role" value="Role" />
            </div>
            <select
              id="role"
              className="shadow appearance-none border rounded w-full py-2 px-3 dartext-white dark:bg-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              required
            >
              <option defaultValue="" disabled selected>
                Select your role
              </option>
              <option defaultValue="admin">Admin</option>
              <option defaultValue="supervisor">Supervisor</option>
              <option defaultValue="Cashier">Cashier</option>
            </select>
          </div>

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
        <div>
          <div className="mb-2 block">
            <Label htmlFor="repeat-password" value="Repeat password" />
          </div>
          <TextInput
            id="repeat-password"
            type="password"
            placeholder="•••••••••"
            required
            shadow
          />
        </div>

        <div className="flex items-center gap-2">
          <Checkbox id="agree" />
          <Label htmlFor="agree" className="flex">
            I agree with the&nbsp;
            <Link
              href="#"
              className="text-green-600 hover:underline dark:text-green-500"
            >
              terms and conditions
            </Link>
          </Label>
        </div>
        <button
          className="text-white bg-green-500 hover:bg-green-600 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-green-400 dark:hover:bg-green-500 dark:focus:ring-green-700"
          type="submit"
          disabled={loading}
        >
          {loading ? 'Registering...' : 'Register new account'}
        </button>
        <div className="text-sm mt-2">
          <p className="text-gray-600 dark:text-gray-400">
            Already have an account?
            <Link
              href="/login"
              className="text-green-600 hover:underline hover:dark:text-green-400 hover:text-green-800 dark:text-green-500 ml-2"
            >
              LOGIN HERE
            </Link>
          </p>
        </div>
      </form>
    </div>
  );
}
