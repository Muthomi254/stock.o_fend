'use client';

import Link from 'next/link';
import { useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCheck,
  faChartLine,
  faShieldAlt,
  faHeadset,
} from '@fortawesome/free-solid-svg-icons';

export default function Pricing() {
  useEffect(() => {
    // Optionally, add any JavaScript for animations or interactivity
  }, []);

  return (
    <div className="">
      <div className="flex flex-col items-center justify-center min-h-screen py-12 bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-white transition-colors duration-500">
        <header className="max-w-4xl mx-auto text-center py-12">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-pulse">
            Pricing Plans
          </h1>
          <p className="text-lg md:text-xl mb-10 animate-bounce">
            Choose the plan that suits your business needs.
          </p>
        </header>

        <section className="max-w-4xl mx-auto text-center mb-12">
          <h2 className="text-3xl font-semibold mb-8">Our Plans</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <PricingCard
              title="Basic"
              price="$19"
              description="Perfect for small businesses just starting out."
              features={[
                { icon: faCheck, text: 'Track Inventory' },
                { icon: faCheck, text: 'Manage Orders' },
                { icon: faHeadset, text: 'Basic Support' },
              ]}
            />
            <PricingCard
              title="Pro"
              price="$49"
              description="Ideal for growing businesses that need more features."
              features={[
                { icon: faCheck, text: 'Track Inventory' },
                { icon: faCheck, text: 'Manage Orders' },
                { icon: faChartLine, text: 'Sync Data' },
                { icon: faHeadset, text: 'Priority Support' },
              ]}
              highlight
            />
            <PricingCard
              title="Enterprise"
              price="$99"
              description="For large businesses with advanced needs."
              features={[
                { icon: faCheck, text: 'Track Inventory' },
                { icon: faCheck, text: 'Manage Orders' },
                { icon: faChartLine, text: 'Sync Data' },
                { icon: faHeadset, text: '24/7 Support' },
                { icon: faShieldAlt, text: 'Custom Solutions' },
              ]}
            />
          </div>
        </section>

        <section className="max-w-4xl mx-auto text-center py-12">
          <h2 className="text-3xl font-semibold mb-8">
            Need More Information?
          </h2>
          <p className="text-lg mb-8">
            Contact our sales team to find the best plan for your business.
          </p>
          <Link href="/Contact">
            <button className="px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-900 transition-colors duration-300 animate-bounce hover:animate-pulse">
              Contact Us
            </button>
          </Link>
        </section>
      </div>
    </div>
  );
}

function PricingCard({ title, price, description, features, highlight }) {
  return (
    <div
      className={`p-6 bg-white dark:bg-gray-800 shadow-lg rounded-lg transition-transform transform hover:scale-105 hover:shadow-2xl ${
        highlight ? 'border-4 border-green-600 dark:border-green-400' : ''
      }`}
    >
      <h3 className="text-2xl font-semibold mb-4">{title}</h3>
      <div className="text-3xl font-bold mb-4">{price}</div>
      <p className="text-gray-700 dark:text-gray-300 mb-4">{description}</p>
      <ul className="text-left mb-6">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center mb-2">
            <FontAwesomeIcon
              icon={feature.icon}
              className="h-6 w-6 text-green-600 dark:text-green-400 mr-2"
            />
            <span>{feature.text}</span>
          </li>
        ))}
      </ul>
      <button className="w-full px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-900 transition-colors duration-300">
        Choose Plan
      </button>
    </div>
  );
}
