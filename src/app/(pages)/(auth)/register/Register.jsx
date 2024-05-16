'use client';

import { Button, Checkbox, Label, TextInput } from 'flowbite-react';
import Link from 'next/link';

export default function RegistrationForm() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-12 bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-white transition-colors duration-500">
      <span className="text-3xl text-bold font-serif italic pb-5">
        Registration
      </span>

      <form className="flex max-w-md flex-col gap-4">
        <div>
          <div>
            <div className="mb-2 block">
              <Label htmlFor="username" value="Business Name" />
            </div>
            <TextInput
              id="username"
              type="text"
              placeholder="Enter your username"
              required
              shadow
            />
            <p className="mt-2 text-sm text-green-600 dark:text-green-500">
              <span className="font-medium">Available!</span> This username is
              ready to use.
            </p>
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
              className="text-cyan-600 hover:underline dark:text-cyan-500"
            >
              terms and conditions
            </Link>
          </Label>
        </div>
        <Button className="hover:bg-green-900" type="submit">
          Register new account
        </Button>
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
