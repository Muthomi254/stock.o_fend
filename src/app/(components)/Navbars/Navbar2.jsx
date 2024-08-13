'use client';

import { Avatar, Dropdown, Navbar, DarkThemeToggle } from 'flowbite-react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faUser,
  faCog,
  faPalette,
  faSignOutAlt,
 } from '@fortawesome/free-solid-svg-icons';


export default function NavBar() {
  return (
    <Navbar>
      <Navbar.Brand href="/#">
        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
          <img
            src="/stockoio.png"
            className="mr-5 h-24 sm:h-18"
            alt="Stocko Logo"
          />
        </span>
      </Navbar.Brand>

      <Navbar.Collapse className="text-green-600 dark:text-green-400 font-bold">
        <Navbar.Link
          href="/Inventory"
          className="text-green-600 dark:text-green-400"
        >
          Inventory
        </Navbar.Link>

        <Navbar.Link
          href="/About"
          className="text-green-600 dark:text-green-400"
        >
          About
        </Navbar.Link>

        <Navbar.Link
          href="/Pricing"
          className="text-green-600 dark:text-green-400"
        >
          Pricing
        </Navbar.Link>
        <Navbar.Link
          href="/Contact"
          className="text-green-600 dark:text-green-400"
        >
          Contact Us
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
              // img="https://flowbite.com/docs/images/people/profile-picture-1.jpg"
              rounded
              status="online"
              statusPosition="bottom-right"
            />
          }
        >
          <Dropdown.Header>
            <span className="block text-sm">Bonnie Green</span>
            <span className="block truncate text-sm font-medium">
              name@stock.io
            </span>
          </Dropdown.Header>
          <Dropdown.Item>
            <FontAwesomeIcon icon={faUser} className="mr-2" />
            Dashboard
          </Dropdown.Item>
          <Dropdown.Item>
            <FontAwesomeIcon icon={faCog} className="mr-2" />
            Settings
          </Dropdown.Item>
          <Dropdown.Item>
            <FontAwesomeIcon icon={faPalette} className="mr-2" />
            Theme
          </Dropdown.Item>
          <Dropdown.Divider />
          <Dropdown.Item>
            <FontAwesomeIcon icon={faSignOutAlt} className="mr-2" />
            Sign out
          </Dropdown.Item>
        </Dropdown>
        <Navbar.Toggle />
      </div>
    </Navbar>
  );
}
