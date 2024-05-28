"use client";

import { useEffect, useState } from 'react';
import {
  faBox,
  faUndo,
  faTruck,
  faShareSquare,
  faSpinner,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

export default function Inventory() {
  const [loading, setLoading] = useState(false);
  const router = useRouter();

 useEffect(() => {
   const handleRouteChange = () => setLoading(false);

   handleRouteChange();
 }, [router]);

 const handleClick = () => {
   setLoading(true);
 };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-12 bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-white transition-colors duration-500">
      {loading && (
        <div className="absolute inset-0 flex items-center justify-center bg-gray-100  dark:bg-transparent-100 bg-opacity-75 z-50">
          <FontAwesomeIcon
            icon={faSpinner}
            className="h-16 w-16 text-green-600 dark:text-green-400 animate-spin"
          />
        </div>
      )}
      <section className="max-w-4xl mx-auto text-center mb-12">
        <h2 className="text-3xl font-semibold mb-8">Product Overview</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Link href="/Inventory/ProductTable">
                        <div onClick={handleClick}>
            <ProductCard
              icon={
                <FontAwesomeIcon
                  icon={faBox}
                  className="h-12 w-12 text-green-600 dark:text-green-400 mx-auto mb-4 animate-bounce"
                />
              }
              title="Received Inventory"
              description="View and manage received inventory items."
            />
            </div>          

          </Link>
          <Link href="/Inventory/ReturnTable">
                        <div onClick={handleClick}>
            <ProductCard
              icon={
                <FontAwesomeIcon
                  icon={faUndo}
                  className="h-12 w-12 text-green-600 dark:text-green-400 mx-auto mb-4 animate-spin"
                />
              }
              title="Returns"
              description="Handle returns and refunds efficiently."
            />
                      </div>          

          </Link>

          <Link href="/Inventory/SupplierTable">
                        <div onClick={handleClick}>
            <ProductCard
              icon={
                <FontAwesomeIcon
                  icon={faTruck}
                  className="h-12 w-12 text-green-600 dark:text-green-400 mx-auto mb-4 animate-wiggle"
                />
              }
              title="Suppliers"
              description="Manage relationships with suppliers and vendors."
            />
                      </div>          

          </Link>
                    <Link href="">

            <div onClick={handleClick}>
          <ProductCard
            icon={
              <FontAwesomeIcon
                icon={faShareSquare}
                className="h-12 w-12 text-green-600 dark:text-green-400 mx-auto mb-4 animate-pulse"
              />
            }
            title="Dispatch"
            description="Coordinate dispatches and deliveries."
          />
          </div>
          </Link>
        </div>
      </section>

      {/* Rest of the content */}
    </div>
  );
  function ProductCard({ icon, title, description }) {
    return (
      <div className="p-6 bg-white dark:bg-gray-800 shadow-lg rounded-lg transition-transform transform hover:scale-105 hover:shadow-2xl">
        <div className="h-12 w-12 mx-auto mb-4">{icon}</div>
        <h3 className="text-xl font-semibold mt-4 mb-2">{title}</h3>
        <p className="text-gray-700 dark:text-gray-300">{description}</p>
      </div>
    );
  }
}