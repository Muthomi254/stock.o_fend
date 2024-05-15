'use client';

import { Avatar, Dropdown, Navbar, DarkThemeToggle } from 'flowbite-react';

export default function Component() {
  return (
    <Navbar fluid rounded>
      <Navbar.Brand href="#">
        <img
          src="/stocko.png"
          className="mr-5 h-25 sm:h-16"
          alt="Stocko Logo"
        />
        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white"></span>
      </Navbar.Brand>

      <Navbar.Collapse className="text-green-600 dark:text-green-400">
        <Navbar.Link
          href="#"
          className="text-green-600 dark:text-green-400"
          // active
        >
          Home
        </Navbar.Link>
        <Navbar.Link href="#" className="text-green-600 dark:text-green-400">
          About
        </Navbar.Link>
        <Navbar.Link href="#" className="text-green-600 dark:text-green-400">
          Services
        </Navbar.Link>
        <Navbar.Link href="#" className="text-green-600 dark:text-green-400">
          Pricing
        </Navbar.Link>
        <Navbar.Link className="text-green-600 dark:text-green-400 ">
          <DarkThemeToggle />
        </Navbar.Link>
      </Navbar.Collapse>

      <div className="flex md:order-2">
        <Dropdown
          arrowIcon={false}
          inline
          label={
            <Avatar
              alt="User settings"
              img="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
              rounded
            />
          }
        >
          <Dropdown.Header>
            <span className="block text-sm">Bonnie Green</span>
            <span className="block truncate text-sm font-medium">
              name@flowbite.com
            </span>
          </Dropdown.Header>
          <Dropdown.Item>Dashboard</Dropdown.Item>
          <Dropdown.Item>Settings</Dropdown.Item>
          <Dropdown.Item>Theme</Dropdown.Item>
          <Dropdown.Divider />
          <Dropdown.Item>Sign out</Dropdown.Item>
        </Dropdown>
        <Navbar.Toggle />
      </div>
    </Navbar>
  );
}
