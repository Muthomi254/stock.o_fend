'use client';

import { Button, Label, TextInput } from 'flowbite-react';
import Link from 'next/link';

export default function ForgotPassword() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-12 bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-white transition-colors duration-500">
      <span className="text-3xl text-bold font-serif italic pb-5">
        Reset Password
      </span>

      <form className="flex max-w-md flex-col gap-4">
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
        <Button
          className="hover:bg-green-900 hover:dark:bg-green-500"
          type="submit"
        >
          Reset Password
        </Button>
        <div className="text-sm mt-2">
          <p className="text-gray-600 dark:text-gray-400">
            Don't have an account?{' '}
            <Link
              href="/register"
              className="text-cyan-600 hover:underline hover:dark:text-green-500  hover:text-green-900 dark:text-cyan-500"
            >
              Register here
            </Link>
          </p>
        </div>
      </form>
    </div>
  );
}
